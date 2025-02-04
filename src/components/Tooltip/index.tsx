import { Children, cloneElement, useImperativeHandle, useState, forwardRef, useMemo } from 'react';
import type { ReactNode, ReactElement, RefObject, HTMLAttributes } from 'react';
import {
  useFloating, useInteractions, useHover, useClientPoint, useTransitionStyles,
  shift, offset as offsetUi, flip, useId, autoUpdate,
} from '@floating-ui/react';
import type { Placement, ReferenceElement } from '@floating-ui/core';
import clsx from 'clsx';

import Portal from '../Portal';

export interface TooltipRef {
  floating: RefObject<HTMLElement | null>;
  reference: RefObject<ReferenceElement | null>;
  open: () => void;
  close: () => void;
}

export interface TooltipProps {
  /** 吹き出しとして表示したい内容 */
  label: ReactNode;
  /** マウスオーバーの対象になるelement */
  children: ReactElement;
  /**
   * 表示される場所
   * @default 'bottom'
   */
  position?: Placement;

  /**
   * ツールチップが表示される間隔, 単位はpx
   * @default '{ x: 0, y: 6 }'
   */
  offset?: { x: number; y: number; };

  /**
   * ツールチップの表示・非表示のアニメーション速度
   * @default 150
   */
  timeout?: number;

  /** 吹き出し表示座標を対象のElementではなくマウスカーソルにする */
  clientPoint?: boolean;
  /** 吹き出しを出さない */
  disabled?: boolean;

  className?: string;
}

const Tooltip = forwardRef<TooltipRef, TooltipProps>(({
  children, position = 'bottom', label, className, timeout = 150,
  offset = { x: 0, y: 6 }, clientPoint = false, disabled,
}, ref) => {
  const [open, setOpen] = useState(false);
  const nodeId = useId();
  const { refs, floatingStyles, context } = useFloating({
    nodeId,
    open,
    placement: position,
    middleware: [
      shift(),
      flip(),
      offsetUi({ mainAxis: offset.y, crossAxis: offset.x }),
    ],
    whileElementsMounted: disabled ? undefined : autoUpdate,
    onOpenChange: setOpen,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, { enabled: !disabled }),
    useClientPoint(context, { enabled: clientPoint }),
  ]);

  const { isMounted, styles } = useTransitionStyles(context, {
    duration: timeout,
    initial: { opacity: 0, transform: 'scale(0.8)' },
  });

  useImperativeHandle(ref, () => ({
    floating: refs.floating,
    reference: refs.reference,
    open: () => setOpen(true),
    close: () => setOpen(false),
  }));

  const child = typeof children === 'string' ? <span>{children}</span> : children;

  return (
    <>
      {cloneElement(Children.only(child), {
        ref: refs.setReference,
        ...getReferenceProps(),
      })}
      <Portal disabled={disabled || !isMounted}>
        <div role="tooltip" ref={refs.setFloating} {...getFloatingProps({ style: floatingStyles })}>
          <TooltipContent className={className} style={styles}>
            {label}
          </TooltipContent>
        </div>
      </Portal>
    </>
  );
});
export default Tooltip;

interface TooltipContentProps extends HTMLAttributes<HTMLDivElement> {
  custom?: boolean;
}

export const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(({
  className, custom, ...rest
}, ref) => {
  const tooltipName = useMemo(() => clsx(
    'relative z-[9999] w-auto h-auto outline-none transition-transform ease-in-out whitespace-pre',
    custom ? null : 'border border-accent rounded shadow-md px-3 py-1 bg-background',
    className,
  ), [className, custom]);
  return <div ref={ref} className={tooltipName} {...rest} />;
});
