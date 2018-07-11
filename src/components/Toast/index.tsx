import * as React from 'react';
import { Component, PureComponent } from 'react';
import { createPortal } from 'react-dom';
import { Transition, animated } from 'react-spring';
import styled from 'styled-components';
import { ColorType } from '../../types';

import Box from '../Box';

interface ToastProps {
  message?: React.ReactChildren;
  color?: ColorType;
  clear: (id: string) => void;
  styles?: any;
}

const Wrapper = styled(Box)`
  padding: 0.375em 0.75em;
  max-width: 100%;
  margin-bottom: 1rem;
  width: fit-content;
`;

export class Toast extends PureComponent<ToastProps> {
  render() {
    const { message, color } = this.props;
    return (
      <Wrapper borderless color={color}>{message}</Wrapper>
    );
  }
}

interface ContainerProps {
  toasts: Array<{ id: string }>;
  duration?: number;
  clear: (id: string) => void;
}

export default class ToastContainer extends Component<ContainerProps> {
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

  clear = (id: string) => {
    this.props.clear(id);
  }

  renderToast = () => {
    const { toasts } = this.props;
    // return (
    //   <Transition
    //     native
    //     keys={toasts.map(item => item.id)}
    //     from={{ opacity: 0, height: 0 }}
    //     enter={{ opacity: 1, height: 100 }}
    //     leave={{ opacity: 0, height: 0 }}
    //   >
    //     {toasts.map(props => (styles: any) => <animated.div style={styles}><Toast {...props} clear={this.clear} /></animated.div>)}
    //   </Transition>
    // );
    return toasts.map(props => <Toast key={props.id} {...props} clear={this.clear} />)
  }

  element: HTMLDivElement;

  render() {
    return createPortal(
      this.renderToast(),
      this.element,
    );
  }
}

