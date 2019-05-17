import React, { HTMLAttributes, useEffect } from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';
import Box from '../../elements/Box';
import { ColorType } from '../../types';

// const ESC_KEY = 27;

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 9997;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.backdrop};
  padding: 0.85rem;
`;

const AnimatedBox = styled(Box)`
  width: auto;
  margin: auto;

  will-change: transform, opacity;
  transition-property: transform, opacity;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 200ms;

  &.entering {
    opacity: 0.01;
    transform: scale(0.8);
  }

  &.entered {
    opacity: 1;
    transform: scale(1);
  }

  &.exiting {
    opacity: 0.01;
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
  show, children, timeout,
  color, closeModal, external,
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
          onClick={closeOnOverlay ? closeModal : undefined}
        >
          <AnimatedBox className={state} color={color} {...rest} role="document">
            {children}
          </AnimatedBox>
          {external}
        </Wrapper>
      )}
    </Transition>
  );
}
Modal.defaultProps = {
  color: 'white',
  timeout: 200,
};
