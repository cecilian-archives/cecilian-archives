import { useForm } from "react-hook-form";
import ButtonLink from "src/components/ButtonLink";
import { trpc } from "src/utils/trpc";

const LIST_SLUG = "alumni";

type EmailCollectionFormData = {
  cecilianEmailAddress?: string;
  cecilianName?: string;
};

const EmailCollectionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const addSubscription = trpc.mailingList.subscriptions.add.useMutation();

  const onSubmit = async (data: EmailCollectionFormData) => {
    addSubscription.mutate({
      email: data.cecilianEmailAddress as string,
      listSlug: LIST_SLUG,
      name: data.cecilianName,
    });
  };

  return (
    <div className="w-full pb-10 flex flex-col md:px-0 md:justify-between">
      {addSubscription.isSuccess ? (
        <div className="flex flex-col items-center justify-start space-y-2">
          <h2 className="text-gray-100 text-3xl text-center pt-4 pb-2">Thank You!</h2>
          <p className="text-gray-100 text-xl md:text-lg">
            We have your email address and will be in touch soon.
          </p>
          <p className="text-gray-300 text-lg md:text-base">No spam, we promise</p>
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
          <fieldset className="flex flex-col md:flex-row justify-center items-start gap-4 w-full px-3 md:px-0 py-5">
            <label className="text-base text-white flex flex-col justify-center items-start gap-1">
              <span>Name</span>
              <input
                type="text"
                placeholder="Jean Valjean"
                {...register("cecilianName", { required: false })}
                className="text-black w-80 max-w-full rounded border border-archiveBlue-700 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-archiveBlue-400"
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
                className="text-black w-80 max-w-full rounded border border-archiveBlue-700 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-archiveBlue-400"
              />
              {Boolean(errors.cecilianEmailAddress?.message) && (
                <span className="text-base max-w-prose text-red-300 mt-1">
                  {errors.cecilianEmailAddress?.message?.toString()}
                </span>
              )}
            </label>
          </fieldset>
          <ButtonLink buttonType="submit" loading={addSubscription.isLoading} onClick={() => {}}>
            Subscribe
          </ButtonLink>
          {Boolean(addSubscription.isError) && (
            <span className="text-base text-center max-w-prose text-red-300 mt-2">
              Something went wrong. Please try again.
            </span>
          )}
        </form>
      )}
    </div>
  );
};

export default EmailCollectionForm;
