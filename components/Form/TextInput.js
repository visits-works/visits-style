function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import styled from '../../styled';
import { setSize } from '../../utils';
import commonStyle from './style';
import HelpMessage from './HelpMessage';
const Icon = styled.span.withConfig({
  displayName: "TextInput__Icon",
  componentId: "sc-1mtsepk-0"
})(["position:absolute;top:0.375em;bottom:0;z-index:1;color:", ";", " svg,img{height:1em;width:1em;}"], ({
  theme
}) => theme.border, ({
  right
}) => right ? 'right: 0.375em; & ~ input { padding-right: 1.555em !important; }' : 'left: 0.375em; & ~ input { padding-left: 1.55em !important; }');
const Wrapper = styled.span.withConfig({
  displayName: "TextInput__Wrapper",
  componentId: "sc-1mtsepk-1"
})(["position:relative;display:block;input{", " max-width:100%;width:100%;position:relative;display:block;outline:none;box-shadow:none;padding:0.375em 0.625em;border:none;", " ", " transition-property:box-shadow;transition-duration:150ms;transition-timing-function:ease-in-out;&:focus{border-color:", ";", "}}&:hover{input:not(:disabled):not(:focus):not(:active){border-color:", ";}", "{color:", ";}}"], commonStyle, ({
  outline,
  theme,
  error
}) => outline ? `border: 1px solid ${error ? theme.danger : theme.border}; border-radius: 4px;` : `border-bottom: 1px solid ${error ? theme.danger : theme.border}; border-radius: 0;`, setSize('font-size'), ({
  error,
  theme
}) => error ? theme.danger : theme.primary, ({
  theme,
  outline,
  error
}) => outline ? `box-shadow: 0 0 0 0.1em ${error ? theme.danger : theme.primary};` : `box-shadow: 0 0.1em ${error ? theme.danger : theme.primary};`, ({
  theme
}) => theme.borderHover, Icon, ({
  theme
}) => theme.borderHover);
export default class TextInput extends PureComponent {
  render() {
    const _this$props = this.props,
          {
      outline,
      error,
      help,
      leftIcon,
      rightIcon
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["outline", "error", "help", "leftIcon", "rightIcon"]);

    return React.createElement(Wrapper, {
      outline: outline,
      error: error
    }, leftIcon && React.createElement(Icon, null, leftIcon), rightIcon && React.createElement(Icon, {
      right: true
    }, rightIcon), React.createElement("input", rest), HelpMessage(help, error));
  }

}

_defineProperty(TextInput, "defaultProps", {
  type: 'text',
  value: '',
  onChange: () => {}
});