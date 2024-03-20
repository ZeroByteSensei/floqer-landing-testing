import React from "react";

import Navbar from "@/app/_components/Navbar";
import Flow from "./Flow";
import FlowTemplate from "./Flow/FlowTemplate";
import Linkedin from "@/public/assets/SVGs/Linkedin";

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
        <section className="flex flex-1" >
        <FlowTemplate
          Icon={<Linkedin size={"200px"} />}
          payload="this is aatir"
        />
        </section>
      </section>
    </section>
  );
};

export default index;
