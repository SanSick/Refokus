import React from 'react'
import Navbar from './Components/Navbar'
import Work from './Components/Work'
import Stripes from './Components/Stripes'
import Products from './Components/Products'
import Marquees from './Components/Marquees'
import Cards from './Components/Cards'
import Footer from './Components/Footer'

//^ Importing for locomotive for smooth scrolling and animation
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const scroll = new LocomotiveScroll();
  return (
    <div className='w-full font-["satoshi"] bg-zinc-900 text-white'>
      <Navbar />
      <Work /> 
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  )
}

export default App