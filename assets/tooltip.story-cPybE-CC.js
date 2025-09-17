import{j as e,r as a}from"./iframe-C9DRP0Ve.js";import{T as s}from"./index-C9XJv-RR.js";import{B as n}from"./index-ai6LrXIN.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CcYuK7si.js";import"./index-D6dqS53r.js";import"./index-Blk7Kv1J.js";import"./useIsomorphicLayoutEffect-CDYSGN2L.js";import"./clsx-B-dksMZM.js";import"./merge-0FHwH-zM.js";const H={title:"components/Tooltip",component:s,tags:["autodocs"],argTypes:{clientPoint:{defaultValue:!1},children:{control:!1}},args:{label:"Hello!!!",children:e.jsx("span",{children:"Hello world"}),clientPoint:!1,offset:{x:0,y:6},disabled:!1}},l={args:{label:"Hello!!!",children:e.jsx("span",{children:"Hello world"}),clientPoint:!1,offset:{x:0,y:6},disabled:!1}},t={render:()=>e.jsx("div",{style:{height:"120vh"},children:e.jsx(s,{label:"Hello!!!",children:e.jsx(n,{style:{position:"fixed",top:"50px"},children:"Hello world"})})})},r={render:()=>e.jsx(d,{})};function d(){const[o,i]=a.useState(0);return e.jsxs("div",{children:[e.jsx(s,{label:"tooltip1111",disabled:o<=0,children:e.jsx(n,{onClick:()=>i(o-1),disabled:o<=0,children:"button 1"})}),e.jsx(s,{label:"tooltip2222",children:e.jsx(n,{onClick:()=>i(o+1),disabled:o>5,children:"button 2"})})]})}l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};export{t as absolute,H as default,r as multiple,l as tooltip};
