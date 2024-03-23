import React from "react";
import { motion } from "framer-motion";

interface Props {
  payload: JSX.Element[];
}

const AnimateSVGs = ({ payload }: Props) => {
  return (
    <span className="ml-2 flex justify-center items-center gap-2">
      {payload.map((token: JSX.Element, idx: number) => (
        <motion.image
          initial={{ opacity: 0, translateY: "-1px" }}
          animate={{ opacity: 1, translateY: 0 }}
          key={idx}
          transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
          className="mr-1"
        >
          {token}
        </motion.image>
      ))}
    </span>
  );
};

export default AnimateSVGs;
