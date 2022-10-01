// src/server/router/context.ts
import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { prisma } from "src/server/db/client";
import { unstable_getServerSession } from "next-auth/next";
import { getToken } from "next-auth/jwt";
import { authOptions } from "src/pages/api/auth/[...nextauth]";

/**
 * Replace this with an object if you want to pass things to createContextInner
 */
// type CreateContextOptions = Record<string, never>;
type CreateContextOptions = trpcNext.CreateNextContextOptions;

/** Use this helper for:
 *  - testing, where we dont have to Mock Next.js' req/res
 *  - trpc's `createSSGHelpers` where we don't have req/res
 */
export const createContextInner = async (opts: CreateContextOptions) => {
  const session = await unstable_getServerSession(opts.req, opts.res, authOptions);
  const token = await getToken({ req: opts.req });
  return {
    prisma,
    session,
    token,
  };
};

/**
 * This is the actual context you'll use in your router
 * @link https://trpc.io/docs/context
 **/
export const createContext = async (opts: trpcNext.CreateNextContextOptions) => {
  return await createContextInner(opts);
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
