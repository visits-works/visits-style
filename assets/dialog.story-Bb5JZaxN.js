import{r as i,j as e}from"./iframe-0g5upUOQ.js";import{u as E,a as _,b as R,c as L,d as A,P as V,F as K}from"./index-By58NTpo.js";import{c as w}from"./clsx-B-dksMZM.js";import{m as W}from"./merge-CR_vCDaS.js";import{s as G}from"./stopPropagation-CdkcreiB.js";import{B as a}from"./index--tsiBSLu.js";import{I as J}from"./index-BeO74-vE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C0ACPl1L.js";import"./index-DisBLnkc.js";import"./useIsomorphicLayoutEffect-DRNWegQV.js";function g({className:t,onClose:n,children:r,closeIcon:s,...o}){const l=i.useMemo(()=>w("relative flex flex-col space-y-2 text-center text-xl mb-2 sm:text-left",t),[t]);return e.jsxs("header",{className:l,...o,children:[r,n?e.jsx(a,{className:"absolute top-0 right-0 p-1.5",variant:"ghost",size:"none",onClick:n,children:s}):null]})}g.__docgenInfo={description:"",methods:[],displayName:"DialogHeader",props:{closeIcon:{required:!0,tsType:{name:"ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["HTMLAttributes"]};function d({open:t,children:n,timeout:r=150,padding:s="0.85rem",verticalAlign:o="center",closeOnOverlay:l,closeOnEsc:c,onExited:p,className:b,onOpenChange:S,size:F,...H}){const k=i.useRef(p),B=i.useRef(!1),P=E(),{refs:O,context:T}=_({open:t,onOpenChange:S,nodeId:P}),{getFloatingProps:N}=R([L(T,{enabled:c,escapeKey:c,outsidePress:!1})]),{isMounted:m,styles:I}=A(T,{duration:r,initial:{opacity:0,transform:"scale(0.8)"}});i.useEffect(()=>{B.current!==m&&(B.current=m,!m&&k.current?.())},[m]);const q=i.useCallback(()=>{l&&S?.(!1)},[S,l]);k.current=p;const z=i.useMemo(()=>w("grid bg-backdrop z-40 justify-items-center",{"place-items-start items-start":o==="start","place-items-end":o==="end","place-items-center":o==="center"||!o}),[o]),M=i.useMemo(()=>W("transition ease-in-out",b),[b]);return e.jsx(V,{disabled:!m,children:e.jsx(K,{className:z,"data-testid":"vs-dialog-overlay",onClick:q,style:{padding:s,opacity:I.opacity},lockScroll:!0,children:e.jsx(y,{ref:O.setFloating,className:M,role:"dialog",size:F,style:I,onClick:G,...N({...H}),children:n})})})}const y=i.forwardRef(({size:t,className:n,...r},s)=>{const o=i.useMemo(()=>w(t?"flex flex-col bg-background shadow-lg p-5 rounded":null,{"w-full max-w-dialog-sm":t==="small","w-full max-w-dialog-md":t==="medium","w-full max-w-dialog-lg":t==="large"},n),[t,n]);return e.jsx("div",{ref:s,className:o,...r})});y.displayName="DialogContent";function u({className:t,align:n,...r}){const s=i.useMemo(()=>w("flex flex-col-reverse space-y-2 mt-4 sm:space-y-0 sm:flex-row sm:space-x-2",{"sm:justify-end":!n||n==="right","sm:justify-start":n==="left","sm:justify-center":n==="center"},t),[t,n]);return e.jsx("footer",{className:s,...r})}d.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{open:{required:!1,tsType:{name:"boolean"},description:"trueの場合、モーダルを表示します。"},children:{required:!1,tsType:{name:"ReactNode"},description:"モーダルのbodyに入れる内容"},closeOnOverlay:{required:!1,tsType:{name:"boolean"},description:"オーバーレイのクリックでモーダルクローズ"},closeOnEsc:{required:!1,tsType:{name:"boolean"},description:"escボタンでクローズ"},timeout:{required:!1,tsType:{name:"union",raw:"number | { open: number; close: number; }",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ open: number; close: number; }",signature:{properties:[{key:"open",value:{name:"number",required:!0}},{key:"close",value:{name:"number",required:!0}}]}}]},description:`モーダルの表示・非表示のアニメーション速度
@default 150`,defaultValue:{value:"150",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`モーダルのデフォルトデザインを適用し、サイズを指定します。\\
未指定の場合は、スタイルを全部外した状態で表示されます`},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"モーダルのtransition exitが完了した時に発火されるcallback"},onExited:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"モーダルのtransition exitが完了した時に発火されるcallback"},padding:{required:!1,tsType:{name:"string"},description:`モーダルの背景からのpaddingを指定します。
@default '0.85rem'`,defaultValue:{value:"'0.85rem'",computed:!1}},verticalAlign:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:`モーダルの縦並びを設定します。
@default 'center'`,defaultValue:{value:"'center'",computed:!1}}},composes:["HTMLAttributes"]};y.__docgenInfo={description:"",methods:[],displayName:"DialogContent",props:{size:{required:!1,tsType:{name:"Props['size']",raw:"Props['size']"},description:""}},composes:["HTMLAttributes"]};u.__docgenInfo={description:"",methods:[],displayName:"DialogFooter",props:{align:{required:!1,tsType:{name:"union",raw:"'center' | 'left' | 'right'",elements:[{name:"literal",value:"'center'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"@default 'right'"}},composes:["HTMLAttributes"]};const le={title:"components/Dialog",component:d,tags:["autodocs"],args:{open:!1,timeout:200,closeOnOverlay:!0,closeOnEsc:!0},argTypes:{open:{control:!1},children:{control:!1},onOpenChange:{control:!1}}};function h(t){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",...t,children:e.jsxs("g",{fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[e.jsx("path",{d:"M26 26l-12.5-12.5L26 1"}),e.jsx("path",{d:"M1 26l12.5-12.5L1 1"})]})})}const x={render:({open:t,...n})=>{const[r,s]=i.useState(t),o=()=>s(l=>!l);return e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",onClick:o,children:"show modal"}),e.jsxs(d,{...n,size:"small",open:r,onOpenChange:o,children:[e.jsx(g,{onClose:o,closeIcon:e.jsx(h,{}),children:e.jsx("h3",{children:"Dialog Title"})}),e.jsx("p",{children:"Dialog body text goes here."}),e.jsxs(u,{children:[e.jsx(a,{variant:"outline",onClick:o,children:"Close"}),e.jsx(a,{children:"Save changes"})]})]})]})}},C={render:t=>{const[n,r]=i.useState(!1),s=()=>r(o=>!o);return e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",onClick:s,children:"show modal"}),e.jsxs(d,{...t,size:"small",open:n,onOpenChange:s,children:[e.jsx(g,{onClose:s,closeIcon:e.jsx(h,{}),children:e.jsx("h3",{children:"Dialog Title"})}),e.jsx("section",{children:Array.from({length:100}).map((o,l)=>e.jsx("p",{children:"Dialog body text goes here."},l))}),e.jsxs(u,{children:[e.jsx(a,{variant:"outline",onClick:s,children:"Close"}),e.jsx(a,{children:"Save changes"})]})]})]})}},f={render:t=>{const[n,r]=i.useState(!1),[s,o]=i.useState(!1),l=()=>r(p=>!p),c=()=>o(p=>!p);return e.jsxs("div",{children:[e.jsx(a,{onClick:l,children:"show modal"}),e.jsxs(d,{...t,size:"medium",open:n,onOpenChange:l,children:[e.jsx(g,{onClose:l,closeIcon:e.jsx(h,{}),children:e.jsx("h3",{children:"Parent Title"})}),e.jsx("p",{children:"Dialog body text goes here."}),e.jsxs(u,{children:[e.jsx(a,{variant:"outline",onClick:l,children:"Close"}),e.jsx(a,{onClick:c,children:"Show Child"})]})]}),e.jsxs(d,{...t,size:"small",open:s,onOpenChange:c,children:[e.jsx(g,{onClose:c,closeIcon:e.jsx(h,{}),children:e.jsx("h3",{children:"Child Title"})}),e.jsxs("section",{children:[e.jsx("p",{children:"Nested Dialog body text goes here."}),e.jsx("div",{style:{height:"95vh",color:"blue",width:"50px"}})]}),e.jsx(u,{align:"center",children:e.jsx(a,{variant:"outline",onClick:c,children:"Close"})})]})]})}},D={render:({open:t,...n})=>{const[r,s]=i.useState(t),o=()=>s(l=>!l);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:o,children:"show modal"}),e.jsxs(d,{...n,size:"large",open:r,onOpenChange:o,children:[e.jsx(g,{onClose:o,closeIcon:e.jsx(h,{}),children:e.jsx("h3",{children:"Dialog Title"})}),e.jsxs("section",{children:[e.jsx("p",{children:"Dialog body text goes here."}),e.jsx(J,{})]}),e.jsxs(u,{children:[e.jsx(a,{variant:"outline",onClick:o,children:"Close"}),e.jsx(a,{children:"Save changes"})]})]})]})}},j={render:t=>{const[n,r]=i.useState(!1),s=()=>r(l=>!l),o=l=>{l.stopPropagation(),alert("outside")};return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:s,children:"show modal"}),e.jsxs(d,{...t,open:n,onOpenChange:s,children:[e.jsxs(y,{size:"medium",children:[e.jsx(g,{onClose:s,closeIcon:e.jsx(h,{}),children:e.jsx("h3",{children:"Dialog Title"})}),e.jsx("p",{children:"Dialog body text goes here."}),e.jsxs(u,{children:[e.jsx(a,{variant:"outline",onClick:s,children:"Close"}),e.jsx(a,{children:"Save changes"})]})]}),e.jsx("div",{className:"text-center mt-2",children:e.jsx(a,{variant:"danger",onClick:o,children:"outside!"})})]})]})}},v={render:t=>{const[n,r]=i.useState(!1),[s,o]=i.useState("モーダルを開く"),l=()=>{o(n?"閉じる中...":"表示中..."),r(c=>!c)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"pb-15",children:e.jsx(a,{variant:"outline",onClick:l,children:s})}),e.jsxs(d,{...t,open:n,size:"small",onOpenChange:l,onExited:()=>o("モーダルを開く"),children:[e.jsx(g,{onClose:l,closeIcon:e.jsx(h,{}),children:e.jsx("h3",{children:"Dialog Title"})}),e.jsx("p",{children:"Dialog body text goes here."}),e.jsxs(u,{children:[e.jsx(a,{variant:"outline",onClick:l,children:"Close"}),e.jsx(a,{children:"Save changes"})]})]})]})},args:{timeout:500}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};export{x as base,le as default,j as external,D as input,f as nested,v as onExit,C as onScroll};
