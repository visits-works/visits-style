import styled, { css } from '../../styled';

function getColor(_ref) {
  var theme = _ref.theme,
      color = _ref.color;
  var value = !color || color === 'light' ? theme.background : theme[color];
  return css(["border-color:", ";border-right-color:", ";border-top-color:", ";"], value, theme.border, theme.border);
}

var Spinner = styled.div.withConfig({
  displayName: "Spinner",
  componentId: "sc-1ql2mvr-0"
})(["display:inline-block;width:", ";height:", ";margin:0;padding:0;position:relative;&:after{display:block;top:0;left:0;animation:spin 750ms infinite linear;border:", " solid;border-radius:100%;", " content:\"\";height:100%;width:100%;position:absolute;}@keyframes spin{from{transform:rotate(0deg);}to{transform:rotate(359deg);}}"], function (_ref2) {
  var width = _ref2.width;
  return width ? width : '100%';
}, function (_ref3) {
  var height = _ref3.height;
  return height ? height : '100%';
}, function (_ref4) {
  var borderSize = _ref4.borderSize;
  return borderSize;
}, getColor);
Spinner.displayName = 'Spinner';
Spinner.defaultProps = {
  borderSize: '2px'
};
export default Spinner;