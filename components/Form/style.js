"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styled = require("../../styled");

var _disabledColor = _interopRequireDefault(require("../../utils/disabledColor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _styled.css)(["font-size:1em;text-align:left;color:inherit;&:disabled,[disabled]{", "}&:readonly{", "}"], function (_ref) {
  var theme = _ref.theme;
  return (0, _disabledColor.default)(theme);
}, function (_ref2) {
  var theme = _ref2.theme;
  return (0, _disabledColor.default)(theme);
});

exports.default = _default;