import type { HTMLAttributes } from 'react';

import Base from '../../elements/Base';

export interface Props extends HTMLAttributes<HTMLInputElement> {
  error?: boolean;
  /** 基本スタイルを全部外し、classNameの定義のみ使います */
  override?: boolean;
}

export default function InputField({ error, ...rest }: Props) {
  return (
    <Base
      as="fieldset"
      classList={[
        'flex rounded-md border bg-background px-3 py-2 w-full [&_input]:placeholder:text-muted',
        '[&_input]:disabled:opacity-50 [&_input]:focus-visible:outline-none',
        error ? 'border-danger hover:border-danger-fore' : 'border-input',
      ]}
      {...rest}
    />
  );
}
