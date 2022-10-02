import type { Prisma } from "@prisma/client";

type ModelIdPrefixes = {
  [key in Prisma.ModelName]: string | undefined;
};

export const modelIdPrefixes: ModelIdPrefixes = {
  Account: "acc",
  VerificationToken: undefined,
  User: "usr",
  UserRole: undefined,
  UserProfile: "usrprf",
  UserContact: "usrctc",
  AccessKey: "usrkey",
  Cecilian: "cec",
  ArchiveItemCecilian: undefined,
  ArchiveItem: "item",
  ArchiveFile: "file",
  ArchiveItemFile: undefined,
  Year: "year",
  Event: "event",
  Role: "role",
  Tag: "tag",
  CecilianTag: "ctag",
  ArchiveItemTag: "atag",
  ArchiveCollection: "col",
  CollectionItem: "colitem",
  MailingList: undefined,
  MailingListSubscription: undefined,
  SalesOrder: "ord",
};
