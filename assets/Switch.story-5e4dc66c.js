import{j as s}from"./jsx-runtime-94f6e698.js";import{r as y}from"./index-8db94870.js";import{H as E,C as m}from"./styled-components.browser.esm-482fcb23.js";import{f as L}from"./findColorInvert-e5bd6638.js";import{d as O}from"./disabledColor-bb7a461b.js";import"./_commonjsHelpers-042e6b4d.js";import"./polished.esm-d58a66c9.js";const t=y.forwardRef(({className:e,showLabel:a,background:f,anchorColor:g,onLabel:h="ON",offLabel:w="OFF",...l},k)=>{const n=`switch_${l.name}`;return s.jsxs(N,{className:e,showLabel:a,background:f,anchorColor:g,labelTextOn:h,labelTextOff:w,disabled:l.disabled,children:[s.jsx("input",{id:n,type:"checkbox",...l,ref:k}),s.jsx("label",{htmlFor:n,"aria-label":n})]})});t.displayName="Switch";const x=t,F=m(["label:before{position:absolute;display:block;content:'","';top:0.5rem;right:0.6875rem;font-size:0.825rem;line-height:0.825rem;color:",";}input:checked ~ label:before{content:'","';right:unset;left:0.6875rem;color:",";}"],({offLabel:e})=>e,({theme:e})=>e.textLight,({onLabel:e})=>e,({theme:e})=>L(e,e.primary)),N=E.span.withConfig({displayName:"Switch__Wrapper",componentId:"sc-1ljdf1-0"})(["display:inline-block;cursor:pointer;line-height:1.25;position:relative;input{display:none;}label{position:relative;display:block;height:1.875rem;min-width:5rem;background:transparent;border:1px solid ",";border-radius:1.25rem;cursor:pointer;will-change:background-color;transition:background-color 300ms ease;box-shadow:inset 0 0.25rem 0.25rem rgba(0,0,0,0.05);&:after{position:absolute;display:block;left:0.375rem;top:0.2rem;width:1.375rem;height:1.375rem;border-radius:100%;background:",";content:'';text-align:right;border:1px solid ",";will-change:left;transition:left 300ms ease;box-shadow:0 0 0.375rem rgba(0,0,0,0.1);}}input:checked ~ label{background:",";box-shadow:inset 0 0.25rem 0.25rem rgba(0,0,0,0.15);&:after{left:calc(100% - 1.75rem);box-shadow:0 0 0.375rem rgba(0,0,0,0.15);}}"," ",""],({theme:e})=>e.border,({theme:e,anchorColor:a})=>a||e.white,({theme:e})=>e.border,({theme:e,background:a})=>a||e.primary,({showLabel:e})=>e?F:void 0,({disabled:e,theme:a})=>e?m(["cursor:default;label{"," &:after{background:",";}}input:checked ~ label{background:",";}"],O(a),a.disabled,a.grey):void 0);try{t.displayName="Switch",t.__docgenInfo={description:"",displayName:"Switch",props:{showLabel:{defaultValue:null,description:"trueの場合にON/OFFのラベルを表示します",name:"showLabel",required:!1,type:{name:"boolean"}},background:{defaultValue:null,description:"ONの時に、色を指定します。",name:"background",required:!1,type:{name:"string"}},anchorColor:{defaultValue:null,description:"丸の色を設定します。",name:"anchorColor",required:!1,type:{name:"string"}},onLabel:{defaultValue:{value:"ON"},description:"ONになるときのラベル",name:"onLabel",required:!1,type:{name:"string"}},offLabel:{defaultValue:{value:"OFF"},description:"OFFになるときのラベル",name:"offLabel",required:!1,type:{name:"string"}}}}}catch{}const j={title:"forms/Switch",component:x,tags:["autodocs"],argTypes:{}},r={args:{name:"test1",value:"1",onLabel:"ON",offLabel:"OFF",checked:!1,showLabel:!1}},o={args:{name:"test1",value:"1",onLabel:"ON",offLabel:"OFF",checked:!1,showLabel:!1,background:"linear-gradient(19.76deg, #3DA3ED 18.61%, rgba(62, 69, 233, 0.8) 112.01%)",anchorColor:"red"}};var i,u,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    name: 'test1',
    value: '1',
    onLabel: 'ON',
    offLabel: 'OFF',
    checked: false,
    showLabel: false
  }
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var d,b,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(b=o.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};export{r as base,o as customColor,j as default};
//# sourceMappingURL=Switch.story-5e4dc66c.js.map
