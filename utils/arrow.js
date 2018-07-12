"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Arrow;

function Arrow(color, direction) {
  return "\n    position: absolute;\n    border: 3px solid ".concat(color, ";\n    border-radius: 2px;\n    border-right: 0;\n    border-top: 0;\n    content: \" \";\n    display: block;\n    height: 0.625em;\n    margin-top: -0.625em;\n    pointer-events: none;\n    top: 50%;\n    transform: rotate(-45deg);\n    transform-origin: center;\n    width: 0.625em;\n  ");
}