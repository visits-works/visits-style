import React, { Component, PureComponent } from 'react';
import { createPortal } from 'react-dom';
import CSSTransition from 'react-transition-group/CSSTransition';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import styled from 'styled-components';

import Box from '../../elements/Box';
import { ColorType } from '../../types';

type PositionType = 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right';

interface ToastType {
  /** 認識ID */
  id: string;
  /** 表示する内容 */
  message?: React.ReactNode;
  /** 背景の色 */
  color?: ColorType;
  /** 表示される時間 nullの場合は自動で閉じられません */
  duration?: number | null;
}

interface ToastProps extends ToastType {
  clear: () => void;
}

const Wrapper = styled(Box)`
  padding: 0.375em 0.75em;
  max-width: 100%;
  margin-bottom: 1rem;
  z-index: 9999;
  width: fit-content;

  transition-property: transform, opacity;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 250ms;

  &.move-enter {
    opacity: 0.01;
    transform: scale(0.8);
  }
  &.move-enter-active {
    opacity: 1;
    transform: scale(1);
  }
  &.move-exit {
    opacity: 1;
    transform: scale(1);
  }
  &.move-exit-active {
    opacity: 0.01;
    transform: scale(0.8);
  }
`;

export class ToastItem extends PureComponent<ToastProps> {
  static defaultProps = {
    duration: 5000,
  };

  componentDidMount() {
    if (this.props.duration !== null) {
      setTimeout(this.props.clear, this.props.duration);
    }
  }

  render() {
    const { message, color } = this.props;
    return (
      <Wrapper borderless color={color}>
        {message}
      </Wrapper>
    );
  }
}

function setPosition(position: string, isFixed?: boolean) {
  // tslint:disable-next-line
  const base = `position: ${isFixed ? 'fixed' : 'absolute'}; z-index: 9999; display: flex; flex-direction: column; `;
  switch (position) {
    case 'bottom': {
      return `${base} bottom: 1rem; left: 50%; align-item: center; transform: translateX(-50%);`;
    }
    case 'bottom-left': {
      return `${base} bottom: 1rem; left: 1rem; align-item: flex-start;`;
    }
    case 'bottom-right': {
      return `${base} bottom: 1rem; right: 1rem; align-item: flex-end;`;
    }
    case 'top': {
      return `${base} top: 1rem; left: 50%; align-item: center; transform: translateX(-50%);`;
    }
    case 'top-left': {
      return `${base} top: 1rem; left: 1rem; align-item: flex-start;`;
    }
    case 'top-right':
    default: {
      return `${base} top: 1rem; right: 1rem; align-item: flex-end;`;
    }
  }
}

interface ContainerProps {
  /** 表示するToastのリスト */
  toasts: ToastType[];
  /** toastを消すタイミングのコールバック */
  clear: (id: string) => void;
  /** top, top-right, top-left, bottom, bottom-right, bottom-left */
  position?: PositionType;
  /** スクロールしても固定として表示する */
  fixed?: boolean;
}

export default class ToastContainer extends Component<ContainerProps> {
  static defaultProps = {
    toasts: [],
    position: 'top-right',
    fixed: false,
  };

  shouldComponentUpdate(props: ContainerProps) {
    return props.toasts.length !== this.props.toasts.length ||
      props.position !== this.props.position;
  }

  componentDidUpdate(props: ContainerProps) {
    if (
      this.element &&
      (props.position !== this.props.position || props.fixed !== this.props.fixed)
    ) {
      this.element.style.cssText = setPosition(this.props.position!, this.props.fixed);
    }
  }

  componentWillUnmount() {
    if (this.element) document.body.removeChild(this.element);
  }

  clear = (id: string) => () => {
    this.props.clear(id);
  }

  renderToast = () => {
    const { toasts } = this.props;
    return (
      <TransitionGroup component={null}>
        {toasts.map(props => (
          <CSSTransition
            key={props.id}
            timeout={250}
            classNames="move"
            unmountOnExit
          >
            <ToastItem
              key={props.id}
              {...props}
              clear={this.clear(props.id)}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }

  element?: HTMLDivElement;

  render(): React.ReactPortal | null {
    if (typeof document !== 'undefined' && !this.element) {
      this.element = document.createElement('div');
      this.element.style.cssText = setPosition(this.props.position!, this.props.fixed);
      document.body.appendChild(this.element);
    }


    if (this.element) {
      return createPortal(this.renderToast(), this.element);
    }
    return null;
  }
}

