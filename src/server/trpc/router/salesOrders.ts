import { t } from "src/server/trpc/trpc";
import { z } from "zod";

export const salesOrdersRouter = t.router({
  getUserOrders: t.procedure.query(({ ctx }) => {
    return ctx.prisma.salesOrder.findMany({
      where: {
        user: {
          id: ctx.token?.sub,
        },
      },
    });
  }),
  upsertUserOrder: t.procedure
    .input(
      z.object({
        id: z.string().optional(),
        orderDetails: z.object({
          ceilidhQty: z.number().optional(),
          concertQty: z.number().optional(),
          dinnerQty: z.number().optional(),
          dinnerFirstNames: z.array(z.string()).optional(),
          dinnerLastNames: z.array(z.string()).optional(),
          donationValue: z.number().optional(),
          specialReqs: z.string().optional(),
          seatingReqs: z.string().optional(),
        }),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (input.id) {
        const existingOwnedOrder = await ctx.prisma.salesOrder.findFirst({
          where: {
            id: input.id,
            user: { id: ctx.token?.sub },
          },
        });
        if (existingOwnedOrder === null) return null;
        return ctx.prisma.salesOrder.update({
          where: {
            id: input.id,
          },
          data: {
            orderDetails: input.orderDetails,
          },
        });
      }
      return ctx.prisma.salesOrder.create({
        data: {
          orderDetails: input.orderDetails,
          user: { connect: { id: ctx.token?.sub } },
        },
      });
    }),
});
