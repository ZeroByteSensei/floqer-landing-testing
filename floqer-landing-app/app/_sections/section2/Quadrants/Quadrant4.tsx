"use client"

import React from 'react'
import { motion } from 'framer-motion'

const Quadrant4 = () => {
  return (
    <motion.div className="flex items-start justify-start text-3xl"
      style={{
        originX: 0, originY: 0,
      }}
      animate={{
        scale: 2.5
      }}
      transition={{
        duration: 1,
        ease: "easeInOut"
      }}
    >Quadrant4</motion.div>
  )
}

export default Quadrant4