import { type HTMLAttributes, type ReactNode, useMemo } from 'react';

import Label from './FormLabel';
import { cn } from '../../utils/merge';
import Base from '../../elements/Base';

export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
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
  render: (error: boolean) => ReactNode;
  required?: boolean;
}

export default function Field({
  label, render, required, htmlFor, error, help, helpBefore, innerClass, ...rest
}: Props) {
  const labelName = useMemo(() => cn(
    'font-medium',
    required ? 'after:content-["*"] after:text-danger after:text-sm after:pl-0.5' : '',
  ), [required]);
  return (
    <Base classList="flex flex-col space-y-2" {...rest}>
      {label ? <Label className={labelName} htmlFor={htmlFor}>{label}</Label> : null}
      {help && helpBefore ? <p className="text-xs text-muted pb-2">{help}</p> : null}
      <div className={innerClass}>{render(!!error)}</div>
      {help && !helpBefore && !error ? <p className="text-xs text-muted">{help}</p> : null}
      {error ? <p className="text-xs text-danger">{error}</p> : null}
    </Base>
  );
}
