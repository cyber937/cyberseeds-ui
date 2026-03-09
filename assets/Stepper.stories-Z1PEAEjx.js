"use client";
import{j as e}from"./iframe-m5NElw2l.js";import{S as l}from"./Stepper-waMejtaI.js";import"./preload-helper-CYfZjOYs.js";import"./clsx-BYFsuUQf.js";import"./colorUtils-CzaG3QqU.js";import"./colorContrast-C0ZIkquj.js";import"./useUIColor-BQPT7-YU.js";const x={component:l,title:"Navigation/Stepper",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray"]}}},s=[{label:"Select Borrower"},{label:"Confirm Borrower"},{label:"Scan Book"},{label:"Confirm"},{label:"Complete"}],a={args:{steps:s,currentStep:0,scale:"md"}},t={args:{steps:s,currentStep:1}},c={args:{steps:s,currentStep:4}},o={render:()=>e.jsx("div",{className:"cs:space-y-6",children:["blue","green","red","amber","purple"].map(r=>e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:r}),e.jsx(l,{steps:s,currentStep:2,color:r})]},r))})},p={render:()=>e.jsx("div",{className:"cs:space-y-6",children:["xs","sm","md","lg"].map(r=>e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:r}),e.jsx(l,{steps:s,currentStep:2,scale:r})]},r))})},n={args:{steps:[{label:"Input"},{label:"Confirm"},{label:"Complete"}],currentStep:1}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    steps: librarySteps,
    currentStep: 0,
    scale: "md"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    steps: librarySteps,
    currentStep: 1
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    steps: librarySteps,
    currentStep: 4
  }
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-6">
      {(["blue", "green", "red", "amber", "purple"] as const).map(color => <div key={color}>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">{color}</p>
          <Stepper steps={librarySteps} currentStep={2} color={color} />
        </div>)}
    </div>
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-6">
      {(["xs", "sm", "md", "lg"] as const).map(scale => <div key={scale}>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">{scale}</p>
          <Stepper steps={librarySteps} currentStep={2} scale={scale} />
        </div>)}
    </div>
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const y=["Default","SecondStep","AllCompleted","Colors","Scales","ThreeSteps"];export{c as AllCompleted,o as Colors,a as Default,p as Scales,t as SecondStep,n as ThreeSteps,y as __namedExportsOrder,x as default};
