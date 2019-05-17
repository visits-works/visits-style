import React, { SVGAttributes } from 'react';

export default function PencilSimple(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.96967 0.21967C10.2626 -0.0732233 10.7374 -0.0732233 11.0303 0.21967L14.7803 3.96967C15.0732 4.26256 15.0732 4.73744 14.7803 5.03033L5.03033 14.7803C4.88968 14.921 4.69891 15 4.5 15H0.75C0.335786 15 0 14.6642 0 14.25V10.5C0 10.3011 0.0790176 10.1103 0.21967 9.96967L9.96967 0.21967ZM1.5 10.8107V13.5H4.18934L13.1893 4.5L10.5 1.81066L1.5 10.8107Z"
        fill="currentColor"
      />
    </svg>
  );
}
