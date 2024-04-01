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

  // useEffect(() => {
  //   if (!wrapperRef.current) return;
  //   const listener = () => {
  //     const topPos = wrapperRef.current?.getBoundingClientRect().top;
  //     if(topPos && topPos <= 0) {
  //       console.log("-------------Top reached-------------");
  //     }
  //   };
  //   document.addEventListener("scroll", listener);
  //   return () => document.removeEventListener("scroll", listener);
  // }, [wrapperRef.current]);

  // useEffect(() => {
  //   if(!lowerRef.current) return;
  //   const listener = () => {
  //     const topPos = lowerRef.current?.getBoundingClientRect().top;
  //     const windowBottom = window.innerHeight;
  //     if(topPos && topPos <= windowBottom) {
  //       console.log("-------------next frame entered the screen-------------");
  //     }
  //   }
  //   document.addEventListener("scroll", listener);
  //   return () => document.removeEventListener("scroll", listener);
  // }, [lowerRef.current])

  return (
    <div className="">
      <div className="second__gradient absolute top-0 right-0 h-[80vh] w-[30vw] opacity-10 blur-lg" />
      <div className="first__gradient min-h-screen xl:min-h-fit pb-4 md:pb-12 lg:pb-24 mb-4">
        <div className="max-w-[2700px] mx-auto mb-4 md:mb-12">
          <Section1 />
        </div>
        <section className="w-full flex flex-col items-center justify-center gap-4 font-secondary">
          <header className="text-3xl text-secondary" >Loved by folks from</header>
          <section className="flex flex-col sm:flex-row gap-4 md:gap-8 lg:gap-12 items-center justify-center">
            <Deel color="#51407D" />
            <Zoominfo color="#51407D" />
            <Salesforce color="#51407D" />
            <Illumin color="#51407D" />
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
