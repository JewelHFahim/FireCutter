import { useState } from "react";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

const Pagination = ({orderList, page, setPage}) => {

    const handlePageination = (value) => {
        if(value === "dec") {
            setPage(orderList?.currentPage - 1 && orderList?.currentPage > 1);
        }
        if(value === "inc" && orderList?.currentPage < orderList?.totalPage) {
            setPage(orderList?.currentPage + 1);
        }
    }

  return (
    <div className="flex items-center gap-6 text-lg text-gray-500">
      <button onClick={()=>handlePageination("dec")} disabled={orderList?.currentPage > 1} className="disabled:opacity-50">
        <MdOutlineArrowBackIos />
      </button>
      <p className="text-sm">
        {orderList?.currentPage} of {orderList?.totalPage} page
      </p>
      <button onClick={()=>handlePageination("inc")} disabled={orderList?.currentPage < orderList?.totalPage} className="disabled:opacity-50">
        <MdOutlineArrowForwardIos />
      </button>
    </div>
  );
};

export default Pagination;
