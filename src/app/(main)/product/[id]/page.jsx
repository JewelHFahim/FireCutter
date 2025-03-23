"use client";

import ImageZoom from "@/components/zoom/ImageZoom";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useParams } from "next/navigation";
import { useProductDetailsQuery } from "@/redux/features/products/productApis";
import ProductSuggestion from "@/components/product-suggestions/ProductSuggestion";
import BackToHome from "@/components/buttons/BackToHome";
import SocialIcons from "@/components/social-icons/SocialIcons";
import BuyItNowBtn from "@/components/buttons/BuyItNowBtn";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cart/cartSlice";
import toast from "react-hot-toast";
import PDFGenerator from "@/components/pdf/PDFGenerator";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(0);
  const { data: productDetails, isLoading } = useProductDetailsQuery(id);
  const product = productDetails?.data;
  const [size, setSize] = useState();
  const [color, setColor] = useState();
  const images = ["/img2.webp", "/img1.webp", "/img2.webp"];

  useEffect(() => {
    if (product) {
      setSize(product.sizes[0] || "N/A");
      setColor(product.colors[0] || "N/A");
    }
  }, [product]);

  const handleAddTocart = (item) => {
    const data = { ...item, sizes: size, colors: color, quantity: 1};
    dispatch(addToCart(data));
    toast.success("Added to cart");
  };

  return (
    <div className="min-h-screen mt-2">
      <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Image Section */}
        <div className="md:w-[60%] flex flex-col gap-4">
          <ImageZoom src={images[current]} />

          <div className="flex items-center justify-between">
            <IoIosArrowBack className="md:hidden text-xl" />

            <div className="grid grid-cols-3 items-center self-center md:self-start justify-center lg:justify-start gap-3">
              {images.map((item, idx) => (
                <div
                  key={idx}
                  className={`w-20  h-20 lg:w-[120px] lg:h-[120px] border relative cursor-pointer ${
                    current === idx ? "border-primary" : "border-gray-300"
                  }`}
                  onClick={() => setCurrent(idx)}
                >
                  <Image
                    src={item}
                    alt=""
                    fill
                    className="border-[4px] border-white"
                  />
                </div>
              ))}
            </div>

            <IoIosArrowForward className="md:hidden text-xl" />
          </div>
        </div>

        {/* Title and Price */}
        <div className="md:w-[40%]">
          <div className="">
            <h2 className="text-2xl font-medium">{product?.title}</h2>

            <div className="mt-2 flex justify-between md:justify-start md:text-lg items-center font-medium gap-4">
              <div className="flex flex-col md:flex-row items-center md:gap-5">
                <p className="text-primary">Tk: {product?.sale_price} BDT</p>
                <p className="line-through text-sm text-gray-500">
                  Price: {product?.discount_price} BDT
                </p>
              </div>

              <div
                className={`${
                  product?.current_status === "sale"
                    ? "bg-primary"
                    : "bg-red-500"
                } text-white text-sm px-3`}
              >
                {product?.current_status}
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Shipping calculated at checkout.
            </p>
          </div>

          {/* Select Size and Color */}
          <div className="mt-10 flex flex-col md:flex-row md:items-center gap-2 md:gap-5">
            <div className="md:w-1/2 flex flex-col gap-1">
              <p className="text-sm">Size</p>
              <select
                aria-label="Select size"
                onChange={(e) => {
                  setSize(e.target.value);
                }}
                className={`border border-gray-400 font-medium text-sm md:border-gray-300 w-full h-[40px] px-4 text-primary focus:outline-primary`}
              >
                {product?.sizes.map((size) => (
                  <option value={size} key={size} className="text-black">
                    {size}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:w-1/2 flex flex-col gap-1">
              <p className="text-sm">Color</p>
              <select
                aria-label="Select color"
                onChange={(e) => {
                  setColor(e.target.value);
                }}
                className="border w-full h-[40px] font-medium text-sm border-gray-400 md:border-gray-300 px-4  text-primary uppercase focus:outline-primary"
              >
                {product?.colors?.map((color) => (
                  <option value={color} key={color} className="text-black">
                    {color}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quantity */}
          {/* <div className="w-max mt-2 flex flex-col gap-1">
            <p className="text-sm">Quantity</p>
            <input
              type="number"
              min={0}
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
              className="w-20 h-[40px] flex justify-center items-center font-medium text-sm border border-gray-400 md:border-gray-300 px-2 text-primary focus:outline-primary"
            />
          </div> */}

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3">
            <button
              onClick={() => handleAddTocart(product)}
              className="w-full uppercase font-semibold border border-primary h-[40px] text-primary hover:bg-primary hover:text-white transition-all duration-200 hover:border-orange-600"
            >
              Add To Cart
            </button>

            <BuyItNowBtn product={product} />
          </div>

          {/* Description */}
          <div className="mt-14 text-gray-500">
            <p className="text-sm italic">Code: {product?.sku} </p>
            <p className="mt-3"> {product?.description} </p>
          </div>

          {/* Share Social */}
          <SocialIcons />
        </div>
      </div>

      {/* Product Suggestions */}
      <ProductSuggestion />

      <PDFGenerator/>

      {/* Back Home Button */}
      <BackToHome />
    </div>
  );
};

export default ProductDetails;
