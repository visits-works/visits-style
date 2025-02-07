import{j as r}from"./jsx-runtime-CLpGMVip.js";import{r as i}from"./index-CZMpeKRu.js";import{c as g}from"./clsx-B-dksMZM.js";import{m as F}from"./merge-Dx8A4mzc.js";import{F as y}from"./FormField-C8Ajy0sQ.js";const o=i.forwardRef(({className:e,error:t,unstyled:d,...b},h)=>{const x=i.useMemo(()=>d?e:F(g("flex rounded-md border bg-background px-3 py-2 w-full","disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring",t?"border-danger hover:border-danger-fore":"border-input not-disabled:hover:border-input-fore"),e),[e,t,d]);return r.jsx("textarea",{ref:h,className:x,...b})});o.displayName="Textarea";o.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{error:{required:!1,tsType:{name:"boolean"},description:""},unstyled:{required:!1,tsType:{name:"boolean"},description:""}},composes:["TextareaHTMLAttributes"]};const W={title:"forms/Textarea",component:o,tags:["autodocs"],argTypes:{}},f=e=>r.jsx("div",{className:"w-full",style:{maxWidth:"350px"},children:r.jsx(e,{})}),a={decorators:[f],args:{name:"test1",placeholder:"placeholder...",disabled:!1,error:!1}},s={name:"With FormField",decorators:[f],render:e=>r.jsx(y,{htmlFor:"test-input",label:"Username",help:"This is your public display name",required:!0,children:r.jsx(o,{id:"test-input",...e})}),args:{name:"test1",placeholder:"Your name here..",disabled:!1}};var l,n,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  decorators: [decorator],
  args: {
    name: 'test1',
    placeholder: 'placeholder...',
    disabled: false,
    error: false
  }
}`,...(c=(n=a.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var m,p,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};export{a as base,W as default,s as withField};
