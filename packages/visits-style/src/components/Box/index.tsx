import { HTMLAttributes } from 'react';
import styled from 'styled-components/macro';
import findColorInvert from '../../utils/findColorInvert';
import { ColorType } from '../../types';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** 色指定 */
  color?: ColorType;
  /** borderを非表示する */
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

    const target = theme[color] || color;
    const invertColor = findColorInvert(theme, target);
    return `background-color: ${target}; color: ${invertColor};`;
  }}
`;
Box.displayName = 'Box';

export default Box;
