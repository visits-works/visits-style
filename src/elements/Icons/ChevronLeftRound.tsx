/* tslint:disable max-line-length */
import React, { SVGAttributes } from 'react';

export default function ChevronLeftRound(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" {...props}>
      <g fill="none">
        <path d="M15 29c-3.74 0-7.255-1.456-9.9-4.1A13.908 13.908 0 011 15c0-3.74 1.456-7.255 4.1-9.9A13.908 13.908 0 0115 1c3.74 0 7.255 1.456 9.9 4.1A13.908 13.908 0 0129 15c0 3.74-1.456 7.255-4.1 9.9A13.908 13.908 0 0115 29z" />
        <path
          d="M15 2a12.915 12.915 0 00-9.192 3.808A12.915 12.915 0 002 15c0 3.472 1.352 6.737 3.808 9.192A12.915 12.915 0 0015 28c3.472 0 6.737-1.352 9.192-3.808A12.915 12.915 0 0028 15c0-3.472-1.352-6.737-3.808-9.192A12.915 12.915 0 0015 2m0-2c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C0 6.716 6.716 0 15 0z"
          fill="currentColor"
        />
      </g>
      <path
        d="M18.066 8.5l-7.567 6.731 7.567 6.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
