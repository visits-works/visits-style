import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Button-BB2x9rOV.js";import{n as a,t as o}from"./Input-DvpuKwA-.js";import{n as s,t as c}from"./Popover-BKthXk5M.js";import{n as l,t as u}from"./Tooltip-_tRHJmZd.js";function d(){}function f(e){let[t,n]=(0,p.useState)(!1);return(0,m.jsx)(`div`,{onPointerOver:()=>n(!0),onPointerLeave:()=>n(!1),style:{position:`relative`,width:`40vw`,height:`20vh`,background:`#eee`,marginBottom:3},children:t&&(0,m.jsx)(`div`,{style:{position:`absolute`,right:4,top:0,transform:`translateY(100%)`,zIndex:10},children:(0,m.jsx)(c,{...e,label:(0,m.jsx)(i,{variant:`ghost`,type:`button`,children:`button!`}),children:`hello world!`})})})}var p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{p=t(),s(),l(),r(),a(),m=n(),h=[`auto`,`top`,`left`,`right`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`],g={title:`components/Popover`,component:c,tags:[`autodocs`],argTypes:{label:{control:!1},children:{control:!1},offset:{defaultValue:{x:0,y:6}}},parameters:{control:{position:h}}},_=(0,m.jsx)(i,{variant:`outline`,type:`button`,children:`show`}),v={render:e=>(0,m.jsx)(`div`,{style:{textAlign:`center`},children:(0,m.jsxs)(c,{...e,label:_,children:[(0,m.jsx)(i,{type:`button`,onClick:()=>{alert(`world!`)},children:`hello`}),(0,m.jsx)(`p`,{children:`hello world`})]})})},y={name:`auto placement on scroll`,render:e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`div`,{style:{width:`50px`,height:`80vh`}}),(0,m.jsx)(`div`,{style:{textAlign:`center`},children:(0,m.jsxs)(c,{...e,style:{padding:50},label:_,children:[(0,m.jsx)(`button`,{type:`button`,onClick:()=>{alert(`world!`)},children:`hello`}),(0,m.jsx)(`p`,{children:`hello world`})]})}),(0,m.jsx)(`div`,{style:{width:`50px`,height:`80vh`}})]})},b={render:e=>{let[t,n]=(0,p.useState)(``),r=e=>n(e.target.value);return(0,m.jsx)(c,{...e,label:_,children:(0,m.jsx)(o,{value:t,onChange:r})})}},x={name:`reference button with absolute position`,render:e=>(0,m.jsxs)(`div`,{style:{maxHeight:`80vh`,overflowY:`auto`},children:[(0,m.jsx)(f,{...e}),(0,m.jsx)(f,{...e}),(0,m.jsx)(f,{...e}),(0,m.jsx)(f,{...e}),(0,m.jsx)(f,{...e}),(0,m.jsx)(f,{...e})]})},S={name:`programatically handle`,render:e=>{let t=(0,p.useRef)(null);return(0,p.useEffect)(()=>{t.current?.open()},[]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{variant:`link`,type:`button`,onClick:()=>t.current?.open(),children:`open`}),(0,m.jsxs)(c,{...e,ref:t,label:(0,m.jsx)(`span`,{children:`show`}),children:[(0,m.jsx)(`p`,{children:`hello world!`}),(0,m.jsx)(i,{variant:`link`,type:`button`,onClick:()=>t.current?.close(),children:`close me!`})]})]})}},C={name:`clickable parent`,render:e=>{let[t,n]=(0,p.useState)(!1);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`button`,{className:`hover:underline`,onClick:()=>n(!t),children:[(0,m.jsx)(`span`,{children:`parent button contents`}),(0,m.jsx)(`br`,{}),(0,m.jsx)(c,{...e,label:_,children:(0,m.jsx)(`p`,{children:`hello world`})})]}),t?(0,m.jsx)(`div`,{children:`oh no! your parent click event is triggered!`}):null]})}},w={name:`popover with tooltip`,render:e=>(0,m.jsx)(c,{...e,label:_,children:(0,m.jsx)(u,{label:`tooltip!`,children:(0,m.jsx)(`p`,{children:`hello world`})})})},T={name:`popover close manually`,render:e=>{let t=(0,p.useRef)(null);return(0,m.jsxs)(c,{ref:t,...e,label:_,onManualClose:d,children:[(0,m.jsx)(`p`,{children:`hello world`}),(0,m.jsx)(i,{type:`button`,onClick:()=>t.current?.close(),children:`close!`})]})}},E={name:`auto width`,render:e=>{let[t,n]=(0,p.useState)(100);return(0,m.jsx)(c,{...e,label:(0,m.jsx)(i,{variant:`outline`,style:{width:`250px`},children:`click me`}),onOpen:e=>{e&&n(e.getBoundingClientRect().width)},children:(0,m.jsx)(`p`,{style:{width:t},children:`hello world`})})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [txt, setText] = useState('');
    const onChange = (e: any) => setText(e.target.value);
    return <Popover {...args} label={Label}>
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
        <Popover {...args} ref={ref} label={<span>show</span>}>
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
          <Popover {...args} label={Label}>
            <p>hello world</p>
          </Popover>
        </button>
        {clicked ? <div>oh no! your parent click event is triggered!</div> : null}
      </>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'popover with tooltip',
  render: args => <Popover {...args} label={Label}>
      <Tooltip label="tooltip!">
        <p>hello world</p>
      </Tooltip>
    </Popover>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'popover close manually',
  render: args => {
    const ref = useRef<PopoverRef>(null);
    return <Popover ref={ref} {...args} label={Label} onManualClose={noop}>
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
}`,...E.parameters?.docs?.source}}}})))()}D();export{x as absoluteParent,y as autoPlacement,E as autoWidth,v as base,C as case5,g as default,T as manualClose,S as program,w as tooltip,b as withInput};