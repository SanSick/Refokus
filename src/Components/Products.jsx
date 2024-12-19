import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import video5 from "../assets/video5.mp4";
import video6 from "../assets/video6.mp4";
import video7 from "../assets/video7.mp4";
import video8 from "../assets/video8.mp4";
import video9 from "../assets/video9.mp4";
import video10 from "../assets/video10.mp4";



function Products() {
  var products = [
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
    },
    {
      title: "BCG Platinion",
      description:
        "We redesigned BCG Platinion's website to be sophisticated and technology-driven, incorporating powerful animations and interactions while maintaining the core elements of its brand.",
      live: true,
      case: false,
    },
    {
      title: "arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "Layout Land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
      "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: false,
    },
    {
      title: "Intenseye",
      description:
        "We focused on creating something beautiful while still ensuring the brand felt mature and contextual within their industry.",
      live: true,
      case: false,
    },
    {
      title: "Rainfall",
      description:
        "We know venture capital is a highly competitive sector. For Rainfall we set them apart with a website that shows why they are a top tier fund.",
      live: true,
      case: false,
    },
    {
      title: "Weglot Like Magic",
      description:
        "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.",
      live: true,
      case: false,
    },
    // {
    //   title: "YIR2022",
    //   description:
    //     "Arqu Executive ans its employes continue to receive orders for customer and customer that get orders for customers",
    //   live: true,
    //   case: false,
    // },
    // {
    //   title: "Yahoo!",
    //   description:
    //     "Arqu Executive ans its employes continue to receive orders for customer and customer that get orders for customers",
    //   live: true,
    //   case: true,
    // },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val*27);
  }

  return (
    <div className="mt-20 relative">
      {products.map((val, index) => (
        <Product key={index} val = {val} mover={mover} count={index}/>
      ))}
      <div className="absolute top-12 w-full h-full bg-none pointer-events-none">
        <motion.div 
          initial={{y: pos, x:"-50%"}}
          animate={{y: pos+`rem` }}
          transition={ {ease:[0.76, 0, 0.24, 1], duration: .6}}
          className="window absolute w-[28rem] h-[27rem] left-[43.5%] overflow-hidden flex flex-col gap-y-24">
          <motion.div animate={{y: -pos +`rem`}} transition={ {ease:[0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full">
            <video src={video1} className="w-full h-full "
              autoPlay
              loop
              muted
              playsInline></video>
          </motion.div>
          <motion.div animate={{y: -pos +`rem`}} transition={ {ease:[0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full">
            <video src={video2} className="w-full h-full"
              autoPlay
              loop
              muted
              playsInline></video>
          </motion.div>
          <motion.div animate={{y: -pos +`rem`}} transition={ {ease:[0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full">
            <video src={video3} className="w-full h-full"
              autoPlay
              loop
              muted
              playsInline></video>
          </motion.div>
          <motion.div animate={{y: -pos +`rem`}} transition={ {ease:[0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full">
            <video src={video4} className="w-full h-full"
              autoPlay
              loop
              muted
              playsInline></video>
          </motion.div>
          <motion.div animate={{y: -pos +`rem`}} transition={ {ease:[0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full">
            <video src={video5} className="w-full h-full"
              autoPlay
              loop
              muted
              playsInline></video>
          </motion.div>
          <motion.div animate={{y: -pos +`rem`}} transition={ {ease:[0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full">
            <video src={video6} className="w-full h-full"
              autoPlay
              loop
              muted
              playsInline></video>
          </motion.div>
          <motion.div animate={{y: -pos +`rem`}} transition={ {ease:[0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full">
            <video src={video7} className="w-full h-full"
              autoPlay
              loop
              muted
              playsInline></video>
          </motion.div>
          <motion.div animate={{y: -pos +`rem`}} transition={ {ease:[0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full">
            <video src={video8} className="w-full h-full"
              autoPlay
              loop
              muted
              playsInline></video>
          </motion.div>
          <motion.div animate={{y: -pos +`rem`}} transition={ {ease:[0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full">
            <video src={video9} className="w-full h-full"
              autoPlay
              loop
              muted
              playsInline></video>
          </motion.div>
          <motion.div animate={{y: -pos +`rem`}} transition={ {ease:[0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full">
            <video src={video10} className="w-full h-full"
              autoPlay
              loop
              muted
              playsInline></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
