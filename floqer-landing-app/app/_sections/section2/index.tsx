"use client";

import { Button } from "@nextui-org/button";
import { NextUIProvider } from "@nextui-org/system";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import React from "react";
import Card from "./Card";

const Section2 = () => {
  return (
    <NextUIProvider>
      <section className="w-full flex flex-col items-center justify-center gap-12">
        <section className="flex flex-col gap-4 items-center justify-center text-secondary">
          <h1 className="font-bold text-6xl ">{"You're in good company"}</h1>
          <p className="text-center">{"You don't have to trust our word"}</p>
        </section>
        <section className="w-full flex items-center justify-center gap-8">
          <Button
            isIconOnly
            className="flex items-center justify-center h-fit w-fit bg-white p-4 border rounded-full border-gray-100 shadow-md"
          >
            <FiChevronLeft />
          </Button>
          <Card />
          <Button
            isIconOnly
            className="flex items-center justify-center h-fit w-fit bg-white p-4 border rounded-full border-gray-100 shadow-md"
          >
            <FiChevronRight />
          </Button>
        </section>
      </section>
      <div className="h-[100px]" ></div>
    </NextUIProvider>
  );
};

export default Section2;
