import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[16.66%] px-6 py-4 border-y-[1.4px] border-r-[2px] border-zinc-600 flex justify-between items-center'>
        <span>{val.name}</span>
        <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe