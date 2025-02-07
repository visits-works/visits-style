import { type HTMLAttributes, type ReactElement, useMemo, cloneElement, Children } from 'react';
import clsx from 'clsx';

import Label from './FormLabel';
import merge from '../../utils/merge';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  htmlFor?: string;
  error?: string;
  help?: string;
  innerClass?: string;
  /**
   * メッセージの表示する箇所を指定します
   * 未指定の場合、後に表示し、errorがあると、エラーの表示を優先して入れ替えます
  */
  helpBefore?: boolean;
  children: ReactElement | ReactElement[];
  required?: boolean;
}

export default function Field({
  label, children, required, htmlFor, error, help, helpBefore, className, innerClass, ...rest
}: Props) {
  const labelName = useMemo(() => clsx(
    'font-medium',
    required ? 'after:content-["*"] after:text-danger after:text-sm after:pl-0.5' : '',
  ), [required]);
  const wrapperName = useMemo(() => merge('flex flex-col space-y-2', className), [className]);

  return (
    <div className={wrapperName} {...rest}>
      {label ? <Label className={labelName} htmlFor={htmlFor}>{label}</Label> : null}
      {help && helpBefore ? <p className="text-xs text-muted pb-2">{help}</p> : null}
      <div className={innerClass}>{cloneChildren(children, !!error)}</div>
      {help && !helpBefore && !error ? <p className="text-xs text-muted">{help}</p> : null}
      {error ? <p className="text-xs text-danger">{error}</p> : null}
    </div>
  );
}

function cloneChildren(children: Props['children'], error: boolean) {
  const len = Children.count(children);
  if (!len) return null;
  if (len === 1) {
    // @ts-expect-error
    return cloneElement(children, { error });
  }
  const arr = Children.toArray(children);
  // @ts-expect-error
  arr[0] = cloneElement(arr[0], { error });
  return arr;
}
