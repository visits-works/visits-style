import React, { Component } from 'react';
import styled from 'styled-components';
import CSSTransition from 'react-transition-group/CSSTransition';
import Box from '../Box';
const Wrapper = styled.a `
  display: inline-block;
  outline: none;
  color: inherit;

  &:hover {
    color: inherit;
    text-decoration: none;
  }
`;
const Tooltip = styled(Box) `
  position: absolute;
  display: flex;
  clear: both;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  z-index: 9999;
  padding: 0.5rem 0;
  width: auto;
  height: auto;
  cursor: auto;

  will-change: transform, opacity;
  transform: scale(0.8);
  opacity: 0;

  transition-property: transform, opacity;
  transition-duration: 100ms;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);

  &.start {
    transform: scale(1);
    opacity: 1;
  }

  &.end {
    transform: scale(0.8);
    opacity: 0;
  }
`;
function getPosition(position) {
    switch (position) {
        case 'top-left': {
            return { top: 0, left: 0, transform: 'translateY(-100%)' };
        }
        case 'top-right': {
            return { top: 0, right: 0, transform: 'translateY(-100%)' };
        }
        case 'top': {
            return { top: 0, left: '50%', transform: 'translate(-50%, -100%)' };
        }
        case 'bottom-left': {
            return { bottom: 0, left: 0, transform: 'translateY(100%)' };
        }
        case 'bottom-right': {
            return { bottom: 0, right: 0, transform: 'translateY(100%)' };
        }
        case 'bottom': {
            return { bottom: 0, left: '50%', transform: 'translate(-50%, 100%)' };
        }
        default: {
            return { top: 0, left: 0, transform: 'translateY(100%)' };
        }
    }
}
export default class Popover extends Component {
    constructor() {
        super(...arguments);
        this.state = { show: false, style: {} };
        this.openDropdown = () => {
            if (this.state.show)
                return;
            const style = getPosition(this.props.position);
            this.setState({ style, show: true });
        };
        this.closeDropdown = () => {
            if (this.state.show)
                this.setState({ show: false });
        };
    }
    shouldComponentUpdate(props, state) {
        return this.state.show !== state.show || this.props.label !== props.label;
    }
    render() {
        const { label, children, style, ...rest } = this.props;
        const { show } = this.state;
        const tooltipStyle = { ...style, ...this.state.style };
        return (React.createElement(Wrapper, { tabIndex: 0, role: "button", onFocus: this.openDropdown, onBlur: this.closeDropdown, style: { display: 'block', position: 'relative' } },
            label,
            React.createElement(CSSTransition, { classNames: {
                    appear: 'start',
                    enterDone: 'start',
                    exit: 'end',
                }, in: show, timeout: 150, unmountOnExit: true },
                React.createElement(Tooltip, Object.assign({ style: tooltipStyle }, rest), children))));
    }
}
Popover.defaultProps = {
    position: 'bottom-left',
    color: 'white',
    style: {},
};
