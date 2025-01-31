import { HTMLAttributes } from 'react';

export default function Placeholder({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <span className="inline-block h-4 animate-pulse rounded" {...props} />;
}
