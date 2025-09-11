import{r as i,j as r}from"./iframe-71Dfa6A1.js";import{c as p}from"./clsx-B-dksMZM.js";import{m as u}from"./merge-0FHwH-zM.js";import{F as f}from"./FormField-DEJFZKOr.js";import"./preload-helper-D9Z9MdNV.js";const o=i.forwardRef(({className:e,error:t,unstyled:d,...n},c)=>{const m=i.useMemo(()=>d?e:u(p("flex rounded-md border bg-background px-3 py-2 w-full","disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring",t?"border-danger hover:border-danger-fore":"border-input not-disabled:hover:border-input-fore"),e),[e,t,d]);return r.jsx("textarea",{ref:c,className:m,...n})});o.displayName="Textarea";o.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{error:{required:!1,tsType:{name:"boolean"},description:""},unstyled:{required:!1,tsType:{name:"boolean"},description:""}},composes:["TextareaHTMLAttributes"]};const y={title:"forms/Textarea",component:o,tags:["autodocs"],argTypes:{}},l=e=>r.jsx("div",{className:"w-full",style:{maxWidth:"350px"},children:r.jsx(e,{})}),a={decorators:[l],args:{name:"test1",placeholder:"placeholder...",disabled:!1,error:!1}},s={name:"With FormField",decorators:[l],render:e=>r.jsx(f,{htmlFor:"test-input",label:"Username",help:"This is your public display name",required:!0,children:r.jsx(o,{id:"test-input",...e})}),args:{name:"test1",placeholder:"Your name here..",disabled:!1}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};export{a as base,y as default,s as withField};
