"use client";
import{j as e}from"./iframe-BvSZAKLD.js";import{R as a}from"./Radio-D-UBO6Nu.js";import"./preload-helper-CJpEdZxZ.js";import"./clsx-BYFsuUQf.js";import"./colorContrast-C0ZIkquj.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-RbONob3D.js";import"./useUIColor-DuigiTdC.js";const q={component:a,title:"System/Radio",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"]}}},c={args:{label:"Radio option",scale:"md",color:"blue"},render:s=>e.jsx(a,{...s,name:"default-story"})},l={args:{label:"Selected option",defaultChecked:!0,color:"blue"},render:s=>e.jsx(a,{...s,name:"checked-story"})},d={render:()=>e.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-2",children:[e.jsx(a,{name:"disabled-story",label:"Disabled (unchecked)",disabled:!0}),e.jsx(a,{name:"disabled-story-2",label:"Disabled (checked)",disabled:!0,defaultChecked:!0})]})},o={render:()=>e.jsx("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4",children:["xs","sm","md","lg"].map(s=>e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:s}),e.jsx(a,{name:`scale-${s}`,label:`Scale ${s}`,scale:s})]},s))})},t={render:()=>{const s=["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"];return e.jsx("div",{className:"cs:grid cs:grid-cols-2 cs:sm:grid-cols-3 cs:md:grid-cols-5 cs:gap-4",children:s.map(r=>e.jsx(a,{name:`color-${r}`,label:r,color:r,defaultChecked:!0},r))})}},n={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-2 cs:gap-3",children:[e.jsx(a,{name:"states-1",label:"Unchecked"}),e.jsx(a,{name:"states-2",label:"Checked",defaultChecked:!0}),e.jsx(a,{name:"states-3",label:"Disabled / unchecked",disabled:!0}),e.jsx(a,{name:"states-4",label:"Disabled / checked",disabled:!0,defaultChecked:!0})]})};var i,m,p;c.parameters={...c.parameters,docs:{...(i=c.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Radio option",
    scale: "md",
    color: "blue"
  },
  render: args => <Radio {...args} name="default-story" />
}`,...(p=(m=c.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,b;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Selected option",
    defaultChecked: true,
    color: "blue"
  },
  render: args => <Radio {...args} name="checked-story" />
}`,...(b=(g=l.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,k,x;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:flex-col cs:gap-2">
      <Radio name="disabled-story" label="Disabled (unchecked)" disabled />
      <Radio name="disabled-story-2" label="Disabled (checked)" disabled defaultChecked />
    </div>
}`,...(x=(k=d.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var y,f,j;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4">
      {(["xs", "sm", "md", "lg"] as const).map(s => <div key={s}>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-1">{s}</p>
          <Radio name={\`scale-\${s}\`} label={\`Scale \${s}\`} scale={s} />
        </div>)}
    </div>
}`,...(j=(f=o.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var v,C,R;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const colors = ["red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "gray", "zinc", "neutral", "stone"] as const;
    return <div className="cs:grid cs:grid-cols-2 cs:sm:grid-cols-3 cs:md:grid-cols-5 cs:gap-4">
        {colors.map(c => <Radio key={c} name={\`color-\${c}\`} label={c} color={c} defaultChecked />)}
      </div>;
  }
}`,...(R=(C=t.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var S,D,N;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-2 cs:gap-3">
      <Radio name="states-1" label="Unchecked" />
      <Radio name="states-2" label="Checked" defaultChecked />
      <Radio name="states-3" label="Disabled / unchecked" disabled />
      <Radio name="states-4" label="Disabled / checked" disabled defaultChecked />
    </div>
}`,...(N=(D=n.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};const A=["Default","Checked","Disabled","Scales","Color","States"];export{l as Checked,t as Color,c as Default,d as Disabled,o as Scales,n as States,A as __namedExportsOrder,q as default};
