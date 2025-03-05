import{j as e}from"./jsx-runtime-CLpGMVip.js";import{I as n}from"./index-CXIQNxus.js";import{F as T}from"./FormField-m0-lZitN.js";import"./index-CZMpeKRu.js";import"./clsx-B-dksMZM.js";import"./merge-n6Ak0Tla.js";const q={title:"forms/Input",component:n,tags:["autodocs"],argTypes:{}},a=r=>e.jsx("div",{className:"w-full",style:{maxWidth:"350px"},children:e.jsx(r,{})}),s={decorators:[a],args:{name:"test1",defaultValue:"",placeholder:"placeholder..."}},o={decorators:[a],args:{name:"test1",type:"file",defaultValue:"",placeholder:"placeholder..."}},t={decorators:[a],args:{name:"test1",placeholder:"placeholder...",disabled:!0}},l={name:"With FormField",decorators:[a],render:r=>e.jsx(T,{htmlFor:"test-input",label:"Username",help:"This is your public display name",required:!0,children:e.jsx(n,{id:"test-input",...r})}),args:{name:"test1",placeholder:"Your name here..",disabled:!1}},d={name:"With FormField error",decorators:[a],render:r=>e.jsx(T,{htmlFor:"test-input",label:"Username",help:"This is your public display name",error:"invalid username",children:e.jsx(n,{id:"test-input",...r})}),args:{name:"test1",placeholder:"Your name here..",disabled:!1}};var i,c,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  decorators: [decorator],
  args: {
    name: 'test1',
    defaultValue: '',
    placeholder: 'placeholder...'
  }
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,u,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  decorators: [decorator],
  args: {
    name: 'test1',
    type: 'file',
    defaultValue: '',
    placeholder: 'placeholder...'
  }
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var F,g,f;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  decorators: [decorator],
  args: {
    name: 'test1',
    placeholder: 'placeholder...',
    disabled: true
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,y,x;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'With FormField',
  decorators: [decorator],
  render: args => <FormField htmlFor="test-input" label="Username" help="This is your public display name" required>
      <Input id="test-input" {...args} />
    </FormField>,
  args: {
    name: 'test1',
    placeholder: 'Your name here..',
    disabled: false
  }
}`,...(x=(y=l.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var j,I,S;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'With FormField error',
  decorators: [decorator],
  render: args => <FormField htmlFor="test-input" label="Username" help="This is your public display name" error="invalid username">
      <Input id="test-input" {...args} />
    </FormField>,
  args: {
    name: 'test1',
    placeholder: 'Your name here..',
    disabled: false
  }
}`,...(S=(I=d.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};export{s as base,q as default,t as disabled,o as file,l as withField,d as withFieldError};
