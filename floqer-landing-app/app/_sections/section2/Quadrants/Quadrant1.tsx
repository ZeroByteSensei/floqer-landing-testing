"use client";

import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Apollo from "@/public/assets/SVGs/ApolloSVG.svg";
import apollo from "@/public/assets/PNGs/apollo.png";
import Outlook from "@/public/assets/SVGs/Quadrant1/outlook.svg";
import Linkedin from "@/public/assets/SVGs/Linkedin";
import Lkd from "@/public/assets/PNGs/linkedin.png";
import Zoominfo from "@/public/assets/SVGs/Quadrant1/zoominfo.svg";
import Zoom from "@/public/assets/PNGs/zoominfo.png";
import Lusha from "@/public/assets/SVGs/Quadrant1/lusha.png";
import lusha from "@/public/assets/PNGs/lusha_second.png";

const Quadrant1 = (props: any, ref: any) => (
  <motion.div
    ref={ref}
    className="flex items-end justify-end text-3xl relative"
    style={{
      originX: 1,
      originY: 1,
    }}
    initial={{
      scale: 1,
    }}
    whileInView={{
      scale: 1.15,
    }}
    viewport={{ once: true }}
    transition={{
      duration: 2.5,
      ease: "easeInOut",
      delay: 0.6,
    }}
  >
    <Image
      src={apollo}
      alt="Apollo"
      title="Apollo"
      className="absolute h-[113px] w-[113px] top-[20%] right-[30%]"
    />
    <Image
      src={Outlook}
      alt="Outlook"
      title="Outlook"
      className="absolute h-[75px] w-[75px] top-[40%] right-[70%] rounded-full shadow-md"
    />
    {/* <div
      className=" h-fit w-fit rounded-full p-0 shadow-md"
      title="Linkedin"
    > */}
    <Image
      src={Lkd}
      alt="LinkedIn"
      title="LinkedIn"
      className="w-[108px] h-[108px] absolute top-[28%] right-[3%]"
    />
    {/* </div> */}
    {/* <div className="absolute flex items-center justify-center h-[121px] w-[121px] shadow-md bg-white border rounded-full top-[60%] right-[30%] "> */}
      <Image
        src={Zoom}
        alt="Zoominfo"
        title="Zoominfo"
        className="absolute h-[121px] w-[121px] top-[60%] right-[35%] "
      />
    {/* </div> */}
    <Image
      src={lusha}
      alt="Lusha"
      title="Lusha"
      className="absolute h-[85px] w-[85px] top-[61%] right-[55%] rounded-full"
    />
  </motion.div>
);

// const Quadrant1 = () => {
//   return (

//   );
// };

export default forwardRef(Quadrant1);
