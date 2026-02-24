import{j as r}from"./iframe-BB4tf_El.js";import{B as l}from"./Base-CHxFwfQ2.js";import{F as n}from"./FormField-Dc7CGirb.js";import"./preload-helper-PPVm8Dsz.js";import"./merge-DApEyPFe.js";function o({error:e,customStyle:i,...d}){return r.jsx(l,{as:"textarea",classList:i?void 0:["flex rounded-md border bg-background px-3 py-2 w-full","disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring",e?"border-danger hover:border-danger-fore":"border-input not-disabled:hover:border-input-fore"],...d})}o.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLTextAreaElement"}],raw:"Ref<HTMLTextAreaElement>"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},customStyle:{required:!1,tsType:{name:"boolean"},description:""}},composes:["TextareaHTMLAttributes"]};const b={title:"forms/Textarea",component:o,tags:["autodocs"],argTypes:{}},t=e=>r.jsx("div",{className:"w-full",style:{maxWidth:"350px"},children:r.jsx(e,{})}),a={decorators:[t],args:{name:"test1",placeholder:"placeholder...",disabled:!1,error:!1}},s={name:"With FormField",decorators:[t],render:e=>r.jsx(n,{htmlFor:"test-input",label:"Username",help:"This is your public display name",required:!0,children:r.jsx(o,{id:"test-input",...e})}),args:{name:"test1",placeholder:"Your name here..",disabled:!1}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  decorators: [decorator],
  args: {
    name: 'test1',
    placeholder: 'placeholder...',
    disabled: false,
    error: false
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};export{a as base,b as default,s as withField};
