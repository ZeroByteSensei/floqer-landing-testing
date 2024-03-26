"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Salesforce from "@/public/assets/SVGs/Quadrant2/salesforce.svg";
import OpenAi from "@/public/assets/SVGs/Quadrant2/openai.svg";
import Pipedrive from "@/public/assets/SVGs/Quadrant2/pipedrive.svg";
import SalesNav from "@/public/assets/SVGs/Quadrant2/sales_navigator.svg";
import Redwolf from "@/public/assets/SVGs/Quadrant2/RedWolf.png";
import Kaspr from "@/public/assets/SVGs/Quadrant2/Kaspr.jpeg";

const Quadrant2 = () => {
  return (
    <motion.div
      className="flex items-end justify-start text-3xl relative"
      style={{
        originX: 0,
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
        src={Salesforce}
        alt="Salesforce"
        title="Salesforce"
        className=" absolute p-2 rounded-full shadow-lg w-[96px] h-[96px] top-[32%] left-[1%]"
      />
      <Image
        src={OpenAi}
        alt="Openai"
        title="OpenAI"
        className=" absolute p-2 rounded-full shadow-lg w-[95px] h-[95px] top-[20%] left-[45%] bg-black"
      />
      <Image
        src={Pipedrive}
        alt="Pipedrive"
        title="Pipedrive"
        className=" absolute p-2 rounded-full shadow-lg w-[57px] h-[57px] top-[35%] left-[67%] bg-white"
      />
      <Image
        src={SalesNav}
        alt="SalesNav"
        title="SalesNav"
        className=" absolute p-2 rounded-full shadow-lg w-[110px] h-[110px] bottom-[1%] right-[35%] bg-white"
      />
      <Image
        src={Redwolf}
        alt="Hunter.Io"
        title="Hunter.Io"
        className="absolute rounded-full w-[52px] h-[52px] top-[45%] left-[25%] bg-white"
      />
      <Image
        src={Kaspr}
        alt="Kaspr"
        title="Kaspr"
        className="absolute rounded-full w-[76px] h-[76px] top-[65%] left-[35%] bg-white"
      />
    </motion.div>
  );
};

export default Quadrant2;
