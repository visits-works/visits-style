import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-BCtMShv3.js";import{T as s}from"./index-TcYn_Aps.js";import{B as n}from"./index-Cs83WvgL.js";import"./index-be2gUMhh.js";import"./index-B1k-hWqK.js";import"./index-D-fs5e6L.js";import"./useIsomorphicLayoutEffect-CpejqD76.js";import"./clsx-B-dksMZM.js";const k={title:"components/Tooltip",component:s,tags:["autodocs"],argTypes:{clientPoint:{defaultValue:!1},children:{control:!1}},args:{label:"Hello!!!",children:e.jsx("span",{children:"Hello world"}),clientPoint:!1,offset:{x:0,y:6},disabled:!1}},l={args:{label:"Hello!!!",children:e.jsx("span",{children:"Hello world"}),clientPoint:!1,offset:{x:0,y:6},disabled:!1}},t={render:()=>e.jsx("div",{style:{height:"120vh"},children:e.jsx(s,{label:"Hello!!!",children:e.jsx(n,{style:{position:"fixed",top:"50px"},children:"Hello world"})})})},r={render:()=>e.jsx(j,{})};function j(){const[o,a]=b.useState(0);return e.jsxs("div",{children:[e.jsx(s,{label:"tooltip1111",disabled:o<=0,children:e.jsx(n,{onClick:()=>a(o-1),disabled:o<=0,children:"button 1"})}),e.jsx(s,{label:"tooltip2222",children:e.jsx(n,{onClick:()=>a(o+1),disabled:o>5,children:"button 2"})})]})}var i,d,c;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(d=l.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var f,x,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Multiple />
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};export{t as absolute,k as default,r as multiple,l as tooltip};
