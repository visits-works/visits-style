import React from 'react';
import styled from 'styled-components';

interface MsgProps {
  error?: boolean;
}

const Message = styled.small<MsgProps>`
  font-size: 0.8rem;
  color: ${({ error, theme }) => (error ? theme.danger : theme.textLight)};
`;

interface Props {
  help?: string;
  error?: string;
  noErrorMessage?: boolean;
}

export default function HelpMessage({ help, error, noErrorMessage }: Props) {
  if (error && !noErrorMessage) return (<Message error>{error}</Message>);
  if (help) return (<Message>{help}</Message>);
  return null;
}
