"use client";

import ProductCard from "@/components/card/ProductCard";
import FilterSort from "@/components/filter/FilterSort";
import Pagination from "@/components/pagination/Pagination";
import { useGetAllProductsQuery } from "@/redux/features/products/productApis";
import Loader from "@/utils/loader/Loader";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  const [page, setPage] = useState(1);
  // const dispatch = useDispatch();
  const { data: allProducts, isLoading } = useGetAllProductsQuery(page);
  const totalCount = allProducts?.pagination?.totalCount;
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const cart = JSON.parse(localStorage.getItem("cart")) || {
  //       products: [],
  //       total: 0,
  //       totalQuantity: 0,
  //     };
  //     dispatch(setCart(cart));
  //   }
  // }, [dispatch]);

  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center h-[50vh]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="w-full">
      <FilterSort totalCount={totalCount} />

      {isLoading ? (
        <div className="w-full flex justify-center items-center h-[50vh]">
          <Loader />
        </div>
      ) : (
        <div className="mt-5 w-full grid grid-cols-2 md:grid-cols-3 justify-between items-center gap-x-5 gap-y-8">
          {allProducts?.data?.map((product, idx) => (
            <ProductCard key={idx} product={product} idx={idx} />
          ))}
        </div>
      )}

      <Pagination page={page} setPage={setPage} allProducts={allProducts} />
    </div>
  );
};

export default Home;
