function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import styled from '../../styled';
const Wrapper = styled.label.withConfig({
  displayName: "Switch__Wrapper",
  componentId: "sc-1c4xpm9-0"
})(["display:inline-block;cursor:pointer;line-height:1.25;position:relative;input{cursor:pointer;margin-right:0.5em;}input+label{}&:not(:first-child){margin-left:0.5em;}"]);
export default class Switch extends PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "id", `switch_${this.props.name}`);
  }

  render() {
    const _this$props = this.props,
          {
      children
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["children"]);

    return React.createElement(Wrapper, null, React.createElement("input", _extends({
      id: this.id,
      type: "checkbox"
    }, rest)), React.createElement("label", {
      htmlFor: this.id
    }, children));
  }

}

_defineProperty(Switch, "defaultProps", {
  children: null,
  onChange: () => {}
});