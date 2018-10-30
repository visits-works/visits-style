import { css } from '../styled';
import transparentize from 'polished/lib/color/transparentize';
import { ThemeType } from '../types';

export default function disabledColor(theme: ThemeType) {
  const textColor = transparentize(0.15, theme.textDark);
  const backColor = transparentize(0.55, theme.border);
  return css`
    pointer-events: none;
    box-shadow: none;
    color: ${textColor};
    background-color: ${backColor};
  `;
}
