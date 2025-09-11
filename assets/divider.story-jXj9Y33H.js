import{r as a,j as e}from"./iframe-71Dfa6A1.js";import{c as l}from"./clsx-B-dksMZM.js";import{m as d}from"./merge-0FHwH-zM.js";import"./preload-helper-D9Z9MdNV.js";function i({className:t,orientation:o="horizontal",...n}){const s=a.useMemo(()=>d(l("border-0 p-0 shrink-0 bg-input",o==="horizontal"?"h-[1px] w-full":"w-[1px] h-full"),t),[t,o]);return e.jsx("hr",{className:s,role:"none",...n})}i.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"@default 'horizontal'",defaultValue:{value:"'horizontal'",computed:!1}}},composes:["HTMLAttributes"]};const u={title:"elements/Divider",component:i,tags:["autodocs"],argTypes:{orientation:["horizontal","vertical"]}},r={render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Content"}),e.jsx(i,{className:"my-2"}),e.jsxs("div",{className:"flex h-5 items-center space-x-4 text-sm",children:[e.jsx("div",{children:"Blog"}),e.jsx(i,{orientation:"vertical"}),e.jsx("div",{children:"Docs"}),e.jsx(i,{orientation:"vertical"}),e.jsx("div",{children:"Source"})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};export{r as base,u as default};
