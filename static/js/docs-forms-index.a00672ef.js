(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"./docs/forms/index.mdx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,l=(a=n("./node_modules/react/index.js"))&&a.__esModule?a:{default:a},d=n("./node_modules/@mdx-js/tag/dist/index.js"),r=n("./node_modules/docz/dist/index.m.js"),o=n("./src/components/index.ts");function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},d=Object.keys(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}t.default=function(e){var t=e.components;i(e,["components"]);return l.default.createElement(d.MDXTag,{name:"wrapper",components:t},l.default.createElement(d.MDXTag,{name:"h2",components:t,props:{id:"basic-usage"}},l.default.createElement(d.MDXTag,{name:"a",components:t,parentName:"h2",props:{"aria-hidden":!0,href:"#basic-usage"}},l.default.createElement(d.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Basic usage"),l.default.createElement(r.Playground,{__position:0,__code:'<form\n  onSubmit={e => {\n    e.preventDefault()\n  }}\n>\n  <Field label="Name">\n    <TextInput placeholder="Text input" />\n  </Field>\n  <Field label="Username">\n    <TextInput value="visits" help="helper text" />\n  </Field>\n  <Field label="Email">\n    <TextInput type="email" value="wrong@email" error="invalid email" />\n  </Field>\n  <Field label="Message">\n    <Textarea placeholder="Textarea Text here" />\n  </Field>\n  <Field label="Select">\n    <Select\n      value={2}\n      options={[{ id: 1, name: \'options1\' }, { id: 2, name: \'options2\' }]}\n    />\n  </Field>\n  <Field>\n    <Checkbox checked>\n      I agree to the <a href="#">terms and conditions</a>\n    </Checkbox>\n  </Field>\n  <Field style={{ display: \'flex\' }}>\n    <Radio name="agree" value="yes" checked>\n      Yes\n    </Radio>\n    <Radio name="agree" value="no">\n      No\n    </Radio>\n  </Field>\n  <Button>Submit</Button>\n  <Button>Clear</Button>\n</form>'},l.default.createElement("form",{onSubmit:function(e){e.preventDefault()}},l.default.createElement(o.Field,{label:"Name"},l.default.createElement(o.TextInput,{placeholder:"Text input"})),l.default.createElement(o.Field,{label:"Username"},l.default.createElement(o.TextInput,{value:"visits",help:"helper text"})),l.default.createElement(o.Field,{label:"Email"},l.default.createElement(o.TextInput,{type:"email",value:"wrong@email",error:"invalid email"})),l.default.createElement(o.Field,{label:"Message"},l.default.createElement(o.Textarea,{placeholder:"Textarea Text here"})),l.default.createElement(o.Field,{label:"Select"},l.default.createElement(o.Select,{value:2,options:[{id:1,name:"options1"},{id:2,name:"options2"}]})),l.default.createElement(o.Field,null,l.default.createElement(o.Checkbox,{checked:!0},"I agree to the ",l.default.createElement("a",{href:"#"},"terms and conditions"))),l.default.createElement(o.Field,{style:{display:"flex"}},l.default.createElement(o.Radio,{name:"agree",value:"yes",checked:!0},"Yes"),l.default.createElement(o.Radio,{name:"agree",value:"no"},"No")),l.default.createElement(o.Button,null,"Submit"),l.default.createElement(o.Button,null,"Clear"))))}}}]);