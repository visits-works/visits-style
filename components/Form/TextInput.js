import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import styled from '../../styled';
import { setSize } from '../../utils';
import commonStyle from './style';
import HelpMessage from './HelpMessage';
var Icon = styled.span.withConfig({
  displayName: "TextInput__Icon",
  componentId: "sc-1mtsepk-0"
})(["position:absolute;top:0.375em;bottom:0;z-index:1;color:", ";", " svg,img{height:1em;width:1em;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.border;
}, function (_ref2) {
  var right = _ref2.right;
  return right ? 'right: 0.375em; & ~ input { padding-right: 1.555em !important; }' : 'left: 0.375em; & ~ input { padding-left: 1.55em !important; }';
});
var Wrapper = styled.span.withConfig({
  displayName: "TextInput__Wrapper",
  componentId: "sc-1mtsepk-1"
})(["position:relative;display:block;input{", " max-width:100%;width:100%;position:relative;display:block;outline:none;box-shadow:none;padding:0.375em 0.625em;border:none;", " ", " transition-property:box-shadow;transition-duration:150ms;transition-timing-function:ease-in-out;&:focus{border-color:", ";", "}}&:hover{input:not(:disabled):not(:focus):not(:active){border-color:", ";}", "{color:", ";}}"], commonStyle, function (_ref3) {
  var outline = _ref3.outline,
      theme = _ref3.theme,
      error = _ref3.error;
  return outline ? "border: 1px solid " + (error ? theme.danger : theme.border) + "; border-radius: 4px;" : "border-bottom: 1px solid " + (error ? theme.danger : theme.border) + "; border-radius: 0;";
}, setSize('font-size'), function (_ref4) {
  var error = _ref4.error,
      theme = _ref4.theme;
  return error ? theme.danger : theme.primary;
}, function (_ref5) {
  var theme = _ref5.theme,
      outline = _ref5.outline,
      error = _ref5.error;
  return outline ? "box-shadow: 0 0 0 0.1em " + (error ? theme.danger : theme.primary) + ";" : "box-shadow: 0 0.1em " + (error ? theme.danger : theme.primary) + ";";
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.borderHover;
}, Icon, function (_ref7) {
  var theme = _ref7.theme;
  return theme.borderHover;
});

var TextInput =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(TextInput, _PureComponent);

  function TextInput() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = TextInput.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        outline = _this$props.outline,
        error = _this$props.error,
        help = _this$props.help,
        leftIcon = _this$props.leftIcon,
        rightIcon = _this$props.rightIcon,
        rest = _objectWithoutPropertiesLoose(_this$props, ["outline", "error", "help", "leftIcon", "rightIcon"]);

    return React.createElement(Wrapper, {
      outline: outline,
      error: error
    }, leftIcon && React.createElement(Icon, null, leftIcon), rightIcon && React.createElement(Icon, {
      right: true
    }, rightIcon), React.createElement("input", rest), HelpMessage(help, error));
  };

  return TextInput;
}(PureComponent);

_defineProperty(TextInput, "defaultProps", {
  type: 'text',
  value: '',
  onChange: function onChange() {}
});

export { TextInput as default };