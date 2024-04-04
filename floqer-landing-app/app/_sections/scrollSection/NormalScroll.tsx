"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  content: {
    title: ReactNode | string;
    description: string;
    content?: React.ReactNode | any;
  }[];
}

const NormalScroll = ({ content }: Props) => {
  return (
    <div className="min-h-screen xl:min-h-fit flex lg:hidden flex-col gap-12 relative scrollbar-hide mt-4">
      {content.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-start justify-center gap-4"
        >
          <motion.h2
            initial={{ opacity: 0, translateY: "2px" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-secondary font-secondary"
          >
            {item.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, translateY: "2px" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
          className="text-kg text-xl text-[#40444D] mt-10">
            {item.description}
          </motion.p>
          <motion.div
          initial={{ opacity: 0, translateY: "2px" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          viewport={{ once: true }}
            key={index}
            className={"h-fit rounded-md bg-white overflow-hidden"}
          >
            {item.content ?? null}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default NormalScroll;
