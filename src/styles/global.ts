import { injectGlobal } from 'styled-components';
injectGlobal`
  /*! minireset.css v0.0.3 | MIT License | github.com/jgthms/minireset.css */
  html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}ul{list-style:none}button,input,select,textarea{margin:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}img,embed,iframe,object,audio,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0;text-align:left}

  blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html, iframe, legend, li, ol, p, pre, textarea, ul {
    margin: 0;
    padding: 0;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

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
    font-family: "Hiragino Sans", ヒラギノ角ゴシック, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", 游ゴシック体, "Yu Gothic", YuGothic, "ヒラギノ角ゴシック Pro", HiraKakuPro-W3, "Hiragino Kaku Gothic Pro", Quicksand, メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
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
