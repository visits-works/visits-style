import { css } from 'styled-components';

const prismColors = {
  char: '#D8DEE9',
  comment: '#B2B2B2',
  keyword: '#c5a5c5',
  lineHighlight: '#353b45',
  primitive: '#5a9bcf',
  string: '#8dc891',
  variable: '#d7deea',
  boolean: '#ff8b50',
  punctuation: '#88C6BE',
  tag: '#fc929e',
  function: '#79b6f2',
  className: '#FAC863',
  method: '#6699CC',
  operator: '#fc929e',
};

export const HighlightStyle = css`
  background-color: rgb(40, 44, 52);
  color: rgb(255, 255, 255);
  border-radius: 4px;
  tab-size: 1.5rem;
  padding: 0.725rem;

  &,
  & > code {
    height: auto !important;
    white-space: pre-wrap;
    word-break: break-word;
  }

  code {
    margin: 1rem;
  }

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${prismColors.comment};
  }

  .token.property,
  .token.number,
  .token.function-name,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: ${prismColors.primitive};
  }

  .token.tag {
    color: ${prismColors.tag};
  }
  .token.string {
    color: ${prismColors.string};
  }
  .token.punctuation {
    color: ${prismColors.punctuation};
  }
  .token.selector,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: ${prismColors.char};
  }

  .token.operator,
  .token.entity,
  .token.url,
  .token.variable {
    color: ${prismColors.variable};
  }

  .token.attr-value {
    color: ${prismColors.string};
  }

  .token.keyword {
    color: ${prismColors.keyword};
  }
  .token.atrule,
  .token.class-name {
    color: ${prismColors.className};
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
  .namespace {
    opacity: 0.7;
  }

`;
