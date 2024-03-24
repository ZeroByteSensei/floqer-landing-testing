import React from "react";

const arr = ["TapWize", "API", "Integrations", "Pricing", "Get a demo"];

const ProductGrp = () => {
  return (
    <div className="flex flex-col gap-4 w-36">
      <span className="font-bold text-secondary">Product</span>
      <div className="flex flex-col gap-2 text-gray-500">
        {arr.map((itr) => (
          <span key={itr}>{itr}</span>
        ))}
      </div>
    </div>
  );
};

export default ProductGrp;
