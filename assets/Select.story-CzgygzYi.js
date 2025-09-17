import{r as o,j as e}from"./iframe-C9DRP0Ve.js";import{S as u}from"./index-BF9EQfdN.js";import{c as C}from"./clsx-B-dksMZM.js";import{m as j}from"./merge-0FHwH-zM.js";import{T as N}from"./index-C9XJv-RR.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CRPRnaGP.js";import"./index-CcYuK7si.js";import"./index-D6dqS53r.js";import"./index-Blk7Kv1J.js";import"./useIsomorphicLayoutEffect-CDYSGN2L.js";import"./stopPropagation-CdkcreiB.js";const b=o.forwardRef(({className:r,error:t,unstyled:l,placeholder:s,children:n,arrowIcon:i,...a},d)=>{const S=o.useMemo(()=>l?r:j(C("flex items-center justify-between rounded-md border bg-background px-3 py-2 pr-8 w-full","overflow-hidden cursor-pointer appearance-none overflow-ellipsis","disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring",t?"border-danger hover:border-danger-fore":"border-input not-disabled:hover:border-input-fore"),r),[r,t,l]);return e.jsxs("div",{className:"relative w-max",children:[e.jsxs("select",{ref:d,className:S,...a,children:[s?e.jsx("option",{value:"",disabled:!0,selected:!0,children:s}):null,n]}),i]})});b.displayName="NativeSelect";b.__docgenInfo={description:"",methods:[],displayName:"NativeSelect",props:{placeholder:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},unstyled:{required:!1,tsType:{name:"boolean"},description:""},arrowIcon:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["SelectHTMLAttributes"]};const c=[{value:1,label:"options1"},{value:2,label:"options2"},{value:3,label:"options3"},{value:4,label:"options4"},{value:5,label:"options5"},{value:6,label:"options6"}];function V(r){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",...r,children:e.jsx("path",{d:"M11.5 18.5l-3.9-4L6 16l5.6 5.6 11.6-11.5-1.7-1.6z",fill:"currentColor"})})}function w(r){return e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[e.jsx("path",{d:"M11.7 14.8 7 9.8a.5.5 0 0 1 0-.7c.2-.2.5-.2.7 0l4.5 5c.2.2.2.6 0 .8-.1.2-.4.2-.6 0Z",fill:"currentColor"}),e.jsx("path",{d:"m16.9 9.9-4.6 5c-.2.2-.4.2-.6 0a.5.5 0 0 1 0-.8l4.5-5c.2-.2.5-.2.7 0 .1.2.1.6 0 .8Z",fill:"currentColor"})]})}function y(r){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",...r,children:e.jsxs("g",{fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[e.jsx("path",{d:"M26 26l-12.5-12.5L26 1"}),e.jsx("path",{d:"M1 26l12.5-12.5L1 1"})]})})}const O={title:"forms/Select",component:u,tags:["autodocs"],argTypes:{value:{controls:!1},options:{controls:!1}}},p={options:c,className:"max-w-[370px]",placeholder:"select value...",arrowIcon:e.jsx(w,{}),checkIcon:e.jsx(V,{className:"size-5 mr-1"}),closeIcon:e.jsx(y,{})},m={render:r=>{const[t,l]=o.useState(0);return e.jsx(u,{...r,options:c,value:t,onChange:l})},args:{...p}},v={render:r=>{const[t,l]=o.useState([]),s=n=>{l(i=>{const a=[...i],d=a.indexOf(n);return d>-1?a.splice(d,1):a.push(n),a})};return e.jsx(u,{...r,options:c,value:t,onChange:s})},args:{...p,placeholder:"select multiple values..."}},h={render:r=>{const[t,l]=o.useState(null),s=()=>l(null);return e.jsx(u,{...r,options:c,value:t,onChange:l,onClear:s})},args:{...p,placeholder:"select multiple values..."}},g={render:r=>{const[t,l]=o.useState(null);return e.jsx(u,{...r,options:["section1",{value:1,label:"options1"},{value:2,label:"options2"},{value:3,label:"options3"},"section2",{value:4,label:"options4"},{value:5,label:"options5"},{value:6,label:"options6"}],value:t,onChange:l})},args:{...p,placeholder:"select multiple values..."}},x={render:r=>{const[t,l]=o.useState(null);return e.jsx(u,{...r,options:c,value:t,onChange:l,renderItem:(s,n)=>typeof s=="string"?e.jsx("h5",{children:s}):e.jsx(N,{label:`label-${s.label}`,position:"left",children:e.jsxs("button",{type:"button",role:"option",className:"w-full text-left hover:bg-accent px-2 py-1 rounded cursor-pointer","aria-selected":n.selected,onClick:n.onChange,children:[e.jsx("span",{className:"mr-1",children:n.selected?"X":"-"}),s.label]},s.value)})})},args:{...p,placeholder:"select multiple values..."}},f={render:({className:r,placeholder:t,error:l})=>{const[s,n]=o.useState("");return e.jsx(b,{className:r,value:s,onChange:i=>n(i.target.value),placeholder:t,error:l,children:e.jsx("option",{value:"1",children:"option1"})})},args:{options:c,className:"max-w-[370px]",placeholder:"select multiple values...",arrowIcon:e.jsx(w,{})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(0);
    return <Select {...args} options={options} value={value} onChange={setValue} />;
  },
  // @ts-expect-error
  args: {
    ...defaultProps
  }
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};export{m as base,O as default,v as multiple,f as native,h as withClear,x as withCustom,g as withSection};
