/* tslint:disable max-line-length */
import React, { SVGAttributes } from 'react';

export default function FileRound(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" {...props}>
      <g fill="none">
        <path d="M15 29c-3.74 0-7.255-1.456-9.9-4.1A13.908 13.908 0 011 15c0-3.74 1.456-7.255 4.1-9.9A13.908 13.908 0 0115 1c3.74 0 7.255 1.456 9.9 4.1A13.908 13.908 0 0129 15c0 3.74-1.456 7.255-4.1 9.9A13.908 13.908 0 0115 29z" />
        <path
          d="M15 2a12.915 12.915 0 00-9.192 3.808A12.915 12.915 0 002 15c0 3.472 1.352 6.737 3.808 9.192A12.915 12.915 0 0015 28c3.472 0 6.737-1.352 9.192-3.808A12.915 12.915 0 0028 15c0-3.472-1.352-6.737-3.808-9.192A12.915 12.915 0 0015 2m0-2c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C0 6.716 6.716 0 15 0z"
          fill="currentColor"
        />
      </g>
      <g transform="translate(9 7)" fill="none" stroke="currentColor" strokeWidth="2">
        <rect width="12" height="16" rx="1" stroke="none" />
        <path d="M1 1h10v14H1z" />
      </g>
      <path
        fill="currentColor"
        d="M13 11h4v1.3h-4zM13 14h4v1.3h-4zM13 17h4v1.3h-4z"
      />
    </svg>
  );
}
