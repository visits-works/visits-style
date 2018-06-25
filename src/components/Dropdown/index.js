import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { findColorInvert } from '../../utils';
import Button from '../Button';
import Box from '../Box';

const Wrapper = styled.div`
  display: inline-flex;
  position: relative;
  vertical-align: top;
`;

const Tooltip = Box.extend`
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  z-index: 9999;
  will-change: transform;

  ${({ right }) => (right ? `
    left: auto;
    right: 1rem;
  ` : `
    left: 1rem;
  `)}

  a {
    display: block;
    width: 100%;
    padding: 0.25rem 1.5rem;
    clear: both;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    color: ${({ theme }) => theme.text};
    border: 0;

    &:hover, &:focus {
      background-color: rgba(0, 0, 0, 0.05);
    }

    &:active {
      ${({ theme }) => `
        background-color: ${theme.primary};
        color: ${findColorInvert(theme.primary)}
      `};
    }
  }
`;

type Props = {
  button: Node,
  children?: Node,
  right?: boolean,
}

type State = {
  show: boolean,
}

export default class Dropdown extends PureComponent<Props, State> {
  static defaultProps = {
    right: false,
    children: null,
  }

  state = { show: false }

  toggleDropdown = () => {
    this.setState({ show: !this.state.show });
  }

  closeDropdown = () => {
    if (this.state.show) this.setState({ show: false });
  }

  render() {
    const { button, children } = this.props;
    const { show } = this.state;
    return (
      <Wrapper>
        <div onClick={this.toggleDropdown}>
          {button}
        </div>
        {(show && children) && (
          <Tooltip onBlur={this.closeDropdown}>
            {children}
          </Tooltip>
        )}
      </Wrapper>
    );
  }
}
