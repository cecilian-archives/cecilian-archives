// src/server/router/index.ts
import { t } from "src/server/trpc/trpc";

import { mailingListRouter } from "src/server/trpc/router/mailingList";
import { salesOrdersRouter } from "src/server/trpc/router/salesOrders";

export const appRouter = t.router({
  mailingList: mailingListRouter,
  salesOrders: salesOrdersRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
