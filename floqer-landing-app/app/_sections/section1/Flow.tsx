import React from "react";

import { motion } from "framer-motion";

const Flow = () => {
  return (
    <motion.span
      className="flex p-2 items-center gap-2 justify-center"
      // initial={{ maxWidth: 0 }}
      transition={{
        duration: 0.3,
      }}
    >
      

    </motion.span>
  );
};

export default Flow;
