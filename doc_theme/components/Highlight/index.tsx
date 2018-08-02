import React, { PureComponent, createRef } from 'react';
import styled from 'styled-components';

import prism from 'prismjs';
import 'prismjs/components/prism-json.min';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-bash.min';
import 'prismjs/components/prism-markdown.min';
import 'prismjs/components/prism-typescript.min';

import { Pre, Button } from '../../../src/components';
import PrismStyle from './style';

const Wrapper = styled.figure`
  position: relative;
  font-weight: 400;
  max-width: 100%;
  overflow: hidden;
  padding: 0;
  margin-bottom: 1rem;
  border: 2px solid ${({ theme }) => theme.border};

  &.hover {
    border-color: ${({ theme }) => theme.warning};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.warning};
  }

  ${PrismStyle}

  pre {
    overflow: auto;
    max-width: 100%;
    max-height: 340px;
    margin: 0 !important;
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

interface Props {
  className?: string;
  children: React.ReactChildren;
}

export default class Highlight extends PureComponent<Props> {

  componentDidMount() {
    if (this.pre.current) {
      prism.highlightElement(this.pre.current);
    }
  }

  componentDidUpdate() {
    if (this.pre.current) {
      prism.highlightElement(this.pre.current);
    }
  }

  copyText = () => {
    // @ts-ignore
    if (document.selection) {
      // @ts-ignore
      const range = document.body.createTextRange();
      range.moveToElementText(this.pre.current);
      range.select();
    } else if (window.getSelection) {
      const range = document.createRange();
      // @ts-ignore
      range.selectNode(this.pre.current);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }
    document.execCommand('copy');
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
    return (
      <Wrapper innerRef={this.wrapper}>
        <Pre className={className} innerRef={this.pre}>
          <code>{children}</code>
        </Pre>
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
