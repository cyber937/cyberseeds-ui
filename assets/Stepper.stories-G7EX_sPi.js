"use client";
import{j as e}from"./iframe-DzGEYPXT.js";import{S as l}from"./Stepper-_eyCAHM_.js";import"./preload-helper-CJpEdZxZ.js";import"./clsx-BYFsuUQf.js";import"./colorUtils-CzaG3QqU.js";import"./colorContrast-C0ZIkquj.js";import"./useUIColor-Oew3m0TN.js";const z={component:l,title:"Navigation/Stepper",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray"]}}},r=[{label:"借り手選択"},{label:"借り手確認"},{label:"図書スキャン"},{label:"確認"},{label:"完了"}],a={args:{steps:r,currentStep:0,scale:"md"}},t={args:{steps:r,currentStep:1}},c={args:{steps:r,currentStep:4}},p={render:()=>e.jsx("div",{className:"cs:space-y-6",children:["blue","green","red","amber","purple"].map(s=>e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:s}),e.jsx(l,{steps:r,currentStep:2,color:s})]},s))})},o={render:()=>e.jsx("div",{className:"cs:space-y-6",children:["xs","sm","md","lg"].map(s=>e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:s}),e.jsx(l,{steps:r,currentStep:2,scale:s})]},s))})},n={args:{steps:[{label:"入力"},{label:"確認"},{label:"完了"}],currentStep:1}};var m,d,i;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    steps: librarySteps,
    currentStep: 0,
    scale: "md"
  }
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var u,S,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    steps: librarySteps,
    currentStep: 1
  }
}`,...(g=(S=t.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var b,x,y;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    steps: librarySteps,
    currentStep: 4
  }
}`,...(y=(x=c.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var v,j,h;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-6">
      {(["blue", "green", "red", "amber", "purple"] as const).map(color => <div key={color}>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">{color}</p>
          <Stepper steps={librarySteps} currentStep={2} color={color} />
        </div>)}
    </div>
}`,...(h=(j=p.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};var N,f,k;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-6">
      {(["xs", "sm", "md", "lg"] as const).map(scale => <div key={scale}>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">{scale}</p>
          <Stepper steps={librarySteps} currentStep={2} scale={scale} />
        </div>)}
    </div>
}`,...(k=(f=o.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var C,T,A;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    steps: [{
      label: "入力"
    }, {
      label: "確認"
    }, {
      label: "完了"
    }],
    currentStep: 1
  }
}`,...(A=(T=n.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};const B=["Default","SecondStep","AllCompleted","Colors","Scales","ThreeSteps"];export{c as AllCompleted,p as Colors,a as Default,o as Scales,t as SecondStep,n as ThreeSteps,B as __namedExportsOrder,z as default};
