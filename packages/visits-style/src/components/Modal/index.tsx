import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';
import Box from '../../elements/Box';
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

  &.entering, &.entered {
    opacity: 1;
    transform: scale(1);
  }

  &.exiting, &.exited {
    opacity: 0;
    transform: scale(0.8);
  }
`;

interface Props extends HTMLAttributes<HTMLDivElement> {
  /** trueの場合、モーダルを表示します。 */
  show?: boolean;
  /** モーダルのbodyに入れる内容 */
  children?: any;
  /** モーダルのbackground色 */
  color?: ColorType;
  /** モーダルを閉じる処理 */
  closeModal: () => void;
  /** オーバーレイのクリックでモーダルクローズ */
  closeOnOverlay?: boolean;
  /** escボタンでクローズ */
  closeOnEsc?: boolean;
  /** モーダルの表示・非表示のアニメーション速度 */
  timeout?: number;
  /** モーダル外に表示するElements */
  external?: any;
}

export default function Modal({
  show, children, timeout = 200,
  color = 'white', closeModal, external,
  className, closeOnOverlay, closeOnEsc,
  ...rest
}: Props) {
  return (
    <Transition
      in={show}
      timeout={timeout!}
      unmountOnExit
      mountOnEnter
    >
      {state => (
        <Wrapper
          role="dialog"
          aria-modal="true"
          className={className}
        >
          <Shadow onClick={closeOnOverlay ? closeModal : undefined} />
          <AnimatedBox className={state} color={color} borderless {...rest} role="document">
            {children}
          </AnimatedBox>
          {external}
        </Wrapper>
      )}
    </Transition>
  );
}
