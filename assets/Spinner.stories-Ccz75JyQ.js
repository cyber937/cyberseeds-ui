"use client";
import{j as e}from"./iframe-m5NElw2l.js";import{S as s}from"./Spinner-uAw653GH.js";import{G as r}from"./GroupBox-CWG8vLDB.js";import"./preload-helper-CYfZjOYs.js";import"./clsx-BYFsuUQf.js";import"./colorUtils-CzaG3QqU.js";import"./useUIColor-BQPT7-YU.js";import"./Label-C81Mus0J.js";const b={component:s,title:"Feedback/Spinner",tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["red","orange","amber","green","blue","indigo","violet","purple","pink","gray"]},scale:{control:{type:"radio"},options:["xs","sm","md","lg"]}}},a={args:{scale:"md",color:"blue"}},c={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6",children:[e.jsx(r,{label:"Extra Small (xs)",children:e.jsx(s,{scale:"xs"})}),e.jsx(r,{label:"Small (sm)",children:e.jsx(s,{scale:"sm"})}),e.jsx(r,{label:"Standard (md)",children:e.jsx(s,{scale:"md"})}),e.jsx(r,{label:"Large (lg)",children:e.jsx(s,{scale:"lg"})})]})},l={render:()=>e.jsx("div",{className:"cs:flex cs:flex-wrap cs:gap-4 cs:items-center",children:["red","orange","amber","green","emerald","cyan","blue","indigo","violet","purple","pink","gray"].map(n=>e.jsxs("div",{className:"cs:flex cs:flex-col cs:items-center cs:gap-1",children:[e.jsx(s,{color:n}),e.jsx("span",{className:"cs:text-xs cs:text-gray-500",children:n})]},n))})},o={render:()=>e.jsxs("div",{className:"cs:flex cs:items-center cs:gap-3",children:[e.jsx(s,{color:"blue"}),e.jsx("span",{className:"cs:text-sm cs:text-gray-600 cs:dark:text-gray-400",children:"Loading..."})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    scale: "md",
    color: "blue"
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:flex-wrap cs:gap-4 cs:items-center">
      {(["red", "orange", "amber", "green", "emerald", "cyan", "blue", "indigo", "violet", "purple", "pink", "gray"] as const).map(color => <div key={color} className="cs:flex cs:flex-col cs:items-center cs:gap-1">
          <Spinner color={color} />
          <span className="cs:text-xs cs:text-gray-500">{color}</span>
        </div>)}
    </div>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:items-center cs:gap-3">
      <Spinner color="blue" />
      <span className="cs:text-sm cs:text-gray-600 cs:dark:text-gray-400">
        Loading...
      </span>
    </div>
}`,...o.parameters?.docs?.source}}};const S=["Default","Scales","Colors","WithLabel"];export{l as Colors,a as Default,c as Scales,o as WithLabel,S as __namedExportsOrder,b as default};
