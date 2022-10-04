import type { SalesOrder } from "@prisma/client";
import type { OrderDetails } from "src/server/trpc/router/salesOrders";

import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  UsersIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";
import { isToday, isYesterday, isThisYear, format } from "date-fns";

const formatDate = (date: Date) => {
  return isToday(date)
    ? format(date, "'Today, 'HH:mm:ss")
    : isYesterday(date)
    ? format(date, "'Yesterday, 'HH:mm:ss")
    : isThisYear(date)
    ? format(date, "d MMM, HH:mm")
    : format(date, "d MMM yyyy, HH:mm");
};

const SalesOrderItem = ({ order }: { order: SalesOrder }) => {
  const orderDetails = order.orderDetails as OrderDetails;
  const dinnerFirstNames = orderDetails.dinnerFirstNames || [];
  const dinnerLastNames = orderDetails.dinnerLastNames || [];
  return (
    <div className="flex flex-col md:flex-row gap-4 min-w-0 flex-1 items-center">
      <div
        className={`flex-shrink-0 w-10 h-10 rounded-full ${
          order.paymentConfirmed ? "bg-archiveBlue-500" : "bg-archiveYellow-500"
        } flex justify-center items-center`}
      >
        <TicketIcon className="w-6 h-6 text-white" />
      </div>
      <div className="w-full flex-1 grid grid-cols-1 md:grid-cols-[3fr_5fr_2fr] gap-3 md:gap-4 items-center">
        <div className="justify-self-start">
          <p className="text-sm font-medium">
            <b className="text-gray-700">Ref</b>:{" "}
            <span className="text-archiveBlue-600">{order.id}</span>
          </p>
          <p className="text-sm text-gray-500">
            <b>Created</b>:{" "}
            <time dateTime={order.createdAt.toISOString()}>{formatDate(order.createdAt)}</time>
          </p>
        </div>
        <div className="justify-self-start">
          <p className="mt-2 flex items-center gap-1 text-sm text-gray-500">
            <UsersIcon className="mr-1 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            <span>
              <b>Ceilidh</b>: {orderDetails.ceilidhQty}
            </span>
            &middot;
            <span>
              <b>Concert</b>: {orderDetails.concertQty}
            </span>
            &middot;
            <span>
              <b>Dinner</b>: {orderDetails.dinnerQty}
            </span>
          </p>
          {!!orderDetails.dinnerQty && orderDetails.dinnerQty > 0 && (
            <p className="text-sm text-gray-500">
              <b>Dinner Guests</b>:{" "}
              {dinnerFirstNames.map((fName, idx) => `${fName} ${dinnerLastNames[idx]}`).join(", ")}
            </p>
          )}
        </div>
        <div className="justify-self-end">
          <p className="mt-2 flex items-center text-sm text-gray-500">
            {order.paymentConfirmed ? (
              <CheckCircleIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                aria-hidden="true"
              />
            ) : (
              <ExclamationCircleIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-archiveYellow-500"
                aria-hidden="true"
              />
            )}
            {order.paymentConfirmed ? "Confirmed" : "Unconfirmed"}
          </p>
          {!order.paymentConfirmed && (
            <span className="text-sm text-archiveBlue-500 inline-flex items-center group-hover:text-archiveBlue-700">
              Edit and Checkout &rarr;
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

interface OrderListProps {
  orders?: SalesOrder[];
  highlightId?: string;
}

const SalesOrderList = ({ orders, highlightId }: OrderListProps) => {
  const orderList = orders || [];
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {orderList.map((order) => {
          const highlighted = order.id === highlightId;
          if (order.paymentConfirmed) {
            return (
              <li
                key={order.id}
                className={`flex items-center p-4 sm:px-6 ${
                  highlighted ? "bg-archiveYellow-50" : "bg-archiveBlue-50"
                }`}
              >
                <SalesOrderItem order={order} />
              </li>
            );
          } else {
            return (
              <li key={order.id}>
                <a
                  href={`/dash/orders/${order.id}`}
                  className={`flex items-center p-4 sm:px-6 group ${
                    highlighted
                      ? "bg-archiveYellow-50"
                      : "bg-archiveBlue-50 hover:bg-archiveBlue-100"
                  }`}
                >
                  <SalesOrderItem order={order} />
                </a>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default SalesOrderList;
