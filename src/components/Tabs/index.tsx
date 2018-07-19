import styled, { css, StyledComponentClass } from 'styled-components';
import setAlign from '../../utils/setAlign';
import { ThemeType, ColorType } from '../../types';
import { LiHTMLAttributes } from '../../../node_modules/@types/react';

function setColor({ theme, color }: { theme: ThemeType, color?: ColorType }) {
  const target = (!color || color === 'light') ? theme.background : theme[color];

  return css`
    &.active {
      border-color: ${target};
    }
  `;
}

interface Props {
  /**  */
  color?: ColorType;
  align?: 'left' | 'right' | 'center';

  children: HTMLLIElement[];
}

const Tabs = styled.ul<Props>`
  display: flex;
  align-items: center;
  justify-content: ${setAlign};

  li {
    display: block;
    ${({ align }) => align ? '' : 'flex-grow: 1;'}
  }

  a {
    display: flex;
    color: ${({ theme }) => theme.text};
    justify-content: center;
    align-items: center;
    vertical-align: top;
    padding: 0.375em 0.75em;
    border-bottom: 2px solid transparent;

    transition-property: background-color;
    transition-duration: 150ms;
    transition-timing-function: ease-in-out;

    &:hover {
      background-color: rgba(0, 0, 0, 0.03);
    }

    ${setColor}
  }
`;

export default Tabs;
