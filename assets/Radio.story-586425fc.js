import{j as a}from"./jsx-runtime-94f6e698.js";import{r as c}from"./index-8db94870.js";import{F as x}from"./index-6875c228.js";import{a as m}from"./polished.esm-d58a66c9.js";import{s as v}from"./styled-components.browser.esm-cceca312.js";import"./_commonjsHelpers-042e6b4d.js";function l({className:e,style:r,children:s,innerRef:R,...o}){const u=`radio_${o.name}_${o.value}`,y=c.useMemo(()=>{const d=[];return o.checked&&d.push("checked"),o.disabled&&d.push("disabled"),d.join(" ")},[o.checked,o.disabled]);return a.jsxs(_,{className:e,style:r,children:[a.jsxs("label",{htmlFor:u,children:[a.jsx(j,{className:y,children:a.jsx("i",{})}),s]}),a.jsx("input",{id:u,type:"radio",...o,ref:R})]})}const i=c.forwardRef((e,r)=>a.jsx(l,{...e,innerRef:r})),j=v.div.withConfig({displayName:"Radio__Shape",componentId:"sc-13m0vd4-0"})(["display:inline-flex;margin:0.5rem;width:1.25em;height:1.25em;background:transparent;border:0.1em solid ",";border-radius:50%;justify-content:center;align-items:center;will-change:background-color,border-color;transition-property:background-color,border-color;transition-duration:150ms;transition-timing-function:ease-out;&.checked{border-color:",";& > i{transform:scale(1);}&.disabled > i{background-color:",";}}&.disabled{background:",";border-color:",";}& > i{display:block;width:0.5em;height:0.5em;background:",";border:none;transform:scale(0);border-radius:50%;will-change:transform;transition:transform 150ms ease-out;}"],({theme:e})=>e.border,({theme:e})=>e.primary,({theme:e})=>m(.15,e.textDark),({theme:e})=>m(.55,e.border),({theme:e})=>e.border,({theme:e})=>e.primary),_=v.span.withConfig({displayName:"Radio__Wrapper",componentId:"sc-13m0vd4-1"})(["display:block;width:auto;label{cursor:pointer;max-width:100%;width:100%;line-height:1.25;margin-right:0.625rem;display:flex;align-items:center;&:hover > div:not(.checked):not(.disabled){border-color:",";}}input{display:none;}"],({theme:e})=>e.borderHover);try{l.displayName="Radio",l.__docgenInfo={description:"",displayName:"Radio",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | number"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}}}}}catch{}const q={title:"forms/Radio",component:i,tags:["autodocs"]},n={args:{name:"test1",value:1,checked:!1}},t={render:e=>{const[r,s]=c.useState("1");return a.jsxs(x,{label:"test-label",required:!0,children:[a.jsx(i,{name:"test1",value:"2",checked:r==="1",onChange:()=>s("1"),children:"Radio1"}),a.jsx(i,{name:"test1",value:"2",checked:r==="2",onChange:()=>s("2"),children:"Radio2"}),a.jsx(i,{name:"test1",value:"3",checked:r==="3",onChange:()=>s("3"),children:"Radio3"})]})},args:{},argTypes:{children:{controls:!1},checked:{controls:!1},name:{controls:!1},value:{controls:!1}}};var p,h,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: 'test1',
    value: 1,
    checked: false
  }
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,b,k;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('1');
    return <Field label="test-label" required>
        <Radio name="test1" value="2" checked={value === '1'} onChange={() => setValue('1')}>Radio1</Radio>
        <Radio name="test1" value="2" checked={value === '2'} onChange={() => setValue('2')}>Radio2</Radio>
        <Radio name="test1" value="3" checked={value === '3'} onChange={() => setValue('3')}>Radio3</Radio>
      </Field>;
  },
  //@ts-ignore
  args: {},
  argTypes: {
    children: {
      controls: false
    },
    checked: {
      controls: false
    },
    name: {
      controls: false
    },
    value: {
      controls: false
    }
  }
}`,...(k=(b=t.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};export{n as base,q as default,t as withField};
//# sourceMappingURL=Radio.story-586425fc.js.map
