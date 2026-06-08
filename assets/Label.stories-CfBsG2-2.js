"use client";
import{j as e}from"./iframe-B1uMaBYR.js";import{L as r}from"./Label-DhXzDgbm.js";import"./preload-helper-CJpEdZxZ.js";import"./clsx-BYFsuUQf.js";const h={component:r,title:"System/Label",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},require:{control:{type:"boolean"}},text:{control:{type:"text"}}}},s={args:{text:"Email address"}},a={args:{text:"Password",require:!0}},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[e.jsx(r,{scale:"xs",text:"Extra small (xs)"}),e.jsx(r,{scale:"sm",text:"Small (sm)"}),e.jsx(r,{scale:"md",text:"Medium (md)"}),e.jsx(r,{scale:"lg",text:"Large (lg)"})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.25rem"},children:[e.jsx(r,{htmlFor:"email-field",text:"Email address",require:!0}),e.jsx("input",{id:"email-field",type:"email",placeholder:"user@example.com",style:{border:"1px solid #cbd5e1",borderRadius:"0.375rem",padding:"0.375rem 0.5rem"}})]})};var o,d,i;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    text: "Email address"
  }
}`,...(i=(d=s.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,n,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: "Password",
    require: true
  }
}`,...(c=(n=a.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,x,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem"
  }}>
      <Label scale="xs" text="Extra small (xs)" />
      <Label scale="sm" text="Small (sm)" />
      <Label scale="md" text="Medium (md)" />
      <Label scale="lg" text="Large (lg)" />
    </div>
}`,...(u=(x=t.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var g,f,y;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem"
  }}>
      <Label htmlFor="email-field" text="Email address" require />
      <input id="email-field" type="email" placeholder="user@example.com" style={{
      border: "1px solid #cbd5e1",
      borderRadius: "0.375rem",
      padding: "0.375rem 0.5rem"
    }} />
    </div>
}`,...(y=(f=l.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const E=["Default","Required","Scales","AssociatedWithInput"];export{l as AssociatedWithInput,s as Default,a as Required,t as Scales,E as __namedExportsOrder,h as default};
