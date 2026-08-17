import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Base-CVEPMVTs.js";import{i as a,n as o,r as s,t as c}from"./FormField-BZUbfdPB.js";function l({checked:e,className:t,id:n,name:r,onChange:a,value:o,error:s,...c}){let l=()=>{c.disabled||a?.(!e)};return(0,u.jsxs)(i,{as:`button`,type:`button`,role:`radio`,id:n||r,classList:[`relative inline-flex justify-center items-center border w-4.5 h-4.5 rounded-full`,`cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed not-disabled:hover:border-input-fore`,s?`border-danger`:`border-input`,e?`[&_i]:bg-primary disabled:[&_i]:bg-text disabled:border-input`:``],className:t,onClick:l,"aria-checked":e,...c,children:[(0,u.jsx)(`i`,{className:`block w-2.5 h-2.5 rounded-full transition-transform`,style:{transform:e?``:`scale(0.8)`,opacity:+!!e}}),(0,u.jsx)(`input`,{type:`radio`,"aria-hidden":`true`,name:r,checked:e,value:o,onChange:l,disabled:c.disabled,style:{position:`absolute`,pointerEvents:`none`,top:0,left:0,width:1,height:1,opacity:0}})]})}var u;function d(){return(d=e((()=>{r(),u=n(),l.__docgenInfo={description:``,methods:[],displayName:`Radio`,props:{error:{required:!1,tsType:{name:`boolean`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``},checked:{required:!1,tsType:{name:`boolean`},description:``},name:{required:!1,tsType:{name:`string`},description:`idが未指定の場合、nameが代わりに使われます`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:``}},composes:[`Omit`]}})))()}function f({name:e,className:t,value:n,options:r,onChange:i,disabled:a}){return(0,p.jsx)(`div`,{role:`radiogroup`,className:t,children:r.map(t=>{let r=`radio_${e||`unknown`}_${t.id}`;return(0,p.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,p.jsx)(l,{id:r,checked:t.id===n,onChange:()=>i(t.id),disabled:a}),(0,p.jsx)(s,{htmlFor:r,children:t.label})]},r)})})}var p;function m(){return(m=e((()=>{d(),a(),p=n(),f.__docgenInfo={description:``,methods:[],displayName:`RadioGroup`,props:{className:{required:!1,tsType:{name:`string`},description:``},name:{required:!1,tsType:{name:`string`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},value:{required:!0,tsType:{name:`T`},description:``},options:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ id: NonNullable<T>; label: ReactNode; }`,signature:{properties:[{key:`id`,value:{name:`NonNullable`,elements:[{name:`T`}],raw:`NonNullable<T>`,required:!0}},{key:`label`,value:{name:`ReactNode`,required:!0}}]}}],raw:`Array<{ id: NonNullable<T>; label: ReactNode; }>`},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: T) => void`,signature:{arguments:[{type:{name:`T`},name:`value`}],return:{name:`void`}}},description:``}}}})))()}var h,g,_,v,y;function b(){return(b=e((()=>{h=t(),d(),m(),o(),a(),g=n(),_={title:`forms/Radio`,component:l,tags:[`autodocs`]},v={render:e=>(0,g.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,g.jsx)(l,{id:`radio`,...e}),(0,g.jsx)(s,{htmlFor:`radio`,children:`Radio Label`})]}),args:{name:`test1`,value:1,checked:!1,disabled:!1}},y={render:e=>{let[t,n]=(0,h.useState)(`1`);return(0,g.jsx)(c,{label:`Radio Group Example`,help:`Here is example for Radio group`,helpBefore:!0,children:(0,g.jsx)(f,{name:e.name,disabled:e.disabled,className:`space-y-2`,value:t,onChange:n,options:[{id:`1`,label:`Radio1`},{id:`2`,label:`Radio2`},{id:`3`,label:`Radio3`}]})})},args:{name:`test1`,disabled:!1},argTypes:{children:{control:!1},checked:{control:!1}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex items-center space-x-2">
      <Radio id="radio" {...args} />
      <FormLabel htmlFor="radio">Radio Label</FormLabel>
    </div>,
  args: {
    name: 'test1',
    value: 1,
    checked: false,
    disabled: false
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | null>('1');
    return <FormField label="Radio Group Example" help="Here is example for Radio group" helpBefore>
        <RadioGroup name={args.name} disabled={args.disabled} className="space-y-2" value={value} onChange={setValue} options={[{
        id: '1',
        label: 'Radio1'
      }, {
        id: '2',
        label: 'Radio2'
      }, {
        id: '3',
        label: 'Radio3'
      }]} />
      </FormField>;
  },
  args: {
    name: 'test1',
    disabled: false
  },
  argTypes: {
    children: {
      control: false
    },
    checked: {
      control: false
    }
  }
}`,...y.parameters?.docs?.source}}}})))()}b();export{v as base,_ as default,y as radioGroup};