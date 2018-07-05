import * as React from 'react';
import styled, { css } from '../../styled';
import { boxShadow } from '../../utils';
import { InputProps } from './types';

const Wrapper = styled.div`
  display: block;
  &:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`;

const Label = styled.label`
  color: ${({ theme }) => theme.textStrong};
  display: block;
  font-size: 1rem;
  font-weight: 700;
`;

const InputControl = styled.div<{ error?: string }>`
  span {
    font-size: 0.75em;
    display: block;
  }

  ${({ error, theme }) => error ? css`
    input, select, textarea {
      border-color: ${theme.danger};

      &:hover {
        border-color: ${theme.danger};
      }

      &:focus {
        border-color: ${theme.danger};
        ${boxShadow('0.2em', theme.danger)}
      }
    }
    span {
      color: ${theme.danger};
    }
  ` : ''}
`;

interface Props extends InputProps {
  error?: string;
  help?: string;
  label?: string;
  children: React.ReactChildren;
}

export default class Field extends React.PureComponent<Props> {

  renderMessage() {
    const { error, help } = this.props;
    if (error) {
      return <span className="error">{error}</span>;
    } else if (help) {
      return <span>{help}</span>;
    }

    return null;
  }

  render() {
    const { label, children, error } = this.props;
    return (
      <Wrapper>
        {label && (<Label>{label}</Label>)}
        <InputControl error={error}>
          {children}
          {this.renderMessage()}
        </InputControl>
      </Wrapper>
    );
  }
};
