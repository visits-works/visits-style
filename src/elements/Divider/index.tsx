import { type HTMLAttributes, useMemo } from 'react';
import clsx from 'clsx';

import merge from 'utils/merge';

export interface Props extends HTMLAttributes<HTMLElement> {
  /** @default 'horizontal' */
  orientation?: 'horizontal' | 'vertical';
}

export default function Divider({ className, orientation = 'horizontal', ...props }: Props) {
  const name = useMemo(() => merge(clsx(
    'border-0 p-0 shrink-0 bg-input',
    orientation === 'horizontal' ? 'h-[1px] w-full' : 'w-[1px] h-full',
  ), className), [className, orientation]);
  return <hr className={name} role="none" {...props} />;
}
