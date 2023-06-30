import { HTMLAttributes } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { ColorType, ThemeType } from '../../types';

interface Props extends HTMLAttributes<HTMLDivElement>{
  /** 色の指定 */
  color?: ColorType;
  /** サイズ */
  size?: string;
  /** spinnerの太さ */
  borderSize?: string;
}

function getColor({ theme, color }: { theme: ThemeType, color?: ColorType }) {
  const value = (!color || color === 'light') ? theme.background : theme[color];

  return css`
    border-color: ${value};
    border-right-color: ${theme.border};
    border-top-color: ${theme.border};
  `;
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

const Spinner = styled.div<Props>`
  display: inline-block;
  width: ${({ size }) => (size || '100%')};
  height: ${({ size }) => (size || '100%')};
  margin: 0;
  padding: 0;
  position: relative;

  &:after {
    display: block;
    top: 0;
    left: 0;
    animation: ${spin} 750ms infinite linear;
    border: ${({ borderSize }) => borderSize} solid;
    border-radius: 100%;
    ${getColor}
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;
Spinner.defaultProps = {
  borderSize: '2px',
};

export default Spinner;
