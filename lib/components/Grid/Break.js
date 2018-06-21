"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Break = _styledComponents.default.div.withConfig({
  displayName: "Break"
})(["width:100%;height:0;"]);

Break.displayName = 'Break';
var _default = Break;
exports.default = _default;