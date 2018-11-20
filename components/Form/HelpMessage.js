import React from 'react';
import styled from 'styled-components';
const Message = styled.span `
  font-size: 0.8rem;
  ${({ error, theme }) => error ? `color: ${theme.danger};` : `color: ${theme.textLight};`};
`;
export default function HelpMessage(help, error) {
    if (error) {
        return (React.createElement(Message, { error: true }, error));
    }
    if (help) {
        return (React.createElement(Message, null, help));
    }
}
