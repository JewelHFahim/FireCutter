"use client";

import ProductCard from "@/components/card/ProductCard";
import FilterSort from "@/components/filter/FilterSort";
import Pagination from "@/components/pagination/Pagination";
import { useGetAllProductsQuery } from "@/redux/features/products/productApis";
import Loader from "@/utils/loader/Loader";

const Home = () => {
  const { data: allProducts, isLoading } = useGetAllProductsQuery();

  return (
    <div className="w-full">
      <FilterSort />

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

      <Pagination />
    </div>
  );
};

export default Home;
