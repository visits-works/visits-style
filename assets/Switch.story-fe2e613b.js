import{j as s}from"./jsx-runtime-94f6e698.js";import{r as y}from"./index-8db94870.js";import{s as O,n as m}from"./styled-components.browser.esm-cceca312.js";import{f as x}from"./findColorInvert-a3844e22.js";import{d as E}from"./disabledColor-930f4066.js";import"./_commonjsHelpers-042e6b4d.js";import"./polished.esm-d58a66c9.js";const t=y.forwardRef(({className:e,showLabel:r,background:f,anchorColor:h,onLabel:g="ON",offLabel:w="OFF",...l},k)=>{const n=`switch_${l.name}`;return s.jsxs(v,{className:e,showLabel:r,background:f,anchorColor:h,labelTextOn:g,labelTextOff:w,disabled:l.disabled,children:[s.jsx("input",{id:n,type:"checkbox",...l,ref:k}),s.jsx("label",{htmlFor:n,"aria-label":n})]})});t.displayName="Switch";const L=t,F=m(["label:before{position:absolute;display:block;content:'","';top:0.5rem;right:0.6875rem;font-size:0.825rem;line-height:0.825rem;color:",";}input:checked ~ label:before{content:'","';right:unset;left:0.6875rem;color:",";}"],({offLabel:e})=>e,({theme:e})=>e.textLight,({onLabel:e})=>e,({theme:e})=>x(e,e.primary));function N(e){return e!=="labelTextOn"&&e!=="labelTextOff"&&e!=="anchorColor"&&e!=="background"&&e!=="showLabel"}const v=O.span.withConfig({shouldForwardProp:N}).withConfig({displayName:"Switch__InputWrapper",componentId:"sc-1ljdf1-0"})(["display:inline-block;cursor:pointer;line-height:1.25;position:relative;input{display:none;}label{position:relative;display:block;height:1.875rem;min-width:5rem;background:transparent;border:1px solid ",";border-radius:1.25rem;cursor:pointer;will-change:background-color;transition:background-color 300ms ease;box-shadow:inset 0 0.25rem 0.25rem rgba(0,0,0,0.05);&:after{position:absolute;display:block;left:0.375rem;top:0.2rem;width:1.375rem;height:1.375rem;border-radius:100%;background:",";content:'';text-align:right;border:1px solid ",";will-change:left;transition:left 300ms ease;box-shadow:0 0 0.375rem rgba(0,0,0,0.1);}}input:checked ~ label{background:",";box-shadow:inset 0 0.25rem 0.25rem rgba(0,0,0,0.15);&:after{left:calc(100% - 1.75rem);box-shadow:0 0 0.375rem rgba(0,0,0,0.15);}}"," ",""],({theme:e})=>e.border,({theme:e,anchorColor:r})=>r||e.white,({theme:e})=>e.border,({theme:e,background:r})=>r||e.primary,({showLabel:e})=>e?F:void 0,({disabled:e,theme:r})=>e?m(["cursor:default;label{"," &:after{background:",";}}input:checked ~ label{background:",";}"],E(r),r.disabled,r.grey):void 0);try{t.displayName="Switch",t.__docgenInfo={description:"",displayName:"Switch",props:{showLabel:{defaultValue:null,description:"trueの場合にON/OFFのラベルを表示します",name:"showLabel",required:!1,type:{name:"boolean"}},background:{defaultValue:null,description:"ONの時に、色を指定します。",name:"background",required:!1,type:{name:"string"}},anchorColor:{defaultValue:null,description:"丸の色を設定します。",name:"anchorColor",required:!1,type:{name:"string"}},onLabel:{defaultValue:{value:"ON"},description:"ONになるときのラベル",name:"onLabel",required:!1,type:{name:"string"}},offLabel:{defaultValue:{value:"OFF"},description:"OFFになるときのラベル",name:"offLabel",required:!1,type:{name:"string"}}}}}catch{}const q={title:"forms/Switch",component:L,tags:["autodocs"],argTypes:{}},a={args:{name:"test1",value:"1",onLabel:"ON",offLabel:"OFF",checked:!1,showLabel:!1}},o={args:{name:"test1",value:"1",onLabel:"ON",offLabel:"OFF",checked:!1,showLabel:!1,background:"linear-gradient(19.76deg, #3DA3ED 18.61%, rgba(62, 69, 233, 0.8) 112.01%)",anchorColor:"red"}};var u,i,c;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    name: 'test1',
    value: '1',
    onLabel: 'ON',
    offLabel: 'OFF',
    checked: false,
    showLabel: false
  }
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,b,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: 'test1',
    value: '1',
    onLabel: 'ON',
    offLabel: 'OFF',
    checked: false,
    showLabel: false,
    background: 'linear-gradient(19.76deg, #3DA3ED 18.61%, rgba(62, 69, 233, 0.8) 112.01%)',
    anchorColor: 'red'
  }
}`,...(p=(b=o.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};export{a as base,o as customColor,q as default};
//# sourceMappingURL=Switch.story-fe2e613b.js.map
