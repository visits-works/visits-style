import React, { PureComponent, CSSProperties, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import CSSTransition from 'react-transition-group/CSSTransition';
import styled from '../../styled';
import Box from '../Box';
import Col from '../Grid/Col';
import { ColorType, ColSizeType } from '../../types';

const ESC_KEY = 27;

const wrapperStyle: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  zIndex: 9997,
  overflowY: 'scroll',
  backgroundColor: 'rgba(30, 30, 30, 0.9)',
};

const Wrapper = styled.div`

  & > ${Col} {
    transition-property: transform, opacity;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-duration: 200ms;
  }

  &.fade-enter > ${Col} {
    opacity: 0.01;
    transform: scale(0.8);
  }
  &.fade-enter-active > ${Col} {
    opacity: 1;
    transform: scale(1);
  }
  &.fade-exit > ${Col} {
    opacity: 1;
    transform: scale(1);
  }
  &.fade-exit-active > ${Col} {
    opacity: 0.01;
    transform: scale(0.8);
  }
`;

const colStyle: CSSProperties = {
  zIndex: 9999,
  padding: '1rem',
  margin: 'auto',
};

interface Props {
  /** ヘッダーのタイトル文言 */
  title?: any;
  /** 1~12のモーダルサイズ */
  size?: ColSizeType;
  /** 特定のdomで表示したい場合はそのidを指定してください */
  domId?: string;
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
  style?: any;
}

export default class Modal extends PureComponent<Props> {
  static defaultProps = {
    domId: 'modal',
    show: false,
    color: 'white',
  };

  constructor(props: Props) {
    super(props);
    if(typeof document !== "undefined") {
      this.element = document.createElement('div');
      this.element.id = props.domId || 'modal';
      document.body.appendChild(this.element);
    }
  }

  componentWillUnmount() {
    if (this.props.domId && this.element) {
      document.body.removeChild(this.element);
    }
  }

  onKeyDown = (e: any) => {
    if (this.props.closeOnEsc && e.keyCode === ESC_KEY && this.props.closeModal) {
      this.props.closeModal();
    }
  }

  onClickOverlay = () => {
    if (this.shouldClose === null) {
      this.shouldClose = true;
    }

    if (this.shouldClose && this.props.closeOnOverlay && this.props.closeModal) {
      this.props.closeModal();
    }

    this.shouldClose = null;
  }

  handleContentOnMouse = () => {
    this.shouldClose = false;
  }

  getModal = () => {
    const { show, size, title, children, footer, color, style } = this.props;
    return (
      <CSSTransition
        classNames="fade"
        timeout={200}
        in={show}
        unmountOnExit
      >
        <Wrapper style={wrapperStyle} onClick={this.onClickOverlay} aria-modal="true">
          <Col
            size={size || 6}
            role="dialog"
            style={colStyle}
            onMouseUp={this.handleContentOnMouse}
            onMouseDown={this.handleContentOnMouse}
            auto
          >
            <Box color={color}>
              {title && (<header>{title}</header>)}
              <main style={style}>{children}</main>
              {footer && (<footer>{footer}</footer>)}
            </Box>
          </Col>
        </Wrapper>
      </CSSTransition>
    );
  }

  // @ts-ignore
  element: HTMLDivElement;
  shouldClose: boolean | null = null;

  render() {
    if(typeof document !== "undefined") {
      return createPortal(
        this.getModal(),
        this.element,
      );
    }
    return null;
  }
}
