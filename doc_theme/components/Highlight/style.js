import { css } from 'styled-components';

export default css`
  color: #ffffff;
  background-color: #282c34;
  tab-size: 1.5em;

  /* Code blocks */
  pre[class*="language-"] {
    padding: 1em;
    margin: .5em 0;
    overflow: auto;
    border-radius: 0.3em;
    font-family: source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace !important;

    height: auto !important;
    margin: 1rem;
    font-size: 14px;
    line-height: 20px;
    white-space: pre-wrap;
    word-break: break-word;
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    background-color: #14161a;
    display: block;
    margin: -0.125rem calc(-1rem - 15px);
    padding: 0.125rem calc(1rem + 15px);
  }

  .namespace {
    opacity: .7;
  }

  .token.attr-name {
    color: #c5a5c5;
  }

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #999999;
  }

  .token.property,
  .token.number,
  .token.function-name,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #5a9bcf;
  }

  .token.boolean {
    color: #ff8b50;
  }

  .token.tag {
    color: #fc929e;
  }

  .token.string {
    color: #8dc891;
  }

  .token.punctuation {
    color: #5FB3B3;
  }

  .token.selector, .token.char, .token.builtin, .token.inserted {
    color: #D8DEE9;
  }

  .token.function {
    color: #79b6f2;
  }

  .token.operator, .token.entity, .token.url, .token.variable {
    color: #d7deea;
  }

  .token.attr-value {
    color: #8dc891;
  }

  .token.keyword {
    color: #c5a5c5;
  }

  .token.atrule, .token.class-name {
    color: #FAC863;
  }

  .token.important {
    font-weight: 400;
  }

  .token.bold {
    font-weight: 700;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .language-css .token.string,
  .style .token.string {
    color: #87C38A;
  }

  .token.atrule,
  .token.attr-value {
    color: #F9EE98;
  }

  .token.function {
    color: #DAD085;
  }

  .token.regex {
    color: #E9C062;
  }

  .token.important {
    color: #fd971f;
  }
`;
