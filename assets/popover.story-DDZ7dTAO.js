import{j as e,r as s}from"./iframe-C9DRP0Ve.js";import{P as o}from"./index-CRPRnaGP.js";import{T as f}from"./index-C9XJv-RR.js";import{B as a}from"./index-ai6LrXIN.js";import{I as w}from"./index-FXrvXXCF.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CcYuK7si.js";import"./index-D6dqS53r.js";import"./index-Blk7Kv1J.js";import"./useIsomorphicLayoutEffect-CDYSGN2L.js";import"./clsx-B-dksMZM.js";import"./stopPropagation-CdkcreiB.js";import"./merge-0FHwH-zM.js";const y=["auto","top","left","right","bottom","top-start","top-end","bottom-start","bottom-end"];function k(){}const Y={title:"components/Popover",component:o,tags:["autodocs"],argTypes:{label:{control:!1},children:{control:!1},offset:{defaultValue:{x:0,y:6}}},parameters:{control:{position:y}}},i=e.jsx(a,{variant:"outline",type:"button",children:"show"}),p={render:t=>e.jsx("div",{style:{textAlign:"center"},children:e.jsxs(o,{...t,label:i,children:[e.jsx(a,{type:"button",onClick:()=>{alert("world!")},children:"hello"}),e.jsx("p",{children:"hello world"})]})})},d={name:"auto placement on scroll",render:t=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:"50px",height:"80vh"}}),e.jsx("div",{style:{textAlign:"center"},children:e.jsxs(o,{...t,style:{padding:50},label:i,children:[e.jsx("button",{type:"button",onClick:()=>{alert("world!")},children:"hello"}),e.jsx("p",{children:"hello world"})]})}),e.jsx("div",{style:{width:"50px",height:"80vh"}})]})},u={render:t=>{const[r,n]=s.useState(""),c=j=>n(j.target.value);return e.jsx(o,{...t,label:i,children:e.jsx(w,{value:r,onChange:c})})}},h={name:"reference button with absolute position",render:t=>e.jsxs("div",{style:{maxHeight:"80vh",overflowY:"auto"},children:[e.jsx(l,{...t}),e.jsx(l,{...t}),e.jsx(l,{...t}),e.jsx(l,{...t}),e.jsx(l,{...t}),e.jsx(l,{...t})]})},m={name:"programatically handle",render:t=>{const r=s.useRef(null);return s.useEffect(()=>{r.current?.open()},[]),e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"link",type:"button",onClick:()=>r.current?.open(),children:"open"}),e.jsxs(o,{...t,ref:r,label:e.jsx("span",{children:"show"}),children:[e.jsx("p",{children:"hello world!"}),e.jsx(a,{variant:"link",type:"button",onClick:()=>r.current?.close(),children:"close me!"})]})]})}},x={name:"clickable parent",render:t=>{const[r,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"hover:underline",onClick:()=>n(!r),children:[e.jsx("span",{children:"parent button contents"}),e.jsx("br",{}),e.jsx(o,{...t,label:i,children:e.jsx("p",{children:"hello world"})})]}),r?e.jsx("div",{children:"oh no! your parent click event is triggered!"}):null]})}},v={name:"popover with tooltip",render:t=>e.jsx(o,{...t,label:i,children:e.jsx(f,{label:"tooltip!",children:e.jsx("p",{children:"hello world"})})})},g={name:"popover close manually",render:t=>{const r=s.useRef(null);return e.jsxs(o,{ref:r,...t,label:i,onManualClose:k,children:[e.jsx("p",{children:"hello world"}),e.jsx("button",{type:"button",onClick:()=>r.current?.close(),children:"close!"})]})}},b={name:"auto width",render:t=>{const[r,n]=s.useState(100);return e.jsx(o,{...t,label:e.jsx(a,{variant:"outline",style:{width:"250px"},children:"click me"}),onOpen:c=>{c&&n(c.getBoundingClientRect().width)},children:e.jsx("p",{style:{width:r},children:"hello world"})})}};function l(t){const[r,n]=s.useState(!1);return e.jsx("div",{onPointerOver:()=>n(!0),onPointerLeave:()=>n(!1),style:{position:"relative",width:"40vw",height:"20vh",background:"#eee",marginBottom:3},children:r&&e.jsx("div",{style:{position:"absolute",right:4,top:0,transform:"translateY(100%)",zIndex:10},children:e.jsx(o,{...t,label:e.jsx(a,{variant:"ghost",type:"button",children:"button!"}),children:"hello world!"})})})}p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [txt, setText] = useState('');
    const onChange = (e: any) => setText(e.target.value);
    return <Popover {...args} label={Label}>
        <TextInput value={txt} onChange={onChange} />
      </Popover>;
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'clickable parent',
  render: args => {
    const [clicked, setClicked] = useState(false);
    return <>
        <button className="hover:underline" onClick={() => setClicked(!clicked)}>
          <span>parent button contents</span><br />
          <Popover {...args} label={Label}>
            <p>hello world</p>
          </Popover>
        </button>
        {clicked ? <div>oh no! your parent click event is triggered!</div> : null}
      </>;
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'popover with tooltip',
  render: args => <Popover {...args} label={Label}>
      <Tooltip label="tooltip!">
        <p>hello world</p>
      </Tooltip>
    </Popover>
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};export{h as absoluteParent,d as autoPlacement,b as autoWidth,p as base,x as case5,Y as default,g as manualClose,m as program,v as tooltip,u as withInput};
