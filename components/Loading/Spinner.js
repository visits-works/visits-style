import styled, { css } from '../../styled';

function getColor({
  theme,
  color
}) {
  const value = !color || color === 'light' ? theme.background : theme[color];
  return css(["border-color:", ";border-right-color:", ";border-top-color:", ";"], value, theme.border, theme.border);
}

const Spinner = styled.div.withConfig({
  displayName: "Spinner",
  componentId: "sc-1ql2mvr-0"
})(["display:inline-block;width:", ";height:", ";margin:0;padding:0;position:relative;&:after{display:block;top:0;left:0;animation:spin 750ms infinite linear;border:", " solid;border-radius:100%;", " content:\"\";height:100%;width:100%;position:absolute;}@keyframes spin{from{transform:rotate(0deg);}to{transform:rotate(359deg);}}"], ({
  width
}) => width ? width : '100%', ({
  height
}) => height ? height : '100%', ({
  borderSize
}) => borderSize, getColor);
Spinner.displayName = 'Spinner';
Spinner.defaultProps = {
  borderSize: '2px'
};
export default Spinner;