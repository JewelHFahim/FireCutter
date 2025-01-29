import Link from 'next/link'
import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'

const BackToHome = () => {
  return (
    <div className="flex justify-center">
    <Link href="/">
      <button className="border-2 border-primary hover:border-orange-600 px-8 py-2 text-primary hover:text-orange-600 transition-all duration-200 ease-in-out font-medium uppercase flex items-center gap-2">
        <BsArrowLeft className="text-xl" /> <span>Back To Home</span>
      </button>
    </Link>
  </div>
  )
}

export default BackToHome