"use client";
import{j as e,r as m}from"./iframe-xpODeKre.js";import{B as t}from"./ButtonGroup-Dv946QHM.js";import"./preload-helper-CYfZjOYs.js";import"./clsx-BYFsuUQf.js";import"./colorUtils-CzaG3QqU.js";import"./colorContrast-C0ZIkquj.js";import"./designTokens-DumaUFqK.js";import"./useUIColor-rs1v8CsH.js";const f={component:t,title:"System/ButtonGroup",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray"]}}},a={args:{defaultValue:"all",scale:"md"},render:n=>e.jsxs(t,{...n,children:[e.jsx(t.Item,{value:"all",children:"All"}),e.jsx(t.Item,{value:"student",children:"Students"}),e.jsx(t.Item,{value:"parent",children:"Parents"}),e.jsx(t.Item,{value:"staff",children:"Staff"})]})},r={render:()=>{const[n,d]=m.useState("all");return e.jsxs("div",{className:"cs:space-y-4",children:[e.jsxs(t,{value:n,onChange:d,children:[e.jsx(t.Item,{value:"all",children:"All"}),e.jsx(t.Item,{value:"student",children:"Students"}),e.jsx(t.Item,{value:"parent",children:"Parents"}),e.jsx(t.Item,{value:"staff",children:"Staff"})]}),e.jsxs("p",{className:"cs:text-sm cs:text-gray-500",children:["Selected: ",String(n)]})]})}},s={render:()=>{const[n,d]=m.useState(["read","write"]);return e.jsxs("div",{className:"cs:space-y-4",children:[e.jsxs(t,{multiple:!0,value:n,onChange:d,children:[e.jsx(t.Item,{value:"read",children:"Read"}),e.jsx(t.Item,{value:"write",children:"Write"}),e.jsx(t.Item,{value:"delete",children:"Delete"}),e.jsx(t.Item,{value:"admin",children:"Admin"})]}),e.jsxs("p",{className:"cs:text-sm cs:text-gray-500",children:["Selected: ",Array.isArray(n)?n.join(", "):n]})]})}},u={render:()=>e.jsx("div",{className:"cs:space-y-3",children:["blue","green","red","amber","purple"].map(n=>e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:n}),e.jsxs(t,{defaultValue:"a",color:n,children:[e.jsx(t.Item,{value:"a",children:"Option A"}),e.jsx(t.Item,{value:"b",children:"Option B"}),e.jsx(t.Item,{value:"c",children:"Option C"})]})]},n))})},l={render:()=>e.jsx("div",{className:"cs:space-y-3",children:["xs","sm","md","lg"].map(n=>e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:n}),e.jsxs(t,{defaultValue:"a",scale:n,children:[e.jsx(t.Item,{value:"a",children:"Option A"}),e.jsx(t.Item,{value:"b",children:"Option B"}),e.jsx(t.Item,{value:"c",children:"Option C"})]})]},n))})},o={render:()=>e.jsxs("div",{className:"cs:space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:"fullWidth"}),e.jsxs(t,{defaultValue:"all",fullWidth:!0,children:[e.jsx(t.Item,{value:"all",children:"All"}),e.jsx(t.Item,{value:"student",children:"Students"}),e.jsx(t.Item,{value:"parent",children:"Parents"}),e.jsx(t.Item,{value:"staff",children:"Staff"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:"fullWidth (2 items)"}),e.jsxs(t,{defaultValue:"lending",fullWidth:!0,children:[e.jsx(t.Item,{value:"lending",children:"Lending"}),e.jsx(t.Item,{value:"return",children:"Return"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:"default (inline)"}),e.jsxs(t,{defaultValue:"all",children:[e.jsx(t.Item,{value:"all",children:"All"}),e.jsx(t.Item,{value:"student",children:"Students"}),e.jsx(t.Item,{value:"parent",children:"Parents"}),e.jsx(t.Item,{value:"staff",children:"Staff"})]})]})]})},c={render:()=>e.jsxs(t,{defaultValue:"a",children:[e.jsx(t.Item,{value:"a",children:"Enabled"}),e.jsx(t.Item,{value:"b",disabled:!0,children:"Disabled"}),e.jsx(t.Item,{value:"c",children:"Enabled"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup defaultValue="a">
      <ButtonGroup.Item value="a">Enabled</ButtonGroup.Item>
      <ButtonGroup.Item value="b" disabled>Disabled</ButtonGroup.Item>
      <ButtonGroup.Item value="c">Enabled</ButtonGroup.Item>
    </ButtonGroup>
}`,...c.parameters?.docs?.source}}};const j=["Default","Controlled","MultiSelect","Colors","Scales","FullWidth","WithDisabled"];export{u as Colors,r as Controlled,a as Default,o as FullWidth,s as MultiSelect,l as Scales,c as WithDisabled,j as __namedExportsOrder,f as default};
