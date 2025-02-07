import{j as e}from"./jsx-runtime-CLpGMVip.js";import{r as s}from"./index-CZMpeKRu.js";import{P as n}from"./index-BUASv8fC.js";import{T as K}from"./index-BKlBT1o8.js";import{B as a}from"./index-BzT3w_NJ.js";import{I as Q}from"./index-J6MZ00ee.js";import"./index-CMLLrBYL.js";import"./index-2nx3i45w.js";import"./index-D-TIQtLp.js";import"./useIsomorphicLayoutEffect-94RkQO-_.js";import"./clsx-B-dksMZM.js";import"./stopPropagation-CdkcreiB.js";import"./merge-Dx8A4mzc.js";const U=["auto","top","left","right","bottom","top-start","top-end","bottom-start","bottom-end"];function X(){}const pe={title:"components/Popover",component:n,tags:["autodocs"],argTypes:{label:{control:!1},children:{control:!1},offset:{defaultValue:{x:0,y:6}}},parameters:{control:{position:U}}},i=e.jsx(a,{variant:"outline",type:"button",children:"show"}),p={render:t=>e.jsx("div",{style:{textAlign:"center"},children:e.jsxs(n,{...t,label:i,children:[e.jsx(a,{type:"button",onClick:()=>{alert("world!")},children:"hello"}),e.jsx("p",{children:"hello world"})]})})},d={name:"auto placement on scroll",render:t=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:"50px",height:"80vh"}}),e.jsx("div",{style:{textAlign:"center"},children:e.jsxs(n,{...t,style:{padding:50},label:i,children:[e.jsx("button",{type:"button",onClick:()=>{alert("world!")},children:"hello"}),e.jsx("p",{children:"hello world"})]})}),e.jsx("div",{style:{width:"50px",height:"80vh"}})]})},u={render:t=>{const[o,r]=s.useState(""),c=J=>r(J.target.value);return e.jsx(n,{...t,label:i,children:e.jsx(Q,{value:o,onChange:c})})}},h={name:"reference button with absolute position",render:t=>e.jsxs("div",{style:{maxHeight:"80vh",overflowY:"auto"},children:[e.jsx(l,{...t}),e.jsx(l,{...t}),e.jsx(l,{...t}),e.jsx(l,{...t}),e.jsx(l,{...t}),e.jsx(l,{...t})]})},m={name:"programatically handle",render:t=>{const o=s.useRef(null);return s.useEffect(()=>{var r;(r=o.current)==null||r.open()},[]),e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"link",type:"button",onClick:()=>{var r;return(r=o.current)==null?void 0:r.open()},children:"open"}),e.jsxs(n,{...t,ref:o,label:e.jsx("span",{children:"show"}),children:[e.jsx("p",{children:"hello world!"}),e.jsx(a,{variant:"link",type:"button",onClick:()=>{var r;return(r=o.current)==null?void 0:r.close()},children:"close me!"})]})]})}},x={name:"clickable parent",render:t=>{const[o,r]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("a",{className:"hover:underline",onClick:()=>r(!o),children:[e.jsx("span",{children:"parent button contents"}),e.jsx("br",{}),e.jsx(n,{...t,label:i,children:e.jsx("p",{children:"hello world"})})]}),o?e.jsx("div",{children:"oh no! your parent click event is triggered!"}):null]})}},v={name:"popover with tooltip",render:t=>e.jsx(n,{...t,label:i,children:e.jsx(K,{label:"tooltip!",children:e.jsx("p",{children:"hello world"})})})},g={name:"popover close manually",render:t=>{const o=s.useRef(null);return e.jsxs(n,{ref:o,...t,label:i,onManualClose:X,children:[e.jsx("p",{children:"hello world"}),e.jsx("button",{type:"button",onClick:()=>{var r;return(r=o.current)==null?void 0:r.close()},children:"close!"})]})}},b={name:"auto width",render:t=>{const[o,r]=s.useState(100);return e.jsx(n,{...t,label:e.jsx(a,{variant:"outline",style:{width:"250px"},children:"click me"}),onOpen:c=>{c&&r(c.getBoundingClientRect().width)},children:e.jsx("p",{style:{width:o},children:"hello world"})})}};function l(t){const[o,r]=s.useState(!1);return e.jsx("div",{onPointerOver:()=>r(!0),onPointerLeave:()=>r(!1),style:{position:"relative",width:"40vw",height:"20vh",background:"#eee",marginBottom:3},children:o&&e.jsx("div",{style:{position:"absolute",right:4,top:0,transform:"translateY(100%)",zIndex:10},children:e.jsx(n,{...t,label:e.jsx(a,{variant:"ghost",type:"button",children:"button!"}),children:"hello world!"})})})}var j,f,w;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <div style={{
    textAlign: 'center'
  }}>
      <Popover {...args} label={Label}>
        <Button type="button" onClick={() => {
        alert('world!');
      }}>hello</Button>
        <p>hello world</p>
      </Popover>
    </div>
}`,...(w=(f=p.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var y,k,P;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'auto placement on scroll',
  render: args => <>
      <div style={{
      width: '50px',
      height: '80vh'
    }} />
      <div style={{
      textAlign: 'center'
    }}>
        <Popover {...args} style={{
        padding: 50
      }} label={Label}>
          <button type="button" onClick={() => {
          alert('world!');
        }}>hello</button>
          <p>hello world</p>
        </Popover>
      </div>
      <div style={{
      width: '50px',
      height: '80vh'
    }} />
    </>
}`,...(P=(k=d.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var C,S,T;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const [txt, setText] = useState('');
    const onChange = (e: any) => setText(e.target.value);
    return <Popover {...args} label={Label}>
        <TextInput value={txt} onChange={onChange} />
      </Popover>;
  }
}`,...(T=(S=u.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var B,L,R;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
    </div>
}`,...(R=(L=h.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var I,A,E;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'programatically handle',
  render: args => {
    const ref = useRef<PopoverRef | null>(null);
    useEffect(() => {
      ref.current?.open();
    }, []);
    return <>
        <Button variant="link" type="button" onClick={() => ref.current?.open()}>open</Button>
        <Popover {...args} ref={ref} label={<span>show</span>}>
          <p>hello world!</p>
          <Button variant="link" type="button" onClick={() => ref.current?.close()}>
            close me!
          </Button>
        </Popover>
      </>;
  }
}`,...(E=(A=m.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var W,F,O;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'clickable parent',
  render: args => {
    const [clicked, setClicked] = useState(false);
    return <>
        <a className="hover:underline" onClick={() => setClicked(!clicked)}>
          <span>parent button contents</span><br />
          <Popover {...args} label={Label}>
            <p>hello world</p>
          </Popover>
        </a>
        {clicked ? <div>oh no! your parent click event is triggered!</div> : null}
      </>;
  }
}`,...(O=(F=x.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var Y,H,M;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'popover with tooltip',
  render: args => <Popover {...args} label={Label}>
      <Tooltip label="tooltip!">
        <p>hello world</p>
      </Tooltip>
    </Popover>
}`,...(M=(H=v.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var N,z,V;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'popover close manually',
  render: args => {
    const ref = useRef<PopoverRef>(null);
    return <Popover ref={ref} {...args} label={Label} onManualClose={noop}>
        <p>hello world</p>
        <button type="button" onClick={() => ref.current?.close()}>
          close!
        </button>
      </Popover>;
  }
}`,...(V=(z=g.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var q,D,G;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'auto width',
  render: args => {
    const [width, setWidth] = useState(100);
    return <Popover {...args} label={<Button variant="outline" style={{
      width: '250px'
    }}>click me</Button>} onOpen={e => {
      if (!e) return;
      setWidth(e.getBoundingClientRect().width);
    }}>
        <p style={{
        width
      }}>hello world</p>
      </Popover>;
  }
}`,...(G=(D=b.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};export{h as absoluteParent,d as autoPlacement,b as autoWidth,p as base,x as case5,pe as default,g as manualClose,m as program,v as tooltip,u as withInput};
