function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import styled from '../../styled';
var Wrapper = styled.div.withConfig({
  displayName: "Field__Wrapper",
  componentId: "sc-1vvmhhp-0"
})(["display:block;&:not(:last-child){margin-bottom:0.75rem;}"]);
var Label = styled.label.withConfig({
  displayName: "Field__Label",
  componentId: "sc-1vvmhhp-1"
})(["color:", ";display:block;font-size:1rem;font-weight:700;margin-bottom:0.325rem;"], function (_ref) {
  var theme = _ref.theme;
  return theme.textStrong;
});

var Field =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Field, _PureComponent);

  function Field() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Field.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        label = _this$props.label,
        children = _this$props.children,
        style = _this$props.style;
    return React.createElement(Wrapper, {
      style: style
    }, label && React.createElement(Label, null, label), children);
  };

  return Field;
}(PureComponent);

export { Field as default };