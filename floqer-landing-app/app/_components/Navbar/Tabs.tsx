import React from "react";
import Tab from "./Tab";
import { motion } from "framer-motion";
import AnimateLoad from "../animations/AnimateLoad";

const list = ["Product", "Explore", "FAQs", "Pricing"];

const Tabs = () => {
  return (
    <section className="flex flex-1 items-center justify-between gap-2 flex-col sm:flex-row">
      {list.map((item: string, idx: number) => (
        <AnimateLoad key={idx} delay={0.3 + 0.1 * idx}>
          <Tab val={item} />
        </AnimateLoad>
      ))}
    </section>
  );
};

export default Tabs;
