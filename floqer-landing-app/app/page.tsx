import React from "react";
import Section1 from "@/app/_sections/section1";
import { NextUIProvider } from "@nextui-org/system";
import Section2 from "./_sections/section2";
import Section3 from "./_sections/section3";

const page = () => {
  return (
    <div className="font-primary">
      <div className="bg-gradient-to-tr from-[#FFFFFF] via-[#f4b7e2] via-[60%] to-[#dedcfc] absolute top-0 right-0 h-[80vh] w-[40vw] opacity-10 blur-lg" />
      <div className="bg-gradient-to-br from-[#d8dbf9] from-[5%] via-[#ded7fc] via-[30%] via-[#fbebee] via-20% to-[#ffffff]">
        <div className="max-w-[2700px] mx-auto">
          <Section1 />
        </div>
      </div>
      <Section2 />
      <Section3 />
    </div>
  );
};

export default page;
