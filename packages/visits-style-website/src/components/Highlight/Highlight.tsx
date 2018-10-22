import React, { Component, createRef, RefObject } from 'react';
import styled from 'styled-components';
// @ts-ignore
import Highlight, { defaultProps } from 'prism-react-renderer';
// @ts-ignore
import theme from 'prism-react-renderer/themes/vsDarkPlus';
// @ts-ignore
import { Pre } from '@components';

// @ts-ignore
import normalizeHtml from 'react-live/src/utils/normalizeHtml';
// @ts-ignore
import htmlToPlain from 'react-live/src/utils/htmlToPlain';
// @ts-ignore
import { getIndent, getDeindentLevel } from 'react-live/src/utils/getIndent';
// @ts-ignore
import selectionRange from 'react-live/src/vendor/selection-range';

interface Props {
  className?: string;
  children: any;
  live?: boolean;
  onChange?: (code: string) => void;
  onError?: (e: any) => void;
}

const Wrapper = styled(Pre)`
  position: relative;
  font-weight: 400;
  max-width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;

  overflow: auto;
  max-height: 340px;
  font-family: Menlo, Monaco, "Courier New", monospace;
  tab-size: 1.5em;

  &.hover {
    border-color: ${({ theme }) => theme.warning};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.warning};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.link};
  }
`;

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

export default class HighlightCode extends Component<Props> {
  element: RefObject<HTMLParagraphElement> = createRef();
  html = '';
  code = '';

  componentDidMount() {
    this.code = this.props.children;
  }

  shouldComponentUpdate(props: Props) {
    return props.children !== this.props.children;
  }

  getCode() {
    if (!this.element.current) return '';

    const { innerHTML } = this.element.current;
    if (this.element.current.innerHTML !== this.html) {
      this.code = htmlToPlain(normalizeHtml(innerHTML));
      this.html = innerHTML;
    }

    return this.code;
  }

  onInput = ({ keyCode }: any) => {
    if (!this.element.current) return;
    if ([37, 38, 39, 40, 90, 91, 93].indexOf(keyCode) !== -1) return;

    if (this.props.onChange) {
      this.props.onChange(this.getCode());
    }
  }

  onKeyDown = (e: any) => {
    switch(e.key) {
      case 'Tab': {
        document.execCommand('insertHTML', false, '  ');
        e.preventDefault();
      }
      case 'Enter': {
        const { start: cursorPos } = selectionRange(this.element.current)
        const indentation = getIndent(this.getCode(), cursorPos)
        document.execCommand('insertHTML', false, '\n' + indentation)
        e.preventDefault();
      }
      case 'Backspace': {
        const { start: cursorPos, end: cursorEndPos } = selectionRange(this.element.current);
        if (cursorPos !== cursorEndPos) return;

        const deindent = getDeindentLevel(this.getCode(), cursorPos)
        if (deindent <= 0) return;
        for (let i = 0; i < deindent; i += 1) {
          document.execCommand('delete', false);
        }
        e.preventDefault();
      }
    }
  }

  renderCodeBlock = ({ className, style, tokens, getLineProps, getTokenProps }: any) => {
    const target = cleanTokens(tokens);
    const contents = target.map((line: any[], i: number) => (
      <div {...getLineProps({ line, key: i })}>
        {line.map((token: any, key: number) => <span {...getTokenProps({ token, key })} />)}
      </div>
    ));
    const isEditable = this.props.onChange !== undefined;
    if (!isEditable) {
      return <Wrapper className={className} style={{ ...style }}>{contents}</Wrapper>;
    }

    return (
      <Wrapper
        className={className}
        innerRef={this.element}
        style={{ ...style }}
        spellCheck="false"
        contentEditable={isEditable}
        onKeyUp={this.onInput}
        onKeyDown={this.onKeyDown}
        suppressContentEditableWarning="true"
      >
        {contents}
      </Wrapper>
    );
  }

  render() {
    const { className, children } = this.props;
    return (
      <Highlight className={className} {...defaultProps} code={children} language="jsx" theme={theme}>
        {this.renderCodeBlock}
      </Highlight>
    );
  }
}

