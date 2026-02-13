"use client";
import{j as s,r as t}from"./iframe-BH6SszEl.js";import{S as c}from"./Switch-B6GUGFo1.js";import"./preload-helper-CJpEdZxZ.js";import"./clsx-BYFsuUQf.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-DumaUFqK.js";import"./useUIColor-ByGmMwax.js";const j={component:c,title:"System/Switch",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"]},disabled:{control:{type:"boolean"}}}},w=e=>{const[a,r]=t.useState(!1);return s.jsx(c,{...e,checked:a,onClick:()=>r(!a),onLabel:"ON",offLabel:"OFF"})},l={args:{scale:"md",color:"blue",disabled:!1},render:e=>s.jsx(w,{...e})},o={render:()=>{const[e,a]=t.useState(!0),[r,p]=t.useState(!0),[i,b]=t.useState(!0),[n,u]=t.useState(!0);return s.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6",children:[s.jsxs("div",{children:[s.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Extra Small (xs)"}),s.jsx(c,{scale:"xs",checked:e,onClick:()=>a(!e),onLabel:"ON",offLabel:"OFF"})]}),s.jsxs("div",{children:[s.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Small (sm)"}),s.jsx(c,{scale:"sm",checked:r,onClick:()=>p(!r),onLabel:"ON",offLabel:"OFF"})]}),s.jsxs("div",{children:[s.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Standard (md)"}),s.jsx(c,{checked:i,onClick:()=>b(!i),onLabel:"ON",offLabel:"OFF"})]}),s.jsxs("div",{children:[s.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Large (lg)"}),s.jsx(c,{scale:"lg",checked:n,onClick:()=>u(!n),onLabel:"ON",offLabel:"OFF"})]})]})}};var d,m,S;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <Switch scale="xs" checked={xsSwitch} onClick={() => setXsSwitch(!xsSwitch)} onLabel="ON" offLabel="OFF" />
        </div>
        <div>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Small (sm)</p>
          <Switch scale="sm" checked={smSwitch} onClick={() => setSmSwitch(!smSwitch)} onLabel="ON" offLabel="OFF" />
        </div>
        <div>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Standard (md)</p>
          <Switch checked={mdSwitch} onClick={() => setMdSwitch(!mdSwitch)} onLabel="ON" offLabel="OFF" />
        </div>
        <div>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Large (lg)</p>
          <Switch scale="lg" checked={lgSwitch} onClick={() => setLgSwitch(!lgSwitch)} onLabel="ON" offLabel="OFF" />
        </div>
      </div>;
  }
}`,...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const v=["Primary","Scale"];export{l as Primary,o as Scale,v as __namedExportsOrder,j as default};
