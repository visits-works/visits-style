import{j as s}from"./jsx-runtime-CLpGMVip.js";import{r as o}from"./index-CZMpeKRu.js";import{S as c}from"./index-ZEOFRw1I.js";import{c as $}from"./clsx-B-dksMZM.js";import{m as A}from"./merge-Dx8A4mzc.js";import{C as D}from"./ArrowDown-Dw6nlIQU.js";import{T as H}from"./index-BKlBT1o8.js";import"./index-BUASv8fC.js";import"./index-CMLLrBYL.js";import"./index-2nx3i45w.js";import"./index-D-TIQtLp.js";import"./useIsomorphicLayoutEffect-94RkQO-_.js";import"./stopPropagation-CdkcreiB.js";import"./Check-DVFiI5Ty.js";import"./Close-WyMmPAPO.js";const b=o.forwardRef(({className:e,error:l,unstyled:a,placeholder:t,children:n,...i},u)=>{const p=o.useMemo(()=>a?e:A($("flex items-center justify-between rounded-md border bg-background px-3 py-2 pr-8 w-full","overflow-hidden cursor-pointer appearance-none overflow-ellipsis","disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring",l?"border-danger hover:border-danger-fore":"border-input not-disabled:hover:border-input-fore"),e),[e,l,a]);return s.jsxs("div",{className:"relative w-max",children:[s.jsxs("select",{ref:u,className:p,...i,children:[t?s.jsx("option",{value:"",disabled:!0,selected:!0,children:t}):null,n]}),s.jsx(D,{className:"absolute top-4.5 right-3 text-muted"})]})});b.displayName="NativeSelect";b.__docgenInfo={description:"",methods:[],displayName:"NativeSelect",props:{placeholder:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},unstyled:{required:!1,tsType:{name:"boolean"},description:""}},composes:["SelectHTMLAttributes"]};const r=[{value:1,label:"options1"},{value:2,label:"options2"},{value:3,label:"options3"},{value:4,label:"options4"},{value:5,label:"options5"},{value:6,label:"options6"}],se={title:"forms/Select",component:c,tags:["autodocs"],argTypes:{value:{controls:!1},options:{controls:!1}}},m={render:e=>{const[l,a]=o.useState(0);return s.jsx(c,{...e,options:r,value:l,onChange:a})},args:{options:r,className:"max-w-[370px]",placeholder:"select value..."}},d={render:e=>{const[l,a]=o.useState([]),t=n=>{a(i=>{const u=[...i],p=u.indexOf(n);return p>-1?u.splice(p,1):u.push(n),u})};return s.jsx(c,{...e,options:r,value:l,onChange:t})},args:{options:r,className:"max-w-[370px]",placeholder:"select multiple values..."}},v={render:e=>{const[l,a]=o.useState(null),t=()=>a(null);return s.jsx(c,{...e,options:r,value:l,onChange:a,onClear:t})},args:{options:r,className:"max-w-[370px]",placeholder:"select multiple values..."}},x={render:e=>{const[l,a]=o.useState(null);return s.jsx(c,{...e,options:["section1",{value:1,label:"options1"},{value:2,label:"options2"},{value:3,label:"options3"},"section2",{value:4,label:"options4"},{value:5,label:"options5"},{value:6,label:"options6"}],value:l,onChange:a})},args:{options:r,className:"max-w-[370px]",placeholder:"select multiple values..."}},g={render:e=>{const[l,a]=o.useState(null);return s.jsx(c,{...e,options:r,value:l,onChange:a,renderItem:(t,n)=>typeof t=="string"?s.jsx("h5",{children:t}):s.jsx(H,{label:`label-${t.label}`,position:"left",children:s.jsxs("button",{type:"button",className:"w-full text-left hover:bg-accent px-2 py-1 rounded","aria-selected":n.selected,onClick:n.onChange,children:[s.jsx("span",{className:"mr-1",children:n.selected?"X":"-"}),t.label]},t.value)})})},args:{options:r,className:"max-w-[370px]",placeholder:"select multiple values..."}},h={render:({className:e,placeholder:l,error:a})=>{const[t,n]=o.useState("");return s.jsx(b,{className:e,value:t,onChange:i=>n(i.target.value),placeholder:l,error:a,children:s.jsx("option",{value:"1",children:"option1"})})},args:{options:r,className:"max-w-[370px]",placeholder:"select multiple values..."}};var f,S,C;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(0);
    return <Select {...args} options={options} value={value} onChange={setValue} />;
  },
  // @ts-expect-error
  args: {
    options,
    className: 'max-w-[370px]',
    placeholder: 'select value...'
  }
}`,...(C=(S=m.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var N,w,V;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
    options,
    className: 'max-w-[370px]',
    placeholder: 'select multiple values...'
  }
}`,...(V=(w=d.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var j,y,T;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<number | null>(null);
    const handleClear = () => setValue(null);
    return <Select {...args} options={options} value={value} onChange={setValue} onClear={handleClear} />;
  },
  // @ts-expect-error
  args: {
    options,
    className: 'max-w-[370px]',
    placeholder: 'select multiple values...'
  }
}`,...(T=(y=v.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var k,q,I;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
    options,
    className: 'max-w-[370px]',
    placeholder: 'select multiple values...'
  }
}`,...(I=(q=x.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var E,M,O;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<number | null>(null);
    return <Select {...args} options={options} value={value} onChange={setValue} renderItem={(item, config) => {
      if (typeof item === 'string') return <h5>{item}</h5>;
      return <Tooltip label={\`label-\${item.label}\`} position="left">
              <button key={item.value} type="button" className="w-full text-left hover:bg-accent px-2 py-1 rounded" aria-selected={config.selected} onClick={config.onChange}>
                <span className="mr-1">{config.selected ? 'X' : '-'}</span>
                {item.label}
              </button>
            </Tooltip>;
    }} />;
  },
  // @ts-expect-error
  args: {
    options,
    className: 'max-w-[370px]',
    placeholder: 'select multiple values...'
  }
}`,...(O=(M=g.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var R,X,_;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
    placeholder: 'select multiple values...'
  }
}`,...(_=(X=h.parameters)==null?void 0:X.docs)==null?void 0:_.source}}};export{m as base,se as default,d as multiple,h as native,v as withClear,g as withCustom,x as withSection};
