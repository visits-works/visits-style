import{H as l,C as d,U as p}from"./styled-components.browser.esm-482fcb23.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";function u({theme:e,color:a}){const s=!a||a==="light"?e.background:e[a];return d(["border-color:",";border-right-color:",";border-top-color:",";"],s,e.border,e.border)}const c=p(["from{transform:rotate(0deg);}to{transform:rotate(359deg);}"]),n=l.div.withConfig({displayName:"Spinner",componentId:"sc-34g0il-0"})(["display:inline-block;width:",";height:",";margin:0;padding:0;position:relative;&:after{display:block;top:0;left:0;animation:"," 750ms infinite linear;border:"," solid;border-radius:100%;",' content:"";height:100%;width:100%;position:absolute;}'],({size:e})=>e||"100%",({size:e})=>e||"100%",c,({borderSize:e})=>e,u);n.defaultProps={borderSize:"2px"};const m=n;try{n.displayName="Spinner",n.__docgenInfo={description:"",displayName:"Spinner",props:{size:{defaultValue:null,description:"サイズ",name:"size",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},borderSize:{defaultValue:{value:"2px"},description:"spinnerの太さ",name:"borderSize",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const f=["","primary","info","link","success","warning","danger","dark"],S={title:"components/Spinner",component:m,tags:["autodocs"]},r={args:{color:"primary",size:"5rem"},parameters:{color:{values:f}}};var o,i,t;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: '5rem'
  },
  parameters: {
    color: {
      values: colorList
    }
  }
}`,...(t=(i=r.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};export{r as base,S as default};
//# sourceMappingURL=spinner.story-d3cbf1bb.js.map
