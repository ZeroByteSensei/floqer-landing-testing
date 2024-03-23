"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Navbar from "@/app/_components/Navbar";
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
import { Type } from "@/app/_utils/constants";
import { NextUIProvider } from "@nextui-org/system";
import { Button } from "@nextui-org/button";

const Flow = () => {
  const [timeIdx, setTimeIdx] = useState(0);

  useEffect(() => {
    const tm = setTimeout(() => {
      setTimeIdx((prev) => prev + 1);
      clearTimeout(tm);
      setTimeout(() => {
        setTimeIdx((prev) => prev + 1);
      }, 2000);
    }, 2000);
    return () => clearInterval(tm);
  }, []);

  return (
    <NextUIProvider>
      <section className="min-h-screen flex flex-col items-center gap-4 bg-gradient-to-br from-[#d8dbf9] from-[5%] via-[#ded7fc] via-[30%] via-[#fbebee] via-20% to-[#ffffff] pt-4">
        <Navbar />
        <section className="flex flex-col md:flex-row items-center md:items-start p-12 justify-between w-full min-h-[350px] gap-4 md:gap-0">
          <div className="flex flex-col gap-2 items-start w-full md:w-3/5 mt-[30px]">
            <h1 className="font-light text-6xl text-[#51407D]">
              Not just another sales tool,
            </h1>
            <h1 className="font-bold text-6xl text-[#51407D]">
              all the sales tools
            </h1>
            <span className="font-light text-base w-4/5">
              Help your GTM team land more meetings. Combine 50+ data sources,
              web scraping, and AI messaging to enrich your data and automate
              your outbound at scale.
            </span>
            <Button className="rounded-md bg-black text-white">Request a demo</Button>
          </div>
          <section className="flex flex-1 flex-col items-start gap-2">
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.1,
                delay: 0.2,
              }}
            >
              <FlowTemplate
                Icon={<Linkedin size={"50px"} />}
                borderColor="#007AB9"
                type={Type.linkedin}
                payload="Importing your leads..."
                delay={600}
                SubflowComp={<AnimateText payload="Importing your leads..." />}
                SecondFlow={<AnimateText payload="Leads imported..." />}
              />
            </motion.section>
            {timeIdx > 0 && (
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
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
                  borderColor="#FECF40"
                  type={Type.apollo}
                  delay={600}
                  SubflowComp={
                    <AnimateSVGs
                      payload={[
                        <Image
                          key={1}
                          src={Redwolf}
                          alt="redwolf"
                          className="w-[50px] h-[50px]"
                        />,
                        <Image src={Rocket} alt="rocket" key={2} />,
                      ]}
                    />
                  }
                  SecondFlow={
                    <AnimateText payload="Lead email found from Apollo.io" />
                  }
                />
              </motion.section>
            )}
            {timeIdx > 1 && (
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.1,
                }}
              >
                <FlowTemplate
                  Icon={<Star size={"50px"} />}
                  borderColor="#8B80EB"
                  type={Type.generation}
                  delay={600}
                  payload="Generating personalized email for leads..."
                  SubflowComp={
                    <AnimateText payload="Generating personalized email for leads..." />
                  }
                  SecondFlow={
                    <AnimateText payload="Sent personalized email to lead" />
                  }
                />
              </motion.section>
            )}
          </section>
        </section>
      </section>
    </NextUIProvider>
  );
};

export default Flow;
