"use client";

import React from "react";
import { motion } from "framer-motion";
import Instantly from "@/public/assets/SVGs/Quadrant3/Instantly.svg";
import Twitter from "@/public/assets/SVGs/Quadrant3/x-social-media.svg";
import Sendgrid from "@/public/assets/SVGs/Quadrant3/sendgrid.svg";
import Crunchbase from "@/public/assets/SVGs/Quadrant3/crunchbase.svg";
import ProxyCurl from "@/public/assets/SVGs/Quadrant3/ProxyCurl.jpeg";
import Outreach from "@/public/assets/SVGs/Quadrant3/Outreach.svg";

import Image from "next/image";
const Quadrant3 = () => {
  return (
    <motion.div
      className="flex items-start justify-end text-3xl relative"
      style={{
        originX: 1, originY: 0,
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
        src={Instantly}
        alt="Instantly"
        title="Instantly"
        className="absolute w-[71px] h-[71px] rounded-full right-[25%] top-[58%]"
      />
      <Image
        src={Twitter}
        alt="Twitter"
        title="Twitter"
        className="absolute w-[101px] h-[101px] rounded-full right-[50%] top-[45%]"
      />
      <Image
        src={Sendgrid}
        alt="Sendgrid"
        title="Sendgrid"
        className="absolute w-[101px] h-[101px] rounded-full right-[48%] top-[7%]"
      />
      <div className="absolute shadow-lg p-3 rounded-full right-[30%] top-[24%]">
        <Image
          src={Crunchbase}
          alt="Crunchbase"
          title="Crunchbase"
          className="w-[45px] h-[45px] "
        />
      </div>
      <Image
        src={ProxyCurl}
        alt="ProxyCurl"
        title="ProxyCurl"
        className="absolute w-[54px] h-[54px] rounded-full top-[19%] right-[74%]"
      />
      <Image
        src={Outreach}
        alt="Outreach"
        title="Outreach"
        className="absolute w-[76px] h-[76px] p-3 bg-[#5952ff] rounded-full top-[47%] right-[1%]"
      />
    </motion.div>
  );
};

export default Quadrant3;
