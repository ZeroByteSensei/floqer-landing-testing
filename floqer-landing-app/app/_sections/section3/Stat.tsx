"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import "./num1.scss";
import "./num2.scss";

interface Props {
  val: number;
  metric: string;
  description?: string;
  num2?: boolean;
}

const Stat = ({ val, metric, description, num2 }: Props) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const statRef = React.useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);
  const isInView = useInView(statRef, { once: true });
  const control = useAnimation();
  useEffect(() => {
    if (!statRef?.current) return;
    if (isInView && !done) {
      // console.log("============in view============  ", statRef.current);
      setDone(() => true);
      // console.log("num2 --> ", num2)
      if(num2) statRef.current.classList.add("num2");
      else statRef.current.classList.add("num1");
    }
  }, [statRef, isInView]);

  return (
    <section
      ref={ref}
      className="flex flex-col items-center gap-2 max-w-[190px]"
    >
      <div className="flex justify-center items-end ">
        <span
          ref={statRef}
          className="font-bold text-8xl text-secondary font-secondary"
        ></span>
        <span className="text-[#9077D2]">{metric}</span>
      </div>
      <span className="text-sm font-light text-[#11244A] text-center">
        {description}
      </span>
    </section>
  );
};

export default Stat;
