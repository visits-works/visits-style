import{r as i,j as t}from"./iframe-71Dfa6A1.js";import{u as x}from"./useIsomorphicLayoutEffect-CNk8Ep2R.js";import"./preload-helper-D9Z9MdNV.js";function w({header:n,show:r,children:o,timeout:s=300,...u}){const e=i.useRef(null),c=i.useRef(0),m=i.useRef(0),g=i.useRef(!0);return i.useEffect(()=>{m.current=s},[s]),x(()=>{if(!e.current)return;if(e.current.style.overflow="hidden",e.current.style.opacity="1",g.current){g.current=!1,e.current.style.height=r?"auto":"0px",r?window.requestAnimationFrame(()=>{e.current&&(c.current=e.current.offsetHeight)}):(window.requestAnimationFrame(()=>{e.current&&(e.current.style.height="auto",c.current=e.current.offsetHeight,e.current.style.height="0px")}),e.current.style.opacity="0");return}r||(e.current.style.height=`${c.current}px`);const h=[];h[0]=window.requestAnimationFrame(()=>{h[1]=window.requestAnimationFrame(()=>{e.current&&(e.current.style.height=`${r?c.current:0}px`,e.current.style.opacity=r?"1":"0")})});let f;const y=()=>{e.current&&(r?(e.current.style.height="auto",e.current.style.overflow="",e.current.style.opacity="",window.requestAnimationFrame(()=>{e.current&&(c.current=e.current.offsetHeight)})):e.current.style.height="0px")};return m.current===0?y():f=window.setTimeout(y,m.current),()=>{h.forEach(window.cancelAnimationFrame),f&&window.clearTimeout(f)}},[r]),t.jsxs("div",{...u,children:[n,t.jsx("div",{className:"transition-all ease-in-out overflow-hidden",role:"region","aria-hidden":!r,ref:e,style:{transitionDuration:`${s}ms`},children:o})]})}w.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{header:{required:!0,tsType:{name:"ReactNode"},description:`ボタンなどの表示するラベル\\
showを変更するロジックのイベントが必要となります`},show:{required:!0,tsType:{name:"boolean"},description:"trueの場合、内容を開きます"},timeout:{required:!1,tsType:{name:"number"},description:`アニメーションの時間\\
0に設定すると、即時に反応します
@default 300`,defaultValue:{value:"300",computed:!1}}},composes:["HTMLAttributes"]};function j(n){return t.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[t.jsx("path",{d:"M11.7 14.8 7 9.8a.5.5 0 0 1 0-.7c.2-.2.5-.2.7 0l4.5 5c.2.2.2.6 0 .8-.1.2-.4.2-.6 0Z",fill:"currentColor"}),t.jsx("path",{d:"m16.9 9.9-4.6 5c-.2.2-.4.2-.6 0a.5.5 0 0 1 0-.8l4.5-5c.2-.2.5-.2.7 0 .1.2.1.6 0 .8Z",fill:"currentColor"})]})}function d({show:n,timeout:r,length:o,onClick:s}){return t.jsx(w,{className:"border-b border-input",header:t.jsxs("button",{className:"flex justify-between items-center w-full hover:underline px-1 py-2 cursor-pointer",type:"button",onClick:s,children:[`accordion header-${o}`,t.jsx(j,{className:"transition-transform ease-in-out",style:{transform:n?"rotate(180deg)":""}})]}),show:n,timeout:r,style:{width:"100%"},children:t.jsx("div",{className:"pb-2 pt-1",children:Array.from({length:o}).map((u,e)=>t.jsx("p",{children:"Hello world!"},e))})})}const b={title:"components/Accordion",component:w,tags:["autodocs"],args:{timeout:300},argTypes:{show:{control:!1},header:{control:!1}}},a={render:({timeout:n})=>{const[r,o]=i.useState(0);return t.jsxs(t.Fragment,{children:[t.jsx(d,{show:r===1,timeout:n,length:6,onClick:()=>o(r===1?0:1)}),t.jsx(d,{show:r===2,timeout:n,length:20,onClick:()=>o(r===2?0:2)}),t.jsx(d,{show:r===3,timeout:n,length:4,onClick:()=>o(r===3?0:3)})]})}};function p({length:n=6,timeout:r}){const[o,s]=i.useState(!1),u=()=>s(e=>!e);return t.jsx(d,{show:o,timeout:r,length:n,onClick:u})}const l={render:({timeout:n})=>t.jsxs(t.Fragment,{children:[t.jsx(p,{timeout:n}),t.jsx(p,{timeout:n,length:20}),t.jsx(p,{timeout:n,length:4})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: ({
    timeout
  }) => {
    const [show, setShow] = useState(0);
    return <>
        <Test show={show === 1} timeout={timeout} length={6} onClick={() => setShow(show === 1 ? 0 : 1)} />
        <Test show={show === 2} timeout={timeout} length={20} onClick={() => setShow(show === 2 ? 0 : 2)} />
        <Test show={show === 3} timeout={timeout} length={4} onClick={() => setShow(show === 3 ? 0 : 3)} />
      </>;
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: ({
    timeout
  }) => <>
      <Fancy timeout={timeout} />
      <Fancy timeout={timeout} length={20} />
      <Fancy timeout={timeout} length={4} />
    </>
}`,...l.parameters?.docs?.source}}};export{b as default,l as multiple,a as single};
