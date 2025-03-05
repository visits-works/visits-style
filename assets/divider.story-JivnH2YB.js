import{j as e}from"./jsx-runtime-CLpGMVip.js";import{r as c}from"./index-CZMpeKRu.js";import{c as m}from"./clsx-B-dksMZM.js";import{m as v}from"./merge-n6Ak0Tla.js";function i({className:t,orientation:o="horizontal",...l}){const d=c.useMemo(()=>v(m("border-0 p-0 shrink-0 bg-input",o==="horizontal"?"h-[1px] w-full":"w-[1px] h-full"),t),[t,o]);return e.jsx("hr",{className:d,role:"none",...l})}i.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"@default 'horizontal'",defaultValue:{value:"'horizontal'",computed:!1}}},composes:["HTMLAttributes"]};const f={title:"elements/Divider",component:i,tags:["autodocs"],argTypes:{orientation:["horizontal","vertical"]}},r={render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Content"}),e.jsx(i,{className:"my-2"}),e.jsxs("div",{className:"flex h-5 items-center space-x-4 text-sm",children:[e.jsx("div",{children:"Blog"}),e.jsx(i,{orientation:"vertical"}),e.jsx("div",{children:"Docs"}),e.jsx(i,{orientation:"vertical"}),e.jsx("div",{children:"Source"})]})]})};var n,s,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};export{r as base,f as default};
