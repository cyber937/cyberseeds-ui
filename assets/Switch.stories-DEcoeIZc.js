"use client";
import{j as e,r as t}from"./iframe-B1uMaBYR.js";import{S as s}from"./Switch-zzDAN8vL.js";import"./preload-helper-CJpEdZxZ.js";import"./clsx-BYFsuUQf.js";import"./colorContrast-C0ZIkquj.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-RbONob3D.js";import"./useUIColor-BB8pR0ej.js";const T={component:s,title:"System/Switch",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"]},disabled:{control:{type:"boolean"}}}},E=c=>{const[a,r]=t.useState(!1);return e.jsx(s,{...c,checked:a,onClick:()=>r(!a),onLabel:"ON",offLabel:"OFF"})},l={args:{scale:"md",color:"blue",disabled:!1},render:c=>e.jsx(E,{...c})},n={render:()=>{const[c,a]=t.useState(!0),[r,j]=t.useState(!0),[m,C]=t.useState(!0),[x,D]=t.useState(!0);return e.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Extra Small (xs)"}),e.jsx(s,{scale:"xs",checked:c,onClick:()=>a(!c),onLabel:"ON",offLabel:"OFF"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Small (sm)"}),e.jsx(s,{scale:"sm",checked:r,onClick:()=>j(!r),onLabel:"ON",offLabel:"OFF"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Standard (md)"}),e.jsx(s,{checked:m,onClick:()=>C(!m),onLabel:"ON",offLabel:"OFF"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Large (lg)"}),e.jsx(s,{scale:"lg",checked:x,onClick:()=>D(!x),onLabel:"ON",offLabel:"OFF"})]})]})}},i={render:()=>{const c=["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"];return e.jsx("div",{className:"cs:grid cs:grid-cols-2 cs:sm:grid-cols-4 cs:md:grid-cols-5 cs:gap-4",children:c.map(a=>e.jsxs("div",{className:"cs:flex cs:items-center cs:gap-2",children:[e.jsx(s,{checked:!0,color:a,onLabel:"ON",offLabel:"OFF"}),e.jsx("span",{className:"cs:text-xs cs:text-gray-500",children:a})]},a))})}},d={render:()=>e.jsxs("div",{className:"cs:flex cs:flex-wrap cs:gap-6 cs:items-center",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:"Disabled / unchecked"}),e.jsx(s,{disabled:!0,checked:!1,onLabel:"ON",offLabel:"OFF"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:"Disabled / checked"}),e.jsx(s,{disabled:!0,checked:!0,onLabel:"ON",offLabel:"OFF"})]})]})},o={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-2 cs:gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:"Unchecked"}),e.jsx(s,{checked:!1,onLabel:"ON",offLabel:"OFF"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:"Checked"}),e.jsx(s,{checked:!0,onLabel:"ON",offLabel:"OFF"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:"Disabled (off)"}),e.jsx(s,{disabled:!0,checked:!1,onLabel:"ON",offLabel:"OFF"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:"Disabled (on)"}),e.jsx(s,{disabled:!0,checked:!0,onLabel:"ON",offLabel:"OFF"})]})]})};var h,b,p;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    scale: "md",
    color: "blue",
    disabled: false
  },
  render: args => <BasicSwitch {...args} />
}`,...(p=(b=l.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var g,S,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(S=n.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var u,N,L;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const colors = ["red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "gray", "zinc", "neutral", "stone"] as const;
    return <div className="cs:grid cs:grid-cols-2 cs:sm:grid-cols-4 cs:md:grid-cols-5 cs:gap-4">
        {colors.map(c => <div key={c} className="cs:flex cs:items-center cs:gap-2">
            <Switch checked color={c} onLabel="ON" offLabel="OFF" />
            <span className="cs:text-xs cs:text-gray-500">{c}</span>
          </div>)}
      </div>;
  }
}`,...(L=(N=i.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var v,w,k;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:flex-wrap cs:gap-6 cs:items-center">
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">Disabled / unchecked</p>
        <Switch disabled checked={false} onLabel="ON" offLabel="OFF" />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">Disabled / checked</p>
        <Switch disabled checked onLabel="ON" offLabel="OFF" />
      </div>
    </div>
}`,...(k=(w=d.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var O,F,y;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-2 cs:gap-4">
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">Unchecked</p>
        <Switch checked={false} onLabel="ON" offLabel="OFF" />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">Checked</p>
        <Switch checked onLabel="ON" offLabel="OFF" />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">Disabled (off)</p>
        <Switch disabled checked={false} onLabel="ON" offLabel="OFF" />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">Disabled (on)</p>
        <Switch disabled checked onLabel="ON" offLabel="OFF" />
      </div>
    </div>
}`,...(y=(F=o.parameters)==null?void 0:F.docs)==null?void 0:y.source}}};const V=["Primary","Scale","Color","Disabled","States"];export{i as Color,d as Disabled,l as Primary,n as Scale,o as States,V as __namedExportsOrder,T as default};
