function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import styled from '../../styled';
import CSSTransition from 'react-transition-group/CSSTransition';
import Button from '../Button';
import Box from '../Box';
const Wrapper = styled(Button).withConfig({
  displayName: "Popover__Wrapper",
  componentId: "sc-1huajr8-0"
})(["display:block;position:relative;"]);
const Tooltip = styled(Box).withConfig({
  displayName: "Popover__Tooltip",
  componentId: "sc-1huajr8-1"
})(["position:absolute;display:flex;clear:both;background-color:white;box-shadow:0 1px 2px 0 rgba(0,0,0,0.05);z-index:9999;padding:0.5rem 0;width:auto;height:auto;cursor:default;will-change:transform,opacity;transform:scale(0.8);opacity:0;transition-property:transform,opacity;transition-duration:100ms;transition-timing-function:cubic-bezier(0.645,0.045,0.355,1);&.start{transform:scale(1);opacity:1;}&.end{transform:scale(0.8);opacity:0;}"]);

function getPosition(height, position) {
  switch (position) {
    case 'top-left':
      {
        return {
          bottom: `${height}px`,
          left: 0
        };
      }

    case 'top-right':
      {
        return {
          bottom: `${height}px`,
          right: 0
        };
      }

    case 'top':
      {
        return {
          bottom: `${height}px`
        };
      }

    case 'bottom-left':
      {
        return {
          top: `${height}px`,
          left: 0
        };
      }

    case 'bottom-right':
      {
        return {
          top: `${height}px`,
          right: 0
        };
      }

    case 'bottom':
      {
        return {
          top: `${height}px`
        };
      }

    default:
      {
        return {
          top: `${height}px`,
          left: 0
        };
      }
  }
}

export default class Popover extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      show: false,
      style: {}
    });

    _defineProperty(this, "openDropdown", () => {
      if (this.state.show || !this.element.current) return;
      const height = this.element.current.offsetHeight + 8;
      const style = getPosition(height, this.props.position);
      this.setState({
        style,
        show: true
      });
    });

    _defineProperty(this, "closeDropdown", () => {
      if (this.state.show) this.setState({
        show: false
      });
    });

    _defineProperty(this, "element", React.createRef());
  }

  shouldComponentUpdate(props, state) {
    return this.state.show !== state.show || this.props.label !== props.label;
  }

  render() {
    const {
      label,
      color,
      size,
      children
    } = this.props;
    const {
      show,
      style
    } = this.state;
    return React.createElement(Wrapper, {
      innerRef: this.element,
      color: color || 'text',
      size: size,
      onFocus: this.openDropdown,
      onBlur: this.closeDropdown
    }, label, React.createElement(CSSTransition, {
      classNames: {
        appear: 'start',
        enterDone: 'start',
        exit: 'end'
      },
      in: show,
      timeout: 150,
      unmountOnExit: true
    }, React.createElement(Tooltip, {
      style: style
    }, children)));
  }

}

_defineProperty(Popover, "defaultProps", {
  position: 'bottom-left'
});