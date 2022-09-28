import type { NextPage } from "next";

import { useSession, signOut } from "next-auth/react";
import { useForm } from "react-hook-form";
import ButtonLink from "src/components/ButtonLink";
import { TextField, TextArea } from "src/components/formFields";
import StarDivider from "src/components/StarDivider";

const Profile: NextPage = () => {
  const { data: session, status } = useSession();

  const handleSignOut = async () => {
    await signOut();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return status === "loading" ? null : (
    <div className="flex w-screen min-h-screen">
      <main className="flex flex-1 flex-col justify-start w-full min-h-screen bg-archiveBlue-50 py-20 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 border-b-8 border-archiveYellow-500">
        <img
          src="/images/logo.svg"
          alt=""
          className="w-12 max-h-12 border border-archiveBlue-700 rounded-xl"
        />
        <h2 className="mt-6 text-3xl tracking-tight text-black">Profile</h2>
        <p className="mt-2 text-sm text-gray-800">
          Logged in as {JSON.stringify(session, null, 2)}
        </p>
        <ButtonLink onClick={handleSignOut}>Log out</ButtonLink>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="max-w-prose">
          <fieldset className="w-full max-w-prose mx-0 my-2 flex flex-col justify-center items-start gap-3">
            <legend className="text-xl font-title my-2">About You</legend>
            <TextField
              name="title"
              label="Title"
              register={register}
              options={{ required: false }}
              errors={errors}
            />
            <TextField
              name="firstNames"
              label="First Name(s)"
              register={register}
              options={{ required: false }}
              errors={errors}
            />
            <TextField
              name="lastNames"
              label="Last Name(s)"
              register={register}
              options={{ required: false }}
              errors={errors}
            />
            <TextField
              name="otherNames"
              label="Previous/Other Names"
              register={register}
              options={{
                required: {
                  value: false,
                  message: "",
                },
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "That doesn't look like a valid email address",
                },
              }}
              errors={errors}
            />
            <p className="-mt-2 text-gray-700">
              Any other names people might know you by that you're happy to share. For example, your
              unmarried surname, or any nicknames you have or had.
            </p>
          </fieldset>
          <StarDivider bgClass="bg-archiveBlue-50" />
          <fieldset className="w-full max-w-prose mx-0 my-2 flex flex-col justify-center items-start gap-3">
            <legend className="text-xl font-title my-2">Contact Details</legend>
            <TextArea
              name="address"
              label="Address"
              register={register}
              options={{ required: false }}
              errors={errors}
            />
            <TextField
              name="phone"
              type="tel"
              label="Contact Telephone Number"
              register={register}
              options={{ required: false }}
              errors={errors}
            />
            <TextField
              name="email"
              type="email"
              label="Email Address"
              register={register}
              options={{
                required: {
                  value: false,
                  message: "",
                },
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "That doesn't look like a valid email address",
                },
              }}
              errors={errors}
            />
          </fieldset>
        </form>
      </main>
    </div>
  );
};

export default Profile;
