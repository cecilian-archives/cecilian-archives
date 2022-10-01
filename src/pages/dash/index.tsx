import type { NextPage } from "next";

import { useSession, signOut } from "next-auth/react";
import ImageFader from "src/components/ImageFader";
import ButtonLink from "src/components/ButtonLink";

import { enforceAuthInSSP } from "src/utils/enforceAuthInSSP";

const Dashboard: NextPage = () => {
  const { data: session, status } = useSession();

  const handleSignOut = async () => {
    await signOut();
  };

  return status === "loading" ? null : (
    <div className="flex w-screen min-h-screen">
      <div className="relative hidden w-0 flex-1 lg:block">
        <ImageFader switchTime={7500} />
        <div className="bg-archiveBlue-500 bg-opacity-50 min-h-screen absolute inset-0" />
      </div>
      <main className="flex flex-1 flex-col justify-start min-h-screen bg-archiveBlue-500 py-20 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 border-l-4 border-archiveYellow-500">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <img
            src="/images/logo.svg"
            alt=""
            className="w-auto max-h-12 border border-archiveYellow-700 rounded-xl"
          />
          <h2 className="mt-6 text-3xl tracking-tight text-white">Dashboard</h2>
          <p className="mt-2 text-sm text-gray-200">
            Logged in as {JSON.stringify(session, null, 2)}
          </p>
          <ButtonLink onClick={handleSignOut}>Log out</ButtonLink>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

export { enforceAuthInSSP as getServerSideProps };
