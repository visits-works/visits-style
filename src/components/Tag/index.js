// @flow
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { darken, rgba } from 'polished';
import { findColorInvert, setSize } from '../../utils';

function getColor(theme, color) {
  return (!color || color === 'light') ? theme.background : theme[color];
}

function setColor({ theme, color, addonColor, onClick }) {
  const target = getColor(theme, color);
  const invertColor = findColorInvert(target);

  const subColor = addonColor ? getColor(theme, addonColor) : darken(0.05, target);

  return css`
    color: ${invertColor};
    background-color: ${target};

    a, span {
      color: ${invertColor};
      background-color: ${subColor};
    }

    a:hover {
      background-color: ${darken(0.05, subColor)};
    }
  `;
}

const Wrapper = styled.div`
  display: inline-flex;
  font-size: 0.75rem;
  cursor: default;
  padding: 0 .5rem;
  height: 2em;
  user-select: none;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  line-height: 1.5;

  ${setColor}

  &:not(:last-child) {
    margin-right: 0.5rem;
  }

  a, span {
    position: relative;
    display: inline-flex;
    flex-grow: 0;
    flex-shrink: 0;
    min-width: 1.5rem;
    height: 100%;
    margin-right: -0.5rem;
    margin-left: 0.5rem;
    padding: 0 .5rem;
    justify-content: center;
    align-items: center;

    &:last-child {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }

    &:focus {
      outline: none;
    }

    ${props => (props.close ? `
      &:before, &:after {
        background-color: currentColor;
        content: "";
        display: block;
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translateX(-50%) translateY(-50%) rotate(45deg);
        transform-origin: center center;
      }

      &:before {
        height: 1px;
        width: 50%;
      }

      &:after {
        height: 50%;
        width: 1px;
      }

      &:hover {
        opacity: 1;
      }
    ` : '')}
  }
`;

type Props = {
  /** aaa */
  children?: Node,
  /** aaa */
  onClose?: () => void,
  /** aaa */
  onClick?: () => void,
  /**  */
  color?: ColorType,
}

export default class Tag extends PureComponent<Props> {
  static defaultProps = {
    children: null,
    onClose: null,
    onClick: null,
    color: null,
  }

  render() {
    const { children, onClose, ...rest } = this.props;
    return (
      <Wrapper close={onClose !== null} {...rest}>
        {children}
        {onClose && (<a tabIndex={0} role="link" onClick={onClose}>&nbsp;</a>)}
      </Wrapper>
    );
  }
}
