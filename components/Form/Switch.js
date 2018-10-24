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
var Wrapper = styled.label.withConfig({
  displayName: "Switch__Wrapper",
  componentId: "sc-1c4xpm9-0"
})(["display:inline-block;cursor:pointer;line-height:1.25;position:relative;input{cursor:pointer;margin-right:0.5em;}input+label{}&:not(:first-child){margin-left:0.5em;}"]);

var Switch =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Switch, _PureComponent);

  function Switch() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "id", "switch_" + _this.props.name);

    return _this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        rest = _objectWithoutPropertiesLoose(_this$props, ["children"]);

    return React.createElement(Wrapper, null, React.createElement("input", _extends({
      id: this.id,
      type: "checkbox"
    }, rest)), React.createElement("label", {
      htmlFor: this.id
    }, children));
  };

  return Switch;
}(PureComponent);

_defineProperty(Switch, "defaultProps", {
  children: null,
  onChange: function onChange() {}
});

export { Switch as default };