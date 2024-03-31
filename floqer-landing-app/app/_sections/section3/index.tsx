"use client";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import { NextUIProvider } from "@nextui-org/system";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import React from "react";
import Card from "./Card";
import Stat from "./Stat";
import SwipeDump from "./Swipedump";

const Section3 = () => {
  return (
    <NextUIProvider>
      <section className="w-full flex flex-col items-center justify-center gap-12 mb-4 md:mb-12 lg:mb-24 min-h-screen xl:min-h-fit py-6 max-h-[2100px] bg-gradient-to-b from-[#fff] from-0% via-[#f2effe] via-[42%] to-[#fcece7] to-100% pb-6 md:pb-12 lg:pb-24">
        <section className="flex flex-col gap-4 items-center justify-center text-secondary">
          <motion.h1
            initial={{
              opacity: 0,
              translateY: "10px",
            }}
            whileInView={{
              opacity: 1,
              translateY: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            className="font-bold text-5xl lg:text-6xl font-secondary flex flex-col items-center justify-center"
          >
            <span>{"You're in "}</span>
            <span>{"good company"}</span>
          </motion.h1>
          <p className="text-center">{"You don't have to trust our word"}</p>
        </section>
        <section className="w-full flex items-center justify-center gap-8">
          {/* <Button
            isIconOnly
            className="flex items-center justify-center h-fit w-fit bg-white p-4 border rounded-full border-gray-100 shadow-md"
          >
            <FiChevronLeft />
          </Button>
          <Card />
          <Button
            isIconOnly
            className="flex items-center justify-center h-fit w-fit bg-white p-4 border rounded-full border-gray-100 shadow-md"
          >
            <FiChevronRight />
          </Button> */}
          <div className="hidden xl:block" ><SwipeDump /></div>
          

        </section>
        <section className="w-full max-w-[90vw] flex flex-col sm:flex-row items-center md:items-start justify-center gap-4 h-fit mt-4 md:mt-12">
          <Stat
            val={93}
            metric="%"
            description="Customers who say using Floqer has made them better at their job"
            num2={false}
          />
          <div className="h-px w-[85px] md:h-[85px] md:w-px bg-gray-300" />
          <Stat
            val={20}
            metric="hrs"
            description="Average time per week saved by customers using Floqer"
            num2
          />
          <div className="h-px w-[85px] md:h-[85px] md:w-px bg-gray-300" />
          <Stat
            val={20}
            metric="hrs"
            description="Average time per week saved by customers using Floqer"
            num2
          />
        </section>
      </section>
      <div className="h-[100px]"></div>
    </NextUIProvider>
  );
};

export default Section3;
