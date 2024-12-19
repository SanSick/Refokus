import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import { data } from 'autoprefixer';
// import { motion } from "framer-motion"

function Work() {
  

  //using useState to control the occcurence of images by framer motion
  const [images, setImages] = useState([
      {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66b23a60fdf0bddb06264ef1_zoom-04.webp", top: "62%", left: "50%", isActive: false},
      {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66b237edaaa3e6d3465a009f_zoom-05.webp", top: "60%", left: "42%", isActive: false},
      {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666c542528fbb96907cd599c_zoom-03.webp", top: "72%", left: "48%", isActive: false},
      {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66b23e4b26d46d4191bdfe67_zoom-04.webp", top: "71%", left: "46%", isActive: false},
      {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66a2ce8f3cc141895908bf6d_64cd6ec7666ac6009cfcb7db_11.webp", top: "80%", left: "58%", isActive: false},
      {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66b23f2e6c5cc62875cc91b0_zoom-03.webp", top: "78%", left: "55%", isActive: false},
    ]
  );
  const { scrollYProgress } = useScroll();

    scrollYProgress.on("change", (data) => {
      
      function imagesShow(arr){
        setImages(prev => (
           prev.map((item, index) => (
              arr.indexOf(index) === -1 ? (
                {...item, isActive: false}
              )
              : {...item, isActive: true}
           ))
        ))
      }


       switch(Math.floor(data*100)){
          case 0:
            imagesShow([]);
            break;
          case 1:
            imagesShow([0]);
            break;
          case 2:
            imagesShow([0,1]);
            break;
          case 4:
            imagesShow([0,1,2]);
            break;
          case 6:
            imagesShow([0,1,2,3]);
            break;
          case 8:
            imagesShow([0,1,2,3,4]);
            break;
          case 10:
            imagesShow([0,1,2,3,4,5]);
            break;
       }
    })


  //^--- we can use this also to control the values
  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   showNHideImages(Math.floor(latest*100));
  // })

  //& Writing function to show and hide imaegs using useState by framer motion
  // function showNHideImages(scrollval){
  //   console.log(scrollval);
  // }
  //^---end;

  return (
    <div className='w-full mt-8'>
        <div className='relative max-w-screen-lg mx-auto text-center'>
            <h1 className='text-[25vw] leading-none font-medium select-none'>Work</h1>
            <div className='absolute top-0 w-full h-full '>
              {images.map((elem, index) => (
                elem.isActive && (<img key={index} className='absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]' src={elem.url} style={{top: elem.top, left: elem.left}}/>)
              ))}
            </div>
        </div>

    </div>
  )
}

export default Work