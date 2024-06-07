"use client";
import React from "react";
import { motion } from "framer-motion";

const arr = ["Feature requests", "Terms of Service", "Privacy Policy"];

const links = [
  "mailto:shivammahajan100@gmail.com",
  "/terms-of-service",
  "/privacy-policy",
];

const ProductGrp = () => {
  return (
    <div className="flex flex-col gap-4 w-36">
      <span className="font-bold text-secondary">Company</span>
      <div className="flex flex-col gap-2 text-gray-500">
        {arr.map((itr, idx) => (
          <motion.a
            key={itr}
            // initial={{ color: "#000" }}
            href={links[idx]}
            style={{ originX: 0 }}
            target="_blank"
            whileHover={{
              color: "#51407D",
              scale: 1.1,
              textDecoration: "underline",
            }}
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
