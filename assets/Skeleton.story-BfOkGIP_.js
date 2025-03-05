import{j as e}from"./jsx-runtime-CLpGMVip.js";import{r as m}from"./index-CZMpeKRu.js";import{m as d}from"./merge-n6Ak0Tla.js";function s({className:n,...c}){const l=m.useMemo(()=>d("inline-block animate-pulse rounded-md bg-accent",n),[n]);return e.jsx("span",{className:l,...c})}s.__docgenInfo={description:"",methods:[],displayName:"Skeleton"};const u={title:"elements/Skeleton",component:s,tags:["autodocs"],argTypes:{}},a={render:()=>e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(s,{className:"h-12 w-12 rounded-full"}),e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsx(s,{className:"h-4 w-[250px]"}),e.jsx(s,{className:"h-4 w-[200px]"})]})]})};var o,r,t;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="flex flex-col space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
}`,...(t=(r=a.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};export{a as base,u as default};
