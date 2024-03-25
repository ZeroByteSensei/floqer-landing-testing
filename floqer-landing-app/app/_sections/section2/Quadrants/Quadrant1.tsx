"use client"

import React from "react";
import { motion } from "framer-motion";

const Quadrant1 = () => {
  return (
    <motion.div className="flex items-end justify-end text-3xl"
      style={{
        originX: 1, originY: 1,
      }}
      animate={{
        scale: 2.5
      }}
      transition={{
        duration: 1,
        ease: "easeInOut"
      }}
    >
      Quadrant1
    </motion.div>
  );
};

export default Quadrant1;
