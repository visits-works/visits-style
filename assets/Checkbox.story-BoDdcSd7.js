import{j as e}from"./jsx-runtime-CLpGMVip.js";import{r as l}from"./index-CZMpeKRu.js";import{c as w}from"./clsx-B-dksMZM.js";import{C as S}from"./Check-DVFiI5Ty.js";import{m as q}from"./merge-n6Ak0Tla.js";import{a as m,F as V}from"./FormField-m0-lZitN.js";function L(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",children:e.jsx("rect",{width:"20",height:"3",y:"13.5",x:"4.5",fill:"currentColor",stroke:"none",rx:"2"})})}function a({checked:s,indeterminate:t,className:r,id:j,name:u,onChange:d,value:y,...c}){const N=l.useMemo(()=>q(w("inline-flex justify-center items-center border w-4.5 h-4.5 rounded","cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",s||t?"bg-primary text-inverted disabled:text-text disabled:bg-input disabled:border-input":"border-input not-disabled:hover:border-input-fore"),r),[s,t,r]),p=()=>{c.disabled||d==null||d(!s)};return e.jsxs("button",{type:"button",role:"checkbox",id:j||u,className:N,onClick:p,"aria-checked":s,...c,children:[s?e.jsx(S,{}):null,t&&!s?e.jsx(L,{}):null,e.jsx("input",{type:"checkbox","aria-hidden":"true",name:u,checked:s,value:y,onChange:p,disabled:c.disabled,style:{position:"absolute",pointerEvents:"none",top:0,left:0,width:1,height:1,opacity:0}})]})}a.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:"idが未指定の場合、nameが代わりに使われます"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const T=()=>{},B={title:"forms/Checkbox",component:a,tags:["autodocs"],argTypes:{children:{control:!1},onChange:{control:!1}}},o={render:s=>{const[t,r]=l.useState(!1);return e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(a,{id:"terms",checked:t,onChange:r,...s}),e.jsx(m,{htmlFor:"terms",className:"text-sm font-medium",children:"Accept terms and conditions"})]})},args:{name:"test1",disabled:!1}},n={render:s=>{const[t,r]=l.useState(!1);return e.jsxs("div",{className:"flex items-top space-x-2",children:[e.jsx(a,{id:"terms",checked:t,onChange:r,...s}),e.jsxs("div",{className:"grid gap-1.5 leading-none pt-0.5",children:[e.jsx(m,{htmlFor:"terms",className:"text-sm font-medium",children:"check label requires some description"}),e.jsx("p",{className:"text-sm text-muted",children:"some description here."})]})]})},args:{name:"test1",disabled:!1}},i={render:s=>{const[t,r]=l.useState(!1);return e.jsxs(V,{innerClass:"flex items-center space-x-2",label:"Some Check Field",required:!0,children:[e.jsx(a,{id:"terms",checked:t,onChange:r,...s}),e.jsx(m,{htmlFor:"terms",className:"text-sm",children:"Some toggle value"})]})},args:{name:"test1",onChange:T,checked:!1,disabled:!1}};var h,x,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
    disabled: false
  }
}`,...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,b,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    disabled: false
  }
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var C,F,k;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
    disabled: false
  }
}`,...(k=(F=i.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};export{o as base,B as default,i as withForm,n as withMessage};
