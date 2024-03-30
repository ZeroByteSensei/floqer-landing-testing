import React from "react";

interface Props {
  size?: string;
}

const Star = ({ size }: Props) => {
  return (
    <svg
      width={size || "68"}
      height={size || "67"}
      viewBox="0 0 68 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_61_823)">
        <path
          d="M34 42C35.2392 42 36.2546 41.0888 36.4266 39.7991C38.1304 28.3131 39.6965 26.714 50.7456 25.4589C52.019 25.3041 53 24.2381 53 23.0001C53 21.7448 52.0363 20.7131 50.7627 20.524C39.7826 18.9937 38.4231 17.6525 36.4266 6.18372C36.2029 4.91131 35.2219 4 34 4C32.7437 4 31.7454 4.91131 31.539 6.2009C29.8696 17.6697 28.3035 19.2688 17.2717 20.524C15.9638 20.696 15 21.7277 15 23.0001C15 24.2381 15.9294 25.2697 17.2373 25.4589C28.2346 27.0236 29.577 28.3475 31.539 39.8164C31.7971 41.1059 32.7953 42 34 42Z"
          fill="#8B80EB"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_61_823"
          x="0.8"
          y="0.400001"
          width="66.4"
          height="66.4"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="10.6" />
          <feGaussianBlur stdDeviation="7.1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_61_823"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_61_823"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Star;
