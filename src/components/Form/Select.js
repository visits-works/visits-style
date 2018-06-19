import React, { PureComponent } from 'react';
import styled from 'styled-components';
import commonStyle from './style';
import { boxShadow, arrow } from '../../utils';

const InputWrapper = styled.div`
  display: inline-block;
  max-width: 100%;
  position: relative;
  vertical-align: top;

  ${({ multiple }) => multiple ? '' : 'height: 2.25em;'}

  select {
    ${commonStyle}
    display: block;
    cursor: pointer;
    appearance: none;
    outline: none;
    max-width: 100%;
    background-color: transparent;
    padding: 0.375em 0.625em;

    ${({ multiple }) => multiple ? '' : 'padding-right: 2.25em;'}

    border-radius: 4px;
    border: none;
    ${({ theme }) => boxShadow('1px', theme.border, 0)}
    will-change: box-shadow, transition;
    transition: box-shadow .15s ease-in-out;

    option {
      padding: 0.5em 1em;
    }

    &:focus {
      outline: none;
      ${({ theme }) => boxShadow('0.2em', theme.primary)}
    }
    &::-ms-expand {
      display: none;
    }
  }

  &::after {
    ${({ theme }) => arrow(theme.primary)}
    right: 1em;
    z-index: 4;
  }
`;

export default class Select extends PureComponent {
  static defaultProps = {
    name: null,
    placeholder: null,
    onChange: () => {},
  }

  render() {
    const { options, ...rest } = this.props;
    return (
      <InputWrapper>
        <select {...rest}>
          {options.map(({ id, name }) => (<option key={id} value={id}>{name}</option>))}
        </select>
      </InputWrapper>
    );
  }
}
