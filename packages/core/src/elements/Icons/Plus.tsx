import React, { SVGAttributes } from 'react';

export default function Plus(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg width="21" height="21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M9 0v9H0v3h9v9h3v-9h9V9h-9V0H9z" fill="currentColor" />
    </svg>
  );
}
