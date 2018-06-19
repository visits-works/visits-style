// @flow
import type { ComponentType } from 'react';
import Types from 'prop-types';
import styled, { css } from 'styled-components';
import { darken, rgba } from 'polished';
import { findColorInvert, boxShadow } from '../../utils';

type Props = {
  color?: Colors,
  size?: Sizes,
  outline?: boolean,
  onClick: () => void,
  theme: Theme,
}

function setColor({ theme, color, outline }: Props) {
  if (!color) {
    return css`
      background-color: ${theme.white};
      border-color: ${theme.greyLighter};
      color: ${theme.greyDarker};

      &:hover{
        border-color: ${theme.greyLight};
      }

      &:active{
        border-color: ${theme.greyDarker};
      }
    `;
  } else if (color === 'text') {
    const target = rgba(theme.greyLighter, 0.5);
    return css`
      background-color: transparent;
      border-color: transparent;
      color: ${theme.greyDarker};

      &:hover{
        background-color: ${target};
      }

      &:active{
        background-color: ${target};
      }

      &:focus {
        ${boxShadow('0.2rem', theme.greyLighter)}
      }
    `;
  }

  const target = color === 'light' ? theme.greyLight : theme[color];
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

function getSize({ size }: Props) {
  switch(size) {
    case 'small':
      return 'font-size: 0.75rem;';
    case 'medium':
      return 'font-size: 1.25rem;';
    case 'large':
      return 'font-size: 1.5rem;';
    default:
      return '';
  }
}

const Button: ComponentType<Props> = styled.button`
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
  padding: ${({ color }) => (color ? '0.375em 0.75em' : 'calc(0.375em - 1px) 0.75em')};

  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

  ${setColor}
  ${getSize}

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
Button.propTypes = {
  color: Types.oneOf(['white', 'light', 'dark', 'black', 'text', 'primary', 'link', 'info', 'success', 'warning', 'danger']),
  size: Types.oneOf(['small', 'medium', 'large']),
  outline: Types.bool,
  onClick: Types.func,
};

export default Button;
