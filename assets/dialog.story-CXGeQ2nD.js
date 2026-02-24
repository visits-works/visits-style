import{j as e,r as i}from"./iframe-BB4tf_El.js";import{u as E,a as L,b as M,c as _,d as R,P as A,F as V}from"./index-CFrW7r58.js";import{c as K}from"./merge-DApEyPFe.js";import{s as W}from"./stopPropagation-CdkcreiB.js";import{B as y}from"./Base-CHxFwfQ2.js";import{B as l}from"./index-Dn7cIdJ8.js";import{I as G}from"./index-DDCwA6JE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CrPQbQVo.js";import"./index-CDqGLqrx.js";import"./useIsomorphicLayoutEffect-CUC6N05y.js";function g({onClose:o,children:a,closeIcon:r,...s}){return e.jsxs(y,{as:"header",classList:["relative flex flex-col space-y-2 text-center text-xl mb-2 sm:text-left"],...s,children:[a,o?e.jsx(l,{className:"absolute top-0 right-0 p-1.5",variant:"ghost",size:"none",onClick:o,children:r}):null]})}g.__docgenInfo={description:"",methods:[],displayName:"DialogHeader",props:{closeIcon:{required:!0,tsType:{name:"ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["HTMLAttributes"]};const J={open:150,close:75};function d({open:o,children:a,timeout:r=J,padding:s="0.85rem",verticalAlign:t="center",closeOnOverlay:n,closeOnEsc:c,onExited:p,className:I,onOpenChange:w,size:F,...H}){const b=i.useRef(p),k=i.useRef(!1),P=E(),{refs:O,context:B}=L({open:o,onOpenChange:w,nodeId:P}),{getFloatingProps:q}=M([_(B,{enabled:c,escapeKey:c,outsidePress:!1})]),{isMounted:m,styles:T}=R(B,{duration:r,initial:{opacity:0,transform:"scale(0.8)"}});i.useEffect(()=>{k.current!==m&&(k.current=m,!m&&b.current?.())},[m]);const z=i.useCallback(()=>{n&&w?.(!1)},[w,n]);b.current=p;const N=i.useMemo(()=>K("grid bg-backdrop z-40 justify-items-center transition ease-in-out",{"place-items-start items-start":t==="start","place-items-end":t==="end","place-items-center":t==="center"||!t}),[t]);return e.jsx(A,{disabled:!m,children:e.jsx(V,{className:N,"data-testid":"vs-dialog-overlay",onClick:z,style:{padding:s,opacity:T.opacity},lockScroll:!0,children:e.jsx(S,{ref:O.setFloating,className:I,role:"dialog",size:F,onClick:W,...q({...H,style:T}),children:a})})})}function S({size:o,...a}){return e.jsx(y,{classList:[o?"flex flex-col bg-background shadow-lg p-5 rounded":null,{"w-full max-w-dialog-sm":o==="small","w-full max-w-dialog-md":o==="medium","w-full max-w-dialog-lg":o==="large"}],...a})}function u({align:o,...a}){return e.jsx(y,{as:"footer",classList:["flex flex-col-reverse space-y-2 mt-4 sm:space-y-0 sm:flex-row sm:space-x-2",{"sm:justify-end":!o||o==="right","sm:justify-start":o==="left","sm:justify-center":o==="center"}],...a})}d.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{open:{required:!1,tsType:{name:"boolean"},description:"trueの場合、モーダルを表示します。"},children:{required:!1,tsType:{name:"ReactNode"},description:"モーダルのbodyに入れる内容"},closeOnOverlay:{required:!1,tsType:{name:"boolean"},description:"オーバーレイのクリックでモーダルクローズ"},closeOnEsc:{required:!1,tsType:{name:"boolean"},description:"escボタンでクローズ"},timeout:{required:!1,tsType:{name:"union",raw:"number | { open: number; close: number; }",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ open: number; close: number; }",signature:{properties:[{key:"open",value:{name:"number",required:!0}},{key:"close",value:{name:"number",required:!0}}]}}]},description:`モーダルの表示・非表示のアニメーション速度
@default 150`,defaultValue:{value:"{ open: 150, close: 75 }",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`モーダルのデフォルトデザインを適用し、サイズを指定します。\\
未指定の場合は、スタイルを全部外した状態で表示されます`},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"モーダルのtransition exitが完了した時に発火されるcallback"},onExited:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"モーダルのtransition exitが完了した時に発火されるcallback"},padding:{required:!1,tsType:{name:"string"},description:`モーダルの背景からのpaddingを指定します。
@default '0.85rem'`,defaultValue:{value:"'0.85rem'",computed:!1}},verticalAlign:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:`モーダルの縦並びを設定します。
@default 'center'`,defaultValue:{value:"'center'",computed:!1}}},composes:["HTMLAttributes"]};S.__docgenInfo={description:"",methods:[],displayName:"DialogContent",props:{ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLElement"}],raw:"Ref<HTMLElement>"},description:""},size:{required:!1,tsType:{name:"Props['size']",raw:"Props['size']"},description:""}},composes:["HTMLAttributes"]};u.__docgenInfo={description:"",methods:[],displayName:"DialogFooter",props:{align:{required:!1,tsType:{name:"union",raw:"'center' | 'left' | 'right'",elements:[{name:"literal",value:"'center'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"@default 'right'"}},composes:["HTMLAttributes"]};const le={title:"components/Dialog",component:d,tags:["autodocs"],args:{open:!1,timeout:200,closeOnOverlay:!0,closeOnEsc:!0},argTypes:{open:{control:!1},children:{control:!1},onOpenChange:{control:!1}}};function h(o){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",...o,children:e.jsxs("g",{fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[e.jsx("path",{d:"M26 26l-12.5-12.5L26 1"}),e.jsx("path",{d:"M1 26l12.5-12.5L1 1"})]})})}const x={render:({open:o,...a})=>{const[r,s]=i.useState(o),t=()=>s(n=>!n);return e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"outline",onClick:t,children:"show modal"}),e.jsxs(d,{...a,size:"small",open:r,onOpenChange:t,children:[e.jsx(g,{onClose:t,closeIcon:e.jsx(h,{}),children:e.jsx("h3",{children:"Dialog Title"})}),e.jsx("p",{children:"Dialog body text goes here."}),e.jsxs(u,{children:[e.jsx(l,{variant:"outline",onClick:t,children:"Close"}),e.jsx(l,{children:"Save changes"})]})]})]})}},C={render:o=>{const[a,r]=i.useState(!1),s=()=>r(t=>!t);return e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"outline",onClick:s,children:"show modal"}),e.jsxs(d,{...o,size:"small",open:a,onOpenChange:s,children:[e.jsx(g,{onClose:s,closeIcon:e.jsx(h,{}),children:e.jsx("h3",{children:"Dialog Title"})}),e.jsx("section",{children:Array.from({length:100}).map((t,n)=>e.jsx("p",{children:"Dialog body text goes here."},n))}),e.jsxs(u,{children:[e.jsx(l,{variant:"outline",onClick:s,children:"Close"}),e.jsx(l,{children:"Save changes"})]})]})]})}},f={render:o=>{const[a,r]=i.useState(!1),[s,t]=i.useState(!1),n=()=>r(p=>!p),c=()=>t(p=>!p);return e.jsxs("div",{children:[e.jsx(l,{onClick:n,children:"show modal"}),e.jsxs(d,{...o,size:"medium",open:a,onOpenChange:n,children:[e.jsx(g,{onClose:n,closeIcon:e.jsx(h,{}),children:e.jsx("h3",{children:"Parent Title"})}),e.jsx("p",{children:"Dialog body text goes here."}),e.jsxs(u,{children:[e.jsx(l,{variant:"outline",onClick:n,children:"Close"}),e.jsx(l,{onClick:c,children:"Show Child"})]})]}),e.jsxs(d,{...o,size:"small",open:s,onOpenChange:c,children:[e.jsx(g,{onClose:c,closeIcon:e.jsx(h,{}),children:e.jsx("h3",{children:"Child Title"})}),e.jsxs("section",{children:[e.jsx("p",{children:"Nested Dialog body text goes here."}),e.jsx("div",{style:{height:"95vh",color:"blue",width:"50px"}})]}),e.jsx(u,{align:"center",children:e.jsx(l,{variant:"outline",onClick:c,children:"Close"})})]})]})}},j={render:({open:o,...a})=>{const[r,s]=i.useState(o),t=()=>s(n=>!n);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:t,children:"show modal"}),e.jsxs(d,{...a,size:"large",open:r,onOpenChange:t,children:[e.jsx(g,{onClose:t,closeIcon:e.jsx(h,{}),children:e.jsx("h3",{children:"Dialog Title"})}),e.jsxs("section",{children:[e.jsx("p",{children:"Dialog body text goes here."}),e.jsx(G,{})]}),e.jsxs(u,{children:[e.jsx(l,{variant:"outline",onClick:t,children:"Close"}),e.jsx(l,{children:"Save changes"})]})]})]})}},D={render:o=>{const[a,r]=i.useState(!1),s=()=>r(n=>!n),t=n=>{n.stopPropagation(),alert("outside")};return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:s,children:"show modal"}),e.jsxs(d,{...o,open:a,onOpenChange:s,children:[e.jsxs(S,{size:"medium",children:[e.jsx(g,{onClose:s,closeIcon:e.jsx(h,{}),children:e.jsx("h3",{children:"Dialog Title"})}),e.jsx("p",{children:"Dialog body text goes here."}),e.jsxs(u,{children:[e.jsx(l,{variant:"outline",onClick:s,children:"Close"}),e.jsx(l,{children:"Save changes"})]})]}),e.jsx("div",{className:"text-center mt-2",children:e.jsx(l,{variant:"danger",onClick:t,children:"outside!"})})]})]})}},v={render:o=>{const[a,r]=i.useState(!1),[s,t]=i.useState("モーダルを開く"),n=()=>{t(a?"閉じる中...":"表示中..."),r(c=>!c)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"pb-15",children:e.jsx(l,{variant:"outline",onClick:n,children:s})}),e.jsxs(d,{...o,open:a,size:"small",onOpenChange:n,onExited:()=>t("モーダルを開く"),children:[e.jsx(g,{onClose:n,closeIcon:e.jsx(h,{}),children:e.jsx("h3",{children:"Dialog Title"})}),e.jsx("p",{children:"Dialog body text goes here."}),e.jsxs(u,{children:[e.jsx(l,{variant:"outline",onClick:n,children:"Close"}),e.jsx(l,{children:"Save changes"})]})]})]})},args:{timeout:500}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: ({
    open,
    ...rest
  }) => {
    const [showDialog, setShow] = useState(open);
    const toggle = () => setShow(prev => !prev);
    return <>
        <Button variant="outline" onClick={toggle}>show modal</Button>
        <Dialog {...rest} size="small" open={showDialog} onOpenChange={toggle}>
          <DialogHeader onClose={toggle} closeIcon={<IconClose />}><h3>Dialog Title</h3></DialogHeader>
          <p>Dialog body text goes here.</p>
          <DialogFooter>
            <Button variant="outline" onClick={toggle}>Close</Button>
            <Button>Save changes</Button>
          </DialogFooter>
        </Dialog>
      </>;
  }
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [showDialog, setShow] = useState(false);
    const toggle = () => setShow(prev => !prev);
    return <>
        <Button variant="outline" onClick={toggle}>show modal</Button>
        <Dialog {...args} size="small" open={showDialog} onOpenChange={toggle}>
          <DialogHeader onClose={toggle} closeIcon={<IconClose />}><h3>Dialog Title</h3></DialogHeader>
          <section>
            {Array.from({
            length: 100
          }).map((_, i) => <p key={i}>Dialog body text goes here.</p>)}
          </section>
          <DialogFooter>
            <Button variant="outline" onClick={toggle}>Close</Button>
            <Button>Save changes</Button>
          </DialogFooter>
        </Dialog>
      </>;
  }
}`,...C.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [parent, showParent] = useState(false);
    const [child, showChild] = useState(false);
    const toggleParent = () => showParent(prev => !prev);
    const toggleChild = () => showChild(prev => !prev);
    return <div>
        <Button onClick={toggleParent}>show modal</Button>
        <Dialog {...args} size="medium" open={parent} onOpenChange={toggleParent}>
          <DialogHeader onClose={toggleParent} closeIcon={<IconClose />}><h3>Parent Title</h3></DialogHeader>
          <p>Dialog body text goes here.</p>
          <DialogFooter>
            <Button variant="outline" onClick={toggleParent}>Close</Button>
            <Button onClick={toggleChild}>Show Child</Button>
          </DialogFooter>
        </Dialog>
        <Dialog {...args} size="small" open={child} onOpenChange={toggleChild}>
          <DialogHeader onClose={toggleChild} closeIcon={<IconClose />}><h3>Child Title</h3></DialogHeader>
          <section>
            <p>Nested Dialog body text goes here.</p>
            <div style={{
            height: '95vh',
            color: 'blue',
            width: '50px'
          }} />
          </section>
          <DialogFooter align="center">
            <Button variant="outline" onClick={toggleChild}>Close</Button>
          </DialogFooter>
        </Dialog>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: ({
    open,
    ...rest
  }) => {
    const [showDialog, setShow] = useState(open);
    const toggle = () => setShow(prev => !prev);
    return <>
        <Button onClick={toggle}>show modal</Button>
        <Dialog {...rest} size="large" open={showDialog} onOpenChange={toggle}>
          <DialogHeader onClose={toggle} closeIcon={<IconClose />}><h3>Dialog Title</h3></DialogHeader>
          <section>
            <p>Dialog body text goes here.</p>
            <TextInput />
          </section>
          <DialogFooter>
            <Button variant="outline" onClick={toggle}>Close</Button>
            <Button>Save changes</Button>
          </DialogFooter>
        </Dialog>
      </>;
  }
}`,...j.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [showDialog, setShow] = useState(false);
    const toggle = () => setShow(prev => !prev);
    const handleExternal = (e: any) => {
      e.stopPropagation();
      alert('outside');
    };
    return <>
        <Button onClick={toggle}>show modal</Button>
        <Dialog {...args} open={showDialog} onOpenChange={toggle}>
          <DialogContent size="medium">
            <DialogHeader onClose={toggle} closeIcon={<IconClose />}><h3>Dialog Title</h3></DialogHeader>
            <p>Dialog body text goes here.</p>
            <DialogFooter>
              <Button variant="outline" onClick={toggle}>Close</Button>
              <Button>Save changes</Button>
            </DialogFooter>
          </DialogContent>
          <div className="text-center mt-2">
            <Button variant="danger" onClick={handleExternal}>outside!</Button>
          </div>
        </Dialog>
      </>;
  }
}`,...D.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [showDialog, setShow] = useState(false);
    const [text, setText] = useState('モーダルを開く');
    const toggle = () => {
      setText(showDialog ? '閉じる中...' : '表示中...');
      setShow(prev => !prev);
    };
    return <>
        <div className="pb-15">
          <Button variant="outline" onClick={toggle}>{text}</Button>
        </div>
        <Dialog {...args} open={showDialog} size="small" onOpenChange={toggle} onExited={() => setText('モーダルを開く')}>
          <DialogHeader onClose={toggle} closeIcon={<IconClose />}><h3>Dialog Title</h3></DialogHeader>
          <p>Dialog body text goes here.</p>
          <DialogFooter>
            <Button variant="outline" onClick={toggle}>Close</Button>
            <Button>Save changes</Button>
          </DialogFooter>
        </Dialog>
      </>;
  },
  args: {
    timeout: 500
  }
}`,...v.parameters?.docs?.source}}};export{x as base,le as default,D as external,j as input,f as nested,v as onExit,C as onScroll};
