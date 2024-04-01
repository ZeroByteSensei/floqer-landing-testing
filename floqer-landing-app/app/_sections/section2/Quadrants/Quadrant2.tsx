"use client";
import React from "react";
import { AnimationControls, motion } from "framer-motion";
import Image from "next/image";
import Salesforce from "@/public/assets/SVGs/Quadrant2/salesforce.svg";
import OpenAi from "@/public/assets/SVGs/Quadrant2/openai.svg";
import Pipedrive from "@/public/assets/SVGs/Quadrant2/pipedrive.svg";
import Pipe from "@/public/assets/PNGs/pipedrive.png"
import SalesNav from "@/public/assets/SVGs/Quadrant2/sales_navigator.svg";
import Nav from "@/public/assets/PNGs/navigator.png"
import Redwolf from "@/public/assets/SVGs/Quadrant2/RedWolf.png";
import Openai from "@/public/assets/PNGs/openai.png"
import Red from "@/public/assets/PNGs/RedWolf_second.png"
import Kaspr from "@/public/assets/SVGs/Quadrant2/Kaspr.jpeg";
import kaspr from "@/public/assets/PNGs/kaspr.png"

interface Props {
  controls: AnimationControls;
}

const Quadrant2 = ({ controls }: Props) => {
  return (
    <motion.div
      className="flex items-end justify-start text-3xl relative"
      variants={{
        hidden: { scale: 1 },
        visible: { scale: 1.15 },
      }}
      style={{
        originX: 0,
        originY: 1,
      }}
      initial={{
        scale: 1,
      }}
      animate={controls}
      // whileInView="visible"
      // viewport={{ once: true }}
      transition={{
        duration: 2.5,
        ease: "easeInOut",
        delay: 0.6,
      }}
    >
      <Image
        src={Salesforce}
        alt="Salesforce"
        title="Salesforce"
        className=" absolute p-2 rounded-full shadow-lg w-[96px] h-[96px] top-[32%] left-[1%]"
      />
      <Image
        src={Openai}
        alt="Openai"
        title="OpenAI"
        className=" absolute w-[109px] h-[109px] top-[20%] left-[45%]"
      />
      <Image
        src={Pipe}
        alt="Pipedrive"
        title="Pipedrive"
        className=" absolute w-[66px] h-[66px] top-[35%] left-[67%]"
      />
      <Image
        src={Nav}
        alt="SalesNav"
        title="SalesNav"
        className=" absolute w-[110px] h-[110px] bottom-[1%] right-[35%]"
      />
      <Image
        src={Red}
        alt="Hunter.Io"
        title="Hunter.Io"
        className="absolute rounded-full w-[60px] h-[60px] top-[45%] left-[25%] bg-white"
      />
      <Image
        src={kaspr}
        alt="Kaspr"
        title="Kaspr"
        className="absolute w-[88px] h-[88px] top-[65%] left-[35%]"
      />
    </motion.div>
  );
};

export default Quadrant2;
