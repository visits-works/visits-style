import React, { SVGAttributes } from 'react';

export default function PencilSimple(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.97.22a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-9.75 9.75a.75.75 0 01-.53.22H.75a.75.75 0 01-.75-.75V10.5a.75.75 0 01.22-.53L9.97.22zM1.5 10.81v2.69h2.69l9-9-2.69-2.69-9 9z"
        fill="currentColor"
      />
    </svg>
  );
}
