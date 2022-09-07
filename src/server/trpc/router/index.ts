// src/server/router/index.ts
import { t } from "src/server/trpc/trpc";

import { mailingListRouter } from "src/server/trpc/router/mailingList";

export const appRouter = t.router({
  mailingList: mailingListRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
