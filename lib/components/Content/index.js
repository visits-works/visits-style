"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Pre", {
  enumerable: true,
  get: function get() {
    return _Pre.default;
  }
});
Object.defineProperty(exports, "Code", {
  enumerable: true,
  get: function get() {
    return _Code.default;
  }
});
Object.defineProperty(exports, "H1", {
  enumerable: true,
  get: function get() {
    return _H.default;
  }
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Pre = _interopRequireDefault(require("./Pre"));

var _Code = _interopRequireDefault(require("./Code"));

var _H = _interopRequireDefault(require("./H1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  li + li {\n    margin-top: 0.25em;\n  }\n\n  p,\n  dl,\n  ol,\n  ul,\n  blockquote,\n  pre,\n  table {\n    &:not(:last-child) {\n      margin-bottom: 1em;\n    }\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-weight: 600;\n    line-height: 1.125;\n  }\n\n  h1 {\n    font-size: 2em;\n    margin-bottom: 0.5em;\n    padding-left: 1rem;\n\n    border-left: 1rem solid;\n    border-bottom: 1px solid;\n    border-color: ", ";\n  }\n\n  h2 {\n    font-size: 1.75em;\n    margin-bottom: 0.5714em;\n\n    &:not(:first-child) {\n      margin-top: 1.1428em;\n    }\n  }\n\n  h3 {\n    font-size: 1.5em;\n    margin-bottom: 0.6666em;\n\n    &:not(:first-child) {\n      margin-top: 1.3333em;\n    }\n  }\n\n  h4 {\n    font-size: 1.25em;\n    margin-bottom: 0.8em;\n  }\n\n  h5 {\n    font-size: 1.125em;\n    margin-bottom: 0.8888em;\n  }\n\n  h6 {\n    font-size: 1em;\n    margin-bottom: 1em;\n  }\n\n  ol {\n    list-style: decimal outside;\n    margin-left: 2em;\n    margin-top: 1em;\n  }\n\n  ul {\n    list-style: disc outside;\n    margin-left: 2em;\n    margin-top: 1em;\n    ul {\n      list-style-type: circle;\n      margin-top: 0.5em;\n      ul {\n        list-style-type: square;\n      }\n    }\n  }\n\n  dd {\n    margin-left: 2em;\n  }\n\n  table {\n    width: 100%;\n\n    td, th {\n      border: 1px solid ", ";\n      border-width: 0 0 1px;\n      padding: 0.5em 0.75em;\n      vertical-align: top;\n    }\n\n    th {\n      color: ", ";\n      text-align: left;\n    }\n\n    thead {\n      td, th {\n        border-width: 0 0 2px;\n        color: ", ";\n      }\n    }\n\n    tfoot {\n      td, th {\n        border-width: 2px 0 0;\n        color: ", ";\n      }\n    }\n\n    tbody > tr:last-child{\n      td, th {\n        border-bottom-width: 0;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Content = function () {
  var c = _styledComponents.default.div(_templateObject(), function (_ref) {
    var theme = _ref.theme;
    return theme.border;
  }, function (_ref2) {
    var theme = _ref2.theme;
    return theme.border;
  }, function (_ref3) {
    var theme = _ref3.theme;
    return theme.text;
  }, function (_ref4) {
    var theme = _ref4.theme;
    return theme.text;
  }, function (_ref5) {
    var theme = _ref5.theme;
    return theme.text;
  });

  c.identifier = "Content-1hkm749";
  c.displayName = "Content";
  return c;
}();

Content.displayName = 'Content';
var _default = Content;
exports.default = _default;