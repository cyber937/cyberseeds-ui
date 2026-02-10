"use client";
import{j as e}from"./iframe-DzWUJk_7.js";import{U as C}from"./useUIColor-1Gq7OnLw.js";import{I as a}from"./Input-DyplOvi9.js";import"./preload-helper-CJpEdZxZ.js";import"./colorUtils-BF1Ih5IA.js";import"./colorMap-B4H6m5kb.js";import"./designTokens-DumaUFqK.js";import"./FormFieldContext-D9RHDEwR.js";import"./Label-D2mr-aBn.js";import"./clsx-BYFsuUQf.js";const V={component:a,title:"System/Input",tags:["autodocs"],argTypes:{label:{control:{type:"text"}},scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"]},isInvalid:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}},s={args:{id:"emailaddress",label:"メールアドレス",scale:"md",color:"blue",placeholder:"メールアドレス",require:!1,isInvalid:!1,disabled:!1},render:w=>e.jsx(C,{initialColor:"gray",children:e.jsx(a,{...w})})},l={args:{scale:"md",color:"blue",placeholder:"メールアドレス",require:!0,isInvalid:!1,disabled:!1}},r={args:{label:"メールアドレス",scale:"md",color:"blue",placeholder:"メールアドレス",require:!1,isInvalid:!0,disabled:!1}},c={args:{label:"メールアドレス",scale:"md",color:"blue",placeholder:"メールアドレス",require:!1,isInvalid:!1,disabled:!0}},o={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Extra Small (xs)"}),e.jsx(a,{label:"メール",scale:"xs",placeholder:"example@email.com"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Small (sm)"}),e.jsx(a,{label:"メール",scale:"sm",placeholder:"example@email.com"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Standard (md)"}),e.jsx(a,{label:"メール",scale:"md",placeholder:"example@email.com"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Large (lg)"}),e.jsx(a,{label:"メール",scale:"lg",placeholder:"example@email.com"})]})]})},d={parameters:{viewport:{defaultViewport:"mobile"}},render:()=>e.jsxs("div",{className:"cs:space-y-4",children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500",children:"モバイルではタッチターゲット44px以上・フォントサイズ16px（iOSズーム防止）が適用されます。"}),e.jsx(a,{label:"メール",scale:"xs",placeholder:"extra small"}),e.jsx(a,{label:"メール",scale:"sm",placeholder:"small"}),e.jsx(a,{label:"メール",scale:"md",placeholder:"standard"}),e.jsx(a,{label:"メール",scale:"lg",placeholder:"large"})]})};var n,t,i;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(t=s.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var m,p,x;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    scale: "md",
    color: "blue",
    placeholder: "メールアドレス",
    require: true,
    isInvalid: false,
    disabled: false
  }
}`,...(x=(p=l.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var u,b,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "メールアドレス",
    scale: "md",
    color: "blue",
    placeholder: "メールアドレス",
    require: false,
    isInvalid: true,
    disabled: false
  }
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,v,f;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "メールアドレス",
    scale: "md",
    color: "blue",
    placeholder: "メールアドレス",
    require: false,
    isInvalid: false,
    disabled: true
  }
}`,...(f=(v=c.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var I,y,j;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6">
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
}`,...(j=(y=o.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var S,N,q;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile"
    }
  },
  render: () => <div className="cs:space-y-4">
      <p className="cs:text-xs cs:text-gray-500">
        モバイルではタッチターゲット44px以上・フォントサイズ16px（iOSズーム防止）が適用されます。
      </p>
      <Input label="メール" scale="xs" placeholder="extra small" />
      <Input label="メール" scale="sm" placeholder="small" />
      <Input label="メール" scale="md" placeholder="standard" />
      <Input label="メール" scale="lg" placeholder="large" />
    </div>
}`,...(q=(N=d.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};const _=["Default","Require","Invalid","Disabled","Scales","MobileTouch"];export{s as Default,c as Disabled,r as Invalid,d as MobileTouch,l as Require,o as Scales,_ as __namedExportsOrder,V as default};
