import type { ReactElement } from "react";
import type { NextPageWithLayout } from "src/pages/_app";
import type { GetServerSideProps } from "next";
import type { ProfileCreateInput } from "src/server/trpc/router/profile";
import DashLayout from "src/components/DashLayout";

import { unstable_getServerSession } from "next-auth/next";
import { getToken } from "next-auth/jwt";
import { authOptions } from "src/pages/api/auth/[...nextauth]";
import { prisma } from "src/server/db/client";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import ButtonLink from "src/components/ButtonLink";
import { TextField, TextArea } from "src/components/formFields";
import StarDivider from "src/components/StarDivider";
import { trpc } from "src/utils/trpc";

const Profile: NextPageWithLayout = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/dash/orders/new");
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: session?.user?.email || "",
    },
  });

  const createProfile = trpc.profile.createUserProfile.useMutation();

  const onSubmit = async (data: ProfileCreateInput) => {
    createProfile.mutate(data);
  };

  if (createProfile.isSuccess) {
    router.push("/dash/orders");
  }

  return status === "loading" ? null : (
    <div className="flex flex-1 flex-col justify-start w-full min-h-screen bg-archiveBlue-50 py-8 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="max-w-prose mx-auto">
        <h2 className="text-3xl tracking-tight text-black">Profile</h2>
        <p className="mt-2 mb-8 text-base text-gray-800">
          To start, tell us a bit about you and your time in the Society
        </p>
        <fieldset className="w-full max-w-prose mx-0 my-2 flex flex-col justify-center items-start gap-3">
          <legend className="text-xl font-title my-2">About You</legend>
          <TextField
            name="title"
            label="Title"
            register={register}
            options={{ required: false }}
            errors={errors}
            widthClasses="w-1/2"
          />
          <TextField
            name="firstNames"
            label="First Name(s) *"
            register={register}
            options={{ required: { value: true, message: "Please enter your first name" } }}
            errors={errors}
          />
          <TextField
            name="lastNames"
            label="Last Name(s) *"
            register={register}
            options={{ required: { value: true, message: "Please enter your last name" } }}
            errors={errors}
          />
          <TextField
            name="otherNames"
            label="Previous/Other Names"
            register={register}
            options={{ required: false }}
            errors={errors}
          />
          <p className="-mt-2 text-gray-700">
            Any other names people might know you by that you're happy to share. For example, your
            unmarried surname, or any nicknames you have or had.
          </p>
        </fieldset>
        <StarDivider spacingClass="py-6" bgClass="bg-archiveBlue-50" />
        <fieldset className="w-full max-w-prose mx-0 my-2 flex flex-col justify-center items-start gap-3">
          <legend className="text-xl font-title my-2">Contact Details</legend>
          <TextField
            name="email"
            type="email"
            label="Email Address *"
            register={register}
            options={{
              required: {
                value: true,
                message: "Please enter an email address",
              },
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "That doesn't look like a valid email address",
              },
            }}
            errors={errors}
          />
          <TextField
            name="phone"
            type="tel"
            label="Phone Number"
            register={register}
            options={{ required: false }}
            errors={errors}
          />
          <TextArea
            name="address"
            label="Address"
            register={register}
            options={{ required: false }}
            errors={errors}
          />
        </fieldset>
        <StarDivider spacingClass="py-6" bgClass="bg-archiveBlue-50" />
        <div className="w-full flex justify-center items-center py-2">
          <ButtonLink buttonType="submit" onClick={() => {}} loading={createProfile.isLoading}>
            Save and Continue
          </ButtonLink>
          {Boolean(createProfile.isError) && (
            <span className="text-base text-center max-w-prose text-red-600 mt-2">
              Something went wrong. Please try again.
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

Profile.getLayout = (page: ReactElement) => {
  return <DashLayout>{page}</DashLayout>;
};

export default Profile;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const sessionPromise = unstable_getServerSession(context.req, context.res, authOptions);
  const tokenPromise = getToken({ req: context.req });
  const [session, token] = await Promise.all([sessionPromise, tokenPromise]);

  const user = await prisma.user.findUnique({
    where: { id: token?.sub },
    include: { profile: true },
  });

  if (Boolean(user?.profile)) {
    return {
      redirect: {
        destination: "/dash/orders",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
