import { useMemo, createElement, type ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface InnerButtonProps {
  variant?: 'primary' | 'info' | 'warn' | 'link' | 'outline' | 'ghost' | 'danger';
  size?: 'icon' | 'none';
}

export type ButtonProps = InnerButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function varientButton({ variant, size }: InnerButtonProps) {
  return clsx(
    'inline-flex items-center justify-center whitespace-nowrap transition-colors rounded-md cursor-pointer',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
    'disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-auto',
    {
      'bg-primary text-inverted hover:bg-primary-fore': !variant || variant === 'primary',
      'bg-info text-inverted hover:bg-info-fore': variant === 'info',
      'bg-warn text-inverted hover:bg-warn-fore': variant === 'warn',
      'bg-danger text-inverted hover:bg-danger-fore': variant === 'danger',
      'hover:bg-accent': variant === 'ghost',
      'hover:underline': variant === 'link',
      'border border-input hover:bg-accent': variant === 'outline',
    },
    {
      'px-2 py-1': !size,
      'p-1.5': size === 'icon',
    },
  );
}

export default function Button({ size, variant, className, ...rest }: ButtonProps) {
  const buttonClass = useMemo(() => (
    clsx(varientButton({ size, variant }), className)
  ), [size, variant, className]);
  return createElement('button', { className: buttonClass, ...rest });
}
