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

export default function Highlight({ children, live, ...rest }: Props) {
  const content = getChildren(children);
  if (live) {
    return <Playground {...rest} >{content}</Playground>;
  }
  return <HighlightCode>{content}</HighlightCode>
}
