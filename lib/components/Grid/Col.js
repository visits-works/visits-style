"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parcentage = parcentage;
exports.renderSize = renderSize;
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = require("../../styles/variables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  min-height: 1px;\n\n  ", "\n  ", "\n\n  ", "\n\n  @media (max-width: ", "px) {\n    padding: 0.75rem;\n  }\n\n  @media (max-width: ", "px) {\n    padding: 0.5rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function parcentage(value) {
  var volume = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (!value) return 0;
  return Math.ceil(value / 12 * 100 * 100000) / 100000;
}

function renderSize(_ref) {
  var size = _ref.size;

  if (!size || size < 1 || size > 12) {
    return "\n      flex-basis: 0;\n      flex-grow: 1;\n      flex-shrink: 1;\n    ";
  } else {
    var value = parcentage(size);
    return "\n      flex: none;\n      width: ".concat(value, "%;\n    ");
  }
}

var Col = function () {
  var c = _styledComponents.default.div(_templateObject(), function (_ref2) {
    var narrow = _ref2.narrow;
    return narrow ? 'flex: none;' : '';
  }, function (_ref3) {
    var offset = _ref3.offset;
    return offset ? "margin-left: ".concat(parcentage(offset), "%;") : '';
  }, renderSize, _variables.fullhd, _variables.tablet);

  c.identifier = "Col-tc47o2";
  c.displayName = "Col";
  return c;
}();

Col.displayName = 'Col';
var _default = Col;
exports.default = _default;