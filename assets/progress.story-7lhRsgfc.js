import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Base-CVEPMVTs.js";function a({value:e,max:t,...n}){let r=(0,o.useMemo)(()=>e?Math.min(100,Math.round(e/t*100)):0,[e,t]);return(0,s.jsx)(i,{role:`progressbar`,classList:`relative overflow-hidden rounded-full bg-primary`,"aria-valuemax":t,"aria-valuemin":0,...n,children:(0,s.jsx)(i,{className:`h-full w-full flex-1 bg-input transition-all origin-right`,style:{transform:`translateX(${r}%)`}})})}var o,s;function c(){return(c=e((()=>{o=t(),r(),s=n(),a.__docgenInfo={description:``,methods:[],displayName:`Progress`,props:{value:{required:!0,tsType:{name:`number`},description:`現状の進捗`},max:{required:!0,tsType:{name:`number`},description:`進捗の最大値\\
最小値は0基準になるので、それに合わせてください`}},composes:[`HTMLAttributes`]}})))()}var l,u;function d(){return(d=e((()=>{c(),l={title:`elements/Progress`,component:a,tags:[`autodocs`],argTypes:{}},u={args:{value:20,max:100,className:`w-[250px] h-4`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: 20,
    max: 100,
    className: 'w-[250px] h-4'
  }
}`,...u.parameters?.docs?.source}}}})))()}d();export{u as base,l as default};