import { Button } from "@nextui-org/button";
import React from "react";
import { IoMailOutline } from "react-icons/io5";
import ProductGrp from "./ProductGrp";
import ResourcesGrp from "./ResourcesGrp";
import CompanyGrp from "./CompanyGrp";
import Links from "./Links";

const Footer = () => {
  return (
    <div className="p-4 md:p-12 lg:p-24 flex flex-col items-start justify-center gap-6">
      <section className="flex gap-12 items-center">
        <header className="font-bold text-primary text-2xl">floqer</header>
        <span className="text-[#625E6F] text-base">
          Supercharge your outbound team © 2024 Floqer.ai
        </span>
      </section>
      <section className="flex flex-col items-center md:items-start md:flex-row md:justify-between w-full gap-4">
        <section className="flex flex-row gap-4 items-center">
          <Button className="h-fit w-fit px-4 py-1 rounded-full shadow-md bg-white border-gray-300 border flex items-center justify-center gap-2 text-base">
            <IoMailOutline />
            <span>hello@floqer.ai</span>
          </Button>
          <Button className="h-fit w-fit px-4 py-1 rounded-full shadow-md bg-white border-gray-300 border flex items-center justify-center gap-2 text-base">
            <IoMailOutline />
            <span>902-880-1937</span>
          </Button>
        </section>
        <section className="flex flex-col md:flex-row gap-4">
          <ProductGrp />
          <ResourcesGrp />
          <CompanyGrp />
        </section>
      </section>
      <Links  />
    </div>
  );
};

export default Footer;
