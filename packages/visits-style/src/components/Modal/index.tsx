import React, { PureComponent, HTMLAttributes, Fragment } from 'react';
import { createPortal } from 'react-dom';
import CSSTransition from 'react-transition-group/CSSTransition';
import styled from 'styled-components';
import Box from '../Box';
import Col from '../Grid/Col';
import { ColorType, ColSizeType, CSSType } from '../../types';

const ESC_KEY = 27;

const Wrapper = styled.div<{ css?: CSSType, shadowColor?: string }>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 9997;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.75rem;

  .v-modal-body {
    z-index: 9999;
    margin: 0;
    will-change: transform, opacity;
    transition-property: transform, opacity;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-duration: 200ms;
  }

  &.fade-enter > .v-modal-body {
    opacity: 0.01;
    transform: scale(0.8);
  }
  &.fade-enter-active > .v-modal-body {
    opacity: 1;
    transform: scale(1);
  }
  &.fade-exit > .v-modal-body {
    opacity: 1;
    transform: scale(1);
  }
  &.fade-exit-active > .v-modal-body {
    opacity: 0.01;
    transform: scale(0.8);
  }

  .v-modal-shadow {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background-color: ${({ shadowColor }) => shadowColor || 'transparent'};
  }

  ${({ css }) => css || ''}
`;

interface Props extends HTMLAttributes<HTMLDivElement> {
  /** ヘッダーのタイトル文言 */
  title?: any;
  /** 1~12のモーダルサイズ */
  size?: ColSizeType;
  /** trueの場合、モーダルを表示します。 */
  show?: boolean;
  /** モーダルのbodyに入れる内容 */
  children?: any;
  /** モーダルのfooterに入れる内容 */
  footer?: any;
  /** モーダルの色 */
  color?: ColorType;
  /** モーダルを閉じる処理 */
  closeModal: () => void;
  /** オーバーレイのクリックでモーダルクローズ */
  closeOnOverlay?: boolean;
  /** escボタンでクローズ */
  closeOnEsc?: boolean;
  /** overlayの背景の設定 */
  shadowColor?: string;
  /** カスタムCSS定義 */
  css?: CSSType;
}

export default class Modal extends PureComponent<Props> {
  static defaultProps = {
    show: false,
    color: 'white',
    size: 6,
    shadowColor: 'rgba(10,10,10,.86)',
  };

  componentWillUnmount() {
    if (this.element) {
      document.body.removeChild(this.element);
    }
  }

  onKeyDown = (e: any) => {
    if (this.props.closeOnEsc && e.keyCode === ESC_KEY && this.props.closeModal) {
      this.props.closeModal();
    }
  }

  onClickOverlay = () => {
    if (this.props.closeOnOverlay && this.props.closeModal) {
      this.props.closeModal();
    }
  }

  element?: HTMLDivElement;
  shouldClose: boolean | null = null;

  render(): React.ReactPortal | null {
    if (typeof document !== "undefined" && !this.element) {
      this.element = document.createElement('div');
      document.body.appendChild(this.element);
    }

    if (this.element) {
      const {
        show, size, title, children, footer, color, onClick, ...rest
      } = this.props;

      return createPortal((
        <CSSTransition
          classNames="fade"
          timeout={200}
          in={show}
          unmountOnExit
        >
          <Wrapper role="document" {...rest}>
            <Col className="v-modal-body" size={size} auto role="dialog">
              <Box color={color}>
                {title ? title : null}
                {children}
                {footer ? footer : null}
              </Box>
            </Col>
            <div className="v-modal-shadow" onClick={this.onClickOverlay} />
          </Wrapper>
        </CSSTransition>
      ), this.element);
    }
    return null;
  }
}
