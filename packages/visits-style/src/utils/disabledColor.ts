import { css } from 'styled-components';
import { transparentize } from 'polished';
import { ThemeType, CSSType } from '../types';

export default function disabledColor(theme: ThemeType): CSSType {
  const textColor = transparentize(0.15, theme.textDark);
  const backColor = transparentize(0.55, theme.border);
  return css`
    pointer-events: none;
    box-shadow: none;
    color: ${textColor};
    background-color: ${backColor};
  `;
}
