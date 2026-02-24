import type { ButtonHTMLAttributes, Ref } from 'react';

import Base from '../../elements/Base';

export interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'onChange' | 'type' | 'role'> {
  ref?: Ref<HTMLInputElement>;
  error?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function Switch({
  checked, onChange, value, id, name, error, ref, ...rest
}: Props) {
  const handleChange = () => {
    if (rest.disabled) return;
    onChange?.(!checked);
  };
  return (
    <Base
      as="button"
      type="button"
      role="switch"
      id={id || name}
      classList={[
        'inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
        'w-11',
        checked ? 'bg-primary disabled:bg-text' : 'bg-input',
      ]}
      onClick={handleChange}
      aria-checked={checked}
      aria-invalid={error}
      {...rest}
    >
      <span
        className="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform"
        style={{ transform: checked ? 'translateX(100%)' : '' }}
      />
      <input
        ref={ref}
        type="checkbox"
        aria-hidden="true"
        name={name}
        checked={checked}
        value={value}
        onChange={handleChange}
        disabled={rest.disabled}
        style={{ position: 'absolute', pointerEvents: 'none', top: 0, left: 0, width: 1, height: 1, opacity: 0 }}
      />
    </Base>
  );
}
