"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setSize;

function setSize(name) {
  return function size(_ref) {
    var size = _ref.size;

    switch (size) {
      case 'small':
        return "".concat(name, ": 0.75rem;");

      case 'medium':
        return "".concat(name, ": 1.25rem;");

      case 'large':
        return "".concat(name, ": 1.5rem;");

      default:
        return "".concat(name, ": 1rem;");
    }
  };
}