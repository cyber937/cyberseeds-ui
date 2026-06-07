"use client";
import{j as e,r as M}from"./iframe-B2nu7eul.js";import{B as t}from"./ButtonGroup-EZUblwtI.js";import"./preload-helper-CJpEdZxZ.js";import"./clsx-BYFsuUQf.js";import"./colorUtils-CzaG3QqU.js";import"./colorContrast-C0ZIkquj.js";import"./designTokens-RbONob3D.js";import"./useUIColor-8B1oW7n3.js";const z={component:t,title:"System/ButtonGroup",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray"]}}},s={args:{defaultValue:"all",scale:"md"},render:a=>e.jsxs(t,{...a,children:[e.jsx(t.Item,{value:"all",children:"All"}),e.jsx(t.Item,{value:"student",children:"Students"}),e.jsx(t.Item,{value:"parent",children:"Parents"}),e.jsx(t.Item,{value:"staff",children:"Staff"})]})},n={render:()=>{const[a,m]=M.useState("all");return e.jsxs("div",{className:"cs:space-y-4",children:[e.jsxs(t,{value:a,onChange:m,children:[e.jsx(t.Item,{value:"all",children:"All"}),e.jsx(t.Item,{value:"student",children:"Students"}),e.jsx(t.Item,{value:"parent",children:"Parents"}),e.jsx(t.Item,{value:"staff",children:"Staff"})]}),e.jsxs("p",{className:"cs:text-sm cs:text-gray-500",children:["Selected: ",String(a)]})]})}},r={render:()=>{const[a,m]=M.useState(["read","write"]);return e.jsxs("div",{className:"cs:space-y-4",children:[e.jsxs(t,{multiple:!0,value:a,onChange:m,children:[e.jsx(t.Item,{value:"read",children:"Read"}),e.jsx(t.Item,{value:"write",children:"Write"}),e.jsx(t.Item,{value:"delete",children:"Delete"}),e.jsx(t.Item,{value:"admin",children:"Admin"})]}),e.jsxs("p",{className:"cs:text-sm cs:text-gray-500",children:["Selected: ",Array.isArray(a)?a.join(", "):a]})]})}},u={render:()=>e.jsx("div",{className:"cs:space-y-3",children:["blue","green","red","amber","purple"].map(a=>e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:a}),e.jsxs(t,{defaultValue:"a",color:a,children:[e.jsx(t.Item,{value:"a",children:"Option A"}),e.jsx(t.Item,{value:"b",children:"Option B"}),e.jsx(t.Item,{value:"c",children:"Option C"})]})]},a))})},l={render:()=>e.jsx("div",{className:"cs:space-y-3",children:["xs","sm","md","lg"].map(a=>e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:a}),e.jsxs(t,{defaultValue:"a",scale:a,children:[e.jsx(t.Item,{value:"a",children:"Option A"}),e.jsx(t.Item,{value:"b",children:"Option B"}),e.jsx(t.Item,{value:"c",children:"Option C"})]})]},a))})},o={render:()=>e.jsxs("div",{className:"cs:space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:"fullWidth"}),e.jsxs(t,{defaultValue:"all",fullWidth:!0,children:[e.jsx(t.Item,{value:"all",children:"All"}),e.jsx(t.Item,{value:"student",children:"Students"}),e.jsx(t.Item,{value:"parent",children:"Parents"}),e.jsx(t.Item,{value:"staff",children:"Staff"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:"fullWidth (2 items)"}),e.jsxs(t,{defaultValue:"lending",fullWidth:!0,children:[e.jsx(t.Item,{value:"lending",children:"Lending"}),e.jsx(t.Item,{value:"return",children:"Return"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:"default (inline)"}),e.jsxs(t,{defaultValue:"all",children:[e.jsx(t.Item,{value:"all",children:"All"}),e.jsx(t.Item,{value:"student",children:"Students"}),e.jsx(t.Item,{value:"parent",children:"Parents"}),e.jsx(t.Item,{value:"staff",children:"Staff"})]})]})]})},c={render:()=>e.jsxs(t,{defaultValue:"a",children:[e.jsx(t.Item,{value:"a",children:"Enabled"}),e.jsx(t.Item,{value:"b",disabled:!0,children:"Disabled"}),e.jsx(t.Item,{value:"c",children:"Enabled"})]})},d={render:()=>e.jsxs("div",{className:"cs:flex cs:gap-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:"Single-select, vertical (ArrowUp/Down)"}),e.jsxs(t,{defaultValue:"dashboard",orientation:"vertical",children:[e.jsx(t.Item,{value:"dashboard",children:"Dashboard"}),e.jsx(t.Item,{value:"items",children:"Items"}),e.jsx(t.Item,{value:"movements",children:"Movements"}),e.jsx(t.Item,{value:"settings",children:"Settings"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:"Multi-select, vertical"}),e.jsxs(t,{defaultValue:["a","c"],multiple:!0,orientation:"vertical",children:[e.jsx(t.Item,{value:"a",children:"Apples"}),e.jsx(t.Item,{value:"b",children:"Bananas"}),e.jsx(t.Item,{value:"c",children:"Cherries"})]})]})]})};var i,p,v;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(v=(p=s.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var x,I,B;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(B=(I=n.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var G,h,j;r.parameters={...r.parameters,docs:{...(G=r.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(j=(h=r.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var f,g,b;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(b=(g=u.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var S,y,N;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(N=(y=l.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var V,A,C;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(C=(A=o.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var W,O,D;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <ButtonGroup defaultValue="a">
      <ButtonGroup.Item value="a">Enabled</ButtonGroup.Item>
      <ButtonGroup.Item value="b" disabled>Disabled</ButtonGroup.Item>
      <ButtonGroup.Item value="c">Enabled</ButtonGroup.Item>
    </ButtonGroup>
}`,...(D=(O=c.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var w,P,E;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:gap-8">
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">Single-select, vertical (ArrowUp/Down)</p>
        <ButtonGroup defaultValue="dashboard" orientation="vertical">
          <ButtonGroup.Item value="dashboard">Dashboard</ButtonGroup.Item>
          <ButtonGroup.Item value="items">Items</ButtonGroup.Item>
          <ButtonGroup.Item value="movements">Movements</ButtonGroup.Item>
          <ButtonGroup.Item value="settings">Settings</ButtonGroup.Item>
        </ButtonGroup>
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">Multi-select, vertical</p>
        <ButtonGroup defaultValue={["a", "c"]} multiple orientation="vertical">
          <ButtonGroup.Item value="a">Apples</ButtonGroup.Item>
          <ButtonGroup.Item value="b">Bananas</ButtonGroup.Item>
          <ButtonGroup.Item value="c">Cherries</ButtonGroup.Item>
        </ButtonGroup>
      </div>
    </div>
}`,...(E=(P=d.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};const H=["Default","Controlled","MultiSelect","Colors","Scales","FullWidth","WithDisabled","Vertical"];export{u as Colors,n as Controlled,s as Default,o as FullWidth,r as MultiSelect,l as Scales,d as Vertical,c as WithDisabled,H as __namedExportsOrder,z as default};
