import styled, { css } from '../../styled';
import darken from 'polished/lib/color/darken';
import findColorInvert from '../../utils/findColorInvert';
import boxShadow from '../../utils/boxShadow';
import setSize from '../../utils/setSize';
import disabledColor from '../../utils/disabledColor';

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
  if (color === 'text') {
    return css`
      background-color: transparent;
      border-color: transparent;
      color: ${theme.text};

      &:hover{
        text-decoration: underline;
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

      &:focus {
        ${boxShadow('0.2rem', target, 0.2)}
      }
    `;
  }

  return css`
    background-color: ${target};
    border-color: ${target};
    border-color: transparent;
    color: ${invertColor};
    box-shadow: none;

    &:hover {
      background-color: ${darken(0.025, target)};
    }

    &:active {
      background-color: ${darken(0.05, target)};
    }

    &:focus {
      ${boxShadow('0.2rem', target, 0.2)}
    }
  `;
}

interface ButtonProps {
  /** ボタンの色 */
  color?: ColorType;
  /** ボタンのサイズ */
  size?: SizeType;
  /** 背景が透明なボタンでする */
  outline?: boolean;
  /** 全体幅のボタンで設定 */
  full?: boolean;

  disabled?: boolean;
}

const Button = styled.button<ButtonProps>`
  position: relative;
  outline: none;
  appearance: none;
  box-sizing: border-box;
  display: inline-flex;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 4px;
  height: 2.25em;
  padding: 0.375em 0.75em;

  transition-property: background-color, color, box-shadow;
  transition-duration: 150ms;
  transition-timing-function: ease-in-out;

  ${setColor}
  ${({ size }) => setSize('font-size', size)}
  ${({ full }) => full ? 'width: 100%;' : ''}

  &:not(:last-child) {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;
Button.displayName = 'Button';

export default Button;
