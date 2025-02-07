import{j as o}from"./jsx-runtime-CLpGMVip.js";import{B as s}from"./index-BzT3w_NJ.js";import{A as x}from"./Approved-BE8BqI2i.js";import{r as b}from"./index-CZMpeKRu.js";import{c as j}from"./clsx-B-dksMZM.js";function f({className:r,...g}){const B=b.useMemo(()=>j("flex items-center justify-center","[&_button]:rounded-none [&_:first-child]:rounded-bl [&_:first-child]:rounded-tl [&_:last-child]:rounded-br [&_:last-child]:rounded-tr","[&_:first-child]:border-r-0 [&_:last-child]:border-l-0",r),[r]);return o.jsx("div",{role:"group",className:B,...g})}f.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup"};const _=["","danger","link","outlint","ghost"],v=["","icon"],N={title:"elements/Button",component:s,tags:["autodocs"],parameters:{control:{variant:_,size:v,disabled:[!0,!1]}},argTypes:{children:{control:!1}}},e={args:{children:"Hello wolrd"}},t={args:{children:o.jsx(x,{}),variant:"outline",size:"icon"}},n={render:r=>o.jsxs(f,{children:[o.jsx(s,{...r,children:"button 1"}),o.jsx(s,{...r,children:"ボタン 2"}),o.jsx(s,{...r,children:"BUTTON 3"})]})};var a,c,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: 'Hello wolrd'
  }
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var d,u,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: <Approved />,
    variant: 'outline',
    size: 'icon'
  }
}`,...(l=(u=t.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var p,m,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <ButtonGroup>
      <Button {...args}>button 1</Button>
      <Button {...args}>ボタン 2</Button>
      <Button {...args}>BUTTON 3</Button>
    </ButtonGroup>
}`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};export{e as base,n as buttonGroup,N as default,t as icon};
