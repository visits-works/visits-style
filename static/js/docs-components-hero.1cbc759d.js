(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./docs/components/hero.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/react/index.js"),l=t.n(a),r=t("./node_modules/@mdx-js/tag/dist/index.js"),c=t("./node_modules/docz/dist/index.m.js"),o=t("./doc_theme/assets/visits.js"),m=t("./src/components/AppBar/index.tsx"),i=t("./node_modules/styled-components/dist/styled-components.browser.es.js"),s=t("./src/components/Grid/Container.ts"),h=t("./src/utils/findColorInvert.ts"),u=t("./src/utils/media.ts");const p=i["c"].div`
  flex-grow: 1;
  flex-shrink: 0;
  padding: 3rem 1.5rem;

  ${({center:e})=>e?"text-align: center;":""}

  h1 {
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.125;

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.25;
  }

  h1+h2 {
    margin-top: -1.25rem;
  }
`,d=i["c"].div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${function({color:e,theme:n}){if(!e)return"";const t="light"===e?n.color.greyLight:n[e];return`background-color: ${t}; color: ${Object(h.a)(t)};`}}
  ${function({size:e}){if(!e||"small"===e)return"";switch(e){case"medium":return u["a"]`padding-bottom: 9rem; padding-top: 9rem;`;case"large":return u["a"]`padding-bottom: 18rem; padding-top: 18rem;`;case"full":return i["b"]`
        min-height: 100vh;

        ${p} {
          align-items: center;
          display: flex;
        }
      `;default:return""}}}

  header {
    background-color: inherit;
    color: inherit;
  }

  header+${p} {
    margin-top: 3.25rem;
    margin-bottom: 3.25rem;
  }
`;function E({children:e,color:n,size:t,center:l,header:r}){return a.createElement(d,{color:n,size:t},r,a.createElement(p,{center:l},a.createElement(s.a,null,e)))}n.default=function(e){var n=e.components;return l.a.createElement(r.MDXTag,{name:"wrapper",components:n},"\n",l.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"basic-usage"}},l.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#basic-usage"}},l.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Basic Usage"),"\n",l.a.createElement(c.d,{__code:function(e){return e&&l.a.createElement(e.pre,{className:"react-prism language-jsx"},l.a.createElement("code",null,"<Hero>\n  <h1>Title</h1>\n  <h2>Subtitle</h2>\n</Hero>"))}},l.a.createElement(E,null,l.a.createElement("h1",null,"Title"),l.a.createElement("h2",null,"Subtitle"))),"\n",l.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"colors"}},l.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#colors"}},l.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Colors"),"\n",l.a.createElement(c.d,{__code:function(e){return e&&l.a.createElement(e.pre,{className:"react-prism language-jsx"},l.a.createElement("code",null,'<Hero color="primary">\n  <h1>Title</h1>\n  <h2>Subtitle</h2>\n</Hero>\n<br />\n<Hero color="link">\n  <h1>Title</h1>\n  <h2>Subtitle</h2>\n</Hero>\n<br />\n<Hero color="info">\n  <h1>Title</h1>\n  <h2>Subtitle</h2>\n</Hero>\n<br />\n<Hero color="success">\n  <h1>Title</h1>\n  <h2>Subtitle</h2>\n</Hero>\n<br />\n<Hero color="warning">\n  <h1>Title</h1>\n  <h2>Subtitle</h2>\n</Hero>\n<br />\n<Hero color="danger">\n  <h1>Title</h1>\n  <h2>Subtitle</h2>\n</Hero>\n<br />\n<Hero color="light">\n  <h1>Title</h1>\n  <h2>Subtitle</h2>\n</Hero>\n<br />\n<Hero color="dark">\n  <h1>Title</h1>\n  <h2>Subtitle</h2>\n</Hero>'))}},l.a.createElement(E,{color:"primary"},l.a.createElement("h1",null,"Title"),l.a.createElement("h2",null,"Subtitle")),l.a.createElement("br",null),l.a.createElement(E,{color:"link"},l.a.createElement("h1",null,"Title"),l.a.createElement("h2",null,"Subtitle")),l.a.createElement("br",null),l.a.createElement(E,{color:"info"},l.a.createElement("h1",null,"Title"),l.a.createElement("h2",null,"Subtitle")),l.a.createElement("br",null),l.a.createElement(E,{color:"success"},l.a.createElement("h1",null,"Title"),l.a.createElement("h2",null,"Subtitle")),l.a.createElement("br",null),l.a.createElement(E,{color:"warning"},l.a.createElement("h1",null,"Title"),l.a.createElement("h2",null,"Subtitle")),l.a.createElement("br",null),l.a.createElement(E,{color:"danger"},l.a.createElement("h1",null,"Title"),l.a.createElement("h2",null,"Subtitle")),l.a.createElement("br",null),l.a.createElement(E,{color:"light"},l.a.createElement("h1",null,"Title"),l.a.createElement("h2",null,"Subtitle")),l.a.createElement("br",null),l.a.createElement(E,{color:"dark"},l.a.createElement("h1",null,"Title"),l.a.createElement("h2",null,"Subtitle"))),"\n",l.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"sizes"}},l.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#sizes"}},l.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Sizes"),"\n",l.a.createElement(r.MDXTag,{name:"p",components:n},"default size is ",l.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"small")),"\n",l.a.createElement(c.d,{__code:function(e){return e&&l.a.createElement(e.pre,{className:"react-prism language-jsx"},l.a.createElement("code",null,'<Hero size="medium" color="primary">\n  <h1>Medium</h1>\n  <h2>medium subtitle</h2>\n</Hero>\n<br />\n<Hero size="large" color="primary">\n  <h1>Large</h1>\n  <h2>large subtitle</h2>\n</Hero>\n<br />\n<Hero size="full" color="primary">\n  <h1>FullHeight</h1>\n  <h2>full subtitle</h2>\n</Hero>'))}},l.a.createElement(E,{size:"medium",color:"primary"},l.a.createElement("h1",null,"Medium"),l.a.createElement("h2",null,"medium subtitle")),l.a.createElement("br",null),l.a.createElement(E,{size:"large",color:"primary"},l.a.createElement("h1",null,"Large"),l.a.createElement("h2",null,"large subtitle")),l.a.createElement("br",null),l.a.createElement(E,{size:"full",color:"primary"},l.a.createElement("h1",null,"FullHeight"),l.a.createElement("h2",null,"full subtitle"))),"\n",l.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"centered-text"}},l.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#centered-text"}},l.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Centered Text"),"\n",l.a.createElement(c.d,{__code:function(e){return e&&l.a.createElement(e.pre,{className:"react-prism language-jsx"},l.a.createElement("code",null,'<Hero color="light" center>\n  <h1>Center Title</h1>\n  <h2>center subtitle</h2>\n</Hero>'))}},l.a.createElement(E,{color:"light",center:!0},l.a.createElement("h1",null,"Center Title"),l.a.createElement("h2",null,"center subtitle"))),"\n",l.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"with-appbar"}},l.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#with-appbar"}},l.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"with Appbar"),"\n",l.a.createElement(c.d,{__code:function(e){return e&&l.a.createElement(e.pre,{className:"react-prism language-jsx"},l.a.createElement("code",null,'<Hero\n  color="dark"\n  header={\n    <AppBar brand={<Logo />} to="#">\n      <ul>\n        <li>\n          <a href="#">link1</a>\n        </li>\n        <li>\n          <a href="#">link2</a>\n        </li>\n        <li>\n          <a href="#">link3</a>\n        </li>\n      </ul>\n    </AppBar>\n  }\n  center\n>\n  <h1>Title</h1>\n  <h2>subtitle</h2>\n  <p>some text here</p>\n</Hero>'))}},l.a.createElement(E,{color:"dark",header:l.a.createElement(m.a,{brand:l.a.createElement(o.a,null),to:"#"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"link1")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"link2")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"link3")))),center:!0},l.a.createElement("h1",null,"Title"),l.a.createElement("h2",null,"subtitle"),l.a.createElement("p",null,"some text here"))))}}}]);