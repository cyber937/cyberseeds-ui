"use client";
import{j as e}from"./iframe-B1uMaBYR.js";import{B as n}from"./Button-Cm26qKpL.js";import{M as o}from"./Modal-BWmdz7Ok.js";import"./preload-helper-CJpEdZxZ.js";import"./colorContrast-C0ZIkquj.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-RbONob3D.js";import"./Slot-DzzAxQzI.js";import"./clsx-BYFsuUQf.js";import"./useUIColor-BB8pR0ej.js";import"./useFocusTrap-aMe0xNfH.js";import"./useReducedMotion-cB0DPO2D.js";const S={component:o,title:"System/Modal",argTypes:{width:{control:{type:"radio"},options:["sm","md","lg"]}}},r={args:{width:"md"},render:M=>e.jsx("div",{className:"cs:h-full",children:e.jsxs(o,{...M,children:[e.jsx(o.Header,{children:"Modal"}),e.jsx(o.Body,{children:"Sample modal body sentencse."}),e.jsx(o.Footer,{children:e.jsxs("div",{className:"cs:flex cs:gap-2",children:[e.jsx(n,{variant:"secondary",children:"Cancel"}),e.jsx(n,{children:"Confirm"})]})})]})})},s={parameters:{viewport:{defaultViewport:"mobile"}},render:()=>e.jsxs(o,{width:"md",children:[e.jsx(o.Header,{children:"Mobile View"}),e.jsx(o.Body,{children:"On mobile, the modal displays in fullscreen. Scroll lock is also enabled."}),e.jsx(o.Footer,{children:e.jsxs("div",{className:"cs:flex cs:gap-2",children:[e.jsx(n,{variant:"secondary",children:"Cancel"}),e.jsx(n,{children:"Confirm"})]})})]})},a={name:"Responsive width (per-breakpoint object)",render:()=>e.jsxs(o,{width:{base:"sm",md:"md",lg:"lg"},children:[e.jsx(o.Header,{children:"Responsive Modal"}),e.jsxs(o.Body,{children:["Pass ",e.jsx("code",{children:"width"})," as an object to map Tailwind breakpoints to named sizes. This modal is ",e.jsx("strong",{children:"sm"})," on mobile,"," ",e.jsx("strong",{children:"md"})," at md+ (≥ 768 px), and ",e.jsx("strong",{children:"lg"})," at lg+ (≥ 1024 px). Try resizing the viewport."]}),e.jsx(o.Footer,{children:e.jsx(n,{children:"OK"})})]})};var d,t,i;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(i=(t=r.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var l,c,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,h,x;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Responsive width (per-breakpoint object)",
  render: () => <Modal width={{
    base: "sm",
    md: "md",
    lg: "lg"
  }}>
      <Modal.Header>Responsive Modal</Modal.Header>
      <Modal.Body>
        Pass <code>width</code> as an object to map Tailwind breakpoints to
        named sizes. This modal is <strong>sm</strong> on mobile,{" "}
        <strong>md</strong> at md+ (≥ 768 px), and <strong>lg</strong> at lg+
        (≥ 1024 px). Try resizing the viewport.
      </Modal.Body>
      <Modal.Footer>
        <Button>OK</Button>
      </Modal.Footer>
    </Modal>
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const R=["Primary","Mobile","ResponsiveWidth"];export{s as Mobile,r as Primary,a as ResponsiveWidth,R as __namedExportsOrder,S as default};
