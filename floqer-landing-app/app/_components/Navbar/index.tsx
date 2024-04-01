"use client";

import React from "react";
import Tabs from "./Tabs";
import { motion } from "framer-motion";
import AnimateLoad from "../animations/AnimateLoad";
import Dropdown from "./Dropdown";
import { Button } from "@nextui-org/button";
import AnimateOnView from "../animations/AnimateOnView";

const index = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, translateY: "-3px" }}
      animate={{
        opacity: 1,
        translateY: "0px",
      }}
      transition={{
        duration: 0.3,
      }}
      className="w-[90%] max-w-[1920px] flex items-center gap-2 p-4 md:py-6 md:px-10 justify-between bg-white shadow-lg rounded-full"
    >
      <section className="flex items-center justify-between w-fit sm:w-1/2 max-w-[200px] md:max-w-[600px] gap-4 md:gap-12">
        <AnimateLoad delay={0}>
          <header className="text-4xl font-semibold text-[#5549D8] font-secondary">floqer</header>
        </AnimateLoad>
        <Tabs />
        <Dropdown />
      </section>
      {/* <motion.button
        whileTap={{ scale: 0.85 }}
        whileHover={{ scale: 0.95 }}
        initial={{ opacity: 0, translateY: "-3px" }}
        animate={{
          opacity: 1,
          translateY: "0px",
        }}
        transition={{
          duration: 0.3,
        }}
        className="bg-black text-white px-2 md:px-4 py-2"
      >
        Request a demo
      </motion.button> */}
      <Button className=" bg-secondary text-white">Get started now</Button>
    </motion.nav>
  );
};

export default index;
