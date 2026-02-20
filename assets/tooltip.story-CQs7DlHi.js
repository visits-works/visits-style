import{j as e,r as a}from"./iframe-0g5upUOQ.js";import{T as s}from"./index-3R8GdRmR.js";import{B as n}from"./index--tsiBSLu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-By58NTpo.js";import"./index-C0ACPl1L.js";import"./index-DisBLnkc.js";import"./useIsomorphicLayoutEffect-DRNWegQV.js";import"./clsx-B-dksMZM.js";import"./merge-CR_vCDaS.js";const H={title:"components/Tooltip",component:s,tags:["autodocs"],argTypes:{clientPoint:{defaultValue:!1},children:{control:!1}},args:{label:"Hello!!!",children:e.jsx("span",{children:"Hello world"}),clientPoint:!1,offset:{x:0,y:6},disabled:!1}},l={args:{label:"Hello!!!",children:e.jsx("span",{children:"Hello world"}),clientPoint:!1,offset:{x:0,y:6},disabled:!1}},t={render:()=>e.jsx("div",{style:{height:"120vh"},children:e.jsx(s,{label:"Hello!!!",children:e.jsx(n,{style:{position:"fixed",top:"50px"},children:"Hello world"})})})},r={render:()=>e.jsx(d,{})};function d(){const[o,i]=a.useState(0);return e.jsxs("div",{children:[e.jsx(s,{label:"tooltip1111",disabled:o<=0,children:e.jsx(n,{onClick:()=>i(o-1),disabled:o<=0,children:"button 1"})}),e.jsx(s,{label:"tooltip2222",children:e.jsx(n,{onClick:()=>i(o+1),disabled:o>5,children:"button 2"})})]})}l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
