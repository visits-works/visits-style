import{H as d,C as t}from"./styled-components.browser.esm-482fcb23.js";import{c as a}from"./polished.esm-d58a66c9.js";import{f as l}from"./findColorInvert-e5bd6638.js";import{b as c}from"./boxShadow-92ba1fe5.js";import{s as b}from"./setSize-000c66a5.js";import{d as u}from"./disabledColor-bb7a461b.js";function p({theme:o,color:e,outline:i,disabled:s}){if(s)return u(o);if(!e)return t(["border-color:",";color:",";&:hover{border-color:",";}&:active{border-color:",";}"],o.border,o.text,o.borderHover,o.borderActive);const r=o[e]||e,n=l(o,r);return i?t(["background-color:transparent;border-color:",";color:",";&:hover{background-color:",";color:",";}&:active{background-color:",";}&:focus:not(:active){","}"],r,r,r,n,a(.1,r),c("0.1rem",r,.5)):t(["background-color:",";border-color:transparent;color:",";box-shadow:none;&:hover{color:",";background-color:",";}&:active{background-color:",";}&:focus:not(:active){","}"],r,n,n,a(.05,r),a(.1,r),c("0.1rem",r,.5))}const C=d.button.withConfig({displayName:"Button",componentId:"sc-f6cc58-0"})(["position:relative;outline:none;appearance:none;box-sizing:border-box;display:inline-block;text-align:center;white-space:nowrap;cursor:pointer;justify-content:center;vertical-align:middle;user-select:none;background:transparent;border:1px solid transparent;border-radius:",";padding:",";line-height:",";"," ",""],({round:o,theme:e})=>o?"2456189px":e.radius,({icon:o})=>o?"0.375em":"0.375em 0.75em",({icon:o})=>o?1:1.5,p,({size:o})=>b("font-size",o));export{C as B};
//# sourceMappingURL=index-49f1d340.js.map
