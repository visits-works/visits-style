import { createElement, useMemo, type HTMLAttributes } from 'react';

import { merge, cn, type ClassValue } from 'utils/merge';

export type { HTMLAttributes, ButtonHTMLAttributes, SVGAttributes } from 'react';

interface BaseProps {
  as?: string;
  classList?: ClassValue | ClassValue[];
}

export default function BaseElement<T extends HTMLAttributes<HTMLElement>>({
  as, classList = [], className, ...props
}: T & BaseProps) {
  const name = useMemo(() => {
    if (!Array.isArray(classList)) return merge(cn(classList), className);
    if (!classList.length) return className;
    return merge(cn(...classList), className);
  }, [classList, className]);
  return createElement(as || 'div', { className: name, ...props });
}
