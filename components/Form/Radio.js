function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import transparentize from 'polished/lib/color/transparentize';
import styled from '../../styled';
const Wrapper = styled.span.withConfig({
  displayName: "Radio__Wrapper",
  componentId: "sc-20otqg-0"
})(["display:block;position:relative;width:auto;label{cursor:pointer;padding-left:0.625em;max-width:100%;width:100%;line-height:1.25;margin-right:0.625rem;&:before,&:after{content:\"\";position:absolute;}&:after{top:0.375em;left:0.375em;width:0.5em;height:0.5em;background:", ";border:none;transform:scale(0);border-radius:50%;will-change:transform;transition:transform 150ms ease-out;}&:before{width:1.25em;height:1.25em;left:0;top:0;background:transparent;border:0.1em solid ", ";border-radius:50%;will-change:background;transition:background 150ms ease-out;}}input{visibility:hidden;&:checked{+ label:before{border-color:", ";}+ label:after{transform:scale(1);}}&:disabled{+ label{color:", ";&:before{background:", ";border-color:", ";}}&:checked + label:after{background:", ";}}}"], ({
  theme
}) => theme.primary, ({
  theme
}) => theme.border, ({
  theme
}) => theme.primary, ({
  theme
}) => transparentize(0.25, theme.textDark), ({
  theme
}) => transparentize(0.55, theme.border), ({
  theme
}) => theme.border, ({
  theme
}) => transparentize(0.15, theme.textDark));
export default class Radio extends PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "id", `radio_${this.props.name}:${this.props.value}`);
  }

  render() {
    const _this$props = this.props,
          {
      children
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["children"]);

    return React.createElement(Wrapper, null, React.createElement("input", _extends({
      id: this.id,
      type: "radio"
    }, rest)), React.createElement("label", {
      htmlFor: this.id
    }, children));
  }

}

_defineProperty(Radio, "defaultProps", {
  name: null,
  children: null,
  checked: false,
  onChange: () => {}
});