import React, { ReactNode } from 'react';
import { styled } from 'styled-components';

interface MsgProps {
  error?: boolean;
}

const Message = styled.small.withConfig({ shouldForwardProp: (name) => (name !== 'error') })<MsgProps>`
  font-size: 0.8rem;
  color: ${({ error, theme }) => (error ? theme.danger : theme.textLight)};
`;

interface Props {
  help?: ReactNode;
  error?: ReactNode;
  noErrorMessage?: boolean;
}

export default function HelpMessage({ help, error, noErrorMessage }: Props) {
  if (error && !noErrorMessage) return (<Message error>{error}</Message>);
  if (help) return (<Message>{help}</Message>);
  return null;
}
