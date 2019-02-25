import { css } from 'styled-components';
import transparentize from 'polished/lib/color/transparentize';
export default function boxShadow(size, color, amount) {
  var shadowColor = amount ? transparentize(amount, color) : color;
  return css(["box-shadow:0 0 0 ", " ", ";"], size, shadowColor);
}