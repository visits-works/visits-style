import React, { SVGAttributes } from 'react';

export default function Plus(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="16.5" y="9" width="14" height="1" rx=".5" transform="rotate(90 16.5 9)" fill="currentColor" />
      <rect x="9" y="15.5" width="14" height="1" rx=".5" fill="currentColor" />
    </svg>
  );
}
