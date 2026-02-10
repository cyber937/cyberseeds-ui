"use client";
import{j as e}from"./iframe-DszvCNP2.js";import{U as S}from"./useUIColor-_6l39SGF.js";import{I as a}from"./Input-XcsrcPQ1.js";import"./preload-helper-CJpEdZxZ.js";import"./colorUtils-BF1Ih5IA.js";import"./colorMap-B4H6m5kb.js";import"./designTokens-oNQ9a2iE.js";import"./FormFieldContext-TpYHAaEw.js";import"./Label-DBOsNz8O.js";import"./clsx-BYFsuUQf.js";const _={component:a,title:"System/Input",tags:["autodocs"],argTypes:{label:{control:{type:"text"}},scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"]},isInvalid:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}},s={args:{id:"emailaddress",label:"メールアドレス",scale:"md",color:"blue",placeholder:"メールアドレス",require:!1,isInvalid:!1,disabled:!1},render:j=>e.jsx(S,{initialColor:"gray",children:e.jsx(a,{...j})})},l={args:{scale:"md",color:"blue",placeholder:"メールアドレス",require:!0,isInvalid:!1,disabled:!1}},r={args:{label:"メールアドレス",scale:"md",color:"blue",placeholder:"メールアドレス",require:!1,isInvalid:!0,disabled:!1}},c={args:{label:"メールアドレス",scale:"md",color:"blue",placeholder:"メールアドレス",require:!1,isInvalid:!1,disabled:!0}},o={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-4 cs:gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Extra Small (xs)"}),e.jsx(a,{label:"メール",scale:"xs",placeholder:"example@email.com"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Small (sm)"}),e.jsx(a,{label:"メール",scale:"sm",placeholder:"example@email.com"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Standard (md)"}),e.jsx(a,{label:"メール",scale:"md",placeholder:"example@email.com"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Large (lg)"}),e.jsx(a,{label:"メール",scale:"lg",placeholder:"example@email.com"})]})]})};var n,d,i;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    id: "emailaddress",
    label: "メールアドレス",
    scale: "md",
    color: "blue",
    placeholder: "メールアドレス",
    require: false,
    isInvalid: false,
    disabled: false
  },
  render: args => <UIColorProvider initialColor="gray">
      <Input {...args} />
    </UIColorProvider>
}`,...(i=(d=s.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var t,m,p;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    scale: "md",
    color: "blue",
    placeholder: "メールアドレス",
    require: true,
    isInvalid: false,
    disabled: false
  }
}`,...(p=(m=l.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var x,u,b;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "メールアドレス",
    scale: "md",
    color: "blue",
    placeholder: "メールアドレス",
    require: false,
    isInvalid: true,
    disabled: false
  }
}`,...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var g,v,h;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "メールアドレス",
    scale: "md",
    color: "blue",
    placeholder: "メールアドレス",
    require: false,
    isInvalid: false,
    disabled: true
  }
}`,...(h=(v=c.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var f,I,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-4 cs:gap-6">
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Extra Small (xs)</p>
        <Input label="メール" scale="xs" placeholder="example@email.com" />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Small (sm)</p>
        <Input label="メール" scale="sm" placeholder="example@email.com" />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Standard (md)</p>
        <Input label="メール" scale="md" placeholder="example@email.com" />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Large (lg)</p>
        <Input label="メール" scale="lg" placeholder="example@email.com" />
      </div>
    </div>
}`,...(y=(I=o.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};const w=["Default","Require","Invalid","Disabled","Scales"];export{s as Default,c as Disabled,r as Invalid,l as Require,o as Scales,w as __namedExportsOrder,_ as default};
