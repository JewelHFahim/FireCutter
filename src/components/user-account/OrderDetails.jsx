import React from "react";
import { useGetSingleOrdersQuery } from "@/redux/features/orders/orderApis";

const OrderDetails = ({ orderId }) => {
  const { data: orderdetails, isLoading } = useGetSingleOrdersQuery(orderId);
  const details = orderdetails?.data;
  console.log(details);

  return (
    <div className="py-2">
      {/* Billing Address */}
      <div className=" w-full px-10">
        <div className="w-full grid grid-cols-2 lg:grid-cols-6 text-center lg:text-end">
          <div className="col-span-4 text-start text-sm text-gray-600">
            <h3 className="font-medium text-black">Bill to:</h3>
            <p>{details?.user_id?.fullName}</p>
            <p>{details?.user_id?.phone}</p>
            <p>{details?.user_id?.address}</p>
          </div>

          <div className="col-span-2 text-start text-sm text-gray-600">
            <h3 className="font-medium text-black">Invoice No:</h3>
            <p>Invoice: #{orderId?.slice(-5)}</p>
            <p>Date: {details?.createdAt?.split("T")[0]}</p>
          </div>
        </div>
      </div>

      {/* thead */}
      <div className="mt-5 w-full bg-primary text-white py-3 px-10 grid grid-cols-2 lg:grid-cols-6 text-end text-gray-70 uppercase">
        <div className="col-span-3 text-start">Product</div>
        <div className="col-span-1 text-start">Price</div>
        <div className="col-span-1 text-center">Quantity</div>
        <div className="col-span-1 text-end">Total</div>
      </div>

      {/* product row */}
      <div className="flex flex-col gap-y- px-10">
        {details?.products?.map((product) => (
          <div
            key={product?.product_id?._id}
            className="w-full border-b-2 py-4"
          >
            <div className="w-full grid grid-cols-3 lg:grid-cols-6 items-center text-end">
              <div className="col-span-2 lg:col-span-3 text-start">
                <div className="">
                  <h2 className="text-base">{product?.product_id?.title}</h2>
                  <div className="flex gap-2 text-xs text-gray-500">
                    <p>Color: Blue </p>
                    <p>Size: {product?.size} </p>
                  </div>
                </div>
              </div>

              <div className="col-span-1 text-start">
                <p>Tk{product?.product_id?.sale_price} </p>
              </div>

              <div className="col-span-1 text-center">
                <p className="">{product?.quantity} </p>
              </div>

              <div className="col-span-1">
                <p className="">
                  Tk{product?.quantity * product?.product_id?.sale_price}
                </p>
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
          <div className="col-span-1">Tk{details?.total_price - details?.delivery_charge}</div>
        </div>
      </div>

      {/* Shipping Charge */}
      <div className="w-full mt-2 px-10">
        <div className="w-full grid grid-cols-2 lg:grid-cols-6 items-center text-center lg:text-end">
          <div className="col-span-3"></div>
          <div className="col-span-1"></div>
          <div className="col-span-1 border-b-2 pb-2">Delivery Charge</div>
          <div className="col-span-1 border-b-2 pb-2">Tk{details?.delivery_charge}.00</div>
        </div>
      </div>

      {/* Total*/}
      <div className="w-full mt-2 px-10">
        <div className="w-full grid grid-cols-2 lg:grid-cols-6 items-center text-center lg:text-end">
          <div className="col-span-3"></div>
          <div className="col-span-1"></div>
          <div className="col-span-1 font-medium">Total</div>
          <div className="col-span-1 font-medium">Tk{details?.total_price}</div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
