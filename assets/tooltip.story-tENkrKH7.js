import{j as e,r as i}from"./iframe-BB4tf_El.js";import{T as s}from"./index-j6XuBxkH.js";import{B as n}from"./index-Dn7cIdJ8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CFrW7r58.js";import"./index-CrPQbQVo.js";import"./index-CDqGLqrx.js";import"./useIsomorphicLayoutEffect-CUC6N05y.js";import"./merge-DApEyPFe.js";const g={title:"components/Tooltip",component:s,tags:["autodocs"],argTypes:{clientPoint:{defaultValue:!1},children:{control:!1}},args:{label:"Hello!!!",children:e.jsx("span",{children:"Hello world"}),clientPoint:!1,offset:{x:0,y:6},disabled:!1}},l={args:{label:"Hello!!!",children:e.jsx("span",{children:"Hello world"}),clientPoint:!1,offset:{x:0,y:6},disabled:!1}},t={render:()=>e.jsx("div",{style:{height:"120vh"},children:e.jsx(s,{label:"Hello!!!",children:e.jsx(n,{style:{position:"fixed",top:"50px"},children:"Hello world"})})})},r={render:()=>e.jsx(d,{})};function d(){const[o,a]=i.useState(0);return e.jsxs("div",{children:[e.jsx(s,{label:"tooltip1111",disabled:o<=0,children:e.jsx(n,{onClick:()=>a(o-1),disabled:o<=0,children:"button 1"})}),e.jsx(s,{label:"tooltip2222",children:e.jsx(n,{onClick:()=>a(o+1),disabled:o>5,children:"button 2"})})]})}l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Multiple />
}`,...r.parameters?.docs?.source}}};export{t as absolute,g as default,r as multiple,l as tooltip};
