import Tick from "@/public/assets/SVGs/Tick";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Spinner from "@/app/_components/animations/Spinner";

interface Props {
  delay?: number;
  children: JSX.Element;
}

const SvgTickWrapper = ({ delay, children }: Props) => {
  const [disp, setDisp] = useState(false);
  useEffect(() => {
    const tickTm = setTimeout(
      () => {
        setDisp(() => true);
      },
      delay ? delay : 1000
    );
    return () => clearTimeout(tickTm);
  }, []);

  return (
    <section className="relative">
      {/* <motion.div
        // initial={{
        //   opacity: 0,
        // }}
        // animate={{
        //   opacity: 1,
        // }}
        // transition={{
        //   duration: 0.3,
        // }}
        className="absolute top-0 right-0"
      >
        <div className="h-fit w-fit flex items-center justify-center bg-white border border-gray-300 shadow-sm shadow-gray-300 rounded-full">
          <Spinner color="#a0a3a6" width="17px" strokeWidth="15px" />
        </div>
      </motion.div> */}
      {disp && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
          }}
          className="absolute top-0 right-0"
        >
          <Tick />
        </motion.div>
      )}
      {children}
    </section>
  );
};

export default SvgTickWrapper;
