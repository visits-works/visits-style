import { type CSSProperties, useMemo, useState, startTransition, useRef, createElement } from 'react';
import clsx from 'clsx';

import useIsomorphicLayoutEffect from 'hooks/useIsomorphicLayoutEffect';

import ToastItem from './ToastItem';
import ToastFloat from './ToastFloat';
import type { ToasterProps } from './types';

import Portal from '../Portal';
import observer from './observer';

export default function Toast({
  className, margin = 16, position = 'top-left', max, ListItem = ToastItem,
}: ToasterProps) {
  const style = useMemo<CSSProperties>(() => {
    const base = { position: 'fixed' } as CSSProperties;
    if (position.indexOf('top') > -1) {
      base.top = margin;
    } else if (position.indexOf('bottom') > -1) {
      base.bottom = margin;
    }

    if (position.indexOf('left') > -1) {
      base.left = margin;
      base.alignItems = 'flex-start';
    } else if (position.indexOf('right') > -1) {
      base.right = margin;
      base.alignItems = 'flex-end';
    } else {
      base.left = '50%';
      base.alignItems = 'center';
      base.transform = 'translateX(-50%)';
    }
    return base;
  }, [margin, position]);

  const name = useMemo(() => clsx(
    'flex flex-col z-40 overflow-hidden',
    className,
  ), [className]);

  const isInvertedOrder = useMemo(() => position?.startsWith('bottom') || false, [position]);

  const data = useRef(new Map());
  const [order, setOrder] = useState<string[]>([]);
  const update = useState(0)[1];

  useIsomorphicLayoutEffect(() => observer.subscribe((payload) => {
    startTransition(() => {
      if (payload.type === 'add') {
        data.current.set(payload.id, payload.config);
        setOrder((prev) => [...prev, payload.id]);
      } else if (payload.type === 'remove') {
        const isDeleted = data.current.delete(payload.id);
        if (!isDeleted) return;
        setOrder((prev) => {
          const next = new Set(prev);
          if (!next.has(payload.id)) return prev;
          next.delete(payload.id);
          return Array.from(next);
        });
      } else if (payload.type === 'update') {
        const d = data.current.get(payload.id);
        if (!d) return;
        data.current.set(payload.id, { ...d, ...payload.config });
        update((prev) => prev + 1);
      }
    });
  }), []);

  const size = order.length;

  return (
    <Portal>
      <ol className={name} style={style} aria-live="polite">
        {order.map((id, i) => {
          const item = data.current.get(id);
          if (!item) return null;
          const { className: innerClass, duration, ...props } = item;
          return (
            <ToastFloat
              key={id}
              id={id}
              index={size - i}
              className={innerClass}
              duration={duration}
              inverted={isInvertedOrder}
              max={max}
            >
              {createElement(ListItem, props)}
            </ToastFloat>
          );
        })}
      </ol>
    </Portal>
  );
}
