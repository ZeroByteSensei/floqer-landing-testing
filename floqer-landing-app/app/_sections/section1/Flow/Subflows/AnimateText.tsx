import React from "react";
import AnimatePayload from "../AnimatePayload";

interface Props {
  payload: string;
}

const AnimateText = ({ payload }: Props) => {
  return <AnimatePayload payload={payload} />;
};

export default AnimateText;
