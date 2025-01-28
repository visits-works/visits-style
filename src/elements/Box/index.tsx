import { HTMLAttributes } from 'react';

import type { ColorType } from '../../types';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** 色指定 */
  color?: ColorType;
  /** borderを非表示する */
  borderless?: boolean;
}

export default function Box({ className, color, borderless, ...props }: Props) {
  return <div className="container relative flex flex-col rounded-md break-words" {...props} />;
}
