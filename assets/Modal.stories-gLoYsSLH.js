"use client";
import{j as e}from"./iframe-BH6SszEl.js";import{B as n}from"./Button-9ovrN6Dk.js";import{M as o}from"./Modal-yCClJCge.js";import"./preload-helper-CJpEdZxZ.js";import"./colorContrast-C0ZIkquj.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-DumaUFqK.js";import"./useUIColor-ByGmMwax.js";import"./useReducedMotion-CvkFFLcm.js";const v={component:o,title:"System/Modal",argTypes:{width:{control:{type:"radio"},options:["sm","md","lg"]}}},r={args:{width:"md"},render:m=>e.jsx("div",{className:"cs:h-full",children:e.jsxs(o,{...m,children:[e.jsx(o.Header,{children:"Modal"}),e.jsx(o.Body,{children:"Sample modal body sentencse."}),e.jsx(o.Footer,{children:e.jsxs("div",{className:"cs:flex cs:gap-2",children:[e.jsx(n,{variant:"secondary",children:"Cancel"}),e.jsx(n,{children:"Confirm"})]})})]})})},a={parameters:{viewport:{defaultViewport:"mobile"}},render:()=>e.jsxs(o,{width:"md",children:[e.jsx(o.Header,{children:"Mobile View"}),e.jsx(o.Body,{children:"On mobile, the modal displays in fullscreen. Scroll lock is also enabled."}),e.jsx(o.Footer,{children:e.jsxs("div",{className:"cs:flex cs:gap-2",children:[e.jsx(n,{variant:"secondary",children:"Cancel"}),e.jsx(n,{children:"Confirm"})]})})]})};var s,d,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var t,i,c;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const b=["Primary","Mobile"];export{a as Mobile,r as Primary,b as __namedExportsOrder,v as default};
