"use client";
import{r as t,j as e}from"./iframe-BrqZfAut.js";import{G as d}from"./GroupBox-D89Iib19.js";import{R as a}from"./RadioGroup-BufCYd4v.js";import"./Label-DV-o5tfN.js";import"./clsx-BYFsuUQf.js";import"./useUIColor-XklzOdKX.js";const R={component:a,title:"System/RadioGroup",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["sm","md"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"]}}},l={args:{scale:"md",color:"blue"},render:o=>{const[n,s]=t.useState("male");return e.jsxs(a,{...o,value:n,onChange:s,children:[e.jsx(a.Option,{label:"男性",value:"male"}),e.jsx(a.Option,{label:"女性",value:"female"}),e.jsx(a.Option,{label:"その他",value:"other"})]})}},r={render:()=>{const[o,n]=t.useState("male"),[s,S]=t.useState("male");return e.jsxs("div",{className:"cs:grid cs:grid-cols-2 cs:gap-4",children:[e.jsx(d,{label:"Standard Size",children:e.jsxs(a,{scale:"md",color:"blue",value:o,onChange:n,children:[e.jsx(a.Option,{label:"男性",value:"male"}),e.jsx(a.Option,{label:"女性",value:"female"}),e.jsx(a.Option,{label:"その他",value:"other"})]})}),e.jsx(d,{label:"Small Size",children:e.jsxs(a,{scale:"sm",color:"blue",value:s,onChange:S,children:[e.jsx(a.Option,{label:"男性",value:"male"}),e.jsx(a.Option,{label:"女性",value:"female"}),e.jsx(a.Option,{label:"その他",value:"other"})]})})]})}};var i,u,p;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    scale: "md",
    color: "blue"
  },
  render: args => {
    const [gender, setGender] = useState<string>("male");
    return <RadioGroup {...args} value={gender} onChange={setGender}>
        <RadioGroup.Option label="男性" value="male" />
        <RadioGroup.Option label="女性" value="female" />
        <RadioGroup.Option label="その他" value="other" />
      </RadioGroup>;
  }
}`,...(p=(u=l.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var c,m,G;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [standardSender, setStandarGender] = useState<string>("male");
    const [smallSender, setSmallGender] = useState<string>("male");
    return <div className="cs:grid cs:grid-cols-2 cs:gap-4">
        <GroupBox label="Standard Size">
          <RadioGroup scale="md" color="blue" value={standardSender} onChange={setStandarGender}>
            <RadioGroup.Option label="男性" value="male" />
            <RadioGroup.Option label="女性" value="female" />
            <RadioGroup.Option label="その他" value="other" />
          </RadioGroup>
        </GroupBox>
        <GroupBox label="Small Size">
          <RadioGroup scale="sm" color="blue" value={smallSender} onChange={setSmallGender}>
            <RadioGroup.Option label="男性" value="male" />
            <RadioGroup.Option label="女性" value="female" />
            <RadioGroup.Option label="その他" value="other" />
          </RadioGroup>
        </GroupBox>
      </div>;
  }
}`,...(G=(m=r.parameters)==null?void 0:m.docs)==null?void 0:G.source}}};const j=["Default","Scale"];export{l as Default,r as Scale,j as __namedExportsOrder,R as default};
