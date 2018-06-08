// @flow
import type { ComponentType } from 'react';

import { string, node } from 'prop-types';
import styled, { css } from 'styled-components';
import { darken, rgba } from 'polished';
import { findColorInvert } from '../../utils';

type Props = {
  color?: 'white' | 'light' | 'dark' | 'black' | 'primary' | 'link' | 'info' | 'success' | 'warning' | 'danger',
  size?: 'small' | 'medium' | 'large',
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
  } else {
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
          box-shadow: 0 0 0 .2rem ${rgba(target, 0.5)};
        }
      `;
    } else {
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
          box-shadow: 0 0 0 .2rem ${rgba(target, 0.5)};
        }
      `;
    }
  }
}

const Button: ComponentType<Props>  = styled.button`
  outline: none;
  appearance: none;
  display: inline-flex;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 4px;
  height: 2.25em;
  padding: ${({ color }) => color ? '0.375em 0.75em' : 'calc(0.375em - 1px) 0.75em'};

  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

  ${setColor}

  &:disabled {
    pointer-events: none;
    box-shadow: none;
    opacity: 0.5;
  }
`;

Button.displayName = 'Button';

export default Button;
