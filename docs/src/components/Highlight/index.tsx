import React, { Component, createRef } from 'react';
import styled from 'styled-components';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
// @ts-ignore
import Highlight, { defaultProps } from 'prism-react-renderer';
// @ts-ignore
import theme from 'prism-react-renderer/themes/vsDark';
// @ts-ignore
import { Pre, Button } from '@components';
// @ts-ignore
import * as all from '@components';

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
  tab-size: 1.5em;

  &.hover {
    border-color: ${({ theme }) => theme.warning};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.warning};
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
`;

const LiveWrapper = styled.div`
  max-width: 100%;
  overflow: hidden;
  padding: 0;
  position: relative;
  margin-top: 0.75rem;

  .react-live-preview {
    padding: 0.75rem;
    background: transparent;
    border: 2px solid ${({ theme }) => theme.border};
    border-bottom: none;
  }

  .react-live-error {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 0.75rem;
  }

  pre.prism-code {
    overflow: auto;
    max-height: 340px;
    font-family: Monaco;
  }
`;

const getChildren = (children: any) => {
  return children && typeof children !== 'string'
    ? children.props.children
    : children;
};

/** Removes the last token from a code example if it's empty. */
function cleanTokens(tokens: any[]) {
  const tokensLength = tokens.length;
  if (tokensLength === 0) {
    return tokens;
  }
  const lastToken = tokens[tokensLength - 1];
  if (lastToken.length === 1 && lastToken[0].empty) {
    return tokens.slice(0, tokensLength - 1);
  }
  return tokens;
}


function renderCodeBlock({ className, style, tokens, getLineProps, getTokenProps }: any) {
  const target = cleanTokens(tokens);
  const contents = target.map((line: any[], i: number) => (
    <div {...getLineProps({ line, key: i })}>
      {line.map((token: any, key: number) => <span {...getTokenProps({ token, key })} />)}
    </div>
  ));
  return (
    <Pre className={className} style={{...style, marginBottom: 0}}>
      {contents}
    </Pre>
  );
}

interface Props {
  className?: string;
  children: any;
  live?: boolean;
}

export default class HighlightCode extends Component<Props> {
  shouldComponentUpdate() {
    return false;
  }

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

  wrapper = createRef<HTMLDivElement>();

  render() {
    const { children, className, live } = this.props;
    const content = getChildren(children);

    if (live) {
      return (
        <LiveWrapper>
          <LiveProvider code={children} scope={all}>
            <LivePreview />
            <LiveError />
            <LiveEditor />
          </LiveProvider>
        </LiveWrapper>
      );
    }

    return (
      <Wrapper className={className} innerRef={this.wrapper}>
        <Highlight {...defaultProps} code={content} language="jsx" theme={theme}>
          {renderCodeBlock}
        </Highlight>
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
