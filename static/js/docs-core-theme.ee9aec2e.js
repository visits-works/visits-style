(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"./docs/core/theme.mdx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),o=n.n(r),s=n("./node_modules/@mdx-js/tag/dist/index.js"),a=(n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),n("./src/utils/index.ts")),c=n("./src/components/index.ts"),l=n("./src/theme/light.ts");function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.default=function(e){var t=e.components;i(e,["components"]);return o.a.createElement(s.MDXTag,{name:"wrapper",components:t},o.a.createElement(s.MDXTag,{name:"p",components:t},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4e8b\u306b\u8272\u3092\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),o.a.createElement(s.MDXTag,{name:"h2",components:t,props:{id:"public-theme"}},"public theme"),o.a.createElement(c.g,null,Object.keys(l.a).map(function(e){return"color"!==e&&o.a.createElement("div",{key:e,style:{display:"inline-block",backgroundColor:l.a[e],width:"150px",height:"150px",textAlign:"right",fontWeight:600,padding:"0.5rem",margin:"0.5rem",color:Object(a.a)(l.a[e])}},e,o.a.createElement("br",null),l.a[e])})))}}}]);