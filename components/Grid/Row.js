function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n          margin-left: -0.75rem;\n          margin-right: -0.75rem;\n          margin-top: -0.75rem;\n\n          &:last-child {\n            margin-bottom: -0.75rem;\n          }\n\n          &:not(:last-child) {\n            margin-bottom: 0.75rem;\n          }\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n        margin-left: -0.5rem;\n        margin-right: -0.5rem;\n        margin-top: -0.5rem;\n\n        &:last-child {\n          margin-bottom: -0.5rem;\n        }\n\n        &:not(:last-child) {\n          margin-bottom: 0.5rem;\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { css } from '../../styled';
import Col from './Col';
import { mediaFullHD, mediaTablet } from '../../utils/media';

function renderGutter(_ref) {
  var noGutter = _ref.noGutter;

  if (noGutter) {
    return css(["margin-right:0;margin-left:0;> ", "{padding-right:0;padding-left:0;}"], Col);
  } else {
    return css(["", " ", ""], mediaTablet(_templateObject()), mediaFullHD(_templateObject2()));
  }
}

var Row = styled.div.withConfig({
  displayName: "Row",
  componentId: "sc-1syuetm-0"
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

export default Row;