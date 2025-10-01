import{r as o,j as n}from"./iframe-DREP7wHr.js";import{m as l}from"./merge-0FHwH-zM.js";import"./preload-helper-PPVm8Dsz.js";function i({value:r,max:s,className:a,...m}){const t=o.useMemo(()=>r?Math.round(r/s*100):0,[r,s]),p=o.useMemo(()=>l("relative overflow-hidden rounded-full bg-primary",a),[a]);return n.jsx("div",{role:"progressbar",className:p,"aria-valuemax":s,"aria-valuemin":0,...m,children:n.jsx("div",{className:"h-full w-full flex-1 bg-input transition-all origin-right",style:{transform:`translateX(${t>100?100:t}%)`}})})}i.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{value:{required:!0,tsType:{name:"number"},description:"現状の進捗"},max:{required:!0,tsType:{name:"number"},description:`進捗の最大値\\
最小値は0基準になるので、それに合わせてください`}},composes:["HTMLAttributes"]};const g={title:"elements/Progress",component:i,tags:["autodocs"],argTypes:{}},e={args:{value:20,max:100,className:"w-[250px] h-4"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    value: 20,
    max: 100,
    className: 'w-[250px] h-4'
  }
}`,...e.parameters?.docs?.source}}};export{e as base,g as default};
