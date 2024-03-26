import React from "react";
import { faqs } from "@/app/_utils/constants";
import Slot from "./Slot";

const Section4 = () => {
  return (
    <div className="max-w-[1219px] mx-auto flex flex-col gap-12 p-4 sm:p-8 md:p-12 mb-4 md:mb-12 lg:mb-24 ">
      <section className="flex flex-col gap-2 items-start justify-center">
        <header className="text-6xl font-light text-secondary">
          Got questions?
        </header>
        <header className="text-6xl font-bold text-secondary">
          We got answers
        </header>
      </section>
      <section className="flex flex-col w-full gap-4" >
        {faqs.map((itr, idx) => (
          <Slot ans={itr.answer} que={itr.question} key={idx} />
        ))}
      </section>
    </div>
  );
};

export default Section4;
