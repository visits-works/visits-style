function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n    padding: 0.25rem;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n    padding: 0.5rem;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n        width: ", "%;\n        ", "\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { css } from '../../styled';
import { mediaMobile, mediaTablet } from '../../utils/media';

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
    return css(["flex:none;width:", "%;", " ", ""], value, offset ? "margin-left: " + offVal + "%;" : '', auto ? mediaMobile(_templateObject(), value > 33 ? 100 : value * 3, offset ? "margin-left: 0;" : '') : '');
  }
}

var Col = styled.div.withConfig({
  displayName: "Col",
  componentId: "sc-1q9tfma-0"
})(["display:block;min-height:1px;max-width:100%;", " ", " ", " padding:0.75rem;", " ", ""], function (_ref2) {
  var narrow = _ref2.narrow;
  return narrow ? 'flex: none;' : '';
}, function (_ref3) {
  var offset = _ref3.offset;
  return offset ? "margin-left: " + parcentage(offset) + "%;" : '';
}, renderSize, mediaTablet(_templateObject2()), mediaMobile(_templateObject3()));
Col.displayName = 'Col';
export default Col;