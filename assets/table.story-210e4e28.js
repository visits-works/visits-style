import{j as t}from"./jsx-runtime-94f6e698.js";import{s as i,n as r}from"./styled-components.browser.esm-cceca312.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const h=r(["tbody > tr:nth-child(odd){background-color:rgba(0,0,0,0.02);}"]),c=r(["tbody > tr:hover{background-color:rgba(0,0,0,0.04);}"]),o=i.table.withConfig({displayName:"Table",componentId:"sc-1x2nuaf-0"})([""," max-width:100%;margin-bottom:1rem;background-color:transparent;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar;td,th{vertical-align:top;padding:0.75rem;"," border-width:0 0 1px;}th{white-space:nowrap;}"," "," ",""],({full:d})=>d?r(["width:100%;"]):void 0,({theme:d,bordered:l})=>l?r(["border:1px solid ",";"],d.border):void 0,({striped:d})=>d?h:void 0,({hover:d})=>d?c:void 0,({headerStyle:d})=>d?r(["th{","}"],d):void 0),v=["","small","medium","large"],j={title:"elements/Table",component:o,tags:["autodocs"],argTypes:{},parameters:{control:{size:v}}},e={render:d=>t.jsxs(o,{...d,children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"head 1"}),t.jsx("th",{children:"head 2"}),t.jsx("th",{children:"head 3"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"val1"}),t.jsx("td",{children:"val2"}),t.jsx("td",{children:"val3"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"val1"}),t.jsx("td",{children:"val2"}),t.jsx("td",{children:"val3"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"val1"}),t.jsx("td",{children:"val2"}),t.jsx("td",{children:"val3"})]})]})]})};var n,a,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <Table {...args}>
      <thead>
        <tr>
          <th>head 1</th>
          <th>head 2</th>
          <th>head 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>val1</td>
          <td>val2</td>
          <td>val3</td>
        </tr>
        <tr>
          <td>val1</td>
          <td>val2</td>
          <td>val3</td>
        </tr>
        <tr>
          <td>val1</td>
          <td>val2</td>
          <td>val3</td>
        </tr>
      </tbody>
    </Table>
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};export{e as base,j as default};
//# sourceMappingURL=table.story-210e4e28.js.map
