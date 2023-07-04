/* tslint:disable max-line-length */
import React, { SVGAttributes } from 'react';

export default function User(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="15" cy="15" r="15" stroke="none" />
        <circle cx="15" cy="15" r="14" />
      </g>
      <path
        d="M8 23a6.018 6.018 0 016-6h2a6.018 6.018 0 016 6zm2.6-2h8.9a4.033 4.033 0 00-3.5-2h-1.9a4.035 4.035 0 00-3.5 2zm.4-9v-1a4.012 4.012 0 014-4 4.012 4.012 0 014 4v1a4.012 4.012 0 01-4 4 4.012 4.012 0 01-4-4zm2-1v1a2.006 2.006 0 002 2 2.006 2.006 0 002-2v-1a2.006 2.006 0 00-2-2 2.006 2.006 0 00-2 2z"
        fill="currentColor"
      />
    </svg>
  );
}
