import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement>{
  /** サイズ */
  size?: number;
  /** spinnerの太さ */
  borderSize?: number;
  label?: string;
}

export default function Spinner({ size = 20, label = 'Loading...', ...rest }: Props) {
  return (
    <div role="status" {...rest}>
      <svg aria-hidden="true" className="text-accent animate-spin fill-primary" width={size} height={size} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.6a50 50 0 1 1-100 0 50 50 0 0 1 100 0Zm-91 0a41 41 0 1 0 82 0 41 41 0 0 0-82 0Z" fill="currentColor" />
        <path d="M94 39a4.2 4.2 0 0 0 3-5.4A50 50 0 0 0 41.7 1.3c-2.4.4-3.9 2.9-3.2 5.3a5 5 0 0 0 5.6 3.5A41 41 0 0 1 88 36 5 5 0 0 0 94 39Z" fill="currentFill" />
      </svg>
      <span className="sr-only">{label}</span>
    </div>
  );
}
