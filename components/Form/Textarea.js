import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import styled from '../../styled';
import boxShadow from '../../utils/boxShadow';
import setSize from '../../utils/setSize';
import commonStyle from './style';
import HelpMessage from './HelpMessage';
var Wrapper = styled.span.withConfig({
  displayName: "Textarea__Wrapper",
  componentId: "jj36u2-0"
})(["display:block;position:relative;textarea{", " max-width:100%;width:100%;padding:0.625em;resize:vertical;appearance:none;overflow:auto;outline:none;border-radius:4px;border:1px solid ", ";transition-property:box-shadow;transition-duration:0.15s;transition-timing-function:ease-in-out;", " &:focus{border-color:", ";", "}&:disabled{resize:none;}}&:hover{textarea:not(:disabled):not(:focus){border-color:", ";}}"], commonStyle, function (_ref) {
  var theme = _ref.theme,
      error = _ref.error;
  return error ? theme.danger : theme.border;
}, setSize('font-size'), function (_ref2) {
  var theme = _ref2.theme,
      error = _ref2.error;
  return error ? theme.danger : theme.primary;
}, function (_ref3) {
  var theme = _ref3.theme,
      error = _ref3.error;
  return boxShadow('0.1em', error ? theme.danger : theme.primary);
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.borderHover;
});

var Textarea =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Textarea, _PureComponent);

  function Textarea() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Textarea.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        help = _this$props.help,
        error = _this$props.error,
        rest = _objectWithoutPropertiesLoose(_this$props, ["help", "error"]);

    return React.createElement(Wrapper, {
      error: error
    }, React.createElement("textarea", rest), HelpMessage(help, error));
  };

  return Textarea;
}(PureComponent);

_defineProperty(Textarea, "defaultProps", {
  value: '',
  col: 2,
  row: 5,
  onChange: function onChange() {}
});

export { Textarea as default };