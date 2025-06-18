"use client";
import{j as e}from"./iframe-BPlIpqzu.js";import{S as a,a as l}from"./Select-NiAPBxog.js";const g={component:a,title:"System/Select",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["sm","md"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"]}}},s={args:{scale:"md"},render:c=>e.jsx("div",{className:"flex",children:e.jsxs(a,{...c,children:[e.jsx(l,{label:"選んでください",value:"0"},"0"),e.jsx(l,{label:"テスト",value:"1"},"1"),e.jsx(l,{label:"テスト2",value:"2"},"2")]})})},r={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-2",children:[e.jsxs(a,{scale:"md",children:[e.jsx(l,{label:"選んでください",value:"0"},"0"),e.jsx(l,{label:"テスト",value:"1"},"1"),e.jsx(l,{label:"テスト2",value:"2"},"2")]}),e.jsxs(a,{scale:"sm",children:[e.jsx(l,{label:"選んでください",value:"0"},"0"),e.jsx(l,{label:"テスト",value:"1"},"1"),e.jsx(l,{label:"テスト2",value:"2"},"2")]})]})},n={args:{scale:"md",isInvalid:!0},render:c=>e.jsxs(a,{...c,children:[e.jsx(l,{label:"選んでください",value:"0"},"0"),e.jsx(l,{label:"テスト",value:"1"},"1"),e.jsx(l,{label:"テスト2",value:"2"},"2")]})};var t,o,i;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    scale: "md"
  },
  render: args => <div className="flex">
      <Select {...args}>
        <SelectOption key="0" label="選んでください" value="0" />
        <SelectOption key="1" label="テスト" value="1" />
        <SelectOption key="2" label="テスト2" value="2" />
      </Select>
    </div>
}`,...(i=(o=s.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var d,u,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-2">
      <Select scale="md">
        <SelectOption key="0" label="選んでください" value="0" />
        <SelectOption key="1" label="テスト" value="1" />
        <SelectOption key="2" label="テスト2" value="2" />
      </Select>
      <Select scale="sm">
        <SelectOption key="0" label="選んでください" value="0" />
        <SelectOption key="1" label="テスト" value="1" />
        <SelectOption key="2" label="テスト2" value="2" />
      </Select>
    </div>
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,v,S;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    scale: "md",
    isInvalid: true
  },
  render: args => <Select {...args}>
      <SelectOption key="0" label="選んでください" value="0" />
      <SelectOption key="1" label="テスト" value="1" />
      <SelectOption key="2" label="テスト2" value="2" />
    </Select>
}`,...(S=(v=n.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const j=["Default","Scale","Invalid"];export{s as Default,n as Invalid,r as Scale,j as __namedExportsOrder,g as default};
