import{j as a}from"./jsx-runtime-94f6e698.js";import{r as t}from"./index-8db94870.js";import{s as _}from"./styled-components.browser.esm-cceca312.js";import{a as F,d as L,P as k}from"./index-f73b4e09.js";import{B as b}from"./index-f8ab6b7f.js";import{B as D}from"./index-e9fa36ba.js";import{F as E}from"./index-6875c228.js";import{T as j}from"./index-8b4f6b62.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";import"./useIsomorphicLayoutEffect-54e15dad.js";import"./polished.esm-d58a66c9.js";import"./findColorInvert-a3844e22.js";import"./boxShadow-31bde96d.js";import"./setSize-000c66a5.js";import"./disabledColor-930f4066.js";import"./HelpMessage-960772c6.js";function y({className:u,message:i,duration:r=5e3,clear:o,id:n,clearOnClick:l}){const e=t.useRef(o),p=t.useRef(!1),[x,s]=t.useState(!1),{context:d,refs:c}=F({open:x,onOpenChange:s,nodeId:n}),{isMounted:m,styles:I}=L(d,{duration:250,initial:{opacity:0,transform:"scale(0.8)"}});t.useEffect(()=>s(!0),[n]),t.useEffect(()=>{var f;p.current!==m&&(m||(f=e.current)==null||f.call(e,n),p.current=m)},[m,n]),t.useEffect(()=>{if(!r)return;const f=setTimeout(()=>s(!1),r);return()=>clearTimeout(f)},[r]);const A=t.useCallback(()=>{l&&s(!1)},[l]);return e.current=o,m?a.jsx(q,{ref:c.setFloating,role:"status","data-testid":"vs-toast-item",className:u,style:I,onClick:A,children:i}):null}const q=_.li.withConfig({displayName:"ToastItem__Item",componentId:"sc-193rp7r-0"})(["position:relative;display:flex;width:fit-content;padding:0.375em 0.75em;max-width:100%;transition-timing-function:cubic-bezier(0.645,0.045,0.355,1);"]);try{y.displayName="ToastItem",y.__docgenInfo={description:"",displayName:"ToastItem",props:{clear:{defaultValue:null,description:"",name:"clear",required:!0,type:{name:"(id: string) => void"}},id:{defaultValue:null,description:"認識ID",name:"id",required:!0,type:{name:"string"}},message:{defaultValue:null,description:"表示する内容",name:"message",required:!1,type:{name:"ReactNode"}},duration:{defaultValue:{value:"5000"},description:"表示される時間 nullの場合は自動で閉じられません",name:"duration",required:!1,type:{name:"number | null"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},clearOnClick:{defaultValue:null,description:"押したら閉じられる",name:"clearOnClick",required:!1,type:{name:"boolean"}}}}}catch{}function h({toasts:u,clear:i,fixed:r,margin:o="16px",position:n="top-left"}){const l=t.useMemo(()=>{const e={position:r?"fixed":"absolute"};return n.indexOf("top")>-1?e.top=o:n.indexOf("bottom")>-1&&(e.bottom=o),n.indexOf("left")>-1?(e.left=o,e.alignItems="flex-start"):n.indexOf("right")>-1?(e.right=o,e.alignItems="flex-end"):(e.left="50%",e.alignItems="center",e.transform="translateX(-50%)"),e},[r,o,n]);return a.jsx(k,{children:a.jsx(M,{style:l,children:u.map(e=>t.createElement(y,{...e,key:e.id,clear:i}))})})}const M=_.ul.withConfig({displayName:"Toast__ToastList",componentId:"sc-8192b2-0"})(["display:flex;flex-direction:column;z-index:9999;pointer-events:none;overflow:hidden;li + li{margin-top:1rem;}"]);try{h.displayName="Toast",h.__docgenInfo={description:"",displayName:"Toast",props:{toasts:{defaultValue:null,description:"表示するToastのリスト",name:"toasts",required:!0,type:{name:"ToastType[]"}},clear:{defaultValue:null,description:"toastを消すタイミングのコールバック",name:"clear",required:!0,type:{name:"(id: string) => void"}},position:{defaultValue:{value:"top-left"},description:`toastの表示される場所の指定
\\
top, top-right, top-left, bottom, bottom-right, bottom-left`,name:"position",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"top-right"'},{value:'"top-left"'},{value:'"bottom-right"'},{value:'"bottom-left"'}]}},margin:{defaultValue:{value:"16px"},description:"margin 単位はpx",name:"margin",required:!1,type:{name:"string"}},fixed:{defaultValue:null,description:"スクロールしても固定として表示する",name:"fixed",required:!1,type:{name:"boolean"}}}}}catch{}const V=["top","top-left","top-right","bottom","bottom-left","bottom-right"],C=["warning","danger","info","primary","success"],Z={title:"components/Toast",component:h,tags:["autodocs"],argTypes:{}},g={render:u=>{const[i,r]=t.useState([]),[o,n]=t.useState(2e3),l=t.useCallback(()=>{const s=i.slice(),d=C[Math.floor(Math.random()*Math.floor(C.length))],c=`_${Math.random().toString(36).substring(2,9)}`;s.push({id:c,message:a.jsx(D,{color:d,borderless:!0,style:{padding:"0.5rem 0.85rem"},children:`ID: ${c}`}),duration:o}),r(s)},[o,i]),e=t.useCallback(s=>{r(d=>d.filter(c=>c.id!==s))},[]),p=t.useCallback(()=>r([]),[]),x=t.useCallback(({target:s})=>{s.value?n(parseInt(s.value,10)):n(null)},[]);return a.jsxs("div",{children:[a.jsx(E,{label:"タイムアウト(空欄はタイムアウトなし)",children:a.jsx(j,{value:o||"",onChange:x,outline:!0})}),a.jsx("br",{}),a.jsxs("footer",{children:[a.jsx(b,{color:"primary",onClick:l,children:"Toast!"}),a.jsx(b,{color:"danger",onClick:p,style:{marginLeft:"0.5rem"},children:"Clear All"})]}),a.jsx(h,{...u,toasts:i,clear:e})]})},args:{fixed:!0,position:"top-left"},parameters:{controls:{position:V}}};var T,B,v;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => {
    const [list, setList] = useState<ToastType[]>([]);
    const [duration, setDuration] = useState<number | null>(2000);
    const addToast = useCallback(() => {
      const newList = list.slice();
      const color = colorList[Math.floor(Math.random() * Math.floor(colorList.length))];
      const id = \`_\${Math.random().toString(36).substring(2, 9)}\`;
      newList.push({
        id,
        message: <Box color={color} borderless style={{
          padding: '0.5rem 0.85rem'
        }}>
            {\`ID: \${id}\`}
          </Box>,
        duration
      });
      setList(newList);
    }, [duration, list]);
    const clearToast = useCallback((id: string) => {
      setList(l => l.filter(item => item.id !== id));
    }, []);
    const clearAll = useCallback(() => setList([]), []);
    const onDurationChange = useCallback(({
      target
    }: any) => {
      if (!target.value) {
        setDuration(null);
      } else {
        setDuration(parseInt(target.value, 10));
      }
    }, []);
    return <div>
        <Field label="タイムアウト(空欄はタイムアウトなし)">
          <TextInput value={duration || ''} onChange={onDurationChange} outline />
        </Field>
        <br />
        <footer>
          <Button color="primary" onClick={addToast}>Toast!</Button>
          <Button color="danger" onClick={clearAll} style={{
          marginLeft: '0.5rem'
        }}>Clear All</Button>
        </footer>
        <Toast {...args} toasts={list} clear={clearToast} />
      </div>;
  },
  // @ts-ignore
  args: {
    fixed: true,
    position: 'top-left'
  },
  parameters: {
    controls: {
      position: positionList
    }
  }
}`,...(v=(B=g.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};export{g as base,Z as default};
//# sourceMappingURL=toast.story-b2ab235b.js.map
