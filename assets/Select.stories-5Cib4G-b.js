import{j as e}from"./iframe-Ldy2bjAX.js";import{S as r,a as l}from"./Select-DZOTkn__.js";const b={component:r,title:"System/Select",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["sm","md"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"]}}},a={args:{scale:"md","aria-label":"選択"},render:u=>e.jsx("div",{className:"flex",children:e.jsxs(r,{...u,children:[e.jsx(l,{label:"選んでください",value:"0"},"0"),e.jsx(l,{label:"テスト",value:"1"},"1"),e.jsx(l,{label:"テスト2",value:"2"},"2")]})})},s={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-2",children:[e.jsxs(r,{scale:"md","aria-label":"標準サイズ",children:[e.jsx(l,{label:"選んでください",value:"0"},"0"),e.jsx(l,{label:"テスト",value:"1"},"1"),e.jsx(l,{label:"テスト2",value:"2"},"2")]}),e.jsxs(r,{scale:"sm","aria-label":"小サイズ",children:[e.jsx(l,{label:"選んでください",value:"0"},"0"),e.jsx(l,{label:"テスト",value:"1"},"1"),e.jsx(l,{label:"テスト2",value:"2"},"2")]})]})};var c,t,n;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(n=(t=a.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var o,i,d;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-2">
      <Select scale="md" aria-label="標準サイズ">
        <SelectOption key="0" label="選んでください" value="0" />
        <SelectOption key="1" label="テスト" value="1" />
        <SelectOption key="2" label="テスト2" value="2" />
      </Select>
      <Select scale="sm" aria-label="小サイズ">
        <SelectOption key="0" label="選んでください" value="0" />
        <SelectOption key="1" label="テスト" value="1" />
        <SelectOption key="2" label="テスト2" value="2" />
      </Select>
    </div>
}`,...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const v=["Default","Scale"];export{a as Default,s as Scale,v as __namedExportsOrder,b as default};
