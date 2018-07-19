import * as React from 'react';
import { Component, PureComponent } from 'react';
import { createPortal } from 'react-dom';
import Transition from 'react-transition-group/Transition';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import anime from 'animejs';
import styled from 'styled-components';
import { dispatchAnimeDone, addAnimeListener } from '../../utils/anime';

import Box from '../Box';

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
  width: fit-content;
`;

function animeToastIn (toast: HTMLElement) {
  anime({
    targets: toast,
    translateX: ['100%', 0],
    complete: () => dispatchAnimeDone(toast),
    easing: [0.645, 0.045, 0.355, 1],
    duration: 250
  });
}

function animeToastOut (toast: HTMLElement) {
  anime({
    targets: toast,
    translateX: [0, '100%'],
    complete: () => dispatchAnimeDone(toast),
    easing: [0.645, 0.045, 0.355, 1],
    duration: 250
  });
}

export class Toast extends PureComponent<ToastProps> {
  static defaultProps = {
    duration: 5000,
  }

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
  clear: (id: string) => void;
}

export default class ToastContainer extends Component<ContainerProps> {
  static defaultProps = {
    toasts: [],
  }

  constructor(props: ContainerProps) {
    super(props);
    this.element = document.createElement('div');
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
    return (
      <TransitionGroup component={null}>
        {toasts.map(props => (
          <Transition
            key={props.id}
            addEndListener={addAnimeListener}
            onEnter={animeToastIn}
            onExit={animeToastOut}
            timeout={250}
            unmountOnExit
          >
            <Toast
              {...props}
              clear={this.clear(props.id)}
            />
          </Transition>
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

