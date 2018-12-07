import React, { PureComponent, HTMLAttributes } from 'react';
import transparentize from 'polished/lib/color/transparentize';
import styled, { css } from 'styled-components';
import findColorInvert from '../../utils/findColorInvert';
import hambuger from '../../utils/hambuger';
import setAlign from '../../utils/setAlign';
import { mediaTablet, mediaUntilFullHD, mediaMobile } from '../../utils/media';
import { ColorType, AlignType, CSSType, ThemeType } from '../../types';

function setColor({ color, theme, backdrop }: { color?: ColorType, theme: ThemeType, backdrop?: boolean }) {
  const backgroundColor = color ? theme[color] : 'transparent';
  const textColor = findColorInvert(theme, backgroundColor === 'transparent' ? theme.background : backgroundColor);

  if (backdrop) {
    const backColor = transparentize(0.2, (backgroundColor === 'transparent' ? theme.white : backgroundColor));
    const ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') > -1 && ua.indexOf('chrome') === -1) {
      return `background-color: ${backColor}; color: ${textColor}; backdrop-filter: blur(8px);`;
    }

    return css`
      background-color: ${backColor};
      color: ${textColor};
    `;
  }

  return `background-color: ${backgroundColor}; color: ${textColor};`;
}

interface NavProps {
  color?: ColorType;
  backdrop?: boolean;
  fixed?: boolean;
  sticky?: boolean;
  fluid?: boolean;
  show?: boolean;
  style?: any;
  align?: AlignType;
  role: string;
  css?: CSSType;
}

const NavBar = styled.header<NavProps>`
  position: ${({ fixed, sticky }) => (!(sticky || fixed) ? 'relative' : (fixed ? 'fixed' : 'sticky'))};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: stretch;
  top: -1px;

  min-height: 3.25rem;
  width: 100%;
  z-index: 30;

  ${setColor}

  a { color: inherit; }

  ${mediaTablet`padding: ${({ fluid }: NavProps) => fluid ? '0 0.5rem' : '0 3%'};`}
  ${mediaUntilFullHD`padding: ${({ fluid }: NavProps) => fluid ? '0 0.75rem' : '0 5%'};`}
  ${({ css }) => css || ''}
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

  ${mediaMobile` display: block; `}
`;

interface ContentProps {
  color?: ColorType;
  show?: boolean;
  align?: 'left' | 'right';
}

const NavContent = styled.div<ContentProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: auto;
  flex-grow: 1;

  & > ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    flex-grow: 1;
    justify-content: ${setAlign};

    li {
      padding: 0 0.75rem;
    }
  }

  & > div, & > span, & > form {
    display: flex;
    ${({ color }) => (color ? `color: ${color};` : '')}
  }

  ${mediaMobile`
    width: 100%;
    flex-direction: column;
    align-items: flex-start;

    padding-bottom: 0.5rem;

    button:not(.active)+& {
      display:none;
    }

    & > ul {
      flex-direction: column;
      width: 100%;
      li {
        padding: .5rem 0;
      }
    }

    & > div, & > span, & > form {
      padding: .5rem 0;
      width: 100%;
    }
  `}
`;


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
  /** カスタムCSS定義 */
  css?: CSSType;
}

type State = {
  show: boolean,
};

export default class AppBar extends PureComponent<Props, State> {
  static defaultProps = {
    color: null,
    brand: null,
    fixed: false,
    sticky: false,
    fluid: false,
    backdrop: false,
    style: null,
  }

  state = { show: false }

  toggleMenu = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    const { children, align, brand, ...rest } = this.props;
    const { show } = this.state;
    return (
      <NavBar
        role="navigation"
        {...rest}
      >
        {brand}
        <Burger className={show ? 'active' : ''} onClick={this.toggleMenu}>
          <span />
          <span />
          <span />
        </Burger>
        <NavContent align={align}>
          {children}
        </NavContent>
      </NavBar>
    );
  }
}
