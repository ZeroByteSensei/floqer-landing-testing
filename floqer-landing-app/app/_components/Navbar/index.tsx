"use client";

import React from "react";
import Tabs from "./Tabs";
import { motion } from "framer-motion";

const index = () => {
  return (
    <nav className="w-full flex items-center gap-2 p-4 md:p-10 justify-between">
      <section className="flex items-center justify-between w-fit sm:w-1/2 gap-12">
        <header className="text-3xl font-bold text-primary">floqer</header>
        <Tabs />
      </section>
      <motion.button
        whileTap={{ scale: 0.85 }}
        whileHover={{ scale: 0.95 }}
        className="bg-black text-white px-4 py-2"
      >
        Request a demo
      </motion.button>
    </nav>
  );
};

export default index;
