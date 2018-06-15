"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _utils = require("../../utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  outline: none;\n  -webkit-appearance: none;\n  display: inline-flex;\n  text-align: center;\n  white-space: nowrap;\n  cursor: pointer;\n  justify-content: center;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  height: 2.25em;\n  padding: ", ";\n\n  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n\n  ", "\n  ", "\n\n  &:disabled {\n    pointer-events: none;\n    box-shadow: none;\n    opacity: 0.5;\n  }\n\n  &:not(:last-child) {\n    margin-right: 0.5rem;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border-color: transparent;\n    color: ", ";\n    box-shadow: none;\n\n    &:hover {\n      background-color: ", ";\n    }\n\n    &:active {\n      background-color: ", ";\n    }\n\n    &:focus {\n      box-shadow: 0 0 0 .2rem ", ";\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      background-color: transparent;\n      border-color: ", ";\n      color: ", ";\n\n      &:hover {\n        background-color: ", ";\n        color: ", ";\n      }\n\n      &:focus {\n        box-shadow: 0 0 0 .2rem ", ";\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      background-color: transparent;\n      border-color: transparent;\n      color: ", ";\n\n      &:hover{\n        background-color: ", ";\n      }\n\n      &:active{\n        background-color: ", ";\n      }\n\n      &:focus {\n        box-shadow: 0 0 0 .2rem ", ";\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      background-color: ", ";\n      border-color: ", ";\n      color: ", ";\n\n      &:hover{\n        border-color: ", ";\n      }\n\n      &:active{\n        border-color: ", ";\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function setColor(_ref) {
  var theme = _ref.theme,
      color = _ref.color,
      outline = _ref.outline;

  if (!color) {
    return (0, _styledComponents.css)(_templateObject(), theme.white, theme.greyLighter, theme.greyDarker, theme.greyLight, theme.greyDarker);
  } else if (color === 'text') {
    var _target = (0, _polished.rgba)(theme.greyLighter, 0.5);

    return (0, _styledComponents.css)(_templateObject2(), theme.greyDarker, _target, _target, _target);
  }

  var target = color === 'light' ? theme.greyLight : theme[color];
  var invertColor = (0, _utils.findColorInvert)(target);

  if (outline) {
    return (0, _styledComponents.css)(_templateObject3(), target, target, target, invertColor, (0, _polished.rgba)(target, 0.5));
  }

  return (0, _styledComponents.css)(_templateObject4(), target, invertColor, (0, _polished.darken)(0.025, target), (0, _polished.darken)(0.05, target), (0, _polished.rgba)(target, 0.5));
}

function getSize(_ref2) {
  var size = _ref2.size;

  switch (size) {
    case 'small':
      return 'font-size: 0.75rem;';

    case 'medium':
      return 'font-size: 1.25rem;';

    case 'large':
      return 'font-size: 1.5rem;';

    default:
      return '';
  }
}

var Button = function () {
  var c = _styledComponents.default.button(_templateObject5(), function (_ref3) {
    var color = _ref3.color;
    return color ? '0.375em 0.75em' : 'calc(0.375em - 1px) 0.75em';
  }, setColor, getSize);

  c.identifier = "Button-ao0rvj";
  c.displayName = "Button";
  return c;
}();

Button.displayName = 'Button';
var _default = Button;
exports.default = _default;