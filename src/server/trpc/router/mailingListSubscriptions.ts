import { t } from "src/server/trpc/trpc";
import { z } from "zod";

export const mailingListSubscriptionsRouter = t.router({
  add: t.procedure
    .input(
      z.object({
        email: z.string(),
        listSlug: z.string(),
        name: z.string().nullish(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const subscription = await ctx.prisma.mailingListSubscription.upsert({
        where: {
          email_mailingListSlug: { email: input.email, mailingListSlug: input.listSlug },
        },
        create: {
          email: input.email,
          mailingList: { connect: { slug: input.listSlug } },
          name: input.name,
          // TODO: retrieve userUid if logged in and connect user with the subscription record
        },
        update: {
          email: input.email,
          mailingList: { connect: { slug: input.listSlug } },
          name: input.name,
          // TODO: retrieve userUid if logged in and connect user with the subscription record
        },
      });
      return subscription;
    }),
});
