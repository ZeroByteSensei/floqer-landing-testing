"use client";

import React, { useEffect, useState } from "react";
import AnimatePayload from "./AnimatePayload";
import { motion } from "framer-motion";
import AnimateText from "./Subflows/AnimateText";

interface Props {
  Icon: JSX.Element;
  payload: string;
  SubflowComp: JSX.Element;
  delay?: number;
}

const FlowTemplate = ({ Icon, payload, SubflowComp, delay }: Props) => {
  const [showPl, setShowPl] = useState(false);
  const [del, setDel] = useState(delay ? delay : 0);

  useEffect(() => {
    const tm = setTimeout(() => {
      setShowPl(() => true);
    }, del + 100);
    return () => clearTimeout(tm);
  }, []);

  return (
    <motion.span className="flex items-center justify-center p-2 border-2 border-gray-300 rounded-full animate__width">
      {Icon}
      {showPl && SubflowComp}
    </motion.span>
  );
};

export default FlowTemplate;
