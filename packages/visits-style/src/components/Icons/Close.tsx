import React, { SVGAttributes } from 'react';

export default function Close(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26.998"
      height="26.998"
      viewBox="0 0 26.998 26.998"
      pointerEvents="bounding-box"
      {...props}
    >
      <g transform="translate(-131 -571)">
        <g transform="translate(132 572)">
          <path
            d="M28.5,26,16,13.5,28.5,1"
            transform="translate(-3.501 -1)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <path
            d="M1,26,13.5,13.5,1,1"
            transform="translate(-1 -1)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
        </g>
      </g>
    </svg>
  );
}
