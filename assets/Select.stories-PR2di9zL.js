"use client";
import{j as e}from"./iframe-Dto_MavA.js";import{S as a,a as l}from"./Select-BNVYLWHU.js";import"./preload-helper-CJpEdZxZ.js";import"./designTokens-DumaUFqK.js";import"./FormFieldContext-BAa6kDw0.js";const k={component:a,title:"System/Select",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"]}}},s={args:{scale:"md","aria-label":"選択"},render:r=>e.jsx("div",{className:"flex",children:e.jsxs(a,{...r,children:[e.jsx(l,{label:"選んでください",value:"0"},"0"),e.jsx(l,{label:"テスト",value:"1"},"1"),e.jsx(l,{label:"テスト2",value:"2"},"2")]})})},c={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Extra Small (xs)"}),e.jsxs(a,{scale:"xs","aria-label":"極小サイズ",children:[e.jsx(l,{label:"選んでください",value:"0"},"0"),e.jsx(l,{label:"テスト",value:"1"},"1"),e.jsx(l,{label:"テスト2",value:"2"},"2")]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Small (sm)"}),e.jsxs(a,{scale:"sm","aria-label":"小サイズ",children:[e.jsx(l,{label:"選んでください",value:"0"},"0"),e.jsx(l,{label:"テスト",value:"1"},"1"),e.jsx(l,{label:"テスト2",value:"2"},"2")]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Standard (md)"}),e.jsxs(a,{scale:"md","aria-label":"標準サイズ",children:[e.jsx(l,{label:"選んでください",value:"0"},"0"),e.jsx(l,{label:"テスト",value:"1"},"1"),e.jsx(l,{label:"テスト2",value:"2"},"2")]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Large (lg)"}),e.jsxs(a,{scale:"lg","aria-label":"大サイズ",children:[e.jsx(l,{label:"選んでください",value:"0"},"0"),e.jsx(l,{label:"テスト",value:"1"},"1"),e.jsx(l,{label:"テスト2",value:"2"},"2")]})]})]})},t={args:{scale:"md",isInvalid:!0,"aria-label":"選択"},render:r=>e.jsxs(a,{...r,children:[e.jsx(l,{label:"選んでください",value:"0"},"0"),e.jsx(l,{label:"テスト",value:"1"},"1"),e.jsx(l,{label:"テスト2",value:"2"},"2")]})};var n,i,d;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    scale: "md",
    "aria-label": "選択"
  },
  render: args => <div className="flex">
      <Select {...args}>
        <SelectOption key="0" label="選んでください" value="0" />
        <SelectOption key="1" label="テスト" value="1" />
        <SelectOption key="2" label="テスト2" value="2" />
      </Select>
    </div>
}`,...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var o,m,x;c.parameters={...c.parameters,docs:{...(o=c.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6">
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Extra Small (xs)</p>
        <Select scale="xs" aria-label="極小サイズ">
          <SelectOption key="0" label="選んでください" value="0" />
          <SelectOption key="1" label="テスト" value="1" />
          <SelectOption key="2" label="テスト2" value="2" />
        </Select>
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Small (sm)</p>
        <Select scale="sm" aria-label="小サイズ">
          <SelectOption key="0" label="選んでください" value="0" />
          <SelectOption key="1" label="テスト" value="1" />
          <SelectOption key="2" label="テスト2" value="2" />
        </Select>
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Standard (md)</p>
        <Select scale="md" aria-label="標準サイズ">
          <SelectOption key="0" label="選んでください" value="0" />
          <SelectOption key="1" label="テスト" value="1" />
          <SelectOption key="2" label="テスト2" value="2" />
        </Select>
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Large (lg)</p>
        <Select scale="lg" aria-label="大サイズ">
          <SelectOption key="0" label="選んでください" value="0" />
          <SelectOption key="1" label="テスト" value="1" />
          <SelectOption key="2" label="テスト2" value="2" />
        </Select>
      </div>
    </div>
}`,...(x=(m=c.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var p,v,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    scale: "md",
    isInvalid: true,
    "aria-label": "選択"
  },
  render: args => <Select {...args}>
      <SelectOption key="0" label="選んでください" value="0" />
      <SelectOption key="1" label="テスト" value="1" />
      <SelectOption key="2" label="テスト2" value="2" />
    </Select>
}`,...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const O=["Default","Scale","Invalid"];export{s as Default,t as Invalid,c as Scale,O as __namedExportsOrder,k as default};
