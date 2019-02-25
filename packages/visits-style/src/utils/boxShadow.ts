import { css } from 'styled-components/macro';
import transparentize from 'polished/lib/color/transparentize';

export default function boxShadow(size: string, color: string, amount?: number) {
  const shadowColor = amount ? transparentize(amount, color) : color;
  return css`box-shadow: 0 0 0 ${size} ${shadowColor};`;
}
