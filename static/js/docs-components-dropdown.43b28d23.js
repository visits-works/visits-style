(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"./docs/components/Dropdown.mdx":function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=i(a("./node_modules/react/index.js")),l=a("./node_modules/@mdx-js/tag/dist/index.js"),o=a("./node_modules/docz/dist/index.m.js"),r=a("./src/components/index.js"),c=i(a("./node_modules/react-icons/lib/fa/user.js")),d=i(a("./node_modules/react-icons/lib/fa/cog.js")),s=i(a("./node_modules/react-icons/lib/fa/inbox.js")),u=i(a("./node_modules/react-icons/lib/fa/sign-out.js"));function i(e){return e&&e.__esModule?e:{default:e}}n.default=function(e){var n=e.components;return t.default.createElement(l.MDXTag,{name:"wrapper",components:n},"\n","\n",t.default.createElement(l.MDXTag,{name:"h2",components:n,props:{id:"props"}},t.default.createElement(l.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#props"}},t.default.createElement(l.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Props"),"\n",t.default.createElement(o.PropsTable,{of:r.Dropdown}),"\n",t.default.createElement(l.MDXTag,{name:"h2",components:n,props:{id:"basic-usage"}},t.default.createElement(l.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#basic-usage"}},t.default.createElement(l.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Basic usage"),"\n",t.default.createElement(o.Playground,{__code:function(e){return e&&t.default.createElement(e.pre,{className:"react-prism language-jsx"},t.default.createElement("code",null,'<Playground>\n  <Dropdown label="Click Me" color="warning">\n    <a\n      onClick={() => {\n        alert(\'profile\')\n      }}\n    >\n      <PersonIcon />Profile\n    </a>\n    <a\n      onClick={() => {\n        alert(\'settings\')\n      }}\n    >\n      <GearIcon />Settings\n    </a>\n    <a href="#">\n      <MailboxIcon />\n      Inbox\n      <Tag color="link" style={{ marginLeft: \'1.5rem\' }}>\n        6\n      </Tag>\n    </a>\n    <a>\n      <GearIcon />Message\n    </a>\n    <a divider />\n    <a href="#">Text-only</a>\n    <a>\n      <SignoutIcon />Sign out\n    </a>\n  </Dropdown>\n</Playground>\n'))}},t.default.createElement(r.Dropdown,{label:"Click Me",color:"warning"},t.default.createElement("a",{onClick:function(){alert("profile")}},t.default.createElement(c.default,null),"Profile"),t.default.createElement("a",{onClick:function(){alert("settings")}},t.default.createElement(d.default,null),"Settings"),t.default.createElement("a",{href:"#"},t.default.createElement(s.default,null),"Inbox",t.default.createElement(r.Tag,{color:"link",style:{marginLeft:"1.5rem"}},"6")),t.default.createElement("a",null,t.default.createElement(d.default,null),"Message"),t.default.createElement("a",{divider:!0}),t.default.createElement("a",{href:"#"},"Text-only"),t.default.createElement("a",null,t.default.createElement(u.default,null),"Sign out"))))}}}]);