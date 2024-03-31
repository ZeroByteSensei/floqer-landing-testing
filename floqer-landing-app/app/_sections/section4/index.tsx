import React from "react";
import { faqs } from "@/app/_utils/constants";
import Slot from "./Slot";
import FAQ from "./Accordion";

const Section4 = () => {
  return (
    <div className="max-w-[1219px] mx-auto flex flex-col gap-12 p-4 sm:p-8 md:p-12 mb-4 md:mb-12 lg:mb-24 ">
      <section className="flex flex-col gap-2 items-start justify-center font-secondary">
        <header className="text-6xl font-light bg-clip-text bg-gradient-to-r from-[#806ebb] from-0% via-[#ab99e5] via-50% to-[#8271bc] to-100% text-transparent">
          Got questions?
        </header>
        <header className="text-6xl font-bold text-secondary">
          We got answers
        </header>
      </section>
      <section className="flex flex-col w-full gap-4" >
        {/* {faqs.map((itr, idx) => (
          <Slot ans={itr.answer} que={itr.question} key={idx} />
        ))} */}
        <FAQ />
      </section>
    </div>
  );
};

export default Section4;
