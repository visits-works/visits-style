import { useEffect, useRef, useMemo, useCallback } from 'react';
import type { HTMLAttributes, ReactNode, Ref } from 'react';
import {
  useFloating, useDismiss, useInteractions, useTransitionStyles, FloatingOverlay, useId,
} from '@floating-ui/react';

import { cn } from 'utils/merge';

import Portal from '../Portal';
import stopPropagation from '../../utils/stopPropagation';
import BaseElement from '../../elements/Base';

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

const defaultTimeout = { open: 150, close: 75 };

export default function Dialog({
  open, children, timeout = defaultTimeout, padding = '0.85rem', verticalAlign = 'center',
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

  const overlayClass = useMemo(() => cn('grid bg-backdrop z-40 justify-items-center transition ease-in-out', {
    'place-items-start items-start': verticalAlign === 'start',
    'place-items-end': verticalAlign === 'end',
    'place-items-center': verticalAlign === 'center' || !verticalAlign,
  }), [verticalAlign]);

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
          className={className}
          role="dialog"
          size={size}
          onClick={stopPropagation}
          {...getFloatingProps({ ...rest, style: styles })}
        >
          {children}
        </DialogContent>
      </FloatingOverlay>
    </Portal>
  );
}

export { default as DialogHeader } from './DialogHeader';

interface DialogContentProps extends HTMLAttributes<HTMLElement> {
  ref?: Ref<HTMLElement>;
  size?: Props['size'];
}

export function DialogContent({ size, ...rest }: DialogContentProps) {
  return (
    <BaseElement
      classList={[
        size ? 'flex flex-col bg-background shadow-lg p-5 rounded' : null,
        {
          'w-full max-w-dialog-sm': size === 'small',
          'w-full max-w-dialog-md': size === 'medium',
          'w-full max-w-dialog-lg': size === 'large',
        },
      ]}
      {...rest}
    />
  );
}

interface DialogFooterProps extends HTMLAttributes<HTMLElement> {
  /** @default 'right' */
  align?: 'center' | 'left' | 'right';
}
export function DialogFooter({ align, ...rest }: DialogFooterProps) {
  return (
    <BaseElement
      as="footer"
      classList={[
        'flex flex-col-reverse space-y-2 mt-4 sm:space-y-0 sm:flex-row sm:space-x-2',
        {
          'sm:justify-end': !align || align === 'right',
          'sm:justify-start': align === 'left',
          'sm:justify-center': align === 'center',
        },
      ]}
      {...rest}
    />
  );
}
