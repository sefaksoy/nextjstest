import React from 'react'
import Image from "next/image"

const Banner = () => {
  return (
    <div className='h-[237px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center'>
        <div className='h-[137px] relative w-full'>
            <Image src={"/banner.png"} fill alt=""/>
        </div>
    </div>
  )
}

export default Banner