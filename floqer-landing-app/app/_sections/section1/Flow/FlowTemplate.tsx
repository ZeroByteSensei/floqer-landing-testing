"use client"

import React, { useEffect, useState } from "react";
import AnimatePayload from "./AnimatePayload";
import { motion } from "framer-motion";

interface Props {
  Icon: JSX.Element;
  payload: string;
}

const FlowTemplate = ({ Icon, payload }: Props) => {
  const [showPl, setShowPl] = useState(false);

  useEffect(() => {
    const tm = setTimeout(() => {
      setShowPl(() => true);
    }, 100);
    return () => clearTimeout(tm);
  }, []);

  return (
    <span className="flex items-center justify-center p-2 border-2 border-gray-300 rounded-full">
      {Icon}
      {showPl && <AnimatePayload payload={payload} />}
    </span>
  );
};

export default FlowTemplate;
