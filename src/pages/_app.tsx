import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import Head from "next/head";
import { trpc } from "src/utils/trpc";

import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";

import "src/styles/globals.css";
import "src/styles/fonts.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface PageProps {
  session?: Session;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const { session, ...otherPageProps } = pageProps as PageProps;
  return (
    <>
      <Head>
        <title>Cecilian Archives</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionProvider session={session}>
        {getLayout(<Component {...otherPageProps} />)}
      </SessionProvider>
    </>
  );
};

export default trpc.withTRPC(MyApp);
