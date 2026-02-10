"use client";
import{j as e}from"./iframe-Cwvb0Z0D.js";import{c as z}from"./clsx-BYFsuUQf.js";import{i as o,c as B}from"./colorUtils-B5Tad61Q.js";import{u as G}from"./useUIColor-BTIPPGSW.js";import{G as i}from"./GroupBox-C2Gx9HxS.js";import"./preload-helper-CJpEdZxZ.js";import"./Label-Dci0iaZ3.js";const T={red:"cs:text-red-600",orange:"cs:text-orange-600",amber:"cs:text-amber-600",yellow:"cs:text-yellow-600",lime:"cs:text-lime-600",green:"cs:text-green-600",emerald:"cs:text-emerald-600",teal:"cs:text-teal-600",cyan:"cs:text-cyan-600",sky:"cs:text-sky-600",blue:"cs:text-blue-600",indigo:"cs:text-indigo-600",violet:"cs:text-violet-600",purple:"cs:text-purple-600",fuchsia:"cs:text-fuchsia-600",pink:"cs:text-pink-600",rose:"cs:text-rose-600",slate:"cs:text-slate-600",gray:"cs:text-gray-600",zinc:"cs:text-zinc-600",neutral:"cs:text-neutral-600",stone:"cs:text-stone-600"},V={sm:"cs:h-4 cs:w-4",md:"cs:h-6 cs:w-6"};function a({scale:s="md",color:j="blue",label:k="Loading",className:C}){const{color:N}=G()??{color:void 0},r=N??j,w=o(r)?void 0:B(r);return e.jsxs("svg",{role:"status","aria-label":k,style:w,className:z("cs:animate-spin",V[s],o(r)?T[r]:"cs-custom-spinner",C),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"cs:opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"cs:opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}a.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{scale:{required:!1,tsType:{name:"union",raw:'"sm" | "md"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:"PresetColor | CustomColor",elements:[{name:"union",raw:`| "red"
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
| "stone"`,elements:[{name:"literal",value:'"red"'},{name:"literal",value:'"orange"'},{name:"literal",value:'"amber"'},{name:"literal",value:'"yellow"'},{name:"literal",value:'"lime"'},{name:"literal",value:'"green"'},{name:"literal",value:'"emerald"'},{name:"literal",value:'"teal"'},{name:"literal",value:'"cyan"'},{name:"literal",value:'"sky"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"indigo"'},{name:"literal",value:'"violet"'},{name:"literal",value:'"purple"'},{name:"literal",value:'"fuchsia"'},{name:"literal",value:'"pink"'},{name:"literal",value:'"rose"'},{name:"literal",value:'"slate"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"zinc"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"stone"'}]},{name:"CustomColor"}]},description:"",defaultValue:{value:'"blue"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Loading"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const E={component:a,title:"Feedback/Spinner",tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["red","orange","amber","green","blue","indigo","violet","purple","pink","gray"]},scale:{control:{type:"radio"},options:["sm","md"]}}},l={args:{scale:"md",color:"blue"}},t={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-2 cs:gap-6",children:[e.jsx(i,{label:"Standard (md)",children:e.jsx(a,{scale:"md"})}),e.jsx(i,{label:"Small (sm)",children:e.jsx(a,{scale:"sm"})})]})},n={render:()=>e.jsx("div",{className:"cs:flex cs:flex-wrap cs:gap-4 cs:items-center",children:["red","orange","amber","green","emerald","cyan","blue","indigo","violet","purple","pink","gray"].map(s=>e.jsxs("div",{className:"cs:flex cs:flex-col cs:items-center cs:gap-1",children:[e.jsx(a,{color:s}),e.jsx("span",{className:"cs:text-xs cs:text-gray-500",children:s})]},s))})},c={render:()=>e.jsxs("div",{className:"cs:flex cs:items-center cs:gap-3",children:[e.jsx(a,{color:"blue"}),e.jsx("span",{className:"cs:text-sm cs:text-gray-600 cs:dark:text-gray-400",children:"読み込み中..."})]})};var m,d,p;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    scale: "md",
    color: "blue"
  }
}`,...(p=(d=l.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,x,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-2 cs:gap-6">
      <GroupBox label="Standard (md)">
        <Spinner scale="md" />
      </GroupBox>
      <GroupBox label="Small (sm)">
        <Spinner scale="sm" />
      </GroupBox>
    </div>
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var v,y,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:flex-wrap cs:gap-4 cs:items-center">
      {(["red", "orange", "amber", "green", "emerald", "cyan", "blue", "indigo", "violet", "purple", "pink", "gray"] as const).map(color => <div key={color} className="cs:flex cs:flex-col cs:items-center cs:gap-1">
          <Spinner color={color} />
          <span className="cs:text-xs cs:text-gray-500">{color}</span>
        </div>)}
    </div>
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,h,S;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:items-center cs:gap-3">
      <Spinner color="blue" />
      <span className="cs:text-sm cs:text-gray-600 cs:dark:text-gray-400">
        読み込み中...
      </span>
    </div>
}`,...(S=(h=c.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const P=["Default","Scales","Colors","WithLabel"];export{n as Colors,l as Default,t as Scales,c as WithLabel,P as __namedExportsOrder,E as default};
