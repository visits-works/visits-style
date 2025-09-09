import{r as i,j as e}from"./iframe-DdeDvcNN.js";import{c as k}from"./clsx-B-dksMZM.js";import{m as v}from"./merge-0FHwH-zM.js";import{a as d,F as C}from"./FormField-DIu6jlGJ.js";import"./preload-helper-D9Z9MdNV.js";function j(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",children:e.jsx("rect",{width:"20",height:"3",y:"13.5",x:"4.5",fill:"currentColor",stroke:"none",rx:"2"})})}function a({checked:s,indeterminate:t,className:r,id:p,name:u,onChange:x,value:g,checkIcon:f,...l}){const b=i.useMemo(()=>v(k("inline-flex justify-center items-center border w-4.5 h-4.5 rounded","cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",s||t?"bg-primary text-inverted disabled:text-text disabled:bg-input disabled:border-input":"border-input not-disabled:hover:border-input-fore"),r),[s,t,r]),h=()=>{l.disabled||x?.(!s)};return e.jsxs("button",{type:"button",role:"checkbox",id:p||u,className:b,onClick:h,"aria-checked":s,...l,children:[s?f:null,t&&!s?e.jsx(j,{}):null,e.jsx("input",{type:"checkbox","aria-hidden":"true",name:u,checked:s,value:g,onChange:h,disabled:l.disabled,style:{position:"absolute",pointerEvents:"none",top:0,left:0,width:1,height:1,opacity:0}})]})}a.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:"idが未指定の場合、nameが代わりに使われます"},checkIcon:{required:!0,tsType:{name:"ReactNode"},description:"チェック状態のアイコンを指定する"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const F=()=>{},q={title:"forms/Checkbox",component:a,tags:["autodocs"],argTypes:{children:{control:!1},onChange:{control:!1}}};function m(s){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",...s,children:e.jsx("path",{d:"M11.5 18.5l-3.9-4L6 16l5.6 5.6 11.6-11.5-1.7-1.6z",fill:"currentColor"})})}const o={render:s=>{const[t,r]=i.useState(!1);return e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(a,{id:"terms",checked:t,onChange:r,...s}),e.jsx(d,{htmlFor:"terms",className:"text-sm font-medium",children:"Accept terms and conditions"})]})},args:{name:"test1",disabled:!1,checkIcon:e.jsx(m,{})}},n={render:s=>{const[t,r]=i.useState(!1);return e.jsxs("div",{className:"flex items-top space-x-2",children:[e.jsx(a,{id:"terms",checked:t,onChange:r,...s}),e.jsxs("div",{className:"grid gap-1.5 leading-none pt-0.5",children:[e.jsx(d,{htmlFor:"terms",className:"text-sm font-medium",children:"check label requires some description"}),e.jsx("p",{className:"text-sm text-muted",children:"some description here."})]})]})},args:{name:"test1",disabled:!1,checkIcon:e.jsx(m,{})}},c={render:s=>{const[t,r]=i.useState(!1);return e.jsxs(C,{innerClass:"flex items-center space-x-2",label:"Some Check Field",required:!0,children:[e.jsx(a,{id:"terms",checked:t,onChange:r,...s}),e.jsx(d,{htmlFor:"terms",className:"text-sm",children:"Some toggle value"})]})},args:{name:"test1",onChange:F,checked:!1,disabled:!1,checkIcon:e.jsx(m,{})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};export{o as base,q as default,c as withForm,n as withMessage};
