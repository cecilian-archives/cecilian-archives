import type { NextPage } from "next";

import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useSession, signIn } from "next-auth/react";
import ImageFader from "src/components/ImageFader";
import ButtonLink from "src/components/ButtonLink";
import LoadingIndicator from "src/components/LoadingIndicator";

import { capsFirst } from "src/utils/capsFirst";
import { GoogleLogo, AppleLogo, FacebookLogo } from "src/assets/svg";

type Provider = "google" | "apple" | "facebook";

type AuthLoadingStatus = "dormant" | "loading:email" | `loading:${Provider}` | "emailSent";

interface ProviderAuthButtonProps {
  provider: Provider;
  loadingStatus: AuthLoadingStatus;
  onClick: (provider: Provider) => void;
}

const ProviderAuthButton = ({ provider, loadingStatus, onClick }: ProviderAuthButtonProps) => {
  const logos = { google: GoogleLogo, apple: AppleLogo, facebook: FacebookLogo };
  const ProviderLogo = logos[provider];
  return (
    <button
      onClick={() => onClick(provider)}
      className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-archiveBlue-700 shadow-sm hover:bg-archiveBlue-50"
    >
      <span className="sr-only">Sign in with {capsFirst(provider)}</span>
      {loadingStatus === `loading:${provider}` ? <LoadingIndicator /> : <ProviderLogo />}
    </button>
  );
};

const Login: NextPage = () => {
  const [loadingStatus, setLoadingStatus] = useState<AuthLoadingStatus>("dormant");
  const { data: session, status } = useSession();
  const router = useRouter();

  const redirectedFrom = router.query?.callbackUrl?.toString();
  const redirectTo = redirectedFrom || "/dash";

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onBlur",
  });

  const enteredEmail = watch("emailAddress");

  const handleEmailSignIn = async (formData: { emailAddress?: string }) => {
    setLoadingStatus("loading:email");
    const authResponse = await signIn("email", { email: formData.emailAddress, redirect: false });
    if (authResponse?.error) {
      setLoadingStatus("dormant");
      // TODO: Display user-facing error message
    } else {
      setLoadingStatus("emailSent");
    }
  };

  const handleProviderSignIn = async (provider: Provider) => {
    setLoadingStatus(`loading:${provider}`);
    await signIn(provider);
  };

  if (session) {
    router.push(redirectTo);
    return null;
  }

  return status === "loading" ? null : (
    <div className="flex w-screen min-h-screen">
      <div className="relative hidden w-0 flex-1 lg:block">
        <ImageFader switchTime={7500} />
        <div className="bg-archiveBlue-500 bg-opacity-50 min-h-screen absolute inset-0" />
      </div>
      <main className="flex flex-1 flex-col justify-start min-h-screen bg-archiveBlue-500 py-20 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 border-l-4 border-archiveYellow-500">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img
              src="/images/logo.svg"
              alt=""
              className="w-auto max-h-12 border border-archiveYellow-700 rounded-xl"
            />
            <h2 className="mt-6 text-3xl tracking-tight text-white">Sign in to your account</h2>
            <p className="mt-2 text-sm text-gray-200">
              If you don't have an account yet, sign in to create one
            </p>
          </div>

          {loadingStatus === "emailSent" ? (
            <div className="mt-10">
              <h3 className="mt-6 text-2xl tracking-tight text-white">Link Sent</h3>
              <p className="py-2 text-gray-100">
                We've sent a magic link to {enteredEmail}. Please check your email and follow the
                link.
              </p>
              <p className="py-2 text-sm text-gray-100">
                No link?{" "}
                <button
                  type="button"
                  onClick={() => setLoadingStatus("dormant")}
                  className="font-medium text-archiveYellow-500 hover:text-archiveYellow-600 underline cursor-pointer"
                >
                  Start again
                </button>
              </p>
            </div>
          ) : (
            <div className="mt-8">
              <p className="text-sm font-medium text-gray-100 mb-1">Sign in with</p>
              <div className="mt-1 grid grid-cols-3 gap-3">
                <ProviderAuthButton
                  provider="google"
                  loadingStatus={loadingStatus}
                  onClick={handleProviderSignIn}
                />
                <ProviderAuthButton
                  provider="apple"
                  loadingStatus={loadingStatus}
                  onClick={handleProviderSignIn}
                />
                <ProviderAuthButton
                  provider="facebook"
                  loadingStatus={loadingStatus}
                  onClick={handleProviderSignIn}
                />
              </div>

              <div className="relative mt-6">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-archiveBlue-500 px-2 text-gray-100">or continue with</span>
                </div>
              </div>

              <div className="mt-6">
                <form onSubmit={handleSubmit(handleEmailSignIn)}>
                  <label
                    htmlFor="emailAddress"
                    className="block text-sm font-medium text-gray-100 mb-1"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="prisoner24601@gmail.com"
                    {...register("emailAddress", {
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
                    className="text-black w-full rounded border border-archiveBlue-700 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-archiveBlue-400"
                  />
                  {Boolean(errors.emailAddress?.message) && (
                    <span className="text-base max-w-prose text-red-300 mt-1">
                      {errors.emailAddress?.message?.toString()}
                    </span>
                  )}

                  <ButtonLink
                    onClick={() => {}}
                    buttonType="submit"
                    variant="solid"
                    colour="secondary"
                    width="full"
                    loading={loadingStatus === "loading:email"}
                    className="mt-6"
                  >
                    Sign in
                  </ButtonLink>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Login;
