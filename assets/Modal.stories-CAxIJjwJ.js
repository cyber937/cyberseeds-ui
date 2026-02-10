"use client";
import{j as o}from"./iframe-DszvCNP2.js";import{B as e}from"./Button-CkG6xyYf.js";import{M as r}from"./Modal-VWMkV9hv.js";import"./preload-helper-CJpEdZxZ.js";import"./colorMap-B4H6m5kb.js";import"./colorContrast-C0ZIkquj.js";import"./colorUtils-BF1Ih5IA.js";import"./designTokens-oNQ9a2iE.js";import"./useUIColor-_6l39SGF.js";import"./useReducedMotion-kwYuX--b.js";const j={component:r,title:"System/Modal",argTypes:{width:{control:{type:"radio"},options:["sm","md","lg"]}}},a={args:{width:"md"},render:n=>o.jsx("div",{className:"cs:h-full",children:o.jsxs(r,{...n,children:[o.jsx(r.Header,{children:"Modal"}),o.jsx(r.Body,{children:"Sample modal body sentencse."}),o.jsx(r.Footer,{children:o.jsxs("div",{className:"cs:flex cs:gap-2",children:[o.jsx(e,{variant:"secondary",children:"キャンセル"}),o.jsx(e,{children:"確定"})]})})]})})};var s,d,t;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(t=(d=a.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};const g=["Primary"];export{a as Primary,g as __namedExportsOrder,j as default};
