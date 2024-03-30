import React from "react";
import { BsFillPersonFill } from "react-icons/bs";

const Card = () => {
  return (
    <div className="flex flex-col p-12 items-start justify-center rounded-lg border border-gray-50 max-w-[956px] bg-white "
    
      style={{
        boxShadow: "0px 0px 14px #E8A496",
      }}
    >
      <span className="font-bold text-6xl text-tertiary">{`"`}</span>
      <section className="flex flex-col items-start gap-2">
        <header className="font-bold text-3xl font-secondary">
          Response rate was 2X normal
        </header>
        <span>
          {
            "Response rate was 2X normal! Referred you to a few friends that will be trying it out :) We just finished the campaign with the initial 1,600 leads and the results were very conclusive! Response rate was 2X normal."
          }
        </span>
      </section>
      <span className="font-bold text-6xl text-tertiary">{`"`}</span>
      <section className="w-full flex items-center gap-2" >
        <span className="flex items-center justify-center p-2" >
        <BsFillPersonFill size={32} />
        </span>
        
        <div  className="flex items-start justify-center flex-col text-sm" >
          <span className="font-bold" >Amber Stone</span>
          <span  >Head of Enterprise ABM, UserTesting</span>
        </div>
      </section>
    </div>
  );
};

export default Card;
