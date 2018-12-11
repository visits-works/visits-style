function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        margin-left: -0.75rem;\n        margin-right: -0.75rem;\n        margin-top: -0.75rem;\n\n        &:last-child {\n          margin-bottom: -0.75rem;\n        }\n\n        &:not(:last-child) {\n          margin-bottom: 0.75rem;\n        }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      margin-left: -0.5rem;\n      margin-right: -0.5rem;\n      margin-top: -0.5rem;\n\n      &:last-child {\n        margin-bottom: -0.5rem;\n      }\n\n      &:not(:last-child) {\n        margin-bottom: 0.5rem;\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { css } from 'styled-components';
import Col from './Col';
import { mediaFullHD, mediaTablet } from '../../utils/media';

function renderGutter(_ref) {
  var noGutter = _ref.noGutter;

  if (noGutter) {
    return css(["margin-right:0;margin-left:0;> ", "{padding-right:0;padding-left:0;}"], Col);
  }

  return css(["", " ", ""], mediaTablet(_templateObject()), mediaFullHD(_templateObject2()));
}

var Row =
/*#__PURE__*/
styled.div.withConfig({
  displayName: "Row",
  componentId: "sc-1syuetm-0"
})(["display:flex;width:100%;flex-wrap:wrap;", " ", " ", ""], function (_ref2) {
  var vcenter = _ref2.vcenter;
  return vcenter ? 'align-items: center;' : '';
}, function (_ref3) {
  var center = _ref3.center;
  return center ? 'justify-content: center;' : '';
}, renderGutter);
Row.displayName = 'Row';
export default Row;