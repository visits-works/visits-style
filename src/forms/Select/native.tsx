import type { ReactNode, Ref, SelectHTMLAttributes } from 'react';

import Base from '../../elements/Base';

export interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  ref?: Ref<HTMLSelectElement>;
  placeholder?: string;
  error?: boolean;
  /** 基本スタイルを全部外し、classNameの定義のみ使います */
  override?: boolean;
  arrowIcon?: ReactNode;
  wrapperStyle?: string;
}

export default function NativeSelect({
  error, placeholder, children, arrowIcon, wrapperStyle, ...rest
}: Props) {
  return (
    <Base classList="relative w-max" className={wrapperStyle}>
      <Base<SelectHTMLAttributes<HTMLSelectElement>>
        as="select"
        classList={[
          'flex items-center justify-between rounded-md border bg-background px-3 py-2 pr-8 w-full',
          'overflow-hidden cursor-pointer appearance-none text-ellipsis',
          'disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring',
          error ? 'border-danger hover:border-danger-fore' : 'border-input not-disabled:hover:border-input-fore',
        ]}
        {...rest}
      >
        {placeholder ? <option value="" disabled selected>{placeholder}</option> : null}
        {children}
      </Base>
      {arrowIcon}
    </Base>
  );
}
