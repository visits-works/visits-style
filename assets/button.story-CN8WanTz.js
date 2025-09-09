import{r as l,j as r}from"./iframe-DdeDvcNN.js";import{B as s}from"./index-D6gM4DsD.js";import{c as d}from"./clsx-B-dksMZM.js";import"./preload-helper-D9Z9MdNV.js";function a({className:t,...i}){const c=l.useMemo(()=>d("flex items-center justify-center","[&_button]:rounded-none [&_:first-child]:rounded-bl [&_:first-child]:rounded-tl [&_:last-child]:rounded-br [&_:last-child]:rounded-tr","[&_:first-child]:border-r-0 [&_:last-child]:border-l-0",t),[t]);return r.jsx("div",{role:"group",className:c,...i})}a.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup"};const u=["","danger","link","outlint","ghost"],p=["","icon"];function m(){return r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",children:[r.jsx("path",{d:"M15 29a14 14 0 0 1-9.9-4.1A14 14 0 0 1 1 15a14 14 0 0 1 4.1-9.9A14 14 0 0 1 15 1a14 14 0 0 1 9.9 4.1A14 14 0 0 1 29 15a14 14 0 0 1-4.1 9.9A14 14 0 0 1 15 29z",fill:"none"}),r.jsx("path",{d:"M15 2a13 13 0 0 0-9.2 3.8A13 13 0 0 0 2 15a13 13 0 0 0 3.8 9.2A13 13 0 0 0 15 28a13 13 0 0 0 9.2-3.8A13 13 0 0 0 28 15a13 13 0 0 0-3.8-9.2A13 13 0 0 0 15 2m0-2a15 15 0 1 1 0 30 15 15 0 0 1 0-30z",fill:"currentColor"}),r.jsx("path",{d:"m11.5 18.5-3.9-4L6 16l5.6 5.6L23.2 10l-1.7-1.6z",fill:"currentColor"})]})}const B={title:"elements/Button",component:s,tags:["autodocs"],parameters:{control:{variant:u,size:p,disabled:[!0,!1]}},argTypes:{children:{control:!1}}},o={args:{children:"Hello wolrd"}},e={args:{children:r.jsx(m,{}),variant:"outline",size:"icon"}},n={render:t=>r.jsxs(a,{children:[r.jsx(s,{...t,children:"button 1"}),r.jsx(s,{...t,children:"ボタン 2"}),r.jsx(s,{...t,children:"BUTTON 3"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Hello wolrd'
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: <IconApproved />,
    variant: 'outline',
    size: 'icon'
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <ButtonGroup>
      <Button {...args}>button 1</Button>
      <Button {...args}>ボタン 2</Button>
      <Button {...args}>BUTTON 3</Button>
    </ButtonGroup>
}`,...n.parameters?.docs?.source}}};export{o as base,n as buttonGroup,B as default,e as icon};
