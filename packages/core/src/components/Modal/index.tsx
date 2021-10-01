import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';
import useScrollFix from '../../hooks/useScrollFix';
import Box from '../../elements/Box';
import Portal from '../Portal';
import { ColorType } from '../../types';

// const ESC_KEY = 27;

const Shadow = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled(Shadow)`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9997;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.backdrop};
  padding: 0.85rem;
`;

const AnimatedBox = styled(Box)`
  width: auto;
  margin: auto;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  z-index: 100;

  will-change: transform, opacity;
  transition-property: transform, opacity;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 200ms;

  opacity: 0;
  transform: scale(0.8);

  &.entered {
    opacity: 1;
    transform: scale(1);
  }

  &.entering, &.exiting, &.exited {
    opacity: 0;
    transform: scale(0.8);
  }
`;

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
  onTransitionExited?: () => void;
}

export default function Modal({
  show, children, timeout = 200,
  color = 'background', closeModal, external,
  className, closeOnOverlay, closeOnEsc, onTransitionExited,
  ...rest
}: Props) {
  useScrollFix(show);
  return (
    <Portal>
      <Transition
        in={show}
        timeout={timeout!}
        onExited={onTransitionExited}
        unmountOnExit
        mountOnEnter
      >
        {(state) => (
          <Wrapper
            role="dialog"
            className={className}
          >
            <Shadow onClick={closeOnOverlay ? closeModal : undefined} data-testid="vs-modal-overlay" />
            <AnimatedBox className={state} color={color} borderless {...rest} role="document">
              {children}
            </AnimatedBox>
            {external}
          </Wrapper>
        )}
      </Transition>
    </Portal>
  );
}
