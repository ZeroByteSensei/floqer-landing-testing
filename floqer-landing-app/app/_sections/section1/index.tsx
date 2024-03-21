"use client";

import React from "react";
import { motion } from "framer-motion";

import Navbar from "@/app/_components/Navbar";
import Flow from "./Flow";
import FlowTemplate from "./Flow/FlowTemplate";
import Linkedin from "@/public/assets/SVGs/Linkedin";
import Apollo from "@/public/assets/SVGs/Apollo";
import AnimateText from "./Flow/Subflows/AnimateText";
import Redwolf from "@/public/assets/PNGs/RedWolf.png";
import Rocket from "@/public/assets/PNGs/Rocket.png";
import AnimateSVGs from "./Flow/Subflows/AnimateSVGs";
import ApolloSvg from "@/public/assets/SVGs/ApolloSVG.svg";
import Image from "next/image";
import Star from "@/public/assets/SVGs/Star";

const index = () => {
  return (
    <section className="min-h-screen flex flex-col items-center gap-4">
      <Navbar />
      <section className="flex flex-col md:flex-row items-center p-4 justify-between w-full">
        <div className="flex flex-col gap-2 items-start w-full md:w-3/5">
          <h1 className="font-bold text-4xl">Not just another sales tool,</h1>
          <h1 className="font-bold text-3xl">All the sales tools</h1>
          <span className="font-light text-base">
            Help your GTM team land more meetings. Combine 50+ data sources, web
            scraping, and AI messaging to enrich your data and automate your
            outbound at scale.
          </span>
        </div>
        <section className="flex flex-1 flex-col items-start gap-2">
          <motion.section
            initial={{ visibility: "hidden", opacity: 0 }}
            animate={{ visibility: "visible", opacity: 1 }}
            transition={{
              duration: 0.1,
              delay: 0.2,
            }}
          >
            <FlowTemplate
              Icon={<Linkedin size={"50px"} />}
              payload="Importing your leads..."
              SubflowComp={<AnimateText payload="Importing your leads..." />}
            />
          </motion.section>
          <motion.section
            initial={{ visibility: "hidden", opacity: 0 }}
            animate={{ visibility: "visible", opacity: 1 }}
            transition={{
              duration: 0.1,
              delay: 0.8,
            }}
          >
            <FlowTemplate
              Icon={
                <Image
                  src={ApolloSvg}
                  alt="apollo"
                  className="w-[45px] h-[45px]"
                />
              }
              payload="Lead email found from Apollo.io"
              SubflowComp={
                <AnimateSVGs
                  payload={
                    [
                      <Image key={1} src={Redwolf} alt="redwolf" className="w-[50px] h-[50px]" />,
                      <Image src={Rocket} alt="rocket" key={2} />,
                    ]
                  }
                />
              }
            />
          </motion.section>
          <motion.section
            initial={{ visibility: "hidden", opacity: 0 }}
            animate={{ visibility: "visible", opacity: 1 }}
            transition={{
              duration: 0.1,
              delay: 1.2,
            }}
          >
            <FlowTemplate
              Icon={<Star size={"50px"} />}
              payload="Generating personalized email for leads..."
              SubflowComp={<AnimateText payload="Generating personalized email for leads..." />}
            />
          </motion.section>
        </section>
      </section>
    </section>
  );
};

export default index;
