import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./Base-CVEPMVTs.js";import{n as i,t as a}from"./FormField-BZUbfdPB.js";function o({error:e,...t}){return(0,s.jsx)(r,{as:`textarea`,classList:[`flex rounded-md border bg-background px-3 py-2 w-full`,`disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring`,e?`border-danger hover:border-danger-fore`:`border-input not-disabled:hover:border-input-fore`],...t})}var s;function c(){return(c=e((()=>{n(),s=t(),o.__docgenInfo={description:``,methods:[],displayName:`Textarea`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLTextAreaElement`}],raw:`Ref<HTMLTextAreaElement>`},description:``},error:{required:!1,tsType:{name:`boolean`},description:``},override:{required:!1,tsType:{name:`boolean`},description:`基本スタイルを全部外し、classNameの定義のみ使います`}},composes:[`TextareaHTMLAttributes`]}})))()}var l,u,d,f,p;function m(){return(m=e((()=>{c(),i(),l=t(),u={title:`forms/Textarea`,component:o,tags:[`autodocs`],argTypes:{}},d=e=>(0,l.jsx)(`div`,{className:`w-full`,style:{maxWidth:`350px`},children:(0,l.jsx)(e,{})}),f={decorators:[d],args:{name:`test1`,placeholder:`placeholder...`,disabled:!1,error:!1}},p={name:`With FormField`,decorators:[d],render:e=>(0,l.jsx)(a,{htmlFor:`test-input`,label:`Username`,help:`This is your public display name`,required:!0,children:(0,l.jsx)(o,{id:`test-input`,...e})}),args:{name:`test1`,placeholder:`Your name here..`,disabled:!1}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  decorators: [decorator],
  args: {
    name: 'test1',
    placeholder: 'placeholder...',
    disabled: false,
    error: false
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'With FormField',
  decorators: [decorator],
  render: args => <FormField htmlFor="test-input" label="Username" help="This is your public display name" required>
      <Textarea id="test-input" {...args} />
    </FormField>,
  args: {
    name: 'test1',
    placeholder: 'Your name here..',
    disabled: false
  }
}`,...p.parameters?.docs?.source}}}})))()}m();export{f as base,u as default,p as withField};