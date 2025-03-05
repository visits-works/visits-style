import{j as t}from"./jsx-runtime-CLpGMVip.js";import{r as n}from"./index-CZMpeKRu.js";import{m as d}from"./merge-n6Ak0Tla.js";function l({value:r,max:s,className:a,...u}){const o=n.useMemo(()=>r?Math.round(r/s*100):0,[r,s]),c=n.useMemo(()=>d("relative overflow-hidden rounded-full bg-primary",a),[a]);return t.jsx("div",{role:"progressbar",className:c,"aria-valuemax":s,"aria-valuemin":0,...u,children:t.jsx("div",{className:"h-full w-full flex-1 bg-input transition-all origin-right",style:{transform:`translateX(${o>100?100:o}%)`}})})}l.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{value:{required:!0,tsType:{name:"number"},description:"現状の進捗"},max:{required:!0,tsType:{name:"number"},description:`進捗の最大値\\
最小値は0基準になるので、それに合わせてください`}},composes:["HTMLAttributes"]};const h={title:"elements/Progress",component:l,tags:["autodocs"],argTypes:{}},e={args:{value:20,max:100,className:"w-[250px] h-4"}};var m,i,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    value: 20,
    max: 100,
    className: 'w-[250px] h-4'
  }
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};export{e as base,h as default};
