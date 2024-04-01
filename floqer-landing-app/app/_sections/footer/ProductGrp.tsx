"use client";
import React from "react";
import { motion } from "framer-motion";

const arr = ["TapWize", "Integrations", "Pricing", "Get a demo"];

const links = ["https://www.tapwize.co/", "#integrations", "", ""];

const ProductGrp = () => {
  return (
    <div className="flex flex-col gap-4 w-36">
      <span className="font-bold text-secondary text-xl">Product</span>
      <div className="flex flex-col gap-1 text-gray-500">
        {arr.map((itr, idx) => (
          <motion.a
            key={itr}
            // initial={{ color: "#000" }}
            href={links[idx]}
            target={itr === "Integrations" ? "_self" : "_blank"}
            style={{ originX: 0 }}
            whileHover={{ color: "#51407D", scale: 1.1, textDecoration: "underline" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="cursor-pointer"
          >
            {itr}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ProductGrp;
