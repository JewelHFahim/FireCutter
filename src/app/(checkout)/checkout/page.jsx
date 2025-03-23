"use client";

import CheckoutFooter from "@/components/checkouts/CheckoutFooter";
import DeliveryChargePaymentProcess from "@/components/checkouts/DeliveryChargePaymentProcess";
import MobileOrderSummery from "@/components/checkouts/MobileOrderSummery";
import OrderListAndPriceSummery from "@/components/checkouts/OrderListAndPriceSummery";
import PaymentMethodAccrodian from "@/components/checkouts/PaymentMethodAccrodian";
import ShppingCost from "@/components/checkouts/ShppingCost";
import SubmitButton from "@/components/checkouts/SubmitButton";
import { districts } from "@/components/districts/Districts";
import { extractUserIdFromToken } from "@/components/private/extractUserIdFromToken";
import PrivateRoute from "@/components/private/PrivateRoute";
import { clearCart } from "@/redux/features/cart/cartSlice";
import { useCreateOrderMutation } from "@/redux/features/orders/orderApis";
import { useUserDetailsQuery } from "@/redux/features/users/userApis";
import Loader from "@/utils/loader/Loader";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

export default function CheckoutPage() {
  const route = useRouter();
  const dispatch = useDispatch();
  // const token = Cookies.get("fc_token");
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const { products, total } = useSelector((state) => state.cart);
  // const { products, total } = JSON?.parse(localStorage?.getItem("cart"));

  const userId = extractUserIdFromToken();
  const { data: userDetails } = useUserDetailsQuery(userId);
  const [createOrder, { isLoading }] = useCreateOrderMutation();

  const [selectedMethod, setSelectedMethod] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const city = watch("city");
  const isMatch = city === "Dhaka";

  useEffect(() => {
    if (isMatch) {
      setSelectedMethod("COD");
    } else {
      setSelectedMethod("bKash");
    }
  }, [isMatch]);

  useEffect(() => {
    if (userDetails?.data) {
      setValue("contact", userDetails?.data?.phone);
      setValue("fullName", userDetails?.data?.fullName);
      setValue("delivery_address", userDetails?.data?.address);
      setValue("contact_phone", userDetails?.data?.phone);
    }
  }, [userDetails, setValue]);

  const onSubmit = async (data) => {
    const orders = products?.map((product) => {
      return {
        product_id: product?._id,
        quantity: product?.quantity,
        price: product?.sale_price,
        size: product?.sizes,
      };
    });

    const payment_details = {
      payment_number: data.payment_number,
      transaction_id: data.transaction_id,
    };

    const orderDatas = {
      user_id: userDetails?.data?._id,
      products: orders,
      total_price: total,
      delivery_charge: isMatch ? 70 : 140,
      delivery_address: `${data?.delivery_address}, ${data.city} - ${data.postalCode}`,
      contact_phone: data?.contact_phone,
      payment_method: selectedMethod,
      payment_details,
    };

    try {
      const response = await createOrder(orderDatas);

      if (response?.data?.status) {
        toast.success(response?.data?.message);
        dispatch(clearCart());
        route.push(`/invoice/${response?.data?.data?._id}`);
      }
      if (response?.error?.data) {
        toast.error(response?.error?.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const inputStyle =
    "w-full h-full focus:outline-teal-600 focus:ring-2 focus:ring-teal-300 transition-all duration-150 px-3 pt-5 rounded-md";
  const inputCotainer =
    "relative h-[55px] border w-full mt-1 text-sm rounded-md";
  const labelStyle = "absolute top-1 left-3 text-[11px] text-gray-400";

  return (
    <PrivateRoute>
      {isLoading ? (
        <div className="flex justify-center items-center h-[60vh]">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Order Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:w-1/2 overflow-auto py-5 lg:py-8 md:pl-1 md:pr-6"
          >
            {/* Contact */}
            <div>
              <h2 className="text-lg font-medium">Contact</h2>

              <div className={inputCotainer}>
                <label className={labelStyle}>Email or phone number</label>
                <input
                  type="text"
                  placeholder="Email or mobile phone number"
                  className={inputStyle}
                  {...register("contact", { required: true })}
                />
                {errors.contact && (
                  <span className="text-red-500 text-xs">
                    Contact is required
                  </span>
                )}
              </div>
            </div>

            <p className="text-[11px] mt-4 d:mt-2 text-gray-400">
              You may receive text messages related to order confirmation and
              shipping updates.
            </p>

            {/* Name, Address, City, PostalCode, Phone */}
            <div className="mt-5">
              <h2 className="text-lg font-medium">Delivery</h2>

              {/* Name */}
              <div className={inputCotainer}>
                <p className={labelStyle}> Full name </p>
                <input
                  type="text"
                  placeholder="Full name"
                  className={inputStyle}
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && (
                  <p className={`text-red-500 text-xs`}>
                    Full name is required
                  </p>
                )}
              </div>

              {/* Address */}
              <div className={`mt-5 ${inputCotainer}`}>
                <p className={labelStyle}>Address</p>
                <input
                  type="text"
                  placeholder="Address in details"
                  defaultValue={userDetails?.data?.address}
                  className={inputStyle}
                  {...register("delivery_address", { required: true })}
                />
                {errors.delivery_address && (
                  <span className="text-red-500 text-xs">
                    Address is required
                  </span>
                )}
              </div>

              {/* City and Postal Code */}
              <div className="mt-4 w-full flex flex-col md:flex-row items-center gap-6 md:gap-3">
                <div className={inputCotainer}>
                  <p className={labelStyle}>City</p>
                  <select
                    {...register("city", { required: true })}
                    className={inputStyle}
                  >
                    {districts.map((item) => (
                      <option key={item.id} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>

                  {errors.city && (
                    <span className="text-red-500 text-xs">
                      City name is required
                    </span>
                  )}
                </div>

                <div className={inputCotainer}>
                  <p className={labelStyle}>Postal code</p>
                  <input
                    type="number"
                    placeholder="Postal code"
                    className={inputStyle}
                    {...register("postalCode", { required: true })}
                  />
                  {errors.postalCode && (
                    <span className="text-red-500 text-xs">
                      Postal code is required
                    </span>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div className={`mt-5 ${inputCotainer}`}>
                <p className={labelStyle}>Phone</p>
                <input
                  type="text"
                  placeholder="Phone"
                  className={inputStyle}
                  {...register("contact_phone", { required: true })}
                />
                {errors.contact_phone && (
                  <span className="text-red-500 text-xs">
                    Phonr number is required
                  </span>
                )}
              </div>
            </div>

            {/* Shipping Methods */}
            <ShppingCost isMatch={isMatch} />

            {/* Payment Methods */}
            <div className="mt-8">
              <h2 className="text-lg font-medium"> Payment </h2>
              <p
                className={`text-[13px] ${
                  !isMatch ? "text-red-500" : "text-gray-400"
                }`}
              >
                Outside Dhaka delivery charge 140tk have to by bKash/Nagad.
              </p>

              <div className="border rounded-md mt-3">
                <PaymentMethodAccrodian
                  selectedMethod={selectedMethod}
                  setSelectedMethod={setSelectedMethod}
                />

                {/* Dropdown Bkash Fileds */}
                <div
                  className={`bg-gray-50 p-4 pb-8 text-sm rounded-b-md ${
                    selectedMethod === "bKash" ? "h-max" : "h-0 hidden"
                  }`}
                >
                  <DeliveryChargePaymentProcess />

                  <div className="mt-3 w-full flex flex-col md:flex-row items-center gap-3">
                    <div className="w-full md:w-1/2 relative h-[55px] border mt-1 text-sm rounded-md">
                      <p className={labelStyle}>
                        Send money number{" "}
                        <span className="text-red-500">*</span>
                      </p>
                      <input
                        type="text"
                        placeholder="Send money number"
                        className={inputStyle}
                        {...register("payment_number", {
                          required:
                            selectedMethod === "bKash" || (!isMatch && true),
                        })}
                      />
                      {errors.payment_number && (
                        <span className="text-red-500 text-sm mt-1">
                          Send money number is required
                        </span>
                      )}
                    </div>

                    <div className="w-full md:w-1/2 relative h-[55px] border mt-4 md:mt-0 text-sm rounded-md">
                      <p className={labelStyle}>
                        TrxID <span className="text-red-500">*</span>
                      </p>
                      <input
                        type="text"
                        placeholder="TrxID"
                        className={inputStyle}
                        {...register("transaction_id", {
                          required:
                            selectedMethod === "bKash" || (!isMatch && true),
                        })}
                      />
                      {errors.transaction_id && (
                        <span className="text-red-500 text-sm mt-1">
                          TrxID is required
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Order Summery */}
            <MobileOrderSummery
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              isMatch={isMatch}
            />

            {/* Submit Button */}
            <SubmitButton products={products} />

            {/* Footer */}
            <CheckoutFooter />
          </form>

          {/* Order List and Price Summery */}
          <div className="hidden lg:block lg:w-1/2 sticky top-0 z-50 bg-[#e8f3f6] md:p-8">
            <OrderListAndPriceSummery isMatch={isMatch}/>
          </div>
        </div>
      )}
    </PrivateRoute>
  );
}
