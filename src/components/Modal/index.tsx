import React, { HTMLAttributes, useEffect, useRef, MouseEvent } from 'react';
import styled from 'styled-components';
import {
  useFloating,
  useDismiss,
  useInteractions,
  useTransitionStyles,
  FloatingFocusManager,
  FloatingOverlay,
} from '@floating-ui/react';

import Box from '../../elements/Box';
import Portal from '../Portal';
import { ColorType } from '../../types';

interface Props extends HTMLAttributes<HTMLDivElement> {
  /** trueの場合、モーダルを表示します。 */
  show?: boolean;
  /** モーダルのbodyに入れる内容 */
  children?: React.ReactNode;
  /**
   * モーダルのbackground色
   * @default 'background'
   */
  color?: ColorType;
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
  /** モーダル外に表示するElements */
  external?: React.ReactNode;
  /** モーダルのtransition exitが完了した時に発火されるcallback */
  onExited?: () => void;
}

export default function Modal({
  show, children, timeout = 200,
  color = 'background', closeModal, external,
  closeOnOverlay, closeOnEsc, onExited,
  ...rest
}: Props) {
  const exitRef = useRef(onExited);
  const isTransMountedRef = useRef(false);

  const { refs, context } = useFloating({ open: show, onOpenChange: closeModal });

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
        <Overlay lockScroll data-testid="vs-modal-overlay" onClick={handleOverlayClose}>
          <FloatingFocusManager context={context}>
            <Wrapper ref={refs.setFloating} role="dialog" style={{ ...styles }}>
              <Box role="document" color={color} {...getFloatingProps(rest)}>
                {children}
              </Box>
              {external}
            </Wrapper>
          </FloatingFocusManager>
        </Overlay>
      ) : null}
    </Portal>
  );
}

const Overlay = styled(FloatingOverlay)`  
  display: flex;
  display: grid;
  place-items: center;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.backdrop};
  padding: 0.85rem;
  z-index: 9997;
`;

const Wrapper = styled.div`
  will-change: transform, opacity;
  transform-origin: center top;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
`;
