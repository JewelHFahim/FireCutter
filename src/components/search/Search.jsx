"use client";

import React, { useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";

const Search = ({ isOpen, setIsOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }

    // Cleanup function to ensure scrolling is re-enabled when the component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-[999]">
      <div className="w-full h-[120px] sm:h-[190px] bg-white">

        <div className="w-full h-full flex items-center justify-center gap-1 px-2 sm:px-0">
          <div className="w-[95%] sm:w-[50%] border border-gray-700 relative h-[42px]">
            <input
              type="text"
              placeholder="Search"
              className="h-full w-full px-4 placeholder:text-orange-300 text-primary"
            />

            <div className="absolute top-1/2 -translate-y-1/2 right-4 text-primary text-xl">
              <BsSearch />
            </div>
          </div>

          <button onClick={() => setIsOpen(false)} className="text-3xl">
            <IoCloseOutline />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Search;
