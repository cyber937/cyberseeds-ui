"use client";
import{j as e}from"./iframe-DGUMRchz.js";import{I as y}from"./Input-CoGzvw17.js";import{S as a,a as l}from"./Select-bxc4DS-f.js";import"./preload-helper-CJpEdZxZ.js";import"./colorUtils-D-K_anEj.js";import"./designTokens-DumaUFqK.js";import"./FormFieldContext-DV9bQFLy.js";import"./Label-wkz5Hl00.js";import"./clsx-BYFsuUQf.js";import"./useUIColor-BVWDqBP4.js";const W={component:a,title:"System/Select",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"]}}},s={args:{scale:"md","aria-label":"選択"},render:t=>e.jsx("div",{className:"flex",children:e.jsxs(a,{...t,children:[e.jsx(l,{label:"選んでください",value:"0"},"0"),e.jsx(l,{label:"テスト",value:"1"},"1"),e.jsx(l,{label:"テスト2",value:"2"},"2")]})})},c={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Extra Small (xs)"}),e.jsxs(a,{scale:"xs","aria-label":"極小サイズ",children:[e.jsx(l,{label:"選んでください",value:"0"},"0"),e.jsx(l,{label:"テスト",value:"1"},"1"),e.jsx(l,{label:"テスト2",value:"2"},"2")]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Small (sm)"}),e.jsxs(a,{scale:"sm","aria-label":"小サイズ",children:[e.jsx(l,{label:"選んでください",value:"0"},"0"),e.jsx(l,{label:"テスト",value:"1"},"1"),e.jsx(l,{label:"テスト2",value:"2"},"2")]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Standard (md)"}),e.jsxs(a,{scale:"md","aria-label":"標準サイズ",children:[e.jsx(l,{label:"選んでください",value:"0"},"0"),e.jsx(l,{label:"テスト",value:"1"},"1"),e.jsx(l,{label:"テスト2",value:"2"},"2")]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Large (lg)"}),e.jsxs(a,{scale:"lg","aria-label":"大サイズ",children:[e.jsx(l,{label:"選んでください",value:"0"},"0"),e.jsx(l,{label:"テスト",value:"1"},"1"),e.jsx(l,{label:"テスト2",value:"2"},"2")]})]})]})},r={render:()=>e.jsxs("div",{className:"cs:flex cs:gap-2 cs:max-w-md",children:[e.jsx("div",{className:"cs:w-32 cs:shrink-0",children:e.jsxs(a,{scale:"md","aria-label":"学年",children:[e.jsx(l,{value:"",label:"全学年"}),e.jsx(l,{value:"1",label:"小1"}),e.jsx(l,{value:"2",label:"小2"}),e.jsx(l,{value:"3",label:"小3"})]})}),e.jsx("div",{className:"cs:flex-1 cs:min-w-0",children:e.jsx(y,{scale:"md",placeholder:"名前で検索…","aria-label":"名前検索"})})]})},n={args:{scale:"md",isInvalid:!0,"aria-label":"選択"},render:t=>e.jsxs(a,{...t,children:[e.jsx(l,{label:"選んでください",value:"0"},"0"),e.jsx(l,{label:"テスト",value:"1"},"1"),e.jsx(l,{label:"テスト2",value:"2"},"2")]})};var i,d,o;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(d=s.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};var m,x,p;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(x=c.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};var v,u,b;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:gap-2 cs:max-w-md">
      <div className="cs:w-32 cs:shrink-0">
        <Select scale="md" aria-label="学年">
          <SelectOption value="" label="全学年" />
          <SelectOption value="1" label="小1" />
          <SelectOption value="2" label="小2" />
          <SelectOption value="3" label="小3" />
        </Select>
      </div>
      <div className="cs:flex-1 cs:min-w-0">
        <Input scale="md" placeholder="名前で検索…" aria-label="名前検索" />
      </div>
    </div>
}`,...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var S,g,j;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(j=(g=n.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};const _=["Default","Scale","WithInput","Invalid"];export{s as Default,n as Invalid,c as Scale,r as WithInput,_ as __namedExportsOrder,W as default};
