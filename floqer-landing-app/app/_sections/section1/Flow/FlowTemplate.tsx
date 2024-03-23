"use client";

import React, { useEffect, useState } from "react";
import AnimatePayload from "./AnimatePayload";
import { motion } from "framer-motion";
import AnimateText from "./Subflows/AnimateText";
import SvgTickWrapper from "./Subflows/SvgTickWrapper";
import { Type } from "@/app/_utils/constants";

interface Props {
  Icon: JSX.Element;
  payload: string;
  SubflowComp: JSX.Element;
  SecondFlow: JSX.Element;
  delay?: number;
  borderColor?: string;
  type?: Type;
}

const FlowTemplate = ({
  Icon,
  payload,
  SubflowComp,
  delay,
  SecondFlow,
  borderColor,
  type
}: Props) => {
  const [showPl, setShowPl] = useState(0);
  const [del, setDel] = useState(delay ? delay : 0);

  useEffect(() => {
    const tm = setTimeout(() => {
      setShowPl(() => 1);
      clearTimeout(tm);
      setTimeout(() => {
        setShowPl(() => 2);
      }, 1000);
    }, del + 100);
    return () => clearTimeout(tm);
  }, []);

  return (
    <motion.span
      className={`flex items-center justify-center p-2 border-[3px] rounded-full animate__width gap-2`}
      style={{ borderColor: borderColor ? borderColor : "black",
      background: type === Type.linkedin ? "linear-gradient(to right, #fff, #E1F5FF 100%)" : type === Type.apollo ?  "linear-gradient(to right, #fffcf2, #FFF3D0 100%)" : "linear-gradient(to right, #fff, #EBE9FF 100%)"
      // background: "linear-gradient(to right, #fff, #E1F5FF 100%)"
    }}
    >
      <SvgTickWrapper delay={1500}>{Icon}</SvgTickWrapper>
      {showPl === 1 && SubflowComp}
      {showPl === 2 && SecondFlow}
    </motion.span>
  );
};

export default FlowTemplate;
