"use client";
import{j as e}from"./iframe-g7VAFW6d.js";import{c as l}from"./clsx-BYFsuUQf.js";import{r as G,c as H,i as P}from"./colorUtils-D-K_anEj.js";import{L as F}from"./colorContrast-C0ZIkquj.js";import{u as J}from"./useUIColor-DmpuWLHr.js";import"./preload-helper-CJpEdZxZ.js";const K={xs:"cs:size-5 cs:text-[0.625rem]",sm:"cs:size-6 cs:text-xs",md:"cs:size-8 cs:text-sm",lg:"cs:size-10 cs:text-base"},b={xs:"cs:text-[0.625rem] cs:max-w-14",sm:"cs:text-xs cs:max-w-16",md:"cs:text-xs cs:max-w-20",lg:"cs:text-sm cs:max-w-24"},Q={xs:"cs:h-0.5",sm:"cs:h-0.5",md:"cs:h-0.5",lg:"cs:h-1"};function W({className:s}){return e.jsx("svg",{className:s,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{fillRule:"evenodd",d:"M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",clipRule:"evenodd"})})}function x({steps:s,currentStep:g,color:U="blue",scale:a="md",className:V}){const{color:B}=J()??{color:void 0},v=G(B??U),D=H(v),S=P(v)&&F.has(v)?"cs:text-gray-900":"cs:text-white",E={xs:"cs:size-3",sm:"cs:size-3.5",md:"cs:size-4",lg:"cs:size-5"};return e.jsx("div",{style:D,className:l("cs:flex cs:items-start cs:w-full cs:font-sans",V),"aria-label":`ステップ ${g+1} / ${s.length}`,role:"group",children:s.map((y,r)=>{const t=r<g,n=r===g;return e.jsxs("div",{className:"cs:flex cs:flex-1 cs:items-center",children:[e.jsxs("div",{className:"cs:flex cs:flex-col cs:items-center cs:shrink-0",children:[e.jsx("div",{className:l("cs:rounded-full cs:flex cs:items-center cs:justify-center cs:font-semibold cs:border-2",K[a],t&&`cs-stepper-completed ${S}`,n&&`cs-stepper-active ${S}`,!t&&!n&&"cs:border-gray-300 cs:dark:border-gray-600 cs:text-gray-400 cs:dark:text-gray-500 cs:bg-white cs:dark:bg-gray-800"),"aria-current":n?"step":void 0,children:t?e.jsx(W,{className:E[a]}):r+1}),e.jsx("span",{className:l("cs:mt-1 cs:text-center cs:leading-tight",b[a],t||n?"cs:text-gray-900 cs:dark:text-gray-200":"cs:text-gray-400 cs:dark:text-gray-500"),children:y.label}),y.description&&e.jsx("span",{className:l("cs:text-center cs:leading-tight cs:text-gray-400 cs:dark:text-gray-500",b[a]),children:y.description})]}),r<s.length-1&&e.jsx("div",{className:l("cs:flex-1 cs:mx-2 cs:self-center cs:mb-6",Q[a],t?"cs-stepper-line-completed":"cs:bg-gray-300 cs:dark:bg-gray-600")})]},r)})})}x.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepperStep"}],raw:"StepperStep[]"},description:""},currentStep:{required:!0,tsType:{name:"number"},description:""},color:{required:!1,tsType:{name:"union",raw:"PresetColor | CustomColor | SemanticColor",elements:[{name:"union",raw:`| "red"
| "orange"
| "amber"
| "yellow"
| "lime"
| "green"
| "emerald"
| "teal"
| "cyan"
| "sky"
| "blue"
| "indigo"
| "violet"
| "purple"
| "fuchsia"
| "pink"
| "rose"
| "slate"
| "gray"
| "zinc"
| "neutral"
| "stone"`,elements:[{name:"literal",value:'"red"'},{name:"literal",value:'"orange"'},{name:"literal",value:'"amber"'},{name:"literal",value:'"yellow"'},{name:"literal",value:'"lime"'},{name:"literal",value:'"green"'},{name:"literal",value:'"emerald"'},{name:"literal",value:'"teal"'},{name:"literal",value:'"cyan"'},{name:"literal",value:'"sky"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"indigo"'},{name:"literal",value:'"violet"'},{name:"literal",value:'"purple"'},{name:"literal",value:'"fuchsia"'},{name:"literal",value:'"pink"'},{name:"literal",value:'"rose"'},{name:"literal",value:'"slate"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"zinc"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"stone"'}]},{name:"CustomColor"},{name:"union",raw:'"success" | "warning" | "error" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'}]}]},description:"",defaultValue:{value:'"blue"',computed:!1}},scale:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const re={component:x,title:"Navigation/Stepper",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray"]}}},c=[{label:"借り手選択"},{label:"借り手確認"},{label:"図書スキャン"},{label:"確認"},{label:"完了"}],o={args:{steps:c,currentStep:0,scale:"md"}},i={args:{steps:c,currentStep:1}},m={args:{steps:c,currentStep:4}},p={render:()=>e.jsx("div",{className:"cs:space-y-6",children:["blue","green","red","amber","purple"].map(s=>e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:s}),e.jsx(x,{steps:c,currentStep:2,color:s})]},s))})},d={render:()=>e.jsx("div",{className:"cs:space-y-6",children:["xs","sm","md","lg"].map(s=>e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:s}),e.jsx(x,{steps:c,currentStep:2,scale:s})]},s))})},u={args:{steps:[{label:"入力"},{label:"確認"},{label:"完了"}],currentStep:1}};var f,h,w;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    steps: librarySteps,
    currentStep: 0,
    scale: "md"
  }
}`,...(w=(h=o.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var j,C,N;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    steps: librarySteps,
    currentStep: 1
  }
}`,...(N=(C=i.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var k,z,T;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    steps: librarySteps,
    currentStep: 4
  }
}`,...(T=(z=m.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var I,_,q;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-6">
      {(["blue", "green", "red", "amber", "purple"] as const).map(color => <div key={color}>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">{color}</p>
          <Stepper steps={librarySteps} currentStep={2} color={color} />
        </div>)}
    </div>
}`,...(q=(_=p.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var A,M,R;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-6">
      {(["xs", "sm", "md", "lg"] as const).map(scale => <div key={scale}>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">{scale}</p>
          <Stepper steps={librarySteps} currentStep={2} scale={scale} />
        </div>)}
    </div>
}`,...(R=(M=d.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var $,L,O;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(O=(L=u.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const te=["Default","SecondStep","AllCompleted","Colors","Scales","ThreeSteps"];export{m as AllCompleted,p as Colors,o as Default,d as Scales,i as SecondStep,u as ThreeSteps,te as __namedExportsOrder,re as default};
