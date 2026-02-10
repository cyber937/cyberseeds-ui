"use client";
import{r as a,j as s}from"./iframe-DzWUJk_7.js";import{P as e}from"./PhoneInput-B30IsjJR.js";import"./preload-helper-CJpEdZxZ.js";import"./colorMap-B4H6m5kb.js";import"./colorUtils-BF1Ih5IA.js";import"./designTokens-DumaUFqK.js";import"./FormFieldContext-D9RHDEwR.js";import"./Label-D2mr-aBn.js";import"./clsx-BYFsuUQf.js";import"./useUIColor-1Gq7OnLw.js";const M={component:e,title:"System/PhoneInput",tags:["autodocs"],argTypes:{label:{control:{type:"text"}},scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"]},isInvalid:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}},t={args:{label:"電話番号",scale:"md",color:"blue",isInvalid:!1,disabled:!1},render:l=>{const[r,c]=a.useState("");return s.jsx(e,{value:r,onChange:c,...l})}},n={render:()=>{const[l,r]=a.useState(""),[c,x]=a.useState(""),[u,b]=a.useState(""),[h,v]=a.useState("");return s.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6",children:[s.jsxs("div",{children:[s.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Extra Small (xs)"}),s.jsx(e,{label:"電話番号",scale:"xs",value:l,onChange:r})]}),s.jsxs("div",{children:[s.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Small (sm)"}),s.jsx(e,{label:"電話番号",scale:"sm",value:c,onChange:x})]}),s.jsxs("div",{children:[s.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Standard (md)"}),s.jsx(e,{label:"電話番号",scale:"md",value:u,onChange:b})]}),s.jsxs("div",{children:[s.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Large (lg)"}),s.jsx(e,{label:"電話番号",scale:"lg",value:h,onChange:v})]})]})}};var o,m,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "電話番号",
    scale: "md",
    color: "blue",
    isInvalid: false,
    disabled: false
  },
  render: args => {
    const [phoneNyumber, setPhoneNumber] = useState<string>("");
    return <PhoneInput value={phoneNyumber} onChange={setPhoneNumber} {...args} />;
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var i,p,g;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [xs, setXs] = useState("");
    const [sm, setSm] = useState("");
    const [md, setMd] = useState("");
    const [lg, setLg] = useState("");
    return <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6">
        <div>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Extra Small (xs)</p>
          <PhoneInput label="電話番号" scale="xs" value={xs} onChange={setXs} />
        </div>
        <div>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Small (sm)</p>
          <PhoneInput label="電話番号" scale="sm" value={sm} onChange={setSm} />
        </div>
        <div>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Standard (md)</p>
          <PhoneInput label="電話番号" scale="md" value={md} onChange={setMd} />
        </div>
        <div>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Large (lg)</p>
          <PhoneInput label="電話番号" scale="lg" value={lg} onChange={setLg} />
        </div>
      </div>;
  }
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const X=["Basic","Scales"];export{t as Basic,n as Scales,X as __namedExportsOrder,M as default};
