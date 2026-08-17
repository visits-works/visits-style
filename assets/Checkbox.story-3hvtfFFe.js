import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Base-CVEPMVTs.js";import{i as a,n as o,r as s,t as c}from"./FormField-BZUbfdPB.js";function l(){return(0,d.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`30`,height:`30`,viewBox:`0 0 30 30`,children:(0,d.jsx)(`rect`,{width:`20`,height:`3`,y:`13.5`,x:`4.5`,fill:`currentColor`,stroke:`none`,rx:`2`})})}function u({checked:e,indeterminate:t,id:n,name:r,onChange:a,value:o,checkIcon:s,error:c,...u}){let f=()=>{u.disabled||a?.(!e)};return(0,d.jsxs)(i,{as:`button`,type:`button`,role:`checkbox`,id:n||r,classList:[`inline-flex justify-center items-center border w-4.5 h-4.5 rounded`,`cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`,{"border-danger hover:border-danger-fore":c,"bg-primary text-inverted disabled:text-text disabled:bg-input disabled:border-input":!c&&e,"border-input not-disabled:hover:border-input-fore":!c&&!e}],onClick:f,"aria-checked":e,...u,children:[e?s:null,t&&!e?(0,d.jsx)(l,{}):null,(0,d.jsx)(`input`,{type:`checkbox`,"aria-hidden":`true`,name:r,checked:e,value:o,onChange:f,disabled:u.disabled,style:{position:`absolute`,pointerEvents:`none`,top:0,left:0,width:1,height:1,opacity:0}})]})}var d;function f(){return(f=e((()=>{r(),d=n(),u.__docgenInfo={description:``,methods:[],displayName:`Checkbox`,props:{error:{required:!1,tsType:{name:`boolean`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``},checked:{required:!1,tsType:{name:`boolean`},description:``},indeterminate:{required:!1,tsType:{name:`boolean`},description:``},name:{required:!1,tsType:{name:`string`},description:`idが未指定の場合、nameが代わりに使われます`},checkIcon:{required:!0,tsType:{name:`ReactNode`},description:`チェック状態のアイコンを指定する`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:``}},composes:[`Omit`]}})))()}function p(e){return(0,h.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`30`,height:`30`,viewBox:`0 0 30 30`,...e,children:(0,h.jsx)(`path`,{d:`M11.5 18.5l-3.9-4L6 16l5.6 5.6 11.6-11.5-1.7-1.6z`,fill:`currentColor`})})}var m,h,g,_,v,y,b;function x(){return(x=e((()=>{m=t(),f(),o(),a(),h=n(),g=()=>{},_={title:`forms/Checkbox`,component:u,tags:[`autodocs`],argTypes:{children:{control:!1},onChange:{control:!1}}},v={render:e=>{let[t,n]=(0,m.useState)(!1);return(0,h.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,h.jsx)(u,{id:`terms`,checked:t,onChange:n,...e}),(0,h.jsx)(s,{htmlFor:`terms`,className:`text-sm font-medium`,children:`Accept terms and conditions`})]})},args:{name:`test1`,disabled:!1,checkIcon:(0,h.jsx)(p,{})}},y={render:e=>{let[t,n]=(0,m.useState)(!1);return(0,h.jsxs)(`div`,{className:`flex items-top space-x-2`,children:[(0,h.jsx)(u,{id:`terms`,checked:t,onChange:n,...e}),(0,h.jsxs)(`div`,{className:`grid gap-1.5 leading-none pt-0.5`,children:[(0,h.jsx)(s,{htmlFor:`terms`,className:`text-sm font-medium`,children:`check label requires some description`}),(0,h.jsx)(`p`,{className:`text-sm text-muted`,children:`some description here.`})]})]})},args:{name:`test1`,disabled:!1,checkIcon:(0,h.jsx)(p,{})}},b={render:e=>{let[t,n]=(0,m.useState)(!1);return(0,h.jsxs)(c,{innerClass:`flex items-center space-x-2`,label:`Some Check Field`,required:!0,children:[(0,h.jsx)(u,{id:`terms`,checked:t,onChange:n,...e}),(0,h.jsx)(s,{htmlFor:`terms`,className:`text-sm`,children:`Some toggle value`})]})},args:{name:`test1`,onChange:g,checked:!1,disabled:!1,checkIcon:(0,h.jsx)(p,{})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(false);
    return <div className="flex items-center space-x-2">
        <Checkbox id="terms" checked={value} onChange={setValue} {...args} />
        <FormLabel htmlFor="terms" className="text-sm font-medium">
          Accept terms and conditions
        </FormLabel>
      </div>;
  },
  args: {
    name: 'test1',
    disabled: false,
    checkIcon: <IconCheck />
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(false);
    return <div className="flex items-top space-x-2">
        <Checkbox id="terms" checked={value} onChange={setValue} {...args} />
        <div className="grid gap-1.5 leading-none pt-0.5">
          <FormLabel htmlFor="terms" className="text-sm font-medium">
            check label requires some description
          </FormLabel>
          <p className="text-sm text-muted">
            some description here.
          </p>
        </div>
      </div>;
  },
  args: {
    name: 'test1',
    disabled: false,
    checkIcon: <IconCheck />
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(false);
    return <FormField innerClass="flex items-center space-x-2" label="Some Check Field" required>
        <Checkbox id="terms" checked={value} onChange={setValue} {...args} />
        <FormLabel htmlFor="terms" className="text-sm">
          Some toggle value
        </FormLabel>
      </FormField>;
  },
  args: {
    name: 'test1',
    onChange: noop,
    checked: false,
    disabled: false,
    checkIcon: <IconCheck />
  }
}`,...b.parameters?.docs?.source}}}})))()}x();export{v as base,_ as default,b as withForm,y as withMessage};