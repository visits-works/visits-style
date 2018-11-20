import React, { PureComponent } from 'react';
import transparentize from 'polished/lib/color/transparentize';
import styled, { css } from 'styled-components';
import findColorInvert from '../../utils/findColorInvert';
import hambuger from '../../utils/hambuger';
import setAlign from '../../utils/setAlign';
import { mediaTablet, mediaUntilFullHD, mediaMobile } from '../../utils/media';
function setColor({ color, theme, backdrop }) {
    const backgroundColor = color ? theme[color] : 'transparent';
    const textColor = findColorInvert(theme, backgroundColor === 'transparent' ? theme.background : backgroundColor);
    if (backdrop) {
        const backColor = transparentize(0.2, (backgroundColor === 'transparent' ? theme.white : backgroundColor));
        const ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf('safari') > -1 && ua.indexOf('chrome') === -1) {
            return `background-color: ${backColor}; color: ${textColor}; backdrop-filter: blur(8px);`;
        }
        return css `
      background-color: ${backColor};
      color: ${textColor};
    `;
    }
    return `background-color: ${backgroundColor}; color: ${textColor};`;
}
const NavBar = styled.header `
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

  ${mediaTablet `padding: ${({ fluid }) => fluid ? '0 0.5rem' : '0 3%'};`}
  ${mediaUntilFullHD `padding: ${({ fluid }) => fluid ? '0 0.75rem' : '0 5%'};`}
`;
const Burger = styled.button `
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

  ${mediaMobile ` display: block; `}
`;
const NavContent = styled.div `
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

  ${mediaMobile `
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
const NavItem = styled.li `
  text-align: center;

  a {
    display: block;
    padding: .5rem 1rem;
    color: inherit;
    opacity: 1;

    will-change: opacity;
    transition: opacity 200ms cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover, &.active {
      opacity: 0.65;
    }
  }
`;
export default class AppBar extends PureComponent {
    constructor() {
        super(...arguments);
        this.state = { show: false };
        this.toggleMenu = () => {
            this.setState({ show: !this.state.show });
        };
    }
    render() {
        const { color, brand, children, style, fixed, sticky, backdrop, align } = this.props;
        const { show } = this.state;
        return (React.createElement(NavBar, { color: color, fixed: fixed, sticky: sticky, backdrop: backdrop, role: "navigation", style: style },
            brand,
            React.createElement(Burger, { className: show ? 'active' : '', onClick: this.toggleMenu },
                React.createElement("span", null),
                React.createElement("span", null),
                React.createElement("span", null)),
            React.createElement(NavContent, { align: align }, children)));
    }
}
AppBar.defaultProps = {
    color: null,
    brand: null,
    fixed: false,
    sticky: false,
    fluid: false,
    backdrop: false,
    style: null,
};
