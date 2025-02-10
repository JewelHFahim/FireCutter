"use client"

import { IoIosArrowDown } from "react-icons/io";
import OrderedProductsDropdown from "./OrderedProductsDropdown";

const MobileOrderSummery = ({isMatch, isOpen, setIsOpen }) => {
  const cart = JSON?.parse(localStorage?.getItem("cart"));
  const products = cart?.products ? cart?.products : [];
  const totalQuantity = cart?.totalQuantity > 0 ? cart?.totalQuantity : 0;
  const total = cart?.total > 0 ? cart?.total : 0;

  return (
    <div className="mt-8 lg:hidden">
      <div className="">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Order summery</h3>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-sm text-cyan-500 flex items-center gap-1"
          >
            {isOpen ? "Hide" : "Show"}
            <IoIosArrowDown className="text-gray-800" />
          </button>
        </div>

        <div className="mt-6 h-max w-full transition transform ease-out duration-100">
          <OrderedProductsDropdown
            products={products}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <div className="flex items-center justify-between text-sm">
            <p>Subtotal • {totalQuantity} items</p>
            <p>৳ {(total > 0 ? total : "00.0")}</p>
          </div>

          <div className="flex items-center justify-between text-sm">
            <p>Shipping</p>
            <p>৳{isMatch && total > 0 ? 70 : 140}.00 </p>
          </div>

          <div className="flex items-center justify-between font-medium text-lg">
            <p className="text-">Total</p>
            <p>
              <span className="text-xs font-normal"> BDT </span> ৳{total + (total > 0 ? 140 : 0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileOrderSummery;
