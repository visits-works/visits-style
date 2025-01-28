import React, { HTMLAttributes, useEffect, useRef, MouseEvent } from 'react';
import {
  useFloating,
  useDismiss,
  useInteractions,
  useTransitionStyles,
  FloatingOverlay,
  useId,
} from '@floating-ui/react';

import Box from '../../elements/Box';
import Portal from '../Portal';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** trueの場合、モーダルを表示します。 */
  show?: boolean;
  /** モーダルのbodyに入れる内容 */
  children?: React.ReactNode;
  /** モーダルを閉じる処理 */
  closeModal: () => void;
  /** オーバーレイのクリックでモーダルクローズ */
  closeOnOverlay?: boolean;
  /** escボタンでクローズ */
  closeOnEsc?: boolean;
  /**
   * モーダルの表示・非表示のアニメーション速度
   * @default 200
   */
  timeout?: number;
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

function stopPropagation(e?: React.MouseEvent<Element>) {
  if (!e) return;
  e.stopPropagation();
}

export default function Modal({
  show, children, timeout = 200, padding = '0.85rem', verticalAlign = 'center',
  closeModal, closeOnOverlay, closeOnEsc, onExited,
  ...rest
}: Props) {
  const exitRef = useRef(onExited);
  const isTransMountedRef = useRef(false);
  const id = useId();

  const { refs, context } = useFloating({ open: show, onOpenChange: closeModal, nodeId: id });

  const { getFloatingProps } = useInteractions([
    useDismiss(context, {
      enabled: closeOnEsc,
      outsidePress: false,
      escapeKey: closeOnEsc,
    }),
  ]);

  const { isMounted, styles } = useTransitionStyles(context, {
    duration: timeout,
    initial: {
      opacity: 0,
      transform: 'scale(0.8)',
    },
  });

  useEffect(() => {
    if (isTransMountedRef.current === isMounted) return;
    isTransMountedRef.current = isMounted;
    if (isMounted) return;

    exitRef.current?.();
  }, [isMounted]);

  const handleOverlayClose = (e: MouseEvent<HTMLDivElement>) => {
    if (!closeOnOverlay) return;
    closeModal?.();
  };

  exitRef.current = onExited;

  return (
    <Portal>
      {isMounted ? (
        <FloatingOverlay
          className="flex grid"
          data-testid="vs-modal-overlay"
          onClick={handleOverlayClose}
          style={{ padding }}
          lockScroll
        >
          <div
            className="transition ease-in-out"
            ref={refs.setFloating}
            role="dialog"
            {...getFloatingProps({ ...rest, style: styles, onClick: stopPropagation })}
          >
            {children}
          </div>
        </FloatingOverlay>
      ) : null}
    </Portal>
  );
}

export const ModalContent = Box;

// const Overlay = styled(FloatingOverlay)<{ $verticalAlign?: Props['verticalAlign'] }>`  
//   display: flex;
//   display: grid;
//   place-items: ${({ $verticalAlign }) => {
//     if ($verticalAlign === 'start') return 'flex-start';
//     if ($verticalAlign === 'end') return 'flex-end';
//     return 'center';
//   }};
//   align-items: ${({ $verticalAlign }) => {
//     if ($verticalAlign === 'start') return 'flex-start';
//     if ($verticalAlign === 'end') return 'flex-end';
//     return 'center';
//   }};
//   justify-content: center;
//   background: ${({ theme }) => theme.backdrop};
//   z-index: 9997;
// `;

// const Wrapper = styled.div`
//   will-change: transform, opacity;
//   transform-origin: center top;
//   transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
//   z-index: 9999;
// `;
