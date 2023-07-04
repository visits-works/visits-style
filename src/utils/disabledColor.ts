import { css } from 'styled-components';
import { transparentize } from 'polished';
import { ThemeType } from '../types';

export default function disabledColor(theme: ThemeType) {
  const textColor = transparentize(0.15, theme.textDark || '#000');
  const backColor = transparentize(0.55, theme.border || '#EEE');
  return css`
    pointer-events: none;
    box-shadow: none;
    color: ${textColor};
    background-color: ${backColor};
  `;
}
