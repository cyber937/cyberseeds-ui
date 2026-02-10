"use client";
import{r as l,j as e}from"./iframe-DszvCNP2.js";import{G as o}from"./GroupBox-D5Qy1-1c.js";import{a}from"./RadioGroup-DYZsaKSE.js";import"./preload-helper-CJpEdZxZ.js";import"./Label-DBOsNz8O.js";import"./clsx-BYFsuUQf.js";import"./colorContrast-C0ZIkquj.js";import"./colorMap-B4H6m5kb.js";import"./colorUtils-BF1Ih5IA.js";import"./designTokens-oNQ9a2iE.js";import"./useUIColor-_6l39SGF.js";const M={component:a,title:"System/RadioGroup",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"]}}},r={args:{scale:"md",color:"blue"},render:s=>{const[t,u]=l.useState("male");return e.jsxs(a,{...s,value:t,onChange:u,children:[e.jsx(a.Option,{label:"男性",value:"male"}),e.jsx(a.Option,{label:"女性",value:"female"}),e.jsx(a.Option,{label:"その他",value:"other"})]})}},n={render:()=>{const[s,t]=l.useState("male"),[u,g]=l.useState("male"),[x,v]=l.useState("male"),[G,h]=l.useState("male");return e.jsxs("div",{className:"cs:grid cs:grid-cols-4 cs:gap-4",children:[e.jsx(o,{label:"Extra Small (xs)",children:e.jsxs(a,{scale:"xs",color:"blue",value:s,onChange:t,children:[e.jsx(a.Option,{label:"男性",value:"male"}),e.jsx(a.Option,{label:"女性",value:"female"}),e.jsx(a.Option,{label:"その他",value:"other"})]})}),e.jsx(o,{label:"Small (sm)",children:e.jsxs(a,{scale:"sm",color:"blue",value:u,onChange:g,children:[e.jsx(a.Option,{label:"男性",value:"male"}),e.jsx(a.Option,{label:"女性",value:"female"}),e.jsx(a.Option,{label:"その他",value:"other"})]})}),e.jsx(o,{label:"Standard (md)",children:e.jsxs(a,{scale:"md",color:"blue",value:x,onChange:v,children:[e.jsx(a.Option,{label:"男性",value:"male"}),e.jsx(a.Option,{label:"女性",value:"female"}),e.jsx(a.Option,{label:"その他",value:"other"})]})}),e.jsx(o,{label:"Large (lg)",children:e.jsxs(a,{scale:"lg",color:"blue",value:G,onChange:h,children:[e.jsx(a.Option,{label:"男性",value:"male"}),e.jsx(a.Option,{label:"女性",value:"female"}),e.jsx(a.Option,{label:"その他",value:"other"})]})})]})}};var i,p,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,c,b;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [xsVal, setXsVal] = useState<string>("male");
    const [smVal, setSmVal] = useState<string>("male");
    const [mdVal, setMdVal] = useState<string>("male");
    const [lgVal, setLgVal] = useState<string>("male");
    return <div className="cs:grid cs:grid-cols-4 cs:gap-4">
        <GroupBox label="Extra Small (xs)">
          <RadioGroup scale="xs" color="blue" value={xsVal} onChange={setXsVal}>
            <RadioGroup.Option label="男性" value="male" />
            <RadioGroup.Option label="女性" value="female" />
            <RadioGroup.Option label="その他" value="other" />
          </RadioGroup>
        </GroupBox>
        <GroupBox label="Small (sm)">
          <RadioGroup scale="sm" color="blue" value={smVal} onChange={setSmVal}>
            <RadioGroup.Option label="男性" value="male" />
            <RadioGroup.Option label="女性" value="female" />
            <RadioGroup.Option label="その他" value="other" />
          </RadioGroup>
        </GroupBox>
        <GroupBox label="Standard (md)">
          <RadioGroup scale="md" color="blue" value={mdVal} onChange={setMdVal}>
            <RadioGroup.Option label="男性" value="male" />
            <RadioGroup.Option label="女性" value="female" />
            <RadioGroup.Option label="その他" value="other" />
          </RadioGroup>
        </GroupBox>
        <GroupBox label="Large (lg)">
          <RadioGroup scale="lg" color="blue" value={lgVal} onChange={setLgVal}>
            <RadioGroup.Option label="男性" value="male" />
            <RadioGroup.Option label="女性" value="female" />
            <RadioGroup.Option label="その他" value="other" />
          </RadioGroup>
        </GroupBox>
      </div>;
  }
}`,...(b=(c=n.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};const X=["Default","Scale"];export{r as Default,n as Scale,X as __namedExportsOrder,M as default};
