import { ButtonHTMLAttributes } from 'react';
import { styled, css } from 'styled-components';
import { transparentize } from 'polished';
import setSize from '../../utils/setSize';
import { ColorType, SizeType } from '../../types';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** ボタンの色 */
  color?: ColorType;
  /** ボタンのサイズ */
  size?: SizeType;
  /** ボタン的な幅を全部無くしてテキストのように表示する */
  pure?: boolean;
  /** マウスオーバーするとテキストにunderlineが付く */
  underline?: boolean;
  /** 丸いボタンで表示する */
  round?: boolean;
  /** アイコンボタンとしてpaddingを同じにする */
  icon?: boolean;
}

function shouldForwardProp(name: string) {
  return (
    name !== 'color'
    && name !== 'size'
    && name !== 'pure'
    && name !== 'underline'
    && name !== 'round'
    && name !== 'icon'
  );
}

export default styled.button.withConfig({ shouldForwardProp })<Props>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: inline;
  margin: 0;
  border-radius: ${({ round, theme }) => (round ? '2456189px' : theme.radius)};
  padding: ${({ pure, icon }) => {
    if (pure) return '0';
    if (icon) return '0.375em';
    return '0.375em 0.75em';
  }};
  line-height: ${({ icon }) => (icon ? 1 : 1.5)};
  color: ${({ color, theme }) => (color ? theme[color] : theme.text)};
  ${({ size }) => setSize('font-size', size)}

  &:hover, &:focus {
    ${({ underline }) => (underline ? { textDecoration: 'underline' } : undefined)}
    ${({ pure, theme, color }) => (
    pure
      ? undefined
      : { background: transparentize(0.9, color ? (theme[color] || theme.text) : theme.text) }
  )}
  }

  &:focus, &:active {
    outline: none;
  }

  &:active {
    ${({ pure, theme, color }) => (
    pure
      ? undefined
      : { background: transparentize(0.8, color ? (theme[color] || theme.text) : theme.text) }
  )}
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
