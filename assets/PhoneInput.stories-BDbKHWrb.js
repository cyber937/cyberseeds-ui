import{r as m,j as p}from"./iframe-SMyN5pTS.js";import{P as s}from"./PhoneInput-DUV4s-l6.js";import"./colorMap-BNZnq6PF.js";import"./Label-CMijhWPq.js";import"./clsx-B-dksMZM.js";const h={component:s,title:"System/PhoneInput",tags:["autodocs"],argTypes:{label:{control:{type:"text"}},isInvalid:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}},e={args:{label:"電話番号",scale:"md",color:"blue",isInvalid:!1,disabled:!1},render:a=>{const[t,l]=m.useState("");return p.jsx(s,{value:t,onChange:l,...a})}};var o,r,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const g=["Basic"];export{e as Basic,g as __namedExportsOrder,h as default};
