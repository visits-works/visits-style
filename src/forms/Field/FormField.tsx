import { type HTMLAttributes, type ReactElement, useMemo, cloneElement } from 'react';

import Label from './FormLabel';
import merge from '../../utils/merge';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  htmlFor?: string;
  error?: string;
  help?: string;
  /**
   * メッセージの表示する箇所を指定します
   * 未指定の場合、後に表示し、errorがあると、エラーの表示を優先して入れ替えます
  */
  helpBefore?: boolean;
  children: ReactElement;
  required?: boolean;
}

export default function Field({
  label, children, required, htmlFor, error, help, helpBefore, className, ...rest
}: Props) {
  const labelName = useMemo(() => merge(
    'font-medium', required ? 'after:content-["*"] after:text-danger after:text-sm after:pl-0.5' : ''
  ), [required]);
  const wrapperName = useMemo(() => merge('flex flex-col space-y-2', className), [className]);
  return (
    <div className={wrapperName} {...rest}>
      {label ? <Label className={labelName} htmlFor={htmlFor}>{label}</Label> : null}
      {help && helpBefore ? <p className="text-xs text-placeholder pb-2">{help}</p> : null}
      {
        // @ts-expect-error
        cloneElement(children, { error: !!error })
      }
      {help && !helpBefore && !error ? <p className="text-xs text-placeholder">{help}</p> : null}
      {error ? <p className="text-xs text-danger">{error}</p> : null}
    </div>
  );
}
