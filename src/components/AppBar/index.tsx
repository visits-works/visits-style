import * as React from 'react';
import transparentize from 'polished/lib/color/transparentize';
import styled, { css } from 'styled-components';
import findColorInvert from '../../utils/findColorInvert';
import hambuger from '../../utils/hambuger';
import { mediaTablet, mediaUntilFullHD, mediaMobile } from '../../utils/media';
import { ColorType, ThemeType } from '../../types';

function setColor({ color, theme, backdrop }: { color?: ColorType, theme: ThemeType, backdrop?: boolean }) {
  const backgroundColor = color ? (color === 'light' ? theme.color.greyLight : theme[color]) : 'transparent';
  const textColor = findColorInvert(backgroundColor === 'transparent' ? theme.background : backgroundColor);

  if (backdrop) {
    const backColor = transparentize(0.2, (backgroundColor === 'transparent' ? '#fff' : backgroundColor));
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
  role: string;
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

  &>a {
    display: inline-block;
    cursor: pointer;
    white-space: nowrap;
    padding: .5rem 1rem;
    color: inherit;

    &:hover{
      background-color: rgba(0, 0, 0, .05);
    }
  }

  ${mediaTablet`padding: ${({ fluid }: NavProps) => fluid ? '0 0.5rem' : '0 3%'};`}
  ${mediaUntilFullHD`padding: ${({ fluid }: NavProps) => fluid ? '0 0.75rem' : '0 5%'};`}
`;

const Burger = styled.button`
  ${hambuger('3.25rem')}
  display: none;
  margin-left: auto;
  border: none;
  background-color: transparent;

  outline: none;

  &:hover{
    background-color: rgba(0, 0, 0, .05);
  }

  ${mediaMobile` display: block; `}
`;

const NavContent = styled.div<{ color?: ColorType, show?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: auto;
  flex-grow: 1;

  transform-origin: center;
  transition-duration: 100ms;
  transition-property: transform;
  transition-timing-function: ease-out;


  a {
    display: block;
    padding: .5rem 1rem;
    color: inherit;
    transform: color 100ms ease-out;
    &:hover, &.active {
      color: ${({ theme }) => theme.primary};
    }
  }

  & > ul {
    display: flex;
    flex-direction: row;
    list-style: none;
  }

  & > div, & > span, & > form {
    display: flex;
    ${({ color }) => (color ? `color: ${color};` : '')}
  }

  ${({ show }) => show ? mediaMobile`
    width: 100%;
    flex-direction: column;
    align-items: flex-start;

    padding-bottom: 0.5rem;

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
  ` : mediaMobile`display: none;`}
`;


interface Props {
  /** background色 */
  color?: ColorType;
  /** ロゴのイメージ、プロジェクト名など */
  brand?: React.ReactElement<any> | string;
  /** brandを押した時の遷移先url */
  to?: string;
  /** 定義された位置を固定にする */
  fixed?: boolean;
  /** (IE11不可)画面がスクロールされても上で貼り付けいるようにする */
  sticky?: boolean;
  /** 中央並びから自動幅で表示します */
  fluid?: boolean;
  /** 背景がblurされます（safari専用、他は透明度） */
  backdrop?: boolean;
  /** cssのスタイルを入れてください */
  style?: any;
  children?: React.ReactChildren | any;
}

type State = {
  show: boolean,
};

export default class AppBar extends React.PureComponent<Props, State> {
  static defaultProps = {
    color: null,
    brand: null,
    to: null,
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
    const { color, brand, children, style, fixed, sticky, backdrop } = this.props;
    const { show } = this.state;
    const ua = navigator.userAgent.toLowerCase();
    const isSafari = ua.indexOf('safari') > -1 && ua.indexOf('chrome') === -1;
    return (
      <NavBar
        color={color}
        fixed={fixed}
        sticky={sticky}
        backdrop={backdrop}
        role="navigation"
        style={style}
      >
        {brand}
        {children && (
          <React.Fragment>
            <Burger className={show ? 'active' : ''} onClick={this.toggleMenu}>
              <span />
              <span />
              <span />
            </Burger>
            <NavContent show={show}>
              {children}
            </NavContent>
          </React.Fragment>
        )}
        {!isSafari && backdrop && (
          <div className="backdrop"></div>
        )}
      </NavBar>
    );
  }
}
