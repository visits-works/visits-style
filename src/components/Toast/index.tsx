import { type CSSProperties, useMemo, useState, startTransition } from 'react';
import clsx from 'clsx';

import useIsomorphicLayoutEffect from 'hooks/useIsomorphicLayoutEffect';

import ToastItem from './ToastItem';
import ToastFloat from './ToastFloat';
import type { ToastConfig, ToasterProps } from './types';

import Portal from '../Portal';
import observer from './observer';

export default function Toast({
  className, fixed, margin = 16, position = 'top-left', stack, max,
}: ToasterProps) {
  const style = useMemo<CSSProperties>(() => {
    const base = { position: fixed ? 'fixed' : 'absolute' } as CSSProperties;
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
  }, [fixed, margin, position]);

  const name = useMemo(() => clsx(
    'flex flex-col z-40 overflow-hidden',
    className,
  ), [className, stack]);

  const isInvertedOrder = useMemo(() => position?.startsWith('bottom') || false, [position]);

  const [toasts, setToast] = useState<ToastConfig[]>([]);
  useIsomorphicLayoutEffect(() => observer.subscribe(() => {
    startTransition(() => setToast(observer.getSnapShot()));
  }), []);

  const size = toasts.length;

  return (
    <Portal>
      <ol className={name} style={style} aria-live="polite">
        {toasts.map(({ id, className, duration, ...props }, i) => (
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
        ))}
      </ol>
    </Portal>
  );
}
