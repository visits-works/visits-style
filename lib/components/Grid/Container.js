"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("../../styles/variables");

var _Row = _interopRequireDefault(require("./Row"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  margin: 0 auto;\n  width: auto;\n\n  @media (max-width: ", "px) {\n    max-width: ", ";\n    margin-right: ", ";\n    margin-left: ", ";\n  }\n\n  @media (max-width: ", "px) {\n    max-width: ", ";\n    margin-right: ", ";\n    margin-left: ", ";\n  }\n\n  @media (max-width: ", "px) {\n    max-width: ", ";\n    margin-right: ", ";\n    margin-left: ", ";\n  }\n\n  @media (max-width: ", "px) {\n    max-width: ", ";\n    margin-right: ", ";\n    margin-left: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = function () {
  var c = _styledComponents.default.div(_templateObject(), _variables.fullhd, function (_ref) {
    var fluid = _ref.fluid;
    return fluid ? 'none' : "".concat(_variables.fullhd, "px");
  }, function (_ref2) {
    var fluid = _ref2.fluid;
    return fluid ? '0.75rem' : '5%';
  }, function (_ref3) {
    var fluid = _ref3.fluid;
    return fluid ? '0.75rem' : '5%';
  }, _variables.desktop, function (_ref4) {
    var fluid = _ref4.fluid;
    return fluid ? 'none' : "".concat(_variables.desktop, "px");
  }, function (_ref5) {
    var fluid = _ref5.fluid;
    return fluid ? '0.75rem' : '5%';
  }, function (_ref6) {
    var fluid = _ref6.fluid;
    return fluid ? '0.75rem' : '5%';
  }, _variables.tablet, function (_ref7) {
    var fluid = _ref7.fluid;
    return fluid ? 'none' : "".concat(_variables.tablet, "px");
  }, function (_ref8) {
    var fluid = _ref8.fluid;
    return fluid ? '0.5rem' : '5%';
  }, function (_ref9) {
    var fluid = _ref9.fluid;
    return fluid ? '0.5rem' : '5%';
  }, _variables.mobile, function (_ref10) {
    var fluid = _ref10.fluid;
    return fluid ? 'none' : "".concat(_variables.mobile, "px");
  }, function (_ref11) {
    var fluid = _ref11.fluid;
    return fluid ? '0.5rem' : '3%';
  }, function (_ref12) {
    var fluid = _ref12.fluid;
    return fluid ? '0.5rem' : '3%';
  });

  c.identifier = "Container-31mm03";
  c.displayName = "Container";
  return c;
}();

Container.displayName = 'Container';
var _default = Container;
exports.default = _default;