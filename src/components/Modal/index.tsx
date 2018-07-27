import React from 'react';
import { createPortal } from 'react-dom';
import Transition from 'react-transition-group/Transition';
import anime from 'animejs';
import { ColSizeType, ColorType } from '../../styled';
import Card from '../Card';
import Col from '../Grid/Col';
import { dispatchAnimeDone, addAnimeListener } from '../../utils/anime';

const ESC_KEY = 27;

const wrapperStyle: React.CSSProperties = {
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
}

const colStyle: React.CSSProperties = {
  zIndex: 9999,
  padding: '1rem',
  margin: 'auto'
}

interface Props {
  /** ヘッダーのタイトル文言 */
  title?: string;
  /** 1~12のモーダルサイズ */
  size?: ColSizeType;
  /** 特定のdomで表示したい場合はそのidを指定してください */
  domId?: string;
  /** trueの場合、モーダルを表示します。 */
  show?: boolean;
  /** モーダルのbodyに入れる内容 */
  children?: React.ReactNode;
  /** モーダルのfooterに入れる内容 */
  footer?: React.ReactNode;
  /** モーダルの色 */
  color?: ColorType;
  /** モーダルを閉じる処理 */
  closeModal: () => void;
  /** オーバーレイのクリックでモーダルクローズ */
  closeOnOverlay?: boolean;
  /** escボタンでクローズ */
  closeOnEsc?: boolean;
}

function animeModalIn (modal: HTMLElement) {
  anime({
    targets: modal,
    scale: [0.8, 1],
    opacity: [0, 1],
    complete: () => dispatchAnimeDone(modal),
    easing: [0.645, 0.045, 0.355, 1],
    duration: 200,
  });
}

export default class Modal extends React.Component<Props> {
  static defaultProps = {
    domId: 'modal',
    show: false,
    color: 'white',
  }

  constructor(props: Props) {
    super(props);
    this.element = document.createElement('div');
    this.element.id = props.domId || 'modal';
    document.body.appendChild(this.element);
  }

  shouldComponentUpdate(props: Props) {
    return this.props.show !== props.show;
  }

  componentWillUnmount() {
    if (this.props.domId) {
      this.element.remove();
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
  };

  getModal = () => {
    const { show, size, title, children, footer, color } = this.props;
    if (!show) return;
    return (
      <div style={wrapperStyle} onClick={this.onClickOverlay} aria-modal="true">
        <Transition
          addEndListener={addAnimeListener}
          onEnter={animeModalIn}
          timeout={200}
          in={show}
          appear
          unmountOnExit
        >
          <Col
            size={size || 6}
            role="dialog"
            style={colStyle}
            onMouseUp={this.handleContentOnMouse}
            onMouseDown={this.handleContentOnMouse}
            auto
          >
            <Card title={title} footer={footer} color={color}>
              {children}
            </Card>
          </Col>
        </Transition>
      </div>
    );
  }

  element: HTMLDivElement;
  shouldClose: boolean | null = null;

  render() {
    return createPortal(
      this.getModal(),
      this.element,
    );
  }
}
