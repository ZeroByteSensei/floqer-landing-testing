"use client";
import { StickyScroll } from "@/app/_components/animations/StickyScroll";
import { StickyscrollTemp } from "@/app/_components/animations/StickyscrollTemp";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import Frame1 from "@/public/assets/SVGs/scrollsection/frame1.svg";
// import Frame2 from "@/public/assets/SVGs/scrollsection/frame2.svg";
// import Frame3 from "@/public/assets/SVGs/scrollsection/frame3.svg";
// import Frame4 from "@/public/assets/SVGs/scrollsection/frame4.svg";
import First from "@/public/assets/SVGs/section2/first.svg"
import Second from "@/public/assets/SVGs/section2/second.svg"
import Third from "@/public/assets/SVGs/section2/third.svg"

const content = [
  {
    title: "Enrich lead list</>",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: <Image src={First} alt="Demo" className="" />,
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: <Image src={Second} alt="Demo" className="w-[821px]" />,
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: <Image src={Third} alt="Demo" className="w-[821px]" />,
  },
];

const ScrollSection = () => {
  return (
    <div className="mb-4 md:mb-12 lg:mb-24 bg-white flex flex-col items-start justify-center h-fit p-4 md:p-8 lg:p-12">
      <header className="text-4xl font-semibold text-[#5549D8] font-secondary">
        <span>Sooo, </span>
        <span>how does it work?</span>
      </header>
      <div className="w-full">
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default ScrollSection;
