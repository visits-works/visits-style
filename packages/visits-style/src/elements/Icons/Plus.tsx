import React, { SVGAttributes } from 'react';

export default function Plus(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M9 0V9H0V12H9V21H12V12H21V9H12V0H9Z" fill="currentColor" />
    </svg>
  );
}
