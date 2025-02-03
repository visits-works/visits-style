import { type HTMLAttributes, useMemo } from 'react';
import clsx from 'clsx';

import merge from '../../utils/merge';

export interface Props extends HTMLAttributes<HTMLInputElement> {
  error?: boolean;
  /** 基本スタイルを全部外し、完全にclassNameの定義によせます */
  unstyled?: boolean;
}

export default function InputField({ error, unstyled, className, ...rest }: Props) {
  const name = useMemo(() => (unstyled ? className : merge(clsx(
    'flex rounded-md border bg-background px-3 py-2 w-full [&_input]:placeholder:text-muted',
    '[&_input]:disabled:opacity-50 [&_input]:focus-visible:outline-none',
    error ? 'border-danger hover:border-danger-fore' : 'border-input',
  ), className)), [className, error, unstyled]);
  return <div className={name} {...rest} />;
}
