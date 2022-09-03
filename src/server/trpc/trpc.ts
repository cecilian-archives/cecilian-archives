import { initTRPC } from "@trpc/server";
import type { Context } from "src/server/trpc/context";
import superjson from "superjson";

export const t = initTRPC<{ ctx: Context }>()({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});
