import { type HTMLAttributes, useMemo } from 'react';
import clsx from 'clsx';

export default function ButtonGroup({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  const name = useMemo(() => clsx(
    'flex items-center justify-center gap-1',
    className,
  ), [className]);
  return <div role="group" className={name} {...rest} />
}
