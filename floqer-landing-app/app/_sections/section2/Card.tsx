import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col p-12 items-start justify-center rounded-lg border border-gray-50 shadow-xl shadow-tertiary">
      <span className="font-bold text-6xl text-tertiary">{`"`}</span>
      <section className="flex flex-col items-start gap-2">
        <header className="font-bold text-3xl">
          Response rate was 2X normal
        </header>
        <span>
          {
            "Response rate was 2X normal! Referred you to a few friends that will be trying it out :) We just finished the campaign with the initial 1,600 leads and the results were very conclusive! Response rate was 2X normal."
          }
        </span>
      </section>
      <span className="font-bold text-6xl text-tertiary">{`"`}</span>
    </div>
  );
};

export default Card;
