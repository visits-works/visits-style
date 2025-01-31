import { type HTMLAttributes, useMemo } from 'react';

import merge from 'utils/merge';

export default function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  const name = useMemo(() => merge(
    'inline-block animate-pulse rounded-md bg-accent', className,
  ), [className]);
  return <span className={name} {...props} />;
}
