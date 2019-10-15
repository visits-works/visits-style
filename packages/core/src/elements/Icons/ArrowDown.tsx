import React, { SVGAttributes } from 'react';

export default function ChevronDown(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M10.6 0L6 4.6 1.4 0 0 1.4l6 6 6-6L10.6 0z" fill="currentColor" />
    </svg>
  );
}
