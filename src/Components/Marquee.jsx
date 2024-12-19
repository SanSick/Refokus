// import React from "react";
// import { motion } from "motion/react";

// function Marquee({ imagesurls }) {
//   return (
//     <div className="flex w-full py-5 overflow-hidden">
//       <motion.div initial={{x: "0%"}} animate={{x:"-100%"}} transition={{ease:"linear", duration: 10, repeat: Infinity}} className="flex w-full overflow-hidden">
//         {imagesurls.map((url, index) => (
//           <img key={index} src={url} className="flex flex-shrink-0 gap-40 py-4 pr-14" />
//         ))}
//       </motion.div>
//       <motion.div initial={{x: "0%"}} animate={{x:"-100%"}} transition={{ease:"linear", duration: 10, repeat: Infinity}} className="flex w-full overflow-hidden">
//         {imagesurls.map((url, index) => (
//           <img key={index} src={url} className="flex flex-shrink-0 gap-40 py-4 pr-14" />
//         ))}
//       </motion.div>

//     </div>
//   );
// }

// export default Marquee;


import React from "react";
// import { motion } from "framer-motion"; // Corrected the import
import { motion } from "motion/react"; 

function Marquee({ imagesurls, direction }) {
  return (
    <div className="flex w-full py-5 overflow-hidden">
      <motion.div initial={{ x: direction === 'left' ?  "0" : "-100%"}}animate={{ x: direction === 'left' ?  "-100%" : "0" }} transition={{ease: "linear",duration: 15,repeat: Infinity, }} className="flex w-full gap-14" >
        {[...imagesurls, ...imagesurls].map((url, index) => (
          <img key={index} src={url} alt={`marquee-img-${index}`} className="flex-shrink-0 w-24 h-24 object-contain"/>
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
