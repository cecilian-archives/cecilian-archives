import type { ReactElement } from "react";
import type { NextPageWithLayout } from "src/pages/_app";
import type { inferProcedureOutput } from "@trpc/server";
import type { AppRouter } from "src/server/trpc/router";
import DashLayout from "src/components/DashLayout";

import { useForm } from "react-hook-form";
import AdminDoorListTable from "src/components/AdminDoorListTable";
import { Checkbox, TextField } from "src/components/formFields";
import LoadingIndicator from "src/components/LoadingIndicator";
import { trpc } from "src/utils/trpc";

type OrderList = inferProcedureOutput<AppRouter["salesOrders"]["getDoorLists"]>;

type SingleOrder = OrderList[number];

type OrderFilters = {
  name: string;
  ceilidh: boolean;
  concert: boolean;
  dinner: boolean;
};

const orderFilter = (
  orders: OrderList = [],
  queries: OrderFilters = { name: "", ceilidh: true, concert: true, dinner: true }
) => {
  const nameFiltered = !queries.name
    ? orders
    : orders.filter((order) => {
        const haystack = `${order.orderedBy.name} ${
          order.orderedBy.otherNames
        } ${order.dinnerNames?.join(" ")}`.toLowerCase();
        const needle = queries.name.toLowerCase();
        return haystack.includes(needle);
      });
  const hasNumbers = (qty?: number) => Number(qty) > 0;
  const filterByEvent = (order: SingleOrder) => {
    const hasNumbersFor = {
      ceilidh: hasNumbers(order?.ceilidhQty),
      concert: hasNumbers(order?.concertQty),
      dinner: hasNumbers(order?.dinnerQty),
    };
    const shouldShow =
      (queries.ceilidh && hasNumbersFor.ceilidh) ||
      (queries.concert && hasNumbersFor.concert) ||
      (queries.dinner && hasNumbersFor.dinner);
    return shouldShow;
  };
  return nameFiltered.filter((order) => filterByEvent(order));
};

const getStats = (orders?: OrderList) => {
  if (!orders) return null;
  const sums = orders.reduce(
    (acc, order) => {
      const { ceilidhQty, concertQty, dinnerQty } = order;
      const ceilidh = acc.ceilidh + (ceilidhQty || 0);
      const concert = acc.concert + (concertQty || 0);
      const dinner = acc.dinner + (dinnerQty || 0);
      return { ceilidh, concert, dinner };
    },
    { ceilidh: 0, concert: 0, dinner: 0 }
  );
  return { ...sums, totalOrders: orders.length };
};

const AdminOrders: NextPageWithLayout = () => {
  const orders = trpc.salesOrders.getDoorLists.useQuery();

  const defaultValues = {
    filterName: "",
    filterCeilidh: true,
    filterConcert: true,
    filterDinner: true,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onBlur",
    defaultValues,
  });

  const [filterName, filterCeilidh, filterConcert, filterDinner] = watch(
    ["filterName", "filterCeilidh", "filterConcert", "filterDinner"],
    defaultValues
  );
  const filteredOrders = orders.isFetched
    ? orderFilter(orders?.data, {
        name: filterName,
        ceilidh: filterCeilidh,
        concert: filterConcert,
        dinner: filterDinner,
      })
    : [];

  const stats = getStats(orders?.data);

  return (
    <section className="w-full bg-archiveBlue-50 p-8 flex flex-col items-center md:max-w-full md:justify-between">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-gray-900 text-4xl pt-4 pb-2">Orders</h2>

        {!orders.isFetched ? (
          <div className="flex justify-center items-center gap-4 py-8">
            <LoadingIndicator />
            <p className="text-lg font-title">Loading orders...</p>
          </div>
        ) : (
          <>
            <form
              onSubmit={handleSubmit(() => {})}
              noValidate
              className="py-4 w-full flex flex-col md:flex-row justify-between items-center gap-3 md:gap-12"
            >
              <div className="w-full max-w-xl">
                <TextField
                  name="filterName"
                  label="Filter by attendee name"
                  register={register}
                  options={{ required: false }}
                  errors={errors}
                />
              </div>
              <div className="mt-5 flex flex-row items-center gap-6">
                <Checkbox
                  name="filterCeilidh"
                  label="Ceilidh"
                  defaultChecked={true}
                  register={register}
                  options={{ required: false }}
                  errors={errors}
                />
                <Checkbox
                  name="filterConcert"
                  label="Concert"
                  defaultChecked={true}
                  register={register}
                  options={{ required: false }}
                  errors={errors}
                />
                <Checkbox
                  name="filterDinner"
                  label="Dinner"
                  defaultChecked={true}
                  register={register}
                  options={{ required: false }}
                  errors={errors}
                />
              </div>
            </form>
            <div className="py-4 text-lg text-center w-full flex flex-col md:flex-row justify-between items-center gap-3 md:gap-6">
              <p>
                Showing {filteredOrders?.length || 0} of {stats?.totalOrders || 0} orders
              </p>
              <p>
                <b>Attendees</b>: <br className="md:hidden" />
                Ceilidh {stats?.ceilidh || 0} &middot; Concert {stats?.concert || 0} &middot; Dinner{" "}
                {stats?.dinner || 0}
              </p>
            </div>
            <AdminDoorListTable orders={filteredOrders} />
          </>
        )}
      </div>

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
