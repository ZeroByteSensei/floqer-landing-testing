import React from "react";

interface Props {
  size?: string;
}

const Logo = ({ size }: Props) => {
  return (
    <svg
      width={size || "42"}
      height={size || "43"}
      viewBox="0 0 42 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6885 0.964844L16.3398 4.43355C17.709 5.7115 18.4392 7.44587 18.4392 9.36279C18.4392 11.1884 19.1695 12.9228 20.4475 14.2007L20.9039 14.6572L25.1028 1.05612"
        fill="url(#paint0_linear_779_1369)"
      />
      <path
        d="M0.273438 13.1053L5.29395 12.9228C7.11959 12.8315 8.94523 13.5618 10.2232 14.8397C11.5011 16.1176 13.2355 16.7566 15.0611 16.7566H15.7001L8.94523 4.25098"
        fill="url(#paint1_linear_779_1369)"
      />
      <path
        d="M0.273849 30.4491L3.65128 26.7978C4.92923 25.4285 6.66359 24.607 8.48923 24.607C10.3149 24.607 11.9579 23.7855 13.2359 22.5075L13.6923 22.0511L0 18.126"
        fill="url(#paint2_linear_779_1369)"
      />
      <path
        d="M12.6883 42.4984L12.4144 37.4779C12.3232 35.6523 12.9621 33.8266 14.2401 32.4574C15.4268 31.1794 16.157 29.3538 16.0657 27.6194V26.9805L3.65137 34.0092"
        fill="url(#paint3_linear_779_1369)"
      />
      <path
        d="M30.0321 42.1328L26.2895 38.8467C24.9203 37.66 24.0987 35.9257 24.0075 34.0087C23.9162 32.1831 23.0946 30.54 21.8167 29.2621L21.3603 28.8057L17.709 42.5892"
        fill="url(#paint4_linear_779_1369)"
      />
      <path
        d="M41.8983 29.4442L36.8778 29.8094C35.0521 29.9919 33.2265 29.353 31.8573 28.075C30.488 26.8883 28.7537 26.2494 26.928 26.3406H26.2891L33.5916 38.5724"
        fill="url(#paint5_linear_779_1369)"
      />
      <path
        d="M41.0763 12.1924L37.8814 16.0262C36.6948 17.3955 34.9604 18.3083 33.1348 18.3996C31.3091 18.4908 29.666 19.3124 28.4794 20.6816L28.1143 21.138L41.9891 24.4242"
        fill="url(#paint6_linear_779_1369)"
      />
      <path
        d="M28.2057 0.599609L28.6621 5.62012C28.8447 7.44576 28.297 9.27141 27.0191 10.7319C25.8324 12.1012 25.2847 13.8355 25.376 15.6611L25.4673 16.3001L37.5165 8.72372"
        fill="url(#paint7_linear_779_1369)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_779_1369"
          x1="9.87977"
          y1="-3.46977"
          x2="20.3242"
          y2="13.7928"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CEB0FF" />
          <stop offset="0.525" stopColor="#9A7FE1" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_779_1369"
          x1="-3.21679"
          y1="0.200693"
          x2="4.7797"
          y2="18.1828"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CEB0FF" />
          <stop offset="0.525" stopColor="#9A7FE1" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_779_1369"
          x1="-3.09784"
          y1="14.1348"
          x2="5.3269"
          y2="31.1991"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CEB0FF" />
          <stop offset="0.525" stopColor="#9A7FE1" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_779_1369"
          x1="0.840923"
          y1="21.9546"
          x2="13.3033"
          y2="40.1404"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CEB0FF" />
          <stop offset="0.525" stopColor="#9A7FE1" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_779_1369"
          x1="14.9209"
          y1="24.3415"
          x2="25.5028"
          y2="41.5877"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CEB0FF" />
          <stop offset="0.525" stopColor="#9A7FE1" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_779_1369"
          x1="22.7575"
          y1="22.3676"
          x2="30.41"
          y2="40.157"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CEB0FF" />
          <stop offset="0.525" stopColor="#9A7FE1" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_779_1369"
          x1="24.9751"
          y1="8.23079"
          x2="33.2319"
          y2="25.3043"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CEB0FF" />
          <stop offset="0.525" stopColor="#9A7FE1" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_779_1369"
          x1="22.6172"
          y1="-4.48542"
          x2="35.3747"
          y2="13.512"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CEB0FF" />
          <stop offset="0.525" stopColor="#9A7FE1" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
