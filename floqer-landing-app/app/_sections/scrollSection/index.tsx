"use client";
import { StickyScroll } from "@/app/_components/animations/StickyScroll";
import { StickyscrollTemp } from "@/app/_components/animations/StickyscrollTemp";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import Frame1 from "@/public/assets/SVGs/scrollsection/frame1.svg";
// import Frame2 from "@/public/assets/SVGs/scrollsection/frame2.svg";
// import Frame3 from "@/public/assets/SVGs/scrollsection/frame3.svg";
// import Frame4 from "@/public/assets/SVGs/scrollsection/frame4.svg";
import First from "@/public/assets/SVGs/section2/first.svg";
import Second from "@/public/assets/SVGs/section2/second.svg";
import Third from "@/public/assets/SVGs/section2/third.svg";

const content = [
  {
    title: (
      <div className="flex flex-col text-secondary font-normal text-5xl">
        <span>
          <span className="font-medium">Drag and drop </span>
          <span>tools</span>
        </span>
        <span>into your workflow</span>
      </div>
    ),
    description:
      "Choose from a list of actions 50+ leading sales tools and drop them into our visual builder to start building your custom sales flow.",
    content: <Image src={First} alt="Demo" className="" />,
  },
  {
    title: (
      <div className="flex flex-col text-secondary font-normal text-5xl">
        <span>
          <span className="font-medium">Turn your integrations</span>
        </span>
        <span>into an automation</span>
      </div>
    ),
    description:
      "Choose from a list of actions 50+ leading sales tools and drop them into our visual builder to start building your custom sales flow.",
    content: <Image src={Second} alt="Demo" className="w-[821px]" />,
  },
  {
    title: (
      <div className="flex flex-col text-secondary font-normal text-5xl">
        <span>
          <span  >Iterate </span>
          <span className="font-medium">{`faster & better`}</span>
        </span>
      </div>
    ),
    description:
      "We understand that no sales process is everlasting. That is why we’re always on the hunt to bring cutting-edge AI sales tools to the platform so that you can test quick, find what sales processes work for you, without spending a fortune.",
    content: <Image src={Third} alt="Demo" className="w-[821px]" />,
  },
];

const ScrollSection = () => {
  return (
    <div className="mb-4 md:mb-12 lg:mb-24 bg-white flex flex-col items-start justify-center h-fit p-6 md:p-12 lg:p-24 gap-4 md:gap-8 lg:gap-12 max-w-[1920px] mx-auto">
      <header className="text-7xl text-[#5549D8] font-secondary">
        <span className="text-lightPurple">Sooo, </span>
        <span className="text-secondary">how does it work?</span>
      </header>
      <div className="w-full">
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default ScrollSection;
