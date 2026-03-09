"use client";
import{j as e}from"./iframe-xpODeKre.js";import{U as m}from"./useUIColor-rs1v8CsH.js";import{I as a}from"./Input-DWix1U7_.js";import"./preload-helper-CYfZjOYs.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-DumaUFqK.js";import"./FormFieldContext-BgabJ0RT.js";import"./Label-FrOtQjDZ.js";import"./clsx-BYFsuUQf.js";const E={component:a,title:"System/Input",tags:["autodocs"],argTypes:{label:{control:{type:"text"}},scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"]},isInvalid:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}},s={args:{id:"emailaddress",label:"Email Address",scale:"md",color:"blue",placeholder:"Email Address",require:!1,isInvalid:!1,disabled:!1},render:i=>e.jsx(m,{initialColor:"gray",children:e.jsx(a,{...i})})},l={args:{scale:"md",color:"blue",placeholder:"Email Address",require:!0,isInvalid:!1,disabled:!1}},r={args:{label:"Email Address",scale:"md",color:"blue",placeholder:"Email Address",require:!1,isInvalid:!0,disabled:!1}},c={args:{label:"Email Address",scale:"md",color:"blue",placeholder:"Email Address",require:!1,isInvalid:!1,disabled:!0}},d={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Extra Small (xs)"}),e.jsx(a,{label:"Email",scale:"xs",placeholder:"example@email.com"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Small (sm)"}),e.jsx(a,{label:"Email",scale:"sm",placeholder:"example@email.com"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Standard (md)"}),e.jsx(a,{label:"Email",scale:"md",placeholder:"example@email.com"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Large (lg)"}),e.jsx(a,{label:"Email",scale:"lg",placeholder:"example@email.com"})]})]})},o={parameters:{viewport:{defaultViewport:"mobile"}},render:()=>e.jsxs("div",{className:"cs:space-y-4",children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500",children:"On mobile, touch targets of 44px+ and font size 16px (to prevent iOS zoom) are applied."}),e.jsx(a,{label:"Email",scale:"xs",placeholder:"extra small"}),e.jsx(a,{label:"Email",scale:"sm",placeholder:"small"}),e.jsx(a,{label:"Email",scale:"md",placeholder:"standard"}),e.jsx(a,{label:"Email",scale:"lg",placeholder:"large"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    id: "emailaddress",
    label: "Email Address",
    scale: "md",
    color: "blue",
    placeholder: "Email Address",
    require: false,
    isInvalid: false,
    disabled: false
  },
  render: args => <UIColorProvider initialColor="gray">
      <Input {...args} />
    </UIColorProvider>
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    scale: "md",
    color: "blue",
    placeholder: "Email Address",
    require: true,
    isInvalid: false,
    disabled: false
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email Address",
    scale: "md",
    color: "blue",
    placeholder: "Email Address",
    require: false,
    isInvalid: true,
    disabled: false
  }
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email Address",
    scale: "md",
    color: "blue",
    placeholder: "Email Address",
    require: false,
    isInvalid: false,
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6">
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Extra Small (xs)</p>
        <Input label="Email" scale="xs" placeholder="example@email.com" />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Small (sm)</p>
        <Input label="Email" scale="sm" placeholder="example@email.com" />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Standard (md)</p>
        <Input label="Email" scale="md" placeholder="example@email.com" />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Large (lg)</p>
        <Input label="Email" scale="lg" placeholder="example@email.com" />
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile"
    }
  },
  render: () => <div className="cs:space-y-4">
      <p className="cs:text-xs cs:text-gray-500">
        On mobile, touch targets of 44px+ and font size 16px (to prevent iOS zoom) are applied.
      </p>
      <Input label="Email" scale="xs" placeholder="extra small" />
      <Input label="Email" scale="sm" placeholder="small" />
      <Input label="Email" scale="md" placeholder="standard" />
      <Input label="Email" scale="lg" placeholder="large" />
    </div>
}`,...o.parameters?.docs?.source}}};const f=["Default","Require","Invalid","Disabled","Scales","MobileTouch"];export{s as Default,c as Disabled,r as Invalid,o as MobileTouch,l as Require,d as Scales,f as __namedExportsOrder,E as default};
