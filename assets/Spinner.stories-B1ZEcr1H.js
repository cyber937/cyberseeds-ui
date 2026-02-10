"use client";
import{j as e}from"./iframe-DszvCNP2.js";import{c as N}from"./clsx-BYFsuUQf.js";import{r as B,i as G,c as z,a as L}from"./colorUtils-BF1Ih5IA.js";import{u as T}from"./useUIColor-_6l39SGF.js";import{G as l}from"./GroupBox-D5Qy1-1c.js";import"./preload-helper-CJpEdZxZ.js";import"./Label-DBOsNz8O.js";const V={red:"cs:text-red-600 cs:dark:text-red-400",orange:"cs:text-orange-600 cs:dark:text-orange-400",amber:"cs:text-amber-600 cs:dark:text-amber-400",yellow:"cs:text-yellow-600 cs:dark:text-yellow-400",lime:"cs:text-lime-600 cs:dark:text-lime-400",green:"cs:text-green-600 cs:dark:text-green-400",emerald:"cs:text-emerald-600 cs:dark:text-emerald-400",teal:"cs:text-teal-600 cs:dark:text-teal-400",cyan:"cs:text-cyan-600 cs:dark:text-cyan-400",sky:"cs:text-sky-600 cs:dark:text-sky-400",blue:"cs:text-blue-600 cs:dark:text-blue-400",indigo:"cs:text-indigo-600 cs:dark:text-indigo-400",violet:"cs:text-violet-600 cs:dark:text-violet-400",purple:"cs:text-purple-600 cs:dark:text-purple-400",fuchsia:"cs:text-fuchsia-600 cs:dark:text-fuchsia-400",pink:"cs:text-pink-600 cs:dark:text-pink-400",rose:"cs:text-rose-600 cs:dark:text-rose-400",slate:"cs:text-slate-600 cs:dark:text-slate-400",gray:"cs:text-gray-600 cs:dark:text-gray-400",zinc:"cs:text-zinc-600 cs:dark:text-zinc-400",neutral:"cs:text-neutral-600 cs:dark:text-neutral-400",stone:"cs:text-stone-600 cs:dark:text-stone-400"},q={xs:"cs:h-3 cs:w-3",sm:"cs:h-4 cs:w-4",md:"cs:h-6 cs:w-6",lg:"cs:h-8 cs:w-8"};function a({scale:s="md",color:h="blue",label:S="Loading",className:w}){const{color:j}=T()??{color:void 0},r=B(j??h),C=G(r)?z(r):void 0;return e.jsxs("svg",{role:"status","aria-label":S,style:C,className:N("cs:animate-spin cs:motion-reduce:animate-pulse",q[s],L(r)?V[r]:"cs-custom-spinner",w),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"cs:opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"cs:opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}a.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{scale:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:"PresetColor | CustomColor | SemanticColor",elements:[{name:"union",raw:`| "red"
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
| "stone"`,elements:[{name:"literal",value:'"red"'},{name:"literal",value:'"orange"'},{name:"literal",value:'"amber"'},{name:"literal",value:'"yellow"'},{name:"literal",value:'"lime"'},{name:"literal",value:'"green"'},{name:"literal",value:'"emerald"'},{name:"literal",value:'"teal"'},{name:"literal",value:'"cyan"'},{name:"literal",value:'"sky"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"indigo"'},{name:"literal",value:'"violet"'},{name:"literal",value:'"purple"'},{name:"literal",value:'"fuchsia"'},{name:"literal",value:'"pink"'},{name:"literal",value:'"rose"'},{name:"literal",value:'"slate"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"zinc"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"stone"'}]},{name:"CustomColor"},{name:"union",raw:'"success" | "warning" | "error" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'}]}]},description:"",defaultValue:{value:'"blue"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Loading"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const U={component:a,title:"Feedback/Spinner",tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["red","orange","amber","green","blue","indigo","violet","purple","pink","gray"]},scale:{control:{type:"radio"},options:["xs","sm","md","lg"]}}},t={args:{scale:"md",color:"blue"}},n={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-4 cs:gap-6",children:[e.jsx(l,{label:"Extra Small (xs)",children:e.jsx(a,{scale:"xs"})}),e.jsx(l,{label:"Small (sm)",children:e.jsx(a,{scale:"sm"})}),e.jsx(l,{label:"Standard (md)",children:e.jsx(a,{scale:"md"})}),e.jsx(l,{label:"Large (lg)",children:e.jsx(a,{scale:"lg"})})]})},c={render:()=>e.jsx("div",{className:"cs:flex cs:flex-wrap cs:gap-4 cs:items-center",children:["red","orange","amber","green","emerald","cyan","blue","indigo","violet","purple","pink","gray"].map(s=>e.jsxs("div",{className:"cs:flex cs:flex-col cs:items-center cs:gap-1",children:[e.jsx(a,{color:s}),e.jsx("span",{className:"cs:text-xs cs:text-gray-500",children:s})]},s))})},o={render:()=>e.jsxs("div",{className:"cs:flex cs:items-center cs:gap-3",children:[e.jsx(a,{color:"blue"}),e.jsx("span",{className:"cs:text-sm cs:text-gray-600 cs:dark:text-gray-400",children:"読み込み中..."})]})};var i,m,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    scale: "md",
    color: "blue"
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,p,x;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-4 cs:gap-6">
      <GroupBox label="Extra Small (xs)">
        <Spinner scale="xs" />
      </GroupBox>
      <GroupBox label="Small (sm)">
        <Spinner scale="sm" />
      </GroupBox>
      <GroupBox label="Standard (md)">
        <Spinner scale="md" />
      </GroupBox>
      <GroupBox label="Large (lg)">
        <Spinner scale="lg" />
      </GroupBox>
    </div>
}`,...(x=(p=n.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var g,v,y;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:flex-wrap cs:gap-4 cs:items-center">
      {(["red", "orange", "amber", "green", "emerald", "cyan", "blue", "indigo", "violet", "purple", "pink", "gray"] as const).map(color => <div key={color} className="cs:flex cs:flex-col cs:items-center cs:gap-1">
          <Spinner color={color} />
          <span className="cs:text-xs cs:text-gray-500">{color}</span>
        </div>)}
    </div>
}`,...(y=(v=c.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var k,f,b;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:items-center cs:gap-3">
      <Spinner color="blue" />
      <span className="cs:text-sm cs:text-gray-600 cs:dark:text-gray-400">
        読み込み中...
      </span>
    </div>
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const A=["Default","Scales","Colors","WithLabel"];export{c as Colors,t as Default,n as Scales,o as WithLabel,A as __namedExportsOrder,U as default};
