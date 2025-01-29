import Image from "next/image";
import React from "react";

const Invoice = () => {
  return (
    <div className="pb-10">
      <div className="flex justify-center">
        <h1 className="text-xl text-green-700 my-2">Order placed success!</h1>
      </div>
      <div className="max-w-3xl mx-auto border">
        {/* Logo */}
        <div className="w-full mt-2 pt-10 pl-10">
          <div className="w-full grid grid-cols-2 lg:grid-cols-6 items-center text-center lg:text-end">
            <div className="col-span-3 flex items-center gap-2">
              <div className="w-12 h-12 relative">
                <Image src="/globe.svg" alt="" fill className="" />
              </div>
              <h1 className="text-2xl font-medium">Fire Cutter</h1>
            </div>
            <div className="col-span-3 flex items-center gap-2">
              <div className="text-5xl bg-gradient-to-l from-primary to-white w-full text-white pr-10">
                INVOICE
              </div>
            </div>
          </div>
        </div>

        {/* Billing Address */}
        <div className="mt-5 w-full px-10">
          <div className="w-full grid grid-cols-2 lg:grid-cols-6 text-center lg:text-end">
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
              <p>Invoice: #4073</p>
              <p>Date: 25-01-2025</p>
            </div>
          </div>
        </div>

        {/* thead */}
        <div className="mt-5 w-full bg-primary text-white py-5 px-10 grid grid-cols-2 lg:grid-cols-6 text-end text-gray-70 uppercase">
          <div className="col-span-3 text-start">Product</div>
          <div className="col-span-1 text-start">Price</div>
          <div className="col-span-1 text-center">Quantity</div>
          <div className="col-span-1 text-end">Total</div>
        </div>

        {/* product row */}
        <div className="flex flex-col gap-y- px-10">
          {[...Array(3)].map((item, idx) => (
            <div key={idx} className="w-full border-b-2 py-4">
              <div className="w-full grid grid-cols-3 lg:grid-cols-6 items-center text-end">
                <div className="col-span-2 lg:col-span-3 text-start">
                  <div className="">
                    <h2 className="text-base">Old Navy</h2>
                    <div className="flex gap-2 text-xs text-gray-500">
                      <p>Color: Blue,</p>
                      <p>Size: 34</p>
                    </div>
                  </div>
                </div>

                <div className="col-span-1 text-start">
                  <p>Tk999.00</p>
                </div>

                <div className="col-span-1 text-center">
                  <p className="">10</p>
                </div>

                <div className="col-span-1">
                  <p className="">Tk999.00</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/*Sub Total */}
        <div className="w-full mt-5 px-10">
          <div className="w-full grid grid-cols-2 lg:grid-cols-6 items-center text-center lg:text-end">
            <div className="col-span-3 text-xs text-gray-400 text-start">
              Terms & Conditions
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-1">Subtotal</div>
            <div className="col-span-1">Tk999.00</div>
          </div>
        </div>

        {/* Shipping Charge */}
        <div className="w-full mt-2 px-10">
          <div className="w-full grid grid-cols-2 lg:grid-cols-6 items-center text-center lg:text-end">
            <div className="col-span-3"></div>
            <div className="col-span-1"></div>
            <div className="col-span-1 border-b-2 pb-2">Delivery Charge</div>
            <div className="col-span-1 border-b-2 pb-2">Tk140.00</div>
          </div>
        </div>

        {/* Total*/}
        <div className="w-full mt-2 px-10">
          <div className="w-full grid grid-cols-2 lg:grid-cols-6 items-center text-center lg:text-end">
            <div className="col-span-3"></div>
            <div className="col-span-1"></div>
            <div className="col-span-1 font-medium">Total</div>
            <div className="col-span-1 font-medium">Tk1139.00</div>
          </div>
        </div>

        <div className="mt-16 h-5 bg-primary"></div>
      </div>
    </div>
  );
};

export default Invoice;
