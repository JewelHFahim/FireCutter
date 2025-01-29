"use client";

import { addToCart } from "@/redux/features/cart/cartSlice";
import React from "react";
import toast from "react-hot-toast";
import { BsCart } from "react-icons/bs";
import { useDispatch } from "react-redux";

const AddToCartHomePage = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddTocart = (prod) => {
    dispatch(addToCart(prod));
    toast.success("Added to cart");
  };

  return (
    <button
      type="button"
      onClick={() => handleAddTocart(product)}
      className="w-full h-full bg-black text-white flex items-center justify-center gap-2"
    >
      Add to cart <BsCart />
    </button>
  );
};

export default AddToCartHomePage;
