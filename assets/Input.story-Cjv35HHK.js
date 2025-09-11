import{j as e}from"./iframe-71Dfa6A1.js";import{I as n}from"./index-BsH32pCM.js";import{F as i}from"./FormField-DEJFZKOr.js";import"./preload-helper-D9Z9MdNV.js";import"./clsx-B-dksMZM.js";import"./merge-0FHwH-zM.js";const g={title:"forms/Input",component:n,tags:["autodocs"],argTypes:{}},a=r=>e.jsx("div",{className:"w-full",style:{maxWidth:"350px"},children:e.jsx(r,{})}),s={decorators:[a],args:{name:"test1",defaultValue:"",placeholder:"placeholder..."}},o={decorators:[a],args:{name:"test1",type:"file",defaultValue:"",placeholder:"placeholder..."}},t={decorators:[a],args:{name:"test1",placeholder:"placeholder...",disabled:!0}},l={name:"With FormField",decorators:[a],render:r=>e.jsx(i,{htmlFor:"test-input",label:"Username",help:"This is your public display name",required:!0,children:e.jsx(n,{id:"test-input",...r})}),args:{name:"test1",placeholder:"Your name here..",disabled:!1}},d={name:"With FormField error",decorators:[a],render:r=>e.jsx(i,{htmlFor:"test-input",label:"Username",help:"This is your public display name",error:"invalid username",children:e.jsx(n,{id:"test-input",...r})}),args:{name:"test1",placeholder:"Your name here..",disabled:!1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  decorators: [decorator],
  args: {
    name: 'test1',
    defaultValue: '',
    placeholder: 'placeholder...'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  decorators: [decorator],
  args: {
    name: 'test1',
    type: 'file',
    defaultValue: '',
    placeholder: 'placeholder...'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  decorators: [decorator],
  args: {
    name: 'test1',
    placeholder: 'placeholder...',
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};export{s as base,g as default,t as disabled,o as file,l as withField,d as withFieldError};
