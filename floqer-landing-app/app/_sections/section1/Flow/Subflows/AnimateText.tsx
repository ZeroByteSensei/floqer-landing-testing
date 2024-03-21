import React, { useEffect } from "react";
import AnimatePayload from "../AnimatePayload";

interface Props {
  payload: string;
}

const AnimateText = ({ payload }: Props) => {
  // console.log("animetext loaded")
  return <AnimatePayload payload={payload} />;
};

export default AnimateText;
