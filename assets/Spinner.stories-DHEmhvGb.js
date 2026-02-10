"use client";
import{j as e}from"./iframe-Cw0Ps6tz.js";import{S as s}from"./Spinner-3V6q0Mbl.js";import{G as r}from"./GroupBox-DG57gNze.js";import"./preload-helper-CJpEdZxZ.js";import"./clsx-BYFsuUQf.js";import"./colorUtils-D-K_anEj.js";import"./useUIColor-DDdChcPS.js";import"./Label-CNCgww0H.js";const L={component:s,title:"Feedback/Spinner",tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["red","orange","amber","green","blue","indigo","violet","purple","pink","gray"]},scale:{control:{type:"radio"},options:["xs","sm","md","lg"]}}},a={args:{scale:"md",color:"blue"}},c={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6",children:[e.jsx(r,{label:"Extra Small (xs)",children:e.jsx(s,{scale:"xs"})}),e.jsx(r,{label:"Small (sm)",children:e.jsx(s,{scale:"sm"})}),e.jsx(r,{label:"Standard (md)",children:e.jsx(s,{scale:"md"})}),e.jsx(r,{label:"Large (lg)",children:e.jsx(s,{scale:"lg"})})]})},l={render:()=>e.jsx("div",{className:"cs:flex cs:flex-wrap cs:gap-4 cs:items-center",children:["red","orange","amber","green","emerald","cyan","blue","indigo","violet","purple","pink","gray"].map(n=>e.jsxs("div",{className:"cs:flex cs:flex-col cs:items-center cs:gap-1",children:[e.jsx(s,{color:n}),e.jsx("span",{className:"cs:text-xs cs:text-gray-500",children:n})]},n))})},o={render:()=>e.jsxs("div",{className:"cs:flex cs:items-center cs:gap-3",children:[e.jsx(s,{color:"blue"}),e.jsx("span",{className:"cs:text-sm cs:text-gray-600 cs:dark:text-gray-400",children:"読み込み中..."})]})};var t,m,d;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    scale: "md",
    color: "blue"
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var i,p,x;c.parameters={...c.parameters,docs:{...(i=c.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6">
      <GroupBox label="Extra Small (xs)">
        <Spinner scale="xs" />
      </GroupBox>
      <GroupBox label="Small (sm)">
        <Spinner scale="sm" />
      </GroupBox>
      <GroupBox label="Standard (md)">
        <Spinner scale="md" />
      </GroupBox>
      <GroupBox label="Large (lg)">
        <Spinner scale="lg" />
      </GroupBox>
    </div>
}`,...(x=(p=c.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var g,u,b;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:flex-wrap cs:gap-4 cs:items-center">
      {(["red", "orange", "amber", "green", "emerald", "cyan", "blue", "indigo", "violet", "purple", "pink", "gray"] as const).map(color => <div key={color} className="cs:flex cs:flex-col cs:items-center cs:gap-1">
          <Spinner color={color} />
          <span className="cs:text-xs cs:text-gray-500">{color}</span>
        </div>)}
    </div>
}`,...(b=(u=l.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var S,j,f;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:items-center cs:gap-3">
      <Spinner color="blue" />
      <span className="cs:text-sm cs:text-gray-600 cs:dark:text-gray-400">
        読み込み中...
      </span>
    </div>
}`,...(f=(j=o.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};const w=["Default","Scales","Colors","WithLabel"];export{l as Colors,a as Default,c as Scales,o as WithLabel,w as __namedExportsOrder,L as default};
