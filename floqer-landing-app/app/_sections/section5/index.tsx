import { BackgroundBeams } from "@/app/_components/animations/Backgroundbeams";
import { SparklesCore } from "@/app/_components/animations/Sparkles";
import { Button } from "@nextui-org/button";
import React from "react";

const Section5 = () => {
  return (
    <div className="relative w-full h-[800px] flex flex-col items-center justify-center gap-6 sm:gap-12 md:gap-24 bg-[#160f2b] font-bold">
      <div className="w-full h-full absolute inset-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#aea8f9] via-[#dcbef9] to-[#f9dadf] bg-clip-text text-7xl text-transparent">
        <span>Scale your outbounds in</span>
        <span>seconds, not months.</span>
      </div>
      <Button className="text-black bg-white text-5xl px-6 py-4 h-fit w-fit">
        Get in touch
      </Button>
    </div>
  );
};

export default Section5;
