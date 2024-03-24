"use client";

import { Button } from "@nextui-org/button";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { motion } from "framer-motion";

interface Props {
  que: string;
  ans: string;
}

const Slot = ({ que, ans }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <section
      className="w-full rounded-md p-6 flex flex-col gap-4"
      style={{
        boxShadow: "0px 0px 14px #dcddde",
      }}
    >
      <section className="w-full flex items-center justify-between font-bold">
        <span className="">{que}</span>
        <motion.button
          animate={open ? "open" : "close"}
          variants={{
            open: { rotate: 135 },
            close: { rotate: 0 },
          }}
          transition={{
            duration: 0.2,
            ease: "linear",
          }}
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center border-2 border-transparent justify-center p-3 rounded-full w-fit h-fit transition hover:border-gray-200"
        >
          {/* <Button
            isIconOnly
            className="flex items-center justify-center p-4 rounded-full w-fit h-fit"
          > */}
          <FaPlus />
          {/* </Button> */}
        </motion.button>
      </section>
      <div
        className={`flex w-full flex-col gap-2 overflow-hidden font-light closed ${
          open ? "opened" : ""
        }`}
      >
        {/* <div className="text-xl font-bold">Schedule your email(s)</div>
        <div className="text-xl font-bold">Schedule your email(s)</div>
        <div className="text-xl font-bold">Schedule your email(s)</div>
        <div className="text-xl font-bold">Schedule your email(s)</div> */}
        <div>{ans}</div>
      </div>
    </section>
  );
};

export default Slot;
