import type { ReactElement } from "react";
import type { NextPageWithLayout } from "src/pages/_app";
import type { GetServerSideProps } from "next";
import DashLayout from "src/components/DashLayout";

import { unstable_getServerSession } from "next-auth/next";
import { getToken } from "next-auth/jwt";
import { authOptions } from "src/pages/api/auth/[...nextauth]";
import { prisma } from "src/server/db/client";

import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import ButtonLink from "src/components/ButtonLink";
import StarDivider from "src/components/StarDivider";
import { trpc } from "src/utils/trpc";

const TicketOrders: NextPageWithLayout = () => {
  const { status } = useSession();
  const router = useRouter();

  const userOrders = trpc.salesOrders.getUserOrders.useQuery();

  return status === "loading" ? null : (
    <div className="flex flex-1 flex-col justify-start w-full min-h-screen bg-archiveBlue-50 py-8 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div className="max-w-prose mx-auto">
        <h2 className="text-3xl tracking-tight text-black">Your Ticket Orders</h2>
        <p className="mt-2 mb-8 text-base text-gray-800">
          This is a holding page for order management and payment confirmation.
        </p>
        <StarDivider spacingClass="py-6" bgClass="bg-archiveBlue-50" />
        {/* <pre>Order data: {JSON.stringify(userOrders, null, 2)}</pre> */}
      </div>
    </div>
  );
};

TicketOrders.getLayout = (page: ReactElement) => {
  return <DashLayout>{page}</DashLayout>;
};

export default TicketOrders;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);
  const token = await getToken({ req: context.req });

  const user = await prisma.user.findUnique({
    where: { id: token?.sub },
    include: { orders: true },
  });

  if (!user?.orders?.length) {
    return {
      redirect: {
        destination: "/dash/orders/new",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
