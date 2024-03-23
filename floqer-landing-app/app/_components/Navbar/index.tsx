"use client";

import React from "react";
import Tabs from "./Tabs";
import { motion } from "framer-motion";
import AnimateLoad from "../animations/AnimateLoad";
import Dropdown from "./Dropdown";
import { Button } from "@nextui-org/button";

const index = () => {
  return (
    <nav className="w-full flex items-center gap-2 p-4 md:p-10 justify-between">
      <section className="flex items-center justify-between w-fit sm:w-1/2 max-w-[200px] md:max-w-[600px] gap-4 md:gap-12">
        <AnimateLoad delay={0}>
          <header className="text-4xl font-bold text-primary">floqer</header>
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
      <Button className="rounded-md bg-black text-white">Request a demo</Button>
    </nav>
  );
};

export default index;
