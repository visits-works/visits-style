import React, { PureComponent } from 'react';
import styled from 'styled-components';
import commonStyle from './style';
import { boxShadow, arrow, setSize } from '../../utils';

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
    ${setSize('font-size')}

    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.border};

    will-change: box-shadow;
    transition-property: box-shadow;
    transition-duration: 0.15s;
    transition-timing-function: ease-in-out;

    option {
      padding: 0.5em 1em;
    }

    &:hover {
      border-color: ${({ theme }) => theme.borderHover};
    }

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.primary};
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
