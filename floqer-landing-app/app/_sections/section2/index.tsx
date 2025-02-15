"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Quadrant1 from "./Quadrants/Quadrant1";
import Quadrant2 from "./Quadrants/Quadrant2";
import Quadrant3 from "./Quadrants/Quadrant3";
import Quadrant4 from "./Quadrants/Quadrant4";

import { useInView, useAnimationControls } from "framer-motion";

const Section2 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const thirdref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const thirdInView = useInView(thirdref);
  const [done, setDone] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView && !done) {
      setDone(() => true);
      controls.stop();
      controls.start("visible");
    }
    if (!(isInView || thirdInView) && done) {
      setDone(() => false);
      controls.stop();
      controls.start("hidden");
    }
  }, [controls, isInView, thirdInView, done]);

  return (
    <section
      id="integrations"
      className="hidden lg:flex relative flex-col items-center justify-center h-screen font-semibold  mb-4 md:mb-12 lg:mb-24 font-secondary max-h-[776px]"
    >
      <motion.header
        initial={{ opacity: 0, translateY: "10px" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
        className="text-6xl font-medium text-secondary"
      >
        Your go-to sales tools
      </motion.header>
      <motion.span
        initial={{ opacity: 0, translateY: "10px" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 1, ease: "easeOut" }}
        className=" integrations__gradient text-transparent bg-clip-text text-8xl font-medium"
      >
        in one flow
      </motion.span>
      <section className=" absolute inset-0 h-full bg-transparent grid grid-cols-2 max-w-[1520px] overflow-hidden mx-auto">
        <Quadrant1 controls={controls} ref={ref} />
        <Quadrant2 controls={controls} />
        <Quadrant3 controls={controls} ref={thirdref} />
        <Quadrant4 controls={controls} />
      </section>
    </section>
  );
};

export default Section2;
