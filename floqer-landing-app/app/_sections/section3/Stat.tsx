import React from "react";

interface Props {
  val: number;
  metric: string;
  description?: string;
}

const Stat = ({ val, metric, description }: Props) => {
  return (
    <section className="flex flex-col items-center gap-2 max-w-[190px]">
      <div className="flex justify-center items-end ">
        <span className="font-bold text-8xl text-secondary">{val}</span>
        <span className="text-[#9077D2]">{metric}</span>
      </div>
      <span className="text-sm font-light text-[#11244A] text-center" >{description}</span>
    </section>
  );
};

export default Stat;
