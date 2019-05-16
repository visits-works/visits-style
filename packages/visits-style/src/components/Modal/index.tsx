import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import Box from '../../elements/Box';
import { ColorType, ColSizeType } from '../../types';

// const ESC_KEY = 27;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 9997;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${({ shadowColor }) => shadowColor || 'transparent'};

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
`;

interface Props extends HTMLAttributes<HTMLDivElement> {
  /** ヘッダーのタイトル文言 */
  title?: any;
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
  /** モーダル外に表示するElements */
  external?: any;
}

export default function Modal({
  show, title, children, footer,
  color, shadowColor, closeModal, external,
  className, closeOnOverlay,
  ...rest
}: Props) {
  if (!show) return null;

  return (
    <Wrapper
      role="dialog"
      aria-modal="true"
      shadowColor={shadowColor}
      className={className}
      onClick={closeOnOverlay ? closeModal : undefined}
    >
      <Box color={color} {...rest}>
        {title && title}
        {children}
        {footer && footer}
      </Box>
      {external}
    </Wrapper>
  );
}
Modal.defaultProps = {
  shadowColor: 'rgba(10,10,10,0.86)',
  color: 'white',
};

// export default class Modal extends PureComponent<Props> {
//   static defaultProps = {
//     show: false,
//     color: 'white',
//     size: 6,
//     shadowColor: 'rgba(10,10,10,.86)',
//   };

//   componentWillUnmount() {
//     if (this.element) {
//       document.body.removeChild(this.element);
//     }
//   }

//   onKeyDown = (e: any) => {
//     if (this.props.closeOnEsc && e.keyCode === ESC_KEY && this.props.closeModal) {
//       this.props.closeModal();
//     }
//   }

//   onClickOverlay = () => {
//     if (this.props.closeOnOverlay && this.props.closeModal) {
//       this.props.closeModal();
//     }
//   }

//   element?: HTMLDivElement;
//   shouldClose: boolean | null = null;

//   render(): React.ReactPortal | null {
//     if (typeof document !== "undefined" && !this.element) {
//       this.element = document.createElement('div');
//       document.body.appendChild(this.element);
//     }

//     if (this.element) {
//       const {
//         show, size, title, children, footer, color, onClick, ...rest
//       } = this.props;

//       return createPortal((
//         <CSSTransition
//           classNames="fade"
//           timeout={200}
//           in={show}
//           unmountOnExit
//         >
//           <Wrapper role="document" {...rest}>
//             <Col className="v-modal-body" size={size} auto role="dialog">
//               <Box color={color}>
//                 {title ? title : null}
//                 {children}
//                 {footer ? footer : null}
//               </Box>
//             </Col>
//             {this.props.external}
//             <div className="v-modal-shadow" onClick={this.onClickOverlay} />
//           </Wrapper>
//         </CSSTransition>
//       ), this.element);
//     }
//     return null;
//   }
// }
