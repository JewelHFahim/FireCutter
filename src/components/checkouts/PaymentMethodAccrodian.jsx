import React from 'react'

const PaymentMethodAccrodian = ({selectedMethod, setSelectedMethod}) => {
  return (
    <div>
         {/* COD */}
         <div
              onClick={() => setSelectedMethod("COD")}
              className={`${ selectedMethod === "COD" ? "border-teal-500" : "border-b-0" } border rounded-t-md px-4 h-[50px] flex items-center gap-5 cursor-pointer`}>
              <div className={`${ selectedMethod === "COD" ? "border-teal-500 border-[6px]" : "border" } w-5 h-5 rounded-full`}></div>
              <p className="text-sm">Cash on Delivery (COD)</p>
            </div>

            {/* BKash */}
            <div
              onClick={() => setSelectedMethod("bKash")}
              className={`${ selectedMethod === "bKash" ? "border-teal-500" : "border-t-0 rounded-b-md" } border rounded-b-m px-4 h-[50px] flex items-center gap-5 cursor-pointer`}>
              <div className={`${ selectedMethod === "bKash" ? "border-teal-500 border-[6px]" : "border" } w-5 h-5 rounded-full`}></div>
              <p className="text-sm">bKash</p>
            </div>
    </div>
  )
}

export default PaymentMethodAccrodian