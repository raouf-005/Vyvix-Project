import React from "react";

const CheckMark = ({ size, height, width, ...props }) => {
  return (
    <svg
    width={size || width || 24}
    height={size || height || 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 12H18"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 18V6"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  );
};

export default CheckMark;

<svg width="18" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM7.71 13.29C7.32 13.68 6.69 13.68 6.3 13.29L2.71 9.7C2.32 9.31 2.32 8.68 2.71 8.29C3.1 7.9 3.73 7.9 4.12 8.29L7 11.17L13.88 4.29C14.27 3.9 14.9 3.9 15.29 4.29C15.68 4.68 15.68 5.31 15.29 5.7L7.71 13.29Z" fill="url(#paint0_linear_545_6754)"/>
<defs>
  <linearGradient id="paint0_linear_545_6754" x1="0" y1="0" x2="16" y2="16" gradientUnits="userSpaceOnUse">
    <stop stopColor="#FE4768"/>
    <stop offset="1" stopColor="#4B2CFA"/>
  </linearGradient>
</defs>
</svg>