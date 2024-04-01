"use client";

import React from "react";
import { AnimationControls, motion } from "framer-motion";
import Image from "next/image";

import Claude from "@/public/assets/SVGs/Quadrant4/claude.svg";
import Anthro from "@/public/assets/PNGs/anthropic.png"
import Hubspot from "@/public/assets/SVGs/Quadrant4/hubspot.svg";
import spot from "@/public/assets/PNGs/hubspot.png"
import Phantom from "@/public/assets/SVGs/Quadrant4/phantomSVG.svg";
import PhantomBuster from "@/public/assets/PNGs/phantombuster.png"
import BlueD from "@/public/assets/SVGs/Quadrant4/BlueD.png";

interface Props {
  controls: AnimationControls;
}

const Quadrant4 = ({ controls }: Props) => {
  return (
    <motion.div
      className="flex items-start justify-start text-3xl relative"
      variants={{
        hidden: { scale: 1 },
        visible: { scale: 1.15 },
      }}
      style={{
        originX: 0,
        originY: 0,
      }}
      initial={{
        scale: 1,
      }}
      animate={controls}
      // whileInView={{
      //   scale: 1.15,
      // }}
      // viewport={{ once: true }}
      transition={{
        duration: 2.5,
        ease: "easeInOut",
        delay: 0.6,
      }}
    >
      <Image
        src={Anthro}
        alt="Anthropic"
        title="Anthropic"
        className="absolute w-[115px] h-[115px] top-[47%] left-[8%]"
      />
      <Image
        src={spot}
        alt="Hubspot"
        title="Hubspot"
        className="absolute w-[125px] h-[125px] top-[27%] left-[38%]"
      />
      <Image
        src={PhantomBuster}
        alt="PhantomBuster"
        title="PhantomBuster"
        className="absolute rounded-full w-[80px] h-[80px] top-[43%] left-[64%]"
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
