import { type LabelHTMLAttributes, useMemo } from 'react';
import clsx from 'clsx';

export default function FormLabel({ className, ...rest }: LabelHTMLAttributes<HTMLLabelElement>) {
  const name = useMemo(() => clsx('leading-none', className), [className]);
  return <label className={name} {...rest} />;
}
