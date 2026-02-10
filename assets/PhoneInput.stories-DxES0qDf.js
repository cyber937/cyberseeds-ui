"use client";
import{r as a,j as e}from"./iframe-DszvCNP2.js";import{P as s}from"./PhoneInput-CEVZ9sZa.js";import"./preload-helper-CJpEdZxZ.js";import"./colorMap-B4H6m5kb.js";import"./colorUtils-BF1Ih5IA.js";import"./designTokens-oNQ9a2iE.js";import"./FormFieldContext-TpYHAaEw.js";import"./Label-DBOsNz8O.js";import"./clsx-BYFsuUQf.js";import"./useUIColor-_6l39SGF.js";const M={component:s,title:"System/PhoneInput",tags:["autodocs"],argTypes:{label:{control:{type:"text"}},scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"]},isInvalid:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}},t={args:{label:"電話番号",scale:"md",color:"blue",isInvalid:!1,disabled:!1},render:l=>{const[r,c]=a.useState("");return e.jsx(s,{value:r,onChange:c,...l})}},n={render:()=>{const[l,r]=a.useState(""),[c,u]=a.useState(""),[g,b]=a.useState(""),[h,v]=a.useState("");return e.jsxs("div",{className:"cs:grid cs:grid-cols-4 cs:gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Extra Small (xs)"}),e.jsx(s,{label:"電話番号",scale:"xs",value:l,onChange:r})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Small (sm)"}),e.jsx(s,{label:"電話番号",scale:"sm",value:c,onChange:u})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Standard (md)"}),e.jsx(s,{label:"電話番号",scale:"md",value:g,onChange:b})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Large (lg)"}),e.jsx(s,{label:"電話番号",scale:"lg",value:h,onChange:v})]})]})}};var o,m,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var i,p,x;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [xs, setXs] = useState("");
    const [sm, setSm] = useState("");
    const [md, setMd] = useState("");
    const [lg, setLg] = useState("");
    return <div className="cs:grid cs:grid-cols-4 cs:gap-6">
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
}`,...(x=(p=n.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};const X=["Basic","Scales"];export{t as Basic,n as Scales,X as __namedExportsOrder,M as default};
