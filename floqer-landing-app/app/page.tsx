"use client";

import React, { useEffect } from "react";
import Section1 from "@/app/_sections/section1";
import { NextUIProvider } from "@nextui-org/system";
import Section2 from "./_sections/section2";
import Section3 from "./_sections/section3";
import Section5 from "./_sections/section5";
import Footer from "./_sections/footer";
import Section4 from "./_sections/section4";
import ScrollSection from "./_sections/scrollSection";
import Deel from "@/public/assets/SVGs/section1/Deel";
import Zoominfo from "@/public/assets/SVGs/section1/Zoominfo";
import Illumin from "@/public/assets/SVGs/section1/Illumin";
import Salesforce from "@/public/assets/SVGs/Salesforce";
import { motion } from "framer-motion";

const Page = () => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const lowerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const listener = () => {
      const topPos = wrapperRef.current?.getBoundingClientRect().top;
      if(topPos && topPos <= 0) {
        console.log("-------------Top reached-------------");
      }
    };
    document.addEventListener("scroll", listener);
    return () => document.removeEventListener("scroll", listener);
  }, [wrapperRef.current]);

  useEffect(() => {
    if(!lowerRef.current) return;
    const listener = () => {
      const topPos = lowerRef.current?.getBoundingClientRect().top;
      const windowBottom = window.innerHeight;
      if(topPos && topPos <= windowBottom) {
        console.log("-------------next frame entered the screen-------------");
      }
    }
    document.addEventListener("scroll", listener);
    return () => document.removeEventListener("scroll", listener);
  }, [lowerRef.current])

  return (
    <div className="font-primary">
      <div className="bg-gradient-to-tr from-[#FFFFFF] via-[#f4b7e2] via-[60%] to-[#dedcfc] absolute top-0 right-0 h-[80vh] w-[40vw] opacity-10 blur-lg" />
      <div className="bg-gradient-to-br from-[#d8dbf9] from-[5%] via-[#ded7fc] via-[30%] via-[#fbebee] via-20% to-[#ffffff] min-h-screen xl:min-h-fit pb-4 md:pb-12 lg:pb-24 mb-4 md:mb-12 lg:mb-24">
        <div className="max-w-[2700px] mx-auto mb-4 md:mb-12 lg:mb-24">
          <Section1 />
        </div>
        <section className="w-full flex flex-col items-center justify-center gap-4">
          <header>Loved by folks from</header>
          <section className="flex flex-col sm:flex-row gap-4 md:gap-8 lg:gap-12 items-center justify-center">
            <Deel />
            <Zoominfo />
            <Salesforce />
            <Illumin />
          </section>
        </section>
      </div>
      <ScrollSection />
      <Section2 />
      {/* <div className="relative">
        <div className="absolute inset-0 h-full z-0">
          <div className="sticky inset-0 h-screen cards__gradient z-0"></div>
        </div>
        <div className="relative">
          <Section3 />
          <Section4 />
        </div>
      </div> */}
      <div ref={wrapperRef} className="">
        <Section3 />
      </div>
      <div ref={lowerRef} >
      <Section4 />
      </div>
      <Section5 />
      <div className="max-w-[2700px] mx-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
