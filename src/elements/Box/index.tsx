import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import findColorInvert from '../../utils/findColorInvert';
import { ColorType } from '../../types';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** 色指定 */
  color?: ColorType;
  /** borderを非表示する */
  borderless?: boolean;
}

export default styled.div<Props>`
  position: relative;
  display: flex;
  flex-direction: column;
  border: ${({ borderless, theme }) => (borderless ? 'none' : `1px solid ${theme.border}`)};
  border-radius: ${({ theme }) => theme.radius};
  width: 100%;

  min-width: 0;
  word-wrap: break-word;

  ${(({ color, theme }) => {
    if (!color) return undefined;
    const target = theme[color] || color;
    const invertColor = findColorInvert(theme, target);
    return {
      backgroundColor: target,
      color: invertColor,
    };
  })}
`;
