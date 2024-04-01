import React from "react";
import Tab from "./Tab";
import { motion } from "framer-motion";
import AnimateLoad from "../animations/AnimateLoad";

const list = ["How it works", "Integrations", "FAQs", "Contact us"];

const links = ["#how-it-works", "#integrations", "#faqs", "#contact-us"];

const Tabs = () => {
  return (
    <section className="md:flex flex-1 items-center justify-between gap-2 flex-col sm:flex-row hidden">
      {list.map((item: string, idx: number) => (
        <AnimateLoad key={idx} delay={0.3 + 0.1 * idx}>
          <Tab val={item} link={links[idx]} />
        </AnimateLoad>
      ))}
    </section>
  );
};

export default Tabs;
