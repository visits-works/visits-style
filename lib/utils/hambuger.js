"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hamburger;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n    position: relative;\n    height: ", ";\n    width: ", ";\n\n    cursor: pointer;\n    span {\n      background-color: currentColor;\n      display: block;\n      height: 1px;\n      left: calc(50% - 8px);\n      position: absolute;\n      transform-origin: center;\n      transition-duration: 100ms;\n      transition-property: background-color, opacity, transform;\n      transition-timing-function: ease-out;\n      width: 16px;\n\n      &:nth-child(1) {\n        top: calc(50% - 6px);\n      }\n      &:nth-child(2) {\n        top: calc(50% - 1px);\n      }\n      &:nth-child(3) {\n        top: calc(50% + 4px);\n      }\n\n      &:hover {\n        background-color: rgba(black, 0.05);\n      }\n    }\n\n    &.active span {\n      &:nth-child(1) {\n        transform: translateY(5px) rotate(45deg);\n      }\n      &:nth-child(2) {\n        opacity: 0;\n      }\n      &:nth-child(3) {\n        transform: translateY(-5px) rotate(-45deg);\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function hamburger(size) {
  return (0, _styledComponents.css)(_templateObject(), size, size);
}