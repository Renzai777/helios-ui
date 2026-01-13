import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-D8VJq6pO.js";import"./preload-helper-PPVm8Dsz.js";function a({variant:i="primary",size:l="md",loading:o=!1,disabled:d=!1,children:c,onClick:u}){const m=["hls-button",`hls-button--${i}`,`hls-button--${l}`,o?"hls-button--loading":""].join(" ");return e.jsx("button",{className:m,disabled:d||o,onClick:u,children:o?"...":c})}a.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'danger' | 'ghost'| 'success'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'success'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const v={title:"Components/Button",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","danger","ghost","success"]},size:{control:"select",options:["sm","md","lg"]}}},r={args:{variant:"primary",children:"Primary Button"}},t={args:{variant:"secondary",children:"Secondary Button"}},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"success",children:"Success"}),e.jsx(a,{variant:"danger",children:"Danger"}),e.jsx(a,{variant:"ghost",children:"Ghost"}),e.jsx(a,{disabled:!0,children:"Disabled"}),e.jsx(a,{loading:!0,children:"Loading"})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(a,{size:"sm",children:"Small"}),e.jsx(a,{size:"md",children:"Medium"}),e.jsx(a,{size:"lg",children:"Large"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap'
  }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="ghost">Ghost</Button>
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
      </div>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '10px'
  }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
}`,...n.parameters?.docs?.source}}};const h=["Primary","Secondary","Variants","Sizes"];export{r as Primary,t as Secondary,n as Sizes,s as Variants,h as __namedExportsOrder,v as default};
