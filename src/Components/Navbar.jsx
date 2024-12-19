import React from 'react'
import { TbArrowRampLeft } from "react-icons/tb";
import Button from './Button';         

function Navbar() {
  return (
    <div className='max-w-screen-lg mx-auto flex items-center justify-between py-6 border-b-[1px] border-zinc-700'>
      <div className='nleft flex items-center'>
        <div className='flex items-center gap-1'><TbArrowRampLeft  className=''/><span>Refokus</span></div>
          <div className='flex gap-12 ml-20'>
              {["Home","Work", "Culture", "", "News"].map((elem, index) => (
                elem.length === 0 ? <span key={index} className="w-[1px] h-15 bg-zinc-600"></span> : <a key={index} className="text-sm flex items-center gap-1" href='#'>
                {index === 1 && (<span style={{boxShadow: "0 0 0.45em #00FF19"}} className='inline-block w-1 h-1 bg-green-500 rounded-full'></span>)}
                {elem}
                </a>
              ))}
          </div>
        </div>
      
      <Button/>
        
    </div>
  )
}

export default Navbar
