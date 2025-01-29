import Image from "next/image";

const OrderListAndPriceSummery = () => {
  const cart = JSON?.parse(localStorage?.getItem("cart"));
  const products = cart?.products;
  const totalQuantity = cart?.totalQuantity;
  const total = cart?.total || "00.0";


  return (
    <div className="h-full">
      <div className="flex flex-col gap-3">
        {products?.map((order, idx) => (
          <div
            key={idx}
            className="w-full flex items-center justify-between border-b border-gray-300 pb-2"
          >
            <div className="flex items-center gap-2">
              <div className="relative w-[60px] h-[65px]">
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

        <div className="flex flex-col gap-2 mt-4">
          <div className="flex items-center justify-between text-sm">
            <p>Subtotal • {totalQuantity} items</p>
            <p>৳{total}</p>
          </div>

          <div className="flex items-center justify-between text-sm">
            <p>Shipping</p>
            <p>৳{ total > 0 ? 140.00 : "00.0"}</p>
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

export default OrderListAndPriceSummery;
