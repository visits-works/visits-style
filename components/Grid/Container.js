"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styled = _interopRequireWildcard(require("../../styled"));

var _media = require("../../utils/media");

var _variables = require("../../styles/variables");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      max-width: ", "px;\n      margin-right: 5%;\n      margin-left: 5%;\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      max-width: ", "px;\n      margin-right: 5%;\n      margin-left: 5%;\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      max-width: ", "px;\n      margin-right: 3%;\n      margin-left: 3%;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      margin-right: 3%;\n      margin-left: 3%;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        margin-right: 0.75rem;\n        margin-left: 0.75rem;\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        margin-right: 0.75rem;\n        margin-left: 0.75rem;\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        margin-right: 0.5rem;\n        margin-left: 0.5rem;\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function setResponsive(_ref) {
  var fluid = _ref.fluid;

  if (fluid) {
    return (0, _styled.css)(["", " ", " ", ""], (0, _media.mediaMobile)(_templateObject()), (0, _media.mediaDesktop)(_templateObject2()), (0, _media.mediaFullHD)(_templateObject3()));
  }

  return (0, _styled.css)(["", " ", " ", " ", ""], (0, _media.mediaMobile)(_templateObject4()), (0, _media.mediaTablet)(_templateObject5(), _variables.tablet - 2 * _variables.smallGutter), (0, _media.mediaDesktop)(_templateObject6(), _variables.desktop - 2 * _variables.gutter), (0, _media.mediaFullHD)(_templateObject7(), _variables.fullhd - 2 * _variables.gutter));
}

var Container = _styled.default.div.withConfig({
  displayName: "Container"
})(["position:relative;margin:0 auto;width:auto;max-width:100%;", ""], setResponsive);

Container.displayName = 'Container';
Container.defaultProps = {
  fluid: false
};
var _default = Container;
exports.default = _default;