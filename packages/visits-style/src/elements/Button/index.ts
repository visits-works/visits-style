import styled, { css } from 'styled-components';
import { HTMLAttributes } from 'react';
import { darken } from 'polished';
import findColorInvert from '../../utils/findColorInvert';
import boxShadow from '../../utils/boxShadow';
import setSize from '../../utils/setSize';
import disabledColor from '../../utils/disabledColor';
import { ColorType, ThemeType, SizeType } from '../../types';

interface Props {
  theme: ThemeType;
  color?: ColorType;
  outline?: boolean;
  disabled?: boolean;
}

function setColor({ theme, color, outline, disabled }: Props) {
  if (disabled) {
    return disabledColor(theme);
  }
  if (!color) {
    return css`
      background-color: ${theme.white};
      border-color: ${theme.border};
      color: ${theme.text};

      &:hover {
        border-color: ${theme.borderHover};
      }

      &:active {
        border-color: ${theme.borderActive};
      }
    `;
  }
  const target = theme[color] || color;
  const invertColor = findColorInvert(theme, target);
  if (outline) {
    return css`
      background-color: transparent;
      border-color: ${target};
      color: ${target};

      &:hover {
        background-color: ${target};
        color: ${invertColor};
      }

      &:focus:not(:active) {
        ${boxShadow('0.2rem', target, 0.2)}
      }
    `;
  }

  return css`
    background-color: ${target};
    border-color: transparent;
    color: ${invertColor};
    box-shadow: none;

    &:hover {
      color: ${invertColor};
      background-color: ${darken(0.05, target)};
    }

    &:active {
      background-color: ${darken(0.085, target)};
    }

    &:focus:not(:active) {
      ${boxShadow('0.2rem', target, 0.2)}
    }
  `;
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** ボタンの色 */
  color?: ColorType;
  /** ボタンのサイズ */
  size?: SizeType;
  /** 背景が透明なボタンでする */
  outline?: boolean;
}

export default styled.button<ButtonProps>`
  position: relative;
  outline: none;
  appearance: none;
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  justify-content: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radius};
  padding: 0.375em 0.75em;
  line-height: 1.5;

  transition-property: background-color, color, box-shadow, transform;
  transition-duration: 150ms;
  transition-timing-function: ease-in-out;

  &:active {
    transform: scale(0.95);
  }

  ${setColor}
  ${({ size }) => setSize('font-size', size)}
`;