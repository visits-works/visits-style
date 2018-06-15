"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 2em;\n  margin-bottom: 0.5em;\n  padding-left: 1rem;\n\n  border-left: 1rem solid;\n  border-bottom: 1px solid;\n  border-color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var H1 = function () {
  var c = _styledComponents.default.h1(_templateObject(), function (_ref) {
    var theme = _ref.theme;
    return theme.border;
  });

  c.identifier = "H1-1dpb47c";
  c.displayName = "H1";
  return c;
}();

H1.displayName = 'H1';
var _default = H1;
exports.default = _default;