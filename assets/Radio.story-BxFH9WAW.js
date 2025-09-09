import{r as m,j as a}from"./iframe-DdeDvcNN.js";import{c as g}from"./clsx-B-dksMZM.js";import{a as b,F as h}from"./FormField-DIu6jlGJ.js";import"./preload-helper-D9Z9MdNV.js";import"./merge-0FHwH-zM.js";function d({checked:e,className:s,id:i,name:t,onChange:p,value:c,...r}){const o=m.useMemo(()=>g("relative inline-flex justify-center items-center border border-input w-4.5 h-4.5 rounded-full","cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed not-disabled:hover:border-input-fore",e?"[&_i]:bg-primary disabled:[&_i]:bg-text disabled:border-input":"",s),[s,e]),u=()=>{r.disabled||p?.(!e)};return a.jsxs("button",{type:"button",role:"radio",id:i||t,className:o,onClick:u,"aria-checked":e,...r,children:[a.jsx("i",{className:"block w-2.5 h-2.5 rounded-full transition-transform",style:{transform:e?"":"scale(0.8)",opacity:e?1:0}}),a.jsx("input",{type:"radio","aria-hidden":"true",name:t,checked:e,value:c,onChange:u,disabled:r.disabled,style:{position:"absolute",pointerEvents:"none",top:0,left:0,width:1,height:1,opacity:0}})]})}d.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:"idが未指定の場合、nameが代わりに使われます"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""}},composes:["Omit"]};function f({name:e,className:s,value:i,options:t,onChange:p,disabled:c}){return a.jsx("div",{role:"radiogroup",className:s,children:t.map(r=>{const o=`radio_${e||"unknown"}_${r.id}`;return a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx(d,{id:o,checked:r.id===i,onChange:()=>p(r.id),disabled:c}),a.jsx(b,{htmlFor:o,children:r.label})]},o)})})}f.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{className:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"T"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ id: NonNullable<T>; label: ReactNode; }",signature:{properties:[{key:"id",value:{name:"NonNullable",elements:[{name:"T"}],raw:"NonNullable<T>",required:!0}},{key:"label",value:{name:"ReactNode",required:!0}}]}}],raw:"Array<{ id: NonNullable<T>; label: ReactNode; }>"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T) => void",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"void"}}},description:""}}};const T={title:"forms/Radio",component:d,tags:["autodocs"]},n={render:e=>a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx(d,{id:"radio",...e}),a.jsx(b,{htmlFor:"radio",children:"Radio Label"})]}),args:{name:"test1",value:1,checked:!1,disabled:!1}},l={render:e=>{const[s,i]=m.useState("1");return a.jsx(h,{label:"Radio Group Example",help:"Here is example for Radio group",helpBefore:!0,children:a.jsx(f,{name:e.name,disabled:e.disabled,className:"space-y-2",value:s,onChange:i,options:[{id:"1",label:"Radio1"},{id:"2",label:"Radio2"},{id:"3",label:"Radio3"}]})})},args:{name:"test1",disabled:!1},argTypes:{children:{control:!1},checked:{control:!1}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};export{n as base,T as default,l as radioGroup};
