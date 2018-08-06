(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"./docs/forms/index.mdx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,l=(a=n("./node_modules/react/index.js"))&&a.__esModule?a:{default:a},r=n("./node_modules/@mdx-js/tag/dist/index.js"),o=n("./node_modules/docz/dist/index.m.js"),d=n("./src/components/index.ts");function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}t.default=function(e){var t=e.components;i(e,["components"]);return l.default.createElement(r.MDXTag,{name:"wrapper",components:t},l.default.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"basic-usage"}},l.default.createElement(r.MDXTag,{name:"a",components:t,parentName:"h2",props:{"aria-hidden":!0,href:"#basic-usage"}},l.default.createElement(r.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Basic usage"),l.default.createElement(o.Playground,{__position:0,__code:'<form\n  onSubmit={e => {\n    e.preventDefault()\n  }}\n>\n  <Field label="Name">\n    <TextInput placeholder="Text input" />\n  </Field>\n  <Field label="Username" help="helper text">\n    <TextInput value="visits" />\n  </Field>\n  <Field label="Email" error="invalid email">\n    <TextInput type="email" value="wrong@email" />\n  </Field>\n  <Field label="Message">\n    <Textarea placeholder="Textarea Text here" />\n  </Field>\n  <Field>\n    <Select\n      value={2}\n      options={[{ id: 1, name: \'options1\' }, { id: 2, name: \'options2\' }]}\n    />\n  </Field>\n  <Field>\n    <Checkbox checked>\n      I agree to the <a href="#">terms and conditions</a>\n    </Checkbox>\n  </Field>\n  <Field>\n    <Radio name="agree" value="yes">\n      Yes\n    </Radio>\n    <Radio name="agree" value="no">\n      No\n    </Radio>\n  </Field>\n  <Button>Submit</Button>\n  <Button>Clear</Button>\n</form>'},l.default.createElement("form",{onSubmit:function(e){e.preventDefault()}},l.default.createElement(d.Field,{label:"Name"},l.default.createElement(d.TextInput,{placeholder:"Text input"})),l.default.createElement(d.Field,{label:"Username",help:"helper text"},l.default.createElement(d.TextInput,{value:"visits"})),l.default.createElement(d.Field,{label:"Email",error:"invalid email"},l.default.createElement(d.TextInput,{type:"email",value:"wrong@email"})),l.default.createElement(d.Field,{label:"Message"},l.default.createElement(d.Textarea,{placeholder:"Textarea Text here"})),l.default.createElement(d.Field,null,l.default.createElement(d.Select,{value:2,options:[{id:1,name:"options1"},{id:2,name:"options2"}]})),l.default.createElement(d.Field,null,l.default.createElement(d.Checkbox,{checked:!0},"I agree to the ",l.default.createElement("a",{href:"#"},"terms and conditions"))),l.default.createElement(d.Field,null,l.default.createElement(d.Radio,{name:"agree",value:"yes"},"Yes"),l.default.createElement(d.Radio,{name:"agree",value:"no"},"No")),l.default.createElement(d.Button,null,"Submit"),l.default.createElement(d.Button,null,"Clear"))))}}}]);