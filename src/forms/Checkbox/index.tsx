import { useMemo, type ButtonHTMLAttributes, type ReactNode } from 'react';
import clsx from 'clsx';

export interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'onChange' | 'type' | 'role'> {
  children?: ReactNode;
  checked?: boolean;
  indeterminate?: boolean;
  /** idが未指定の場合、nameが代わりに使われます */
  name?: string;
  onChange?: (checked: boolean) => void;
}

function Approved() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
      <path d="M11.5 18.5l-3.9-4L6 16l5.6 5.6 11.6-11.5-1.7-1.6z" fill="currentColor" />
    </svg>
  );
}

function Indeterminate() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
      <rect width="20" height="3" y="13.5" x="4.5" fill="currentColor" stroke="none" rx="2" />
    </svg>
  );
}

export default function Checkbox({ checked, indeterminate, className, id, name, onChange, ...rest }: Props) {
  const innerClass = useMemo(() => clsx(
    'inline-flex justify-center items-center border w-4.5 h-4.5 rounded',
    'cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
    checked || indeterminate ? (
      'bg-primary text-inverted disabled:text-text disabled:bg-input disabled:border-input'
    ) : 'border-input not-disabled:hover:border-input-fore',
    className,
  ), [checked, indeterminate, className]);

  const handleChange = () => {
    if (rest.disabled) return;
    onChange?.(!checked);
  };

  return (
    <button
      type="button"
      role="checkbox"
      id={id || name}
      className={innerClass}
      onClick={handleChange}
      aria-checked={checked}
      {...rest}
    >
      {checked ? <Approved /> : null}
      {indeterminate && !checked ? <Indeterminate /> : null}
    </button>
  );
}
