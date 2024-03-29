import type { ReactElement } from "react";
import type { NextPageWithLayout } from "src/pages/_app";
import DashLayout from "src/components/DashLayout";

import { useSession, signOut } from "next-auth/react";
import ImageFader from "src/components/ImageFader";
import ButtonLink from "src/components/ButtonLink";

import { getSessionInSSP } from "src/utils/getSessionInSSP";

const Dashboard: NextPageWithLayout = () => {
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
      <div className="flex flex-1 flex-col justify-start min-h-screen bg-archiveBlue-500 py-20 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 border-l-4 border-archiveYellow-500">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <img
            src="/images/logo.svg"
            alt=""
            className="w-auto max-h-12 border border-archiveYellow-700 rounded-xl"
          />
          <h2 className="mt-6 text-3xl tracking-tight text-white">Dashboard</h2>
          <p className="mt-2 text-sm text-gray-200">Logged in as {session?.user?.email}</p>
          <p className="mt-2 text-sm text-gray-200">
            Login session will expire at {session?.expires}
          </p>
          <ButtonLink onClick={handleSignOut}>Log out</ButtonLink>
        </div>
      </div>
    </div>
  );
};

Dashboard.getLayout = (page: ReactElement) => {
  return <DashLayout>{page}</DashLayout>;
};

export default Dashboard;

export { getSessionInSSP as getServerSideProps };
