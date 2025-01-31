import { forwardRef, useMemo, type SelectHTMLAttributes } from 'react';
import clsx from 'clsx';

import merge from '../../utils/merge';
import IconArrowDown from '../../elements/Icons/ArrowDown';

export interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  placeholder?: string;
  error?: boolean;
  unstyled?: boolean;
}

const NativeSelect = forwardRef<HTMLSelectElement, Props>(({
  className, error, unstyled, placeholder, children, ...rest
}, ref) => {
  const styleName = useMemo(() => (unstyled ? className : merge(clsx(
    'flex items-center justify-between rounded-md border bg-background px-3 py-2 pr-8 w-full',
    'overflow-hidden cursor-pointer appearance-none overflow-ellipsis',
    'disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring',
    error ? 'border-danger hover:border-danger-fore' : 'border-input not-disabled:hover:border-input-fore',
  ), className)), [className, error, unstyled]);

  return (
    <div className="relative w-max">
      <select ref={ref} className={styleName} {...rest}>
        {placeholder ? <option value="" disabled selected>{placeholder}</option> : null}
        {children}
      </select>
      <IconArrowDown className="absolute top-4.5 right-3 text-muted" />
    </div>
  );
});
NativeSelect.displayName = 'NativeSelect';
export default NativeSelect;
