import React, { useState, useCallback, useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { useFloating, useTransitionStyles } from '@floating-ui/react';

import type { ToastItemProps } from './types';

export default function ToastItem({
  className, message, duration = 5000, clear, id, clearOnClick,
}: ToastItemProps) {
  const clearRef = useRef(clear);
  const isPrevMountedRef = useRef(false);

  const [open, setOpen] = useState(false);
  const { context, refs } = useFloating({
    open,
    onOpenChange: setOpen,
    nodeId: id,
  });

  const { isMounted, styles } = useTransitionStyles(context, {
    duration: 250,
    initial: {
      opacity: 0,
      transform: 'scale(0.8)',
    },
  });

  useEffect(() => setOpen(true), [id]);

  useEffect(() => {
    if (isPrevMountedRef.current === isMounted) return;
    if (!isMounted) {
      clearRef.current?.(id);
    }
    isPrevMountedRef.current = isMounted;
  }, [isMounted, id]);

  useEffect(() => {
    if (!duration) return;
    const timeout = setTimeout(() => setOpen(false), duration);
    return () => clearTimeout(timeout);
  }, [duration]);

  const handleClickToast = useCallback(() => {
    if (!clearOnClick) return;
    setOpen(false);
  }, [clearOnClick]);

  clearRef.current = clear;

  if (!isMounted) return null;
  return (
    <Item
      ref={refs.setFloating}
      role="status"
      data-testid="vs-toast-item"
      className={className}
      style={styles}
      onClick={handleClickToast}
    >
      {message}
    </Item>
  );
}

const Item = styled.li`
  position: relative;
  display: flex;
  width: fit-content;
  padding: 0.375em 0.75em;
  max-width: 100%;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
`;
