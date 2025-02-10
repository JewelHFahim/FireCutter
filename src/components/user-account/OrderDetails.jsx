import { useGetSingleOrdersQuery } from "@/redux/features/orders/orderApis";

const OrderDetails = ({ orderId }) => {
  const { data: orderdetails, isLoading } = useGetSingleOrdersQuery(orderId);
  const details = orderdetails?.data;

  return (
    <div className="py-2">
      {/* Billing Address */}
      <div className="w-full px-4 lg:px-10">
        <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-start text-center gap-y-5 lg:text-end">
          <div className="col-span-4 text-start text-sm text-gray-600">
            <h3 className="font-medium text-black">Bill to:</h3>
            <p>{details?.user_id?.fullName}</p>
            <p>{details?.user_id?.phone}</p>
            <p className="w-[90%]">{details?.user_id?.address}</p>
          </div>

          <div className="col-span-2 text-start text-sm text-gray-600">
            <h3 className="font-medium text-black">Invoice No:</h3>
            <p>Invoice: #{orderId?.slice(-5)}</p>
            <p>Date: {details?.createdAt?.split("T")[0]}</p>
          </div>
        </div>
      </div>

      {/* thead */}
      <div className="mt-5 w-full bg-primary text-white py-1 md:py-3 px-2 md:px-10 grid grid-cols-5 lg:grid-cols-6 text-end text-gray-70 uppercase text-sm md:text-base">
        <div className="col-span-2 md:col-span-3 text-start">Product</div>
        <div className="col-span-1 text-start">Price</div>
        <div className="col-span-1 text-center">Quantity</div>
        <div className="col-span-1 text-end">Total</div>
      </div>

      {/* product row */}
      <div className="flex flex-col px-2 md:px-10">
        {details?.products?.map((product) => (
          <div
            key={product?.product_id?._id}
            className="w-full border-b-2 py-4"
          >
            <div className="w-full grid grid-cols-5 md:grid-cols-6 items-center text-end">
              <div className="col-span-2 md:col-span-3 text-start">
                <div className="">
                  <h2 className="text-sm md:text-base">{product?.product_id?.title}</h2>
                  <div className="flex gap-2 text-xs text-gray-500">
                    <p>Color: Blue </p>
                    <p>Size: {product?.size} </p>
                  </div>
                </div>
              </div>

              <div className="col-span-1 text-start">
                <p className="text-sm md:text-base">Tk{product?.product_id?.sale_price} </p>
              </div>

              <div className="col-span-1 text-center">
                <p className="text-sm md:text-base">{product?.quantity} </p>
              </div>

              <div className="col-span-1">
                <p className="text-sm md:text-base">
                  Tk{product?.quantity * product?.product_id?.sale_price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*Sub Total */}
      <div className="w-full mt-2 md:mt-5 px-2 md:px-10">
        <div className="w-full grid grid-cols-12 items-center text-center lg:text-end text-sm md:text-base">
          <div className="col-span-6 md:col-span-8 text-xs text-gray-400 text-start">
            Terms & Conditions
          </div>
          <div className="col-span-3 md:col-span-2 text-end">Subtotal</div>
          <div className="col-span-3 md:col-span-2 text-end">Tk{details?.total_price - details?.delivery_charge}</div>
        </div>
      </div>

      {/* Shipping Charge */}
      <div className="w-full mt-2 px-2 md:px-10">
        <div className="w-full grid grid-cols-12 items-center text-cente text-sm md:text-base lg:text-end text-end">
          <div className="col-span-4 md:col-span-7"></div>
          <div className="col-span-5 md:col-span-3 border-b-2 pb-2">Delivery Charge</div>
          <div className="col-span-3 md:col-span-2 border-b-2 pb-2">Tk{details?.delivery_charge}.00</div>
        </div>
      </div>

      {/* Total*/}
      <div className="w-full mt-2 px-2 md:px-10">
        <div className="w-full grid grid-cols-12 items-center text-end text-sm md:text-base lg:text-end">
          <div className="col-span-6 md:col-span-8"></div>
          <div className="col-span-3 md:col-span-2 font-medium">Total</div>
          <div className="col-span-3 md:col-span-2 font-medium">Tk{details?.total_price}</div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
