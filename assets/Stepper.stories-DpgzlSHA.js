"use client";
import{j as e}from"./iframe-BH6SszEl.js";import{S as l}from"./Stepper-DtlgIgnk.js";import"./preload-helper-CJpEdZxZ.js";import"./clsx-BYFsuUQf.js";import"./colorUtils-CzaG3QqU.js";import"./colorContrast-C0ZIkquj.js";import"./useUIColor-ByGmMwax.js";const R={component:l,title:"Navigation/Stepper",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray"]}}},s=[{label:"Select Borrower"},{label:"Confirm Borrower"},{label:"Scan Book"},{label:"Confirm"},{label:"Complete"}],a={args:{steps:s,currentStep:0,scale:"md"}},t={args:{steps:s,currentStep:1}},c={args:{steps:s,currentStep:4}},o={render:()=>e.jsx("div",{className:"cs:space-y-6",children:["blue","green","red","amber","purple"].map(r=>e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:r}),e.jsx(l,{steps:s,currentStep:2,color:r})]},r))})},p={render:()=>e.jsx("div",{className:"cs:space-y-6",children:["xs","sm","md","lg"].map(r=>e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:r}),e.jsx(l,{steps:s,currentStep:2,scale:r})]},r))})},n={args:{steps:[{label:"Input"},{label:"Confirm"},{label:"Complete"}],currentStep:1}};var m,i,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    steps: librarySteps,
    currentStep: 0,
    scale: "md"
  }
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var u,S,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    steps: librarySteps,
    currentStep: 1
  }
}`,...(g=(S=t.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var b,x,y;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    steps: librarySteps,
    currentStep: 4
  }
}`,...(y=(x=c.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var v,C,f;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-6">
      {(["blue", "green", "red", "amber", "purple"] as const).map(color => <div key={color}>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">{color}</p>
          <Stepper steps={librarySteps} currentStep={2} color={color} />
        </div>)}
    </div>
}`,...(f=(C=o.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var j,h,N;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-6">
      {(["xs", "sm", "md", "lg"] as const).map(scale => <div key={scale}>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">{scale}</p>
          <Stepper steps={librarySteps} currentStep={2} scale={scale} />
        </div>)}
    </div>
}`,...(N=(h=p.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var k,w,B;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    steps: [{
      label: "Input"
    }, {
      label: "Confirm"
    }, {
      label: "Complete"
    }],
    currentStep: 1
  }
}`,...(B=(w=n.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};const q=["Default","SecondStep","AllCompleted","Colors","Scales","ThreeSteps"];export{c as AllCompleted,o as Colors,a as Default,p as Scales,t as SecondStep,n as ThreeSteps,q as __namedExportsOrder,R as default};
