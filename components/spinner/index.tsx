import React from "react";

const Index = () => {
  return (
    <svg
      style={{margin:"auto",background:"none",display:"block"}}
      width="25px"
      height="25px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        r="30"
        stroke="#91ffc1"
        strokeWidth="10"
        fill="none"
      ></circle>
      <circle
        cx="50"
        cy="50"
        r="30"
        stroke="#41cd7d"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;180 50 50;720 50 50"
          keyTimes="0;0.5;1"
        ></animateTransform>
        <animate
          attributeName="stroke-dasharray"
          repeatCount="indefinite"
          dur="1s"
          values="18.84955592153876 169.64600329384882;94.2477796076938 94.24777960769377;18.84955592153876 169.64600329384882"
          keyTimes="0;0.5;1"
        ></animate>
      </circle>
    </svg>
  );
};

export default Index;
