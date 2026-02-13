"use client";
import{j as e}from"./iframe-BH6SszEl.js";import{P as s}from"./Progress-BH9oxxfn.js";import{G as a}from"./GroupBox-CGyAX-li.js";import"./preload-helper-CJpEdZxZ.js";import"./clsx-BYFsuUQf.js";import"./colorUtils-CzaG3QqU.js";import"./useUIColor-ByGmMwax.js";import"./Label-B4gz59JQ.js";const _={component:s,title:"Feedback/Progress",tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100}},color:{control:{type:"select"},options:["red","orange","amber","green","blue","indigo","violet","purple","pink","gray"]},scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},showValue:{control:"boolean"},animated:{control:"boolean"}}},l={args:{value:60,scale:"md",color:"blue",showValue:!1}},r={render:()=>e.jsxs("div",{className:"cs:space-y-4 cs:max-w-md",children:[e.jsx(s,{value:30,label:"Uploading",showValue:!0,color:"blue"}),e.jsx(s,{value:75,label:"Processing",showValue:!0,color:"green"}),e.jsx(s,{value:100,label:"Complete",showValue:!0,color:"emerald"})]})},o={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6",children:[e.jsx(a,{label:"Extra Small (xs)",children:e.jsx(s,{value:65,scale:"xs",color:"blue"})}),e.jsx(a,{label:"Small (sm)",children:e.jsx(s,{value:65,scale:"sm",color:"blue"})}),e.jsx(a,{label:"Standard (md)",children:e.jsx(s,{value:65,scale:"md",color:"blue"})}),e.jsx(a,{label:"Large (lg)",children:e.jsx(s,{value:65,scale:"lg",color:"blue"})})]})},c={render:()=>e.jsx("div",{className:"cs:space-y-3 cs:max-w-md",children:["red","orange","amber","green","emerald","cyan","blue","indigo","violet","purple","pink"].map((d,B)=>e.jsxs("div",{className:"cs:flex cs:items-center cs:gap-3",children:[e.jsx("span",{className:"cs:text-xs cs:text-gray-500 cs:w-14",children:d}),e.jsx(s,{value:30+B*6,color:d})]},d))})},n={render:()=>e.jsxs("div",{className:"cs:space-y-3 cs:max-w-md",children:[e.jsx(s,{value:0,showValue:!0,label:"0%",color:"gray"}),e.jsx(s,{value:25,showValue:!0,label:"25%",color:"blue"}),e.jsx(s,{value:50,showValue:!0,label:"50%",color:"indigo"}),e.jsx(s,{value:75,showValue:!0,label:"75%",color:"violet"}),e.jsx(s,{value:100,showValue:!0,label:"100%",color:"green"})]})},u={render:()=>e.jsxs("div",{className:"cs:space-y-4 cs:max-w-md",children:[e.jsx(s,{value:45,label:"Uploading...",showValue:!0,animated:!0,color:"blue"}),e.jsx(s,{value:70,label:"Processing...",showValue:!0,animated:!0,color:"green"}),e.jsx(s,{value:30,label:"Downloading...",showValue:!0,animated:!0,color:"violet"}),e.jsx(s,{value:90,label:"Almost done",showValue:!0,animated:!0,color:"emerald"})]})};var m,t,i;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    value: 60,
    scale: "md",
    color: "blue",
    showValue: false
  }
}`,...(i=(t=l.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var p,g,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-4 cs:max-w-md">
      <Progress value={30} label="Uploading" showValue color="blue" />
      <Progress value={75} label="Processing" showValue color="green" />
      <Progress value={100} label="Complete" showValue color="emerald" />
    </div>
}`,...(x=(g=r.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var v,b,h;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6">
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
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var w,j,V;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-3 cs:max-w-md">
      {(["red", "orange", "amber", "green", "emerald", "cyan", "blue", "indigo", "violet", "purple", "pink"] as const).map((color, i) => <div key={color} className="cs:flex cs:items-center cs:gap-3">
          <span className="cs:text-xs cs:text-gray-500 cs:w-14">{color}</span>
          <Progress value={30 + i * 6} color={color} />
        </div>)}
    </div>
}`,...(V=(j=c.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var P,y,N;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-3 cs:max-w-md">
      <Progress value={0} showValue label="0%" color="gray" />
      <Progress value={25} showValue label="25%" color="blue" />
      <Progress value={50} showValue label="50%" color="indigo" />
      <Progress value={75} showValue label="75%" color="violet" />
      <Progress value={100} showValue label="100%" color="green" />
    </div>
}`,...(N=(y=n.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var S,f,G;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-4 cs:max-w-md">
      <Progress value={45} label="Uploading..." showValue animated color="blue" />
      <Progress value={70} label="Processing..." showValue animated color="green" />
      <Progress value={30} label="Downloading..." showValue animated color="violet" />
      <Progress value={90} label="Almost done" showValue animated color="emerald" />
    </div>
}`,...(G=(f=u.parameters)==null?void 0:f.docs)==null?void 0:G.source}}};const F=["Default","WithLabel","Scales","Colors","Values","Animated"];export{u as Animated,c as Colors,l as Default,o as Scales,n as Values,r as WithLabel,F as __namedExportsOrder,_ as default};
