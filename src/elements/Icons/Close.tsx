/* tslint:disable max-line-length */
import React, { SVGAttributes } from 'react';

export default function Close(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M26 26l-12.5-12.5L26 1" />
        <path d="M1 26l12.5-12.5L1 1" />
      </g>
    </svg>
  );
}
