"use client";
import React, { useEffect, useState } from "react";
import Flow1 from "./Flow1";
import Flow2 from "./Flow2";

const WrapperFlow = () => {
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    const int = setInterval(() => {
      setToggle((prev) => !prev);
      console.log("==========toggle changed==========");
    }, 10000);
    return () => clearInterval(int);
  });

  return <>{toggle ? <Flow1 /> : <Flow2 />}</>;
};

export default WrapperFlow;
