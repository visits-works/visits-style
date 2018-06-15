"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: ", ";\n  font-size: .875em;\n  font-weight: 400;\n  padding: .25em .5em .25em;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Code = function () {
  var c = _styledComponents.default.code(_templateObject(), function (_ref) {
    var theme = _ref.theme;
    return theme.background;
  }, function (_ref2) {
    var theme = _ref2.theme;
    return theme.danger;
  });

  c.identifier = "Code-907oi";
  c.displayName = "Code";
  return c;
}();

Code.displayName = 'Code';
var _default = Code;
exports.default = _default;