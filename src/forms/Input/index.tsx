import type { InputHTMLAttributes } from 'react';

import Base from '../../elements/Base';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  /** 基本スタイルを全部外し、完全にclassNameの定義によせます */
  customStyle?: boolean;
}

export default function Input({ type, error, customStyle, ...rest }: Props) {
  return (
    <Base<Omit<Props, 'error' | 'customStyle'>>
      as="input"
      type={type}
      classList={customStyle ? undefined : [
        'flex rounded-md border bg-background px-3 py-2 w-full placeholder:text-muted',
        'disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2',
        error ? 'border-danger hover:border-danger-fore focus-visible:ring-danger' : 'border-input not-disabled:hover:border-input-fore focus-visible:ring-ring',
        type === 'file' ? 'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground' : null,
      ]}
      {...rest}
    />
  );
}
