"use client";
import{j as s}from"./iframe-Cwvb0Z0D.js";import{U as y}from"./useUIColor-BTIPPGSW.js";import{I}from"./Input-CrMi6TAl.js";import"./preload-helper-CJpEdZxZ.js";import"./colorUtils-B5Tad61Q.js";import"./colorMap-EN3et11X.js";import"./FormFieldContext-DaikLai8.js";import"./Label-Dci0iaZ3.js";import"./clsx-BYFsuUQf.js";const R={component:I,title:"System/Input",tags:["autodocs"],argTypes:{label:{control:{type:"text"}},scale:{control:{type:"radio"},options:["sm","md"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"]},isInvalid:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}},e={args:{id:"emailaddress",label:"メールアドレス",scale:"md",color:"blue",placeholder:"メールアドレス",require:!1,isInvalid:!1,disabled:!1},render:v=>s.jsx(y,{initialColor:"gray",children:s.jsx(I,{...v})})},r={args:{scale:"md",color:"blue",placeholder:"メールアドレス",require:!0,isInvalid:!1,disabled:!1}},a={args:{label:"メールアドレス",scale:"md",color:"blue",placeholder:"メールアドレス",require:!1,isInvalid:!0,disabled:!1}},l={args:{label:"メールアドレス",scale:"md",color:"blue",placeholder:"メールアドレス",require:!1,isInvalid:!1,disabled:!0}};var o,n,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var d,t,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    scale: "md",
    color: "blue",
    placeholder: "メールアドレス",
    require: true,
    isInvalid: false,
    disabled: false
  }
}`,...(c=(t=r.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "メールアドレス",
    scale: "md",
    color: "blue",
    placeholder: "メールアドレス",
    require: false,
    isInvalid: true,
    disabled: false
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var b,f,g;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "メールアドレス",
    scale: "md",
    color: "blue",
    placeholder: "メールアドレス",
    require: false,
    isInvalid: false,
    disabled: true
  }
}`,...(g=(f=l.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const k=["Default","Require","Invalid","Disabled"];export{e as Default,l as Disabled,a as Invalid,r as Require,k as __namedExportsOrder,R as default};
