import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import setSize from '../../utils/setSize';
import { ColorType, SizeType } from '../../types';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  color?: ColorType;
  size?: SizeType;
  pure?: boolean;
  underline?: boolean;
}

export default styled.button<Props>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: inline;
  margin: 0;
  border-radius: ${({ theme }) => theme.radius};
  padding: ${({ pure }) => (pure ? '0' : '0.375em 0.75em')};
  line-height: 1.5;
  color: ${({ color, theme }) => (color ? theme[color] : theme.text)};
  ${({ size }) => setSize('font-size', size)}

  &:hover, &:focus {
    ${({ underline }) => (underline ? { textDecoration: 'underline' } : undefined)}
    ${({ pure, theme, color }) => (pure ? undefined : { background: transparentize(0.9, theme[color] || theme.text) })}
  }

  &:focus, &:active {
    outline: none;
  }

  &:active {
    ${({ pure, theme, color }) => (pure ? undefined : { background: transparentize(0.8, theme[color] || theme.text) })}
  }

  ${({ disabled, theme }) => (disabled ? css`
    color: ${transparentize(0.75, theme.textDark)};
    cursor: default;
    &:hover {
      background: transparent;
      text-decoration: none;
    }
  ` : undefined)}
`;
