"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Navbar from "@/app/_components/Navbar";
import FlowTemplate from "./Flow/FlowTemplate";
import Linkedin from "@/public/assets/SVGs/Linkedin";
import Apollo from "@/public/assets/SVGs/Apollo";
import AnimateText from "./Flow/Subflows/AnimateText";

import AnimateSVGs from "./Flow/Subflows/AnimateSVGs";

import Image from "next/image";
import Star from "@/public/assets/SVGs/Star";
import { Type } from "@/app/_utils/constants";
import { NextUIProvider } from "@nextui-org/system";
import { Button } from "@nextui-org/button";
import WrapperFlow from "./Flow/WrapperFlows";
import FlowSVG from "@/public/assets/SVGs/section1/Flow.svg";
import Link from "next/link";

const Flow = () => {
  return (
    <NextUIProvider>
      <section className="flex flex-col items-center gap-4 sm:gap-12 pt-4 relative w-full">
        <Navbar />
        <section className="flex flex-col md:flex-row items-start justify-between p-6 lg:p-12 min-h-[350px] gap-4 md:gap-0 w-[95%] max-w-[1800px]">
          <div
            className="flex flex-col gap-2 items-start w-full md:w-3/5 mt-[30px] text-5xl md:text-6xl lg:text-7xl"
            // style={{ fontWeight: 450 }}
          >
            <h1 className="font-secondary text-[#8A72CA]">
              All in one tool to put your
            </h1>
            <h1 className="font-secondary  text-[#51407D]">
              sales process on autopilot
            </h1>
            <span className="font-light text-base w-full md:w-[95%] text-[#40444D]">
              Help your sales team drive more revenue. Build workflows composed of
              50+ industry-leading data sources, web scraping, AI-driven
              automations and messaging, to enrich your data and automate your
              sales motion at scale.
            </span>
            <Button
              as={Link}
              href="https://tally.so/r/m679Ek"
              target="_blank"
              className="text-lg p-6 bg-secondary text-white mt-3"
            >
              Get started now
            </Button>
          </div>
          <section className="flex flex-1 flex-col items-start gap-2">
            {/* <FlowTemplate
              Icon={<Linkedin size={"50px"} />}
              borderColor="#007AB9"
              type={Type.linkedin}
              payload="Importing your leads..."
              delay={500}
              SubflowComp={<AnimateText payload="Importing your leads..." />}
              SecondFlow={<AnimateText payload="Leads imported..." />}
            /> */}
            {/* <WrapperFlow /> */}
            <Image src={FlowSVG} alt="Flow-explaination" className="w-full" />
          </section>
        </section>
        {/* <div className="absolute w-full h-[100px] bottom-[-1rem] " ></div> */}
      </section>
    </NextUIProvider>
  );
};

export default Flow;
