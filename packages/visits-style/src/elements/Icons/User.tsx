/* tslint:disable max-line-length */
import React, { SVGAttributes } from 'react';

export default function User(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" {...props}>
      <g transform="translate(-468 -383)">
        <g transform="translate(468 383)" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="15" cy="15" r="15" stroke="none" />
          <circle cx="15" cy="15" r="14" fill="none" />
        </g>
        <path
          d="M-4-310a6.018,6.018,0,0,1,6-6H4a6.018,6.018,0,0,1,6,6Zm2.6-2H7.5A4.033,4.033,0,0,0,4-314H2.1A4.035,4.035,0,0,0-1.4-312Zm.4-9v-1a4.012,4.012,0,0,1,4-4,4.012,4.012,0,0,1,4,4v1a4.012,4.012,0,0,1-4,4A4.012,4.012,0,0,1-1-321Zm2-1v1a2.006,2.006,0,0,0,2,2,2.006,2.006,0,0,0,2-2v-1a2.006,2.006,0,0,0-2-2A2.006,2.006,0,0,0,1-322Z"
          transform="translate(480 716)"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
