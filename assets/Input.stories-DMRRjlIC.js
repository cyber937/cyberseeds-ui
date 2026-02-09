"use client";
import{j as s}from"./iframe-BrqZfAut.js";import{U as y}from"./useUIColor-XklzOdKX.js";import{I}from"./Input-RjymI9id.js";import"./Label-DV-o5tfN.js";import"./clsx-BYFsuUQf.js";const j={component:I,title:"System/Input",tags:["autodocs"],argTypes:{label:{control:{type:"text"}},scale:{control:{type:"radio"},options:["sm","md"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"]},isInvalid:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}},e={args:{id:"emailaddress",label:"メールアドレス",scale:"md",color:"blue",placeholder:"メールアドレス",require:!1,isInvalid:!1,disabled:!1},render:v=>s.jsx(y,{initialColor:"gray",children:s.jsx(I,{...v})})},r={args:{scale:"md",color:"blue",placeholder:"メールアドレス",require:!0,isInvalid:!1,disabled:!1}},a={args:{label:"メールアドレス",scale:"md",color:"blue",placeholder:"メールアドレス",require:!1,isInvalid:!0,disabled:!1}},l={args:{label:"メールアドレス",scale:"md",color:"blue",placeholder:"メールアドレス",require:!1,isInvalid:!1,disabled:!0}};var o,n,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(d=(n=e.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var i,t,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    scale: "md",
    color: "blue",
    placeholder: "メールアドレス",
    require: true,
    isInvalid: false,
    disabled: false
  }
}`,...(c=(t=r.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var u,p,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "メールアドレス",
    scale: "md",
    color: "blue",
    placeholder: "メールアドレス",
    require: false,
    isInvalid: true,
    disabled: false
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var b,f,g;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "メールアドレス",
    scale: "md",
    color: "blue",
    placeholder: "メールアドレス",
    require: false,
    isInvalid: false,
    disabled: true
  }
}`,...(g=(f=l.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const D=["Default","Require","Invalid","Disabled"];export{e as Default,l as Disabled,a as Invalid,r as Require,D as __namedExportsOrder,j as default};
