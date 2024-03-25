"use client"

import React from 'react'
import { motion } from 'framer-motion'

const Quadrant3 = () => {
  return (
    <motion.div className="flex items-start justify-end text-3xl"
      style={{
        originX: 1, originY: 0,
      }}
      animate={{
        scale: 2.5
      }}
      transition={{
        duration: 1,
        ease: "easeInOut"
      }}
    >Quadrant3</motion.div>
  )
}

export default Quadrant3