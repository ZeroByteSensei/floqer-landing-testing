"use client";
import React, { ReactNode, useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/app/_utils/cn";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: ReactNode | string;
    description: string;
    content?: React.ReactNode | any;
    topPos: string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    target: ref,
    // container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];
  return (
    <motion.div
      // animate={{
      //   backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      // }}
      className="min-h-screen xl:min-h-fit hidden lg:flex relative space-x-10 rounded-md scrollbar-hide"
      ref={ref}
    >
      <div className="div relative flex flex-1 items-start">
        <div className="flex flex-col items-start">
          {content.map((item, index) => (
            <div key={index} className="h-[80vh] flex flex-col justify-center gap-4">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-4xl font-bold text-secondary font-secondary"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-xl text-[#40444D] mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      {content.map((itr, idx) => {
        if (idx === activeCard) {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              key={idx}
              animate={{
                // background: linearGradients[activeCard % linearGradients.length],
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                ease: "linear",
              }}
              className={cn(
                "hidden lg:block h-fit max-w-[45vw] rounded-md bg-white sticky overflow-hidden "+ itr.topPos,
                contentClassName
              )}
            >
              {content[activeCard].content ?? null}
            </motion.div>
          );
        } else return null;
      })}
    </motion.div>
  );
};
