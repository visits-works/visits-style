import{s as c,n as d,c as p}from"./styled-components.browser.esm-cceca312.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";function l({theme:r,color:n}){const a=!n||n==="light"?r.background:r[n];return d(["border-color:",";border-right-color:",";border-top-color:",";"],a,r.border,r.border)}const m=p(["from{transform:rotate(0deg);}to{transform:rotate(359deg);}"]);function g(r){return r!=="color"&&r!=="size"&&r!=="borderSize"}const s=c.div.withConfig({shouldForwardProp:g}).withConfig({displayName:"Spinner",componentId:"sc-34g0il-0"})(["display:inline-block;width:",";height:",";margin:0;padding:0;position:relative;&:after{display:block;top:0;left:0;animation:"," 750ms infinite linear;border:"," solid;border-radius:100%;",' content:"";height:100%;width:100%;position:absolute;}'],({size:r})=>r||"100%",({size:r})=>r||"100%",m,({borderSize:r})=>r,l);s.defaultProps={borderSize:"2px"};const u=s,b=["","primary","info","link","success","warning","danger","dark"],w={title:"components/Spinner",component:u,tags:["autodocs"]},o={args:{color:"primary",size:"5rem"},parameters:{color:{values:b}}};var t,e,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: '5rem'
  },
  parameters: {
    color: {
      values: colorList
    }
  }
}`,...(i=(e=o.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};export{o as base,w as default};
//# sourceMappingURL=spinner.story-ff481b52.js.map
