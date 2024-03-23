import React from "react";
import Section1 from "@/app/_sections/section1";
import { NextUIProvider } from "@nextui-org/system";

const page = () => {
  return (
    
      <div className="font-primary">
        <div className="bg-gradient-to-tr from-[#FFFFFF] via-[#f4b7e2] via-[60%] to-[#dedcfc] absolute top-0 right-0 h-[80vh] w-[40vw] opacity-10 blur-lg" />
        <Section1 />
      </div>
    
  );
};

export default page;
