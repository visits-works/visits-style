import { useMemo, type ButtonHTMLAttributes, type ReactNode } from 'react';
import clsx from 'clsx';

export interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'onChange' | 'type' | 'role'> {
  children?: ReactNode;
  checked?: boolean;
  /** idが未指定の場合、nameが代わりに使われます */
  name?: string;
  onChange?: (checked: boolean) => void;
}

export default function Radio({ checked, className, id, name, onChange, value, ...rest }: Props) {
  const innerClass = useMemo(() => clsx(
    'relative inline-flex justify-center items-center border border-input w-4.5 h-4.5 rounded-full',
    'cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed not-disabled:hover:border-input-fore',
    checked ? '[&_i]:bg-primary disabled:[&_i]:bg-text disabled:border-input' : '',
    className,
  ), [className, checked]);

  const handleChange = () => {
    if (rest.disabled) return;
    onChange?.(!checked);
  };

  return (
    <button
      type="button"
      role="radio"
      id={id || name}
      className={innerClass}
      onClick={handleChange}
      aria-checked={checked}
      {...rest}
    >
      <i
        className="block w-2.5 h-2.5 rounded-full transition-transform"
        style={{ transform: checked ? '' : 'scale(0.8)', opacity: checked ? 1 : 0 }}
      />
      <input
        type="radio"
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
