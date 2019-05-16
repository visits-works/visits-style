import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import findColorInvert from '../../utils/findColorInvert';
import { ColorType } from '../../types';

interface Props extends HTMLAttributes<HTMLDivElement> {
  /** 色指定 */
  color?: ColorType;
  /** borderを非表示する */
  borderless?: boolean;
}

function setColor({ color, theme }: any) {
  if (!color) return {};

  const target = theme[color] || color;
  const invertColor = findColorInvert(theme, target);
  return css`background-color: ${target}; color: ${invertColor};`;
}

export default styled.div<Props>`
  position: relative;
  display: flex;
  flex-direction: column;
  ${({ borderless, theme }) => (borderless ? '' : `border: 1px solid ${theme.border};`)}
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border-radius: ${({ theme }) => theme.radius};
  width: 100%;

  min-width: 0;
  word-wrap: break-word;

  ${setColor}
`;