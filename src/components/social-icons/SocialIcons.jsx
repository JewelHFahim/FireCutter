import Link from 'next/link'
import React from 'react'
import { FaPinterest, FaTwitter } from 'react-icons/fa'
import { RiFacebookBoxFill } from 'react-icons/ri'

const SocialIcons = () => {
  return (
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
  )
}

export default SocialIcons