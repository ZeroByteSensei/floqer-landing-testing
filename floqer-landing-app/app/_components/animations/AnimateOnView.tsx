import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const AnimateOnView = ({ children }: Props) => {
  return (
    <motion.span
      initial={{
        opacity: 0,
        translateY: "10px",
      }}
      whileInView={{
        opacity: 1,
        translateY: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "linear", delay: 0.5 }}
    >
      {children}
    </motion.span>
  );
};

export default AnimateOnView;
