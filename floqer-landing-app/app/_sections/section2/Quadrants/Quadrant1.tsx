"use client";

import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Apollo from "@/public/assets/SVGs/ApolloSVG.svg";
import Outlook from "@/public/assets/SVGs/Quadrant1/outlook.svg";
import Linkedin from "@/public/assets/SVGs/Linkedin";
import Zoominfo from "@/public/assets/SVGs/Quadrant1/zoominfo.svg";
import Lusha from "@/public/assets/SVGs/Quadrant1/lusha.png";

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
      src={Apollo}
      alt="Apollo"
      title="Apollo"
      className="absolute h-[97px] w-[97px] top-[20%] right-[30%]"
    />
    <Image
      src={Outlook}
      alt="Outlook"
      title="Outlook"
      className="absolute h-[75px] w-[75px] top-[40%] right-[70%] rounded-full shadow-md"
    />
    <div
      className="absolute top-[28%] right-[3%] h-fit w-fit rounded-full"
      title="Linkedin"
    >
      <Linkedin size="108px" />
    </div>
    <Image
      src={Zoominfo}
      alt="Zoominfo"
      title="Zoominfo"
      className="absolute h-[85px] w-[85px] p-2 rounded-full shadow-md top-[60%] right-[30%]"
    />
    <Image
      src={Lusha}
      alt="Lusha"
      title="Lusha"
      className="absolute h-[74px] w-[74px] top-[53%] right-[55%] rounded-full"
    />
  </motion.div>
);

// const Quadrant1 = () => {
//   return (

//   );
// };

export default forwardRef(Quadrant1);
