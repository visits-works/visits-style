"use strict";

var _react = require("react");

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html, iframe, legend, li, ol, p, pre, textarea, ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  *, ::after, ::before {\n    box-sizing: inherit;\n  }\n\n  /* global styles */\n  html {\n    font-size: 16px;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    min-width: 300px;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    text-rendering: optimizeLegibility;\n    box-sizing: border-box;\n  }\n\n  body {\n    font-family: \"\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4\u30B7\u30C3\u30AF Pro\", SF UI Display, Arial, \"Hiragino Kaku Gothic Pro\", \"\u6E38\u30B4\u30B7\u30C3\u30AF\u4F53\", \"Yu Gothic\", YuGothic, '\u30E1\u30A4\u30EA\u30AA' , Meiryo , \"\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF\", \"MS PGothic\";\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n  }\n\n  button {\n    font-size: inherit;\n  }\n\n  article, aside, figure,\n  footer, header, hgroup, section {\n    display: block;\n  }\n\n  input[type=\"checkbox\"], input[type=\"radio\"] {\n    vertical-align: baseline;\n  }\n\n  a {\n    cursor: pointer;\n    text-decoration: none;\n\n    & strong {\n      color: currentColor;\n    }\n  }\n\n  img {\n    height: auto;\n    max-width: 100%;\n  }\n\n  small {\n    font-size: .875em;\n  }\n\n  span {\n    font-style: inherit;\n    font-weight: inherit;\n  }\n\n  strong {\n    color: #363636;\n    font-weight: 700;\n  }\n\n  table td,table th {\n    text-align: left;\n    vertical-align: top;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _styledComponents.injectGlobal)(_templateObject(), {
  html: {
    lineHeight: "1.15",
    textSizeAdjust: "100%",
    fontFamily: "sans-serif"
  },
  "article,\n  aside,\n  footer,\n  header,\n  nav,\n  section": {
    display: "block"
  },
  h1: {
    fontSize: "2em",
    margin: "0.67em 0"
  },
  "figcaption,\n  figure,\n  main": {
    display: "block"
  },
  figure: {
    margin: "1em 40px"
  },
  hr: {
    boxSizing: "content-box",
    height: "0",
    overflow: "visible"
  },
  pre: {
    fontFamily: "monospace, monospace",
    fontSize: "1em"
  },
  a: {
    "background-color": "transparent",
    "-webkit-text-decoration-skip": "objects"
  },
  "abbr[title]": {
    borderBottom: "none",
    textDecoration: "underline dotted"
  },
  "b,\n  strong": {
    fontWeight: "inherit"
  },
  "code,\n  kbd,\n  samp": {
    fontFamily: "monospace, monospace",
    fontSize: "1em"
  },
  dfn: {
    fontStyle: "italic"
  },
  mark: {
    backgroundColor: "#ff0",
    color: "#000"
  },
  small: {
    fontSize: "80%"
  },
  "sub,\n  sup": {
    fontSize: "75%",
    lineHeight: "0",
    position: "relative",
    verticalAlign: "baseline"
  },
  sub: {
    bottom: "-0.25em"
  },
  sup: {
    top: "-0.5em"
  },
  "audio,\n  video": {
    display: "inline-block"
  },
  "audio:not([controls])": {
    display: "none",
    height: "0"
  },
  img: {
    borderStyle: "none"
  },
  "svg:not(:root)": {
    overflow: "hidden"
  },
  "button,\n  input,\n  optgroup,\n  select,\n  textarea": {
    margin: "0",
    fontFamily: "sans-serif",
    fontSize: "100%",
    lineHeight: "1.15"
  },
  "button,\n  input": {
    overflow: "visible"
  },
  "button,\n  select": {
    textTransform: "none"
  },
  "button,\n  html [type=\"button\"],\n  [type=\"reset\"],\n  [type=\"submit\"]": {
    "-webkit-appearance": "button"
  },
  "button::-moz-focus-inner,\n  [type=\"button\"]::-moz-focus-inner,\n  [type=\"reset\"]::-moz-focus-inner,\n  [type=\"submit\"]::-moz-focus-inner": {
    borderStyle: "none",
    padding: "0"
  },
  "button:-moz-focusring,\n  [type=\"button\"]:-moz-focusring,\n  [type=\"reset\"]:-moz-focusring,\n  [type=\"submit\"]:-moz-focusring": {
    outline: "1px dotted ButtonText"
  },
  fieldset: {
    border: "1px solid #c0c0c0",
    margin: "0 2px",
    padding: "0.35em 0.625em 0.75em"
  },
  legend: {
    boxSizing: "border-box",
    color: "inherit",
    display: "table",
    maxWidth: "100%",
    padding: "0",
    whiteSpace: "normal"
  },
  progress: {
    display: "inline-block",
    verticalAlign: "baseline"
  },
  textarea: {
    overflow: "auto"
  },
  "[type=\"checkbox\"],\n  [type=\"radio\"]": {
    boxSizing: "border-box",
    padding: "0"
  },
  "[type=\"number\"]::-webkit-inner-spin-button,\n  [type=\"number\"]::-webkit-outer-spin-button": {
    height: "auto"
  },
  "[type=\"search\"]": {
    "-webkit-appearance": "textfield",
    outlineOffset: "-2px"
  },
  "[type=\"search\"]::-webkit-search-cancel-button,\n  [type=\"search\"]::-webkit-search-decoration": {
    "-webkit-appearance": "none"
  },
  "::-webkit-file-upload-button": {
    "-webkit-appearance": "button",
    font: "inherit"
  },
  "details,\n  menu": {
    display: "block"
  },
  summary: {
    display: "list-item"
  },
  canvas: {
    display: "inline-block"
  },
  template: {
    display: "none"
  },
  "[hidden]": {
    display: "none"
  },
  body: {
    margin: "0"
  },
  "a:active,\n  a:hover": {
    outlineWidth: "0"
  }
});