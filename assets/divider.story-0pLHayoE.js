import{j as e}from"./iframe-BB4tf_El.js";import{B as o}from"./Base-CHxFwfQ2.js";import"./preload-helper-PPVm8Dsz.js";import"./merge-DApEyPFe.js";function i({orientation:t="horizontal",...n}){return e.jsx(o,{as:"hr",role:"none",classList:["border-0 p-0 shrink-0 bg-input",t==="horizontal"?"h-px w-full":"w-px h-full"],...n})}i.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"@default 'horizontal'",defaultValue:{value:"'horizontal'",computed:!1}}},composes:["HTMLAttributes"]};const c={title:"elements/Divider",component:i,tags:["autodocs"],argTypes:{orientation:["horizontal","vertical"]}},r={render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Content"}),e.jsx(i,{className:"my-2"}),e.jsxs("div",{className:"flex h-5 items-center space-x-4 text-sm",children:[e.jsx("div",{children:"Blog"}),e.jsx(i,{orientation:"vertical"}),e.jsx("div",{children:"Docs"}),e.jsx(i,{orientation:"vertical"}),e.jsx("div",{children:"Source"})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};export{r as base,c as default};
