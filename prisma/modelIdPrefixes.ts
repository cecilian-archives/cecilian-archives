import type { Prisma } from "@prisma/client";

type ModelIdPrefixes = {
  [key in Prisma.ModelName]: string | undefined;
};

export const modelIdPrefixes: ModelIdPrefixes = {
  Account: "acct",
  VerificationToken: undefined,
  User: "usr",
  UserRole: "",
  UserProfile: "",
  UserContact: "",
  AccessKey: "key",
  Cecilian: "cec",
  ArchiveItemCecilian: "",
  ArchiveItem: "item",
  ArchiveFile: "file",
  ArchiveItemFile: "",
  Year: "year",
  Event: "event",
  Role: "role",
  Tag: "tag",
  CecilianTag: "ctag",
  ArchiveItemTag: "atag",
  ArchiveCollection: "coll",
  CollectionItem: "collitem",
  MailingList: undefined,
  MailingListSubscription: undefined,
  SalesOrder: "ord",
};
