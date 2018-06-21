"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Box = _styledComponents.default.div.withConfig({
  displayName: "Box"
})(["position:relative;display:flex;flex-direction:column;border:1px solid ", ";width:100%;min-width:0;word-wrap:break-word;"], function (_ref) {
  var theme = _ref.theme;
  return theme.border;
});

Box.displayName = 'Box';
var _default = Box;
exports.default = _default;