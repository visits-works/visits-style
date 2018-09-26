"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styled = _interopRequireWildcard(require("../../styled"));

var _media = require("../../utils/media");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    padding: 0.5rem;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        width: ", "%;\n        ", "\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function parcentage(value) {
  if (!value) return 0;
  if (value >= 12) return 100;
  return Math.ceil(value / 12 * 100 * 100000) / 100000;
}

function renderSize(_ref) {
  var size = _ref.size,
      narrow = _ref.narrow,
      auto = _ref.auto,
      offset = _ref.offset;
  if (narrow) return null;

  if (!size || size < 1 || size > 12) {
    return "\n      flex-basis: 0;\n      flex-grow: 1;\n      flex-shrink: 1;\n    ";
  } else {
    var value = parcentage(size);
    var offVal = offset ? parcentage(offset) : 0;
    return (0, _styled.css)(["flex:none;width:", "%;", " ", ""], value, offset ? "margin-left: ".concat(offVal, "%;") : '', auto ? (0, _media.mediaMobile)(_templateObject(), value > 33 ? 100 : value * 3, offset ? "margin-left: 0;" : '') : '');
  }
}

var Col = _styled.default.div.withConfig({
  displayName: "Col"
})(["display:block;min-height:1px;max-width:100%;", " ", " ", " padding:0.75rem;", ""], function (_ref2) {
  var narrow = _ref2.narrow;
  return narrow ? 'flex: none;' : '';
}, function (_ref3) {
  var offset = _ref3.offset;
  return offset ? "margin-left: ".concat(parcentage(offset), "%;") : '';
}, renderSize, (0, _media.mediaMobile)(_templateObject2()));

Col.displayName = 'Col';
var _default = Col;
exports.default = _default;