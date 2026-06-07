"use client";
import{j as e}from"./iframe-B2nu7eul.js";import{S as m}from"./Stepper-k9ydJZPn.js";import"./preload-helper-CJpEdZxZ.js";import"./clsx-BYFsuUQf.js";import"./colorUtils-CzaG3QqU.js";import"./colorContrast-C0ZIkquj.js";import"./useUIColor-8B1oW7n3.js";const z={component:m,title:"Navigation/Stepper",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray"]}}},s=[{label:"Select Borrower"},{label:"Confirm Borrower"},{label:"Scan Book"},{label:"Confirm"},{label:"Complete"}],a={args:{steps:s,currentStep:0,scale:"md"}},t={args:{steps:s,currentStep:1}},o={args:{steps:s,currentStep:4}},c={render:()=>e.jsx("div",{className:"cs:space-y-6",children:["blue","green","red","amber","purple"].map(r=>e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:r}),e.jsx(m,{steps:s,currentStep:2,color:r})]},r))})},p={render:()=>e.jsx("div",{className:"cs:space-y-6",children:["xs","sm","md","lg"].map(r=>e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:r}),e.jsx(m,{steps:s,currentStep:2,scale:r})]},r))})},n={args:{steps:[{label:"Input"},{label:"Confirm"},{label:"Complete"}],currentStep:1}},l={args:{steps:s,currentStep:2},parameters:{viewport:{defaultViewport:"mobile1"}}};var i,d,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    steps: librarySteps,
    currentStep: 0,
    scale: "md"
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var S,g,b;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    steps: librarySteps,
    currentStep: 1
  }
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var x,y,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    steps: librarySteps,
    currentStep: 4
  }
}`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var f,C,j;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-6">
      {(["blue", "green", "red", "amber", "purple"] as const).map(color => <div key={color}>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">{color}</p>
          <Stepper steps={librarySteps} currentStep={2} color={color} />
        </div>)}
    </div>
}`,...(j=(C=c.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var h,w,N;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-6">
      {(["xs", "sm", "md", "lg"] as const).map(scale => <div key={scale}>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">{scale}</p>
          <Stepper steps={librarySteps} currentStep={2} scale={scale} />
        </div>)}
    </div>
}`,...(N=(w=p.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var k,V,B;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(B=(V=n.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var T,A,D;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    steps: librarySteps,
    currentStep: 2
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(D=(A=l.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const F=["Default","SecondStep","AllCompleted","Colors","Scales","ThreeSteps","MobileView"];export{o as AllCompleted,c as Colors,a as Default,l as MobileView,p as Scales,t as SecondStep,n as ThreeSteps,F as __namedExportsOrder,z as default};
