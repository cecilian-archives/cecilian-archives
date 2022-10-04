import type { Prisma } from "@prisma/client";
import { customAlphabet } from "nanoid";
import { modelIdPrefixes } from "prisma/modelIdPrefixes";

const ALPHABET = "1234567890abcdefghijklmnopqrstuvwxyz";

const generateId = ({ prefix = "", length = 10 } = {}): string => {
  const nanoid = customAlphabet(ALPHABET, length);
  const id = nanoid();
  return prefix ? `${prefix}_${id}` : id;
};

export const generateModelId: Prisma.Middleware = async (params: Prisma.MiddlewareParams, next) => {
  if (params.action === "create") {
    const prefix = params.model ? modelIdPrefixes[params.model] : undefined;
    if (Boolean(prefix)) {
      params.args.data.id = generateId({ prefix });
    }
  }
  return await next(params);
};
