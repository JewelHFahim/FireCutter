"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import toast from "react-hot-toast";
import { addToCart, removeFromCart, singleRemoveFromCart } from "@/redux/features/cart/cartSlice";
import { FiMinus, FiPlus } from "react-icons/fi";

const Cart = () => {
  const dispatch = useDispatch();
  const {products, total } = useSelector( state=> state.cart )
  // const {products, total }  = JSON?.parse(localStorage?.getItem("cart"));
  const [quantity, setQuantity] = useState();

  const handleAddTocart = (item) => {
    dispatch(addToCart(item));
    toast.success("Added to cart");
  };

  const handleRemoveFromCart = (item) => {
    dispatch(singleRemoveFromCart(item));
    toast.success("Removed from cart");
  };

  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center">
      {products?.length > 0 ? (
        <div  className="mt-4 w-full h-full ">
          
          <div className="flex flex-col justify-cente items-center">
            <h2 className="text-[28px] lg:text-4xl font-semibold">Your cart</h2>
            <Link
              href="/"
              className="text-primary my-2 underline underline-offset-4"
            >
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
              {products.map((item, idx) => (
                <div key={idx} className="w-full">
                  <div className="w-full grid grid-cols-3 lg:grid-cols-6 items-center text-end text-gray-600">
                    <div className="col-span-2 lg:col-span-3 text-start">
                      <div className="flex lg:items-center gap-2 lg:gap-5">
                        <div className="w-[56px] h-[65px] lg:w-[95px] lg:h-[100px] relative">
                          <Image src="/img1.webp" fill alt="product img" />
                        </div>

                        <div className="flex flex-col justify-start items-start gap-1">
                          <h2 className="text-[15px] lg:text-lg font-medium text-[#6d6d6d]">
                            {item?.title}
                          </h2>
                          <p className="text-sm">Size: {item?.sizes}</p>
                          <p className="text-sm">Color: {item?.colors}</p>

                          <button onClick={()=> {dispatch(removeFromCart(item)), toast.success("Removed item")}} className="mt-1 text-primary underline font-medium w-max">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1">
                      <p>Tk{item?.sale_price}</p>
                    </div>

                    <div className="hidden col-span-1 w-full lg:flex justify-end items-center gap-2">
                      <button
                        onClick={
                          () => handleRemoveFromCart(item)
                          // setQuantity(Number(item?.quantity + 1))
                        }
                        type="button"
                      >
                        <FiMinus />
                      </button>

                      <p className="px-4 py-1 text-primary text-lg border-2 border-gray-400 text-center">
                        {item?.quantity}
                      </p>

                      <button
                        onClick={() => {
                          handleAddTocart(item),
                            setQuantity(Number(item?.quantity + 1));
                        }}
                        type="button"
                      >
                        <FiPlus />
                      </button>
                    </div>

                    <div className="hidden lg:block col-span-1">
                      Tk{(item?.quantity || quantity) * item?.sale_price}
                    </div>
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
                <div className="col-span-1">Tk{total} BDT</div>
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
                  <Link href="/checkout">
                    <button
                      type="button"
                      className="uppercase bg-primary py-2.5 px-12 text-sm hover:bg-orange-600 transition-all duration-300 text-white font-medium w-max"
                    >
                      Check Out
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center pt-5 gap-6">
          <h2 className="text-4xl font-semibold">Your cart</h2>
          <p className="text-gray-400">Your cart is currently empty.</p>

          <Link href="/">
            <button className="flex items-center gap-1 uppercase font-medium text-white bg-primary hover:bg-orange-600 transition-all duration-300 ease-in-out w-max px-2.5 py-2 rounded-sm">
              Continue Shopping <HiMiniArrowLongRight className="text-2xl" />
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
