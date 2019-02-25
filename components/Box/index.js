import styled, { css } from 'styled-components';
import findColorInvert from '../../utils/findColorInvert';

function setColor(_ref) {
  var color = _ref.color,
      theme = _ref.theme;
  if (!color) return {};
  var target = theme[color] || color;
  var invertColor = findColorInvert(theme, target);
  return css(["background-color:", ";color:", ";"], target, invertColor);
}

var Box =
/*#__PURE__*/
styled.div.withConfig({
  displayName: "Box",
  componentId: "v21x8u-0"
})(["position:relative;display:flex;flex-direction:column;", " box-shadow:0 1px 2px 0 rgba(0,0,0,0.05);border-radius:3px;width:100%;min-width:0;word-wrap:break-word;", ""], function (_ref2) {
  var borderless = _ref2.borderless,
      theme = _ref2.theme;
  return borderless ? "" : "border: 1px solid ".concat(theme.border, ";");
}, setColor);
Box.displayName = 'Box';
export default Box;