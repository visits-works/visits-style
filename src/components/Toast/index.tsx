import { type CSSProperties, useMemo, useState, startTransition, useRef } from 'react';
import clsx from 'clsx';

import useIsomorphicLayoutEffect from 'hooks/useIsomorphicLayoutEffect';

import ToastItem from './ToastItem';
import ToastFloat from './ToastFloat';
import type { ToasterProps } from './types';

import Portal from '../Portal';
import observer from './observer';

export default function Toast({
  className, margin = 16, position = 'top-left', stack, max,
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
  ), [className, stack]);

  const isInvertedOrder = useMemo(() => position?.startsWith('bottom') || false, [position]);

  const data = useRef(new Map());
  const [order, setOrder] = useState<string[]>([]);
  const [_, update] = useState(0);

  useIsomorphicLayoutEffect(() => observer.subscribe((payload) => {
    startTransition(() => {
      if (payload.type === 'add') {
        data.current.set(payload.id, payload.config);
        setOrder((prev) => [...prev, payload.id]);
      } else if (payload.type === 'remove') {
        data.current.delete(payload.id);
        setOrder((prev) => {
          const idx = prev.indexOf(payload.id);
          if (idx === -1) return prev;
          const next = [...prev];
          next.splice(idx, 1);
          return next;
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
          const { className, duration, ...props } = item;
          return (
            <ToastFloat
              key={id}
              id={id}
              index={size - i}
              className={className}
              duration={duration}
              inverted={isInvertedOrder}
              max={max}
            >
              <ToastItem id={id} {...props} />
            </ToastFloat>
          );
        })}
      </ol>
    </Portal>
  );
}
