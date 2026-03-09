"use client";
import{j as e}from"./iframe-xpODeKre.js";import{B as n}from"./Button-BwOKmFUz.js";import{M as o}from"./Modal-ozPe6owo.js";import"./preload-helper-CYfZjOYs.js";import"./colorContrast-C0ZIkquj.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-DumaUFqK.js";import"./useUIColor-rs1v8CsH.js";import"./useReducedMotion-yld6s6eX.js";const u={component:o,title:"System/Modal",argTypes:{width:{control:{type:"radio"},options:["sm","md","lg"]}}},r={args:{width:"md"},render:s=>e.jsx("div",{className:"cs:h-full",children:e.jsxs(o,{...s,children:[e.jsx(o.Header,{children:"Modal"}),e.jsx(o.Body,{children:"Sample modal body sentencse."}),e.jsx(o.Footer,{children:e.jsxs("div",{className:"cs:flex cs:gap-2",children:[e.jsx(n,{variant:"secondary",children:"Cancel"}),e.jsx(n,{children:"Confirm"})]})})]})})},a={parameters:{viewport:{defaultViewport:"mobile"}},render:()=>e.jsxs(o,{width:"md",children:[e.jsx(o.Header,{children:"Mobile View"}),e.jsx(o.Body,{children:"On mobile, the modal displays in fullscreen. Scroll lock is also enabled."}),e.jsx(o.Footer,{children:e.jsxs("div",{className:"cs:flex cs:gap-2",children:[e.jsx(n,{variant:"secondary",children:"Cancel"}),e.jsx(n,{children:"Confirm"})]})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    width: "md"
  },
  render: args => <div className="cs:h-full">
      <Modal {...args}>
        <Modal.Header>Modal</Modal.Header>
        <Modal.Body>Sample modal body sentencse.</Modal.Body>
        <Modal.Footer>
          <div className="cs:flex cs:gap-2">
            <Button variant="secondary">Cancel</Button>
            <Button>Confirm</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile"
    }
  },
  render: () => <Modal width="md">
      <Modal.Header>Mobile View</Modal.Header>
      <Modal.Body>
        On mobile, the modal displays in fullscreen. Scroll lock is also enabled.
      </Modal.Body>
      <Modal.Footer>
        <div className="cs:flex cs:gap-2">
          <Button variant="secondary">Cancel</Button>
          <Button>Confirm</Button>
        </div>
      </Modal.Footer>
    </Modal>
}`,...a.parameters?.docs?.source}}};const x=["Primary","Mobile"];export{a as Mobile,r as Primary,x as __namedExportsOrder,u as default};
