"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Claude from "@/public/assets/SVGs/Quadrant4/claude.svg";
import Hubspot from "@/public/assets/SVGs/Quadrant4/hubspot.svg";
import Phantom from "@/public/assets/SVGs/Quadrant4/phantomSVG.svg";
import BlueD from "@/public/assets/SVGs/Quadrant4/BlueD.png";

const Quadrant4 = () => {
  return (
    <motion.div
      className="flex items-start justify-start text-3xl relative"
      style={{
        originX: 0, originY: 0,
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
        delay: 1.5,
      }}
    >
      <Image
        src={Claude}
        alt="Claude"
        title="Claude"
        className="absolute rounded-full w-[90px] h-[90px] top-[47%] left-[8%]"
      />
      <Image
        src={Hubspot}
        alt="Hubspot"
        title="Hubspot"
        className="absolute rounded-full w-[99px] h-[99px] top-[27%] left-[38%]"
      />
      <Image
        src={Phantom}
        alt="Phantom"
        title="Phantom"
        className="absolute rounded-full w-[70px] h-[70px] bg-[#5ec7df] top-[43%] left-[64%]"
      />
      <Image
        src={BlueD}
        alt="BlueD"
        title="BlueD"
        className="absolute rounded-full w-[46px] h-[46px] top-[23%] left-[74%]"
      />
    </motion.div>
  );
};

export default Quadrant4;
