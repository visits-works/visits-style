import{j as r}from"./jsx-runtime-94f6e698.js";import{F as v}from"./index-0f265783.js";import{r as s}from"./index-8db94870.js";import{a as d}from"./polished.esm-d58a66c9.js";import{H as f}from"./styled-components.browser.esm-482fcb23.js";import{u as _}from"./useIsomorphicLayoutEffect-54e15dad.js";import"./_commonjsHelpers-042e6b4d.js";function F(){return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",children:r.jsx("path",{d:"M11.5 18.5l-3.9-4L6 16l5.6 5.6 11.6-11.5-1.7-1.6z",fill:"currentColor"})})}function I(){return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",children:r.jsx("rect",{width:"20",height:"4",y:"13",x:"4.5",fill:"currentColor",stroke:"none",rx:"2"})})}const i=s.forwardRef(({className:e,children:y,indeterminate:a,...o},C)=>{const t=s.useRef(null),p=`checkbox_${o.name}_${o.value??"none"}`,j=s.useMemo(()=>{const l=[];return(o.checked||a)&&l.push("checked"),o.disabled&&l.push("disabled"),l.join(" ")},[o.checked,o.disabled,a]);return s.useImperativeHandle(C,()=>t.current),_(()=>{t.current&&(t.current.indeterminate=a)},[a]),r.jsxs(q,{className:e,children:[r.jsx("input",{type:"checkbox",id:p,...o,ref:t}),r.jsxs("label",{htmlFor:p,children:[r.jsx(N,{className:j,children:a?r.jsx(I,{}):r.jsx(F,{})}),y]})]})});i.displayName="Checkbox";const k=i,N=f.div.withConfig({displayName:"Checkbox__Shape",componentId:"sc-1lh5swj-0"})(["display:inline-flex;margin:0.5rem;width:1.25em;height:1.25em;background:transparent;border:0.1em solid ",";border-radius:",";justify-content:center;align-items:center;will-change:background-color;transition:background-color 150ms ease-out;svg{opacity:0;stroke-width:0.1em;stroke:currentColor;}&.checked{border-color:",";background-color:",";color:",";svg{opacity:1;}&.disabled{color:",";}}&.disabled{background:",";border-color:",";}"],({theme:e})=>e.border,({theme:e})=>e.radius,({theme:e})=>e.primary,({theme:e})=>e.primary,({theme:e})=>e.white,({theme:e})=>d(.15,e.textDark),({theme:e})=>d(.55,e.border),({theme:e})=>e.border),q=f.span.withConfig({displayName:"Checkbox__Wrapper",componentId:"sc-1lh5swj-1"})(["display:block;position:relative;width:auto;label{display:flex;align-items:center;cursor:pointer;padding-left:0.625em;max-width:100%;width:100%;line-height:1.25;margin-right:0.625rem;}input{display:none;&:disabled + label{color:",";}}"],({theme:e})=>d(.25,e.textDark));try{i.displayName="Checkbox",i.__docgenInfo={description:"",displayName:"Checkbox",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:null,description:"",name:"indeterminate",required:!1,type:{name:"boolean"}}}}}catch{}const w=()=>{},D={title:"forms/Checkbox",component:k,tags:["autodocs"]},n={args:{name:"test1",value:1,onChange:w,checked:!1}},c={render:e=>r.jsx(v,{label:"test-label",required:!0,children:r.jsx(k,{...e})}),args:{name:"test1",value:1,onChange:w,checked:!1}};var h,m,u;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    name: 'test1',
    value: 1,
    onChange: noop,
    checked: false
  }
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,b,x;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Field label="test-label" required>
      <Checkbox {...args} />
    </Field>,
  args: {
    name: 'test1',
    value: 1,
    onChange: noop,
    checked: false
  }
}`,...(x=(b=c.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};export{n as base,D as default,c as withField};
//# sourceMappingURL=Checkbox.story-6c3d3154.js.map
