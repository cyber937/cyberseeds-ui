"use client";
import{j as e}from"./iframe-DszvCNP2.js";import{c as n}from"./clsx-BYFsuUQf.js";import{b as D}from"./colorMap-B4H6m5kb.js";import{r as U,i as W,c as F,a as H}from"./colorUtils-BF1Ih5IA.js";import{u as O}from"./useUIColor-_6l39SGF.js";import{G as c}from"./GroupBox-D5Qy1-1c.js";import"./preload-helper-CJpEdZxZ.js";import"./Label-DBOsNz8O.js";const R={xs:"cs:h-1",sm:"cs:h-1.5",md:"cs:h-2.5",lg:"cs:h-3.5"},$={xs:"cs:text-[0.625rem]",sm:"cs:text-xs",md:"cs:text-sm",lg:"cs:text-base"};function a({value:l,max:s=100,scale:v="md",color:L="blue",showValue:g=!1,animated:_=!1,label:r,className:I}){const{color:z}=O()??{color:void 0},o=U(z??L),x=Math.min(100,Math.max(0,l/s*100)),A=W(o)?F(o):void 0;return e.jsxs("div",{className:n("cs:w-full cs:font-sans",I),children:[(r||g)&&e.jsxs("div",{className:n("cs:flex cs:justify-between cs:mb-1",$[v]),children:[r&&e.jsx("span",{className:"cs:text-gray-700 cs:dark:text-gray-400 cs:font-medium",children:r}),g&&e.jsxs("span",{className:"cs:text-gray-500 cs:dark:text-gray-400",children:[Math.round(x),"%"]})]}),e.jsx("div",{role:"progressbar","aria-valuenow":l,"aria-valuemin":0,"aria-valuemax":s,"aria-label":r??"Progress",className:n("cs:w-full cs:rounded-full cs:bg-gray-200 cs:dark:bg-gray-700 cs:overflow-hidden",R[v]),children:e.jsx("div",{style:{width:`${x}%`,...A},className:n("cs:h-full cs:rounded-full cs:transition-all cs:duration-300 cs:ease-in-out cs:motion-reduce:transition-none",_&&"cs-progress-animated",H(o)?D[o]:"cs-custom-progress")})})]})}a.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{value:{required:!0,tsType:{name:"number"},description:""},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},scale:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:"PresetColor | CustomColor | SemanticColor",elements:[{name:"union",raw:`| "red"
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
| "stone"`,elements:[{name:"literal",value:'"red"'},{name:"literal",value:'"orange"'},{name:"literal",value:'"amber"'},{name:"literal",value:'"yellow"'},{name:"literal",value:'"lime"'},{name:"literal",value:'"green"'},{name:"literal",value:'"emerald"'},{name:"literal",value:'"teal"'},{name:"literal",value:'"cyan"'},{name:"literal",value:'"sky"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"indigo"'},{name:"literal",value:'"violet"'},{name:"literal",value:'"purple"'},{name:"literal",value:'"fuchsia"'},{name:"literal",value:'"pink"'},{name:"literal",value:'"rose"'},{name:"literal",value:'"slate"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"zinc"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"stone"'}]},{name:"CustomColor"},{name:"union",raw:'"success" | "warning" | "error" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'}]}]},description:"",defaultValue:{value:'"blue"',computed:!1}},showValue:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},animated:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const le={component:a,title:"Feedback/Progress",tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100}},color:{control:{type:"select"},options:["red","orange","amber","green","blue","indigo","violet","purple","pink","gray"]},scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},showValue:{control:"boolean"},animated:{control:"boolean"}}},t={args:{value:60,scale:"md",color:"blue",showValue:!1}},u={render:()=>e.jsxs("div",{className:"cs:space-y-4 cs:max-w-md",children:[e.jsx(a,{value:30,label:"アップロード中",showValue:!0,color:"blue"}),e.jsx(a,{value:75,label:"処理中",showValue:!0,color:"green"}),e.jsx(a,{value:100,label:"完了",showValue:!0,color:"emerald"})]})},i={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-4 cs:gap-6",children:[e.jsx(c,{label:"Extra Small (xs)",children:e.jsx(a,{value:65,scale:"xs",color:"blue"})}),e.jsx(c,{label:"Small (sm)",children:e.jsx(a,{value:65,scale:"sm",color:"blue"})}),e.jsx(c,{label:"Standard (md)",children:e.jsx(a,{value:65,scale:"md",color:"blue"})}),e.jsx(c,{label:"Large (lg)",children:e.jsx(a,{value:65,scale:"lg",color:"blue"})})]})},m={render:()=>e.jsx("div",{className:"cs:space-y-3 cs:max-w-md",children:["red","orange","amber","green","emerald","cyan","blue","indigo","violet","purple","pink"].map((l,s)=>e.jsxs("div",{className:"cs:flex cs:items-center cs:gap-3",children:[e.jsx("span",{className:"cs:text-xs cs:text-gray-500 cs:w-14",children:l}),e.jsx(a,{value:30+s*6,color:l})]},l))})},d={render:()=>e.jsxs("div",{className:"cs:space-y-3 cs:max-w-md",children:[e.jsx(a,{value:0,showValue:!0,label:"0%",color:"gray"}),e.jsx(a,{value:25,showValue:!0,label:"25%",color:"blue"}),e.jsx(a,{value:50,showValue:!0,label:"50%",color:"indigo"}),e.jsx(a,{value:75,showValue:!0,label:"75%",color:"violet"}),e.jsx(a,{value:100,showValue:!0,label:"100%",color:"green"})]})},p={render:()=>e.jsxs("div",{className:"cs:space-y-4 cs:max-w-md",children:[e.jsx(a,{value:45,label:"アップロード中...",showValue:!0,animated:!0,color:"blue"}),e.jsx(a,{value:70,label:"処理中...",showValue:!0,animated:!0,color:"green"}),e.jsx(a,{value:30,label:"ダウンロード中...",showValue:!0,animated:!0,color:"violet"}),e.jsx(a,{value:90,label:"ほぼ完了",showValue:!0,animated:!0,color:"emerald"})]})};var b,h,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: 60,
    scale: "md",
    color: "blue",
    showValue: false
  }
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var w,y,j;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-4 cs:max-w-md">
      <Progress value={30} label="アップロード中" showValue color="blue" />
      <Progress value={75} label="処理中" showValue color="green" />
      <Progress value={100} label="完了" showValue color="emerald" />
    </div>
}`,...(j=(y=u.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var V,P,N;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-4 cs:gap-6">
      <GroupBox label="Extra Small (xs)">
        <Progress value={65} scale="xs" color="blue" />
      </GroupBox>
      <GroupBox label="Small (sm)">
        <Progress value={65} scale="sm" color="blue" />
      </GroupBox>
      <GroupBox label="Standard (md)">
        <Progress value={65} scale="md" color="blue" />
      </GroupBox>
      <GroupBox label="Large (lg)">
        <Progress value={65} scale="lg" color="blue" />
      </GroupBox>
    </div>
}`,...(N=(P=i.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var S,C,k;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-3 cs:max-w-md">
      {(["red", "orange", "amber", "green", "emerald", "cyan", "blue", "indigo", "violet", "purple", "pink"] as const).map((color, i) => <div key={color} className="cs:flex cs:items-center cs:gap-3">
          <span className="cs:text-xs cs:text-gray-500 cs:w-14">{color}</span>
          <Progress value={30 + i * 6} color={color} />
        </div>)}
    </div>
}`,...(k=(C=m.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var G,T,B;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-3 cs:max-w-md">
      <Progress value={0} showValue label="0%" color="gray" />
      <Progress value={25} showValue label="25%" color="blue" />
      <Progress value={50} showValue label="50%" color="indigo" />
      <Progress value={75} showValue label="75%" color="violet" />
      <Progress value={100} showValue label="100%" color="green" />
    </div>
}`,...(B=(T=d.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var q,M,E;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-4 cs:max-w-md">
      <Progress value={45} label="アップロード中..." showValue animated color="blue" />
      <Progress value={70} label="処理中..." showValue animated color="green" />
      <Progress value={30} label="ダウンロード中..." showValue animated color="violet" />
      <Progress value={90} label="ほぼ完了" showValue animated color="emerald" />
    </div>
}`,...(E=(M=p.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};const se=["Default","WithLabel","Scales","Colors","Values","Animated"];export{p as Animated,m as Colors,t as Default,i as Scales,d as Values,u as WithLabel,se as __namedExportsOrder,le as default};
