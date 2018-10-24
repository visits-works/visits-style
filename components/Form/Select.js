import "core-js/modules/es6.object.assign";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.function.name";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import styled from '../../styled';
import commonStyle from './style';
import arrow from '../../utils/arrow';
import setSize from '../../utils/setSize';
import HelpMessage from './HelpMessage';
var InputWrapper = styled.div.withConfig({
  displayName: "Select__InputWrapper",
  componentId: "ffa0bn-0"
})(["position:relative;display:block;select{", " display:block;cursor:pointer;appearance:none;outline:none;max-width:100%;width:100%;background-color:transparent;padding:0.375em 0.625em;", " border:none;", " will-change:box-shadow;transition-property:box-shadow;transition-duration:150ms;transition-timing-function:ease-in-out;&:focus{border-color:", ";", "}&::-ms-expand{display:none;}&:-moz-focusring{color:transparent;text-shadow:0 0 0 #000;}}&::after{", " top:1.25em;right:0.625em;z-index:4;}", ""], commonStyle, function (_ref) {
  var size = _ref.size;
  return setSize('font-size', size);
}, function (_ref2) {
  var outline = _ref2.outline,
      theme = _ref2.theme,
      error = _ref2.error;
  return outline ? "border: 1px solid " + (error ? theme.danger : theme.border) + "; border-radius: 4px;" : "border-bottom: 1px solid " + (error ? theme.danger : theme.border) + "; border-radius: 0;";
}, function (_ref3) {
  var error = _ref3.error,
      theme = _ref3.theme;
  return error ? theme.danger : theme.primary;
}, function (_ref4) {
  var theme = _ref4.theme,
      outline = _ref4.outline,
      error = _ref4.error;
  return outline ? "box-shadow: 0 0 0 0.1em " + (error ? theme.danger : theme.primary) + ";" : "box-shadow: 0 0.1em " + (error ? theme.danger : theme.primary) + ";";
}, function (_ref5) {
  var theme = _ref5.theme;
  return arrow(theme.border);
}, function (_ref6) {
  var theme = _ref6.theme,
      disabled = _ref6.disabled;
  return disabled ? '' : "\n    &:hover {\n      select:not(:disabled):not(:focus) {\n        border-color: " + theme.borderHover + ";\n      }\n\n      &::after {\n        border-color: " + theme.borderHover + ";\n      }\n    }\n  ";
});

function _renderItem(item) {
  if (typeof item === 'string') {
    return React.createElement("option", {
      key: item,
      value: item
    }, item);
  } else {
    var _id = item.id,
        _name = item.name;
    return React.createElement("option", {
      key: _id,
      value: _id
    }, _name);
  }
}

var Select =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Select, _PureComponent);

  function Select() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderItem", function () {
      // @ts-ignore
      return _this.props.options.map(_renderItem);
    });

    return _this;
  }

  var _proto = Select.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        size = _this$props.size,
        outline = _this$props.outline,
        options = _this$props.options,
        error = _this$props.error,
        help = _this$props.help,
        placeholder = _this$props.placeholder,
        disabled = _this$props.disabled,
        rest = _objectWithoutPropertiesLoose(_this$props, ["size", "outline", "options", "error", "help", "placeholder", "disabled"]);

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
  };

  return Select;
}(PureComponent);

_defineProperty(Select, "defaultProps", {
  name: null,
  onChange: function onChange() {},
  options: []
});

export { Select as default };