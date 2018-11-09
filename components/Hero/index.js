import React from 'react';
import styled, { css } from '../../styled';
import Container from '../Grid/Container';
import findColorInvert from '../../utils/findColorInvert';
import { mediaDesktop } from '../../utils/media';
function setColor({ color, theme }) {
    if (!color)
        return '';
    const target = theme[color] || color;
    const invertColor = findColorInvert(theme, target);
    return `background-color: ${target}; color: ${invertColor};`;
}
function setSize({ size, theme }) {
    if (!size || size === 'small')
        return '';
    switch (size) {
        case 'medium':
            return mediaDesktop `padding-bottom: 9rem; padding-top: 9rem;`({ theme });
        case 'large':
            return mediaDesktop `padding-bottom: 18rem; padding-top: 18rem;`({ theme });
        case 'full':
            return css `
        min-height: 100vh;

        ${Body} {
          align-items: center;
          display: flex;
        }
      `;
        default:
            return '';
    }
}
const Body = styled.div `
  flex-grow: 1;
  flex-shrink: 0;
  padding: 3rem 1.5rem;

  ${({ center }) => center ? 'text-align: center;' : ''}

  h1 {
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.125;

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.25;
  }

  h1+h2 {
    margin-top: -1.25rem;
  }
`;
const Wrapper = styled.div `
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${setColor}
  ${setSize}

  header {
    background-color: inherit;
    color: inherit;
  }

  header+${Body} {
    margin-top: 3.25rem;
    margin-bottom: 3.25rem;
  }
`;
export default function Hero({ children, color, size, center, header }) {
    return (React.createElement(Wrapper, { color: color, size: size },
        header,
        React.createElement(Body, { center: center },
            React.createElement(Container, null, children))));
}
