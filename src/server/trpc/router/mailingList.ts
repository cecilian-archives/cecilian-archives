import { t } from "src/server/trpc/trpc";
import { z } from "zod";

import { mailingListSubscriptionsRouter } from "src/server/trpc/router/mailingListSubscriptions";

export const mailingListRouter = t.router({
  getAll: t.procedure.query(({ ctx }) => {
    return ctx.prisma.mailingList.findMany({
      where: {
        subscriptionLevel: "public",
      },
    });
  }),
  subscriptions: mailingListSubscriptionsRouter,
});
