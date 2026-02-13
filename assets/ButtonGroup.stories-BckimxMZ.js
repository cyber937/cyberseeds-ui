"use client";
import{j as e,r as D}from"./iframe-BH6SszEl.js";import{B as t}from"./ButtonGroup-BPa9112m.js";import"./preload-helper-CJpEdZxZ.js";import"./clsx-BYFsuUQf.js";import"./colorUtils-CzaG3QqU.js";import"./colorContrast-C0ZIkquj.js";import"./designTokens-DumaUFqK.js";import"./useUIColor-ByGmMwax.js";const _={component:t,title:"System/ButtonGroup",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray"]}}},a={args:{defaultValue:"all",scale:"md"},render:n=>e.jsxs(t,{...n,children:[e.jsx(t.Item,{value:"all",children:"All"}),e.jsx(t.Item,{value:"student",children:"Students"}),e.jsx(t.Item,{value:"parent",children:"Parents"}),e.jsx(t.Item,{value:"staff",children:"Staff"})]})},r={render:()=>{const[n,d]=D.useState("all");return e.jsxs("div",{className:"cs:space-y-4",children:[e.jsxs(t,{value:n,onChange:d,children:[e.jsx(t.Item,{value:"all",children:"All"}),e.jsx(t.Item,{value:"student",children:"Students"}),e.jsx(t.Item,{value:"parent",children:"Parents"}),e.jsx(t.Item,{value:"staff",children:"Staff"})]}),e.jsxs("p",{className:"cs:text-sm cs:text-gray-500",children:["Selected: ",String(n)]})]})}},s={render:()=>{const[n,d]=D.useState(["read","write"]);return e.jsxs("div",{className:"cs:space-y-4",children:[e.jsxs(t,{multiple:!0,value:n,onChange:d,children:[e.jsx(t.Item,{value:"read",children:"Read"}),e.jsx(t.Item,{value:"write",children:"Write"}),e.jsx(t.Item,{value:"delete",children:"Delete"}),e.jsx(t.Item,{value:"admin",children:"Admin"})]}),e.jsxs("p",{className:"cs:text-sm cs:text-gray-500",children:["Selected: ",Array.isArray(n)?n.join(", "):n]})]})}},u={render:()=>e.jsx("div",{className:"cs:space-y-3",children:["blue","green","red","amber","purple"].map(n=>e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:n}),e.jsxs(t,{defaultValue:"a",color:n,children:[e.jsx(t.Item,{value:"a",children:"Option A"}),e.jsx(t.Item,{value:"b",children:"Option B"}),e.jsx(t.Item,{value:"c",children:"Option C"})]})]},n))})},l={render:()=>e.jsx("div",{className:"cs:space-y-3",children:["xs","sm","md","lg"].map(n=>e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:n}),e.jsxs(t,{defaultValue:"a",scale:n,children:[e.jsx(t.Item,{value:"a",children:"Option A"}),e.jsx(t.Item,{value:"b",children:"Option B"}),e.jsx(t.Item,{value:"c",children:"Option C"})]})]},n))})},o={render:()=>e.jsxs("div",{className:"cs:space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:"fullWidth"}),e.jsxs(t,{defaultValue:"all",fullWidth:!0,children:[e.jsx(t.Item,{value:"all",children:"All"}),e.jsx(t.Item,{value:"student",children:"Students"}),e.jsx(t.Item,{value:"parent",children:"Parents"}),e.jsx(t.Item,{value:"staff",children:"Staff"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:"fullWidth (2 items)"}),e.jsxs(t,{defaultValue:"lending",fullWidth:!0,children:[e.jsx(t.Item,{value:"lending",children:"Lending"}),e.jsx(t.Item,{value:"return",children:"Return"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:"default (inline)"}),e.jsxs(t,{defaultValue:"all",children:[e.jsx(t.Item,{value:"all",children:"All"}),e.jsx(t.Item,{value:"student",children:"Students"}),e.jsx(t.Item,{value:"parent",children:"Parents"}),e.jsx(t.Item,{value:"staff",children:"Staff"})]})]})]})},c={render:()=>e.jsxs(t,{defaultValue:"a",children:[e.jsx(t.Item,{value:"a",children:"Enabled"}),e.jsx(t.Item,{value:"b",disabled:!0,children:"Disabled"}),e.jsx(t.Item,{value:"c",children:"Enabled"})]})};var m,p,i;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    defaultValue: "all",
    scale: "md"
  },
  render: args => <ButtonGroup {...args}>
      <ButtonGroup.Item value="all">All</ButtonGroup.Item>
      <ButtonGroup.Item value="student">Students</ButtonGroup.Item>
      <ButtonGroup.Item value="parent">Parents</ButtonGroup.Item>
      <ButtonGroup.Item value="staff">Staff</ButtonGroup.Item>
    </ButtonGroup>
}`,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var v,x,I;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | string[]>("all");
    return <div className="cs:space-y-4">
        <ButtonGroup value={value} onChange={setValue}>
          <ButtonGroup.Item value="all">All</ButtonGroup.Item>
          <ButtonGroup.Item value="student">Students</ButtonGroup.Item>
          <ButtonGroup.Item value="parent">Parents</ButtonGroup.Item>
          <ButtonGroup.Item value="staff">Staff</ButtonGroup.Item>
        </ButtonGroup>
        <p className="cs:text-sm cs:text-gray-500">Selected: {String(value)}</p>
      </div>;
  }
}`,...(I=(x=r.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var B,G,h;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | string[]>(["read", "write"]);
    return <div className="cs:space-y-4">
        <ButtonGroup multiple value={value} onChange={setValue}>
          <ButtonGroup.Item value="read">Read</ButtonGroup.Item>
          <ButtonGroup.Item value="write">Write</ButtonGroup.Item>
          <ButtonGroup.Item value="delete">Delete</ButtonGroup.Item>
          <ButtonGroup.Item value="admin">Admin</ButtonGroup.Item>
        </ButtonGroup>
        <p className="cs:text-sm cs:text-gray-500">Selected: {Array.isArray(value) ? value.join(", ") : value}</p>
      </div>;
  }
}`,...(h=(G=s.parameters)==null?void 0:G.docs)==null?void 0:h.source}}};var f,j,g;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(g=(j=u.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};var y,S,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(b=(S=l.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var N,V,A;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-4">
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">fullWidth</p>
        <ButtonGroup defaultValue="all" fullWidth>
          <ButtonGroup.Item value="all">All</ButtonGroup.Item>
          <ButtonGroup.Item value="student">Students</ButtonGroup.Item>
          <ButtonGroup.Item value="parent">Parents</ButtonGroup.Item>
          <ButtonGroup.Item value="staff">Staff</ButtonGroup.Item>
        </ButtonGroup>
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">fullWidth (2 items)</p>
        <ButtonGroup defaultValue="lending" fullWidth>
          <ButtonGroup.Item value="lending">Lending</ButtonGroup.Item>
          <ButtonGroup.Item value="return">Return</ButtonGroup.Item>
        </ButtonGroup>
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">default (inline)</p>
        <ButtonGroup defaultValue="all">
          <ButtonGroup.Item value="all">All</ButtonGroup.Item>
          <ButtonGroup.Item value="student">Students</ButtonGroup.Item>
          <ButtonGroup.Item value="parent">Parents</ButtonGroup.Item>
          <ButtonGroup.Item value="staff">Staff</ButtonGroup.Item>
        </ButtonGroup>
      </div>
    </div>
}`,...(A=(V=o.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var W,O,C;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <ButtonGroup defaultValue="a">
      <ButtonGroup.Item value="a">Enabled</ButtonGroup.Item>
      <ButtonGroup.Item value="b" disabled>Disabled</ButtonGroup.Item>
      <ButtonGroup.Item value="c">Enabled</ButtonGroup.Item>
    </ButtonGroup>
}`,...(C=(O=c.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};const T=["Default","Controlled","MultiSelect","Colors","Scales","FullWidth","WithDisabled"];export{u as Colors,r as Controlled,a as Default,o as FullWidth,s as MultiSelect,l as Scales,c as WithDisabled,T as __namedExportsOrder,_ as default};
