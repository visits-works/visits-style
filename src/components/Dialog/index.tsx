import { useEffect, useRef, useMemo, forwardRef, useCallback } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { useFloating, useDismiss, useInteractions, useTransitionStyles, FloatingOverlay, useId } from '@floating-ui/react';
import clsx from 'clsx';

import merge from 'utils/merge';

import Portal from '../Portal';
import stopPropagation from '../../utils/stopPropagation';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** trueの場合、モーダルを表示します。 */
  open?: boolean;
  /** モーダルのbodyに入れる内容 */
  children?: ReactNode;
  /** オーバーレイのクリックでモーダルクローズ */
  closeOnOverlay?: boolean;
  /** escボタンでクローズ */
  closeOnEsc?: boolean;
  /**
   * モーダルの表示・非表示のアニメーション速度
   * @default 150
   */
  timeout?: number | { open: number; close: number; };
  /**
   * モーダルのデフォルトデザインを適用し、サイズを指定します。\
   * 未指定の場合は、スタイルを全部外した状態で表示されます
   * */
  size?: 'small' | 'medium' | 'large';
  /** モーダルのtransition exitが完了した時に発火されるcallback */
  onOpenChange?: (open: boolean) => void;
  /** モーダルのtransition exitが完了した時に発火されるcallback */
  onExited?: () => void;
  /**
   * モーダルの背景からのpaddingを指定します。
   * @default '0.85rem'
   */
  padding?: string;
  /**
   * モーダルの縦並びを設定します。
   * @default 'center'
   */
  verticalAlign?: 'start' | 'center' | 'end';
}

export default function Dialog({
  open, children, timeout = 150, padding = '0.85rem', verticalAlign = 'center',
  closeOnOverlay, closeOnEsc, onExited, className, onOpenChange, size,
  ...rest
}: Props) {
  const exitRef = useRef(onExited);
  const isTransMountedRef = useRef(false);
  const nodeId = useId();

  const { refs, context } = useFloating({ open, onOpenChange, nodeId });

  const { getFloatingProps } = useInteractions([
    useDismiss(context, {
      enabled: closeOnEsc,
      escapeKey: closeOnEsc,
      outsidePress: false,
    }),
  ]);

  const { isMounted, styles } = useTransitionStyles(context, {
    duration: timeout,
    initial: { opacity: 0, transform: 'scale(0.8)' },
  });

  useEffect(() => {
    if (isTransMountedRef.current === isMounted) return;
    isTransMountedRef.current = isMounted;
    if (isMounted) return;

    exitRef.current?.();
  }, [isMounted]);

  const handleOverlayClose = useCallback(() => {
    if (!closeOnOverlay) return;
    onOpenChange?.(false);
  }, [onOpenChange, closeOnOverlay]);

  exitRef.current = onExited;

  const overlayClass = useMemo(() => clsx('grid bg-backdrop z-40 justify-items-center', {
    'place-items-start items-start': verticalAlign === 'start',
    'place-items-end': verticalAlign === 'end',
    'place-items-center': verticalAlign === 'center' || !verticalAlign,
  }), [verticalAlign]);

  const dialogClass = useMemo(() => merge('transition ease-in-out', className), [className]);

  return (
    <Portal disabled={!isMounted}>
      <FloatingOverlay
        className={overlayClass}
        data-testid="vs-dialog-overlay"
        onClick={handleOverlayClose}
        style={{ padding, opacity: styles.opacity }}
        lockScroll
      >
        <DialogContent
          ref={refs.setFloating}
          className={dialogClass}
          role="dialog"
          size={size}
          {...getFloatingProps({ ...rest, style: styles, onClick: stopPropagation })}
        >
          {children}
        </DialogContent>
      </FloatingOverlay>
    </Portal>
  );
}

export { default as DialogHeader } from './DialogHeader';

interface DialogContentProps extends HTMLAttributes<HTMLElement> {
  size?: Props['size'];
}

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(({
  size, className, ...rest
}, ref) => {
  const dialogClass = useMemo(() => clsx(
    size ? 'flex flex-col bg-background shadow-lg p-5 rounded' : null,
    {
      'w-full max-w-sm': size === 'small',
      'w-full max-w-lg': size === 'medium',
      'w-full max-w-2xl': size === 'large',
    },
    className,
  ), [size, className]);
  return <div ref={ref} className={dialogClass} {...rest} />;
});
DialogContent.displayName = 'DialogContent';

interface DialogFooterProps extends HTMLAttributes<HTMLElement> {
  /** @default 'right' */
  align?: 'center' | 'left' | 'right';
}
export function DialogFooter({ className, align, ...rest }: DialogFooterProps) {
  const footerName = useMemo(() => clsx(
    'flex flex-col-reverse space-y-2 mt-4 sm:space-y-0 sm:flex-row sm:space-x-2',
    {
      'sm:justify-end': !align || align === 'right',
      'sm:justify-start': align === 'left',
      'sm:justify-center': align === 'center',
    },
    className,
  ), [className, align]);
  return <footer className={footerName} {...rest} />;
}
