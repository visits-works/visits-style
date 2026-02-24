import type { ButtonHTMLAttributes, ReactNode } from 'react';

import Base from '../../elements/Base';

export interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'onChange' | 'type' | 'role'> {
  error?: boolean;
  children?: ReactNode;
  checked?: boolean;
  /** idが未指定の場合、nameが代わりに使われます */
  name?: string;
  onChange?: (checked: boolean) => void;
}

export default function Radio({ checked, className, id, name, onChange, value, error, ...rest }: Props) {
  const handleChange = () => {
    if (rest.disabled) return;
    onChange?.(!checked);
  };

  return (
    <Base<ButtonHTMLAttributes<HTMLButtonElement>>
      as="button"
      type="button"
      role="radio"
      id={id || name}
      classList={[
        'relative inline-flex justify-center items-center border w-4.5 h-4.5 rounded-full',
        'cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed not-disabled:hover:border-input-fore',
        error ? 'border-danger' : 'border-input',
        checked ? '[&_i]:bg-primary disabled:[&_i]:bg-text disabled:border-input' : '',
      ]}
      className={className}
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
    </Base>
  );
}
