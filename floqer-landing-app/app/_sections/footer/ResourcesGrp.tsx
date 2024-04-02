"use client";
import React from "react";
import { motion } from "framer-motion";

const arr = ["FAQs", "Support"];

const links = ["#faqs", "mailto:shivammahajan100@gmail.com"];

const ResourcesGrp = () => {
  return (
    <div className="flex flex-col gap-4 w-36">
      <span className="font-bold text-secondary text-xl">Resources</span>
      <div className="flex flex-col gap-1 text-gray-500">
        {arr.map((itr, idx) => (
          <motion.a
            key={itr}
            // initial={{ color: "#000" }}
            href={links[idx]}
            target={itr === "FAQs" ? "_self" : "_blank"}
            style={{ originX: 0 }}
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

export default ResourcesGrp;
