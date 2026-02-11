"use client";
import{j as e,r as w}from"./iframe-DzGEYPXT.js";import{B as t}from"./ButtonGroup-CaJPRDci.js";import"./preload-helper-CJpEdZxZ.js";import"./clsx-BYFsuUQf.js";import"./colorUtils-CzaG3QqU.js";import"./colorContrast-C0ZIkquj.js";import"./designTokens-DumaUFqK.js";import"./useUIColor-Oew3m0TN.js";const q={component:t,title:"System/ButtonGroup",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray"]}}},a={args:{defaultValue:"all",scale:"md"},render:r=>e.jsxs(t,{...r,children:[e.jsx(t.Item,{value:"all",children:"全員"}),e.jsx(t.Item,{value:"student",children:"生徒"}),e.jsx(t.Item,{value:"parent",children:"保護者"}),e.jsx(t.Item,{value:"staff",children:"教務"})]})},s={render:()=>{const[r,m]=w.useState("all");return e.jsxs("div",{className:"cs:space-y-4",children:[e.jsxs(t,{value:r,onChange:m,children:[e.jsx(t.Item,{value:"all",children:"全員"}),e.jsx(t.Item,{value:"student",children:"生徒"}),e.jsx(t.Item,{value:"parent",children:"保護者"}),e.jsx(t.Item,{value:"staff",children:"教務"})]}),e.jsxs("p",{className:"cs:text-sm cs:text-gray-500",children:["選択中: ",String(r)]})]})}},n={render:()=>{const[r,m]=w.useState(["read","write"]);return e.jsxs("div",{className:"cs:space-y-4",children:[e.jsxs(t,{multiple:!0,value:r,onChange:m,children:[e.jsx(t.Item,{value:"read",children:"読み取り"}),e.jsx(t.Item,{value:"write",children:"書き込み"}),e.jsx(t.Item,{value:"delete",children:"削除"}),e.jsx(t.Item,{value:"admin",children:"管理"})]}),e.jsxs("p",{className:"cs:text-sm cs:text-gray-500",children:["選択中: ",Array.isArray(r)?r.join(", "):r]})]})}},u={render:()=>e.jsx("div",{className:"cs:space-y-3",children:["blue","green","red","amber","purple"].map(r=>e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:r}),e.jsxs(t,{defaultValue:"a",color:r,children:[e.jsx(t.Item,{value:"a",children:"Option A"}),e.jsx(t.Item,{value:"b",children:"Option B"}),e.jsx(t.Item,{value:"c",children:"Option C"})]})]},r))})},l={render:()=>e.jsx("div",{className:"cs:space-y-3",children:["xs","sm","md","lg"].map(r=>e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:r}),e.jsxs(t,{defaultValue:"a",scale:r,children:[e.jsx(t.Item,{value:"a",children:"Option A"}),e.jsx(t.Item,{value:"b",children:"Option B"}),e.jsx(t.Item,{value:"c",children:"Option C"})]})]},r))})},o={render:()=>e.jsxs("div",{className:"cs:space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:"fullWidth"}),e.jsxs(t,{defaultValue:"all",fullWidth:!0,children:[e.jsx(t.Item,{value:"all",children:"全員"}),e.jsx(t.Item,{value:"student",children:"生徒"}),e.jsx(t.Item,{value:"parent",children:"保護者"}),e.jsx(t.Item,{value:"staff",children:"教務"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:"fullWidth (2 items)"}),e.jsxs(t,{defaultValue:"lending",fullWidth:!0,children:[e.jsx(t.Item,{value:"lending",children:"貸出"}),e.jsx(t.Item,{value:"return",children:"返却"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:"default (inline)"}),e.jsxs(t,{defaultValue:"all",children:[e.jsx(t.Item,{value:"all",children:"全員"}),e.jsx(t.Item,{value:"student",children:"生徒"}),e.jsx(t.Item,{value:"parent",children:"保護者"}),e.jsx(t.Item,{value:"staff",children:"教務"})]})]})]})},c={render:()=>e.jsxs(t,{defaultValue:"a",children:[e.jsx(t.Item,{value:"a",children:"有効"}),e.jsx(t.Item,{value:"b",disabled:!0,children:"無効"}),e.jsx(t.Item,{value:"c",children:"有効"})]})};var p,d,i;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    defaultValue: "all",
    scale: "md"
  },
  render: args => <ButtonGroup {...args}>
      <ButtonGroup.Item value="all">全員</ButtonGroup.Item>
      <ButtonGroup.Item value="student">生徒</ButtonGroup.Item>
      <ButtonGroup.Item value="parent">保護者</ButtonGroup.Item>
      <ButtonGroup.Item value="staff">教務</ButtonGroup.Item>
    </ButtonGroup>
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var v,x,I;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | string[]>("all");
    return <div className="cs:space-y-4">
        <ButtonGroup value={value} onChange={setValue}>
          <ButtonGroup.Item value="all">全員</ButtonGroup.Item>
          <ButtonGroup.Item value="student">生徒</ButtonGroup.Item>
          <ButtonGroup.Item value="parent">保護者</ButtonGroup.Item>
          <ButtonGroup.Item value="staff">教務</ButtonGroup.Item>
        </ButtonGroup>
        <p className="cs:text-sm cs:text-gray-500">選択中: {String(value)}</p>
      </div>;
  }
}`,...(I=(x=s.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var B,G,h;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | string[]>(["read", "write"]);
    return <div className="cs:space-y-4">
        <ButtonGroup multiple value={value} onChange={setValue}>
          <ButtonGroup.Item value="read">読み取り</ButtonGroup.Item>
          <ButtonGroup.Item value="write">書き込み</ButtonGroup.Item>
          <ButtonGroup.Item value="delete">削除</ButtonGroup.Item>
          <ButtonGroup.Item value="admin">管理</ButtonGroup.Item>
        </ButtonGroup>
        <p className="cs:text-sm cs:text-gray-500">選択中: {Array.isArray(value) ? value.join(", ") : value}</p>
      </div>;
  }
}`,...(h=(G=n.parameters)==null?void 0:G.docs)==null?void 0:h.source}}};var j,g,f;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-3">
      {(["blue", "green", "red", "amber", "purple"] as const).map(color => <div key={color}>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-1">{color}</p>
          <ButtonGroup defaultValue="a" color={color}>
            <ButtonGroup.Item value="a">Option A</ButtonGroup.Item>
            <ButtonGroup.Item value="b">Option B</ButtonGroup.Item>
            <ButtonGroup.Item value="c">Option C</ButtonGroup.Item>
          </ButtonGroup>
        </div>)}
    </div>
}`,...(f=(g=u.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,b,N;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-3">
      {(["xs", "sm", "md", "lg"] as const).map(scale => <div key={scale}>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-1">{scale}</p>
          <ButtonGroup defaultValue="a" scale={scale}>
            <ButtonGroup.Item value="a">Option A</ButtonGroup.Item>
            <ButtonGroup.Item value="b">Option B</ButtonGroup.Item>
            <ButtonGroup.Item value="c">Option C</ButtonGroup.Item>
          </ButtonGroup>
        </div>)}
    </div>
}`,...(N=(b=l.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var V,S,O;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-4">
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">fullWidth</p>
        <ButtonGroup defaultValue="all" fullWidth>
          <ButtonGroup.Item value="all">全員</ButtonGroup.Item>
          <ButtonGroup.Item value="student">生徒</ButtonGroup.Item>
          <ButtonGroup.Item value="parent">保護者</ButtonGroup.Item>
          <ButtonGroup.Item value="staff">教務</ButtonGroup.Item>
        </ButtonGroup>
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">fullWidth (2 items)</p>
        <ButtonGroup defaultValue="lending" fullWidth>
          <ButtonGroup.Item value="lending">貸出</ButtonGroup.Item>
          <ButtonGroup.Item value="return">返却</ButtonGroup.Item>
        </ButtonGroup>
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">default (inline)</p>
        <ButtonGroup defaultValue="all">
          <ButtonGroup.Item value="all">全員</ButtonGroup.Item>
          <ButtonGroup.Item value="student">生徒</ButtonGroup.Item>
          <ButtonGroup.Item value="parent">保護者</ButtonGroup.Item>
          <ButtonGroup.Item value="staff">教務</ButtonGroup.Item>
        </ButtonGroup>
      </div>
    </div>
}`,...(O=(S=o.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var C,W,A;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <ButtonGroup defaultValue="a">
      <ButtonGroup.Item value="a">有効</ButtonGroup.Item>
      <ButtonGroup.Item value="b" disabled>無効</ButtonGroup.Item>
      <ButtonGroup.Item value="c">有効</ButtonGroup.Item>
    </ButtonGroup>
}`,...(A=(W=c.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};const z=["Default","Controlled","MultiSelect","Colors","Scales","FullWidth","WithDisabled"];export{u as Colors,s as Controlled,a as Default,o as FullWidth,n as MultiSelect,l as Scales,c as WithDisabled,z as __namedExportsOrder,q as default};
