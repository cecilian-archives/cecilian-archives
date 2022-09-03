import "src/styles/globals.css";
import "src/styles/fonts.css";
import type { AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import { trpc } from "src/utils/trpc";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Cecilian Archives</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default trpc.withTRPC(MyApp);
