// @flow
import React, { PureComponent, Fragment } from 'react';
import styled, { css }from 'styled-components';
import { transparentize } from 'polished';
import { fullhd, desktop, tablet, mobile } from '../../styles/variables';
import { findColorInvert, hambuger, mediaTablet, mediaUntilFullHD, mediaMobile } from '../../utils';
import Container from '../Grid/Container';

function setColor({ color, theme, backdrop }) {
  const backgroundColor = color === 'light' ? theme.color.greyLight : (theme[color] || 'transparent');
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

const NavBar = styled.header`
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

  ${mediaTablet`
    padding: ${({ fluid }) => fluid ? '0 0.5rem' : '0 3%'};
  `}

  ${mediaUntilFullHD`
    padding: ${({ fluid }) => fluid ? '0 0.75rem' : '0 5%'};
  `}
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

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: auto;
  flex-grow: 1;

  transform-origin: center;
  transition-duration: 100ms;
  transition-property: transform;
  transition-timing-function: ease-out;

  & > ul {
    display: flex;
    flex-direction: row;
    list-style: none;

    li {
      padding: .5rem 1rem;
    }

    a {
      color: inherit;
      transform: color 100ms ease-out;
      &:hover, &.active {
        color ${({ theme }) => theme.primary};
      }
    }
  }

  & > div, & > span, & > form {
    display: flex;
    ${({ color }) => (color ? `color: ${color};` : '')}
  }

  ${mediaMobile`
    ${({ show }) => show ? '' : 'display: none;'}
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
  `}
`;

const svgStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  pointerEvent: 'none',
  zIndex: -1,
}

type Props = {
  color?: ColorType,
  brand?: any,
  to?: string,
  fixed?: boolean,
  sticky?: boolean,
  fluid?: boolean,
  backdrop?: boolean,
  style?: any,
  children?: Node,
  theme: ThemeType,
}

type State = {
  show: boolean,
};

export default class AppBar extends PureComponent<Props, State> {
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
    const { theme, color, brand, children, style, fixed, sticky, backdrop } = this.props;
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
          <Fragment>
            <Burger className={show ? 'active' : ''} onClick={this.toggleMenu}>
              <span />
              <span />
              <span />
            </Burger>
            <NavContent show={show}>
              {children}
            </NavContent>
          </Fragment>
        )}
        {!isSafari && backdrop && (
          <div className="backdrop"></div>
        )}
      </NavBar>
    );
  }
}
