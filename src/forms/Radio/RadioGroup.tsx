import type { ReactNode } from 'react';

import Radio from '.';

interface Props<T> {
  className?: string;
  name?: string;
  disabled?: boolean;
  value: T;
  options: Array<{ id: NonNullable<T>; label: ReactNode; }>;
  onChange: (value: T) => void;
}

export default function RadioGroup<T = unknown>({ name, className, value, options, onChange, disabled }: Props<T>) {
  return (
    <div role="radiogroup" className={className}>
      {options.map((node) => {
        const id = `radio_${name || 'unknown'}_${node.id}`;
        return (
          <div className="flex items-center space-x-2" key={id}>
            <Radio
              id={id}
              checked={node.id === value}
              onChange={() => onChange(node.id)}
              disabled={disabled}
            />
            <label htmlFor={id}>{node.label}</label>
          </div>
        );
      })}
    </div>
  );
}
