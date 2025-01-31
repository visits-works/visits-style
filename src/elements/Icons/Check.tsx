import type { SVGAttributes } from 'react';

export default function Check(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" {...props}>
      <path d="M11.5 18.5l-3.9-4L6 16l5.6 5.6 11.6-11.5-1.7-1.6z" fill="currentColor" />
    </svg>
  );
}
