"use client";

import React from "react";
import { faqs } from "@/app/_utils/constants";
import Slot from "./Slot";
import FAQ from "./Accordion";
import { motion } from "framer-motion";

const Section4 = () => {
  return (
    <div className=" bg-white max-w-[1219px] mx-auto flex flex-col gap-12 p-4 sm:p-8 md:p-12">
      <section className="flex flex-col gap-2 items-start justify-center font-secondary">
        <motion.header
          initial={{ opacity: 0, translateY: "3px" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2, ease: "linear" }}
          className="text-6xl font-normal bg-clip-text bg-gradient-to-r from-[#806ebb] from-0% via-[#ab99e5] via-50% to-[#8271bc] to-100% text-transparent"
        >
          Got questions?
        </motion.header>
        <motion.header 
          initial={{ opacity: 0, translateY: "3px" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.8, ease: "linear" }}
        className="text-6xl font-bold text-secondary">
          We got answers
        </motion.header>
      </section>
      <section className="flex flex-col w-full gap-4">
        {/* {faqs.map((itr, idx) => (
          <Slot ans={itr.answer} que={itr.question} key={idx} />
        ))} */}
        <FAQ />
      </section>
    </div>
  );
};

export default Section4;
