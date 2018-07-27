"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styled = _interopRequireWildcard(require("../../styled"));

var _Col = _interopRequireDefault(require("./Col"));

var _variables = require("../../styles/variables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function renderGutter(_ref) {
  var noGutter = _ref.noGutter;

  if (noGutter) {
    return (0, _styled.css)(["margin-right:0;margin-left:0;> ", "{padding-right:0;padding-left:0;}"], _Col.default);
  } else {
    return (0, _styled.css)(["@media (min-width:", "px){margin-left:-0.75rem;margin-right:-0.75rem;margin-top:-0.75rem;&:last-child{margin-bottom:-0.75rem;}&:not(:last-child){margin-bottom:0.75rem;}}@media (min-width:", "px){margin-left:-0.5rem;margin-right:-0.5rem;margin-top:-0.5rem;&:last-child{margin-bottom:-0.5rem;}&:not(:last-child){margin-bottom:0.5rem;}}"], _variables.fullhd, _variables.tablet);
  }
}

var Row = _styled.default.div.withConfig({
  displayName: "Row"
})(["display:flex;max-width:100%;flex-wrap:wrap;", " ", " ", ""], function (_ref2) {
  var vcenter = _ref2.vcenter;
  return vcenter ? 'align-items: center;' : '';
}, function (_ref3) {
  var center = _ref3.center;
  return center ? 'justify-content: center;' : '';
}, renderGutter);

Row.displayName = 'Row'; // Row.defaultProps = {
//   width: null,
//   multiline: false,
//   vcenter: false,
//   noGutter: false,
// };

var _default = Row;
exports.default = _default;