import styled from '../../styled';
import findColorInvert from '../../utils/findColorInvert';
var Box = styled.div.withConfig({
  displayName: "Box",
  componentId: "v21x8u-0"
})(["position:relative;display:flex;flex-direction:column;", " box-shadow:0 1px 2px 0 rgba(0,0,0,0.05);border-radius:3px;width:100%;min-width:0;word-wrap:break-word;", ""], function (_ref) {
  var borderless = _ref.borderless,
      theme = _ref.theme;
  return borderless ? "" : "border: 1px solid " + theme.border + ";";
}, function (_ref2) {
  var color = _ref2.color,
      theme = _ref2.theme;
  if (!color) return '';
  var target = theme[color] || color;
  var invertColor = findColorInvert(theme, target);
  return "background-color: " + target + "; color: " + invertColor + ";";
});
Box.displayName = 'Box';
export default Box;