import { css } from 'styled-components';

export const CodeMirrorStyle = css`
  .CodeMirror {
    font-family: monospace;
    height: auto;
    overflow: auto;
    color: black;
    direction: ltr;
    position: relative;

    background-color: #263238;
    color: rgba(233, 237, 237, 1);
  }

  .CodeMirror-lines {
    padding: 4px 0;
  }
  .CodeMirror pre {
    padding: 0 4px;
  }

  .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {
    background-color: white;
  }

  .CodeMirror-gutters {
    white-space: nowrap;
    background: #263238;
    color: rgb(83,127,126);
    border: none;
  }
  .CodeMirror-linenumbers {}
  .CodeMirror-linenumber {
    padding: 0 3px 0 5px;
    min-width: 20px;
    text-align: right;
    color: rgb(83,127,126);
    white-space: nowrap;
  }

  .CodeMirror-guttermarker { color: black; }
  .CodeMirror-guttermarker-subtle { color: #999; }

  .CodeMirror-cursor {
    border-left: 1px solid #f8f8f0;
    border-right: none;
    width: 0;
  }

  .CodeMirror div.CodeMirror-secondarycursor {
    border-left: 1px solid silver;
  }
  .cm-fat-cursor .CodeMirror-cursor {
    width: auto;
    border: 0 !important;
    background: #7e7;
  }
  .cm-fat-cursor div.CodeMirror-cursors {
    z-index: 1;
  }
  .cm-fat-cursor-mark {
    background-color: rgba(20, 255, 20, 0.5);
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
  }
  .cm-animate-fat-cursor {
    width: auto;
    border: 0;
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
    background-color: #7e7;
  }
  @-moz-keyframes blink {
    0% {}
    50% { background-color: transparent; }
    100% {}
  }
  @-webkit-keyframes blink {
    0% {}
    50% { background-color: transparent; }
    100% {}
  }
  @keyframes blink {
    0% {}
    50% { background-color: transparent; }
    100% {}
  }

  .CodeMirror-overwrite .CodeMirror-cursor {}

  .cm-tab { display: inline-block; text-decoration: inherit; }

  .CodeMirror-rulers {
    position: absolute;
    left: 0; right: 0; top: -50px; bottom: -20px;
    overflow: hidden;
  }
  .CodeMirror-ruler {
    border-left: 1px solid #ccc;
    top: 0; bottom: 0;
    position: absolute;
  }

  .CodeMirror-guttermarker,
  .CodeMirror-guttermarker-subtle,
  .CodeMirror-linenumber { color: rgb(83,127,126); }

  .cm-header {color: blue;}
  .cm-quote {color: #090;}
  .cm-negative {color: #d44;}
  .cm-positive {color: #292;}
  .cm-header, .cm-strong {font-weight: bold;}
  .cm-em {font-style: italic;}
  .cm-link {text-decoration: underline;}
  .cm-strikethrough {text-decoration: line-through;}

  .cm-keyword {color: rgba(199, 146, 234, 1);}
  .cm-atom {color: #F77669;}
  .cm-number {color: #F77669;}
  .cm-def {color: rgba(233, 237, 237, 1);}
  .cm-property { color: #80CBAE; }
  .cm-operator { color: rgba(233, 237, 237, 1); }
  .cm-variable { color: #82B1FF; }
  .cm-variable-2 { color: #80CBC4; }
  .cm-variable-3, .cm-type { color: #DECB6B; }
  .cm-comment {color: #546E7A;}
  .cm-string { color: #C3E88D; }
  .cm-string-2 { color: #80CBC4; }
  .cm-meta {color: #80CBC4;}
  .cm-qualifier {color: #DECB6B;}
  .cm-builtin {color: #DECB6B;}
  .cm-bracket {color: #997;}
  .cm-tag { color: rgba(255, 83, 112, 1); }
  .cm-attribute {color: #FFCB6B;}
  .cm-hr {color: #999;}
  .cm-link {color: #00c;}

  .cm-error {
    color: rgba(255, 255, 255, 1.0);
    background-color: #EC5F67;
  }
  .cm-invalidchar {color: #f00;}

  .CodeMirror-composing { border-bottom: 2px solid; }

  div.CodeMirror-selected { background: rgba(255, 255, 255, 0.15); }
  .CodeMirror-focused div.CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }

  /* Default styles for common addons */

  div.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}
  div.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}
  .CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }
  .CodeMirror-activeline-background {background: rgba(0, 0, 0, 0);}

  .CodeMirror-matchingbracket {
    text-decoration: underline;
    color: white !important;
  }

  .CodeMirror-scroll {
    overflow: scroll !important;
    margin-bottom: -30px; margin-right: -30px;
    padding-bottom: 30px;
    max-height: 300px;
    outline: none;
    position: relative;
  }
  .CodeMirror-sizer {
    position: relative;
    border-right: 30px solid transparent;
  }

  .CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {
    position: absolute;
    z-index: 6;
    display: none;
  }
  .CodeMirror-vscrollbar {
    right: 0; top: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .CodeMirror-hscrollbar {
    bottom: 0; left: 0;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .CodeMirror-scrollbar-filler {
    right: 0; bottom: 0;
  }
  .CodeMirror-gutter-filler {
    left: 0; bottom: 0;
  }

  .CodeMirror-gutters {
    position: absolute; left: 0; top: 0;
    min-height: 100%;
    z-index: 3;
  }
  .CodeMirror-gutter {
    white-space: normal;
    height: 100%;
    display: inline-block;
    vertical-align: top;
    margin-bottom: -30px;
  }
  .CodeMirror-gutter-wrapper {
    position: absolute;
    z-index: 4;
    background: none !important;
    border: none !important;
  }
  .CodeMirror-gutter-background {
    position: absolute;
    top: 0; bottom: 0;
    z-index: 4;
  }
  .CodeMirror-gutter-elt {
    position: absolute;
    cursor: default;
    z-index: 4;
  }
  .CodeMirror-gutter-wrapper ::selection { background-color: transparent }
  .CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }

  .CodeMirror-lines {
    cursor: text;
    min-height: 1px;
  }
  .CodeMirror pre {
    -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;
    border-width: 0;
    background: transparent;
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    white-space: pre;
    word-wrap: normal;
    line-height: inherit;
    color: inherit;
    z-index: 2;
    position: relative;
    overflow: visible;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-variant-ligatures: contextual;
    font-variant-ligatures: contextual;
  }
  .CodeMirror-wrap pre {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: normal;
  }

  .CodeMirror-linebackground {
    position: absolute;
    left: 0; right: 0; top: 0; bottom: 0;
    z-index: 0;
  }

  .CodeMirror-linewidget {
    position: relative;
    z-index: 2;
    padding: 0.1px;
  }

  .CodeMirror-widget {}

  .CodeMirror-rtl pre { direction: rtl; }

  .CodeMirror-code {
    outline: none;
  }
  .CodeMirror-scroll,
  .CodeMirror-sizer,
  .CodeMirror-gutter,
  .CodeMirror-gutters,
  .CodeMirror-linenumber {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  .CodeMirror-measure {
    position: absolute;
    width: 100%;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  .CodeMirror-cursor {
    position: absolute;
    pointer-events: none;
  }
  .CodeMirror-measure pre { position: static; }

  div.CodeMirror-cursors {
    visibility: hidden;
    position: relative;
    z-index: 3;
  }
  div.CodeMirror-dragcursors {
    visibility: visible;
  }

  .CodeMirror-focused div.CodeMirror-cursors {
    visibility: visible;
  }

  .CodeMirror-selected { background: #d9d9d9; }
  .CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }
  .CodeMirror-crosshair { cursor: crosshair; }
  .CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }
  .CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }

  .cm-searching {
    background-color: #ffa;
    background-color: rgba(255, 255, 0, .4);
  }

  .cm-force-border { padding-right: .1px; }

  @media print {
    .CodeMirror div.CodeMirror-cursors {
      visibility: hidden;
    }
  }

  .cm-tab-wrap-hack:after { content: ''; }
  span.CodeMirror-selectedtext { background: none; }
`;