import Link from "next/link";
import React from "react";
import { BsBag } from "react-icons/bs";

const CheckoutNavbar = () => {
  return (
    <nav className="w-full border-b">

      <div className="flex items-center justify-between h-[80px] px-4 sm:px-0 sm:w-[80vw] mx-auto">
        <div className="flex flex-col justify-center md:items-center">
          <Link href="/" className="text-xl sm:text-2xl font-semibold text-primary">
            Fire Cutter
          </Link>
          <p className="text-sm font-light text-gray-400 md:tracking-[3px]">
            Trend of Fashion
          </p>
        </div>

        <div>
          <Link href="/cart" className="text-xl text-teal-600">
            <BsBag />
          </Link>
        </div>
      </div>

    </nav>
  );
};

export default CheckoutNavbar;
