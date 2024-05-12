"use client";

import { BackgroundBeams } from "@/app/_components/animations/Backgroundbeams";
import { SparklesCore } from "@/app/_components/animations/Sparkles";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Section5 = () => {
  return (
    <div className="relative w-full h-[800px] flex flex-col items-center justify-center gap-6 sm:gap-12 md:gap-24 bg-[#160f2b] font-bold">
      <div className="w-full h-full absolute inset-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={75}
          className="w-full h-full"
          particleColor="#8660a6"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 bg-gradient-to-r from-[#aea8f9] from-30% via-[#dcbef9] via-45% to-[#f5c4cc] to-70% bg-clip-text text-5xl md:text-6xl lg:text-7xl text-transparent text-center font-secondary">
        <span>Scale your sales motion in</span>
        <span>seconds, not months.</span>
      </div>
      <motion.div
        // initial={{ scale: 0.8 }}
        // whileInView={{ scale: 1 }}
        // viewport={{ once: true }}
        // transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
      
      >
        <Button
          as={Link}
          href="https://app.reclaim.ai/m/shivam-mahajan/critical-meetings"
          target="_blank"
          className="text-3xl md:text-4xl px-8 font-bold py-4 h-fit w-fit text-[#170F2D]
        bg-gradient-to-r from-[#dcbef9] from-[7%] via-[#f5c3cc] via-[49%] to-[#f9dadf] to-100%"
        >
          Get in touch
        </Button>
      </motion.div>
    </div>
  );
};

export default Section5;
