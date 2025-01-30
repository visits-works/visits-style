import { useMemo, forwardRef, type TextareaHTMLAttributes } from 'react';
import clsx from 'clsx';

export interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  custom?: boolean;
}

const Textarea = forwardRef<HTMLInputElement, Props>(({ className, error, custom, ...rest }, ref) => {
  const name = useMemo(() => clsx(
    'flex rounded-md border bg-background px-3 py-2 w-full',
    'disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring',
    error ? 'border-danger hover:border-danger-fore' : 'border-input not-disabled:hover:border-input-fore',
    className,
  ), [className, error]);
  return <textarea className={name} {...rest} />;
});
Textarea.displayName = 'Textarea';
export default Textarea;
