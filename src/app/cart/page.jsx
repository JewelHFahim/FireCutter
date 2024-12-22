import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cart = () => {

  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center">
      <div className="mt-4 w-full h-full flex flex-col justify-cente items-center">
        <h2 className="text-[28px] lg:text-4xl font-semibold">Your cart</h2>
        <Link href="" className="text-primary my-2 underline underline-offset-4">
          Continue shopping
        </Link>
      </div>

      <div className="mt-10 w-full">
        {/* thead */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-6 text-end text-gray-70 uppercase">
          <div className="col-span-1 lg:col-span-3 text-start">Product</div>
          <div className="col-span-1">Price</div>
          <div className="hidden lg:block lg:col-span-1">Quantity</div>
          <div className="hidden lg:block lg:col-span-1">Total</div>
        </div>

        {/* product row */}
        <div className="mt-10 flex flex-col gap-y-7">
          {[...Array(3)].map((item, idx) => (
            <div key={idx} className="w-full">
              <div className="w-full grid grid-cols-3 lg:grid-cols-6 items-center text-end text-gray-600">
                <div className="col-span-2 lg:col-span-3 text-start">
                  <div className="flex lg:items-center gap-3 lg:gap-5">
                    <div className="w-[56px] h-[56px] lg:w-[95px] lg:h-[95px] relative">
                      <Image src="/img1.webp" fill alt="product img" />
                    </div>

                    <div className="flex flex-col justify-start items-start gap-1">
                      <h2 className="text-[15px] lg:text-lg font-medium text-[#6d6d6d]">
                        Mens Blue Denim Pants
                      </h2>
                      <p className="text-sm">Size: 28</p>
                      <p className="text-sm">Color: BLUE</p>

                      <button className="mt-2 text-primary underline font-medium w-max">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-span-1">
                  <p>Tk2,688.00</p>
                </div>

                <div className="hidden lg:block col-span-1">
                  <input
                    type="number"
                    placeholder="1"
                    className="w-14 h-9 px-2 text-primary text-lg border border-gray-600"
                  />
                </div>

                <div className="hidden lg:block col-span-1">Tk2,502.00</div>
              </div>
            </div>
          ))}
        </div>

        {/*Sub Total */}
        <div className="w-full mt-10">
          <div className="w-full grid grid-cols-2 lg:grid-cols-6 items-center text-center lg:text-end text-gray-600">
            <div className="hidden lg:block col-span-3"></div>
            <div className="hidden lg:block col-span-1"></div>
            <div className="col-span-1 text-lg">Subtotal </div>
            <div className="col-span-1">Tk6,204.00 BDT</div>
          </div>
        </div>

        {/* Shipping Charge */}
        <div className="w-full mt-2">
          <div className="w-full grid grid-cols-6 items-center text-center lg:text-end text-gray-600">
            <div className="hidden lg:block col-span-1"></div>
            <div className="hidden lg:block col-span-1"></div>
            <div className="hidden lg:block col-span-1"></div>
            <div className="col-span-6 lg:col-span-3 text-sm">
              <Link href="/" className="underline font-medium mr-1">
                Shipping
              </Link>
              calculated at checkout
            </div>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="w-full mt-10">
          <div className="w-full grid grid-cols-6 items-center text-center lg:text-end text-gray-600">
            <div className="hidden lg:block col-span-3"></div>
            <div className="hidden lg:block col-span-1"></div>
            <div className="hidden lg:block col-span-1"></div>

            <div className="col-span-6 lg:col-span-1 text-sm">
              <button className="uppercase bg-primary py-2.5 px-8 text-sm hover:bg-orange-600 transition-all duration-300 text-white font-medium w-max">
                Check Out
              </button>
            </div>
          </div>
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
