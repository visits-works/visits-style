import { styled,  type ExecutionContext, css } from 'styled-components';
import { HTMLAttributes } from 'react';
import { darken } from 'polished';
import findColorInvert from '../../utils/findColorInvert';
import boxShadow from '../../utils/boxShadow';
import setSize from '../../utils/setSize';
import disabledColor from '../../utils/disabledColor';
import { ColorType, ThemeType, SizeType } from '../../types';

interface ButtonSetColorConfig extends ExecutionContext {
  color?: ColorType;
  outline?: boolean;
  disabled?: boolean;
}

function setColor({ theme, color, outline, disabled }: ButtonSetColorConfig) {
  if (disabled) {
    return disabledColor(theme as ThemeType);
  }
  if (!color) {
    return css`
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
  const invertColor = findColorInvert(theme as ThemeType, target);
  if (outline) {
    return css`
      background-color: transparent;
      border-color: ${target};
      color: ${target};

      &:hover {
        background-color: ${target};
        color: ${invertColor};
      }

      &:active {
        background-color: ${darken(0.1, target)};
      }

      &:focus:not(:active) {
        ${boxShadow('0.1rem', target, 0.5)}
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
      background-color: ${darken(0.1, target)};
    }

    &:focus:not(:active) {
      ${boxShadow('0.1rem', target, 0.5)}
    }
  `;
}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** ボタンの色 */
  color?: ColorType;
  /** ボタンのサイズ */
  size?: SizeType;
  /** 背景が透明なボタンでする */
  outline?: boolean;
  /** 丸いボタンで表示する */
  round?: boolean;
  /** アイコンボタンとしてpaddingを同じにする */
  icon?: boolean;
}

function shouldForwardProp(name: string) {
  return (
    name !== 'color'
    && name !== 'size'
    && name !== 'outline'
    && name !== 'round'
    && name !== 'icon'
  );
}

export default styled.button.withConfig({ shouldForwardProp })<ButtonProps>`
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
  background: transparent;
  border: 1px solid transparent;
  border-radius: ${({ round, theme }) => (round ? '2456189px' : theme.radius)};
  padding: ${({ icon }) => (icon ? '0.375em' : '0.375em 0.75em')};
  line-height: ${({ icon }) => (icon ? 1 : 1.5)};

  ${setColor}
  ${({ size }) => setSize('font-size', size)}
`;
