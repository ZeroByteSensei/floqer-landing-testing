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

const Flow = () => {

  return (
    <NextUIProvider>
      <section className="min-h-screen flex flex-col items-center gap-24 bg-gradient-to-br from-[#d8dbf9] from-[5%] via-[#ded7fc] via-[30%] via-[#fbebee] via-20% to-[#ffffff] pt-4">
        <Navbar />
        <section className="flex flex-col md:flex-row items-center md:items-start p-12 justify-between w-full min-h-[350px] gap-4 md:gap-0">
          <div className="flex flex-col gap-2 items-start w-full md:w-3/5 mt-[30px]">
            <h1 className="font-light text-6xl text-[#51407D]">
              Not just another sales tool,
            </h1>
            <h1 className="font-bold text-6xl text-[#51407D]">
              all the sales tools
            </h1>
            <span className="font-light text-base w-full md:w-4/5">
              Help your GTM team land more meetings. Combine 50+ data sources,
              web scraping, and AI messaging to enrich your data and automate
              your outbound at scale.
            </span>
            <Button className="rounded-md bg-black text-white">Request a demo</Button>
          </div>
          <section className="flex flex-1 flex-col items-start gap-2">
            <WrapperFlow />
          </section>
        </section>
      </section>
    </NextUIProvider>
  );
};

export default Flow;
