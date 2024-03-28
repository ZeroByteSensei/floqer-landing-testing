"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { FaPlus } from "react-icons/fa";
import { faqs } from "@/app/_utils/constants";

export default function FAQ() {
  return (
    <Accordion
      variant="splitted"
      selectionMode="multiple"
      itemClasses={{
        content: "p-2 pb-4 text-base",
        title: "text-xl font-bold",
        titleWrapper: "p-2"

      }}
      showDivider
      dividerProps={{ style: { height: "1px", background: "black", width: "full" } }}
      className="gap-8"
    >
      {faqs.map((itr, idx) => (
        <AccordionItem
          key={idx}
          aria-label="itr"
          title={itr.question}
          // indicator={<FaPlus />}
        >
          <span>{itr.answer}</span>
        </AccordionItem>
      ))}
      {/* <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title="Accordion 1"
        indicator={<FaPlus />}
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
        {defaultContent}
      </AccordionItem> */}
    </Accordion>
  );
}
