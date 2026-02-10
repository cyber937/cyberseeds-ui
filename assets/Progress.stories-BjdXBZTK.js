"use client";
import{j as e}from"./iframe-Cwvb0Z0D.js";import{c as n}from"./clsx-BYFsuUQf.js";import{b as U}from"./colorMap-EN3et11X.js";import{i as b,c as W}from"./colorUtils-B5Tad61Q.js";import{u as F}from"./useUIColor-BTIPPGSW.js";import{G as x}from"./GroupBox-C2Gx9HxS.js";import"./preload-helper-CJpEdZxZ.js";import"./Label-Dci0iaZ3.js";const H={sm:"cs:h-1.5",md:"cs:h-2.5"},O={sm:"cs:text-xs",md:"cs:text-sm"};function a({value:l,max:s=100,scale:p="md",color:z="blue",showValue:v=!1,animated:A=!1,label:r,className:D}){const{color:E}=F()??{color:void 0},o=E??z,g=Math.min(100,Math.max(0,l/s*100)),L=b(o)?void 0:W(o);return e.jsxs("div",{className:n("cs:w-full cs:font-sans",D),children:[(r||v)&&e.jsxs("div",{className:n("cs:flex cs:justify-between cs:mb-1",O[p]),children:[r&&e.jsx("span",{className:"cs:text-gray-700 cs:dark:text-gray-300 cs:font-medium",children:r}),v&&e.jsxs("span",{className:"cs:text-gray-500 cs:dark:text-gray-400",children:[Math.round(g),"%"]})]}),e.jsx("div",{role:"progressbar","aria-valuenow":l,"aria-valuemin":0,"aria-valuemax":s,"aria-label":r??"Progress",className:n("cs:w-full cs:rounded-full cs:bg-gray-200 cs:dark:bg-gray-700 cs:overflow-hidden",H[p]),children:e.jsx("div",{style:{width:`${g}%`,...L},className:n("cs:h-full cs:rounded-full cs:transition-all cs:duration-300 cs:ease-in-out",A&&"cs-progress-animated",b(o)?U[o]:"cs-custom-progress")})})]})}a.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{value:{required:!0,tsType:{name:"number"},description:""},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},scale:{required:!1,tsType:{name:"union",raw:'"sm" | "md"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:"PresetColor | CustomColor",elements:[{name:"union",raw:`| "red"
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
| "stone"`,elements:[{name:"literal",value:'"red"'},{name:"literal",value:'"orange"'},{name:"literal",value:'"amber"'},{name:"literal",value:'"yellow"'},{name:"literal",value:'"lime"'},{name:"literal",value:'"green"'},{name:"literal",value:'"emerald"'},{name:"literal",value:'"teal"'},{name:"literal",value:'"cyan"'},{name:"literal",value:'"sky"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"indigo"'},{name:"literal",value:'"violet"'},{name:"literal",value:'"purple"'},{name:"literal",value:'"fuchsia"'},{name:"literal",value:'"pink"'},{name:"literal",value:'"rose"'},{name:"literal",value:'"slate"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"zinc"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"stone"'}]},{name:"CustomColor"}]},description:"",defaultValue:{value:'"blue"',computed:!1}},showValue:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},animated:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ee={component:a,title:"Feedback/Progress",tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100}},color:{control:{type:"select"},options:["red","orange","amber","green","blue","indigo","violet","purple","pink","gray"]},scale:{control:{type:"radio"},options:["sm","md"]},showValue:{control:"boolean"},animated:{control:"boolean"}}},c={args:{value:60,scale:"md",color:"blue",showValue:!1}},t={render:()=>e.jsxs("div",{className:"cs:space-y-4 cs:max-w-md",children:[e.jsx(a,{value:30,label:"アップロード中",showValue:!0,color:"blue"}),e.jsx(a,{value:75,label:"処理中",showValue:!0,color:"green"}),e.jsx(a,{value:100,label:"完了",showValue:!0,color:"emerald"})]})},u={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-2 cs:gap-6",children:[e.jsx(x,{label:"Standard (md)",children:e.jsx(a,{value:65,scale:"md",color:"blue"})}),e.jsx(x,{label:"Small (sm)",children:e.jsx(a,{value:65,scale:"sm",color:"blue"})})]})},i={render:()=>e.jsx("div",{className:"cs:space-y-3 cs:max-w-md",children:["red","orange","amber","green","emerald","cyan","blue","indigo","violet","purple","pink"].map((l,s)=>e.jsxs("div",{className:"cs:flex cs:items-center cs:gap-3",children:[e.jsx("span",{className:"cs:text-xs cs:text-gray-500 cs:w-14",children:l}),e.jsx(a,{value:30+s*6,color:l})]},l))})},m={render:()=>e.jsxs("div",{className:"cs:space-y-3 cs:max-w-md",children:[e.jsx(a,{value:0,showValue:!0,label:"0%",color:"gray"}),e.jsx(a,{value:25,showValue:!0,label:"25%",color:"blue"}),e.jsx(a,{value:50,showValue:!0,label:"50%",color:"indigo"}),e.jsx(a,{value:75,showValue:!0,label:"75%",color:"violet"}),e.jsx(a,{value:100,showValue:!0,label:"100%",color:"green"})]})},d={render:()=>e.jsxs("div",{className:"cs:space-y-4 cs:max-w-md",children:[e.jsx(a,{value:45,label:"アップロード中...",showValue:!0,animated:!0,color:"blue"}),e.jsx(a,{value:70,label:"処理中...",showValue:!0,animated:!0,color:"green"}),e.jsx(a,{value:30,label:"ダウンロード中...",showValue:!0,animated:!0,color:"violet"}),e.jsx(a,{value:90,label:"ほぼ完了",showValue:!0,animated:!0,color:"emerald"})]})};var h,f,w;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    value: 60,
    scale: "md",
    color: "blue",
    showValue: false
  }
}`,...(w=(f=c.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var y,V,j;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-4 cs:max-w-md">
      <Progress value={30} label="アップロード中" showValue color="blue" />
      <Progress value={75} label="処理中" showValue color="green" />
      <Progress value={100} label="完了" showValue color="emerald" />
    </div>
}`,...(j=(V=t.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var N,P,S;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-2 cs:gap-6">
      <GroupBox label="Standard (md)">
        <Progress value={65} scale="md" color="blue" />
      </GroupBox>
      <GroupBox label="Small (sm)">
        <Progress value={65} scale="sm" color="blue" />
      </GroupBox>
    </div>
}`,...(S=(P=u.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var k,C,T;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-3 cs:max-w-md">
      {(["red", "orange", "amber", "green", "emerald", "cyan", "blue", "indigo", "violet", "purple", "pink"] as const).map((color, i) => <div key={color} className="cs:flex cs:items-center cs:gap-3">
          <span className="cs:text-xs cs:text-gray-500 cs:w-14">{color}</span>
          <Progress value={30 + i * 6} color={color} />
        </div>)}
    </div>
}`,...(T=(C=i.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var q,G,M;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-3 cs:max-w-md">
      <Progress value={0} showValue label="0%" color="gray" />
      <Progress value={25} showValue label="25%" color="blue" />
      <Progress value={50} showValue label="50%" color="indigo" />
      <Progress value={75} showValue label="75%" color="violet" />
      <Progress value={100} showValue label="100%" color="green" />
    </div>
}`,...(M=(G=m.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var B,_,I;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-4 cs:max-w-md">
      <Progress value={45} label="アップロード中..." showValue animated color="blue" />
      <Progress value={70} label="処理中..." showValue animated color="green" />
      <Progress value={30} label="ダウンロード中..." showValue animated color="violet" />
      <Progress value={90} label="ほぼ完了" showValue animated color="emerald" />
    </div>
}`,...(I=(_=d.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};const ae=["Default","WithLabel","Scales","Colors","Values","Animated"];export{d as Animated,i as Colors,c as Default,u as Scales,m as Values,t as WithLabel,ae as __namedExportsOrder,ee as default};
