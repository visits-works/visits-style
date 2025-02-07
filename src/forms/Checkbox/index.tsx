import { useMemo, type ButtonHTMLAttributes, type ReactNode } from 'react';
import clsx from 'clsx';

import IconCheck from '../../elements/Icons/Check';
import merge from '../../utils/merge';

export interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'onChange' | 'type' | 'role'> {
  children?: ReactNode;
  checked?: boolean;
  indeterminate?: boolean;
  /** idが未指定の場合、nameが代わりに使われます */
  name?: string;
  onChange?: (checked: boolean) => void;
}

function Indeterminate() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
      <rect width="20" height="3" y="13.5" x="4.5" fill="currentColor" stroke="none" rx="2" />
    </svg>
  );
}

export default function Checkbox({
  checked, indeterminate, className, id, name, onChange, value, ...rest
}: Props) {
  const innerClass = useMemo(() => merge(clsx(
    'inline-flex justify-center items-center border w-4.5 h-4.5 rounded',
    'cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
    checked || indeterminate ? (
      'bg-primary text-inverted disabled:text-text disabled:bg-input disabled:border-input'
    ) : 'border-input not-disabled:hover:border-input-fore',
  ), className), [checked, indeterminate, className]);

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
      {checked ? <IconCheck /> : null}
      {indeterminate && !checked ? <Indeterminate /> : null}
      <input
        type="checkbox"
        aria-hidden="true"
        name={name}
        checked={checked}
        value={value}
        onChange={handleChange}
        disabled={rest.disabled}
        style={{ position: 'absolute', pointerEvents: 'none', top: 0, left: 0, width: 1, height: 1, opacity: 0 }}
      />
    </button>
  );
}
