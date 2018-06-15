"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Col = _interopRequireDefault(require("./Col"));

var _variables = require("../../styles/variables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  max-width: 100%;\n  flex-wrap: wrap;\n\n  ", "\n  ", "\n\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      @media (max-width: ", "px) {\n        margin-left: -0.75rem;\n        margin-right: -0.75rem;\n        margin-top: -0.75rem;\n\n        &:last-child {\n          margin-bottom: -0.75rem;\n        }\n\n        &:not(:last-child) {\n          margin-bottom: 0.75rem;\n        }\n      }\n\n      @media (max-width: ", "px) {\n        margin-left: -0.5rem;\n        margin-right: -0.5rem;\n        margin-top: -0.5rem;\n\n        &:last-child {\n          margin-bottom: -0.5rem;\n        }\n\n        &:not(:last-child) {\n          margin-bottom: 0.5rem;\n        }\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      margin-right: 0;\n      margin-left: 0;\n\n      > ", " {\n        padding-right: 0;\n        padding-left: 0;\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function renderGutter(_ref) {
  var noGutter = _ref.noGutter;

  if (noGutter) {
    return (0, _styledComponents.css)(_templateObject(), _Col.default);
  } else {
    return (0, _styledComponents.css)(_templateObject2(), _variables.fullhd, _variables.tablet);
  }
}

var Row = function () {
  var c = _styledComponents.default.div(_templateObject3(), function (_ref2) {
    var vcenter = _ref2.vcenter;
    return vcenter ? 'align-items: center;' : '';
  }, function (_ref3) {
    var center = _ref3.center;
    return center ? 'justify-content: center;' : '';
  }, renderGutter);

  c.identifier = "Row-rkcla9";
  c.displayName = "Row";
  return c;
}();

Row.displayName = 'Row';
Row.defaultProps = {
  vcenter: false,
  noGutter: false
};
var _default = Row;
exports.default = _default;