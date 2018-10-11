function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import styled from '../../styled';
import commonStyle from './style';
import arrow from '../../utils/arrow';
import setSize from '../../utils/setSize';
import HelpMessage from './HelpMessage';
const InputWrapper = styled.div.withConfig({
  displayName: "Select__InputWrapper",
  componentId: "ffa0bn-0"
})(["position:relative;display:block;select{", " display:block;cursor:pointer;appearance:none;outline:none;max-width:100%;width:100%;background-color:transparent;padding:0.375em 0.625em;", " border:none;", " will-change:box-shadow;transition-property:box-shadow;transition-duration:150ms;transition-timing-function:ease-in-out;&:focus{border-color:", ";", "}&::-ms-expand{display:none;}&:-moz-focusring{color:transparent;text-shadow:0 0 0 #000;}}&::after{", " top:1.25em;right:0.625em;z-index:4;}", ""], commonStyle, ({
  size
}) => setSize('font-size', size), ({
  outline,
  theme,
  error
}) => outline ? `border: 1px solid ${error ? theme.danger : theme.border}; border-radius: 4px;` : `border-bottom: 1px solid ${error ? theme.danger : theme.border}; border-radius: 0;`, ({
  error,
  theme
}) => error ? theme.danger : theme.primary, ({
  theme,
  outline,
  error
}) => outline ? `box-shadow: 0 0 0 0.1em ${error ? theme.danger : theme.primary};` : `box-shadow: 0 0.1em ${error ? theme.danger : theme.primary};`, ({
  theme
}) => arrow(theme.border), ({
  theme,
  disabled
}) => disabled ? '' : `
    &:hover {
      select:not(:disabled):not(:focus) {
        border-color: ${theme.borderHover};
      }

      &::after {
        border-color: ${theme.borderHover};
      }
    }
  `);

function _renderItem(item) {
  if (typeof item === 'string') {
    return React.createElement("option", {
      key: item,
      value: item
    }, item);
  } else {
    const {
      id,
      name
    } = item;
    return React.createElement("option", {
      key: id,
      value: id
    }, name);
  }
}

export default class Select extends PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "renderItem", () => {
      // @ts-ignore
      return this.props.options.map(_renderItem);
    });
  }

  render() {
    const _this$props = this.props,
          {
      size,
      outline,
      options,
      error,
      help,
      placeholder,
      disabled
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["size", "outline", "options", "error", "help", "placeholder", "disabled"]);

    return React.createElement(InputWrapper, {
      size: size,
      outline: outline,
      error: error,
      disabled: disabled
    }, React.createElement("select", _extends({}, rest, {
      disabled: disabled
    }), placeholder && React.createElement("option", {
      disabled: true,
      selected: true
    }, placeholder), this.renderItem()), HelpMessage(help, error));
  }

}

_defineProperty(Select, "defaultProps", {
  name: null,
  onChange: () => {},
  options: []
});