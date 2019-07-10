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

export default function Highlight({ children, live, className }: Props) {
  const content = getChildren(children);
  const lang: any = className ? className.replace('language-', '') : undefined;
  if (live) {
    return <Playground lang={lang} >{content}</Playground>;
  }
  return <HighlightCode lang={lang}>{content}</HighlightCode>
}
