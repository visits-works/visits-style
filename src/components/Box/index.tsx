import * as React from 'react';
import styled, { StyledComponentClass } from 'styled-components';
import findColorInvert from '../../utils/findColorInvert';

interface Props {
  color?: ColorType;
  borderless?: boolean;
  style?: any;
}

const Box = styled.div<Props>`
  position: relative;
  display: flex;
  flex-direction: column;
  ${({ borderless, theme }) => borderless ? `` : `border: 1px solid ${theme.border};`}
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  width: 100%;

  min-width: 0;
  word-wrap: break-word;

  ${({ color, theme }) => {
    if (!color) return '';

    const target = color === 'light' ? theme.color.greyLight : theme[color];
    const invertColor = findColorInvert(target);
    return `background-color: ${target}; color: ${invertColor};`;
  }}
`;
Box.displayName = 'Box';


export default Box;
