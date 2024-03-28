import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FlowTemplate from "../FlowTemplate";
import Linkedin from "@/public/assets/SVGs/Linkedin";
import { Type } from "@/app/_utils/constants";
import AnimateText from "../Subflows/AnimateText";
import Image from "next/image";
import AnimateSVGs from "../Subflows/AnimateSVGs";
import ApolloSvg from "@/public/assets/SVGs/ApolloSVG.svg";
import Redwolf from "@/public/assets/PNGs/RedWolf.png";
import Rocket from "@/public/assets/PNGs/Rocket.png";
import Star from "@/public/assets/SVGs/Star";

const Flow1 = () => {
  const [timeIdx, setTimeIdx] = useState(0);

  useEffect(() => {
    const tm = setTimeout(() => {
      setTimeIdx((prev) => prev + 1);
      clearTimeout(tm);
      setTimeout(() => {
        setTimeIdx((prev) => prev + 1);
      }, 3500);
    }, 3000);
    return () => clearInterval(tm);
  }, []);
  return (
    <>
      <motion.section
        initial={{ opacity: 0, translateY: "2px" }}
        animate={{ opacity: 1, translateY: "0px" }}
        transition={{
          duration: 0.1,
          delay: 0.2,
        }}
      >
        <FlowTemplate
          Icon={<Linkedin size={"50px"} />}
          borderColor="#007AB9"
          type={Type.linkedin}
          payload="Importing your leads..."
          delay={500}
          SubflowComp={<AnimateText payload="Importing your leads..." />}
          SecondFlow={<AnimateText payload="Leads imported..." />}
        />
      </motion.section>
      {timeIdx > 0 && (
        <motion.section
          initial={{ opacity: 0, translateY: "2px" }}
          animate={{ opacity: 1, translateY: "0px" }}
          transition={{
            duration: 0.1,
            // delay: 0.5,
          }}
        >
          <FlowTemplate
            Icon={
              <Image
                src={ApolloSvg}
                alt="apollo"
                className="w-[45px] h-[45px]"
              />
            }
            payload="Lead email found from Apollo.io"
            borderColor="#FECF40"
            type={Type.apollo}
            delay={600}
            SubflowComp={
              <AnimateSVGs
                payload={[
                  <Image
                    key={1}
                    src={Redwolf}
                    alt="redwolf"
                    className="w-[45px] h-[45px]"
                  />,
                  <Image
                    src={Rocket}
                    alt="rocket"
                    key={2}
                    className="w-[45px] h-[45px]"
                  />,
                ]}
              />
            }
            SecondFlow={
              <AnimateText payload="Lead email found from Apollo.io" />
            }
          />
        </motion.section>
      )}
      {timeIdx > 1 && (
        <motion.section
        initial={{ opacity: 0, translateY: "2px" }}
        animate={{ opacity: 1, translateY: "0px" }}
          transition={{
            duration: 0.1,
          }}
        >
          <FlowTemplate
            Icon={<Star size={"50px"} />}
            borderColor="#8B80EB"
            type={Type.generation}
            delay={600}
            payload="Generating personalized email for leads..."
            SubflowComp={
              <AnimateText payload="Generating personalized email for leads..." />
            }
            SecondFlow={
              <AnimateText payload="Sent personalized email to lead" />
            }
          />
        </motion.section>
      )}
    </>
  );
};

export default Flow1;
