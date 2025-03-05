import{j as e}from"./jsx-runtime-CLpGMVip.js";import{r as i}from"./index-CZMpeKRu.js";import{u as te,a as ne,d as se,i as ae,c as re,P as le,F as ie}from"./index-CMLLrBYL.js";import{c as y}from"./clsx-B-dksMZM.js";import{m as ce}from"./merge-n6Ak0Tla.js";import{s as de}from"./stopPropagation-CdkcreiB.js";import{B as r}from"./index-BzT3w_NJ.js";import{I as ge}from"./index-CXIQNxus.js";import{C as ue}from"./Close-WyMmPAPO.js";import"./index-2nx3i45w.js";import"./index-D-TIQtLp.js";import"./useIsomorphicLayoutEffect-94RkQO-_.js";function g({className:t,onClose:n,children:l,...s}){const o=i.useMemo(()=>y("relative flex flex-col space-y-2 text-center text-xl mb-2 sm:text-left",t),[t]);return e.jsxs("header",{className:o,...s,children:[l,n?e.jsx(r,{className:"absolute top-0 right-0 w-6 h-6 p-1.5",variant:"ghost",size:"none",onClick:n,children:e.jsx(ue,{})}):null]})}g.__docgenInfo={description:"",methods:[],displayName:"DialogHeader",props:{onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["HTMLAttributes"]};function d({open:t,children:n,timeout:l=150,padding:s="0.85rem",verticalAlign:o="center",closeOnOverlay:a,closeOnEsc:c,onExited:h,className:b,onOpenChange:p,size:U,...W}){const x=i.useRef(h),k=i.useRef(!1),X=te(),{refs:Y,context:B}=ne({open:t,onOpenChange:p,nodeId:X}),{getFloatingProps:Z}=se([ae(B,{enabled:c,escapeKey:c,outsidePress:!1})]),{isMounted:m,styles:T}=re(B,{duration:l,initial:{opacity:0,transform:"scale(0.8)"}});i.useEffect(()=>{var F;k.current!==m&&(k.current=m,!m&&((F=x.current)==null||F.call(x)))},[m]);const $=i.useCallback(()=>{a&&(p==null||p(!1))},[p,a]);x.current=h;const ee=i.useMemo(()=>y("grid bg-backdrop z-40 justify-items-center",{"place-items-start items-start":o==="start","place-items-end":o==="end","place-items-center":o==="center"||!o}),[o]),oe=i.useMemo(()=>ce("transition ease-in-out",b),[b]);return e.jsx(le,{disabled:!m,children:e.jsx(ie,{className:ee,"data-testid":"vs-dialog-overlay",onClick:$,style:{padding:s,opacity:T.opacity},lockScroll:!0,children:e.jsx(S,{ref:Y.setFloating,className:oe,role:"dialog",size:U,...Z({...W,style:T,onClick:de}),children:n})})})}const S=i.forwardRef(({size:t,className:n,...l},s)=>{const o=i.useMemo(()=>y(t?"flex flex-col bg-background shadow-lg p-5 rounded":null,{"w-full max-w-sm":t==="small","w-full max-w-lg":t==="medium","w-full max-w-2xl":t==="large"},n),[t,n]);return e.jsx("div",{ref:s,className:o,...l})});S.displayName="DialogContent";function u({className:t,align:n,...l}){const s=i.useMemo(()=>y("flex flex-col-reverse space-y-2 mt-4 sm:space-y-0 sm:flex-row sm:space-x-2",{"sm:justify-end":!n||n==="right","sm:justify-start":n==="left","sm:justify-center":n==="center"},t),[t,n]);return e.jsx("footer",{className:s,...l})}d.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{open:{required:!1,tsType:{name:"boolean"},description:"trueの場合、モーダルを表示します。"},children:{required:!1,tsType:{name:"ReactNode"},description:"モーダルのbodyに入れる内容"},closeOnOverlay:{required:!1,tsType:{name:"boolean"},description:"オーバーレイのクリックでモーダルクローズ"},closeOnEsc:{required:!1,tsType:{name:"boolean"},description:"escボタンでクローズ"},timeout:{required:!1,tsType:{name:"union",raw:"number | { open: number; close: number; }",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ open: number; close: number; }",signature:{properties:[{key:"open",value:{name:"number",required:!0}},{key:"close",value:{name:"number",required:!0}}]}}]},description:`モーダルの表示・非表示のアニメーション速度
@default 150`,defaultValue:{value:"150",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`モーダルのデフォルトデザインを適用し、サイズを指定します。\\
未指定の場合は、スタイルを全部外した状態で表示されます`},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"モーダルのtransition exitが完了した時に発火されるcallback"},onExited:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"モーダルのtransition exitが完了した時に発火されるcallback"},padding:{required:!1,tsType:{name:"string"},description:`モーダルの背景からのpaddingを指定します。
@default '0.85rem'`,defaultValue:{value:"'0.85rem'",computed:!1}},verticalAlign:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:`モーダルの縦並びを設定します。
@default 'center'`,defaultValue:{value:"'center'",computed:!1}}},composes:["HTMLAttributes"]};S.__docgenInfo={description:"",methods:[],displayName:"DialogContent",props:{size:{required:!1,tsType:{name:"Props['size']",raw:"Props['size']"},description:""}},composes:["HTMLAttributes"]};u.__docgenInfo={description:"",methods:[],displayName:"DialogFooter",props:{align:{required:!1,tsType:{name:"union",raw:"'center' | 'left' | 'right'",elements:[{name:"literal",value:"'center'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"@default 'right'"}},composes:["HTMLAttributes"]};const be={title:"components/Dialog",component:d,tags:["autodocs"],args:{open:!1,timeout:200,closeOnOverlay:!0,closeOnEsc:!0},argTypes:{open:{control:!1},children:{control:!1},onOpenChange:{control:!1}}},C={render:({open:t,...n})=>{const[l,s]=i.useState(t),o=()=>s(a=>!a);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",onClick:o,children:"show modal"}),e.jsxs(d,{...n,size:"small",open:l,onOpenChange:o,children:[e.jsx(g,{onClose:o,children:e.jsx("h3",{children:"Dialog Title"})}),e.jsx("p",{children:"Dialog body text goes here."}),e.jsxs(u,{children:[e.jsx(r,{variant:"outline",onClick:o,children:"Close"}),e.jsx(r,{children:"Save changes"})]})]})]})}},D={render:t=>{const[n,l]=i.useState(!1),s=()=>l(o=>!o);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",onClick:s,children:"show modal"}),e.jsxs(d,{...t,size:"small",open:n,onOpenChange:s,children:[e.jsx(g,{onClose:s,children:e.jsx("h3",{children:"Dialog Title"})}),e.jsx("section",{children:Array.from({length:100}).map((o,a)=>e.jsx("p",{children:"Dialog body text goes here."},a))}),e.jsxs(u,{children:[e.jsx(r,{variant:"outline",onClick:s,children:"Close"}),e.jsx(r,{children:"Save changes"})]})]})]})}},f={render:t=>{const[n,l]=i.useState(!1),[s,o]=i.useState(!1),a=()=>l(h=>!h),c=()=>o(h=>!h);return e.jsxs("div",{children:[e.jsx(r,{onClick:a,children:"show modal"}),e.jsxs(d,{...t,size:"medium",open:n,onOpenChange:a,children:[e.jsx(g,{onClose:a,children:e.jsx("h3",{children:"Parent Title"})}),e.jsx("p",{children:"Dialog body text goes here."}),e.jsxs(u,{children:[e.jsx(r,{variant:"outline",onClick:a,children:"Close"}),e.jsx(r,{onClick:c,children:"Show Child"})]})]}),e.jsxs(d,{...t,size:"small",open:s,onOpenChange:c,children:[e.jsx(g,{onClose:c,children:e.jsx("h3",{children:"Child Title"})}),e.jsxs("section",{children:[e.jsx("p",{children:"Nested Dialog body text goes here."}),e.jsx("div",{style:{height:"95vh",color:"blue",width:"50px"}})]}),e.jsx(u,{align:"center",children:e.jsx(r,{variant:"outline",onClick:c,children:"Close"})})]})]})}},v={render:({open:t,...n})=>{const[l,s]=i.useState(t),o=()=>s(a=>!a);return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:o,children:"show modal"}),e.jsxs(d,{...n,size:"large",open:l,onOpenChange:o,children:[e.jsx(g,{onClose:o,children:e.jsx("h3",{children:"Dialog Title"})}),e.jsxs("section",{children:[e.jsx("p",{children:"Dialog body text goes here."}),e.jsx(ge,{})]}),e.jsxs(u,{children:[e.jsx(r,{variant:"outline",onClick:o,children:"Close"}),e.jsx(r,{children:"Save changes"})]})]})]})}},j={render:t=>{const[n,l]=i.useState(!1),s=()=>l(a=>!a),o=a=>{a.stopPropagation(),alert("outside")};return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:s,children:"show modal"}),e.jsxs(d,{...t,open:n,onOpenChange:s,children:[e.jsxs(S,{size:"medium",children:[e.jsx(g,{onClose:s,children:e.jsx("h3",{children:"Dialog Title"})}),e.jsx("p",{children:"Dialog body text goes here."}),e.jsxs(u,{children:[e.jsx(r,{variant:"outline",onClick:s,children:"Close"}),e.jsx(r,{children:"Save changes"})]})]}),e.jsx("div",{className:"text-center mt-2",children:e.jsx(r,{variant:"danger",onClick:o,children:"outside!"})})]})]})}},w={render:t=>{const[n,l]=i.useState(!1),[s,o]=i.useState("モーダルを開く"),a=()=>{o(n?"閉じる中...":"表示中..."),l(c=>!c)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"pb-15",children:e.jsx(r,{variant:"outline",onClick:a,children:s})}),e.jsxs(d,{...t,open:n,size:"small",onOpenChange:a,onExited:()=>o("モーダルを開く"),children:[e.jsx(g,{onClose:a,children:e.jsx("h3",{children:"Dialog Title"})}),e.jsx("p",{children:"Dialog body text goes here."}),e.jsxs(u,{children:[e.jsx(r,{variant:"outline",onClick:a,children:"Close"}),e.jsx(r,{children:"Save changes"})]})]})]})},args:{timeout:500}};var H,P,z;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: ({
    open,
    ...rest
  }) => {
    const [showDialog, setShow] = useState(open);
    const toggle = () => setShow(prev => !prev);
    return <>
        <Button variant="outline" onClick={toggle}>show modal</Button>
        <Dialog {...rest} size="small" open={showDialog} onOpenChange={toggle}>
          <DialogHeader onClose={toggle}><h3>Dialog Title</h3></DialogHeader>
          <p>Dialog body text goes here.</p>
          <DialogFooter>
            <Button variant="outline" onClick={toggle}>Close</Button>
            <Button>Save changes</Button>
          </DialogFooter>
        </Dialog>
      </>;
  }
}`,...(z=(P=C.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var N,q,O;D.parameters={...D.parameters,docs:{...(N=D.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => {
    const [showDialog, setShow] = useState(false);
    const toggle = () => setShow(prev => !prev);
    return <>
        <Button variant="outline" onClick={toggle}>show modal</Button>
        <Dialog {...args} size="small" open={showDialog} onOpenChange={toggle}>
          <DialogHeader onClose={toggle}><h3>Dialog Title</h3></DialogHeader>
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
}`,...(O=(q=D.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var M,E,I;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => {
    const [parent, showParent] = useState(false);
    const [child, showChild] = useState(false);
    const toggleParent = () => showParent(prev => !prev);
    const toggleChild = () => showChild(prev => !prev);
    return <div>
        <Button onClick={toggleParent}>show modal</Button>
        <Dialog {...args} size="medium" open={parent} onOpenChange={toggleParent}>
          <DialogHeader onClose={toggleParent}><h3>Parent Title</h3></DialogHeader>
          <p>Dialog body text goes here.</p>
          <DialogFooter>
            <Button variant="outline" onClick={toggleParent}>Close</Button>
            <Button onClick={toggleChild}>Show Child</Button>
          </DialogFooter>
        </Dialog>
        <Dialog {...args} size="small" open={child} onOpenChange={toggleChild}>
          <DialogHeader onClose={toggleChild}><h3>Child Title</h3></DialogHeader>
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
}`,...(I=(E=f.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var _,R,L;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: ({
    open,
    ...rest
  }) => {
    const [showDialog, setShow] = useState(open);
    const toggle = () => setShow(prev => !prev);
    return <>
        <Button onClick={toggle}>show modal</Button>
        <Dialog {...rest} size="large" open={showDialog} onOpenChange={toggle}>
          <DialogHeader onClose={toggle}><h3>Dialog Title</h3></DialogHeader>
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
}`,...(L=(R=v.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var A,V,K;j.parameters={...j.parameters,docs:{...(A=j.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
            <DialogHeader onClose={toggle}><h3>Dialog Title</h3></DialogHeader>
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
}`,...(K=(V=j.parameters)==null?void 0:V.docs)==null?void 0:K.source}}};var G,J,Q;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
          <DialogHeader onClose={toggle}><h3>Dialog Title</h3></DialogHeader>
          <p>Dialog body text goes here.</p>
          <DialogFooter>
            <Button variant="outline" onClick={toggle}>Close</Button>
            <Button>Save changes</Button>
          </DialogFooter>
        </Dialog>
      </>;
  },
  // @ts-ignore
  args: {
    timeout: 500
  }
}`,...(Q=(J=w.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};export{C as base,be as default,j as external,v as input,f as nested,w as onExit,D as onScroll};
