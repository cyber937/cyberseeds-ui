"use client";
import{j as e}from"./iframe-BH6SszEl.js";import{A as r}from"./Alert-N2-D7Pn0.js";import"./preload-helper-CJpEdZxZ.js";import"./clsx-BYFsuUQf.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-DumaUFqK.js";import"./useUIColor-ByGmMwax.js";const L={component:r,title:"Feedback/Alert",tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["info","success","warning","error"]},scale:{control:{type:"radio"},options:["xs","sm","md","lg"]}}},a={args:{variant:"info",scale:"md",children:"This is a notification."}},s={render:()=>e.jsxs("div",{className:"cs:space-y-3",children:[e.jsx(r,{variant:"info",children:"Info: System maintenance is scheduled."}),e.jsx(r,{variant:"success",children:"Success: Data has been saved successfully."}),e.jsx(r,{variant:"warning",children:"Warning: Storage capacity is running low."}),e.jsx(r,{variant:"error",children:"Error: Network connection failed."})]})},n={render:()=>e.jsxs("div",{className:"cs:space-y-3",children:[e.jsx(r,{variant:"info",title:"Notice",children:"System maintenance is scheduled."}),e.jsx(r,{variant:"success",title:"Complete",children:"Data has been saved successfully."}),e.jsx(r,{variant:"warning",title:"Caution",children:"Storage capacity is running low."}),e.jsx(r,{variant:"error",title:"Error",children:"Network connection failed. Please try again."})]})},t={render:()=>e.jsxs("div",{className:"cs:space-y-3",children:[e.jsx(r,{variant:"info",closable:!0,onClose:()=>alert("Closed"),children:"This is a closable alert."}),e.jsx(r,{variant:"error",title:"Error",closable:!0,onClose:()=>alert("Closed"),children:"This is a closable alert with a title."})]})},i={render:()=>e.jsxs("div",{className:"cs:space-y-3",children:[e.jsx(r,{variant:"info",scale:"xs",children:"Extra Small (xs)"}),e.jsx(r,{variant:"info",scale:"sm",children:"Small (sm)"}),e.jsx(r,{variant:"info",scale:"md",children:"Medium (md)"}),e.jsx(r,{variant:"info",scale:"lg",children:"Large (lg)"})]})},l={render:()=>e.jsxs("div",{className:"cs:space-y-3",children:[e.jsx(r,{variant:"info",icon:!1,children:"Alert without an icon."}),e.jsx(r,{variant:"error",icon:!1,title:"Error",children:"No icon + with title."})]})};var c,o,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: "info",
    scale: "md",
    children: "This is a notification."
  }
}`,...(d=(o=a.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var m,p,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-3">
      <Alert variant="info">Info: System maintenance is scheduled.</Alert>
      <Alert variant="success">Success: Data has been saved successfully.</Alert>
      <Alert variant="warning">Warning: Storage capacity is running low.</Alert>
      <Alert variant="error">Error: Network connection failed.</Alert>
    </div>
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var v,h,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-3">
      <Alert variant="info" title="Notice">
        System maintenance is scheduled.
      </Alert>
      <Alert variant="success" title="Complete">
        Data has been saved successfully.
      </Alert>
      <Alert variant="warning" title="Caution">
        Storage capacity is running low.
      </Alert>
      <Alert variant="error" title="Error">
        Network connection failed. Please try again.
      </Alert>
    </div>
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var A,g,x;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-3">
      <Alert variant="info" closable onClose={() => alert("Closed")}>
        This is a closable alert.
      </Alert>
      <Alert variant="error" title="Error" closable onClose={() => alert("Closed")}>
        This is a closable alert with a title.
      </Alert>
    </div>
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,j,S;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-3">
      <Alert variant="info" scale="xs">Extra Small (xs)</Alert>
      <Alert variant="info" scale="sm">Small (sm)</Alert>
      <Alert variant="info" scale="md">Medium (md)</Alert>
      <Alert variant="info" scale="lg">Large (lg)</Alert>
    </div>
}`,...(S=(j=i.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var w,N,b;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-3">
      <Alert variant="info" icon={false}>Alert without an icon.</Alert>
      <Alert variant="error" icon={false} title="Error">
        No icon + with title.
      </Alert>
    </div>
}`,...(b=(N=l.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};const M=["Default","Variants","WithTitle","Closable","Scales","WithoutIcon"];export{t as Closable,a as Default,i as Scales,s as Variants,n as WithTitle,l as WithoutIcon,M as __namedExportsOrder,L as default};
