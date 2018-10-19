import React from 'react';
import HighlightCode from './Highlight';
import Playground from './Playground';

const getChildren = (children: any): string => {
  return children && typeof children !== 'string'
    ? children.props.children
    : children;
};

interface Props {
  className?: string;
  children: any;
  live?: boolean;
}

export default function Highlight({ children, className, live }: Props) {
  const content = getChildren(children);
  if (live) return <Playground>{content}</Playground>;
  return <HighlightCode className={className}>{content}</HighlightCode>;
}
