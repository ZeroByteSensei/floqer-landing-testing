"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Quadrant2 = () => {
  return (
    <motion.div className="flex items-end justify-start text-3xl"
      style={{
        originX: 0, originY: 1,
      }}
      animate={{
        scale: 2.5
      }}
      transition={{
        duration: 1,
        ease: "easeInOut"
      }}
    >Quadrant2</motion.div>
  )
}

export default Quadrant2