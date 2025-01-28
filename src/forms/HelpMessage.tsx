import React, { ReactNode } from 'react';

interface Props {
  help?: ReactNode;
  error?: ReactNode;
  noErrorMessage?: boolean;
}

export default function HelpMessage({ help, error, noErrorMessage }: Props) {
  if (error && !noErrorMessage) return (<small className="text-xs text-danger">{error}</small>);
  if (help) return (<small className="text-xs">{help}</small>);
  return null;
}
