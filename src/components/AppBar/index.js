import React, { PureComponent, Fragment } from 'react';
import styled, { withTheme } from 'styled-components';
import { fullhd, desktop, tablet, mobile } from '../../styles/variables';
import { findColorInvert, hambuger } from '../../utils';
import Container from '../Grid/Container';

const NavBar = styled.header`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: stretch;

  min-height: 3.25rem;
  width: 100%;
  z-index: 30;

  ${({ background }) => (background ? `background-color: ${background};` : '')}
  ${({ color }) => (color ? `color: ${color};` : '')}

  @media (max-width: ${fullhd}px) {
    padding: ${({ fluid }) => fluid ? '0 0.75rem' : '0 5%'};
  }

  @media (max-width: ${tablet}px) {
    padding: ${({ fluid }) => fluid ? '0 0.5rem' : '0 3%'};
  }
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

  @media (max-width: ${mobile}px) {
    display: block;
  }
`;

const Brand = styled.a`
  display: inline-block;
  cursor: pointer;
  white-space: nowrap;
  padding: .5rem 1rem;

  &:hover{
    background-color: rgba(0, 0, 0, .05);
  }
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
      ${({ color }) => (color ? `color: ${color};` : '')}
      &:hover{
        background-color: rgba(0, 0, 0, .05);
      }
    }
  }

  & > div, & > span, & > form {
    display: flex;
    ${({ color }) => (color ? `color: ${color};` : '')}
  }

  @media (max-width: ${mobile}px) {
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
  }
`;

export class AppBar extends PureComponent {
  static defaultProps = {
    color: null,
    brand: null,
    to: null,
    fixed: false,
    fluid: false,
    style: null,
  }

  state = { show: false }

  toggleMenu = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    const { theme, color, brand, children, to, style } = this.props;
    const { show } = this.state;
    const backgroundColor = color === 'light' ? theme.whiteTer : (theme[color] || 'transparent');
    const textColor = backgroundColor === 'transparent' ? null : findColorInvert(backgroundColor);
    return (
      <NavBar background={backgroundColor} color={textColor} role="navigation" style={style}>
        {brand && (<Brand href={to}>{brand}</Brand>)}
        {children && (
          <Fragment>
            <Burger className={show ? 'active' : ''} onClick={this.toggleMenu}>
              <span />
              <span />
              <span />
            </Burger>
            <NavContent color={textColor} show={show}>
              {children}
            </NavContent>
          </Fragment>
        )}
      </NavBar>
    );
  }
}

export default withTheme(AppBar);
