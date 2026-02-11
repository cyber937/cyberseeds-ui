"use client";
import{j as e}from"./iframe-DGUMRchz.js";import{B as d}from"./Button-BWuoWopC.js";import{M as o}from"./Modal-D9SvQbfS.js";import"./preload-helper-CJpEdZxZ.js";import"./colorContrast-C0ZIkquj.js";import"./colorUtils-D-K_anEj.js";import"./designTokens-DumaUFqK.js";import"./useUIColor-BVWDqBP4.js";import"./useReducedMotion-C25btt_a.js";const f={component:o,title:"System/Modal",argTypes:{width:{control:{type:"radio"},options:["sm","md","lg"]}}},r={args:{width:"md"},render:m=>e.jsx("div",{className:"cs:h-full",children:e.jsxs(o,{...m,children:[e.jsx(o.Header,{children:"Modal"}),e.jsx(o.Body,{children:"Sample modal body sentencse."}),e.jsx(o.Footer,{children:e.jsxs("div",{className:"cs:flex cs:gap-2",children:[e.jsx(d,{variant:"secondary",children:"キャンセル"}),e.jsx(d,{children:"確定"})]})})]})})},a={parameters:{viewport:{defaultViewport:"mobile"}},render:()=>e.jsxs(o,{width:"md",children:[e.jsx(o.Header,{children:"モバイル表示"}),e.jsx(o.Body,{children:"モバイルではフルスクリーン表示になります。スクロールロックも有効です。"}),e.jsx(o.Footer,{children:e.jsxs("div",{className:"cs:flex cs:gap-2",children:[e.jsx(d,{variant:"secondary",children:"キャンセル"}),e.jsx(d,{children:"確定"})]})})]})};var s,n,t;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    width: "md"
  },
  render: args => <div className="cs:h-full">
      <Modal {...args}>
        <Modal.Header>Modal</Modal.Header>
        <Modal.Body>Sample modal body sentencse.</Modal.Body>
        <Modal.Footer>
          <div className="cs:flex cs:gap-2">
            <Button variant="secondary">キャンセル</Button>
            <Button>確定</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
}`,...(t=(n=r.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var l,i,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile"
    }
  },
  render: () => <Modal width="md">
      <Modal.Header>モバイル表示</Modal.Header>
      <Modal.Body>
        モバイルではフルスクリーン表示になります。スクロールロックも有効です。
      </Modal.Body>
      <Modal.Footer>
        <div className="cs:flex cs:gap-2">
          <Button variant="secondary">キャンセル</Button>
          <Button>確定</Button>
        </div>
      </Modal.Footer>
    </Modal>
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const g=["Primary","Mobile"];export{a as Mobile,r as Primary,g as __namedExportsOrder,f as default};
