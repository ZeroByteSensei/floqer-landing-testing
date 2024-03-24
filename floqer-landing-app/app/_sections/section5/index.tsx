import { BackgroundBeams } from "@/app/_components/animations/Backgroundbeams";
import { Button } from "@nextui-org/button";
import React from "react";

const Section5 = () => {
  return (
    <div className="relative w-full min-h-[1091px] flex flex-col items-center justify-center gap-6 sm:gap-12 md:gap-24 bg-[#160f2b] font-bold">
      <BackgroundBeams />
      <div className="flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#aea8f9] via-[#dcbef9] to-[#f9dadf] bg-clip-text text-7xl text-transparent">
        <span  >Scale your outbounds in</span>
        <span  >seconds, not months.</span>
      </div>
      <Button className="text-black bg-white text-5xl px-6 py-4 h-fit w-fit" >Get in touch</Button>
    </div>
  );
};

export default Section5;
