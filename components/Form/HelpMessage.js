"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HelpMessage;

var _react = _interopRequireDefault(require("react"));

var _styled = _interopRequireDefault(require("../../styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = _styled.default.span.withConfig({
  displayName: "HelpMessage__Message"
})(["font-size:0.8rem;", ";"], function (_ref) {
  var error = _ref.error,
      theme = _ref.theme;
  return error ? "color: ".concat(theme.danger, ";") : "color: ".concat(theme.textLight, ";");
});

function HelpMessage(help, error) {
  if (error) {
    return _react.default.createElement(Message, {
      error: true
    }, error);
  }

  if (help) {
    return _react.default.createElement(Message, null, help);
  }
}