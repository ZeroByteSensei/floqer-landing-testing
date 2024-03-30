"use client";
import { StickyScroll } from "@/app/_components/animations/StickyScroll";
import { StickyscrollTemp } from "@/app/_components/animations/StickyscrollTemp";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Frame1 from "@/public/assets/SVGs/scrollsection/frame1.svg";
import Frame2 from "@/public/assets/SVGs/scrollsection/frame2.svg";
import Frame3 from "@/public/assets/SVGs/scrollsection/frame3.svg";
import Frame4 from "@/public/assets/SVGs/scrollsection/frame4.svg";

const content = [
  {
    title: "Enrich lead list",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: <Image src={Frame1} alt="Demo" className="" />,
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: <Image src={Frame2} alt="Demo" className="" />,
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: <Image src={Frame3} alt="Demo" className="" />,
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again.",
    content: <Image src={Frame4} alt="Demo" className="" />,
  },
];

const ScrollSection = () => {
  return (
    <div className=" mb-4 md:mb-12 lg:mb-24 bg-white flex justify-center items-center h-fit ">
      <StickyScroll content={content} />
    </div>
  );
};

export default ScrollSection;
