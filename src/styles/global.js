import { Children } from 'react';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

injectGlobal`
  ${normalize()}

  blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html, iframe, legend, li, ol, p, pre, textarea, ul {
    margin: 0;
    padding: 0;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  /* global styles */
  html {
    display: block;
    font-size: 16px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    min-width: 300px;
    overflow-x: hidden;
    overflow-y: scroll;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
    box-sizing: border-box;
  }

  body {
    font-family: "ヒラギノ角ゴシック Pro", SF UI Display, Arial, "Hiragino Kaku Gothic Pro", "游ゴシック体", "Yu Gothic", YuGothic, 'メイリオ' , Meiryo , "ＭＳ Ｐゴシック", "MS PGothic";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  }

  button {
    font-size: inherit;
  }

  article, aside, figure,
  footer, header, hgroup, section {
    display: block;
  }

  input[type="checkbox"], input[type="radio"] {
    vertical-align: baseline;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: #3273dc;

    &:hover {
      color: currentColor;
    }
  }

  img {
    height: auto;
    max-width: 100%;
  }

  small {
    font-size: .875em;
  }

  span {
    font-style: inherit;
    font-weight: inherit;
  }

  strong {
    color: #363636;
    font-weight: 700;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  table td,table th {
    text-align: left;
    vertical-align: top;
  }

  ul {
    list-style-type: none;
  }
`;
