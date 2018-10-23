import { css } from 'styled-components';

/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */
export default css`
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
    line-height: 1.15;
    -webkit-text-size-adjust: 100%
  }

  body {
    margin: 0;
    font-family: "Hiragino Sans", ヒラギノ角ゴシック, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", 游ゴシック体, "Yu Gothic", YuGothic, "ヒラギノ角ゴシック Pro", HiraKakuPro-W3, "Hiragino Kaku Gothic Pro", Quicksand, メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  }

  h1 {
      font-size: 2em;
      margin: .67em 0
  }

  hr {
      box-sizing: content-box;
      height: 0;
      overflow: visible
  }

  pre {
      font-family: monospace,monospace;
      font-size: 1em
  }

  a {
      background-color: transparent
  }

  abbr[title] {
      border-bottom: none;
      text-decoration: underline;
      text-decoration: underline dotted
  }

  b,strong {
      font-weight: bolder
  }

  code,kbd,samp {
      font-family: monospace,monospace;
      font-size: 1em
  }

  small {
      font-size: 80%
  }

  sub,sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline
  }

  sub {
      bottom: -.25em
  }

  sup {
      top: -.5em
  }

  img {
      border-style: none
  }

  button,input,optgroup,select,textarea {
      font-family: inherit;
      font-size: 100%;
      line-height: 1.15;
      margin: 0
  }

  button,input {
      overflow: visible
  }

  button,select {
      text-transform: none
  }

  [type=button],[type=reset],[type=submit],button {
      -webkit-appearance: button
  }

  [type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner {
      border-style: none;
      padding: 0
  }

  [type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring {
      outline: 1px dotted ButtonText
  }

  fieldset {
      padding: .35em .75em .625em
  }

  legend {
      box-sizing: border-box;
      color: inherit;
      display: table;
      max-width: 100%;
      padding: 0;
      white-space: normal
  }

  progress {
      vertical-align: baseline
  }

  textarea {
      overflow: auto
  }

  [type=checkbox],[type=radio] {
      box-sizing: border-box;
      padding: 0
  }

  [type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button {
      height: auto
  }

  [type=search] {
      -webkit-appearance: textfield;
      outline-offset: -2px
  }

  [type=search]::-webkit-search-decoration {
      -webkit-appearance: none
  }

  ::-webkit-file-upload-button {
      -webkit-appearance: button;
      font: inherit
  }

  details {
      display: block
  }

  summary {
      display: list-item
  }

  template {
      display: none
  }

  [hidden] {
      display: none
  }

  blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html, iframe, legend, li, ol, p, pre, textarea, ul {
    margin: 0;
    padding: 0;
  }

  *, ::after, ::before {
    box-sizing: inherit;
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
