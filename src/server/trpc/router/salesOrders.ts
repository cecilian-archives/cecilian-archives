import { t } from "src/server/trpc/trpc";
import { z } from "zod";

import createCheckout from "src/server/checkout/createCheckout";

const orderDetailsDef = z.object({
  ceilidhQty: z.number().optional(),
  concertQty: z.number().optional(),
  dinnerQty: z.number().optional(),
  dinnerFirstNames: z.array(z.string()).optional(),
  dinnerLastNames: z.array(z.string()).optional(),
  donationValue: z.number().optional(),
  specialReqs: z.string().optional(),
  seatingReqs: z.string().optional(),
});

export type OrderDetails = z.infer<typeof orderDetailsDef>;

export const salesOrdersRouter = t.router({
  getUserOrders: t.procedure.query(({ ctx }) => {
    return ctx.prisma.salesOrder.findMany({
      where: {
        user: {
          id: ctx.token?.sub,
        },
        checkoutSession: {
          path: ["expires_at"],
          gte: Date.now() / 1000,
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }),
  getUserOrder: t.procedure.input(z.string()).query(({ input, ctx }) => {
    return ctx.prisma.salesOrder.findFirst({
      where: {
        id: input,
        user: {
          id: ctx.token?.sub,
        },
        checkoutSession: {
          path: ["expires_at"],
          gte: Date.now() / 1000,
        },
      },
    });
  }),
  upsertUserOrder: t.procedure
    .input(
      z.object({
        id: z.string().optional(),
        orderDetails: orderDetailsDef,
      })
    )
    .mutation(async ({ input, ctx }) => {
      let order;
      if (input.id) {
        order = await ctx.prisma.salesOrder.findFirst({
          where: {
            id: input.id,
            user: { id: ctx.token?.sub },
          },
          include: { user: true },
        });
        if (order === null) return null;
        if (order.paymentConfirmed) return null;
        order = await ctx.prisma.salesOrder.update({
          where: {
            id: input.id,
          },
          data: {
            orderDetails: input.orderDetails,
          },
          include: { user: true },
        });
      } else {
        order = await ctx.prisma.salesOrder.create({
          data: {
            orderDetails: input.orderDetails,
            user: { connect: { id: ctx.token?.sub } },
          },
          include: { user: true },
        });
      }

      const session = await createCheckout({ order });
      return ctx.prisma.salesOrder.update({
        where: {
          id: order.id,
        },
        data: {
          checkoutSession: !session
            ? undefined
            : {
                url: session.url,
                expires_at: session.expires_at,
              },
        },
      });
    }),
});
