import { createElement, useMemo, type ElementType, type ComponentPropsWithRef, type HTMLAttributes } from 'react';

import { merge, cn, type ClassValue } from 'utils/merge';

export type { HTMLAttributes, ButtonHTMLAttributes, SVGAttributes } from 'react';

export interface BaseProps {
  as?: ElementType;
  classList?: ClassValue | ClassValue[];
  /** 基本スタイルを全部外し、classNameの定義のみ使います */
  override?: boolean;
}

export default function Base<T extends HTMLAttributes<HTMLElement>>({
  as, classList = [], className, override, ...props
}: T & BaseProps) {
  const name = useMemo(() => {
    if (override) return className;
    return merge(cn(classList), className);
  }, [classList, className, override]);

  return createElement(as || 'div', { className: name, ...props });
}

export function element<T extends ElementType>(tag: T, classList: ClassValue | ClassValue[]) {
  const Component = ({ className, ...props }: ComponentPropsWithRef<T>) => {
    const names = useMemo(() => merge(cn(classList), className), [className]);
    return createElement(tag, { className: names, ...props });
  };
  Component.displayName = `Styled${typeof tag === 'string' ? tag : 'Component'}`;
  return Component;
}
