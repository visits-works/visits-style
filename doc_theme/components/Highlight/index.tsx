import React, { PureComponent, createRef, Fragment } from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import PrismTheme from './style';

import { Pre, Button } from '../../../src/components';

const Wrapper = styled.div`
  position: relative;
  font-weight: 400;
  max-width: 100%;
  overflow: hidden;
  padding: 0;
  margin-bottom: 1rem;
  border: 2px solid ${({ theme }) => theme.border};
  overflow: auto;
  max-height: 340px;

  color: #fff;
  background-color: #282c34;
  tab-size: 1.5em;

  &.hover {
    border-color: ${({ theme }) => theme.warning};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.warning};
  }

  .react-syntax-highlighter-line-number {
    font-size: 0.8rem;
    line-height: 1rem;
    left: 0;
    display: block;
    padding: 0 10px;
    opacity: 0.3;
    text-align: right;
    border-right: 1px solid ${({ theme }) => theme.border};
  }

  ${Button} {
    position: absolute;
    right: .25rem;
    top: .25rem;
    padding-bottom: 0;
    padding-top: 0;
    background-color: transparent;
    border: none;
    color: white;

    &:hover {
      background-color: ${({ theme }) => theme.warning};
      color: rgba(0,0,0,.7);
    }
  }

  ${PrismTheme}
`;

const getLanguage = (children: any) => {
  if (typeof children === 'string') return 'language-jsx';
  return children.props.props.className;
};

const getCode = (content: any) => ({ children }) => {
  return <Pre className={getLanguage(content)}>{children}</Pre>;
};

const Nullable = ({ children }) => <Fragment>{children}</Fragment>;

const getChildren = (children: any) => {
  return children && typeof children !== 'string'
    ? children.props.children
    : children;
};

interface Props {
  className?: string;
  children: any;
}

export default class Highlight extends PureComponent<Props> {

  copyText = () => {
    const el = document.createElement('textarea');
    el.value = this.props.children;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }

  onButtonHover = () => {
    if (this.wrapper.current) {
      this.wrapper.current.classList.add('hover');
    }
  }

  onButtonHoverOut = () => {
    if (this.wrapper.current && this.wrapper.current.classList.contains('hover')) {
      this.wrapper.current.classList.remove('hover');
    }
  }

  pre = createRef<HTMLParagraphElement>();
  wrapper = createRef<HTMLDivElement>();

  render() {
    const { children, className } = this.props;
    const content = getChildren(children);

    return (
      <Wrapper className={className} innerRef={this.wrapper}>
        <SyntaxHighlighter
          language="jsx"
          useInlineStyles={false}
          PreTag={Nullable}
          CodeTag={getCode(children)}
        >
          {content}
        </SyntaxHighlighter>
        <Button
          size="small"
          onClick={this.copyText}
          onMouseEnter={this.onButtonHover}
          onMouseLeave={this.onButtonHoverOut}
        >
          Copy
        </Button>
      </Wrapper>
    );
  }
}
