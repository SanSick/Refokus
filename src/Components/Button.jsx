import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({title = "Get Started"}) {
  return (
    <div className='cursor-pointer max-w-36 px-3 py-1 bg-zinc-100 text-black rounded-full flex items-center justify-between'>
        <span className='text-sm font-medium'>{title}</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Button