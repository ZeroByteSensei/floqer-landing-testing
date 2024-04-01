"use client";

import React from "react";
import { AnimationControls, motion } from "framer-motion";
import Instantly from "@/public/assets/SVGs/Quadrant3/Instantly.svg";
import Instant from "@/public/assets/PNGs/instantly.png"
import Twitter from "@/public/assets/SVGs/Quadrant3/x-social-media.svg";
import Sendgrid from "@/public/assets/SVGs/Quadrant3/sendgrid.svg";
import Crunchbase from "@/public/assets/SVGs/Quadrant3/crunchbase.svg";
import Crunch from "@/public/assets/PNGs/crunchbase.png"
import ProxyCurl from "@/public/assets/SVGs/Quadrant3/ProxyCurl.jpeg";
import Outreach from "@/public/assets/SVGs/Quadrant3/Outreach.svg";
import Out from "@/public/assets/PNGs/outreach.png"

import Image from "next/image";

interface Props {
  controls: AnimationControls;
}

const Quadrant3 = ({ controls }: Props) => {
  return (
    <motion.div
      className="flex items-start justify-end text-3xl relative"
      variants={{
        hidden: { scale: 1 },
        visible: { scale: 1.15 },
      }}
      style={{
        originX: 1,
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
        src={Instant}
        alt="Instantly"
        title="Instantly"
        className="absolute w-[82px] h-[82px] right-[25%] top-[58%]"
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
      <div className="absolute right-[30%] top-[24%]">
        <Image
          src={Crunch}
          alt="Crunchbase"
          title="Crunchbase"
          className="w-[58px] h-[58px] "
        />
      </div>
      <Image
        src={ProxyCurl}
        alt="ProxyCurl"
        title="ProxyCurl"
        className="absolute w-[54px] h-[54px] rounded-full top-[19%] right-[74%]"
      />
      <Image
        src={Out}
        alt="Outreach"
        title="Outreach"
        className="absolute w-[87px] h-[87px] top-[47%] right-[1%]"
      />
    </motion.div>
  );
};

export default Quadrant3;
