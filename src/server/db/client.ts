// src/server/db/client.ts
import { PrismaClient } from "@prisma/client";
import { env } from "src/env/server.mjs";
import { generateModelId } from "src/server/db/generateModelId";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ["query"],
  });

prisma.$use(generateModelId);

if (env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
