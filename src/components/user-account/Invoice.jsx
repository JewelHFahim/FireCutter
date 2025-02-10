"use client";

import { useGetSingleOrdersQuery } from "@/redux/features/orders/orderApis";
import Loader from "@/utils/loader/Loader";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const Invoice = () => {
  const { id } = useParams();
  const { data: orderdetails, isLoading } = useGetSingleOrdersQuery(id);
  const details = orderdetails?.data;

  return (
    <div className="pb-2">
      <div className="flex justify-center">
        <h1 className="md:text-xl text-green-700 my-2">
          Order placed success!
        </h1>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-[60vh]">
          <Loader />
        </div>
      ) : (
        <div className="max-w-3xl mx-auto border">
          {/* Logo */}
          <div className="w-full mt-2 pt-2 md:pt-10 pl-2 md:pl-10">
            <div className="w-full grid grid-cols-2 lg:grid-cols-6 gap-y-4 items-center text-center lg:text-end">
              <div className="col-span-3 flex items-center gap-2">
                <div className="w-10 md:w-12 h-10 md:h-12 relative">
                  <Image src="/globe.svg" alt="" fill className="" />
                </div>
                <h1 className="text-2xl font-medium">Fire Cutter</h1>
              </div>
              <div className="col-span-3 flex items-center gap-2">
                <div className="text-3xl md:text-5xl bg-gradient-to-l from-primary to-white w-full text-white pr-5 md:pr-10 text-end">
                  INVOICE
                </div>
              </div>
            </div>
          </div>

          {/* Billing Address */}
          <div className="mt-5 w-full px-2 md:px-10">
            <div className="w-full grid grid-cols-2 lg:grid-cols-6 gap-y-5 text-center lg:text-end">
              <div className="col-span-2 text-start text-sm text-gray-600">
                <h3 className="font-medium text-black">Bill from:</h3>
                <p>Fire Cutter</p>
                <p className="text-[11px">
                  73/3 Monipuri Para, Farmgate, Dhaka - 1215
                </p>
              </div>

              <div className="col-span-3 text-start text-sm text-gray-600">
                <h3 className="font-medium text-black">Bill to:</h3>
                <p>Jewel Hossain Fahim</p>
                <p>007, Flat-5C, Banani, Dhaka-1216</p>
              </div>

              <div className="col-span-1 text-start text-sm text-gray-600">
                <h3 className="font-medium text-black">Invoice No:</h3>
                <p>Invoice: #{id?.slice(-5)}</p>
                <p>Date: 25-01-2025</p>
              </div>
            </div>
          </div>

          {/* thead */}
          <div className="mt-5 w-full bg-primary text-white py-1 md:py-3 px-2 md:px-10 grid grid-cols-5 lg:grid-cols-6 text-end text-gray-70 uppercase text-sm md:text-base">
            <div className="col-span-2 md:col-span-3 text-start">Product</div>
            <div className="col-span-1 text-start">Price</div>
            <div className="col-span-1 text-center">Quantity</div>
            <div className="col-span-1 text-end">Total</div>
          </div>

          <div className="flex flex-col px-2 md:px-10">
            {details?.products?.map((product) => (
              <div
                key={product?.product_id?._id}
                className="w-full border-b-2 py-4"
              >
                <div className="w-full grid grid-cols-5 md:grid-cols-6 items-center text-end">
                  <div className="col-span-2 md:col-span-3 text-start">
                    <div className="">
                      <h2 className="text-sm md:text-base">
                        {product?.product_id?.title}
                      </h2>
                      <div className="flex gap-2 text-xs text-gray-500">
                        <p>Color: Blue </p>
                        <p>Size: {product?.size} </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-1 text-start">
                    <p className="text-sm md:text-base">
                      Tk{product?.product_id?.sale_price}{" "}
                    </p>
                  </div>

                  <div className="col-span-1 text-center">
                    <p className="text-sm md:text-base">{product?.quantity} </p>
                  </div>

                  <div className="col-span-1">
                    <p className="text-sm md:text-base">
                      Tk{product?.quantity * product?.product_id?.sale_price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/*Sub Total */}
          <div className="w-full mt-2 md:mt-5 px-2 md:px-10">
            <div className="w-full grid grid-cols-12 items-center text-center lg:text-end text-sm md:text-base">
              <div className="col-span-6 md:col-span-8 text-xs text-gray-400 text-start">
                Terms & Conditions
              </div>
              <div className="col-span-3 md:col-span-2 text-end">Subtotal</div>
              <div className="col-span-3 md:col-span-2 text-end">
                Tk{details?.total_price - details?.delivery_charge}
              </div>
            </div>
          </div>

          {/* Shipping Charge */}
          <div className="w-full mt-2 px-2 md:px-10">
            <div className="w-full grid grid-cols-12 items-center text-cente text-sm md:text-base lg:text-end text-end">
              <div className="col-span-4 md:col-span-7"></div>
              <div className="col-span-5 md:col-span-3 border-b-2 pb-2">
                Delivery Charge
              </div>
              <div className="col-span-3 md:col-span-2 border-b-2 pb-2">
                Tk{details?.delivery_charge}.00
              </div>
            </div>
          </div>

          {/* Total*/}
          <div className="w-full mt-2 px-2 md:px-10">
            <div className="w-full grid grid-cols-12 items-center text-end text-sm md:text-base lg:text-end">
              <div className="col-span-6 md:col-span-8"></div>
              <div className="col-span-3 md:col-span-2 font-medium">Total</div>
              <div className="col-span-3 md:col-span-2 font-medium">
                Tk{details?.total_price}
              </div>
            </div>
          </div>

          <div className="mt-16 h-5 bg-primary"></div>
        </div>
      )}
    </div>
  );
};

export default Invoice;
