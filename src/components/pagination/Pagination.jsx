import React from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const Pagination = () => {
  return (
    <div className="mt-10 flex justify-center items-center gap-5 text-xl">
        <button className="border border-primary px-5 py-2 text-primary hover:bg-primary hover:text-white transition-all duration-300 ease-in-out hover:border-white">
          <BsArrowLeft />
        </button>

        <div className="text-sm font-medium">
          <p>Page 1 of 12</p>
        </div>

        <button className="border border-primary px-5 py-2 text-primary hover:bg-primary hover:text-white transition-all duration-300 ease-in-out hover:border-white">
          <BsArrowRight />
        </button>
      </div>
  )
}

export default Pagination