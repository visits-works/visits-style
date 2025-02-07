import { type HTMLAttributes, useMemo } from 'react';
import clsx from 'clsx';

export default function ButtonGroup({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  const name = useMemo(() => clsx(
    'flex items-center justify-center',
    '[&_button]:rounded-none [&_:first-child]:rounded-bl [&_:first-child]:rounded-tl [&_:last-child]:rounded-br [&_:last-child]:rounded-tr',
    '[&_:first-child]:border-r-0 [&_:last-child]:border-l-0',
    className,
  ), [className]);
  return <div role="group" className={name} {...rest} />;
}
