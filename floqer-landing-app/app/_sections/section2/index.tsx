"use client";

import React, { useEffect, useRef } from "react";
import Quadrant1 from "./Quadrants/Quadrant1";
import Quadrant2 from "./Quadrants/Quadrant2";
import Quadrant3 from "./Quadrants/Quadrant3";
import Quadrant4 from "./Quadrants/Quadrant4";

import { useInView, useAnimationControls } from "framer-motion";

const Section2 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const controls = useAnimationControls();

  useEffect(() => {
    console.log("inview val --> ", isInView);
    if(isInView) {
      // console.log("==========visible animation started==========")
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section className="relative flex flex-col items-center justify-center h-screen max-h-[1080px] font-bold  mb-4 md:mb-12 lg:mb-24 ">
      <header className="text-4xl">Your go-to sales tools</header>
      <span className="bg-gradient-to-r bg-clip-text from-[#5349d0] from-80% to-[#8583f7] text-transparent text-6xl">
        in one flow
      </span>
      <section className=" absolute inset-0 h-full bg-transparent max-w-[1800px] grid grid-cols-2 overflow-hidden mx-auto">
        <Quadrant1 ref={ref} />
        <Quadrant2 controls={controls} />
        <Quadrant3 controls={controls} />
        <Quadrant4 controls={controls} />
      </section>
    </section>
  );
};

export default Section2;
