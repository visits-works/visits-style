import "core-js/modules/es6.string.fixed";

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n    width: 100%;\n    flex-direction: column;\n    align-items: flex-start;\n\n    padding-bottom: 0.5rem;\n\n    button:not(.active)+& {\n      display:none;\n    }\n\n    & > ul {\n      flex-direction: column;\n      width: 100%;\n      li {\n        padding: .5rem 0;\n      }\n    }\n\n    & > div, & > span, & > form {\n      padding: .5rem 0;\n      width: 100%;\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose([" display: block; "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["padding: ", ";"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["padding: ", ";"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import React, { PureComponent } from 'react';
import transparentize from 'polished/lib/color/transparentize';
import styled, { css } from '../../styled';
import findColorInvert from '../../utils/findColorInvert';
import hambuger from '../../utils/hambuger';
import setAlign from '../../utils/setAlign';
import { mediaTablet, mediaUntilFullHD, mediaMobile } from '../../utils/media';

function setColor(_ref) {
  var color = _ref.color,
      theme = _ref.theme,
      backdrop = _ref.backdrop;
  var backgroundColor = color ? color === 'light' ? theme.color.greyLight : theme[color] : 'transparent';
  var textColor = findColorInvert(backgroundColor === 'transparent' ? theme.background : backgroundColor);

  if (backdrop) {
    var backColor = transparentize(0.2, backgroundColor === 'transparent' ? '#fff' : backgroundColor);
    var ua = navigator.userAgent.toLowerCase();

    if (ua.indexOf('safari') > -1 && ua.indexOf('chrome') === -1) {
      return "background-color: " + backColor + "; color: " + textColor + "; backdrop-filter: blur(8px);";
    }

    return css(["background-color:", ";color:", ";"], backColor, textColor);
  }

  return "background-color: " + backgroundColor + "; color: " + textColor + ";";
}

var NavBar = styled.header.withConfig({
  displayName: "AppBar__NavBar",
  componentId: "t8gqca-0"
})(["position:", ";display:flex;flex-wrap:wrap;align-items:center;justify-content:stretch;top:-1px;min-height:3.25rem;width:100%;z-index:30;", " a{color:inherit;}", " ", ""], function (_ref2) {
  var fixed = _ref2.fixed,
      sticky = _ref2.sticky;
  return !(sticky || fixed) ? 'relative' : fixed ? 'fixed' : 'sticky';
}, setColor, mediaTablet(_templateObject(), function (_ref3) {
  var fluid = _ref3.fluid;
  return fluid ? '0 0.5rem' : '0 3%';
}), mediaUntilFullHD(_templateObject2(), function (_ref4) {
  var fluid = _ref4.fluid;
  return fluid ? '0 0.75rem' : '0 5%';
}));
var Burger = styled.button.withConfig({
  displayName: "AppBar__Burger",
  componentId: "t8gqca-1"
})(["", " display:none;margin-left:auto;border:none;background-color:transparent;color:inherit;outline:none;&:hover{background-color:rgba(0,0,0,.05);}", ""], hambuger('3.25rem'), mediaMobile(_templateObject3()));
var NavContent = styled.div.withConfig({
  displayName: "AppBar__NavContent",
  componentId: "t8gqca-2"
})(["display:flex;justify-content:space-between;align-items:center;flex-basis:auto;flex-grow:1;& > ul{display:flex;flex-direction:row;list-style:none;flex-grow:1;justify-content:", ";li{padding:0 0.75rem;}}& > div,& > span,& > form{display:flex;", "}", ""], setAlign, function (_ref5) {
  var color = _ref5.color;
  return color ? "color: " + color + ";" : '';
}, mediaMobile(_templateObject4()));
var NavItem = styled.li.withConfig({
  displayName: "AppBar__NavItem",
  componentId: "t8gqca-3"
})(["text-align:center;a{display:block;padding:.5rem 1rem;color:inherit;opacity:1;will-change:opacity;transition:opacity 200ms cubic-bezier(0.645,0.045,0.355,1);&:hover,&.active{opacity:0.65;}}"]);

var AppBar =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(AppBar, _PureComponent);

  function AppBar() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      show: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleMenu", function () {
      _this.setState({
        show: !_this.state.show
      });
    });

    return _this;
  }

  var _proto = AppBar.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        brand = _this$props.brand,
        children = _this$props.children,
        style = _this$props.style,
        fixed = _this$props.fixed,
        sticky = _this$props.sticky,
        backdrop = _this$props.backdrop,
        align = _this$props.align;
    var show = this.state.show;
    return React.createElement(NavBar, {
      color: color,
      fixed: fixed,
      sticky: sticky,
      backdrop: backdrop,
      role: "navigation",
      style: style
    }, brand, React.createElement(Burger, {
      className: show ? 'active' : '',
      onClick: this.toggleMenu
    }, React.createElement("span", null), React.createElement("span", null), React.createElement("span", null)), React.createElement(NavContent, {
      align: align
    }, children));
  };

  return AppBar;
}(PureComponent);

_defineProperty(AppBar, "defaultProps", {
  color: null,
  brand: null,
  fixed: false,
  sticky: false,
  fluid: false,
  backdrop: false,
  style: null
});

_defineProperty(AppBar, "Item", NavItem);

export { AppBar as default };