import type { SVGAttributes } from 'react';

export default function Caution(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 52 45" {...props}>
      <path d="M50.6 37.8 29.3 2c-1.5-2.6-5.1-2.8-6.7-.3l-21.2 36c-1.7 2.6.2 6.6 3.4 6.6h42.4c3.1 0 5-4 3.4-6.6Zm-24.7.6a2.7 2.7 0 1 1 0-5.5 2.7 2.7 0 0 1 0 5.5Zm2.9-10.1c0 1.5-1.3 2.7-2.8 2.7a2.8 2.8 0 0 1-2.8-2.7V13.9c0-1.5 1.3-2.7 2.8-2.7 1.5 0 2.8 1.2 2.8 2.7v14.4Z" fill="currentColor"/>
    </svg>
  );
}
