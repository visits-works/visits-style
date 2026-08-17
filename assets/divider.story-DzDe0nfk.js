import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./Base-CVEPMVTs.js";function i({orientation:e=`horizontal`,...t}){return(0,a.jsx)(r,{as:`hr`,role:`none`,classList:[`border-0 p-0 shrink-0 bg-input`,e===`horizontal`?`h-px w-full`:`w-px h-full`],...t})}var a;function o(){return(o=e((()=>{n(),a=t(),i.__docgenInfo={description:``,methods:[],displayName:`Divider`,props:{orientation:{required:!1,tsType:{name:`union`,raw:`'horizontal' | 'vertical'`,elements:[{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'vertical'`}]},description:`@default 'horizontal'`,defaultValue:{value:`'horizontal'`,computed:!1}}},composes:[`HTMLAttributes`]}})))()}var s,c,l;function u(){return(u=e((()=>{o(),s=t(),c={title:`elements/Divider`,component:i,tags:[`autodocs`],argTypes:{orientation:[`horizontal`,`vertical`]}},l={render:()=>(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`div`,{children:`Content`}),(0,s.jsx)(i,{className:`my-2`}),(0,s.jsxs)(`div`,{className:`flex h-5 items-center space-x-4 text-sm`,children:[(0,s.jsx)(`div`,{children:`Blog`}),(0,s.jsx)(i,{orientation:`vertical`}),(0,s.jsx)(`div`,{children:`Docs`}),(0,s.jsx)(i,{orientation:`vertical`}),(0,s.jsx)(`div`,{children:`Source`})]})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <div>Content</div>
      <Divider className="my-2" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Divider orientation="vertical" />
        <div>Docs</div>
        <Divider orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
}`,...l.parameters?.docs?.source}}}})))()}u();export{l as base,c as default};