import React, { SVGAttributes } from 'react';

export default function ChevronDown(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.6 0L6 4.6L1.4 0L0 1.4L6 7.4L12 1.4L10.6 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
