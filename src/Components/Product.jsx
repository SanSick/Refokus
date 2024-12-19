import React from 'react'
import Button from './Button'

function Product({val, mover, count}) {
  return (
    <div className='w-full py-12 h-[27rem] text-white'>
        <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-lg h-full mx-auto flex items-center justify-between'>
          <div className='flex flex-col justify-between py-12 h-full '>
            <h1 className='text-3xl capitalize font-medium '>{val.title}</h1>
            <div className='text-xs font-normal tracking-wider'>
              <h6>WEB DESIGN</h6>
              <h6>WEBFLOW DEVELOPMENT</h6>
            </div>
          </div>
            <div className='dets w-1/3 flex flex-col justify-between h-[80%]'>
                <p className='mb-8'>{val.description}</p>
                <div className='flex items-center gap-5'>
                    {val.live && <Button />}
                    {val.case && <Button title='Case Study'/>}
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Product