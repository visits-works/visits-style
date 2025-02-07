import{j as a}from"./jsx-runtime-CLpGMVip.js";import{r as x}from"./index-CZMpeKRu.js";import{c as N}from"./clsx-B-dksMZM.js";import{a as R,F as T}from"./FormField-C8Ajy0sQ.js";import"./merge-Dx8A4mzc.js";function p({checked:e,className:s,id:i,name:l,onChange:o,value:c,...r}){const t=x.useMemo(()=>N("relative inline-flex justify-center items-center border border-input w-4.5 h-4.5 rounded-full","cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed not-disabled:hover:border-input-fore",e?"[&_i]:bg-primary disabled:[&_i]:bg-text disabled:border-input":"",s),[s,e]),u=()=>{r.disabled||o==null||o(!e)};return a.jsxs("button",{type:"button",role:"radio",id:i||l,className:t,onClick:u,"aria-checked":e,...r,children:[a.jsx("i",{className:"block w-2.5 h-2.5 rounded-full transition-transform",style:{transform:e?"":"scale(0.8)",opacity:e?1:0}}),a.jsx("input",{type:"radio","aria-hidden":"true",name:l,checked:e,value:c,onChange:u,disabled:r.disabled,style:{position:"absolute",pointerEvents:"none",top:0,left:0,width:1,height:1,opacity:0}})]})}p.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:"idが未指定の場合、nameが代わりに使われます"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""}},composes:["Omit"]};function v({name:e,className:s,value:i,options:l,onChange:o,disabled:c}){return a.jsx("div",{role:"radiogroup",className:s,children:l.map(r=>{const t=`radio_${e||"unknown"}_${r.id}`;return a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx(p,{id:t,checked:r.id===i,onChange:()=>o(r.id),disabled:c}),a.jsx(R,{htmlFor:t,children:r.label})]},t)})})}v.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{className:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"T"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ id: NonNullable<T>; label: ReactNode; }",signature:{properties:[{key:"id",value:{name:"NonNullable",elements:[{name:"T"}],raw:"NonNullable<T>",required:!0}},{key:"label",value:{name:"ReactNode",required:!0}}]}}],raw:"Array<{ id: NonNullable<T>; label: ReactNode; }>"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T) => void",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"void"}}},description:""}}};const _={title:"forms/Radio",component:p,tags:["autodocs"]},d={render:e=>a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx(p,{id:"radio",...e}),a.jsx(R,{htmlFor:"radio",children:"Radio Label"})]}),args:{name:"test1",value:1,checked:!1,disabled:!1}},n={render:e=>{const[s,i]=x.useState("1");return a.jsx(T,{label:"Radio Group Example",help:"Here is example for Radio group",helpBefore:!0,children:a.jsx(v,{name:e.name,disabled:e.disabled,className:"space-y-2",value:s,onChange:i,options:[{id:"1",label:"Radio1"},{id:"2",label:"Radio2"},{id:"3",label:"Radio3"}]})})},args:{name:"test1",disabled:!1},argTypes:{children:{control:!1},checked:{control:!1}}};var m,b,f;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(b=d.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var g,y,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(y=n.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};export{d as base,_ as default,n as radioGroup};
