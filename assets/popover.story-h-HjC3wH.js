import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Button-CBFI_ykW.js";import{n as a,t as o}from"./Input-DvpuKwA-.js";import{n as s,t as c}from"./Popover-BWoE9RPe.js";import{n as l,t as u}from"./Tooltip-K46RLGjy.js";function d(){}function f(e){return(0,h.jsx)(i,{variant:`outline`,type:`button`,...e,children:`show`})}function p(e){let[t,n]=(0,m.useState)(!1);return(0,h.jsx)(`div`,{onPointerOver:()=>n(!0),onPointerLeave:()=>n(!1),style:{position:`relative`,width:`40vw`,height:`20vh`,background:`#eee`,marginBottom:3},children:t&&(0,h.jsx)(`div`,{style:{position:`absolute`,right:4,top:0,transform:`translateY(100%)`,zIndex:10},children:(0,h.jsx)(c,{...e,render:e=>(0,h.jsx)(i,{variant:`ghost`,type:`button`,...e,children:`button!`}),children:`hello world!`})})})}var m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{m=t(),s(),l(),r(),a(),h=n(),g=[`auto`,`top`,`left`,`right`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`],_={title:`components/Popover`,component:c,tags:[`autodocs`],argTypes:{children:{control:!1},offset:{defaultValue:{x:0,y:6}}},parameters:{control:{position:g}}},v={render:e=>(0,h.jsx)(`div`,{style:{textAlign:`center`},children:(0,h.jsxs)(c,{...e,render:f,children:[(0,h.jsx)(i,{type:`button`,onClick:()=>{alert(`world!`)},children:`hello`}),(0,h.jsx)(`p`,{children:`hello world`})]})})},y={name:`auto placement on scroll`,render:e=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`div`,{style:{width:`50px`,height:`80vh`}}),(0,h.jsx)(`div`,{style:{textAlign:`center`},children:(0,h.jsxs)(c,{...e,style:{padding:50},render:f,children:[(0,h.jsx)(`button`,{type:`button`,onClick:()=>{alert(`world!`)},children:`hello`}),(0,h.jsx)(`p`,{children:`hello world`})]})}),(0,h.jsx)(`div`,{style:{width:`50px`,height:`80vh`}})]})},b={render:e=>{let[t,n]=(0,m.useState)(``),r=e=>n(e.target.value);return(0,h.jsx)(c,{...e,render:f,children:(0,h.jsx)(o,{value:t,onChange:r})})}},x={name:`reference button with absolute position`,render:e=>(0,h.jsxs)(`div`,{style:{maxHeight:`80vh`,overflowY:`auto`},children:[(0,h.jsx)(p,{...e}),(0,h.jsx)(p,{...e}),(0,h.jsx)(p,{...e}),(0,h.jsx)(p,{...e}),(0,h.jsx)(p,{...e}),(0,h.jsx)(p,{...e})]})},S={name:`programatically handle`,render:e=>{let t=(0,m.useRef)(null);return(0,m.useEffect)(()=>{t.current?.open()},[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i,{variant:`link`,type:`button`,onClick:()=>t.current?.open(),children:`open`}),(0,h.jsxs)(c,{...e,ref:t,render:e=>(0,h.jsx)(`span`,{...e,children:`show`}),children:[(0,h.jsx)(`p`,{children:`hello world!`}),(0,h.jsx)(i,{variant:`link`,type:`button`,onClick:()=>t.current?.close(),children:`close me!`})]})]})}},C={name:`clickable parent`,render:e=>{let[t,n]=(0,m.useState)(!1);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(`button`,{className:`hover:underline`,onClick:()=>n(!t),children:[(0,h.jsx)(`span`,{children:`parent button contents`}),(0,h.jsx)(`br`,{}),(0,h.jsx)(c,{...e,render:f,children:(0,h.jsx)(`p`,{children:`hello world`})})]}),t?(0,h.jsx)(`div`,{children:`oh no! your parent click event is triggered!`}):null]})}},w={name:`popover with tooltip`,render:e=>(0,h.jsx)(c,{...e,render:f,children:(0,h.jsx)(u,{label:`tooltip!`,render:e=>(0,h.jsx)(`p`,{...e,children:`Hello world!`})})})},T={name:`popover close manually`,render:e=>{let t=(0,m.useRef)(null);return(0,h.jsxs)(c,{ref:t,...e,render:f,onManualClose:d,children:[(0,h.jsx)(`p`,{children:`hello world`}),(0,h.jsx)(i,{type:`button`,onClick:()=>t.current?.close(),children:`close!`})]})}},E={name:`auto width`,render:e=>{let[t,n]=(0,m.useState)(100);return(0,h.jsx)(c,{...e,render:e=>(0,h.jsx)(i,{variant:`outline`,style:{width:`250px`},...e,children:`click me`}),onOpen:e=>{e&&n(e.getBoundingClientRect().width)},children:(0,h.jsx)(`p`,{style:{width:t},children:`hello world`})})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    textAlign: 'center'
  }}>
      <Popover {...args} render={Label}>
        <Button type="button" onClick={() => {
        alert('world!');
      }}>hello</Button>
        <p>hello world</p>
      </Popover>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
      }} render={Label}>
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [txt, setText] = useState('');
    const onChange = (e: any) => setText(e.target.value);
    return <Popover {...args} render={Label}>
        <TextInput value={txt} onChange={onChange} />
      </Popover>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'programatically handle',
  render: args => {
    const ref = useRef<PopoverRef | null>(null);
    useEffect(() => {
      ref.current?.open();
    }, []);
    return <>
        <Button variant="link" type="button" onClick={() => ref.current?.open()}>open</Button>
        <Popover {...args} ref={ref} render={props => <span {...props}>show</span>}>
          <p>hello world!</p>
          <Button variant="link" type="button" onClick={() => ref.current?.close()}>
            close me!
          </Button>
        </Popover>
      </>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'clickable parent',
  render: args => {
    const [clicked, setClicked] = useState(false);
    return <>
        <button className="hover:underline" onClick={() => setClicked(!clicked)}>
          <span>parent button contents</span><br />
          <Popover {...args} render={Label}>
            <p>hello world</p>
          </Popover>
        </button>
        {clicked ? <div>oh no! your parent click event is triggered!</div> : null}
      </>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'popover with tooltip',
  render: args => <Popover {...args} render={Label}>
      <Tooltip label="tooltip!" render={props => <p {...props}>Hello world!</p>} />
    </Popover>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'popover close manually',
  render: args => {
    const ref = useRef<PopoverRef>(null);
    return <Popover ref={ref} {...args} render={Label} onManualClose={noop}>
        <p>hello world</p>
        <Button type="button" onClick={() => ref.current?.close()}>
          close!
        </Button>
      </Popover>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'auto width',
  render: args => {
    const [width, setWidth] = useState(100);
    return <Popover {...args} render={props => <Button variant="outline" style={{
      width: '250px'
    }} {...props}>click me</Button>} onOpen={e => {
      if (!e) return;
      setWidth(e.getBoundingClientRect().width);
    }}>
        <p style={{
        width
      }}>hello world</p>
      </Popover>;
  }
}`,...E.parameters?.docs?.source}}}})))()}D();export{x as absoluteParent,y as autoPlacement,E as autoWidth,v as base,C as case5,_ as default,T as manualClose,S as program,w as tooltip,b as withInput};