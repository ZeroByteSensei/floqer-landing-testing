"use client";
import React from "react";
import { motion } from "framer-motion";

const arr = [
  "Feature requests",
  "Terms of Service",
  "Privacy Policy",
  "Opt out",
];

const ProductGrp = () => {
  return (
    <div className="flex flex-col gap-4 w-36">
      <span className="font-bold text-secondary">Company</span>
      <div className="flex flex-col gap-2 text-gray-500">
        {arr.map((itr) => (
          <motion.span
            key={itr}
            // initial={{ color: "#000" }}
            style={{ originX: 0 }}
            whileHover={{ color: "#51407D", scale: 1.1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="cursor-pointer"
          >
            {itr}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default ProductGrp;
