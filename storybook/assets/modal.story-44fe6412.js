import{j as e}from"./jsx-runtime-94f6e698.js";import{r as a}from"./index-8db94870.js";import{H as L}from"./styled-components.browser.esm-482fcb23.js";import{u as $,a as ee,b as te,c as oe,d as se,P as re,F as le}from"./index-c4391f03.js";import{B as ne}from"./index-4551bb9b.js";import{B as c}from"./index-49f1d340.js";import{T as u}from"./TextButton-beed0082.js";import{T as G}from"./index-e6d13ab7.js";import{C as h}from"./Close-c5c379c5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";import"./useIsomorphicLayoutEffect-54e15dad.js";import"./findColorInvert-e5bd6638.js";import"./polished.esm-d58a66c9.js";import"./boxShadow-92ba1fe5.js";import"./setSize-000c66a5.js";import"./disabledColor-bb7a461b.js";import"./HelpMessage-d324061c.js";function ae(o){o&&o.stopPropagation()}function i({show:o,children:l,timeout:n=200,color:r="background",closeModal:t,external:s,closeOnOverlay:d,closeOnEsc:p,onExited:b,...J}){const x=a.useRef(b),S=a.useRef(!1),Q=$(),{refs:U,context:E}=ee({open:o,onOpenChange:t,nodeId:Q}),{getFloatingProps:X}=te([oe(E,{enabled:p,outsidePress:!1,escapeKey:p})]),{isMounted:m,styles:Y}=se(E,{duration:n,initial:{opacity:0,transform:"scale(0.8)"}});a.useEffect(()=>{var B;S.current!==m&&(S.current=m,!m&&((B=x.current)==null||B.call(x)))},[m]);const Z=B=>{d&&(t==null||t())};return x.current=b,e.jsx(re,{children:m?e.jsx(ie,{lockScroll:!0,"data-testid":"vs-modal-overlay",onClick:Z,children:e.jsxs(de,{ref:U.setFloating,role:"dialog",style:Y,onClick:ae,children:[e.jsx(ne,{role:"document",color:r,...X(J),children:l}),s]})}):null})}const ie=L(le).withConfig({displayName:"Modal__Overlay",componentId:"sc-pb7lhx-0"})(["   display:flex;display:grid;place-items:center;align-items:center;justify-content:center;background:",";padding:0.85rem;z-index:9997;"],({theme:o})=>o.backdrop),de=L.div.withConfig({displayName:"Modal__Wrapper",componentId:"sc-pb7lhx-1"})(["will-change:transform,opacity;transform-origin:center top;transition-timing-function:cubic-bezier(0.645,0.045,0.355,1);z-index:9999;"]);try{i.displayName="Modal",i.__docgenInfo={description:"",displayName:"Modal",props:{show:{defaultValue:null,description:"trueの場合、モーダルを表示します。",name:"show",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"モーダルのbodyに入れる内容",name:"children",required:!1,type:{name:"ReactNode"}},color:{defaultValue:{value:"background"},description:"モーダルのbackground色",name:"color",required:!1,type:{name:"string"}},closeModal:{defaultValue:null,description:"モーダルを閉じる処理",name:"closeModal",required:!0,type:{name:"() => void"}},closeOnOverlay:{defaultValue:null,description:"オーバーレイのクリックでモーダルクローズ",name:"closeOnOverlay",required:!1,type:{name:"boolean"}},closeOnEsc:{defaultValue:null,description:"escボタンでクローズ",name:"closeOnEsc",required:!1,type:{name:"boolean"}},timeout:{defaultValue:{value:"200"},description:"モーダルの表示・非表示のアニメーション速度",name:"timeout",required:!1,type:{name:"number"}},external:{defaultValue:null,description:`モーダル外に表示するElements
\\
もしclick eventがある場合はstopPropagationをしないとモーダルが閉じられます。`,name:"external",required:!1,type:{name:"ReactNode"}},onExited:{defaultValue:null,description:"モーダルのtransition exitが完了した時に発火されるcallback",name:"onExited",required:!1,type:{name:"(() => void)"}}}}}catch{}const ce=["","primary","info","link","success","warning","danger","dark","backgroud"],g={position:"absolute",padding:"0.75rem",top:0,right:0},Te={title:"components/Modal",component:i,tags:["autodocs"],args:{show:!1,timeout:200,closeOnOverlay:!0,closeOnEsc:!0},argTypes:{show:{control:!1},children:{control:!1},closeModal:{control:!1},external:{control:!1}},parameters:{controls:{color:ce}}},y={render:({show:o,...l})=>{const[n,r]=a.useState(o),t=()=>r(s=>!s);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:t,children:"show modal"}),e.jsxs(i,{...l,show:n,closeModal:t,children:[e.jsxs("header",{style:{padding:"0.75rem 0.325rem",textAlign:"center"},children:[e.jsx("h3",{children:"Modal Title"}),e.jsx(u,{style:g,onClick:t,children:e.jsx(h,{width:"12",height:"12"})})]}),e.jsx("section",{children:"Modal body text goes here."}),e.jsx("footer",{children:e.jsx(c,{color:"primary",style:{width:"100%"},children:"Save changes"})})]})]})}},w={render:o=>{const[l,n]=a.useState(!1),r=()=>n(t=>!t);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:r,children:"show modal"}),e.jsxs(i,{...o,show:l,closeModal:r,children:[e.jsxs("header",{style:{padding:"0.75rem 0.325rem",textAlign:"center"},children:[e.jsx("h3",{children:"Modal Title"}),e.jsx(u,{style:g,onClick:r,children:e.jsx(h,{width:"12",height:"12"})})]}),e.jsx("section",{children:Array.from({length:100}).map((t,s)=>e.jsx("p",{children:"Modal body text goes here."},s))}),e.jsx("footer",{children:e.jsx(c,{color:"primary",style:{width:"100%"},children:"Save changes"})})]})]})}},C={render:o=>{const[l,n]=a.useState(!1),[r,t]=a.useState(!1),s=()=>n(p=>!p),d=()=>t(p=>!p);return e.jsxs("div",{children:[e.jsx("button",{onClick:s,children:"show modal"}),e.jsxs(i,{...o,show:l,closeModal:s,children:[e.jsxs("header",{style:{padding:"0.75rem 0.325rem",textAlign:"center"},children:[e.jsx("h3",{children:"Modal Title"}),e.jsx(u,{style:g,onClick:s,children:e.jsx(h,{width:"12",height:"12"})})]}),e.jsx("section",{children:"Modal body text goes here."}),e.jsx("footer",{children:e.jsx(c,{color:"primary",style:{width:"100%"},onClick:d,children:"Show Child"})})]}),e.jsxs(i,{...o,show:r,closeModal:d,children:[e.jsxs("header",{style:{padding:"0.75rem 0.325rem",textAlign:"center"},children:[e.jsx("h3",{children:"Modal Title"}),e.jsx(u,{style:g,onClick:d,children:e.jsx(h,{width:"12",height:"12"})})]}),e.jsxs("section",{children:["Nested Modal body text goes here.",e.jsx("div",{style:{height:"95vh",color:"blue",width:"50px"}})]}),e.jsx("footer",{children:e.jsx(c,{color:"primary",style:{width:"100%"},children:"Save changes"})})]})]})}},f={render:({show:o,...l})=>{const[n,r]=a.useState(o),t=()=>r(s=>!s);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:t,children:"show modal"}),e.jsxs(i,{...l,show:n,closeModal:t,children:[e.jsxs("header",{style:{padding:"0.75rem 0.325rem",textAlign:"center"},children:[e.jsx("h3",{children:"Modal Title"}),e.jsx(u,{style:g,onClick:t,children:e.jsx(h,{width:"12",height:"12"})})]}),e.jsxs("section",{children:["Modal body text goes here.",e.jsx(G,{})]}),e.jsx("footer",{children:e.jsx(c,{color:"primary",style:{width:"100%"},children:"Save changes"})})]})]})}},j={render:o=>{const[l,n]=a.useState(!1),r=()=>n(s=>!s),t=s=>{s.stopPropagation(),alert("outside")};return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:r,children:"show modal"}),e.jsxs(i,{...o,show:l,closeModal:r,external:e.jsx("button",{onClick:t,children:"outside!"}),children:[e.jsxs("header",{style:{padding:"0.75rem 0.325rem",textAlign:"center"},children:[e.jsx("h3",{children:"Modal Title"}),e.jsx(u,{style:g,onClick:r,children:e.jsx(h,{width:"12",height:"12"})})]}),e.jsxs("section",{children:["Modal body text goes here.",e.jsx(G,{})]}),e.jsx("footer",{children:e.jsx(c,{color:"primary",style:{width:"100%"},children:"Save changes"})})]})]})}},M={render:o=>{const[l,n]=a.useState(!1),[r,t]=a.useState("モーダルを開く"),s=()=>{t(l?"閉じる中...":"開く中..."),n(d=>!d)};return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:s,children:r}),e.jsxs(i,{...o,show:l,closeModal:s,onExited:()=>t("モーダルを開く"),children:[e.jsxs("header",{style:{padding:"0.75rem 0.325rem",textAlign:"center"},children:[e.jsx("h3",{children:"Modal Title"}),e.jsx(u,{style:g,onClick:s,children:e.jsx(h,{width:"12",height:"12"})})]}),e.jsx("section",{children:"Modal body text goes here."}),e.jsx("footer",{children:e.jsx(c,{color:"primary",style:{width:"100%"},children:"Save changes"})})]})]})},args:{timeout:500}};var v,k,T;y.parameters={...y.parameters,docs:{...(v=y.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: ({
    show,
    ...rest
  }) => {
    const [showModal, setShow] = useState(show);
    const toggle = () => setShow(prev => !prev);
    return <>
        <button onClick={toggle}>show modal</button>
        <Modal {...rest} show={showModal} closeModal={toggle}>
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
        </Modal>
      </>;
  }
}`,...(T=(k=y.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var F,A,P;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    const [showModal, setShow] = useState(false);
    const toggle = () => setShow(prev => !prev);
    return <>
        <button onClick={toggle}>show modal</button>
        <Modal {...args} show={showModal} closeModal={toggle}>
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
        </Modal>
      </>;
  }
}`,...(P=(A=w.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var _,O,q;C.parameters={...C.parameters,docs:{...(_=C.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    const [parent, showParent] = useState(false);
    const [child, showChild] = useState(false);
    const toggleParent = () => showParent(prev => !prev);
    const toggleChild = () => showChild(prev => !prev);
    return <div>
        <button onClick={toggleParent}>show modal</button>
        <Modal {...args} show={parent} closeModal={toggleParent}>
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
        </Modal>
        <Modal {...args} show={child} closeModal={toggleChild}>
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
        </Modal>
      </div>;
  }
}`,...(q=(O=C.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var I,V,N;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: ({
    show,
    ...rest
  }) => {
    const [showModal, setShow] = useState(show);
    const toggle = () => setShow(prev => !prev);
    return <>
        <button onClick={toggle}>show modal</button>
        <Modal {...rest} show={showModal} closeModal={toggle}>
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
        </Modal>
      </>;
  }
}`,...(N=(V=f.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var D,R,z;j.parameters={...j.parameters,docs:{...(D=j.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => {
    const [showModal, setShow] = useState(false);
    const toggle = () => setShow(prev => !prev);
    const handleExternal = (e: any) => {
      e.stopPropagation();
      alert('outside');
    };
    return <>
        <button onClick={toggle}>show modal</button>
        <Modal {...args} show={showModal} closeModal={toggle} external={<button onClick={handleExternal}>outside!</button>}>
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
        </Modal>
      </>;
  }
}`,...(z=(R=j.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var H,W,K;M.parameters={...M.parameters,docs:{...(H=M.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
        </Modal>
      </>;
  },
  args: {
    timeout: 500
  }
}`,...(K=(W=M.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};export{y as base,Te as default,j as external,f as input,C as nested,M as onExit,w as onScroll};
//# sourceMappingURL=modal.story-44fe6412.js.map
