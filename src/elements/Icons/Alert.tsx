import type { SVGAttributes } from 'react';

export default function Alert(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32" {...props}>
      <path d="M16 0C7.16 0 0 7.16 0 16C0 24.84 7.16 32 16 32C24.84 32 32 24.84 32 16C32 7.16 24.84 0 16 0ZM16 31C7.73 31 1 24.27 1 16C1 7.73 7.73 1 16 1C24.27 1 31 7.73 31 16C31 24.27 24.27 31 16 31Z" fill="currentColor" />
      <path d="M15.5 19.55V8.54999C15.5 8.26999 15.72 8.04999 16 8.04999C16.28 8.04999 16.5 8.26999 16.5 8.54999V19.55C16.5 19.83 16.28 20.05 16 20.05C15.72 20.05 15.5 19.83 15.5 19.55Z" fill="currentColor" />
      <path d="M16 23.95C16.5523 23.95 17 23.5023 17 22.95C17 22.3977 16.5523 21.95 16 21.95C15.4477 21.95 15 22.3977 15 22.95C15 23.5023 15.4477 23.95 16 23.95Z" fill="currentColor" />
    </svg>
  );
}
