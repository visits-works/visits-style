import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import { boxShadow } from '../../utils';

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

const InputControl = styled.div`
  span {
    font-size: 0.75em;
    display: block;
  }

  ${({ error, theme }) => error ? css`
    input {
      ${boxShadow('1px', theme.danger, 0)}

      &:focus {
        ${boxShadow('0.2em', theme.danger)}
      }
    }
    span {
      color: ${theme.danger};
    }
  ` : ''}
`;

export default class Field extends PureComponent {

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
    const { label, children, help, error } = this.props;
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
