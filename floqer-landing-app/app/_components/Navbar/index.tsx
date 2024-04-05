"use client";

import React from "react";
import Tabs from "./Tabs";
import { motion } from "framer-motion";
import AnimateLoad from "../animations/AnimateLoad";
import Dropdown from "./Dropdown";
import { Button } from "@nextui-org/button";
import AnimateOnView from "../animations/AnimateOnView";
import Link from "next/link";
import Logo from "@/public/assets/SVGs/Logo";

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
      className="w-[95%] max-w-[1800px] flex items-center gap-2 p-4 md:py-6 px-6 lg:px-12 justify-between bg-white shadow-lg rounded-full"
    >
      <section className="flex items-center justify-between w-fit  max-w-[200px] md:max-w-[600px] gap-4 md:gap-12">
        <AnimateLoad delay={0}>
          <header className="text-4xl font-semibold text-[#9A7FE1] font-secondary flex items-center justify-center gap-4">
            <Logo />
            <span>floqer</span>
          </header>
        </AnimateLoad>
        <Tabs />
        {/* <Dropdown /> */}
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
      {/* <Button
        as={Link}
        href="https://tally.so/r/m679Ek"
        target="_blank"
        className="hidden lg:flex text-lg p-6 bg-secondary text-white"
      >
        Get started now
      </Button> */}
    </motion.nav>
  );
};

export default index;
