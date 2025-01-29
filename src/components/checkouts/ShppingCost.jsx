import React from "react";

const ShppingCost = ({isMatch}) => {

  return (
    <div className="mt-5">
      <h2 className="font-medium">Shipping method</h2>

      <div className="mt-2 border border-teal-500 text-sm p-3 flex flex-col rounded-lg">
        <div className="flex items-center justify-between ">
          <p className="text-gray-700">Delivery Charge</p>
          <p className="font-medium">৳{isMatch ? 70 : 140}.00</p>
        </div>
      </div>
    </div>
  );
};

export default ShppingCost;
