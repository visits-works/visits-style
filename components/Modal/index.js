function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import Transition from 'react-transition-group/Transition';
import anime from 'animejs';
import Box from '../Box';
import Col from '../Grid/Col';
import { dispatchAnimeDone, addAnimeListener } from '../../utils/anime';
const ESC_KEY = 27;
const wrapperStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  zIndex: 9997,
  overflowY: 'scroll',
  backgroundColor: 'rgba(30, 30, 30, 0.9)'
};
const colStyle = {
  zIndex: 9999,
  padding: '1rem',
  margin: 'auto'
};

function animeModalIn(modal) {
  anime({
    targets: modal,
    scale: [0.8, 1],
    opacity: [0, 1],
    complete: () => dispatchAnimeDone(modal),
    easing: [0.645, 0.045, 0.355, 1],
    duration: 200
  });
}

export default class Modal extends Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onKeyDown", e => {
      if (this.props.closeOnEsc && e.keyCode === ESC_KEY && this.props.closeModal) {
        this.props.closeModal();
      }
    });

    _defineProperty(this, "onClickOverlay", () => {
      if (this.shouldClose === null) {
        this.shouldClose = true;
      }

      if (this.shouldClose && this.props.closeOnOverlay && this.props.closeModal) {
        this.props.closeModal();
      }

      this.shouldClose = null;
    });

    _defineProperty(this, "handleContentOnMouse", () => {
      this.shouldClose = false;
    });

    _defineProperty(this, "getModal", () => {
      const {
        show,
        size,
        title,
        children,
        footer,
        color,
        style
      } = this.props;
      if (!show) return;
      return React.createElement("div", {
        style: wrapperStyle,
        onClick: this.onClickOverlay,
        "aria-modal": "true"
      }, React.createElement(Transition, {
        addEndListener: addAnimeListener,
        onEnter: animeModalIn,
        timeout: 200,
        in: show,
        appear: true,
        unmountOnExit: true
      }, React.createElement(Col, {
        size: size || 6,
        role: "dialog",
        style: colStyle,
        onMouseUp: this.handleContentOnMouse,
        onMouseDown: this.handleContentOnMouse,
        auto: true
      }, React.createElement(Box, {
        color: color
      }, title && React.createElement("header", null, title), React.createElement("main", {
        style: style
      }, children), footer && React.createElement("footer", null, footer)))));
    });

    _defineProperty(this, "element", void 0);

    _defineProperty(this, "shouldClose", null);

    this.element = document.createElement('div');
    this.element.id = props.domId || 'modal';
    document.body.appendChild(this.element);
  }

  shouldComponentUpdate(props) {
    return this.props.show !== props.show;
  }

  componentWillUnmount() {
    if (this.props.domId) {
      this.element.remove();
    }
  }

  render() {
    return createPortal(this.getModal(), this.element);
  }

}

_defineProperty(Modal, "defaultProps", {
  domId: 'modal',
  show: false,
  color: 'white'
});