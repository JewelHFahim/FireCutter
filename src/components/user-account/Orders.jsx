"use client";

import { useGetOrdersQuery } from "@/redux/features/orders/orderApis";
import { extractUserIdFromToken } from "../private/extractUserIdFromToken";
import Cookies from "js-cookie";
import { useState } from "react";
import Pagination from "@/utils/Pagination";
import Loader from "@/utils/loader/Loader";

export default function Orders({ setOrderId, setActive }) {
  const token = Cookies.get("fc_token");
  const userId = extractUserIdFromToken(token);
  const [page, setPage] = useState(1);
  const { data: orderList, isLoading } = useGetOrdersQuery({ userId, page });

  const handleSelectId = (id) => {
    setOrderId(id);
  };

  return (
    <div className="md:max-w-screen-xl mx-auto h-full">
      {isLoading ? (
        <div className="w-full h-full flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="overflow-x-auto flex flex-col justify-betwee h-full pb-5 md:pb-0">
          <table className="w-full table-auto text-sm text-left border-b">
            <thead className="bg-gray-50 text-gray-600 font-medium ">
              <tr>
                <th className="py-3 px-2 md:px-4">Order no</th>
                <th className="py-3 px-4">Order date</th>
                <th className="py-3 px-4">Bill to- name</th>
                <th className="py-3 px-4">Total</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Details</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {orderList?.data?.map((item, idx) => (
                <tr key={idx}>
                  <td className="px-4 py-4 whitespace-nowrap">
                    {item._id?.slice(-5)}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    {item.createdAt?.split("T")[0]}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    {item?.user_id?.fullName}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    {item?.total_price}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-orange-500">
                    {item?.order_status}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <button
                      type="button"
                      onClick={() => {
                        handleSelectId(item?._id), setActive("invoice");
                      }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Pagination orderList={orderList} page={page} setPage={setPage} />
        </div>
      )}
    </div>
  );
}
