import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{c as r,d as i,f as a,i as o,n as s,r as c,s as l,t as u,u as d}from"./Portal-C_hMKwqc.js";import{n as f,t as p}from"./merge-B1pqonwN.js";import{n as m}from"./stopPropagation-DCwbs8d6.js";import{n as h,t as g}from"./Base-CVEPMVTs.js";import{n as _,t as v}from"./Button-BB2x9rOV.js";import{n as y,t as b}from"./Input-DvpuKwA-.js";function x({onClose:e,children:t,closeIcon:n,...r}){return(0,S.jsxs)(g,{as:`header`,classList:[`relative flex flex-col space-y-2 text-center text-xl mb-2 sm:text-left`],...r,children:[t,e?(0,S.jsx)(v,{className:`absolute top-0 right-0 p-1.5`,variant:`ghost`,size:`none`,onClick:e,children:n}):null]})}var S;function C(){return(C=e((()=>{_(),h(),S=n(),x.__docgenInfo={description:``,methods:[],displayName:`DialogHeader`,props:{closeIcon:{required:!0,tsType:{name:`ReactNode`},description:``},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}},composes:[`HTMLAttributes`]}})))()}function w({open:e,children:t,timeout:n=k,padding:o=`0.85rem`,verticalAlign:s=`center`,closeOnOverlay:f,closeOnEsc:h,onExited:g,className:_,onOpenChange:v,size:y,...b}){let x=(0,D.useRef)(g),S=(0,D.useRef)(!1),C=d(),{refs:w,context:E}=r({open:e,onOpenChange:v,nodeId:C}),{getFloatingProps:A}=i([l(E,{enabled:h,escapeKey:h,outsidePress:!1})]),{isMounted:j,styles:M}=a(E,{duration:n,initial:{opacity:0,transform:`scale(0.8)`}});(0,D.useEffect)(()=>{S.current!==j&&(S.current=j,!j&&x.current?.())},[j]);let N=(0,D.useCallback)(()=>{f&&v?.(!1)},[v,f]);x.current=g;let P=(0,D.useMemo)(()=>p(`grid bg-backdrop z-40 justify-items-center transition ease-in-out`,{"place-items-start items-start":s===`start`,"place-items-end":s===`end`,"place-items-center":s===`center`||!s}),[s]);return(0,O.jsx)(u,{disabled:!j,children:(0,O.jsx)(c,{className:P,"data-testid":`vs-dialog-overlay`,onClick:N,style:{padding:o,opacity:M.opacity},lockScroll:!0,children:(0,O.jsx)(T,{ref:w.setFloating,className:_,role:`dialog`,size:y,onClick:m,...A({...b,style:M}),children:t})})})}function T({size:e,...t}){return(0,O.jsx)(g,{classList:[e?`flex flex-col bg-background shadow-lg p-5 rounded`:null,{"w-full max-w-dialog-sm":e===`small`,"w-full max-w-dialog-md":e===`medium`,"w-full max-w-dialog-lg":e===`large`}],...t})}function E({align:e,...t}){return(0,O.jsx)(g,{as:`footer`,classList:[`flex flex-col-reverse space-y-2 mt-4 sm:space-y-0 sm:flex-row sm:space-x-2`,{"sm:justify-end":!e||e===`right`,"sm:justify-start":e===`left`,"sm:justify-center":e===`center`}],...t})}var D,O,k;function A(){return(A=e((()=>{D=t(),o(),f(),s(),h(),O=n(),C(),k={open:150,close:75},w.__docgenInfo={description:``,methods:[],displayName:`Dialog`,props:{open:{required:!1,tsType:{name:`boolean`},description:`trueの場合、モーダルを表示します。`},children:{required:!1,tsType:{name:`ReactNode`},description:`モーダルのbodyに入れる内容`},closeOnOverlay:{required:!1,tsType:{name:`boolean`},description:`オーバーレイのクリックでモーダルクローズ`},closeOnEsc:{required:!1,tsType:{name:`boolean`},description:`escボタンでクローズ`},timeout:{required:!1,tsType:{name:`union`,raw:`number | { open: number; close: number; }`,elements:[{name:`number`},{name:`signature`,type:`object`,raw:`{ open: number; close: number; }`,signature:{properties:[{key:`open`,value:{name:`number`,required:!0}},{key:`close`,value:{name:`number`,required:!0}}]}}]},description:`モーダルの表示・非表示のアニメーション速度
@default 150`,defaultValue:{value:`{ open: 150, close: 75 }`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'small' | 'medium' | 'large'`,elements:[{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'large'`}]},description:`モーダルのデフォルトデザインを適用し、サイズを指定します。\\
未指定の場合は、スタイルを全部外した状態で表示されます`},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:`モーダルのtransition exitが完了した時に発火されるcallback`},onExited:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`モーダルのtransition exitが完了した時に発火されるcallback`},padding:{required:!1,tsType:{name:`string`},description:`モーダルの背景からのpaddingを指定します。
@default '0.85rem'`,defaultValue:{value:`'0.85rem'`,computed:!1}},verticalAlign:{required:!1,tsType:{name:`union`,raw:`'start' | 'center' | 'end'`,elements:[{name:`literal`,value:`'start'`},{name:`literal`,value:`'center'`},{name:`literal`,value:`'end'`}]},description:`モーダルの縦並びを設定します。
@default 'center'`,defaultValue:{value:`'center'`,computed:!1}}},composes:[`HTMLAttributes`]},T.__docgenInfo={description:``,methods:[],displayName:`DialogContent`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLElement`}],raw:`Ref<HTMLElement>`},description:``},size:{required:!1,tsType:{name:`Props['size']`,raw:`Props['size']`},description:``}},composes:[`HTMLAttributes`]},E.__docgenInfo={description:``,methods:[],displayName:`DialogFooter`,props:{align:{required:!1,tsType:{name:`union`,raw:`'center' | 'left' | 'right'`,elements:[{name:`literal`,value:`'center'`},{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:`@default 'right'`}},composes:[`HTMLAttributes`]}})))()}function j(e){return(0,N.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 30 30`,...e,children:(0,N.jsxs)(`g`,{fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,children:[(0,N.jsx)(`path`,{d:`M26 26l-12.5-12.5L26 1`}),(0,N.jsx)(`path`,{d:`M1 26l12.5-12.5L1 1`})]})})}var M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{M=t(),A(),_(),y(),N=n(),P={title:`components/Dialog`,component:w,tags:[`autodocs`],args:{open:!1,timeout:200,closeOnOverlay:!0,closeOnEsc:!0},argTypes:{open:{control:!1},children:{control:!1},onOpenChange:{control:!1}}},F={render:({open:e,...t})=>{let[n,r]=(0,M.useState)(e),i=()=>r(e=>!e);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(v,{variant:`outline`,onClick:i,children:`show modal`}),(0,N.jsxs)(w,{...t,size:`small`,open:n,onOpenChange:i,children:[(0,N.jsx)(x,{onClose:i,closeIcon:(0,N.jsx)(j,{}),children:(0,N.jsx)(`h3`,{children:`Dialog Title`})}),(0,N.jsx)(`p`,{children:`Dialog body text goes here.`}),(0,N.jsxs)(E,{children:[(0,N.jsx)(v,{variant:`outline`,onClick:i,children:`Close`}),(0,N.jsx)(v,{children:`Save changes`})]})]})]})}},I={render:e=>{let[t,n]=(0,M.useState)(!1),r=()=>n(e=>!e);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(v,{variant:`outline`,onClick:r,children:`show modal`}),(0,N.jsxs)(w,{...e,size:`small`,open:t,onOpenChange:r,children:[(0,N.jsx)(x,{onClose:r,closeIcon:(0,N.jsx)(j,{}),children:(0,N.jsx)(`h3`,{children:`Dialog Title`})}),(0,N.jsx)(`section`,{children:Array.from({length:100}).map((e,t)=>(0,N.jsx)(`p`,{children:`Dialog body text goes here.`},t))}),(0,N.jsxs)(E,{children:[(0,N.jsx)(v,{variant:`outline`,onClick:r,children:`Close`}),(0,N.jsx)(v,{children:`Save changes`})]})]})]})}},L={render:e=>{let[t,n]=(0,M.useState)(!1),[r,i]=(0,M.useState)(!1),a=()=>n(e=>!e),o=()=>i(e=>!e);return(0,N.jsxs)(`div`,{children:[(0,N.jsx)(v,{onClick:a,children:`show modal`}),(0,N.jsxs)(w,{...e,size:`medium`,open:t,onOpenChange:a,children:[(0,N.jsx)(x,{onClose:a,closeIcon:(0,N.jsx)(j,{}),children:(0,N.jsx)(`h3`,{children:`Parent Title`})}),(0,N.jsx)(`p`,{children:`Dialog body text goes here.`}),(0,N.jsxs)(E,{children:[(0,N.jsx)(v,{variant:`outline`,onClick:a,children:`Close`}),(0,N.jsx)(v,{onClick:o,children:`Show Child`})]})]}),(0,N.jsxs)(w,{...e,size:`small`,open:r,onOpenChange:o,children:[(0,N.jsx)(x,{onClose:o,closeIcon:(0,N.jsx)(j,{}),children:(0,N.jsx)(`h3`,{children:`Child Title`})}),(0,N.jsxs)(`section`,{children:[(0,N.jsx)(`p`,{children:`Nested Dialog body text goes here.`}),(0,N.jsx)(`div`,{style:{height:`95vh`,color:`blue`,width:`50px`}})]}),(0,N.jsx)(E,{align:`center`,children:(0,N.jsx)(v,{variant:`outline`,onClick:o,children:`Close`})})]})]})}},R={render:({open:e,...t})=>{let[n,r]=(0,M.useState)(e),i=()=>r(e=>!e);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(v,{onClick:i,children:`show modal`}),(0,N.jsxs)(w,{...t,size:`large`,open:n,onOpenChange:i,children:[(0,N.jsx)(x,{onClose:i,closeIcon:(0,N.jsx)(j,{}),children:(0,N.jsx)(`h3`,{children:`Dialog Title`})}),(0,N.jsxs)(`section`,{children:[(0,N.jsx)(`p`,{children:`Dialog body text goes here.`}),(0,N.jsx)(b,{})]}),(0,N.jsxs)(E,{children:[(0,N.jsx)(v,{variant:`outline`,onClick:i,children:`Close`}),(0,N.jsx)(v,{children:`Save changes`})]})]})]})}},z={render:e=>{let[t,n]=(0,M.useState)(!1),r=()=>n(e=>!e),i=e=>{e.stopPropagation(),alert(`outside`)};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(v,{onClick:r,children:`show modal`}),(0,N.jsxs)(w,{...e,open:t,onOpenChange:r,children:[(0,N.jsxs)(T,{size:`medium`,children:[(0,N.jsx)(x,{onClose:r,closeIcon:(0,N.jsx)(j,{}),children:(0,N.jsx)(`h3`,{children:`Dialog Title`})}),(0,N.jsx)(`p`,{children:`Dialog body text goes here.`}),(0,N.jsxs)(E,{children:[(0,N.jsx)(v,{variant:`outline`,onClick:r,children:`Close`}),(0,N.jsx)(v,{children:`Save changes`})]})]}),(0,N.jsx)(`div`,{className:`text-center mt-2`,children:(0,N.jsx)(v,{variant:`danger`,onClick:i,children:`outside!`})})]})]})}},B={render:e=>{let[t,n]=(0,M.useState)(!1),[r,i]=(0,M.useState)(`モーダルを開く`),a=()=>{i(t?`閉じる中...`:`表示中...`),n(e=>!e)};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`div`,{className:`pb-15`,children:(0,N.jsx)(v,{variant:`outline`,onClick:a,children:r})}),(0,N.jsxs)(w,{...e,open:t,size:`small`,onOpenChange:a,onExited:()=>i(`モーダルを開く`),children:[(0,N.jsx)(x,{onClose:a,closeIcon:(0,N.jsx)(j,{}),children:(0,N.jsx)(`h3`,{children:`Dialog Title`})}),(0,N.jsx)(`p`,{children:`Dialog body text goes here.`}),(0,N.jsxs)(E,{children:[(0,N.jsx)(v,{variant:`outline`,onClick:a,children:`Close`}),(0,N.jsx)(v,{children:`Save changes`})]})]})]})},args:{timeout:500}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}}})))()}V();export{F as base,P as default,z as external,R as input,L as nested,B as onExit,I as onScroll};