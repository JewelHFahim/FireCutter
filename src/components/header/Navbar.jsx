"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { RiShoppingBagLine } from "react-icons/ri";
import Search from "../search/Search";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    {
      icon: <FaRegUser />,
      path: "/account/login",
    },
    {
      icon: <RiShoppingBagLine />,
      path: "/cart",
    },
  ];

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
          <ul className="flex justify-end items-center gap-5 text-gray-600">
            <div className="md:w-8 md:h-8 flex justify-center items-center rounded-full md:bg-gray-100 hover:text-primary transition-all duration-150 ease-in-out">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="text-lg md:text-xl"
              >
                <IoSearch />
              </button>
            </div>

            {menus.map((menu, idx) => (
              <li
                key={idx}
                className="md:w-8 md:h-8 flex justify-center items-center rounded-full md:bg-gray-100 hover:text-primary transition-all duration-150 ease-in-out"
              >
                <Link href={menu.path} className="text-lg md:text-xl">
                  {menu.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isOpen && <Search isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Navbar;
