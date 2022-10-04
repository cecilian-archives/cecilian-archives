import { t } from "src/server/trpc/trpc";
import { z } from "zod";

const contactCreateInputDef = z.object({
  type: z.enum(["ADDRESS", "EMAIL", "PHONE", "CUSTOM"]),
  customType: z.string().optional(),
  value: z.string(),
  notes: z.string().optional(),
  visibility: z.enum(["VISIBLE", "HIDDEN"]).optional(),
});

const profileCreateInputDef = z.object({
  title: z.string().optional(),
  firstNames: z.string().optional(),
  lastNames: z.string().optional(),
  otherNames: z.string().optional(),
  email: z.string(),
  phone: z.string().optional(),
  address: z.string().optional(),
});

type ContactCreateInput = z.infer<typeof contactCreateInputDef>;
export type ProfileCreateInput = z.infer<typeof profileCreateInputDef>;

interface ContactDetailsInput {
  email: string;
  phone?: string;
  address?: string;
}

const reformatContactDetails = ({
  email,
  phone = "",
  address = "",
}: ContactDetailsInput): ContactCreateInput[] => {
  const contactTypes = {
    address: "ADDRESS",
    email: "EMAIL",
    phone: "PHONE",
    custom: "CUSTOM",
  } as const;
  return [
    { type: contactTypes.email, value: email },
    ...(Boolean(phone) ? [{ type: contactTypes.phone, value: phone }] : []),
    ...(Boolean(address) ? [{ type: contactTypes.address, value: address }] : []),
  ];
};

export const profileRouter = t.router({
  getUserProfile: t.procedure.query(({ ctx }) => {
    return ctx.prisma.userProfile.findUnique({
      where: {
        userId: ctx.token?.sub,
      },
    });
  }),
  createUserProfile: t.procedure.input(profileCreateInputDef).mutation(async ({ input, ctx }) => {
    const { email, phone, address, ...others } = input;
    const contactData: ContactCreateInput[] = reformatContactDetails({ email, phone, address });
    const profile = await ctx.prisma.userProfile.create({
      data: {
        ...others,
        user: { connect: { id: ctx.token?.sub } },
        // contactDetails: {
        //   create: contactData,
        // },
      },
    });
    // const contacts = await ctx.prisma.userContact.createMany({
    //   data: contactData.map((contact) => ({ ...contact, userProfileId: profile.id })),
    // });
    const contacts = contactData.map((contactToCreate) =>
      ctx.prisma.userContact.create({
        data: {
          ...contactToCreate,
          userProfileId: profile.id,
        },
      })
    );
    await Promise.all(contacts);
    return profile;
  }),
});
