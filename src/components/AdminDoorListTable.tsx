import type { inferProcedureOutput } from "@trpc/server";
import type { AppRouter } from "../server/trpc/router";

interface DoorListTableProps {
  orders?: inferProcedureOutput<AppRouter["salesOrders"]["getDoorLists"]>;
}

const AdminDoorListTable: React.FC<DoorListTableProps> = ({ orders }) => {
  return (
    <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="my-6 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Order ID
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Ordered by
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Ceilidh
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Concert
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Dinner
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Dinner Names
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Requirements
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-3 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-6"
                    >
                      Seating Requests
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders?.map((order, idx) => (
                    <tr
                      key={order.orderId}
                      className={idx % 2 === 0 ? "bg-white" : "bg-archiveBlue-50"}
                    >
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-600 sm:pl-6">
                        {order.orderId}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                        {order.orderedBy}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600">
                        {order.ceilidhQty}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600">
                        {order.concertQty}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600">
                        {order.dinnerQty}
                      </td>
                      <td className="whitespace-pre-line px-3 py-4 text-sm text-gray-600">
                        <ul>
                          {order.dinnerNames?.map((name, idx) => (
                            <li key={idx}>{name}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="whitespace-pre-line px-3 py-4 text-sm text-gray-600 max-w-md">
                        {order.requirements}
                      </td>
                      <td className="whitespace-pre-line py-4 pl-3 pr-4 text-sm text-gray-600 sm:pr-6 max-w-md">
                        {order.seating}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDoorListTable;
