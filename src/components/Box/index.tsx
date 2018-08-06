import React, { CSSProperties } from 'react';
import styled, { ThemeType, ColorType, StyledComponentClass } from '../../styled';
import findColorInvert from '../../utils/findColorInvert';

interface Props {
  color?: ColorType;
  /** borderを非表示する */
  borderless?: boolean;
  style?: CSSProperties;
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


export default function (props: Props) {
  return (<Box {...props} />);
}
