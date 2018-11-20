import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import CSSTransition from 'react-transition-group/CSSTransition';
import styled from 'styled-components';
import Box from '../Box';
import Col from '../Grid/Col';
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
    backgroundColor: 'rgba(30, 30, 30, 0.9)',
};
const Wrapper = styled.div `

  & > ${Col} {
    transition-property: transform, opacity;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-duration: 200ms;
  }

  &.fade-enter > ${Col} {
    opacity: 0.01;
    transform: scale(0.8);
  }
  &.fade-enter-active > ${Col} {
    opacity: 1;
    transform: scale(1);
  }
  &.fade-exit > ${Col} {
    opacity: 1;
    transform: scale(1);
  }
  &.fade-exit-active > ${Col} {
    opacity: 0.01;
    transform: scale(0.8);
  }
`;
const colStyle = {
    zIndex: 9999,
    padding: '1rem',
    margin: 'auto',
};
export default class Modal extends PureComponent {
    constructor(props) {
        super(props);
        this.onKeyDown = (e) => {
            if (this.props.closeOnEsc && e.keyCode === ESC_KEY && this.props.closeModal) {
                this.props.closeModal();
            }
        };
        this.onClickOverlay = () => {
            if (this.shouldClose === null) {
                this.shouldClose = true;
            }
            if (this.shouldClose && this.props.closeOnOverlay && this.props.closeModal) {
                this.props.closeModal();
            }
            this.shouldClose = null;
        };
        this.handleContentOnMouse = () => {
            this.shouldClose = false;
        };
        this.getModal = () => {
            const { show, size, title, children, footer, color, style } = this.props;
            return (React.createElement(CSSTransition, { classNames: "fade", timeout: 200, in: show, unmountOnExit: true },
                React.createElement(Wrapper, { style: wrapperStyle, onClick: this.onClickOverlay, "aria-modal": "true" },
                    React.createElement(Col, { size: size || 6, role: "dialog", style: colStyle, onMouseUp: this.handleContentOnMouse, onMouseDown: this.handleContentOnMouse, auto: true },
                        React.createElement(Box, { color: color },
                            title && (React.createElement("header", null, title)),
                            React.createElement("main", { style: style }, children),
                            footer && (React.createElement("footer", null, footer)))))));
        };
        this.shouldClose = null;
        if (typeof document !== "undefined") {
            this.element = document.createElement('div');
            this.element.id = props.domId || 'modal';
            document.body.appendChild(this.element);
        }
    }
    componentWillUnmount() {
        if (this.props.domId && this.element) {
            document.body.removeChild(this.element);
        }
    }
    render() {
        if (typeof document !== "undefined") {
            return createPortal(this.getModal(), this.element);
        }
        return null;
    }
}
Modal.defaultProps = {
    domId: 'modal',
    show: false,
    color: 'white',
};
