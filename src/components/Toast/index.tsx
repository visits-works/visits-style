import * as React from 'react';
import { Component, PureComponent } from 'react';
import { createPortal } from 'react-dom';
import { Transition, animated } from 'react-spring';
import styled from 'styled-components';
import { ColorType } from '../../types';

import Box from '../Box';

interface ToastType {
  id: string;
  title?: string;
  message?: React.ReactChildren;
  color?: ColorType;
}

interface ToastProps extends ToastType {
  clear: () => void;
  duration?: number;
  styles?: any;
}

const Wrapper = styled(Box)`
  padding: 0.375em 0.75em;
  max-width: 100%;
  margin-bottom: 1rem;
  width: fit-content;
`;

export class Toast extends PureComponent<ToastProps> {
  componentDidMount() {
    if (this.props.duration) {
      this.timer = setTimeout(() => {
        this.props.clear();
      }, this.props.duration)
    }
  }

  timer: any;

  render() {
    const { message, color } = this.props;
    return (
      <Wrapper borderless color={color}>
        {message}
      </Wrapper>
    );
  }
}

interface ContainerProps {
  toasts: Array<ToastType>;
  duration?: number;
  clear: (id: string) => void;
}

export default class ToastContainer extends Component<ContainerProps> {
  static defaultProps = {
    duration: 5000,
  }

  constructor(props: ContainerProps) {
    super(props);
    this.element = document.createElement('div');
    this.element.id = '__toasts';
    this.element.style.cssText = 'position: fixed; top: 1rem; right: 1rem; z-index: 9999; display: flex; flex-direction: column; align-items: flex-end;';
    document.body.appendChild(this.element);
  }

  componentWillUnmount() {
    if (this.element) this.element.remove();
  }

  clear = (id: string) => () => {
    this.props.clear(id);
  }

  renderToast = () => {
    const { toasts } = this.props;
    if (!toasts.length) return;

    return (
      // @ts-ignore
      <Transition
        native
        keys={toasts.map(item => item.id)}
        from={{ opacity: 0, transform: 'translateX(100%)' }}
        enter={{ opacity: 1, transform: 'translateX(0px)' }}
        leave={{ opacity: 0, transform: 'translateX(100%)' }}
      >
        {toasts.map(this._renderToast)}
      </Transition>
    );
  }

  _renderToast = (props: ToastType) => (style: any) => {
    return (
      <animated.div style={style}>
        <Toast
          {...props}
          clear={this.clear(props.id)}
          duration={this.props.duration}
        />
      </animated.div>
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

