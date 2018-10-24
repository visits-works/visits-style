import styled, { css } from '../../styled';
import darken from 'polished/lib/color/darken';
import findColorInvert from '../../utils/findColorInvert';
import boxShadow from '../../utils/boxShadow';
import setSize from '../../utils/setSize';
import disabledColor from '../../utils/disabledColor';

function setColor(_ref) {
  var theme = _ref.theme,
      color = _ref.color,
      outline = _ref.outline,
      disabled = _ref.disabled;

  if (disabled) {
    return disabledColor(theme);
  }

  if (!color) {
    return css(["background-color:", ";border-color:", ";color:", ";&:hover{border-color:", ";}&:active{border-color:", ";}"], theme.white, theme.border, theme.text, theme.borderHover, theme.borderActive);
  }

  if (color === 'text') {
    return css(["background-color:transparent;border-color:transparent;color:", ";&:hover{text-decoration:underline;}"], theme.text);
  }

  var target = color === 'light' ? theme.color.greyLight : theme[color];
  var invertColor = findColorInvert(target);

  if (outline) {
    return css(["background-color:transparent;border-color:", ";color:", ";&:hover{background-color:", ";color:", ";}&:focus{", "}"], target, target, target, invertColor, boxShadow('0.2rem', target, 0.2));
  }

  return css(["background-color:", ";border-color:", ";border-color:transparent;color:", ";box-shadow:none;&:hover{background-color:", ";}&:active{background-color:", ";}&:focus{", "}"], target, target, invertColor, darken(0.025, target), darken(0.05, target), boxShadow('0.2rem', target, 0.2));
}

var Button = styled.button.withConfig({
  displayName: "Button",
  componentId: "rhklzy-0"
})(["position:relative;outline:none;appearance:none;box-sizing:border-box;display:inline-flex;text-align:center;white-space:nowrap;cursor:pointer;justify-content:center;border:1px solid transparent;border-radius:4px;height:2.25em;padding:0.375em 0.75em;transition-property:background-color,color,box-shadow;transition-duration:0.15s;transition-timing-function:ease-in-out;", " ", " ", " &:not(:last-child){margin-right:0.5rem;margin-bottom:0.5rem;}"], setColor, function (_ref2) {
  var size = _ref2.size;
  return setSize('font-size', size);
}, function (_ref3) {
  var full = _ref3.full;
  return full ? 'width: 100%;' : '';
});
Button.displayName = 'Button';
export default Button;