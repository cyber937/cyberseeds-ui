"use client";
import{j as e}from"./iframe-m5NElw2l.js";import{A as r}from"./Alert-DHW9CHy0.js";import"./preload-helper-CYfZjOYs.js";import"./clsx-BYFsuUQf.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-DumaUFqK.js";import"./useUIColor-BQPT7-YU.js";const h={component:r,title:"Feedback/Alert",tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["info","success","warning","error"]},scale:{control:{type:"radio"},options:["xs","sm","md","lg"]}}},a={args:{variant:"info",scale:"md",children:"This is a notification."}},s={render:()=>e.jsxs("div",{className:"cs:space-y-3",children:[e.jsx(r,{variant:"info",children:"Info: System maintenance is scheduled."}),e.jsx(r,{variant:"success",children:"Success: Data has been saved successfully."}),e.jsx(r,{variant:"warning",children:"Warning: Storage capacity is running low."}),e.jsx(r,{variant:"error",children:"Error: Network connection failed."})]})},n={render:()=>e.jsxs("div",{className:"cs:space-y-3",children:[e.jsx(r,{variant:"info",title:"Notice",children:"System maintenance is scheduled."}),e.jsx(r,{variant:"success",title:"Complete",children:"Data has been saved successfully."}),e.jsx(r,{variant:"warning",title:"Caution",children:"Storage capacity is running low."}),e.jsx(r,{variant:"error",title:"Error",children:"Network connection failed. Please try again."})]})},t={render:()=>e.jsxs("div",{className:"cs:space-y-3",children:[e.jsx(r,{variant:"info",closable:!0,onClose:()=>alert("Closed"),children:"This is a closable alert."}),e.jsx(r,{variant:"error",title:"Error",closable:!0,onClose:()=>alert("Closed"),children:"This is a closable alert with a title."})]})},i={render:()=>e.jsxs("div",{className:"cs:space-y-3",children:[e.jsx(r,{variant:"info",scale:"xs",children:"Extra Small (xs)"}),e.jsx(r,{variant:"info",scale:"sm",children:"Small (sm)"}),e.jsx(r,{variant:"info",scale:"md",children:"Medium (md)"}),e.jsx(r,{variant:"info",scale:"lg",children:"Large (lg)"})]})},l={render:()=>e.jsxs("div",{className:"cs:space-y-3",children:[e.jsx(r,{variant:"info",icon:!1,children:"Alert without an icon."}),e.jsx(r,{variant:"error",icon:!1,title:"Error",children:"No icon + with title."})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    scale: "md",
    children: "This is a notification."
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-3">
      <Alert variant="info">Info: System maintenance is scheduled.</Alert>
      <Alert variant="success">Success: Data has been saved successfully.</Alert>
      <Alert variant="warning">Warning: Storage capacity is running low.</Alert>
      <Alert variant="error">Error: Network connection failed.</Alert>
    </div>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-3">
      <Alert variant="info" closable onClose={() => alert("Closed")}>
        This is a closable alert.
      </Alert>
      <Alert variant="error" title="Error" closable onClose={() => alert("Closed")}>
        This is a closable alert with a title.
      </Alert>
    </div>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-3">
      <Alert variant="info" scale="xs">Extra Small (xs)</Alert>
      <Alert variant="info" scale="sm">Small (sm)</Alert>
      <Alert variant="info" scale="md">Medium (md)</Alert>
      <Alert variant="info" scale="lg">Large (lg)</Alert>
    </div>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-3">
      <Alert variant="info" icon={false}>Alert without an icon.</Alert>
      <Alert variant="error" icon={false} title="Error">
        No icon + with title.
      </Alert>
    </div>
}`,...l.parameters?.docs?.source}}};const f=["Default","Variants","WithTitle","Closable","Scales","WithoutIcon"];export{t as Closable,a as Default,i as Scales,s as Variants,n as WithTitle,l as WithoutIcon,f as __namedExportsOrder,h as default};
