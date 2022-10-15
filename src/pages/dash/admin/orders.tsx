import type { ReactElement } from "react";
import type { NextPageWithLayout } from "src/pages/_app";
import DashLayout from "src/components/DashLayout";

import { useEffect } from "react";
import { useRouter } from "next/router";
import AdminDoorListTable from "src/components/AdminDoorListTable";
import StarDivider from "src/components/StarDivider";
import LoadingIndicator from "src/components/LoadingIndicator";
import { trpc } from "src/utils/trpc";

const AdminOrders: NextPageWithLayout = () => {
  const router = useRouter();
  useEffect(() => {
    router.prefetch("/70th/tickets");
  }, []);

  const orders = trpc.salesOrders.getDoorLists.useQuery();

  return (
    <section className="w-full bg-archiveBlue-50 p-8 flex flex-col items-center md:max-w-full md:justify-between">
      <div className="w-full max-w-prose mx-auto">
        <h2 className="text-gray-900 text-4xl pt-4 pb-2">Orders</h2>
        <p className="py-4 text-lg">A full list of orders for the 70th anniversary events.</p>
      </div>

      {!orders.isFetched ? (
        <div className="flex justify-center items-center gap-4">
          <LoadingIndicator />
          <p className="text-lg font-title">Loading orders...</p>
        </div>
      ) : (
        <AdminDoorListTable orders={orders?.data} />
      )}

      <a href="/images/Urinetown.jpg" target="_blank">
        <img
          src="/images/Urinetown.jpg"
          alt=""
          className="max-w-full lg:max-w-lg my-8 border border-archiveYellow-600 rounded-md transform transition-transform rotate-3 hover:rotate-2"
        />
      </a>
    </section>
  );
};

AdminOrders.getLayout = (page: ReactElement) => {
  return <DashLayout>{page}</DashLayout>;
};

export default AdminOrders;
