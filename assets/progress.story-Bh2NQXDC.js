import{r as m,j as a}from"./iframe-BB4tf_El.js";import{B as t}from"./Base-CHxFwfQ2.js";import"./preload-helper-PPVm8Dsz.js";import"./merge-DApEyPFe.js";function o({value:r,max:s,...n}){const i=m.useMemo(()=>r?Math.min(100,Math.round(r/s*100)):0,[r,s]);return a.jsx(t,{role:"progressbar",classList:"relative overflow-hidden rounded-full bg-primary","aria-valuemax":s,"aria-valuemin":0,...n,children:a.jsx(t,{className:"h-full w-full flex-1 bg-input transition-all origin-right",style:{transform:`translateX(${i}%)`}})})}o.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{value:{required:!0,tsType:{name:"number"},description:"現状の進捗"},max:{required:!0,tsType:{name:"number"},description:`進捗の最大値\\
最小値は0基準になるので、それに合わせてください`}},composes:["HTMLAttributes"]};const d={title:"elements/Progress",component:o,tags:["autodocs"],argTypes:{}},e={args:{value:20,max:100,className:"w-[250px] h-4"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    value: 20,
    max: 100,
    className: 'w-[250px] h-4'
  }
}`,...e.parameters?.docs?.source}}};export{e as base,d as default};
