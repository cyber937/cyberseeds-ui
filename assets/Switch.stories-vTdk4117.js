"use client";
import{j as a,r as l}from"./iframe-Cwvb0Z0D.js";import{S as o}from"./Switch-12jO74T0.js";import"./preload-helper-CJpEdZxZ.js";import"./clsx-BYFsuUQf.js";import"./colorMap-EN3et11X.js";import"./colorUtils-B5Tad61Q.js";import"./useUIColor-BTIPPGSW.js";const L={component:o,title:"System/Switch",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["sm","md"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"]},disabled:{control:{type:"boolean"}}}},h=e=>{const[t,s]=l.useState(!1);return a.jsx(o,{...e,checked:t,onClick:()=>s(!t),onLabel:"オン",offLabel:"オフ"})},r={args:{scale:"md",color:"blue",disabled:!1},render:e=>a.jsx(h,{...e})},c={render:()=>{const[e,t]=l.useState(!0),[s,u]=l.useState(!0);return a.jsxs("div",{className:"cs:grid cs:grid-cols-2",children:[a.jsx(o,{checked:e,onClick:()=>t(!e),onLabel:"オン",offLabel:"オフ"}),a.jsx(o,{scale:"sm",checked:s,onClick:()=>u(!s),onLabel:"オン",offLabel:"オフ"})]})}};var n,i,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    scale: "md",
    color: "blue",
    disabled: false
  },
  render: args => <BasicSwitch {...args} />
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,S,p;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [standardSwitch, setStandardSwitch] = useState<boolean>(true);
    const [smallSwitch, setSmallSwitch] = useState<boolean>(true);
    return <div className="cs:grid cs:grid-cols-2">
        <Switch checked={standardSwitch} onClick={() => setStandardSwitch(!standardSwitch)} onLabel="オン" offLabel="オフ" />
        <Switch scale="sm" checked={smallSwitch} onClick={() => setSmallSwitch(!smallSwitch)} onLabel="オン" offLabel="オフ" />
      </div>;
  }
}`,...(p=(S=c.parameters)==null?void 0:S.docs)==null?void 0:p.source}}};const j=["Primary","Scale"];export{r as Primary,c as Scale,j as __namedExportsOrder,L as default};
