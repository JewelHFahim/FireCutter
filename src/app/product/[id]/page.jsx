"use client";

import ProductCard from "@/components/card/ProductCard";
import SuggestionProductCard from "@/components/card/SuggessionProductCard";
import ImageZoom from "@/components/zoom/ImageZoom";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FaPinterest, FaTwitter } from "react-icons/fa";
import { RiFacebookBoxFill } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ProductDetails = () => {
  const [selectedValue, setSelectedValue] = React.useState("");
  const [current, setCurrent] = useState(0);
  const images = ["/img2.webp", "/img1.webp", "/img2.webp"];

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
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
            <h2 className="text-2xl font-medium">Mens Denim Pant</h2>

            <div className="mt-2 flex justify-between md:justify-start md:text-lg items-center font-medium gap-4">
              <div className="flex flex-col md:flex-row items-center md:gap-5">
                <p className="text-primary">Tk: 1500 BDT</p>
                <p className="line-through text-sm text-gray-500">
                  Price: 1800 BDT
                </p>
              </div>

              <div className="bg-primary text-white text-sm px-3">Sale</div>
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
                className={`border border-gray-400 font-medium text-sm md:border-gray-300 w-full h-[40px] px-4 text-primary`}
              >
                {[...Array(5)].map((item, idx) => (
                  <option value="" key={idx} className="text-black">
                    {30 + idx}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:w-1/2 flex flex-col gap-1">
              <p className="text-sm">Color</p>
              <select className="border w-full h-[40px] font-medium text-sm border-gray-400 md:border-gray-300 px-4  text-primary uppercase">
                {[...Array(3)].map((item, idx) => (
                  <option value="" key={idx} className="text-black">
                    Navy Blue {idx}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quantity */}
          <div className="w-max mt-2 flex flex-col gap-1">
            <p className="text-sm">Quantity</p>
            <input
              type="number"
              defaultValue="1"
              className="w-1/2 md:w-20 h-[40px] font-medium text-sm border border-gray-400 md:border-gray-300 px-2 text-primary "
            />
          </div>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3">
            <button className="w-full uppercase font-semibold border border-primary h-[40px] text-primary hover:text-orange-600 transition-all duration-200 hover:border-orange-600">
              Add To Cart
            </button>
            <button className="w-full uppercase font-semibold border bg-primary border-primary hover:bg-orange-600 transition-all duration-200 h-[40px] text-white">
              BUY IT NOW
            </button>
          </div>

          {/* Description */}
          <div className="mt-14 text-gray-500">
            <p className="text-sm italic">Code: BR-10</p>
            <p className="mt-3">
              This light grey denim pant is perfect for casual, everyday wear.
              Crafted with a lightweight and breathable fabric blend, these
              pants are designed to provide all-day comfort. With its mid-rise
              waistline, the pant creates a comfortable and secure fit on any
              body type.
            </p>
          </div>

          {/* Share Social */}
          <div className="mt-8 flex items-center gap-6">
            <Link href="" className="flex items-center gap-1">
              <RiFacebookBoxFill className="text-xl text-blue-800" />
              <span className="text-sm uppercase font-medium">Share</span>
            </Link>

            <Link href="" className="flex items-center gap-1">
              <FaTwitter className="text-xl text-cyan-500" />
              <span className="text-sm uppercase font-medium">Share</span>
            </Link>

            <Link href="" className="flex items-center gap-1">
              <FaPinterest className="text-xl text-red-700" />
              <span className="text-sm uppercase font-medium">Share</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Product Suggestions */}
      <div className="my-20">
        <div className="flex justify-center">
          <h1 className="text-lg font-medium uppercase">You may also like</h1>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between items-center gap-x-2 md:gap-x-5 gap-y-8">
          {[...Array(4)].map((product, idx) => (
            <SuggestionProductCard key={idx} product={product} />
          ))}
        </div>
      </div>

      {/* Back Home Button */}
      <div className="flex justify-center">
        <Link href="/">
          <button className="border-2 border-primary hover:border-orange-600 px-8 py-2 text-primary hover:text-orange-600 transition-all duration-200 ease-in-out font-medium uppercase flex items-center gap-2">
            <BsArrowLeft className="text-xl" /> <span>Back To Home</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
