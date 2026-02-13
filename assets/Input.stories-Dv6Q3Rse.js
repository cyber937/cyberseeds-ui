"use client";
import{j as e}from"./iframe-BH6SszEl.js";import{U as q}from"./useUIColor-ByGmMwax.js";import{I as a}from"./Input-BfV3lcmB.js";import"./preload-helper-CJpEdZxZ.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-DumaUFqK.js";import"./FormFieldContext-DLt5Iq4U.js";import"./Label-B4gz59JQ.js";import"./clsx-BYFsuUQf.js";const k={component:a,title:"System/Input",tags:["autodocs"],argTypes:{label:{control:{type:"text"}},scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"]},isInvalid:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}},s={args:{id:"emailaddress",label:"Email Address",scale:"md",color:"blue",placeholder:"Email Address",require:!1,isInvalid:!1,disabled:!1},render:N=>e.jsx(q,{initialColor:"gray",children:e.jsx(a,{...N})})},l={args:{scale:"md",color:"blue",placeholder:"Email Address",require:!0,isInvalid:!1,disabled:!1}},r={args:{label:"Email Address",scale:"md",color:"blue",placeholder:"Email Address",require:!1,isInvalid:!0,disabled:!1}},c={args:{label:"Email Address",scale:"md",color:"blue",placeholder:"Email Address",require:!1,isInvalid:!1,disabled:!0}},d={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Extra Small (xs)"}),e.jsx(a,{label:"Email",scale:"xs",placeholder:"example@email.com"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Small (sm)"}),e.jsx(a,{label:"Email",scale:"sm",placeholder:"example@email.com"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Standard (md)"}),e.jsx(a,{label:"Email",scale:"md",placeholder:"example@email.com"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Large (lg)"}),e.jsx(a,{label:"Email",scale:"lg",placeholder:"example@email.com"})]})]})},o={parameters:{viewport:{defaultViewport:"mobile"}},render:()=>e.jsxs("div",{className:"cs:space-y-4",children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500",children:"On mobile, touch targets of 44px+ and font size 16px (to prevent iOS zoom) are applied."}),e.jsx(a,{label:"Email",scale:"xs",placeholder:"extra small"}),e.jsx(a,{label:"Email",scale:"sm",placeholder:"small"}),e.jsx(a,{label:"Email",scale:"md",placeholder:"standard"}),e.jsx(a,{label:"Email",scale:"lg",placeholder:"large"})]})};var i,m,n;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(m=s.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var t,p,x;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    scale: "md",
    color: "blue",
    placeholder: "Email Address",
    require: true,
    isInvalid: false,
    disabled: false
  }
}`,...(x=(p=l.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var u,b,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Email Address",
    scale: "md",
    color: "blue",
    placeholder: "Email Address",
    require: false,
    isInvalid: true,
    disabled: false
  }
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,v,E;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Email Address",
    scale: "md",
    color: "blue",
    placeholder: "Email Address",
    require: false,
    isInvalid: false,
    disabled: true
  }
}`,...(E=(v=c.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var f,I,y;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(I=d.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var j,S,A;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(A=(S=o.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};const L=["Default","Require","Invalid","Disabled","Scales","MobileTouch"];export{s as Default,c as Disabled,r as Invalid,o as MobileTouch,l as Require,d as Scales,L as __namedExportsOrder,k as default};
