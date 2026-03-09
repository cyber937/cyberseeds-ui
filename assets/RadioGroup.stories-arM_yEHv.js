"use client";
import{r as l,j as e}from"./iframe-m5NElw2l.js";import{G as o}from"./GroupBox-CWG8vLDB.js";import{R as a}from"./RadioGroup-D65X2Exc.js";import"./preload-helper-CYfZjOYs.js";import"./Label-C81Mus0J.js";import"./clsx-BYFsuUQf.js";import"./Radio-DEnsb6bM.js";import"./colorContrast-C0ZIkquj.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-DumaUFqK.js";import"./useUIColor-BQPT7-YU.js";const f={component:a,title:"System/RadioGroup",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"]}}},r={args:{scale:"md",color:"blue"},render:n=>{const[t,u]=l.useState("male");return e.jsxs(a,{...n,value:t,onChange:u,children:[e.jsx(a.Option,{label:"Male",value:"male"}),e.jsx(a.Option,{label:"Female",value:"female"}),e.jsx(a.Option,{label:"Other",value:"other"})]})}},s={render:()=>{const[n,t]=l.useState("male"),[u,i]=l.useState("male"),[m,p]=l.useState("male"),[d,c]=l.useState("male");return e.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6",children:[e.jsx(o,{label:"Extra Small (xs)",children:e.jsxs(a,{scale:"xs",color:"blue",value:n,onChange:t,children:[e.jsx(a.Option,{label:"Male",value:"male"}),e.jsx(a.Option,{label:"Female",value:"female"}),e.jsx(a.Option,{label:"Other",value:"other"})]})}),e.jsx(o,{label:"Small (sm)",children:e.jsxs(a,{scale:"sm",color:"blue",value:u,onChange:i,children:[e.jsx(a.Option,{label:"Male",value:"male"}),e.jsx(a.Option,{label:"Female",value:"female"}),e.jsx(a.Option,{label:"Other",value:"other"})]})}),e.jsx(o,{label:"Standard (md)",children:e.jsxs(a,{scale:"md",color:"blue",value:m,onChange:p,children:[e.jsx(a.Option,{label:"Male",value:"male"}),e.jsx(a.Option,{label:"Female",value:"female"}),e.jsx(a.Option,{label:"Other",value:"other"})]})}),e.jsx(o,{label:"Large (lg)",children:e.jsxs(a,{scale:"lg",color:"blue",value:d,onChange:c,children:[e.jsx(a.Option,{label:"Male",value:"male"}),e.jsx(a.Option,{label:"Female",value:"female"}),e.jsx(a.Option,{label:"Other",value:"other"})]})})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    scale: "md",
    color: "blue"
  },
  render: args => {
    const [gender, setGender] = useState<string>("male");
    return <RadioGroup {...args} value={gender} onChange={setGender}>
        <RadioGroup.Option label="Male" value="male" />
        <RadioGroup.Option label="Female" value="female" />
        <RadioGroup.Option label="Other" value="other" />
      </RadioGroup>;
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [xsVal, setXsVal] = useState<string>("male");
    const [smVal, setSmVal] = useState<string>("male");
    const [mdVal, setMdVal] = useState<string>("male");
    const [lgVal, setLgVal] = useState<string>("male");
    return <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6">
        <GroupBox label="Extra Small (xs)">
          <RadioGroup scale="xs" color="blue" value={xsVal} onChange={setXsVal}>
            <RadioGroup.Option label="Male" value="male" />
            <RadioGroup.Option label="Female" value="female" />
            <RadioGroup.Option label="Other" value="other" />
          </RadioGroup>
        </GroupBox>
        <GroupBox label="Small (sm)">
          <RadioGroup scale="sm" color="blue" value={smVal} onChange={setSmVal}>
            <RadioGroup.Option label="Male" value="male" />
            <RadioGroup.Option label="Female" value="female" />
            <RadioGroup.Option label="Other" value="other" />
          </RadioGroup>
        </GroupBox>
        <GroupBox label="Standard (md)">
          <RadioGroup scale="md" color="blue" value={mdVal} onChange={setMdVal}>
            <RadioGroup.Option label="Male" value="male" />
            <RadioGroup.Option label="Female" value="female" />
            <RadioGroup.Option label="Other" value="other" />
          </RadioGroup>
        </GroupBox>
        <GroupBox label="Large (lg)">
          <RadioGroup scale="lg" color="blue" value={lgVal} onChange={setLgVal}>
            <RadioGroup.Option label="Male" value="male" />
            <RadioGroup.Option label="Female" value="female" />
            <RadioGroup.Option label="Other" value="other" />
          </RadioGroup>
        </GroupBox>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const M=["Default","Scale"];export{r as Default,s as Scale,M as __namedExportsOrder,f as default};
