import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./Input-DvpuKwA-.js";import{n as i,t as a}from"./FormField-BZUbfdPB.js";var o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{n(),i(),o=t(),s={title:`forms/Input`,component:r,tags:[`autodocs`],argTypes:{}},c=e=>(0,o.jsx)(`div`,{className:`w-full`,style:{maxWidth:`350px`},children:(0,o.jsx)(e,{})}),l={decorators:[c],args:{name:`test1`,defaultValue:``,placeholder:`placeholder...`}},u={decorators:[c],args:{name:`test1`,type:`file`,defaultValue:``,placeholder:`placeholder...`}},d={decorators:[c],args:{name:`test1`,placeholder:`placeholder...`,disabled:!0}},f={name:`With FormField`,decorators:[c],render:e=>(0,o.jsx)(a,{htmlFor:`test-input`,label:`Username`,help:`This is your public display name`,required:!0,children:(0,o.jsx)(r,{id:`test-input`,...e})}),args:{name:`test1`,placeholder:`Your name here..`,disabled:!1}},p={name:`With FormField error`,decorators:[c],render:e=>(0,o.jsx)(a,{htmlFor:`test-input`,label:`Username`,help:`This is your public display name`,error:`invalid username`,children:(0,o.jsx)(r,{id:`test-input`,...e})}),args:{name:`test1`,placeholder:`Your name here..`,disabled:!1}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  decorators: [decorator],
  args: {
    name: 'test1',
    defaultValue: '',
    placeholder: 'placeholder...'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  decorators: [decorator],
  args: {
    name: 'test1',
    type: 'file',
    defaultValue: '',
    placeholder: 'placeholder...'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  decorators: [decorator],
  args: {
    name: 'test1',
    placeholder: 'placeholder...',
    disabled: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}}})))()}m();export{l as base,s as default,d as disabled,u as file,f as withField,p as withFieldError};