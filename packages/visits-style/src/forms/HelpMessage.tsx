import React from 'react';
import styled from 'styled-components';

interface MsgProps {
  error?: boolean;
}

const Message = styled.small<MsgProps>`
  font-size: 0.8rem;
  color: ${({ error, theme }) => (error ? theme.danger : theme.textLight)};
`;

export default function HelpMessage({ help, error }: { help?: string, error?: string }) {
  if (error) return (<Message error>{error}</Message>);
  if (help) return (<Message>{help}</Message>);
  return null;
}
