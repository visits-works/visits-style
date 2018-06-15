"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Progress = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  border: none;\n  border-radius: 290486px;\n  display: block;\n  height: 1rem;\n  overflow: hidden;\n  padding: 0;\n  width: 100%;\n  color: ", ";\n\n  &::-webkit-progress-bar {\n    background-color: ", ";\n  }\n\n  &::-webkit-progress-value {\n    background-color: ", ";\n    transition: width 400ms linear;\n  }\n\n  &::-moz-progress-bar {\n    background-color: ", ";\n    transition: width 400ms linear;\n  }\n\n  &::-ms-fill {\n    border: 0;\n    background-color: ", ";\n    transition: width 400ms linear;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Progress = function () {
  var c = _styledComponents.default.progress(_templateObject(), function (props) {
    return props.theme.grey;
  }, function (props) {
    return props.theme.grey;
  }, function (props) {
    return props.theme.primary;
  }, function (props) {
    return props.theme.primary;
  }, function (props) {
    return props.theme.primary;
  });

  c.identifier = "Progress-2olamd";
  c.displayName = "Progress";
  return c;
}();

exports.Progress = Progress;
Progress.displayName = 'Progress';
var _default = Progress;
exports.default = _default;