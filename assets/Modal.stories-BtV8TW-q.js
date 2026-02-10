"use client";
import{j as o}from"./iframe-Cwvb0Z0D.js";import{B as e}from"./Button-CxOaoCyA.js";import{M as r}from"./Modal-CTp35sl0.js";import"./preload-helper-CJpEdZxZ.js";import"./colorMap-EN3et11X.js";import"./colorUtils-B5Tad61Q.js";import"./useUIColor-BTIPPGSW.js";const M={component:r,title:"System/Modal",argTypes:{width:{control:{type:"radio"},options:["sm","md","lg"]}}},a={args:{width:"md"},render:t=>o.jsx("div",{className:"cs:h-full",children:o.jsxs(r,{...t,children:[o.jsx(r.Header,{children:"Modal"}),o.jsx(r.Body,{children:"Sample modal body sentencse."}),o.jsx(r.Footer,{children:o.jsxs("div",{className:"cs:flex cs:gap-2",children:[o.jsx(e,{variant:"secondary",children:"キャンセル"}),o.jsx(e,{children:"確定"})]})})]})})};var s,d,n;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(n=(d=a.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};const u=["Primary"];export{a as Primary,u as __namedExportsOrder,M as default};
