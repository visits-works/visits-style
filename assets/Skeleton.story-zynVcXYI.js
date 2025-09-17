import{r as c,j as e}from"./iframe-C9DRP0Ve.js";import{m as l}from"./merge-0FHwH-zM.js";import"./preload-helper-D9Z9MdNV.js";function s({className:n,...o}){const t=c.useMemo(()=>l("inline-block animate-pulse rounded-md bg-accent",n),[n]);return e.jsx("div",{className:t,...o})}s.__docgenInfo={description:"",methods:[],displayName:"Skeleton"};const i={title:"elements/Skeleton",component:s,tags:["autodocs"],argTypes:{}},a={render:()=>e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(s,{className:"h-12 w-12 rounded-full"}),e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsx(s,{className:"h-4 w-[250px]"}),e.jsx(s,{className:"h-4 w-[200px]"})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="flex flex-col space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
}`,...a.parameters?.docs?.source}}};export{a as base,i as default};
