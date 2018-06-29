// @flow
import styled, { css } from 'styled-components';
import { darken, rgba } from 'polished';
import findColorInvert from '../../utils/findColorInvert';
import boxShadow from '../../utils/boxShadow';
import setSize from '../../utils/setSize';

type ButtonProps = {
  color?: ColorType,
  size?: SizeType,
  outline?: boolean,
  onClick?: () => void,
  theme: ThemeType,
}

function setColor({ theme, color, outline }: ButtonProps) {
  if (!color) {
    return css`
      background-color: ${theme.white};
      border-color: ${theme.border};
      color: ${theme.text};

      &:hover{
        border-color: ${theme.borderHover};
      }

      &:active{
        border-color: ${theme.borderActive};
      }
    `;
  } else if (color === 'text') {
    const target = rgba(theme.border, 0.5);
    return css`
      background-color: transparent;
      border-color: transparent;
      color: ${theme.text};

      &:hover{
        background-color: ${target};
      }

      &:active{
        background-color: ${target};
      }

      &:focus {
        ${boxShadow('0.2rem', theme.border)}
      }
    `;
  }

  const target = color === 'light' ? theme.color.greyLight : theme[color];
  const invertColor = findColorInvert(target);
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
        ${boxShadow('0.2rem', target)}
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
      ${boxShadow('0.2rem', target)}
    }
  `;
}

const Button = styled.button`
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
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;

  ${setColor}
  ${setSize('font-size')}

  &:disabled {
    pointer-events: none;
    box-shadow: none;
    opacity: 0.5;
  }

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;
Button.displayName = 'Button';
Button.defaultProps = {
  color: null,
  size: null,
  outline: false,
  onClick: null,
};

export default Button;
