import clsx from 'clsx';
import { type ButtonHTMLAttributes, forwardRef, useMemo } from 'react';
import merge from 'utils/merge';

export interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'onChange' | 'type' | 'role'> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Switch = forwardRef<HTMLInputElement, Props>(({
  className, checked, onChange, value, id, name, ...rest
}, ref) => {
  const buttonName = useMemo(() => merge(clsx(
    'inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
    'w-11',
    checked ? 'bg-primary' : 'bg-input',
  ), className), [className, checked]);

  const pointerName = useMemo(() => merge(
    'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform',
    className,
  ), [className, checked]);

  const handleChange = () => {
    if (rest.disabled) return;
    onChange?.(!checked);
  };
  return (
    <button
      type="button"
      role="switch"
      id={id || name}
      className={buttonName}
      onClick={handleChange}
      aria-checked={checked}
      {...rest}
    >
      <span className={pointerName} style={{ transform: checked ? 'translateX(100%)' : '' }} />
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
    </button>
  );
});
Switch.displayName = 'Switch';

export default Switch;
