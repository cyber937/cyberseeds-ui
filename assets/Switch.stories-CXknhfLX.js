import{j as a,r as l}from"./iframe-DxWCnVe1.js";import{S as o}from"./Switch-B1w5JR4x.js";import"./clsx-B-dksMZM.js";import"./colorMap-Do1xbgVw.js";const k={component:o,title:"System/Switch",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["sm","md"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"]},disabled:{control:{type:"boolean"}}}},p=e=>{const[s,t]=l.useState(!1);return a.jsx(o,{...e,checked:s,onClick:()=>t(!s),onLabel:"オン",offLabel:"オフ"})},r={args:{scale:"md",color:"blue",disabled:!1},render:e=>a.jsx(p,{...e})},c={render:()=>{const[e,s]=l.useState(!0),[t,h]=l.useState(!0);return a.jsxs("div",{className:"cs:grid cs:grid-cols-2",children:[a.jsx(o,{checked:e,onClick:()=>s(!e),onLabel:"オン",offLabel:"オフ"}),a.jsx(o,{scale:"sm",checked:t,onClick:()=>h(!t),onLabel:"オン",offLabel:"オフ"})]})}};var n,i,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    scale: "md",
    color: "blue",
    disabled: false
  },
  render: args => <BasicSwitch {...args} />
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,S,u;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [standardSwitch, setStandardSwitch] = useState<boolean>(true);
    const [smallSwitch, setSmallSwitch] = useState<boolean>(true);
    return <div className="cs:grid cs:grid-cols-2">
        <Switch checked={standardSwitch} onClick={() => setStandardSwitch(!standardSwitch)} onLabel="オン" offLabel="オフ" />
        <Switch scale="sm" checked={smallSwitch} onClick={() => setSmallSwitch(!smallSwitch)} onLabel="オン" offLabel="オフ" />
      </div>;
  }
}`,...(u=(S=c.parameters)==null?void 0:S.docs)==null?void 0:u.source}}};const y=["Primary","Scale"];export{r as Primary,c as Scale,y as __namedExportsOrder,k as default};
