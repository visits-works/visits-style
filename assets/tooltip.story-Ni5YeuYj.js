import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Button-BB2x9rOV.js";import{n as a,t as o}from"./Tooltip-_tRHJmZd.js";function s(){let[e,t]=(0,c.useState)(0);return(0,l.jsxs)(`div`,{children:[(0,l.jsx)(o,{label:`tooltip1111`,disabled:e<=0,children:(0,l.jsx)(i,{onClick:()=>t(e-1),disabled:e<=0,children:`button 1`})}),(0,l.jsx)(o,{label:`tooltip2222`,children:(0,l.jsx)(i,{onClick:()=>t(e+1),disabled:e>5,children:`button 2`})})]})}var c,l,u,d,f,p;function m(){return(m=e((()=>{c=t(),a(),r(),l=n(),u={title:`components/Tooltip`,component:o,tags:[`autodocs`],argTypes:{clientPoint:{defaultValue:!1},children:{control:!1}},args:{label:`Hello!!!`,children:(0,l.jsx)(`span`,{children:`Hello world`}),clientPoint:!1,offset:{x:0,y:6},disabled:!1}},d={args:{label:`Hello!!!`,children:(0,l.jsx)(`span`,{children:`Hello world`}),clientPoint:!1,offset:{x:0,y:6},disabled:!1}},f={render:()=>(0,l.jsx)(`div`,{style:{height:`120vh`},children:(0,l.jsx)(o,{label:`Hello!!!`,children:(0,l.jsx)(i,{style:{position:`fixed`,top:`50px`},children:`Hello world`})})})},p={render:()=>(0,l.jsx)(s,{})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Hello!!!',
    children: <span>Hello world</span>,
    clientPoint: false,
    offset: {
      x: 0,
      y: 6
    },
    disabled: false
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      height: '120vh'
    }}>
        <Tooltip label="Hello!!!">
          <Button style={{
          position: 'fixed',
          top: '50px'
        }}>Hello world</Button>
        </Tooltip>
      </div>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Multiple />
}`,...p.parameters?.docs?.source}}}})))()}m();export{f as absolute,u as default,p as multiple,d as tooltip};