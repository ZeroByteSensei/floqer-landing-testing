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
  const [reachedTop, setReachedTop] = React.useState(false);

  // useEffect(() => {
  //   console.log("reachedtop --> ", reachedTop)
  // }, [reachedTop])

  // useEffect(() => {
  //   if (!wrapperRef.current) return;
  //   const listener = () => {
  //     const topPos = wrapperRef.current?.getBoundingClientRect().top;
  //     // console.log("toppos --> ", topPos)
  //     let done = false;
  //     if(topPos && topPos <= 0) {
  //       // console.log("reached the top, reachedtop --> ", reachedTop)
  //       // setReachedTop(() => true);
  //       wrapperRef.current.classList.remove("sticky");
  //       wrapperRef.current.classList.add("sticky");
  //       done = true;
  //     } else if(topPos && topPos > 0) {
  //       // console.log("reached above the top, reachedtop --> ,", reachedTop)
  //       // setReachedTop(() => false);
  //       // console.log("reachedtop --> ", reachedTop)
  //       done = false;
  //       console.log("-------------Top not reached-------------");
  //     }
  //   };
  //   document.addEventListener("scroll", listener);
  //   return () => document.removeEventListener("scroll", listener);
  // }, []);

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
    <div className="bg-white">
      <div className="second__gradient absolute top-0 right-0 h-[80vh] w-[30vw] opacity-10 blur-lg" />
      <div className="first__gradient min-h-screen xl:min-h-fit pb-4 md:pb-12 lg:pb-24 mb-16 md:mb-8 lg:mb-4">
        <div className="max-w-[2700px] mx-auto mb-8 md:mb-12 lg:mb-16">
          <Section1 />
        </div>
        <section className="w-full flex flex-col items-center justify-center gap-8 md:gap-6 lg:gap-4 font-secondary">
          <motion.header
            initial={{ opacity: 0, translateY: "2px" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3, delay: 0.4, ease: "linear" }}
            viewport={{ once: true }}
            className="text-3xl text-secondary"
          >
            Loved by folks from
          </motion.header>
          <motion.section
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex flex-row gap-6 md:gap-8 lg:gap-12 items-center justify-center max-w-[94%]"
          >
            <Deel color="#51407D" />
            <Zoominfo color="#51407D" />
            <Salesforce color="#51407D" />
            <Illumin color="#51407D" />
          </motion.section>
        </section>
      </div>
      <div className="" id="how-it-works">
        <ScrollSection />
      </div>

      <Section2 />
      <div ref={wrapperRef} className="">
        <Section3 />
      </div>
      <div
        id="faqs"
        ref={lowerRef}
        className="relative bg-white pb-4 md:pb-12 lg:pb-24 "
      >
        <Section4 />
      </div>
      <Section5 />
      <div id="contact-us" className="max-w-[2700px] mx-auto relative">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
