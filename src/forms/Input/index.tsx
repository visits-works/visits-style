import { useMemo, forwardRef, type InputHTMLAttributes } from 'react';
import clsx from 'clsx';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  /** 基本スタイルを全部外し、完全にclassNameの定義によせます */
  custom?: boolean;
}

const Input = forwardRef<HTMLInputElement, Props>(({ className, type, error, custom, ...rest }, ref) => {
  const name = useMemo(() => (custom ? className : clsx(
    'flex rounded-md border bg-background px-3 py-2 w-full',
    'disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring',
    error ? 'border-danger hover:border-danger-fore' : 'border-input not-disabled:hover:border-input-fore',
    type === 'file' ? 'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground' : null,
    className,
  )), [className, type, error, custom]);
  return <input ref={ref} type={type} className={name} {...rest} />;
});
Input.displayName = 'Input';
export default Input;
