"use client";
import{r as m,j as p}from"./iframe-Cwvb0Z0D.js";import{P as n}from"./PhoneInput-BomZ3AHL.js";import"./preload-helper-CJpEdZxZ.js";import"./colorMap-EN3et11X.js";import"./colorUtils-B5Tad61Q.js";import"./FormFieldContext-DaikLai8.js";import"./Label-Dci0iaZ3.js";import"./clsx-BYFsuUQf.js";import"./useUIColor-BTIPPGSW.js";const x={component:n,title:"System/PhoneInput",tags:["autodocs"],argTypes:{label:{control:{type:"text"}},isInvalid:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}},e={args:{label:"電話番号",scale:"md",color:"blue",isInvalid:!1,disabled:!1},render:s=>{const[a,l]=m.useState("");return p.jsx(n,{value:a,onChange:l,...s})}};var o,r,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const P=["Basic"];export{e as Basic,P as __namedExportsOrder,x as default};
