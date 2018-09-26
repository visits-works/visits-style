import { css } from '../styled';
import transparentize from 'polished/lib/color/transparentize';
export default function disabledColor(theme) {
  const textColor = transparentize(0.15, theme.textDark);
  const backColor = transparentize(0.55, theme.border);
  return css(["pointer-events:none;box-shadow:none;color:", ";background-color:", ";"], textColor, backColor);
}