import React, { ReactNode } from "react";

interface Props {
  content: {
    title: ReactNode | string;
    description: string;
    content?: React.ReactNode | any;
  }[];
}

const NormalScroll = ({ content }: Props) => {
  return (
    <div className="min-h-screen xl:min-h-fit flex lg:hidden flex-col gap-12 relative scrollbar-hide mt-4">
      {content.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-start justify-center gap-4"
        >
          <h2 className="text-4xl font-bold text-secondary font-secondary">
            {item.title}
          </h2>
          <p className="text-kg text-xl text-[#40444D] mt-10">
            {item.description}
          </p>
          <div
            key={index}
            className={"h-fit rounded-md bg-white overflow-hidden"}
          >
            {item.content ?? null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NormalScroll;
