import React, { PureComponent, createRef } from 'react';
import styled, { css } from 'styled-components';

import 'prismjs';
import 'prismjs/components/prism-json.min';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-bash.min';
import 'prismjs/components/prism-markdown.min';
import 'prismjs/components/prism-typescript.min';

import prism from 'prismjs';
import { Pre, Button } from '@components';
import PrismStyle from './style';

const Wrapper = styled.figure`
  position: relative;
  font-weight: 400;
  max-width: 100%;
  overflow: hidden;
  padding: 0;
  border-radius: 0 0 5px 5px;
  margin-bottom: 1rem;

  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.background};

  pre {
    overflow: auto;
    max-width: 100%;
    ${PrismStyle}
  }

  ${Button} {
    position: absolute;
    right: .25rem;
    top: .25rem;
    padding-bottom: 0;
    padding-top: 0;
    background-color: transparent;
    border: none;

    &:hover {
      background-color: ${({ theme }) => theme.warning};
      color: rgba(0,0,0,.7);
    }
  }
`;

export default class Highlight extends PureComponent {

  componentDidMount() {
    prism.highlightElement(this.pre.current);
  }

  componentDidUpdate() {
    prism.highlightElement(this.pre.current);
  }

  copyText = () => {
    if (document.selection) {
      var range = document.body.createTextRange();
      range.moveToElementText(this.pre.current);
      range.select();
    } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(this.pre.current);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }
    document.execCommand('copy');
  }

  pre = createRef();

  render() {
    const { children, className } = this.props;
    return (
      <Wrapper>
        <Pre className={className} innerRef={this.pre}>
          <code>{children}</code>
        </Pre>
        <Button size="small" onClick={this.copyText}>Copy</Button>
      </Wrapper>
    );
  }
}
