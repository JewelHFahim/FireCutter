import Link from "next/link";
import React from "react";
import { HiArrowLongRight, HiMiniArrowLongRight } from "react-icons/hi2";

const Cart = () => {

  const tableItems = [
    {
      name: "Liam James",
      email: "liamjames@example.com",
      position: "Software engineer",
      salary: "$100K",
    },
    {
      name: "Olivia Emma",
      email: "oliviaemma@example.com",
      position: "Product designer",
      salary: "$90K",
    },
    {
      name: "William Benjamin",
      email: "william.benjamin@example.com",
      position: "Front-end developer",
      salary: "$80K",
    },
    {
      name: "Henry Theodore",
      email: "henrytheodore@example.com",
      position: "Laravel engineer",
      salary: "$120K",
    },
  ];

  return (
    <div className="w-full min-h-[70vh] flex justify-center items-center">

      <div className="w-full h-full flex flex-col justify-cente items-center">
        <h2 className="text-4xl font-semibold">Your cart</h2>
        <Link href="" className="text-primary underline">
          continue shopping
        </Link>

        <div className="w-full mt-8 overflow-x-auto">
          <table className="w-full table-auto text-left">
            <thead className=" text-gray-600 font-normal uppercase">
              <tr>
                <th className="py-3 px-6 font-normal">Product</th>
                <th className="py-3 px-6 font-normal">Price</th>
                <th className="py-3 px-6 font-normal">Quantity</th>
                <th className="py-3 px-6 font-normal">Total</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {tableItems.map((item, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.position}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* <div className="flex flex-col justify-center items-center gap-6">
        <h2 className="text-4xl font-semibold">Your cart</h2>
        <p className="text-gray-400">Your cart is currently empty.</p>

        <Link href="/">
          <button className="flex items-center gap-1 uppercase font-medium text-white bg-primary hover:bg-orange-600 transition-all duration-300 ease-in-out w-max px-2.5 py-2 rounded-sm">
            Continue Shopping <HiMiniArrowLongRight className="text-2xl" />
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default Cart;
