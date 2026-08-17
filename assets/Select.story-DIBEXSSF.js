import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Base-CVEPMVTs.js";import{n as a,t as o}from"./Tooltip-_tRHJmZd.js";import{n as s,t as c}from"./Select-wWoiUWup.js";function l({error:e,placeholder:t,children:n,arrowIcon:r,wrapperStyle:a,...o}){return(0,u.jsxs)(i,{classList:`relative w-max`,className:a,children:[(0,u.jsxs)(i,{as:`select`,classList:[`flex items-center justify-between rounded-md border bg-background px-3 py-2 pr-8 w-full`,`overflow-hidden cursor-pointer appearance-none text-ellipsis`,`disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring`,e?`border-danger hover:border-danger-fore`:`border-input not-disabled:hover:border-input-fore`],...o,children:[t?(0,u.jsx)(`option`,{value:``,disabled:!0,selected:!0,children:t}):null,n]}),r]})}var u;function d(){return(d=e((()=>{r(),u=n(),l.__docgenInfo={description:``,methods:[],displayName:`NativeSelect`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLSelectElement`}],raw:`Ref<HTMLSelectElement>`},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`boolean`},description:``},override:{required:!1,tsType:{name:`boolean`},description:`基本スタイルを全部外し、classNameの定義のみ使います`},arrowIcon:{required:!1,tsType:{name:`ReactNode`},description:``},wrapperStyle:{required:!1,tsType:{name:`string`},description:``}},composes:[`SelectHTMLAttributes`]}})))()}function f(e){return(0,g.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`30`,height:`30`,viewBox:`0 0 30 30`,...e,children:(0,g.jsx)(`path`,{d:`M11.5 18.5l-3.9-4L6 16l5.6 5.6 11.6-11.5-1.7-1.6z`,fill:`currentColor`})})}function p(e){return(0,g.jsxs)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:[(0,g.jsx)(`path`,{d:`M11.7 14.8 7 9.8a.5.5 0 0 1 0-.7c.2-.2.5-.2.7 0l4.5 5c.2.2.2.6 0 .8-.1.2-.4.2-.6 0Z`,fill:`currentColor`}),(0,g.jsx)(`path`,{d:`m16.9 9.9-4.6 5c-.2.2-.4.2-.6 0a.5.5 0 0 1 0-.8l4.5-5c.2-.2.5-.2.7 0 .1.2.1.6 0 .8Z`,fill:`currentColor`})]})}function m(e){return(0,g.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 30 30`,...e,children:(0,g.jsxs)(`g`,{fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,children:[(0,g.jsx)(`path`,{d:`M26 26l-12.5-12.5L26 1`}),(0,g.jsx)(`path`,{d:`M1 26l12.5-12.5L1 1`})]})})}var h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{h=t(),s(),d(),a(),g=n(),_=[{value:1,label:`options1`},{value:2,label:`options2`},{value:3,label:`options3`},{value:4,label:`options4`},{value:5,label:`options5`},{value:6,label:`options6`}],v={title:`forms/Select`,component:c,tags:[`autodocs`],argTypes:{value:{controls:!1},options:{controls:!1}}},y={options:_,className:`max-w-[370px]`,placeholder:`select value...`,arrowIcon:(0,g.jsx)(p,{}),checkIcon:(0,g.jsx)(f,{className:`size-5 mr-1`}),closeIcon:(0,g.jsx)(m,{})},b={render:e=>{let[t,n]=(0,h.useState)(0);return(0,g.jsx)(c,{...e,options:_,value:t,onChange:n})},args:{...y}},x={render:e=>{let[t,n]=(0,h.useState)([]),r=e=>{n(t=>{let n=[...t],r=n.indexOf(e);return r>-1?n.splice(r,1):n.push(e),n})};return(0,g.jsx)(c,{...e,options:_,value:t,onChange:r})},args:{...y,placeholder:`select multiple values...`}},S={render:e=>{let[t,n]=(0,h.useState)(null),r=()=>n(null);return(0,g.jsx)(c,{...e,options:_,value:t,onChange:n,onClear:r})},args:{...y,placeholder:`select multiple values...`}},C={render:e=>{let[t,n]=(0,h.useState)(null);return(0,g.jsx)(c,{...e,options:[`section1`,{value:1,label:`options1`},{value:2,label:`options2`},{value:3,label:`options3`},`section2`,{value:4,label:`options4`},{value:5,label:`options5`},{value:6,label:`options6`}],value:t,onChange:n})},args:{...y,placeholder:`select multiple values...`}},w={render:e=>{let[t,n]=(0,h.useState)(null);return(0,g.jsx)(c,{...e,options:_,value:t,onChange:n,renderItem:(e,t)=>typeof e==`string`?(0,g.jsx)(`h5`,{children:e}):(0,g.jsx)(o,{label:`label-${e.label}`,position:`left`,children:(0,g.jsxs)(`button`,{type:`button`,role:`option`,className:`w-full text-left hover:bg-accent px-2 py-1 rounded cursor-pointer`,"aria-selected":t.selected,onClick:t.onChange,children:[(0,g.jsx)(`span`,{className:`mr-1`,children:t.selected?`X`:`-`}),e.label]},e.value)})})},args:{...y,placeholder:`select multiple values...`}},T={render:({className:e,placeholder:t,error:n})=>{let[r,i]=(0,h.useState)(``);return(0,g.jsx)(l,{className:e,value:r,onChange:e=>i(e.target.value),placeholder:t,error:n,children:(0,g.jsx)(`option`,{value:`1`,children:`option1`})})},args:{options:_,className:`max-w-[370px]`,placeholder:`select multiple values...`,arrowIcon:(0,g.jsx)(p,{})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(0);
    return <Select {...args} options={options} value={value} onChange={setValue} />;
  },
  // @ts-expect-error
  args: {
    ...defaultProps
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}}})))()}E();export{b as base,v as default,x as multiple,T as native,S as withClear,w as withCustom,C as withSection};