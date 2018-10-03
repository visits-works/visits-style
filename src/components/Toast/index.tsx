import React, { Component, PureComponent } from 'react';
import { createPortal } from 'react-dom';
import CSSTransition from 'react-transition-group/CSSTransition';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import styled, { ColorType } from '../../styled';

import Box from '../Box';

type PositionType = 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right';

interface ToastType {
  id: string;
  title?: string;
  message?: React.ReactNode;
  color?: ColorType;
  duration?: number;
}

interface ToastProps extends ToastType {
  clear: () => void;
  styles?: any;
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

export class Toast extends PureComponent<ToastProps> {
  static defaultProps = {
    duration: 5000,
  };

  componentDidMount() {
    setTimeout(this.props.clear, this.props.duration);
  }

  render() {
    const { message, color, id } = this.props;
    return (
      <Wrapper borderless color={color}>
        {message}
      </Wrapper>
    );
  }
}

function setPosition(position: string) {
  switch (position) {
    case 'bottom': {
      return 'bottom: 1rem; left: 50%; align-item: center;';
    }
    case 'bottom-left': {
      return 'bottom: 1rem; left: 1rem; align-item: flex-start;';
    }
    case 'bottom-right': {
      return 'bottom: 1rem; right: 1rem; align-item: flex-end;';
    }

    case 'top': {
      return 'top: 1rem; left: 50%; align-items: center;';
    }
    case 'top-left': {
      return 'top: 1rem; left: 1rem; align-items: flex-start;';
    }
    case 'top-right':
    default: {
      return 'top: 1rem; right: 1rem; align-items: flex-end;';
    }
  }
}

interface ContainerProps {
  toasts: ToastType[];
  clear: (id: string) => void;
  position?: PositionType;
}

export default class ToastContainer extends Component<ContainerProps> {
  static defaultProps = {
    toasts: [],
    position: 'top-right',
  };

  constructor(props: ContainerProps) {
    super(props);
    this.element = document.createElement('div');
    // tslint:disable-next-line
    this.element.style.cssText = 'position: absolute; z-index: 9999; display: flex; flex-direction: column;';
    this.element.style.cssText += setPosition(props.position!);
    document.body.appendChild(this.element);
  }

  shouldComponentUpdate(props: ContainerProps) {
    return props.toasts.length !== this.props.toasts.length;
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
            <Toast
              key={props.id}
              {...props}
              clear={this.clear(props.id)}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }

  element: HTMLDivElement;

  render() {
    return createPortal(
      this.renderToast(),
      this.element,
    );
  }
}

