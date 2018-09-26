function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import transparentize from 'polished/lib/color/transparentize';
import styled from '../../styled';
const Wrapper = styled.span.withConfig({
  displayName: "Checkbox__Wrapper",
  componentId: "sc-1r9gosw-0"
})(["display:block;position:relative;width:auto;label{cursor:pointer;padding-left:0.625em;max-width:100%;width:100%;line-height:1.25;margin-right:0.625rem;&:before,&:after{content:\"\";position:absolute;}&:after{top:0.25em;left:0.2em;width:0.85em;height:0.5em;transform:rotate(-45deg);border:0.1em solid transparent;border-top-style:none;border-right-style:none;}&:before{width:1.25em;height:1.25em;left:0;top:0;background:transparent;border:1px solid ", ";border-radius:4px;cursor:pointer;will-change:background;transition:background 150ms ease-out;}}input{visibility:hidden;&:checked + label{&:before{border-color:", ";background:", ";}&:after{border-color:", ";}}&:indeterminate + label{&:before{border-color:", ";background:", ";}&:after{border-color:", ";border-left-style:none;}}&:disabled{+ label{color:", ";&:before{background:", ";border-color:", ";}}&:checked + label:after{border-color:", ";}}}"], ({
  theme
}) => theme.border, ({
  theme
}) => theme.primary, ({
  theme
}) => theme.primary, ({
  theme
}) => theme.white, ({
  theme
}) => theme.primary, ({
  theme
}) => theme.primary, ({
  theme
}) => theme.white, ({
  theme
}) => transparentize(0.25, theme.textDark), ({
  theme
}) => transparentize(0.55, theme.border), ({
  theme
}) => theme.border, ({
  theme
}) => transparentize(0.15, theme.textDark));
export default class Checkbox extends PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "id", `checkbox_${this.props.name}`);
  }

  render() {
    const _this$props = this.props,
          {
      children
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["children"]);

    return React.createElement(Wrapper, null, React.createElement("input", _extends({
      type: "checkbox",
      id: this.id
    }, rest)), React.createElement("label", {
      htmlFor: this.id
    }, children));
  }

}

_defineProperty(Checkbox, "defaultProps", {
  name: null,
  children: null,
  checked: false,
  onChange: () => {}
});