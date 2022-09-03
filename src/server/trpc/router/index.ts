// src/server/router/index.ts
import { t } from "src/server/trpc/trpc";

import { exampleRouter } from "src/server/trpc/router/example";

export const appRouter = t.router({
  example: exampleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
