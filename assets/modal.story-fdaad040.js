import{j as e}from"./jsx-runtime-94f6e698.js";import{r as a}from"./index-8db94870.js";import{s as J}from"./styled-components.browser.esm-cceca312.js";import{u as ee,a as te,b as oe,c as re,d as se,P as le,F as ne}from"./index-f73b4e09.js";import{B as c}from"./index-e9fa36ba.js";import{B as u}from"./index-f8ab6b7f.js";import{T as h}from"./TextButton-3e00eaef.js";import{T as L}from"./index-8b4f6b62.js";import{C as g}from"./Close-c5c379c5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";import"./useIsomorphicLayoutEffect-54e15dad.js";import"./findColorInvert-a3844e22.js";import"./polished.esm-d58a66c9.js";import"./boxShadow-31bde96d.js";import"./setSize-000c66a5.js";import"./disabledColor-930f4066.js";import"./HelpMessage-960772c6.js";function ae(o){o&&o.stopPropagation()}function d({show:o,children:l,timeout:n=200,padding:s="0.85rem",closeModal:t,closeOnOverlay:r,closeOnEsc:i,onExited:x,...Q}){const y=a.useRef(x),S=a.useRef(!1),U=ee(),{refs:X,context:k}=te({open:o,onOpenChange:t,nodeId:U}),{getFloatingProps:Y}=oe([re(k,{enabled:i,outsidePress:!1,escapeKey:i})]),{isMounted:m,styles:Z}=se(k,{duration:n,initial:{opacity:0,transform:"scale(0.8)"}});a.useEffect(()=>{var b;S.current!==m&&(S.current=m,!m&&((b=y.current)==null||b.call(y)))},[m]);const $=b=>{r&&(t==null||t())};return y.current=x,e.jsx(le,{children:m?e.jsx(de,{lockScroll:!0,"data-testid":"vs-modal-overlay",onClick:$,style:{padding:s},children:e.jsx(ie,{ref:X.setFloating,role:"dialog",...Y({...Q,style:Z,onClick:ae}),children:l})}):null})}const v=c,de=J(ne).withConfig({displayName:"Modal__Overlay",componentId:"sc-pb7lhx-0"})(["   display:flex;display:grid;place-items:center;align-items:center;justify-content:center;background:",";z-index:9997;"],({theme:o})=>o.backdrop),ie=J.div.withConfig({displayName:"Modal__Wrapper",componentId:"sc-pb7lhx-1"})(["will-change:transform,opacity;transform-origin:center top;transition-timing-function:cubic-bezier(0.645,0.045,0.355,1);z-index:9999;"]);try{d.displayName="Modal",d.__docgenInfo={description:"",displayName:"Modal",props:{show:{defaultValue:null,description:"trueの場合、モーダルを表示します。",name:"show",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"モーダルのbodyに入れる内容",name:"children",required:!1,type:{name:"ReactNode"}},closeModal:{defaultValue:null,description:"モーダルを閉じる処理",name:"closeModal",required:!0,type:{name:"() => void"}},closeOnOverlay:{defaultValue:null,description:"オーバーレイのクリックでモーダルクローズ",name:"closeOnOverlay",required:!1,type:{name:"boolean"}},closeOnEsc:{defaultValue:null,description:"escボタンでクローズ",name:"closeOnEsc",required:!1,type:{name:"boolean"}},timeout:{defaultValue:{value:"200"},description:"モーダルの表示・非表示のアニメーション速度",name:"timeout",required:!1,type:{name:"number"}},onExited:{defaultValue:null,description:"モーダルのtransition exitが完了した時に発火されるcallback",name:"onExited",required:!1,type:{name:"(() => void)"}},padding:{defaultValue:{value:"0.85rem"},description:"モーダルの背景からのpaddingを指定します。",name:"padding",required:!1,type:{name:"string"}}}}}catch{}try{v.displayName="ModalContent",v.__docgenInfo={description:"",displayName:"ModalContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const p={position:"absolute",padding:"0.75rem",top:0,right:0},Ee={title:"components/Modal",component:d,tags:["autodocs"],args:{show:!1,timeout:200,closeOnOverlay:!0,closeOnEsc:!0},argTypes:{show:{control:!1},children:{control:!1},closeModal:{control:!1}}},w={render:({show:o,...l})=>{const[n,s]=a.useState(o),t=()=>s(r=>!r);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:t,children:"show modal"}),e.jsx(d,{...l,show:n,closeModal:t,children:e.jsxs(c,{color:"background",children:[e.jsxs("header",{style:{padding:"0.75rem 0.325rem",textAlign:"center"},children:[e.jsx("h3",{children:"Modal Title"}),e.jsx(h,{style:p,onClick:t,children:e.jsx(g,{width:"12",height:"12"})})]}),e.jsx("section",{children:"Modal body text goes here."}),e.jsx("footer",{children:e.jsx(u,{color:"primary",style:{width:"100%"},children:"Save changes"})})]})})]})}},f={render:o=>{const[l,n]=a.useState(!1),s=()=>n(t=>!t);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:s,children:"show modal"}),e.jsx(d,{...o,show:l,closeModal:s,children:e.jsxs(c,{color:"background",children:[e.jsxs("header",{style:{padding:"0.75rem 0.325rem",textAlign:"center"},children:[e.jsx("h3",{children:"Modal Title"}),e.jsx(h,{style:p,onClick:s,children:e.jsx(g,{width:"12",height:"12"})})]}),e.jsx("section",{children:Array.from({length:100}).map((t,r)=>e.jsx("p",{children:"Modal body text goes here."},r))}),e.jsx("footer",{children:e.jsx(u,{color:"primary",style:{width:"100%"},children:"Save changes"})})]})})]})}},C={render:o=>{const[l,n]=a.useState(!1),[s,t]=a.useState(!1),r=()=>n(x=>!x),i=()=>t(x=>!x);return e.jsxs("div",{children:[e.jsx("button",{onClick:r,children:"show modal"}),e.jsx(d,{...o,show:l,closeModal:r,children:e.jsxs(c,{color:"background",children:[e.jsxs("header",{style:{padding:"0.75rem 0.325rem",textAlign:"center"},children:[e.jsx("h3",{children:"Modal Title"}),e.jsx(h,{style:p,onClick:r,children:e.jsx(g,{width:"12",height:"12"})})]}),e.jsx("section",{children:"Modal body text goes here."}),e.jsx("footer",{children:e.jsx(u,{color:"primary",style:{width:"100%"},onClick:i,children:"Show Child"})})]})}),e.jsx(d,{...o,show:s,closeModal:i,children:e.jsxs(c,{color:"background",children:[e.jsxs("header",{style:{padding:"0.75rem 0.325rem",textAlign:"center"},children:[e.jsx("h3",{children:"Modal Title"}),e.jsx(h,{style:p,onClick:i,children:e.jsx(g,{width:"12",height:"12"})})]}),e.jsxs("section",{children:["Nested Modal body text goes here.",e.jsx("div",{style:{height:"95vh",color:"blue",width:"50px"}})]}),e.jsx("footer",{children:e.jsx(u,{color:"primary",style:{width:"100%"},children:"Save changes"})})]})})]})}},j={render:({show:o,...l})=>{const[n,s]=a.useState(o),t=()=>s(r=>!r);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:t,children:"show modal"}),e.jsx(d,{...l,show:n,closeModal:t,children:e.jsxs(c,{color:"background",children:[e.jsxs("header",{style:{padding:"0.75rem 0.325rem",textAlign:"center"},children:[e.jsx("h3",{children:"Modal Title"}),e.jsx(h,{style:p,onClick:t,children:e.jsx(g,{width:"12",height:"12"})})]}),e.jsxs("section",{children:["Modal body text goes here.",e.jsx(L,{})]}),e.jsx("footer",{children:e.jsx(u,{color:"primary",style:{width:"100%"},children:"Save changes"})})]})})]})}},M={render:o=>{const[l,n]=a.useState(!1),s=()=>n(r=>!r),t=r=>{r.stopPropagation(),alert("outside")};return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:s,children:"show modal"}),e.jsxs(d,{...o,show:l,closeModal:s,children:[e.jsxs(c,{color:"background",children:[e.jsxs("header",{style:{padding:"0.75rem 0.325rem",textAlign:"center"},children:[e.jsx("h3",{children:"Modal Title"}),e.jsx(h,{style:p,onClick:s,children:e.jsx(g,{width:"12",height:"12"})})]}),e.jsxs("section",{children:["Modal body text goes here.",e.jsx(L,{})]}),e.jsx("footer",{children:e.jsx(u,{color:"primary",style:{width:"100%"},children:"Save changes"})})]}),e.jsx("button",{onClick:t,children:"outside!"})]})]})}},B={render:o=>{const[l,n]=a.useState(!1),[s,t]=a.useState("モーダルを開く"),r=()=>{t(l?"閉じる中...":"開く中..."),n(i=>!i)};return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:r,children:s}),e.jsx(d,{...o,show:l,closeModal:r,onExited:()=>t("モーダルを開く"),children:e.jsxs(c,{color:"background",children:[e.jsxs("header",{style:{padding:"0.75rem 0.325rem",textAlign:"center"},children:[e.jsx("h3",{children:"Modal Title"}),e.jsx(h,{style:p,onClick:r,children:e.jsx(g,{width:"12",height:"12"})})]}),e.jsx("section",{children:"Modal body text goes here."}),e.jsx("footer",{children:e.jsx(u,{color:"primary",style:{width:"100%"},children:"Save changes"})})]})})]})},args:{timeout:500}};var E,T,A;w.parameters={...w.parameters,docs:{...(E=w.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: ({
    show,
    ...rest
  }) => {
    const [showModal, setShow] = useState(show);
    const toggle = () => setShow(prev => !prev);
    return <>
        <button onClick={toggle}>show modal</button>
        <Modal {...rest} show={showModal} closeModal={toggle}>
          <Box color="background">
            <header style={{
            padding: '0.75rem 0.325rem',
            textAlign: 'center'
          }}>
              <h3>Modal Title</h3>
              <TextButton style={CloseButton} onClick={toggle}><Close width="12" height="12" /></TextButton>
            </header>
            <section>
              Modal body text goes here.
            </section>
            <footer>
              <Button color="primary" style={{
              width: '100%'
            }}>Save changes</Button>
            </footer>
          </Box>
        </Modal>
      </>;
  }
}`,...(A=(T=w.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var F,_,P;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    const [showModal, setShow] = useState(false);
    const toggle = () => setShow(prev => !prev);
    return <>
        <button onClick={toggle}>show modal</button>
        <Modal {...args} show={showModal} closeModal={toggle}>
          <Box color="background">
            <header style={{
            padding: '0.75rem 0.325rem',
            textAlign: 'center'
          }}>
              <h3>Modal Title</h3>
              <TextButton style={CloseButton} onClick={toggle}><Close width="12" height="12" /></TextButton>
            </header>
            <section>
              {Array.from({
              length: 100
            }).map((_, i) => <p key={i}>Modal body text goes here.</p>)}
            </section>
            <footer>
              <Button color="primary" style={{
              width: '100%'
            }}>Save changes</Button>
            </footer>
          </Box>
        </Modal>
      </>;
  }
}`,...(P=(_=f.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var O,q,V;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => {
    const [parent, showParent] = useState(false);
    const [child, showChild] = useState(false);
    const toggleParent = () => showParent(prev => !prev);
    const toggleChild = () => showChild(prev => !prev);
    return <div>
        <button onClick={toggleParent}>show modal</button>
        <Modal {...args} show={parent} closeModal={toggleParent}>
          <Box color="background">
            <header style={{
            padding: '0.75rem 0.325rem',
            textAlign: 'center'
          }}>
              <h3>Modal Title</h3>
              <TextButton style={CloseButton} onClick={toggleParent}><Close width="12" height="12" /></TextButton>
            </header>
            <section>
              Modal body text goes here.
            </section>
            <footer>
              <Button color="primary" style={{
              width: '100%'
            }} onClick={toggleChild}>Show Child</Button>
            </footer>
          </Box>
        </Modal>
        <Modal {...args} show={child} closeModal={toggleChild}>
          <Box color="background">
            <header style={{
            padding: '0.75rem 0.325rem',
            textAlign: 'center'
          }}>
              <h3>Modal Title</h3>
              <TextButton style={CloseButton} onClick={toggleChild}><Close width="12" height="12" /></TextButton>
            </header>
            <section>
              Nested Modal body text goes here.
              <div style={{
              height: '95vh',
              color: 'blue',
              width: '50px'
            }} />
            </section>
            <footer>
              <Button color="primary" style={{
              width: '100%'
            }}>Save changes</Button>
            </footer>
          </Box>
        </Modal>
      </div>;
  }
}`,...(V=(q=C.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var I,N,D;j.parameters={...j.parameters,docs:{...(I=j.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: ({
    show,
    ...rest
  }) => {
    const [showModal, setShow] = useState(show);
    const toggle = () => setShow(prev => !prev);
    return <>
        <button onClick={toggle}>show modal</button>
        <Modal {...rest} show={showModal} closeModal={toggle}>
          <Box color="background">
            <header style={{
            padding: '0.75rem 0.325rem',
            textAlign: 'center'
          }}>
              <h3>Modal Title</h3>
              <TextButton style={CloseButton} onClick={toggle}><Close width="12" height="12" /></TextButton>
            </header>
            <section>
              Modal body text goes here.
              <TextInput />
            </section>
            <footer>
              <Button color="primary" style={{
              width: '100%'
            }}>Save changes</Button>
            </footer>
          </Box>
        </Modal>
      </>;
  }
}`,...(D=(N=j.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var R,W,z;M.parameters={...M.parameters,docs:{...(R=M.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => {
    const [showModal, setShow] = useState(false);
    const toggle = () => setShow(prev => !prev);
    const handleExternal = (e: any) => {
      e.stopPropagation();
      alert('outside');
    };
    return <>
        <button onClick={toggle}>show modal</button>
        <Modal {...args} show={showModal} closeModal={toggle}>
          <Box color="background">
            <header style={{
            padding: '0.75rem 0.325rem',
            textAlign: 'center'
          }}>
              <h3>Modal Title</h3>
              <TextButton style={CloseButton} onClick={toggle}><Close width="12" height="12" /></TextButton>
            </header>
            <section>
              Modal body text goes here.
              <TextInput />
            </section>
            <footer>
              <Button color="primary" style={{
              width: '100%'
            }}>Save changes</Button>
            </footer>
          </Box>
          <button onClick={handleExternal}>outside!</button>
        </Modal>
      </>;
  }
}`,...(z=(W=M.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var K,G,H;B.parameters={...B.parameters,docs:{...(K=B.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => {
    const [showModal, setShow] = useState(false);
    const [text, setText] = useState('モーダルを開く');
    const toggle = () => {
      setText(showModal ? '閉じる中...' : '開く中...');
      setShow(prev => !prev);
    };
    return <>
        <button onClick={toggle}>{text}</button>
        <Modal {...args} show={showModal} closeModal={toggle} onExited={() => setText('モーダルを開く')}>
          <Box color="background">
            <header style={{
            padding: '0.75rem 0.325rem',
            textAlign: 'center'
          }}>
              <h3>Modal Title</h3>
              <TextButton style={CloseButton} onClick={toggle}><Close width="12" height="12" /></TextButton>
            </header>
            <section>
              Modal body text goes here.
            </section>
            <footer>
              <Button color="primary" style={{
              width: '100%'
            }}>Save changes</Button>
            </footer>
          </Box>
        </Modal>
      </>;
  },
  args: {
    timeout: 500
  }
}`,...(H=(G=B.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};export{w as base,Ee as default,M as external,j as input,C as nested,B as onExit,f as onScroll};
//# sourceMappingURL=modal.story-fdaad040.js.map
