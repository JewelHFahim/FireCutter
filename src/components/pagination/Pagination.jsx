import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Pagination = ({ page, setPage, allProducts }) => {

  const handlePagination = (value) => {
    console.log(value);
    if (value === "dec" && page > 1) {
      console.log("dec");
      setPage(page - 1);
    }
    if (value === "inc" && page < allProducts?.pagination?.totalPage) {
      console.log("inc");
      setPage(page + 1);
    }
  };

  return (
    <div className="mt-10 flex justify-center items-center gap-5 text-xl">
      <button
        onClick={() => handlePagination("dec")}
        className="border border-primary px-5 py-2 text-primary hover:bg-primary disabled:border-gray-400 disabled:text-white disabled:bg-gray-300 disabled:cursor-not-allowed hover:text-white transition-all duration-300 ease-in-out hover:border-white"
        disabled={page === 1}
      >
        <BsArrowLeft />
      </button>

      <div className="text-sm font-medium">
        <p>
          Page {allProducts?.pagination?.currentPage} of{" "}
          {allProducts?.pagination?.totalPage}
        </p>
      </div>

      <button
        onClick={() => handlePagination("inc")}
        className="border border-primary px-5 py-2 text-primary hover:bg-primary disabled:border-gray-400 disabled:text-white disabled:bg-gray-300 disabled:cursor-not-allowed hover:text-white transition-all duration-300 ease-in-out hover:border-white"
        disabled={page === allProducts?.pagination?.totalPage}
      >
        <BsArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
