import React from 'react';
import styled from 'styled-components';

interface MsgProps {
  error?: boolean;
}

const Message = styled.span<MsgProps>`
  font-size: 0.8rem;
  color: ${({ error, theme }) => error ? theme.danger : theme.textLight};
`;

// @ts-ignore
export default function HelpMessage(help?: string, error?: string) {
  if (error) {
    return (<Message error>{error}</Message>);
  }
  if (help) {
    return (<Message>{help}</Message>);
  }
}
