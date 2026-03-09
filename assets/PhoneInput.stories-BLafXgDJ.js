"use client";
import{r as a,j as e}from"./iframe-m5NElw2l.js";import{P as s}from"./PhoneInput-B6vIGTWC.js";import"./preload-helper-CYfZjOYs.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-DumaUFqK.js";import"./FormFieldContext-BdRfQ4zK.js";import"./Label-C81Mus0J.js";import"./clsx-BYFsuUQf.js";import"./useUIColor-BQPT7-YU.js";const P={component:s,title:"System/PhoneInput",tags:["autodocs"],argTypes:{label:{control:{type:"text"}},scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"]},isInvalid:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}},n={args:{label:"Phone Number",scale:"md",color:"blue",isInvalid:!1,disabled:!1},render:r=>{const[l,c]=a.useState("");return e.jsx(s,{value:l,onChange:c,...r})}},t={render:()=>{const[r,l]=a.useState(""),[c,o]=a.useState(""),[m,d]=a.useState(""),[i,u]=a.useState("");return e.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Extra Small (xs)"}),e.jsx(s,{label:"Phone Number",scale:"xs",value:r,onChange:l})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Small (sm)"}),e.jsx(s,{label:"Phone Number",scale:"sm",value:c,onChange:o})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Standard (md)"}),e.jsx(s,{label:"Phone Number",scale:"md",value:m,onChange:d})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Large (lg)"}),e.jsx(s,{label:"Phone Number",scale:"lg",value:i,onChange:u})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Phone Number",
    scale: "md",
    color: "blue",
    isInvalid: false,
    disabled: false
  },
  render: args => {
    const [phoneNyumber, setPhoneNumber] = useState<string>("");
    return <PhoneInput value={phoneNyumber} onChange={setPhoneNumber} {...args} />;
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [xs, setXs] = useState("");
    const [sm, setSm] = useState("");
    const [md, setMd] = useState("");
    const [lg, setLg] = useState("");
    return <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6">
        <div>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Extra Small (xs)</p>
          <PhoneInput label="Phone Number" scale="xs" value={xs} onChange={setXs} />
        </div>
        <div>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Small (sm)</p>
          <PhoneInput label="Phone Number" scale="sm" value={sm} onChange={setSm} />
        </div>
        <div>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Standard (md)</p>
          <PhoneInput label="Phone Number" scale="md" value={md} onChange={setMd} />
        </div>
        <div>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Large (lg)</p>
          <PhoneInput label="Phone Number" scale="lg" value={lg} onChange={setLg} />
        </div>
      </div>;
  }
}`,...t.parameters?.docs?.source}}};const j=["Basic","Scales"];export{n as Basic,t as Scales,j as __namedExportsOrder,P as default};
