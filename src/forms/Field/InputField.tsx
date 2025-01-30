import { ReactNode, useMemo, type InputHTMLAttributes } from 'react';
import clsx from 'clsx';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  error?: string;
}

export function InputField({ className, ...rest }: InputFieldProps) {
  const name = useMemo(() => clsx(
    'flex rounded-md border border-input bg-background px-3 py-2 w-full',
    className,
  ), [className]);
  return (
    <div className={name}>
      <input {...rest} />
    </div>
  );
}
