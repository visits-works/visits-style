import React, { SVGAttributes } from 'react';

export default function Pencil(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17.796"
      height="17.908"
      viewBox="0 0 17.796 17.908"
      {...props}
    >
      <g opacity="0.6">
        <g>
          <path
            d="M1.254,12.674.5,17.408l4.726-.8L17.3,4.472,13.281.5Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
        </g>
        <line
          x2="3.851"
          y2="3.838"
          transform="translate(1.375 12.766)"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <line
          x2="3.836"
          y2="3.801"
          transform="translate(10.949 2.959)"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
      </g>
    </svg>
  );
}
