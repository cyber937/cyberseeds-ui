"use client";
import{j as a}from"./iframe-8uhpACiu.js";import{B as r}from"./Button-DUHAioCb.js";import{M as e}from"./Modal-k4d0UF8d.js";import"./useUIColor-gKLwgPHU.js";const p={component:e,title:"System/Modal",argTypes:{width:{control:{type:"radio"},options:["sm","md","lg"]}}},o={args:{width:"md"},render:t=>a.jsx("div",{className:"cs:h-full",children:a.jsxs(e,{...t,children:[a.jsx(e.Header,{children:"Modal"}),a.jsx(e.Body,{children:"Sample modal body sentencse."}),a.jsx(e.Footer,{children:a.jsxs("div",{className:"cs:flex cs:gap-2",children:[a.jsx(r,{variant:"secondary",children:"キャンセル"}),a.jsx(r,{children:"確定"})]})})]})})};var s,d,n;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(n=(d=o.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};const x=["Primary"];export{o as Primary,x as __namedExportsOrder,p as default};
