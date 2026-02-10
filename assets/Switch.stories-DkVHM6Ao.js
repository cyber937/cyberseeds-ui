"use client";
import{j as e,r as c}from"./iframe-DszvCNP2.js";import{S as t}from"./Switch-BRtBiw10.js";import"./preload-helper-CJpEdZxZ.js";import"./clsx-BYFsuUQf.js";import"./colorMap-B4H6m5kb.js";import"./colorUtils-BF1Ih5IA.js";import"./designTokens-oNQ9a2iE.js";import"./useUIColor-_6l39SGF.js";const E={component:t,title:"System/Switch",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"]},disabled:{control:{type:"boolean"}}}},w=s=>{const[a,r]=c.useState(!1);return e.jsx(t,{...s,checked:a,onClick:()=>r(!a),onLabel:"オン",offLabel:"オフ"})},l={args:{scale:"md",color:"blue",disabled:!1},render:s=>e.jsx(w,{...s})},o={render:()=>{const[s,a]=c.useState(!0),[r,g]=c.useState(!0),[n,b]=c.useState(!0),[i,u]=c.useState(!0);return e.jsxs("div",{className:"cs:grid cs:grid-cols-4 cs:gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Extra Small (xs)"}),e.jsx(t,{scale:"xs",checked:s,onClick:()=>a(!s),onLabel:"オン",offLabel:"オフ"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Small (sm)"}),e.jsx(t,{scale:"sm",checked:r,onClick:()=>g(!r),onLabel:"オン",offLabel:"オフ"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Standard (md)"}),e.jsx(t,{checked:n,onClick:()=>b(!n),onLabel:"オン",offLabel:"オフ"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Large (lg)"}),e.jsx(t,{scale:"lg",checked:i,onClick:()=>u(!i),onLabel:"オン",offLabel:"オフ"})]})]})}};var d,m,S;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    scale: "md",
    color: "blue",
    disabled: false
  },
  render: args => <BasicSwitch {...args} />
}`,...(S=(m=l.parameters)==null?void 0:m.docs)==null?void 0:S.source}}};var h,x,p;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [xsSwitch, setXsSwitch] = useState<boolean>(true);
    const [smSwitch, setSmSwitch] = useState<boolean>(true);
    const [mdSwitch, setMdSwitch] = useState<boolean>(true);
    const [lgSwitch, setLgSwitch] = useState<boolean>(true);
    return <div className="cs:grid cs:grid-cols-4 cs:gap-4">
        <div>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Extra Small (xs)</p>
          <Switch scale="xs" checked={xsSwitch} onClick={() => setXsSwitch(!xsSwitch)} onLabel="オン" offLabel="オフ" />
        </div>
        <div>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Small (sm)</p>
          <Switch scale="sm" checked={smSwitch} onClick={() => setSmSwitch(!smSwitch)} onLabel="オン" offLabel="オフ" />
        </div>
        <div>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Standard (md)</p>
          <Switch checked={mdSwitch} onClick={() => setMdSwitch(!mdSwitch)} onLabel="オン" offLabel="オフ" />
        </div>
        <div>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Large (lg)</p>
          <Switch scale="lg" checked={lgSwitch} onClick={() => setLgSwitch(!lgSwitch)} onLabel="オン" offLabel="オフ" />
        </div>
      </div>;
  }
}`,...(p=(x=o.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};const M=["Primary","Scale"];export{l as Primary,o as Scale,M as __namedExportsOrder,E as default};
