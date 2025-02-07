import{j as r}from"./jsx-runtime-CLpGMVip.js";import{r as i}from"./index-CZMpeKRu.js";import{u as T}from"./useIsomorphicLayoutEffect-94RkQO-_.js";import{C as v}from"./ArrowDown-Dw6nlIQU.js";function w({header:n,show:t,children:o,timeout:s=300,...u}){const e=i.useRef(null),c=i.useRef(0),d=i.useRef(0),y=i.useRef(!0);return i.useEffect(()=>{d.current=s},[s]),T(()=>{if(!e.current)return;if(e.current.style.overflow="hidden",e.current.style.opacity="1",y.current){y.current=!1,e.current.style.height=t?"auto":"0px",t?window.requestAnimationFrame(()=>{e.current&&(c.current=e.current.offsetHeight)}):(window.requestAnimationFrame(()=>{e.current&&(e.current.style.height="auto",c.current=e.current.offsetHeight,e.current.style.height="0px")}),e.current.style.opacity="0");return}t||(e.current.style.height=`${c.current}px`);const h=[];h[0]=window.requestAnimationFrame(()=>{h[1]=window.requestAnimationFrame(()=>{e.current&&(e.current.style.height=`${t?c.current:0}px`,e.current.style.opacity=t?"1":"0")})});let f;const g=()=>{e.current&&(t?(e.current.style.height="auto",e.current.style.overflow="",e.current.style.opacity="",window.requestAnimationFrame(()=>{e.current&&(c.current=e.current.offsetHeight)})):e.current.style.height="0px")};return d.current===0?g():f=window.setTimeout(g,d.current),()=>{h.forEach(window.cancelAnimationFrame),f&&window.clearTimeout(f)}},[t]),r.jsxs("div",{...u,children:[n,r.jsx("div",{className:"transition-all ease-in-out overflow-hidden",role:"region","aria-hidden":!t,ref:e,style:{transitionDuration:`${s}ms`},children:o})]})}w.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{header:{required:!0,tsType:{name:"ReactNode"},description:`ボタンなどの表示するラベル\\
showを変更するロジックのイベントが必要となります`},show:{required:!0,tsType:{name:"boolean"},description:"trueの場合、内容を開きます"},timeout:{required:!1,tsType:{name:"number"},description:`アニメーションの時間\\
0に設定すると、即時に反応します
@default 300`,defaultValue:{value:"300",computed:!1}}},composes:["HTMLAttributes"]};function m({show:n,timeout:t,length:o,onClick:s}){return r.jsx(w,{className:"border-b border-input",header:r.jsxs("button",{className:"flex justify-between items-center w-full hover:underline px-1 py-2 cursor-pointer",type:"button",onClick:s,children:[`accordion header-${o}`,r.jsx(v,{className:"transition-transform ease-in-out",style:{transform:n?"rotate(180deg)":""}})]}),show:n,timeout:t,style:{width:"100%"},children:r.jsx("div",{className:"pb-2 pt-1",children:Array.from({length:o}).map((u,e)=>r.jsx("p",{children:"Hello world!"},e))})})}const R={title:"components/Accordion",component:w,tags:["autodocs"],args:{timeout:300},argTypes:{show:{control:!1},header:{control:!1}}},a={render:({timeout:n})=>{const[t,o]=i.useState(0);return r.jsxs(r.Fragment,{children:[r.jsx(m,{show:t===1,timeout:n,length:6,onClick:()=>o(t===1?0:1)}),r.jsx(m,{show:t===2,timeout:n,length:20,onClick:()=>o(t===2?0:2)}),r.jsx(m,{show:t===3,timeout:n,length:4,onClick:()=>o(t===3?0:3)})]})}};function p({length:n=6,timeout:t}){const[o,s]=i.useState(!1),u=()=>s(e=>!e);return r.jsx(m,{show:o,timeout:t,length:n,onClick:u})}const l={render:({timeout:n})=>r.jsxs(r.Fragment,{children:[r.jsx(p,{timeout:n}),r.jsx(p,{timeout:n,length:20}),r.jsx(p,{timeout:n,length:4})]})};var x,j,F;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(F=(j=a.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var b,A,S;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: ({
    timeout
  }) => <>
      <Fancy timeout={timeout} />
      <Fancy timeout={timeout} length={20} />
      <Fancy timeout={timeout} length={4} />
    </>
}`,...(S=(A=l.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};export{R as default,l as multiple,a as single};
