import type { Ref, TextareaHTMLAttributes } from 'react';

import Base from '../../elements/Base';

export interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  ref?: Ref<HTMLTextAreaElement>;
  error?: boolean;
  /** 基本スタイルを全部外し、classNameの定義のみ使います */
  override?: boolean;
}

export default function Textarea({ error, ...rest }: Props) {
  return (
    <Base<TextareaHTMLAttributes<HTMLTextAreaElement>>
      as="textarea"
      classList={[
        'flex rounded-md border bg-background px-3 py-2 w-full',
        'disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring',
        error ? 'border-danger hover:border-danger-fore' : 'border-input not-disabled:hover:border-input-fore',
      ]}
      {...rest}
    />
  );
}
