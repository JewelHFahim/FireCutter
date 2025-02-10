"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { RiShoppingBagLine } from "react-icons/ri";
import Search from "../search/Search";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const totalQuantity = useSelector((state) => state.cart?.totalQuantity);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  // console.log(totalQuantity)
  // const {totalQuantity} = JSON?.parse(localStorage?.getItem("cart"));

  return (
    <div className="border-b py-4">
      <div className="w-[90vw] md:w-[90vw] lg:w-[65vw] mx-auto flex items-center justify-between">
        <div className="hidden md:block md:w-1/4"></div>

        <div className="md:w-2/4 flex flex-col justify-center md:items-center">
          <Link href="/" className="text-2xl font-semibold text-primary">
            Fire Cutter
          </Link>
          <p className="text-sm font-light text-gray-400 md:tracking-[3px]">
            Trend of Fashion
          </p>
        </div>

        <div className="md:w-1/4">
          <div className="flex justify-end items-center gap-5 text-gray-600">
            <div className="md:w-8 md:h-8 flex justify-center items-center rounded-full md:bg-gray-100 hover:text-primary transition-all duration-150 ease-in-out">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="text-2xl md:text-xl"
              >
                <IoSearch />
              </button>
            </div>

            <div className="md:w-8 md:h-8 flex justify-center items-center rounded-full md:bg-gray-100 hover:text-primary transition-all duration-150 ease-in-out">
              <Link href="/account" className="text-[22px] md:text-xl">
                <FaRegUser />
              </Link>
            </div>

            <div className="md:w-8 md:h-8 flex justify-center items-center rounded-full md:bg-gray-100 hover:text-primary transition-all duration-150 ease-in-out relative cursor-pointer">
              <Link href="/cart" className="text-2xl md:text-xl">
                <RiShoppingBagLine />
              </Link>

              {isClient && totalQuantity > 0 ? (
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                  {totalQuantity}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {isOpen && <Search isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Navbar;
