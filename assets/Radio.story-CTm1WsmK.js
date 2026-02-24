import{j as a,r as f}from"./iframe-BB4tf_El.js";import{B as g}from"./Base-CHxFwfQ2.js";import{a as m,F as h}from"./FormField-Dc7CGirb.js";import"./preload-helper-PPVm8Dsz.js";import"./merge-DApEyPFe.js";function l({checked:e,className:i,id:o,name:t,onChange:p,value:c,error:s,...r}){const u=()=>{r.disabled||p?.(!e)};return a.jsxs(g,{as:"button",type:"button",role:"radio",id:o||t,classList:["relative inline-flex justify-center items-center border w-4.5 h-4.5 rounded-full","cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed not-disabled:hover:border-input-fore",s?"border-danger":"border-input",e?"[&_i]:bg-primary disabled:[&_i]:bg-text disabled:border-input":""],className:i,onClick:u,"aria-checked":e,...r,children:[a.jsx("i",{className:"block w-2.5 h-2.5 rounded-full transition-transform",style:{transform:e?"":"scale(0.8)",opacity:e?1:0}}),a.jsx("input",{type:"radio","aria-hidden":"true",name:t,checked:e,value:c,onChange:u,disabled:r.disabled,style:{position:"absolute",pointerEvents:"none",top:0,left:0,width:1,height:1,opacity:0}})]})}l.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{error:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:"idが未指定の場合、nameが代わりに使われます"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""}},composes:["Omit"]};function b({name:e,className:i,value:o,options:t,onChange:p,disabled:c}){return a.jsx("div",{role:"radiogroup",className:i,children:t.map(s=>{const r=`radio_${e||"unknown"}_${s.id}`;return a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx(l,{id:r,checked:s.id===o,onChange:()=>p(s.id),disabled:c}),a.jsx(m,{htmlFor:r,children:s.label})]},r)})})}b.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{className:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"T"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ id: NonNullable<T>; label: ReactNode; }",signature:{properties:[{key:"id",value:{name:"NonNullable",elements:[{name:"T"}],raw:"NonNullable<T>",required:!0}},{key:"label",value:{name:"ReactNode",required:!0}}]}}],raw:"Array<{ id: NonNullable<T>; label: ReactNode; }>"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T) => void",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"void"}}},description:""}}};const T={title:"forms/Radio",component:l,tags:["autodocs"]},n={render:e=>a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx(l,{id:"radio",...e}),a.jsx(m,{htmlFor:"radio",children:"Radio Label"})]}),args:{name:"test1",value:1,checked:!1,disabled:!1}},d={render:e=>{const[i,o]=f.useState("1");return a.jsx(h,{label:"Radio Group Example",help:"Here is example for Radio group",helpBefore:!0,children:a.jsx(b,{name:e.name,disabled:e.disabled,className:"space-y-2",value:i,onChange:o,options:[{id:"1",label:"Radio1"},{id:"2",label:"Radio2"},{id:"3",label:"Radio3"}]})})},args:{name:"test1",disabled:!1},argTypes:{children:{control:!1},checked:{control:!1}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex items-center space-x-2">
      <Radio id="radio" {...args} />
      <FormLabel htmlFor="radio">Radio Label</FormLabel>
    </div>,
  args: {
    name: 'test1',
    value: 1,
    checked: false,
    disabled: false
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | null>('1');
    return <FormField label="Radio Group Example" help="Here is example for Radio group" helpBefore>
        <RadioGroup name={args.name} disabled={args.disabled} className="space-y-2" value={value} onChange={setValue} options={[{
        id: '1',
        label: 'Radio1'
      }, {
        id: '2',
        label: 'Radio2'
      }, {
        id: '3',
        label: 'Radio3'
      }]} />
      </FormField>;
  },
  args: {
    name: 'test1',
    disabled: false
  },
  argTypes: {
    children: {
      control: false
    },
    checked: {
      control: false
    }
  }
}`,...d.parameters?.docs?.source}}};export{n as base,T as default,d as radioGroup};
