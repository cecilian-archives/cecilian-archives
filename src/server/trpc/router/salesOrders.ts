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
        OR: [
          { paymentConfirmed: true },
          {
            checkoutSession: {
              path: ["expires_at"],
              gte: Date.now() / 1000,
            },
          },
        ],
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
  getAllAttendeeNames: t.procedure.query(async ({ ctx }) => {
    const nestedAttendees = await ctx.prisma.salesOrder.findMany({
      where: {
        paymentConfirmed: true,
      },
      select: {
        user: {
          select: {
            profile: {
              select: {
                id: true,
                title: true,
                firstNames: true,
                lastNames: true,
                otherNames: true,
              },
            },
          },
        },
        orderDetails: true,
      },
      orderBy: [
        { user: { profile: { firstNames: "asc" } } },
        { user: { profile: { lastNames: "asc" } } },
      ],
    });

    type attendee = {
      id?: string;
      title?: string | null;
      firstNames?: string | null;
      lastNames?: string | null;
      otherNames?: string | null;
      plus?: number;
    };
    let seenProfileIds: string[] = [];
    return nestedAttendees.reduce<attendee[]>((acc, attendee) => {
      const profile = attendee.user.profile;
      const { ceilidhQty, concertQty, dinnerQty } = attendee.orderDetails as OrderDetails;
      const largestQty = Math.max(ceilidhQty || 0, concertQty || 0, dinnerQty || 0);

      if (seenProfileIds.includes(profile?.id as string)) {
        const retVal = acc.find((attendee) => attendee?.id === profile?.id);
        if (retVal) retVal.plus = (retVal?.plus || 0) + largestQty;
        return acc;
      } else {
        seenProfileIds.push(profile?.id || "");
        return [
          ...acc,
          {
            id: profile?.id,
            title: profile?.title,
            firstNames: profile?.firstNames,
            lastNames: profile?.lastNames,
            otherNames: profile?.otherNames,
            plus: largestQty - 1,
          },
        ];
      }
    }, []);
  }),
  getDoorLists: t.procedure.query(async ({ ctx }) => {
    const nestedAttendees = await ctx.prisma.salesOrder.findMany({
      where: {
        paymentConfirmed: true,
      },
      select: {
        id: true,
        user: {
          select: {
            profile: {
              select: {
                id: true,
                title: true,
                firstNames: true,
                lastNames: true,
                otherNames: true,
              },
            },
          },
        },
        orderDetails: true,
        createdAt: true,
      },
      orderBy: [{ createdAt: "desc" }],
    });
    const orderList = nestedAttendees.map((order) => {
      const { title, firstNames, lastNames, otherNames } = order.user.profile || {};
      const name = `${title ? `${title} ` : ""}${firstNames} ${lastNames}`;
      const {
        ceilidhQty,
        concertQty,
        dinnerQty,
        dinnerFirstNames,
        dinnerLastNames,
        specialReqs,
        seatingReqs,
      } = order.orderDetails as OrderDetails;
      return {
        orderId: order.id,
        orderedBy: {
          name,
          otherNames,
        },
        ceilidhQty,
        concertQty,
        dinnerQty,
        dinnerNames: dinnerFirstNames?.map((fName, idx) => `${fName} ${dinnerLastNames?.[idx]}`),
        requirements: specialReqs,
        seating: seatingReqs,
        orderedAt: order.createdAt,
      };
    });
    return orderList;
  }),
});
