import React from 'react'

function Footer() {
  return (
    <div className='max-w-screen-lg py-10 flex gap-28 mx-auto'>
        <div className='basis-1/2 '>
            <h1 className='text-[8rem] font-semibold leading-none tracking-tight'>Refokus.</h1>
        </div>
        <div className='basis-1/2 flex gap-4'>
            <div className='basis-1/3'>
                <h4 className='mb-6 text-zinc-500'>Socials</h4>
                {["instagram", "twitter (x?)", "Linkedin"].map((item, index) => <a key={index} className='block mt-3 capitalize text-zinc-700'>{item}</a>)}
            </div>
            <div className='basis-1/3'>
                <h4 className='mb-6 text-zinc-500'>Socials</h4>
                {["instagram", "twitter (x?)", "Linkedin"].map((item, index) => <a key={index} className='block mt-3 capitalize text-zinc-700'>{item}</a>)}
            </div>
            <div className='basis-1/2 flex flex-col items-end'>
                <p className='text-right'>Refokus is a pioneering  digital agency driven by design and empoertd bt tech</p>
            </div>
        </div>
    </div>
  )
}

export default Footer