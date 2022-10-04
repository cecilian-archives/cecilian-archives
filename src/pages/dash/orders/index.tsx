import type { ReactElement } from "react";
import type { NextPageWithLayout } from "src/pages/_app";
import type { GetServerSideProps } from "next";
import type { SalesOrder } from "@prisma/client";
import DashLayout from "src/components/DashLayout";

import { unstable_getServerSession } from "next-auth/next";
import { getToken } from "next-auth/jwt";
import { authOptions } from "src/pages/api/auth/[...nextauth]";
import { prisma } from "src/server/db/client";

import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import superjson from "superjson";
import SalesOrderList from "src/components/SalesOrderList";
import StarDivider from "src/components/StarDivider";
import ButtonLink from "src/components/ButtonLink";
import { trpc } from "src/utils/trpc";

interface PageProps {
  orders: string;
}

const TicketOrders: NextPageWithLayout<PageProps> = ({ orders }) => {
  const { status } = useSession();
  const router = useRouter();

  const { complete } = router.query;

  const serverOrders: SalesOrder[] = superjson.parse(orders);
  const userOrders = trpc.salesOrders.getUserOrders.useQuery();

  const orderData = userOrders.isLoading ? serverOrders : userOrders.data;

  return status === "loading" ? null : (
    <div className="flex flex-1 flex-col justify-start w-full bg-archiveBlue-50 py-8 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl tracking-tight text-black">Your Ticket Orders</h2>
        <p className="mt-2 text-base text-gray-800">
          Manage your ticket orders from here. Any unconfirmed orders must go through checkout
          before the tickets become valid.
        </p>
        <div className="w-full mt-4 flex justify-center">
          <ButtonLink to="/dash/orders/new" colour="secondary">
            Start New Order
          </ButtonLink>
        </div>
        <StarDivider spacingClass="py-6" bgClass="bg-archiveBlue-50" />
        <SalesOrderList orders={orderData} highlightId={complete as string} />
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

  const orders = await prisma.salesOrder.findMany({
    where: {
      user: {
        id: token?.sub,
      },
      OR: [
        { paymentConfirmed: true },
        {
          checkoutSession: {
            path: ["expires_at"],
            gte: Date.now() / 1000,
          },
        },
      ],
    },
    orderBy: { createdAt: "desc" },
  });

  if (!orders?.length) {
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
      orders: superjson.stringify(orders),
    },
  };
};
