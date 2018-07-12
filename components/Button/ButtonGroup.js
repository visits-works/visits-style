"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonGroup = _styledComponents.default.div.withConfig({
  displayName: "ButtonGroup"
})(["display:inline-block;&:not(:last-child){margin-right:0.5rem;}", "{margin:0;border-radius:0;&:first-child{border-top-left-radius:4px;border-bottom-left-radius:4px;}&:last-child{border-top-right-radius:4px;border-bottom-right-radius:4px;}}"], _.default);

ButtonGroup.displayName = 'ButtonGroup';
var _default = ButtonGroup;
exports.default = _default;