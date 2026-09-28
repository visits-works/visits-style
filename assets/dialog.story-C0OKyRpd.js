import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{c as r,d as i,f as a,i as o,n as s,r as c,s as l,t as u,u as d}from"./Portal-C_hMKwqc.js";import{n as f,t as p}from"./merge-B1pqonwN.js";import{n as m,t as h}from"./Base-CVEPMVTs.js";import{n as g,t as _}from"./Button-CBFI_ykW.js";import{n as v,t as y}from"./Input-DvpuKwA-.js";import{n as b,t as x}from"./FormField-BZUbfdPB.js";function S({onClose:e,children:t,closeIcon:n,...r}){return(0,C.jsxs)(h,{as:`header`,classList:[`relative flex flex-col space-y-2 text-center text-xl mb-2 sm:text-left`],...r,children:[t,e?(0,C.jsx)(_,{className:`absolute top-0 right-0 p-1.5`,variant:`ghost`,size:`none`,onClick:e,children:n}):null]})}var C;function w(){return(w=e((()=>{g(),m(),C=n(),S.__docgenInfo={description:``,methods:[],displayName:`DialogHeader`,props:{closeIcon:{required:!0,tsType:{name:`ReactNode`},description:``},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}},composes:[`HTMLAttributes`]}})))()}function T({open:e,children:t,timeout:n=A,padding:o=`0.85rem`,verticalAlign:s=`center`,closeOnOverlay:f,closeOnEsc:m,onExited:h,className:g,onOpenChange:_,size:v,...y}){let b=(0,O.useRef)(h),x=(0,O.useRef)(!1),S=d(),{refs:C,context:w}=r({open:e,onOpenChange:_,nodeId:S}),{getFloatingProps:T}=i([l(w,{enabled:m,escapeKey:m,outsidePress:!1})]),{isMounted:D,styles:j}=a(w,{duration:n,initial:{opacity:0,transform:`scale(0.8)`}});(0,O.useEffect)(()=>{x.current!==D&&(x.current=D,!D&&b.current?.())},[D]);let M=(0,O.useCallback)(()=>{f&&_?.(!1)},[_,f]);b.current=h;let N=(0,O.useMemo)(()=>p(`grid bg-backdrop z-40 justify-items-center transition ease-in-out`,{"place-items-start items-start":s===`start`,"place-items-end":s===`end`,"place-items-center":s===`center`||!s}),[s]);return(0,k.jsx)(u,{disabled:!D,children:(0,k.jsx)(c,{className:N,"data-testid":`vs-dialog-overlay`,onClick:M,style:{padding:o,opacity:j.opacity},lockScroll:!0,children:(0,k.jsx)(E,{ref:C.setFloating,className:g,role:`dialog`,size:v,...T({...y,style:j,onClick:e=>e?.stopPropagation()}),children:t})})})}function E({size:e,...t}){return(0,k.jsx)(h,{classList:[e?`flex flex-col bg-background shadow-lg p-5 rounded`:null,{"w-full max-w-dialog-sm":e===`small`,"w-full max-w-dialog-md":e===`medium`,"w-full max-w-dialog-lg":e===`large`}],...t})}function D({align:e,...t}){return(0,k.jsx)(h,{as:`footer`,classList:[`flex flex-col-reverse space-y-2 mt-4 sm:space-y-0 sm:flex-row sm:space-x-2`,{"sm:justify-end":!e||e===`right`,"sm:justify-start":e===`left`,"sm:justify-center":e===`center`}],...t})}var O,k,A;function j(){return(j=e((()=>{O=t(),o(),f(),s(),m(),k=n(),w(),A={open:150,close:75},T.__docgenInfo={description:``,methods:[],displayName:`Dialog`,props:{open:{required:!1,tsType:{name:`boolean`},description:`trueの場合、モーダルを表示します。`},children:{required:!1,tsType:{name:`ReactNode`},description:`モーダルのbodyに入れる内容`},closeOnOverlay:{required:!1,tsType:{name:`boolean`},description:`オーバーレイのクリックでモーダルクローズ`},closeOnEsc:{required:!1,tsType:{name:`boolean`},description:`escボタンでクローズ`},timeout:{required:!1,tsType:{name:`union`,raw:`number | { open: number; close: number; }`,elements:[{name:`number`},{name:`signature`,type:`object`,raw:`{ open: number; close: number; }`,signature:{properties:[{key:`open`,value:{name:`number`,required:!0}},{key:`close`,value:{name:`number`,required:!0}}]}}]},description:`モーダルの表示・非表示のアニメーション速度
@default 150`,defaultValue:{value:`{ open: 150, close: 75 }`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'small' | 'medium' | 'large'`,elements:[{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'large'`}]},description:`モーダルのデフォルトデザインを適用し、サイズを指定します。\\
未指定の場合は、スタイルを全部外した状態で表示されます`},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:`openの値を実際に変更するコールバック`},onExited:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`モーダルのtransition exitが完了した時に発火されるコールバック`},padding:{required:!1,tsType:{name:`string`},description:`モーダルの背景からのpaddingを指定します。
@default '0.85rem'`,defaultValue:{value:`'0.85rem'`,computed:!1}},verticalAlign:{required:!1,tsType:{name:`union`,raw:`'start' | 'center' | 'end'`,elements:[{name:`literal`,value:`'start'`},{name:`literal`,value:`'center'`},{name:`literal`,value:`'end'`}]},description:`モーダルの縦並びを設定します。
@default 'center'`,defaultValue:{value:`'center'`,computed:!1}}},composes:[`HTMLAttributes`]},E.__docgenInfo={description:``,methods:[],displayName:`DialogContent`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLElement`}],raw:`Ref<HTMLElement>`},description:``},size:{required:!1,tsType:{name:`Props['size']`,raw:`Props['size']`},description:``}},composes:[`HTMLAttributes`]},D.__docgenInfo={description:``,methods:[],displayName:`DialogFooter`,props:{align:{required:!1,tsType:{name:`union`,raw:`'center' | 'left' | 'right'`,elements:[{name:`literal`,value:`'center'`},{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:`@default 'right'`}},composes:[`HTMLAttributes`]}})))()}function M(e){return(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 30 30`,...e,children:(0,P.jsxs)(`g`,{fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,children:[(0,P.jsx)(`path`,{d:`M26 26l-12.5-12.5L26 1`}),(0,P.jsx)(`path`,{d:`M1 26l12.5-12.5L1 1`})]})})}var N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{N=t(),j(),g(),v(),b(),P=n(),F={title:`components/Dialog`,component:T,tags:[`autodocs`],args:{open:!1,timeout:200,closeOnOverlay:!0,closeOnEsc:!0},argTypes:{open:{control:!1},children:{control:!1},onOpenChange:{control:!1}}},I={render:({open:e,...t})=>{let[n,r]=(0,N.useState)(e),i=()=>r(e=>!e);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(_,{variant:`outline`,onClick:i,children:`show modal`}),(0,P.jsxs)(T,{...t,size:`small`,open:n,onOpenChange:i,children:[(0,P.jsx)(S,{onClose:i,closeIcon:(0,P.jsx)(M,{}),children:(0,P.jsx)(`h3`,{children:`Dialog Title`})}),(0,P.jsx)(`p`,{children:`Dialog body text goes here.`}),(0,P.jsxs)(D,{children:[(0,P.jsx)(_,{variant:`outline`,onClick:i,children:`Close`}),(0,P.jsx)(_,{children:`Save changes`})]})]})]})}},L={render:e=>{let[t,n]=(0,N.useState)(!1),r=()=>n(e=>!e);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(_,{variant:`outline`,onClick:r,children:`show modal`}),(0,P.jsxs)(T,{...e,size:`small`,open:t,onOpenChange:r,children:[(0,P.jsx)(S,{onClose:r,closeIcon:(0,P.jsx)(M,{}),children:(0,P.jsx)(`h3`,{children:`Dialog Title`})}),(0,P.jsx)(`section`,{children:Array.from({length:100}).map((e,t)=>(0,P.jsx)(`p`,{children:`Dialog body text goes here.`},t))}),(0,P.jsxs)(D,{children:[(0,P.jsx)(_,{variant:`outline`,onClick:r,children:`Close`}),(0,P.jsx)(_,{children:`Save changes`})]})]})]})}},R={render:e=>{let[t,n]=(0,N.useState)(!1),[r,i]=(0,N.useState)(!1),a=()=>n(e=>!e),o=()=>i(e=>!e);return(0,P.jsxs)(`div`,{children:[(0,P.jsx)(_,{onClick:a,children:`show modal`}),(0,P.jsxs)(T,{...e,size:`medium`,open:t,onOpenChange:a,children:[(0,P.jsx)(S,{onClose:a,closeIcon:(0,P.jsx)(M,{}),children:(0,P.jsx)(`h3`,{children:`Parent Title`})}),(0,P.jsx)(`p`,{children:`Dialog body text goes here.`}),(0,P.jsxs)(D,{children:[(0,P.jsx)(_,{variant:`outline`,onClick:a,children:`Close`}),(0,P.jsx)(_,{onClick:o,children:`Show Child`})]})]}),(0,P.jsxs)(T,{...e,size:`small`,open:r,onOpenChange:o,children:[(0,P.jsx)(S,{onClose:o,closeIcon:(0,P.jsx)(M,{}),children:(0,P.jsx)(`h3`,{children:`Child Title`})}),(0,P.jsxs)(`section`,{children:[(0,P.jsx)(`p`,{children:`Nested Dialog body text goes here.`}),(0,P.jsx)(`div`,{style:{height:`95vh`,color:`blue`,width:`50px`}})]}),(0,P.jsx)(D,{align:`center`,children:(0,P.jsx)(_,{variant:`outline`,onClick:o,children:`Close`})})]})]})}},z={render:e=>{let[t,n]=(0,N.useState)(!1),[r,i]=(0,N.useState)(``),a=()=>n(e=>!e),o=e=>{e.preventDefault();let t=new FormData(e.currentTarget);i(t.get(`text`)?`input: ${t.get(`text`)||`-`}`:``),n(!1)};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(`div`,{className:`text-center pb-15`,children:[r?(0,P.jsx)(`p`,{children:r}):null,(0,P.jsx)(_,{variant:`outline`,onClick:a,children:`Open`})]}),(0,P.jsxs)(T,{...e,open:t,size:`small`,onOpenChange:a,children:[(0,P.jsx)(S,{onClose:a,closeIcon:(0,P.jsx)(M,{}),children:(0,P.jsx)(`h3`,{children:`Dialog Title`})}),(0,P.jsx)(`p`,{className:`pb-2`,children:`Dialog body text goes here.`}),(0,P.jsxs)(`form`,{onSubmit:o,children:[(0,P.jsx)(x,{htmlFor:`test-input`,label:`Username`,help:`This is your public display name`,children:(0,P.jsx)(y,{id:`test-input`,name:`text`})}),(0,P.jsxs)(D,{children:[(0,P.jsx)(_,{variant:`outline`,type:`button`,onClick:a,children:`Close`}),(0,P.jsx)(_,{type:`submit`,children:`Save changes`})]})]})]})]})},args:{timeout:500}},B={render:e=>{let[t,n]=(0,N.useState)(!1),r=()=>n(e=>!e),i=e=>{e.stopPropagation(),alert(`outside`)};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(_,{onClick:r,children:`show modal`}),(0,P.jsxs)(T,{...e,open:t,onOpenChange:r,children:[(0,P.jsxs)(E,{size:`medium`,children:[(0,P.jsx)(S,{onClose:r,closeIcon:(0,P.jsx)(M,{}),children:(0,P.jsx)(`h3`,{children:`Dialog Title`})}),(0,P.jsx)(`p`,{children:`Dialog body text goes here.`}),(0,P.jsxs)(D,{children:[(0,P.jsx)(_,{variant:`outline`,onClick:r,children:`Close`}),(0,P.jsx)(_,{children:`Save changes`})]})]}),(0,P.jsx)(`div`,{className:`text-center mt-2`,children:(0,P.jsx)(_,{variant:`danger`,onClick:i,children:`outside!`})})]})]})}},V={render:e=>{let[t,n]=(0,N.useState)(!1),[r,i]=(0,N.useState)(`モーダルを開く`),a=()=>{i(t?`閉じる中...`:`表示中...`),n(e=>!e)};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`div`,{className:`pb-15`,children:(0,P.jsx)(_,{variant:`outline`,onClick:a,children:r})}),(0,P.jsxs)(T,{...e,open:t,size:`small`,onOpenChange:a,onExited:()=>i(`モーダルを開く`),children:[(0,P.jsx)(S,{onClose:a,closeIcon:(0,P.jsx)(M,{}),children:(0,P.jsx)(`h3`,{children:`Dialog Title`})}),(0,P.jsx)(`p`,{children:`Dialog body text goes here.`}),(0,P.jsxs)(D,{children:[(0,P.jsx)(_,{variant:`outline`,onClick:a,children:`Close`}),(0,P.jsx)(_,{children:`Save changes`})]})]})]})},args:{timeout:500}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [showDialog, setShow] = useState(false);
    const [text, setText] = useState('');
    const toggle = () => setShow(prev => !prev);
    const handleSubmit = (e: any) => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      setText(data.get('text') ? \`input: \${data.get('text') || '-'}\` : '');
      setShow(false);
    };
    return <>
        <div className="text-center pb-15">
          {text ? <p>{text}</p> : null}
          <Button variant="outline" onClick={toggle}>Open</Button>
        </div>
        <Dialog {...args} open={showDialog} size="small" onOpenChange={toggle}>
          <DialogHeader onClose={toggle} closeIcon={<IconClose />}><h3>Dialog Title</h3></DialogHeader>
          <p className="pb-2">Dialog body text goes here.</p>
          <form onSubmit={handleSubmit}>
            <FormField htmlFor="test-input" label="Username" help="This is your public display name">
              <TextInput id="test-input" name="text" />
            </FormField>
            <DialogFooter>
              <Button variant="outline" type="button" onClick={toggle}>Close</Button>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </Dialog>
      </>;
  },
  args: {
    timeout: 500
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}}})))()}H();export{I as base,F as default,B as external,z as input,R as nested,V as onExit,L as onScroll};