function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component, PureComponent } from 'react';
import { createPortal } from 'react-dom';
import CSSTransition from 'react-transition-group/CSSTransition';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import styled from '../../styled';
import Box from '../Box';
const Wrapper = styled(Box).withConfig({
  displayName: "Toast__Wrapper",
  componentId: "sc-8192b2-0"
})(["padding:0.375em 0.75em;max-width:100%;margin-bottom:1rem;z-index:9999;width:fit-content;transition-property:transform,opacity;transition-timing-function:cubic-bezier(0.645,0.045,0.355,1);transition-duration:250ms;&.move-enter{opacity:0.01;transform:scale(0.8);}&.move-enter-active{opacity:1;transform:scale(1);}&.move-exit{opacity:1;transform:scale(1);}&.move-exit-active{opacity:0.01;transform:scale(0.8);}"]);
export class ToastItem extends PureComponent {
  componentDidMount() {
    if (this.props.duration !== null) {
      setTimeout(this.props.clear, this.props.duration);
    }
  }

  render() {
    const {
      message,
      color,
      id
    } = this.props;
    return React.createElement(Wrapper, {
      borderless: true,
      color: color
    }, message);
  }

}

_defineProperty(ToastItem, "defaultProps", {
  duration: 5000
});

function setPosition(position) {
  switch (position) {
    case 'bottom':
      {
        return 'bottom: 1rem; left: 50%; align-item: center;';
      }

    case 'bottom-left':
      {
        return 'bottom: 1rem; left: 1rem; align-item: flex-start;';
      }

    case 'bottom-right':
      {
        return 'bottom: 1rem; right: 1rem; align-item: flex-end;';
      }

    case 'top':
      {
        return 'top: 1rem; left: 50%; align-items: center;';
      }

    case 'top-left':
      {
        return 'top: 1rem; left: 1rem; align-items: flex-start;';
      }

    case 'top-right':
    default:
      {
        return 'top: 1rem; right: 1rem; align-items: flex-end;';
      }
  }
}

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
      }, toasts.map(props => React.createElement(CSSTransition, {
        key: props.id,
        timeout: 250,
        classNames: "move",
        unmountOnExit: true
      }, React.createElement(ToastItem, _extends({
        key: props.id
      }, props, {
        clear: this.clear(props.id)
      })))));
    });

    _defineProperty(this, "element", void 0);

    this.element = document.createElement('div'); // tslint:disable-next-line

    this.element.style.cssText = 'position: absolute; z-index: 9999; display: flex; flex-direction: column;';
    this.element.style.cssText += setPosition(_props.position);
    document.body.appendChild(this.element);
  }

  shouldComponentUpdate(props) {
    return props.toasts.length !== this.props.toasts.length || props.position !== this.props.position;
  }

  componentWillUnmount() {
    if (this.element) document.body.removeChild(this.element);
  }

  render() {
    return createPortal(this.renderToast(), this.element);
  }

}

_defineProperty(ToastContainer, "defaultProps", {
  toasts: [],
  position: 'top-right'
});