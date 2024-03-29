import { initTRPC } from "@trpc/server";
import type { Context } from "src/server/trpc/context";
import superjson from "superjson";

export const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});
