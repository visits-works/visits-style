import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import TextButton from '../Button/TextButton';
import Close from '../Icons/Close';
import findColorInvert from '../../utils/findColorInvert';
import { ColorType, ThemeType } from '../../types';

function getColor(theme: ThemeType, color?: ColorType) {
  return (!color || color === 'light') ? theme.background : theme[color];
}

const closeCss = css`
  padding-right: 1.5rem;

  ${TextButton} {
    display: block;
    position: absolute;
    color: inherit;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 0 0.25rem;

    svg {
      width: 0.75rem;
      height: 0.75rem;
    }

    &:hover {
      background-color: rgba(0,0,0,0.15);
    }
  }
`;

const Wrapper = styled.div<Pick<Props, 'color'|'round'> & { close: boolean; }>`
  display: inline-flex;
  position: relative;
  font-size: 0.75rem;
  cursor: default;
  padding: 0.185rem 0.5rem;
  align-items: center;
  height: 1.5rem;
  border-radius: ${({ theme, round }) => (round ? '50rem' : theme.radius)};
  white-space: nowrap;

  ${({ color, theme }) => {
    const target = getColor(theme, color);
    const invertColor = findColorInvert(theme, target);

    return css`
      color: ${invertColor};
      background-color: ${target};

      a, span {
        color: ${invertColor};
      }
    `;
  }}

  &:not(:last-child) {
    margin-right: 0.5rem;
  }

  ${TextButton} {
    border-radius: 0;
    border-top-right-radius: ${({ theme, round }) => (round ? '50rem' : theme.radius)};
    border-bottom-right-radius: ${({ theme, round }) => (round ? '50rem' : theme.radius)};
  }

  ${({ close }) => (close ? closeCss : undefined)}
`;

interface Props extends HTMLAttributes<HTMLDivElement> {
  /** タグの内容 */
  children: any;
  /** Xボタンの追加＋クリック時のイベントハンドラー */
  onClose?: () => void;
  /** クリック時のイベントハンドラー */
  onClick?: () => void;
  /** 色の指定 */
  color?: ColorType;
  /** 丸くする */
  round?: boolean;
}

export default function Tag({ children, onClose, ...rest }: Props) {
  return (
    <Wrapper close={!!onClose} {...rest}>
      {children}
      {onClose && (<TextButton onClick={onClose} pure><Close /></TextButton>)}
    </Wrapper>
  );
}
