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
    <div className="w-full pb-10 flex flex-col md:px-0 md:justify-between">
      {success ? (
        <div className="flex flex-col items-start space-y-2">
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
          className="w-full max-w-5xl mx-auto my-2 flex flex-col justify-center items-center"
        >
          <h2 className="text-gray-100 text-3xl text-center pt-4 pb-2">
            Get updates straight to your inbox
          </h2>
          <fieldset className="flex flex-col md:flex-row justify-center items-center gap-4 w-full px-3 md:px-0 py-5">
            <label className="text-base text-white flex flex-col justify-center items-start gap-1">
              <span>Name</span>
              <input
                type="text"
                placeholder="Jean Valjean"
                {...register("cecilianName", { required: false })}
                className="w-80 max-w-full rounded border border-archiveBlue-700 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-archiveBlue-400"
              />
            </label>
            <label className="text-base text-white flex flex-col justify-center items-start gap-1">
              <span>Email</span>
              <input
                type="email"
                placeholder="prisoner24601@gmail.com"
                {...register("cecilianEmailAddress", {
                  required: {
                    value: true,
                    message: "Please enter your email address",
                  },
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
            </label>
            <label className="ohnohoney">Fill this in if you are a human</label>
            <input
              className="ohnohoney"
              tabIndex={-1}
              autoComplete="off"
              type="text"
              id="name"
              name="name"
              placeholder="Your name here"
            />
          </fieldset>
          <ButtonLink buttonType="submit" loading={saving} onClick={() => {}}>
            Subscribe
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
