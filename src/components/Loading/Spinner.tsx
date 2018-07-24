import * as React from 'react';
import styled, { css, StyledComponentClass } from 'styled-components';

interface Props {
  color?: ColorType;
  style?: any;
  width?: string;
  height?: string;
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

const Spinner = styled.div<Props>`
  display: inline-block;
  width: ${({ width }) => width ? width : '100%'};
  height: ${({ height }) => height ? height : '100%'};
  margin: 0;
  padding: 0;
  position: relative;

  &:after {
    display: block;
    top: 0;
    left: 0;
    animation: spin 750ms infinite linear;
    border: ${({ borderSize }) => borderSize} solid;
    border-radius: 100%;
    ${getColor}
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
Spinner.displayName = 'Spinner';
Spinner.defaultProps = {
  borderSize: '2px',
}

export default Spinner;
