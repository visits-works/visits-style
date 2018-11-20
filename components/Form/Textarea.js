import React, { PureComponent } from 'react';
import styled from 'styled-components';
import boxShadow from '../../utils/boxShadow';
import setSize from '../../utils/setSize';
import commonStyle from './style';
import HelpMessage from './HelpMessage';
const Wrapper = styled.span `
  display: block;
  position: relative;

  textarea {
    ${commonStyle}
    max-width: 100%;
    width: 100%;
    padding: 0.625em;
    resize: vertical;
    appearance: none;
    overflow: auto;
    outline: none;

    border-radius: 4px;
    border: 1px solid ${({ theme, error }) => error ? theme.danger : theme.border};

    transition-property: box-shadow;
    transition-duration: 0.15s;
    transition-timing-function: ease-in-out;

    ${setSize('font-size')}

    &:focus {
      border-color: ${({ theme, error }) => error ? theme.danger : theme.primary};
      ${({ theme, error }) => boxShadow('0.1em', error ? theme.danger : theme.primary)}
    }

    &:disabled {
      resize: none;
    }
  }

  &:hover {
    textarea:not(:disabled):not(:focus) {
      border-color: ${({ theme }) => theme.borderHover};
    }
  }
`;
export default class Textarea extends PureComponent {
    render() {
        const { help, error, ...rest } = this.props;
        return (React.createElement(Wrapper, { error: error },
            React.createElement("textarea", Object.assign({}, rest)),
            HelpMessage(help, error)));
    }
}
Textarea.defaultProps = {
    value: '',
    col: 2,
    row: 5,
    onChange: () => { },
};
