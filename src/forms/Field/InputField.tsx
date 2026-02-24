import type { HTMLAttributes } from 'react';

import Base from '../../elements/Base';

export interface Props extends HTMLAttributes<HTMLInputElement> {
  error?: boolean;
  /** 基本スタイルを全部外し、完全にclassNameの定義によせます */
  customStyle?: boolean;
}

export default function InputField({ error, customStyle, ...rest }: Props) {
  return (
    <Base
      classList={customStyle ? undefined : [
        'flex rounded-md border bg-background px-3 py-2 w-full [&_input]:placeholder:text-muted',
        '[&_input]:disabled:opacity-50 [&_input]:focus-visible:outline-none',
        error ? 'border-danger hover:border-danger-fore' : 'border-input',
      ]}
      {...rest}
    />
  );
}
