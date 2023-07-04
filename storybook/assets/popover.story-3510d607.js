import{j as e}from"./jsx-runtime-94f6e698.js";import{r as n}from"./index-8db94870.js";import{H as Q}from"./styled-components.browser.esm-482fcb23.js";import{a as U,O as W,A as Z,L as ee,V as te,b as oe,e as re,P as ne,F as se,f as ae}from"./index-c4391f03.js";import{B as le}from"./index-4551bb9b.js";import{T as ue}from"./index-e6d13ab7.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";import"./useIsomorphicLayoutEffect-54e15dad.js";import"./findColorInvert-e5bd6638.js";import"./polished.esm-d58a66c9.js";import"./disabledColor-bb7a461b.js";import"./HelpMessage-d324061c.js";import"./setSize-000c66a5.js";function d(t){t&&t.stopPropagation()}const f=n.forwardRef(({position:t,label:r,children:o,color:v="background",onOpen:l,onClose:j,disabled:u,offset:C={x:0,y:6},...M},J)=>{const[i,c]=n.useState(!1),{refs:w,floatingStyles:X,context:k}=U({placement:t,middleware:[W(),Z({fallbackAxisSideDirection:"end"}),ee({mainAxis:C.y,crossAxis:C.x})],open:i,onOpenChange:c,whileElementsMounted:te}),$=y=>{d(y),c(!0),l&&l()},P=y=>{d(y),c(!1),j&&j()};n.useEffect(()=>{u&&i&&c(!1)},[u,i]),n.useImperativeHandle(J,()=>({open:$,close:P}));const{getFloatingProps:G,getReferenceProps:K}=oe([re(k,{enabled:!u})]);return e.jsxs(e.Fragment,{children:[n.cloneElement(n.Children.only(r),{ref:w.setReference,...K({tabIndex:0,role:"button",disabled:u,onClick:d})}),e.jsx(ne,{children:i?e.jsx(se,{"data-testid":"visits-style-shadow",onClick:P,style:{zIndex:9996},children:e.jsx(ae,{context:k,modal:!1,children:e.jsx(ie,{role:"tooltip",ref:w.setFloating,color:v,style:X,...G({...M,onClick:d}),children:o})})}):null})]})});f.displayName="Popover";const s=f,ie=Q(le).withConfig({displayName:"Popover__Tooltip",componentId:"sc-1huajr8-0"})(["display:flex;box-shadow:0 1px 2px 0 rgba(0,0,0,0.05);padding:0.5rem 0;width:auto;height:auto;cursor:auto;z-index:20;"]);try{f.displayName="Popover",f.__docgenInfo={description:"",displayName:"Popover",props:{label:{defaultValue:null,description:"ボタンの内容",name:"label",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},children:{defaultValue:null,description:"内容のリスト",name:"children",required:!1,type:{name:"ReactNode"}},color:{defaultValue:{value:"background"},description:"吹き出しの背景色",name:"color",required:!1,type:{name:"string"}},position:{defaultValue:{value:"'bottom-end'"},description:"表示される場所",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'}]}},offset:{defaultValue:{value:"{ x: 0, y: 6 }"},description:"ツールチップが表示される間隔",name:"offset",required:!1,type:{name:"{ x: number; y: number; }"}},onClose:{defaultValue:null,description:"閉じた場合のコールバック",name:"onClose",required:!1,type:{name:"(() => void)"}},onOpen:{defaultValue:null,description:"開けた場合のコールバック",name:"onOpen",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:null,description:"コンテンツを出さない",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const ce=["auto","top","left","right","bottom","top-start","top-end","bottom-start","bottom-end"],Pe={title:"components/Popover",component:s,tags:["autodocs"],argTypes:{label:{control:!1},children:{control:!1},offset:{defaultValue:{x:0,y:6}}},parameters:{control:{position:ce}}},p={render:t=>e.jsx("div",{style:{textAlign:"center"},children:e.jsxs(s,{...t,label:e.jsx("button",{type:"button",children:"show"}),children:[e.jsx("button",{type:"button",onClick:()=>{alert("world!")},children:"hello"}),e.jsx("p",{children:"hello world"})]})}),args:{}},m={name:"auto placement on scroll",render:t=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:"50px",height:"80vh"}}),e.jsx("div",{style:{textAlign:"center"},children:e.jsx(s,{...t,label:e.jsx("button",{type:"button",children:"show"}),children:e.jsxs("div",{style:{padding:50},children:[e.jsx("button",{type:"button",onClick:()=>{alert("world!")},children:"hello"}),e.jsx("p",{children:"hello world"})]})})}),e.jsx("div",{style:{width:"50px",height:"80vh"}})]}),args:{}},h={render:t=>{const[r,o]=n.useState(""),v=l=>o(l.target.value);return e.jsx(s,{...t,label:e.jsx("button",{type:"button",children:"show"}),children:e.jsx(ue,{value:r,onChange:v})})},args:{}},g={name:"reference button with absolute position",render:t=>e.jsxs("div",{style:{maxHeight:"80vh",overflowY:"auto"},children:[e.jsx(a,{...t}),e.jsx(a,{...t}),e.jsx(a,{...t}),e.jsx(a,{...t}),e.jsx(a,{...t}),e.jsx(a,{...t})]}),args:{}},b={name:"programatically handle",render:t=>{const r=n.useRef(null);return n.useEffect(()=>{var o;(o=r.current)==null||o.open()},[]),e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>{var o;return(o=r.current)==null?void 0:o.open()},children:"open"}),e.jsxs(s,{...t,ref:r,label:e.jsx("span",{children:"show"}),children:[e.jsx("p",{children:"hello world!"}),e.jsx("button",{type:"button",onClick:()=>{var o;return(o=r.current)==null?void 0:o.close()},children:"close me!"})]})]})},args:{}},x={name:"clickable parent",render:t=>{const[r,o]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>o(!r),children:[e.jsx("span",{children:"parent button contents"}),e.jsx("br",{}),e.jsx(s,{...t,label:e.jsx("button",{children:"click me"}),children:e.jsx("p",{children:"hello world"})})]}),r?e.jsx("div",{children:"oh no! your parent click event is triggered!"}):null]})},args:{}};function a(t){const[r,o]=n.useState(!1);return e.jsx("div",{onPointerOver:()=>o(!0),onPointerLeave:()=>o(!1),style:{position:"relative",width:"40vw",height:"20vh",background:"#eee",marginBottom:3},children:r&&e.jsx("div",{style:{position:"absolute",right:4,top:0,transform:"translateY(100%)",zIndex:10},children:e.jsx(s,{...t,label:e.jsx("button",{type:"button",children:"button!"}),children:"hello world!"})})})}var F,B,E;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <div style={{
    textAlign: 'center'
  }}>
      <Popover {...args} label={<button type="button">show</button>}>
        <button type="button" onClick={() => {
        alert('world!');
      }}>hello</button>
        <p>hello world</p>
      </Popover>
    </div>,
  // @ts-ignore
  args: {}
}`,...(E=(B=p.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var A,S,T;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'auto placement on scroll',
  render: args => <>
      <div style={{
      width: '50px',
      height: '80vh'
    }} />
      <div style={{
      textAlign: 'center'
    }}>
        <Popover {...args} label={<button type="button">show</button>}>
          <div style={{
          padding: 50
        }}>
            <button type="button" onClick={() => {
            alert('world!');
          }}>hello</button>
            <p>hello world</p>
          </div>
        </Popover>
      </div>
      <div style={{
      width: '50px',
      height: '80vh'
    }} />
    </>,
  // @ts-ignore
  args: {}
}`,...(T=(S=m.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var I,V,_;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    const [txt, setText] = useState('');
    const onChange = (e: any) => setText(e.target.value);
    return <Popover {...args} label={<button type="button">show</button>}>
        <TextInput value={txt} onChange={onChange} />
      </Popover>;
  },
  // @ts-ignore
  args: {}
}`,...(_=(V=h.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var R,q,D;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'reference button with absolute position',
  render: args => <div style={{
    maxHeight: '80vh',
    overflowY: 'auto'
  }}>
      <Test {...args} />
      <Test {...args} />
      <Test {...args} />
      <Test {...args} />
      <Test {...args} />
      <Test {...args} />
    </div>,
  // @ts-ignore
  args: {}
}`,...(D=(q=g.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var O,H,N;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'programatically handle',
  render: args => {
    const ref = useRef<PopoverRef | null>(null);
    useEffect(() => {
      ref.current?.open();
    }, []);
    return <>
        <button type="button" onClick={() => ref.current?.open()}>open</button>
        <Popover {...args} ref={ref} label={<span>show</span>}>
          <p>hello world!</p>
          <button type="button" onClick={() => ref.current?.close()}>
            close me!
          </button>
        </Popover>
      </>;
  },
  // @ts-ignore
  args: {}
}`,...(N=(H=b.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var z,L,Y;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'clickable parent',
  render: args => {
    const [clicked, setClicked] = useState(false);
    return <>
        <button onClick={() => setClicked(!clicked)}>
          <span>parent button contents</span><br />
          <Popover {...args} label={<button>click me</button>}>
            <p>hello world</p>
          </Popover>
        </button>
        {clicked ? <div>oh no! your parent click event is triggered!</div> : null}
      </>;
  },
  // @ts-ignore
  args: {}
}`,...(Y=(L=x.parameters)==null?void 0:L.docs)==null?void 0:Y.source}}};export{g as absoluteParent,m as autoPlacement,p as base,x as case5,Pe as default,b as program,h as withInput};
//# sourceMappingURL=popover.story-3510d607.js.map
