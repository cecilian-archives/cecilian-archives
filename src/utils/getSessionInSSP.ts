import type { GetServerSideProps } from "next";

import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "src/pages/api/auth/[...nextauth]";

export const getSessionInSSP: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);

  // This is currently handled by Next.js middleware,
  // but we could handle it here on a page-by-page basis if we wanted
  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/login",
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {
      session,
    },
  };
};
