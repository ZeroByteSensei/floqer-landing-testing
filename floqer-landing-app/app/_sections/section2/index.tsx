import React from "react";
import Quadrant1 from "./Quadrants/Quadrant1";
import Quadrant2 from "./Quadrants/Quadrant2";
import Quadrant3 from "./Quadrants/Quadrant3";
import Quadrant4 from "./Quadrants/Quadrant4";

const Section2 = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen max-h-[2000px] font-bold">
      <header className="text-5xl">Your go-to sales</header>
      <span className="bg-gradient-to-r bg-clip-text from-[#5349d0] from-80% to-[#8583f7] text-transparent text-6xl">
        in one flow
      </span>
      <section className=" absolute inset-0 min-h-screen max-h-[2000px] bg-transparent max-w-[2300px] grid grid-cols-2 overflow-hidden">
        <Quadrant1 />
        <Quadrant2 />
        <Quadrant3 />
        <Quadrant4 />
      </section>
    </section>
  );
};

export default Section2;
