"use client"

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  payload: string;
}

const AnimatePayload = ({ payload }: Props) => {
  const [list, setList] = useState(payload.split(" "));

  return (
    <span>
      {list.map((token: string, idx: number) => (
        <motion.span
          initial={{ opacity: 0 }}
          key={idx}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 * (idx + 1) }}
          className="mr-1"
        >
          {token}
        </motion.span>
      ))}
    </span>
  );
};

export default AnimatePayload;
