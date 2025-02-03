import { ReactNode, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useFloating, useTransitionStyles } from '@floating-ui/react';
import clsx from 'clsx';

import observer from './observer';
import type { ToastConfig } from './types';

interface ToastContainerProps extends Pick<ToastConfig, 'id' | 'duration' | 'className' | 'type'> {
  index: number;
  children: ReactNode;
  inverted?: boolean;
  timeout?: number;
  max?: number;
}

export default function ToastContainer({
  id, type, index, duration, className, children, inverted, timeout = 250, max = 3,
}: ToastContainerProps) {
  const isPrevMountedRef = useRef(false);
  const [open, setOpen] = useState(false);

  const { context, refs } = useFloating({ open, onOpenChange: setOpen, nodeId: id });
  const { isMounted, styles } = useTransitionStyles(context, {
    duration: timeout,
    initial: { opacity: 0, transform: `translateY(${inverted ? '' : '-'}50%)` },
  });

  useLayoutEffect(() => {
    setOpen(index <= max);
  }, [index, max]);

  useEffect(() => {
    if (isPrevMountedRef.current === isMounted) return;
    if (!isMounted) {
      observer.remove(id);
    }
    isPrevMountedRef.current = isMounted;
  }, [isMounted, id]);

  useEffect(() => {
    if (!duration) return;
    const timeout = window.setTimeout(() => setOpen(false), duration);
    return () => window.clearTimeout(timeout);
  }, [duration, id]);

  const handleClose = useCallback(() => {
    if (type === 'loading') return;
    setOpen(false);
  }, [type]);

  const name = useMemo(() => clsx(
    'relative flex w-fit transition-transform ease-in-out cursor-pointer',
    className,
  ), [className]);

  if (!isMounted) return null;
  return (
    <li
      ref={refs.setFloating}
      role="log"
      className={name}
      style={styles}
      onClick={handleClose}
    >
      {children}
    </li>
  );
}
