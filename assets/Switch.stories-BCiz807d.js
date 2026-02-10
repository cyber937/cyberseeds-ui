"use client";
import{j as s,r as t}from"./iframe-DzWUJk_7.js";import{S as c}from"./Switch-BOg24uHm.js";import"./preload-helper-CJpEdZxZ.js";import"./clsx-BYFsuUQf.js";import"./colorMap-B4H6m5kb.js";import"./colorUtils-BF1Ih5IA.js";import"./designTokens-DumaUFqK.js";import"./useUIColor-1Gq7OnLw.js";const E={component:c,title:"System/Switch",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"]},disabled:{control:{type:"boolean"}}}},w=e=>{const[a,r]=t.useState(!1);return s.jsx(c,{...e,checked:a,onClick:()=>r(!a),onLabel:"オン",offLabel:"オフ"})},l={args:{scale:"md",color:"blue",disabled:!1},render:e=>s.jsx(w,{...e})},o={render:()=>{const[e,a]=t.useState(!0),[r,p]=t.useState(!0),[i,b]=t.useState(!0),[n,u]=t.useState(!0);return s.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6",children:[s.jsxs("div",{children:[s.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Extra Small (xs)"}),s.jsx(c,{scale:"xs",checked:e,onClick:()=>a(!e),onLabel:"オン",offLabel:"オフ"})]}),s.jsxs("div",{children:[s.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Small (sm)"}),s.jsx(c,{scale:"sm",checked:r,onClick:()=>p(!r),onLabel:"オン",offLabel:"オフ"})]}),s.jsxs("div",{children:[s.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Standard (md)"}),s.jsx(c,{checked:i,onClick:()=>b(!i),onLabel:"オン",offLabel:"オフ"})]}),s.jsxs("div",{children:[s.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Large (lg)"}),s.jsx(c,{scale:"lg",checked:n,onClick:()=>u(!n),onLabel:"オン",offLabel:"オフ"})]})]})}};var d,m,S;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    scale: "md",
    color: "blue",
    disabled: false
  },
  render: args => <BasicSwitch {...args} />
}`,...(S=(m=l.parameters)==null?void 0:m.docs)==null?void 0:S.source}}};var h,x,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [xsSwitch, setXsSwitch] = useState<boolean>(true);
    const [smSwitch, setSmSwitch] = useState<boolean>(true);
    const [mdSwitch, setMdSwitch] = useState<boolean>(true);
    const [lgSwitch, setLgSwitch] = useState<boolean>(true);
    return <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6">
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
}`,...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const M=["Primary","Scale"];export{l as Primary,o as Scale,M as __namedExportsOrder,E as default};
