"use client";
import{j as e}from"./iframe-B1uMaBYR.js";import{U as a}from"./useUIColor-BB8pR0ej.js";import{B as i}from"./Button-Cm26qKpL.js";import{S as v}from"./Switch-zzDAN8vL.js";import{B as f}from"./Badge-CVCOLMPl.js";import{P as x}from"./Progress-PhqFtLQQ.js";import"./preload-helper-CJpEdZxZ.js";import"./colorUtils-CzaG3QqU.js";import"./colorContrast-C0ZIkquj.js";import"./designTokens-RbONob3D.js";import"./Slot-DzzAxQzI.js";import"./clsx-BYFsuUQf.js";const j=["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","gray","zinc","neutral","stone","slate"],A={component:a,title:"Foundations/UIColorProvider",tags:["autodocs"],argTypes:{initialColor:{control:{type:"select"},options:j}},parameters:{docs:{description:{component:"Provides a global color to every descendant component via context. Children that accept a `color` prop inherit `initialColor` unless they set their own. Accepts preset color names, custom color objects, or semantic names, plus an optional `darkColor` and `semanticColors` override map."}}}};function n(){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:320},children:[e.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[e.jsx(i,{children:"Primary"}),e.jsx(i,{variant:"secondary",children:"Secondary"}),e.jsx(f,{variant:"solid",children:"9"})]}),e.jsx(v,{checked:!0,onLabel:"On",offLabel:"Off"}),e.jsx(x,{value:66,label:"Sync",showValue:!0})]})}const r={render:s=>e.jsx(a,{...s,children:e.jsx(n,{})}),args:{initialColor:"blue"}},o={render:s=>e.jsx(a,{...s,children:e.jsx(n,{})}),args:{initialColor:"violet"}},t={render:()=>e.jsx(a,{initialColor:{base:"#0ea5e9"},children:e.jsx(n,{})}),parameters:{docs:{description:{story:"A custom color object (`{ base }`) auto-generates the hover / active / focus shades in OKLCH space — no need to supply a full palette."}}}};var l,c,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <UIColorProvider {...args}>
      <Swatch />
    </UIColorProvider>,
  args: {
    initialColor: "blue"
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <UIColorProvider {...args}>
      <Swatch />
    </UIColorProvider>,
  args: {
    initialColor: "violet"
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,C,g;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <UIColorProvider initialColor={{
    base: "#0ea5e9"
  }}>
      <Swatch />
    </UIColorProvider>,
  parameters: {
    docs: {
      description: {
        story: "A custom color object (\`{ base }\`) auto-generates the hover / active / focus shades " + "in OKLCH space — no need to supply a full palette."
      }
    }
  }
}`,...(g=(C=t.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};const D=["Default","Violet","CustomColorObject"];export{t as CustomColorObject,r as Default,o as Violet,D as __namedExportsOrder,A as default};
