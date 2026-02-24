import{j as e,r as o}from"./iframe-BB4tf_El.js";import{S as c}from"./index-0coYoQur.js";import{B as b}from"./Base-CHxFwfQ2.js";import{T as C}from"./index-j6XuBxkH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ZjmowS_y.js";import"./index-CFrW7r58.js";import"./index-CrPQbQVo.js";import"./index-CDqGLqrx.js";import"./useIsomorphicLayoutEffect-CUC6N05y.js";import"./stopPropagation-CdkcreiB.js";import"./merge-DApEyPFe.js";function w({error:r,customStyle:l,placeholder:t,children:s,arrowIcon:n,wrapperStyle:i,...a}){return e.jsxs(b,{classList:"relative w-max",className:i,children:[e.jsxs(b,{as:"select",classList:l?void 0:["flex items-center justify-between rounded-md border bg-background px-3 py-2 pr-8 w-full","overflow-hidden cursor-pointer appearance-none overflow-ellipsis","disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring",r?"border-danger hover:border-danger-fore":"border-input not-disabled:hover:border-input-fore"],...a,children:[t?e.jsx("option",{value:"",disabled:!0,selected:!0,children:t}):null,s]}),n]})}w.__docgenInfo={description:"",methods:[],displayName:"NativeSelect",props:{ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLSelectElement"}],raw:"Ref<HTMLSelectElement>"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},customStyle:{required:!1,tsType:{name:"boolean"},description:""},arrowIcon:{required:!1,tsType:{name:"ReactNode"},description:""},wrapperStyle:{required:!1,tsType:{name:"string"},description:""}},composes:["SelectHTMLAttributes"]};const u=[{value:1,label:"options1"},{value:2,label:"options2"},{value:3,label:"options3"},{value:4,label:"options4"},{value:5,label:"options5"},{value:6,label:"options6"}];function j(r){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",...r,children:e.jsx("path",{d:"M11.5 18.5l-3.9-4L6 16l5.6 5.6 11.6-11.5-1.7-1.6z",fill:"currentColor"})})}function S(r){return e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[e.jsx("path",{d:"M11.7 14.8 7 9.8a.5.5 0 0 1 0-.7c.2-.2.5-.2.7 0l4.5 5c.2.2.2.6 0 .8-.1.2-.4.2-.6 0Z",fill:"currentColor"}),e.jsx("path",{d:"m16.9 9.9-4.6 5c-.2.2-.4.2-.6 0a.5.5 0 0 1 0-.8l4.5-5c.2-.2.5-.2.7 0 .1.2.1.6 0 .8Z",fill:"currentColor"})]})}function y(r){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",...r,children:e.jsxs("g",{fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[e.jsx("path",{d:"M26 26l-12.5-12.5L26 1"}),e.jsx("path",{d:"M1 26l12.5-12.5L1 1"})]})})}const A={title:"forms/Select",component:c,tags:["autodocs"],argTypes:{value:{controls:!1},options:{controls:!1}}},p={options:u,className:"max-w-[370px]",placeholder:"select value...",arrowIcon:e.jsx(S,{}),checkIcon:e.jsx(j,{className:"size-5 mr-1"}),closeIcon:e.jsx(y,{})},d={render:r=>{const[l,t]=o.useState(0);return e.jsx(c,{...r,options:u,value:l,onChange:t})},args:{...p}},m={render:r=>{const[l,t]=o.useState([]),s=n=>{t(i=>{const a=[...i],f=a.indexOf(n);return f>-1?a.splice(f,1):a.push(n),a})};return e.jsx(c,{...r,options:u,value:l,onChange:s})},args:{...p,placeholder:"select multiple values..."}},v={render:r=>{const[l,t]=o.useState(null),s=()=>t(null);return e.jsx(c,{...r,options:u,value:l,onChange:t,onClear:s})},args:{...p,placeholder:"select multiple values..."}},h={render:r=>{const[l,t]=o.useState(null);return e.jsx(c,{...r,options:["section1",{value:1,label:"options1"},{value:2,label:"options2"},{value:3,label:"options3"},"section2",{value:4,label:"options4"},{value:5,label:"options5"},{value:6,label:"options6"}],value:l,onChange:t})},args:{...p,placeholder:"select multiple values..."}},g={render:r=>{const[l,t]=o.useState(null);return e.jsx(c,{...r,options:u,value:l,onChange:t,renderItem:(s,n)=>typeof s=="string"?e.jsx("h5",{children:s}):e.jsx(C,{label:`label-${s.label}`,position:"left",children:e.jsxs("button",{type:"button",role:"option",className:"w-full text-left hover:bg-accent px-2 py-1 rounded cursor-pointer","aria-selected":n.selected,onClick:n.onChange,children:[e.jsx("span",{className:"mr-1",children:n.selected?"X":"-"}),s.label]},s.value)})})},args:{...p,placeholder:"select multiple values..."}},x={render:({className:r,placeholder:l,error:t})=>{const[s,n]=o.useState("");return e.jsx(w,{className:r,value:s,onChange:i=>n(i.target.value),placeholder:l,error:t,children:e.jsx("option",{value:"1",children:"option1"})})},args:{options:u,className:"max-w-[370px]",placeholder:"select multiple values...",arrowIcon:e.jsx(S,{})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(0);
    return <Select {...args} options={options} value={value} onChange={setValue} />;
  },
  // @ts-expect-error
  args: {
    ...defaultProps
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<number[]>([]);
    const handleChange = (val: number) => {
      setValue(prev => {
        const next = [...prev];
        const idx = next.indexOf(val);
        if (idx > -1) {
          next.splice(idx, 1);
        } else {
          next.push(val);
        }
        return next;
      });
    };
    return <Select {...args} options={options} value={value} onChange={handleChange} />;
  },
  // @ts-expect-error
  args: {
    ...defaultProps,
    placeholder: 'select multiple values...'
  }
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<number | null>(null);
    const handleClear = () => setValue(null);
    return <Select {...args} options={options} value={value} onChange={setValue} onClear={handleClear} />;
  },
  // @ts-expect-error
  args: {
    ...defaultProps,
    placeholder: 'select multiple values...'
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<number | null>(null);
    return <Select {...args} options={['section1', {
      value: 1,
      label: 'options1'
    }, {
      value: 2,
      label: 'options2'
    }, {
      value: 3,
      label: 'options3'
    }, 'section2', {
      value: 4,
      label: 'options4'
    }, {
      value: 5,
      label: 'options5'
    }, {
      value: 6,
      label: 'options6'
    }]} value={value} onChange={setValue} />;
  },
  // @ts-expect-error
  args: {
    ...defaultProps,
    placeholder: 'select multiple values...'
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<number | null>(null);
    return <Select {...args} options={options} value={value} onChange={setValue} renderItem={(item, config) => {
      if (typeof item === 'string') return <h5>{item}</h5>;
      return <Tooltip label={\`label-\${item.label}\`} position="left">
              <button key={item.value} type="button" role="option" className="w-full text-left hover:bg-accent px-2 py-1 rounded cursor-pointer" aria-selected={config.selected} onClick={config.onChange}>
                <span className="mr-1">{config.selected ? 'X' : '-'}</span>
                {item.label}
              </button>
            </Tooltip>;
    }} />;
  },
  // @ts-expect-error
  args: {
    ...defaultProps,
    placeholder: 'select multiple values...'
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: ({
    className,
    placeholder,
    error
  }) => {
    const [value, setValue] = useState<string>('');
    return <NativeSelect className={className} value={value} onChange={e => setValue(e.target.value)} placeholder={placeholder} error={error}>
        <option value="1">option1</option>
      </NativeSelect>;
  },
  // @ts-expect-error
  args: {
    options,
    className: 'max-w-[370px]',
    placeholder: 'select multiple values...',
    arrowIcon: <IconArrow />
  }
}`,...x.parameters?.docs?.source}}};export{d as base,A as default,m as multiple,x as native,v as withClear,g as withCustom,h as withSection};
