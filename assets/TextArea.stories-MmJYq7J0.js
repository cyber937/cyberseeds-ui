"use client";
import{j as e}from"./iframe-DzGEYPXT.js";import{T as s}from"./TextArea-DNTM1QNw.js";import"./preload-helper-CJpEdZxZ.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-DumaUFqK.js";import"./FormFieldContext-CL_OIXiv.js";import"./Label-Bv9lDuhv.js";import"./clsx-BYFsuUQf.js";import"./useUIColor-Oew3m0TN.js";const R={component:s,title:"System/TextArea",tags:["autodocs"],argTypes:{label:{control:{type:"text"}},scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"]},isInvalid:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}},a={args:{label:"Text Area",scale:"md",color:"blue",require:!1,isInvalid:!1,disabled:!1}},r={args:{label:"Text Area",scale:"md",color:"blue",require:!0,isInvalid:!1,disabled:!1}},l={args:{label:"Text Area",scale:"md",color:"blue",require:!1,isInvalid:!0,disabled:!1}},c={args:{label:"Text Area",scale:"md",color:"blue",require:!1,isInvalid:!1,disabled:!0}},t={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Extra Small (xs)"}),e.jsx(s,{label:"コメント",scale:"xs",placeholder:"入力してください",rows:3})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Small (sm)"}),e.jsx(s,{label:"コメント",scale:"sm",placeholder:"入力してください",rows:3})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Standard (md)"}),e.jsx(s,{label:"コメント",scale:"md",placeholder:"入力してください",rows:3})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Large (lg)"}),e.jsx(s,{label:"コメント",scale:"lg",placeholder:"入力してください",rows:3})]})]})};var o,d,n;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Text Area",
    scale: "md",
    color: "blue",
    require: false,
    isInvalid: false,
    disabled: false
  }
}`,...(n=(d=a.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Text Area",
    scale: "md",
    color: "blue",
    require: true,
    isInvalid: false,
    disabled: false
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var x,b,u;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Text Area",
    scale: "md",
    color: "blue",
    require: false,
    isInvalid: true,
    disabled: false
  }
}`,...(u=(b=l.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var g,v,f;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Text Area",
    scale: "md",
    color: "blue",
    require: false,
    isInvalid: false,
    disabled: true
  }
}`,...(f=(v=c.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var y,h,T;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6">
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Extra Small (xs)</p>
        <TextArea label="コメント" scale="xs" placeholder="入力してください" rows={3} />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Small (sm)</p>
        <TextArea label="コメント" scale="sm" placeholder="入力してください" rows={3} />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Standard (md)</p>
        <TextArea label="コメント" scale="md" placeholder="入力してください" rows={3} />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Large (lg)</p>
        <TextArea label="コメント" scale="lg" placeholder="入力してください" rows={3} />
      </div>
    </div>
}`,...(T=(h=t.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};const k=["Default","Require","Invalid","Disabled","Scales"];export{a as Default,c as Disabled,l as Invalid,r as Require,t as Scales,k as __namedExportsOrder,R as default};
