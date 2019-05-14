import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import Container from '../../elements/Grid/Container';
import findColorInvert from '../../utils/findColorInvert';
import { ColorType, ThemeType, SizeType } from '../../types';

interface Props extends HTMLAttributes<HTMLDivElement> {
  /** 背景の色 */
  color?: ColorType;
  /** small | medium | large | full */
  size?: SizeType | 'full';
  /**  */
  children?: React.ReactChild;
  /** childrenの中央揃え */
  center?: boolean;
  /** カスタムヘッダー */
  header?: React.ReactElement<any>;
}

function setColor({ color, theme }: { color?: ColorType, theme: ThemeType }) {
  if (!color) return '';

  const target = theme[color] || color;
  const invertColor = findColorInvert(theme, target);
  return css`background-color: ${target}; color: ${invertColor};`;
}

function setSize({ size }: { size?: SizeType | 'full', theme: ThemeType }) {
  if (!size || size === 'small') return '';

  switch (size) {
    case 'medium' :
      return css`padding-bottom: 9rem; padding-top: 9rem;`;
    case 'large' :
      return css`padding-bottom: 18rem; padding-top: 18rem;`;
    case 'full' :
      return css`
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

interface BodyProps {
  center?: boolean;
}

const Body = styled.div<BodyProps>`
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

interface WrapperProps {
  color?: ColorType;
  size?: SizeType | 'full';
}

const Wrapper = styled.div<WrapperProps>`
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

export default function Hero({ children, color, size, center, header, ...rest }: Props) {
  return (
    <Wrapper color={color} size={size} {...rest}>
      {header}
      <Body center={center}>
        <Container>
          {children}
        </Container>
      </Body>
    </Wrapper>
  );
}
