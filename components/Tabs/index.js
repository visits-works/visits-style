function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component, Children } from 'react';
import styled from '../../styled';
import setAlign from '../../utils/setAlign';
import Button from '../Button';
const Wrapper = styled.nav.withConfig({
  displayName: "Tabs__Wrapper",
  componentId: "sc-1qmwdm1-0"
})(["display:flex;justify-content:", ";.tab-content{position:relative;display:flex;", " align-items:center;justify-content:center;overflow:hidden;}"], setAlign, ({
  align
}) => align ? '' : 'flex-grow: 1;');
const TabItem = styled.div.withConfig({
  displayName: "Tabs__TabItem",
  componentId: "sc-1qmwdm1-1"
})(["display:block;flex-grow:1;cursor:pointer;a{display:flex;color:", ";justify-content:center;align-items:center;vertical-align:top;padding:0.375em 0.75em;border-bottom:2px solid transparent;transition-property:background-color;transition-duration:150ms;transition-timing-function:ease-in-out;&:hover{background-color:rgba(0,0,0,0.03);}}"], ({
  theme
}) => theme.text);

function setColor({
  theme,
  color
}) {
  return !color || color === 'light' ? theme.background : theme[color];
}

const Indicator = styled.div.withConfig({
  displayName: "Tabs__Indicator",
  componentId: "sc-1qmwdm1-2"
})(["position:absolute;bottom:0;left:0;background-color:", ";height:2px;visibility:hidden;transform-origin:left;will-change:transform;transition-property:transform;transition-duration:200ms;transition-timing-function:cubic-bezier(0.645,0.045,0.355,1);"], setColor);
export default class Tabs extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      start: 0,
      current: null
    });

    _defineProperty(this, "onNext", () => {
      const threshold = this.props.maxItems;
      const value = this.state.start + threshold;
      const count = Children.count(this.props.children);

      if (value < count) {
        this.setState({
          start: value
        });
      }
    });

    _defineProperty(this, "onPrev", () => {
      if (this.state.start === 0) return;
      const threshold = this.props.maxItems;
      const value = this.state.start - threshold;
      this.setState({
        start: value < 0 ? 0 : value
      });
    });

    _defineProperty(this, "getIndicatorPosition", () => {
      const {
        current
      } = this.state;
      const {
        children,
        maxItems
      } = this.props;
      if (current === null || current === undefined) return undefined;
      if (!children || !children.length) return undefined;
      const total = children.length > maxItems ? maxItems : children.length;
      const value = current * 100 + '%';
      return {
        visibility: 'visible',
        width: `${Math.round(100 / total)}%`,
        transform: `translateX(${value})`
      };
    });

    _defineProperty(this, "renderChildren", (child, index) => {
      if (this.state.start > index) return null;
      if (this.state.start + index >= this.props.maxItems) return null;
      if (typeof child === 'string' || typeof child === 'number') return null;
      return React.createElement(TabItem, _extends({}, child.props, {
        align: this.props.align
      }));
    });
  }

  static getDerivedStateFromProps(props, state) {
    let activeIndex;

    for (let i = 0, len = props.children.length; i < len; i += 1) {
      const child = props.children[i];

      if (child.props.active) {
        activeIndex = i;
        break;
      }
    }

    return _objectSpread({}, state, {
      current: activeIndex
    });
  }

  shouldComponentUpdate(props, state) {
    return this.state.start !== state.start || this.state.current !== state.current;
  }

  render() {
    const {
      children,
      align,
      color,
      maxItems
    } = this.props;
    const {
      start
    } = this.state;
    const total = children ? children.length : 0;
    const style = this.getIndicatorPosition();
    return React.createElement(Wrapper, {
      align: align
    }, start > maxItems && React.createElement(Button, {
      color: "text"
    }, '<'), React.createElement("div", {
      className: "tab-content"
    }, Children.map(children, this.renderChildren), React.createElement(Indicator, {
      color: color,
      style: style
    })), total > maxItems && start > maxItems && React.createElement(Button, {
      color: "text"
    }, '>'));
  }

}

_defineProperty(Tabs, "defaultProps", {
  maxItems: 5
});

_defineProperty(Tabs, "Item", TabItem);

;