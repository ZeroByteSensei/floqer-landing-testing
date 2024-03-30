import React from "react";

interface Props {
  size?: string;
}

const Tick = ({ size }: Props) => {
  return (
    <svg
      width={size || "17"}
      height={size || "17"}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="8.47816"
        cy="8.26087"
        r="8.26087"
        fill="url(#paint0_linear_61_1344)"
      />
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M12.9481 4.77386C13.1629 4.96138 13.185 5.28754 12.9975 5.50235L7.58859 11.698C7.49054 11.8103 7.34873 11.8748 7.19965 11.8748C7.05056 11.8748 6.90875 11.8103 6.81071 11.698L4.64715 9.21974C4.45962 9.00493 4.48173 8.67878 4.69654 8.49125C4.91134 8.30372 5.2375 8.32583 5.42503 8.54064L7.19965 10.5734L12.2196 4.82324C12.4071 4.60844 12.7333 4.58633 12.9481 4.77386Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_61_1344"
          x1="8.47816"
          y1="0"
          x2="8.47816"
          y2="16.5217"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4DFF9F" />
          <stop offset="0.995" stopColor="#56C98B" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Tick;
