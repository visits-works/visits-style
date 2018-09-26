function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { createRef, PureComponent } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import Box from '../Box';
import styled from '../../styled';
const Wrapper = styled.div.withConfig({
  displayName: "Tooltip__Wrapper",
  componentId: "sc-1xyhucq-0"
})(["display:inline-block;position:relative;"]);
const TooltipDiv = styled(Box).withConfig({
  displayName: "Tooltip__TooltipDiv",
  componentId: "sc-1xyhucq-1"
})(["position:absolute;clear:both;box-shadow:0 1px 2px 0 rgba(0,0,0,0.05);z-index:9999;padding:0.375rem 0.625rem;cursor:default;width:auto;white-space:pre;font-size:0.85rem;transform:scale(0.8);opacity:0;will-change:transform,opacity;transition-property:transform,opacity;transition-duration:100ms;transition-timing-function:cubic-bezier(0.645,0.045,0.355,1);&.start{transform:scale(1);opacity:1;}&.end{transform:scale(0.8);opacity:0;}"]);

function getPosition(height, width, position) {
  switch (position) {
    case 'top':
      {
        return {
          bottom: `${height}px`,
          left: '-50%'
        };
      }

    case 'left':
      {
        return {
          right: `${width}px`,
          top: '-50%'
        };
      }

    case 'right':
      {
        return {
          left: `${width}px`,
          top: '-50%'
        };
      }

    default:
      {
        return {
          top: `${height}px`,
          left: '-50%'
        };
      }
  }
}

export default class Tooltip extends PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      show: false,
      style: {}
    });

    _defineProperty(this, "openTooltip", () => {
      if (this.state.show || !this.element.current) return;
      const width = this.element.current.offsetWidth + 8;
      const height = this.element.current.offsetHeight + 8;
      const style = getPosition(height, width, this.props.position);
      this.setState({
        style,
        show: true
      });
    });

    _defineProperty(this, "closeTooltip", () => {
      if (this.state.show && this.element.current) {
        this.setState({
          show: false
        });
      }
    });

    _defineProperty(this, "element", createRef());
  }

  render() {
    const {
      color,
      label,
      children
    } = this.props;
    const {
      show,
      style
    } = this.state;
    return React.createElement(Wrapper, {
      innerRef: this.element,
      style: this.props.style,
      onMouseOver: this.openTooltip,
      onMouseOut: this.closeTooltip
    }, children, React.createElement(CSSTransition, {
      classNames: {
        appear: 'start',
        enterDone: 'start',
        exit: 'end'
      },
      in: show,
      timeout: 150,
      unmountOnExit: true
    }, React.createElement(TooltipDiv, {
      color: color,
      style: style,
      borderless: true
    }, label)));
  }

}

_defineProperty(Tooltip, "defaultProps", {
  position: 'bottom',
  color: 'dark'
});