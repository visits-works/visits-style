function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component, PureComponent } from 'react';
import { createPortal } from 'react-dom';
import Transition from 'react-transition-group/Transition';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import anime from 'animejs';
import styled from '../../styled';
import { dispatchAnimeDone, addAnimeListener } from '../../utils/anime';
import Box from '../Box';
const Wrapper = styled(Box).withConfig({
  displayName: "Toast__Wrapper",
  componentId: "sc-8192b2-0"
})(["padding:0.375em 0.75em;max-width:100%;margin-bottom:1rem;width:fit-content;"]);

function animeToastIn(toast) {
  anime({
    targets: toast,
    translateX: ['100%', 0],
    complete: () => dispatchAnimeDone(toast),
    easing: [0.645, 0.045, 0.355, 1],
    duration: 250
  });
}

function animeToastOut(toast) {
  anime({
    targets: toast,
    translateX: [0, '100%'],
    complete: () => dispatchAnimeDone(toast),
    easing: [0.645, 0.045, 0.355, 1],
    duration: 250
  });
}

export class Toast extends PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "timer", void 0);
  }

  componentDidMount() {
    if (this.props.duration) {
      this.timer = setTimeout(() => {
        this.props.clear();
      }, this.props.duration);
    }
  }

  render() {
    const {
      message,
      color
    } = this.props;
    return React.createElement(Wrapper, {
      borderless: true,
      color: color
    }, message);
  }

}

_defineProperty(Toast, "defaultProps", {
  duration: 5000
});

export default class ToastContainer extends Component {
  constructor(_props) {
    super(_props);

    _defineProperty(this, "clear", id => () => {
      this.props.clear(id);
    });

    _defineProperty(this, "renderToast", () => {
      const {
        toasts
      } = this.props;
      return React.createElement(TransitionGroup, {
        component: null
      }, toasts.map(props => React.createElement(Transition, {
        key: props.id,
        addEndListener: addAnimeListener,
        onEnter: animeToastIn,
        onExit: animeToastOut,
        timeout: 250,
        unmountOnExit: true
      }, React.createElement(Toast, _extends({}, props, {
        clear: this.clear(props.id)
      })))));
    });

    _defineProperty(this, "element", void 0);

    this.element = document.createElement('div'); // tslint:disable-next-line

    this.element.style.cssText = 'position: fixed; top: 1rem; right: 1rem; z-index: 9999; display: flex; flex-direction: column; align-items: flex-end;';
    document.body.appendChild(this.element);
  }

  componentWillUnmount() {
    if (this.element) this.element.remove();
  }

  render() {
    return createPortal(this.renderToast(), this.element);
  }

}

_defineProperty(ToastContainer, "defaultProps", {
  toasts: []
});