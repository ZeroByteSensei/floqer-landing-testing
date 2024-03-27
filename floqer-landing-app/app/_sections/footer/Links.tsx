"use client";

import { Button } from "@nextui-org/button";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const LinkButton = ({
  children,
  link,
  title
}: {
  children: React.ReactNode;
  link: string;
  title: string;
}) => {
  return (
    <Button
      isIconOnly
      className="h-fit w-fit flex items-center justify-center p-2 border-2 border-transparent hover:border-gray-300 transition rounded-full bg-white"
      onClick={() => window.open(link, "_blank")}
      title={`${title} link`}
    >
      {children}
    </Button>
  );
};

const Links = () => {
  return (
    <div className="flex gap-3 items-center">
      <LinkButton link="" title="Linkedin" >
        <FaLinkedin size={31} />
      </LinkButton>
      <LinkButton link="" title="Youtube" >
        <FaYoutube size={31} />
      </LinkButton>

      <LinkButton link="" title="Instagram" >
        <FaInstagram size={31} />
      </LinkButton>

      <LinkButton link="" title="Twitter(X)" >
        <FaXTwitter size={31} />
      </LinkButton>
    </div>
  );
};

export default Links;
