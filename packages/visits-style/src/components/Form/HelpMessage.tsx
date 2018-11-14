import React from 'react';
import styled from 'styled-components';

interface MsgProps {
  error?: boolean;
}

const Message = styled.span<MsgProps>`
  font-size: 0.8rem;
  ${({ error, theme }) => error ? `color: ${theme.danger};` : `color: ${theme.textLight};`};
`;

export default function HelpMessage(help?: string, error?: string) {
  if (error) {
    return (<Message error>{error}</Message>);
  }
  if (help) {
    return (<Message>{help}</Message>);
  }
}
