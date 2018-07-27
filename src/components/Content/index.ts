import React from 'react';
import styled, { ThemeType, StyledComponentClass } from '../../styled';

const Content = styled.div`
  color: ${({ theme }) => theme.text};

  li + li {
    margin-top: 0.25em;
  }

  p,
  dl,
  ol,
  ul,
  blockquote,
  pre,
  table {
    &:not(:last-child) {
      margin-bottom: 1em;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: 1.125;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 0.5em;
  }

  h2 {
    font-size: 1.75em;
    margin-bottom: 0.5714em;

    &:not(:first-child) {
      margin-top: 1.1428em;
    }
  }

  h3 {
    font-size: 1.5em;
    margin-bottom: 0.6666em;

    &:not(:first-child) {
      margin-top: 1.3333em;
    }
  }

  h4 {
    font-size: 1.25em;
    margin-bottom: 0.8em;
  }

  h5 {
    font-size: 1.125em;
    margin-bottom: 0.8888em;
  }

  h6 {
    font-size: 1em;
    margin-bottom: 1em;
  }

  ol {
    list-style: decimal outside;
    margin-left: 2em;
    margin-top: 1em;
  }

  ul {
    list-style: disc outside;
    margin-left: 2em;
    margin-top: 1em;
    ul {
      list-style-type: circle;
      margin-top: 0.5em;
      ul {
        list-style-type: square;
      }
    }
  }

  dd {
    margin-left: 2em;
  }

  table {
    width: 100%;

    td, th {
      border: 1px solid ${({ theme }) => theme.border};
      border-width: 0 0 1px;
      padding: 0.5em 0.75em;
      vertical-align: top;
    }

    th {
      color: ${({ theme }) => theme.text};
      text-align: left;
    }

    thead {
      td, th {
        border-width: 0 0 2px;
        color: ${({ theme }) => theme.text};
      }
    }

    tfoot {
      td, th {
        border-width: 2px 0 0;
        color: ${({ theme }) => theme.text};
      }
    }

    tbody > tr:last-child{
      td, th {
        border-bottom-width: 0;
      }
    }
  }
`;
Content.displayName = 'Content';

export { default as Pre } from './Pre';
export { default as Code } from './Code';
export { default as H1 } from './H1';

export default Content;
