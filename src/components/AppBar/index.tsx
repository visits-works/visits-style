import React, { HTMLAttributes, useState } from 'react';
import { transparentize } from 'polished';
import styled, { css } from 'styled-components';
import findColorInvert from '../../utils/findColorInvert';
import hambuger from '../../utils/hambuger';
import setAlign from '../../utils/setAlign';
import { mediaTablet, mediaMobile } from '../../utils/media';
import { ColorType, ThemeType } from '../../types';

interface Props extends HTMLAttributes<HTMLDivElement> {
  /** background色 */
  color?: ColorType;
  /** ロゴのイメージ、プロジェクト名など */
  brand?: React.ReactElement<any> | string;
  /** 定義された位置を固定にする */
  fixed?: boolean;
  /** (IE11不可)画面がスクロールされても上で貼り付けいるようにする */
  sticky?: boolean;
  /** 中央並びから自動幅で表示します */
  fluid?: boolean;
  /** 背景がblurされます（safari専用、他は透明度） */
  backdrop?: boolean;
  /** childrenに定義するElementの並び順を指定します。未定義は自動並び */
  align?: 'left' | 'right';
}

export default function AppBar({ children, align, brand, ...rest }: Props) {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <NavBar
      role="navigation"
      {...rest}
    >
      <nav>
        {brand}
        {children && (
          <Burger className={show ? 'active' : undefined} onClick={toggleMenu}>
            <span />
            <span />
            <span />
          </Burger>
        )}
        <NavContent className={show ? 'active' : undefined} align={align}>
          {children}
        </NavContent>
      </nav>
    </NavBar>
  );
}

function setColor(
  { color, theme, backdrop }: { color?: ColorType, theme: ThemeType, backdrop?: boolean },
) {
  const backgroundColor = color ? theme[color] : 'transparent';
  const textColor = findColorInvert(
    theme, backgroundColor === 'transparent' ? theme.background : backgroundColor,
  );

  if (backdrop) {
    const backColor = transparentize(
      0.2, (backgroundColor === 'transparent' ? theme.white : backgroundColor),
    );

    return css`
      background-color: ${backColor};
      color: ${textColor};
    `;
  }

  return css`background-color: ${backgroundColor}; color: ${textColor};`;
}

const NavBar = styled.header<Props>`
  position: ${({ fixed, sticky }) => {
    if (sticky) return 'sticky';
    if (fixed) return 'fixed';
    return 'relative';
  }};
  display: flex;
  top: -1px;
  min-height: 3.25rem;
  width: 100%;
  z-index: 30;

  padding: ${({ fluid }) => (fluid ? '0 0.75rem' : '0 5%')};

  & > nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    flex: 1 0 auto;
  }

  ${setColor}

  a { color: inherit; }

  ${mediaTablet} {
    padding: ${({ fluid }) => (fluid ? '0 0.5rem' : '0 3%')};
  }
`;

const Burger = styled.button`
  ${hambuger('3.25rem')}
  display: none;
  margin-left: auto;
  border: none;
  background-color: transparent;
  color: inherit;

  outline: none;

  &:hover{
    background-color: rgba(0, 0, 0, .05);
  }

  ${mediaMobile} {
    display: block;
  }
`;

const NavContent = styled.div<Pick<Props, 'color'|'align'> & { show?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-basis: auto;
  flex-grow: 1;
  height: 100%;

  & > ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    flex-grow: 1;
    flex-basis: 100%;
    height: inherit;
    align-items: center;
    justify-content: ${setAlign};

    li {
      padding: 0.85rem;
    }
  }

  & > div, & > span, & > form {
    display: flex;
    ${({ color }) => (color ? `color: ${color};` : '')}
  }

  ${mediaMobile} {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    height: auto;

    padding-bottom: 0.5rem;

    &:not(.active) {
      display:none;
    }

    & > ul {
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      flex-basis: auto;
      li {
        padding: .5rem 0;
      }
    }

    & > div, & > span, & > form {
      padding: .5rem 0;
      width: 100%;
    }
  }
`;
