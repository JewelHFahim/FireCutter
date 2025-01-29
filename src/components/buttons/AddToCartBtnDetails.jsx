import { addToCart } from "@/redux/features/cart/cartSlice";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const AddToCartBtnDetails = ({ product, size, color, quantity }) => {
  const dispatch = useDispatch();

  const handleAddTocart = (prod) => {
    const data = {...prod, sizes: size, colors: color, quantity};
    console.log(data);
    dispatch(addToCart(data));
    toast.success("Added to cart");
  };

  return (
    <button
      onClick={() => handleAddTocart(product)}
      className="w-full uppercase font-semibold border border-primary h-[40px] text-primary hover:bg-primary hover:text-white transition-all duration-200 hover:border-orange-600"
    >
      Add To Cart
    </button>
  );
};

export default AddToCartBtnDetails;
