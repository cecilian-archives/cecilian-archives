import { useState } from "react";
import { useForm } from "react-hook-form";
import ButtonLink from "src/components/ButtonLink";

const EmailCollectionForm = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data: {}) => {
    if (saving) {
      // Do nothing on duplicate click
      return;
    }
    clearErrors();
    setSaving(true);
    try {
      console.log(data);
      const [response] = await Promise.all([
        // await fetch("/api/addToMailingList", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(data),
        // }),
        new Promise((resolve) => setTimeout(resolve, 1000)),
      ]);
      //   if (!response.ok) {
      //     throw new Error("Fetch response was not OK");
      //   } else {
      setSuccess(true);
      //   }
    } catch (error) {
      setFormError("Something went wrong. Please try again.");
      console.error("Error saving:", error);
    }
    setSaving(false);
  };

  return (
    <div className="p-4 flex-grow-0 flex flex-col md:px-0 md:max-w-full md:justify-between">
      {success ? (
        <div className="flex flex-col items-center space-y-2 text-center">
          <h4 className="text-3xl text-white">Thank You!</h4>
          <p className="text-xl md:text-lg text-gray-100">
            We have your email address and will be in touch soon.
          </p>
          <p className="text-lg md:text-base text-gray-300">No spam, we promise</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="w-full max-w-5xl mx-auto my-2 flex flex-col justify-start items-center"
        >
          <fieldset className="flex flex-col justify-start items-start w-full px-3 md:px-0 py-5">
            <label className="text-base text-white mb-1">Name</label>
            <input
              type="text"
              placeholder="Jean Valjean"
              {...register("cecilianName", { required: false })}
              className="w-80 max-w-full rounded border border-archiveBlue-700 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-archiveBlue-400"
            />
            <label className="text-base text-white mt-4 mb-1">Email</label>
            <input
              type="email"
              placeholder="prisoner24601@gmail.com"
              {...register("cecilianEmailAddress", {
                required: true,
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "That doesn't look like a valid email address",
                },
              })}
              className="w-80 max-w-full rounded border border-archiveBlue-700 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-archiveBlue-400"
            />
            {Boolean(errors.cecilianEmailAddress?.message) && (
              <span className="text-base max-w-prose text-red-400 mt-1">
                {errors.cecilianEmailAddress?.message?.toString()}
              </span>
            )}
          </fieldset>
          <ButtonLink buttonType="submit" loading={saving} onClick={() => {}}>
            Sign Up
          </ButtonLink>
          {Boolean(formError) && (
            <span className="text-base max-w-prose text-red-400 mt-2">{formError}</span>
          )}
        </form>
      )}
    </div>
  );
};

export default EmailCollectionForm;
