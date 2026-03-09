"use client";
import{j as e}from"./iframe-xpODeKre.js";import{T as s}from"./TextArea-DbcqkaX3.js";import"./preload-helper-CYfZjOYs.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-DumaUFqK.js";import"./FormFieldContext-BgabJ0RT.js";import"./Label-FrOtQjDZ.js";import"./clsx-BYFsuUQf.js";import"./useUIColor-rs1v8CsH.js";const g={component:s,title:"System/TextArea",tags:["autodocs"],argTypes:{label:{control:{type:"text"}},scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"]},isInvalid:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}},a={args:{label:"Text Area",scale:"md",color:"blue",require:!1,isInvalid:!1,disabled:!1}},r={args:{label:"Text Area",scale:"md",color:"blue",require:!0,isInvalid:!1,disabled:!1}},l={args:{label:"Text Area",scale:"md",color:"blue",require:!1,isInvalid:!0,disabled:!1}},t={args:{label:"Text Area",scale:"md",color:"blue",require:!1,isInvalid:!1,disabled:!0}},c={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Extra Small (xs)"}),e.jsx(s,{label:"Comment",scale:"xs",placeholder:"Enter text",rows:3})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Small (sm)"}),e.jsx(s,{label:"Comment",scale:"sm",placeholder:"Enter text",rows:3})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Standard (md)"}),e.jsx(s,{label:"Comment",scale:"md",placeholder:"Enter text",rows:3})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Large (lg)"}),e.jsx(s,{label:"Comment",scale:"lg",placeholder:"Enter text",rows:3})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Text Area",
    scale: "md",
    color: "blue",
    require: false,
    isInvalid: false,
    disabled: false
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Text Area",
    scale: "md",
    color: "blue",
    require: true,
    isInvalid: false,
    disabled: false
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Text Area",
    scale: "md",
    color: "blue",
    require: false,
    isInvalid: true,
    disabled: false
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Text Area",
    scale: "md",
    color: "blue",
    require: false,
    isInvalid: false,
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6">
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Extra Small (xs)</p>
        <TextArea label="Comment" scale="xs" placeholder="Enter text" rows={3} />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Small (sm)</p>
        <TextArea label="Comment" scale="sm" placeholder="Enter text" rows={3} />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Standard (md)</p>
        <TextArea label="Comment" scale="md" placeholder="Enter text" rows={3} />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Large (lg)</p>
        <TextArea label="Comment" scale="lg" placeholder="Enter text" rows={3} />
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};const v=["Default","Require","Invalid","Disabled","Scales"];export{a as Default,t as Disabled,l as Invalid,r as Require,c as Scales,v as __namedExportsOrder,g as default};
