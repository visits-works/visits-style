import{j as r}from"./jsx-runtime-94f6e698.js";import{r as u}from"./index-8db94870.js";import{H as A}from"./styled-components.browser.esm-482fcb23.js";import{u as F}from"./useIsomorphicLayoutEffect-54e15dad.js";import"./_commonjsHelpers-042e6b4d.js";function s({header:o,show:t,children:l,timeout:i=300,...m}){const e=u.useRef(null),n=u.useRef(0),f=u.useRef(0),p=u.useRef(!0);return u.useEffect(()=>{f.current=i},[i]),F(()=>{if(!e.current)return;if(e.current.style.overflow="hidden",e.current.style.opacity="1",p.current){p.current=!1,e.current.style.height=t?"auto":"0px",t?requestAnimationFrame(()=>{e.current&&(n.current=e.current.offsetHeight)}):(requestAnimationFrame(()=>{e.current&&(e.current.style.height="auto",n.current=e.current.offsetHeight,e.current.style.height="0px")}),e.current.style.opacity="0");return}t||(e.current.style.height=`${n.current}px`);const d=[];d[0]=requestAnimationFrame(()=>{d[1]=requestAnimationFrame(()=>{e.current&&(e.current.style.height=`${t?n.current:0}px`,e.current.style.opacity=t?"1":"0")})});const x=setTimeout(()=>{e.current&&(t?(e.current.style.height="auto",e.current.style.overflow="",e.current.style.opacity="",requestAnimationFrame(()=>{e.current&&(n.current=e.current.offsetHeight)})):e.current.style.height="0px")},f.current);return()=>{d.forEach(cancelAnimationFrame),clearTimeout(x)}},[t]),r.jsxs("div",{...m,children:[o,r.jsx(j,{"aria-hidden":!t,ref:e,style:{transitionDuration:`${i}ms`},children:l})]})}const j=A.div.withConfig({displayName:"Accordion__AnimatedContent",componentId:"sc-1yjowun-0"})(["will-change:opacity,height,transform;transition-property:opacity,height,transform;transition-timing-function:ease-in-out;"]);try{s.displayName="Accordion",s.__docgenInfo={description:"",displayName:"Accordion",props:{header:{defaultValue:null,description:"ボタンなどの表示するラベル",name:"header",required:!0,type:{name:"any"}},show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},timeout:{defaultValue:{value:"300"},description:"アニメーションの時間",name:"timeout",required:!1,type:{name:"number"}}}}}catch{}function c({length:o=6,defaultShow:t=!1}){const[l,i]=u.useState(t),m=()=>i(e=>!e);return r.jsx(s,{header:r.jsx("button",{type:"button",onClick:m,children:"click me"}),show:l,style:{width:"100%"},children:Array.from({length:o}).map((e,n)=>r.jsx("div",{children:"Hello world!"},n))})}const H={title:"components/Accordion",component:s,tags:["autodocs"],render:c,argTypes:{header:{table:!1},show:{table:!1}}},a={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(c,{}),r.jsx(c,{length:20}),r.jsx(c,{length:4})]}),args:{}};var h,y,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <>
      <Fancy />
      <Fancy length={20} />
      <Fancy length={4} />
    </>,
  // @ts-ignore
  args: {}
}`,...(g=(y=a.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};export{H as default,a as multiple};
//# sourceMappingURL=accordion.story-0d3f17fb.js.map
