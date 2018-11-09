import React, { Component, PureComponent } from 'react';
import { createPortal } from 'react-dom';
import CSSTransition from 'react-transition-group/CSSTransition';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import styled from '../../styled';
import Box from '../Box';
const Wrapper = styled(Box) `
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
export class ToastItem extends PureComponent {
    componentDidMount() {
        if (this.props.duration !== null) {
            setTimeout(this.props.clear, this.props.duration);
        }
    }
    render() {
        const { message, color, id } = this.props;
        return (React.createElement(Wrapper, { borderless: true, color: color }, message));
    }
}
ToastItem.defaultProps = {
    duration: 5000,
};
function setPosition(position, isFixed) {
    const base = `position: ${isFixed ? 'fixed' : 'absolute'}; z-index: 9999; display: flex; flex-direction: column; `;
    switch (position) {
        case 'bottom': {
            return base + 'bottom: 1rem; left: 50%; align-item: center; transform: translateX(-50%);';
        }
        case 'bottom-left': {
            return base + 'bottom: 1rem; left: 1rem; align-item: flex-start;';
        }
        case 'bottom-right': {
            return base + 'bottom: 1rem; right: 1rem; align-item: flex-end;';
        }
        case 'top': {
            return base + 'top: 1rem; left: 50%; align-items: center; transform: translateX(-50%);';
        }
        case 'top-left': {
            return base + 'top: 1rem; left: 1rem; align-items: flex-start;';
        }
        case 'top-right':
        default: {
            return base + 'top: 1rem; right: 1rem; align-items: flex-end;';
        }
    }
}
export default class ToastContainer extends Component {
    constructor(props) {
        super(props);
        this.clear = (id) => () => {
            this.props.clear(id);
        };
        this.renderToast = () => {
            const { toasts } = this.props;
            return (React.createElement(TransitionGroup, { component: null }, toasts.map(props => (React.createElement(CSSTransition, { key: props.id, timeout: 250, classNames: "move", unmountOnExit: true },
                React.createElement(ToastItem, Object.assign({ key: props.id }, props, { clear: this.clear(props.id) })))))));
        };
        if (typeof document !== "undefined") {
            this.element = document.createElement('div');
            this.element.style.cssText = setPosition(props.position, props.fixed);
            document.body.appendChild(this.element);
        }
    }
    shouldComponentUpdate(props) {
        return props.toasts.length !== this.props.toasts.length ||
            props.position !== this.props.position;
    }
    getSnapshotBeforeUpdate(props) {
        if (props.position !== this.props.position || props.fixed !== this.props.fixed) {
            this.element.style.cssText = setPosition(this.props.position, this.props.fixed);
        }
    }
    componentWillUnmount() {
        if (this.element)
            document.body.removeChild(this.element);
    }
    render() {
        if (typeof document !== "undefined") {
            return createPortal(this.renderToast(), this.element);
        }
        return null;
    }
}
ToastContainer.defaultProps = {
    toasts: [],
    position: 'top-right',
    fixed: false,
};
