import styled, { css } from 'styled-components';
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
    return css(["width:auto;max-width:auto;"]);
  }

  var value = parcentage(size);
  var offVal = offset ? parcentage(offset) : 0;
  var autoSize = value > 33 ? 100 : value * 3;
  return css(["width:", "%;max-width:", "%;", " ", "{width:", "%;max-width:", "%;", "}"], value, value, offset ? "margin-left: ".concat(offVal, "%;") : {}, mediaMobile, autoSize, autoSize, offset ? "margin-left: 0;" : {});
}

var Col =
/*#__PURE__*/
styled.div.withConfig({
  displayName: "Col",
  componentId: "sc-1q9tfma-0"
})(["display:block;min-height:1px;", " ", " ", " padding:0.75rem;", "{padding:0.5rem;}"], function (_ref2) {
  var narrow = _ref2.narrow;
  return narrow ? 'flex: none;' : {};
}, function (_ref3) {
  var offset = _ref3.offset;
  return offset ? "margin-left: ".concat(parcentage(offset), "%;") : {};
}, renderSize, mediaTablet);
Col.displayName = 'Col';
export default Col;