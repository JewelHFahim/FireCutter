import Image from 'next/image';
import React, { useState } from 'react';

const OrderedProductsDropdown = ({products, isOpen, setIsOpen}) => {

  return (
    <div className="w-full">
      {isOpen && (
        <div className='w-full py-2 mt-2 origin-top-center transition transform ease-out duration-100 scale-100 opacity-100'
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="flex flex-col gap-3">
            {products?.map((order, idx) => (
              <div
                key={idx}
                className="w-full flex items-center justify-between border-b border-gray-200 pb-2"
              >
                <div className="flex items-center gap-2">
                  <div className="relative w-[50px] h-[50px]">
                    <div className="w-full h-full relative rounded-md border-2 border-gray-400 overflow-hidden">
                      <Image
                        src="/img1.webp"
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="absolute -top-2 -right-2 bg-gray-500 text-white w-5 h-5 flex justify-center items-center rounded-full text-sm font-medium">
                      {order?.quantity}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium">
                     {order?.title}
                    </p>
                    <p className="text-[11px] text-gray-500">{order?.sizes} / {order?.colors}</p>
                  </div>
                </div>

                <div>
                  <p className="text-[13px] font-medium">
                    ৳<span>{order?.quantity * order?.sale_price}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderedProductsDropdown;
