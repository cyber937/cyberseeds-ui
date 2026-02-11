"use client";
import{j as e}from"./iframe-DzGEYPXT.js";import{B as s}from"./Badge-C6HoUE6J.js";import{G as a}from"./GroupBox-DlzRaU1g.js";import"./preload-helper-CJpEdZxZ.js";import"./clsx-BYFsuUQf.js";import"./colorContrast-C0ZIkquj.js";import"./colorUtils-CzaG3QqU.js";import"./useUIColor-Oew3m0TN.js";import"./Label-Bv9lDuhv.js";const V={component:s,title:"Data Display/Badge",tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["solid","outline","dot"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","gray"]},scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},max:{control:"number"}}},r={args:{children:"5",variant:"solid",color:"blue",scale:"md"}},c={render:()=>e.jsxs("div",{className:"cs:flex cs:flex-wrap cs:items-center cs:gap-4",children:[e.jsx(a,{label:"Solid",children:e.jsxs("div",{className:"cs:flex cs:flex-wrap cs:gap-2",children:[e.jsx(s,{variant:"solid",color:"blue",children:"3"}),e.jsx(s,{variant:"solid",color:"red",children:"New"}),e.jsx(s,{variant:"solid",color:"green",children:"Active"})]})}),e.jsx(a,{label:"Outline",children:e.jsxs("div",{className:"cs:flex cs:flex-wrap cs:gap-2",children:[e.jsx(s,{variant:"outline",color:"blue",children:"3"}),e.jsx(s,{variant:"outline",color:"red",children:"New"}),e.jsx(s,{variant:"outline",color:"green",children:"Active"})]})}),e.jsx(a,{label:"Dot",children:e.jsxs("div",{className:"cs:flex cs:flex-wrap cs:gap-2 cs:items-center",children:[e.jsx(s,{variant:"dot",color:"green"}),e.jsx(s,{variant:"dot",color:"red"}),e.jsx(s,{variant:"dot",color:"amber"})]})})]})},l={render:()=>e.jsx("div",{className:"cs:flex cs:flex-wrap cs:gap-2",children:["red","orange","amber","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","gray"].map(t=>e.jsx(s,{color:t,children:t},t))})},o={render:()=>e.jsxs("div",{className:"cs:flex cs:flex-wrap cs:items-center cs:gap-4",children:[e.jsx(s,{color:"red",max:99,children:5}),e.jsx(s,{color:"red",max:99,children:42}),e.jsx(s,{color:"red",max:99,children:99}),e.jsx(s,{color:"red",max:99,children:150}),e.jsx(s,{color:"red",max:9,children:1e3})]})},n={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6",children:[e.jsx(a,{label:"Extra Small (xs)",children:e.jsxs("div",{className:"cs:flex cs:flex-wrap cs:gap-2 cs:items-center",children:[e.jsx(s,{scale:"xs",color:"blue",children:"12"}),e.jsx(s,{scale:"xs",variant:"outline",color:"red",children:"New"}),e.jsx(s,{scale:"xs",variant:"dot",color:"green"})]})}),e.jsx(a,{label:"Small (sm)",children:e.jsxs("div",{className:"cs:flex cs:flex-wrap cs:gap-2 cs:items-center",children:[e.jsx(s,{scale:"sm",color:"blue",children:"12"}),e.jsx(s,{scale:"sm",variant:"outline",color:"red",children:"New"}),e.jsx(s,{scale:"sm",variant:"dot",color:"green"})]})}),e.jsx(a,{label:"Standard (md)",children:e.jsxs("div",{className:"cs:flex cs:flex-wrap cs:gap-2 cs:items-center",children:[e.jsx(s,{scale:"md",color:"blue",children:"12"}),e.jsx(s,{scale:"md",variant:"outline",color:"red",children:"New"}),e.jsx(s,{scale:"md",variant:"dot",color:"green"})]})}),e.jsx(a,{label:"Large (lg)",children:e.jsxs("div",{className:"cs:flex cs:flex-wrap cs:gap-2 cs:items-center",children:[e.jsx(s,{scale:"lg",color:"blue",children:"12"}),e.jsx(s,{scale:"lg",variant:"outline",color:"red",children:"New"}),e.jsx(s,{scale:"lg",variant:"dot",color:"green"})]})})]})},d={render:()=>e.jsxs("div",{className:"cs:flex cs:flex-wrap cs:gap-8 cs:items-center",children:[e.jsxs(s.Wrapper,{children:[e.jsx("div",{className:"cs:h-10 cs:w-10 cs:bg-gray-200 cs:rounded-full cs:flex cs:items-center cs:justify-center",children:e.jsx("span",{className:"cs:text-gray-600 cs:text-sm",children:"U"})}),e.jsx(s,{color:"red",className:"cs:absolute cs:-top-1 cs:-right-1",children:"3"})]}),e.jsxs(s.Wrapper,{children:[e.jsx("div",{className:"cs:h-10 cs:w-10 cs:bg-gray-200 cs:rounded cs:flex cs:items-center cs:justify-center",children:e.jsx("span",{className:"cs:text-gray-600 cs:text-sm",children:"M"})}),e.jsx(s,{variant:"dot",color:"green",className:"cs:absolute cs:top-0 cs:right-0"})]}),e.jsxs(s.Wrapper,{children:[e.jsx("div",{className:"cs:h-10 cs:w-10 cs:bg-gray-200 cs:rounded cs:flex cs:items-center cs:justify-center",children:e.jsx("span",{className:"cs:text-gray-600 cs:text-sm",children:"N"})}),e.jsx(s,{color:"red",scale:"sm",max:99,className:"cs:absolute cs:-top-1 cs:-right-2",children:150})]})]})};var i,g,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: "5",
    variant: "solid",
    color: "blue",
    scale: "md"
  }
}`,...(m=(g=r.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var x,p,u;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:flex-wrap cs:items-center cs:gap-4">
      <GroupBox label="Solid">
        <div className="cs:flex cs:flex-wrap cs:gap-2">
          <Badge variant="solid" color="blue">3</Badge>
          <Badge variant="solid" color="red">New</Badge>
          <Badge variant="solid" color="green">Active</Badge>
        </div>
      </GroupBox>
      <GroupBox label="Outline">
        <div className="cs:flex cs:flex-wrap cs:gap-2">
          <Badge variant="outline" color="blue">3</Badge>
          <Badge variant="outline" color="red">New</Badge>
          <Badge variant="outline" color="green">Active</Badge>
        </div>
      </GroupBox>
      <GroupBox label="Dot">
        <div className="cs:flex cs:flex-wrap cs:gap-2 cs:items-center">
          <Badge variant="dot" color="green" />
          <Badge variant="dot" color="red" />
          <Badge variant="dot" color="amber" />
        </div>
      </GroupBox>
    </div>
}`,...(u=(p=c.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var v,B,h;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:flex-wrap cs:gap-2">
      {(["red", "orange", "amber", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "gray"] as const).map(color => <Badge key={color} color={color}>
          {color}
        </Badge>)}
    </div>
}`,...(h=(B=l.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};var f,j,N;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:flex-wrap cs:items-center cs:gap-4">
      <Badge color="red" max={99}>{5}</Badge>
      <Badge color="red" max={99}>{42}</Badge>
      <Badge color="red" max={99}>{99}</Badge>
      <Badge color="red" max={99}>{150}</Badge>
      <Badge color="red" max={9}>{1000}</Badge>
    </div>
}`,...(N=(j=o.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var b,w,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6">
      <GroupBox label="Extra Small (xs)">
        <div className="cs:flex cs:flex-wrap cs:gap-2 cs:items-center">
          <Badge scale="xs" color="blue">12</Badge>
          <Badge scale="xs" variant="outline" color="red">New</Badge>
          <Badge scale="xs" variant="dot" color="green" />
        </div>
      </GroupBox>
      <GroupBox label="Small (sm)">
        <div className="cs:flex cs:flex-wrap cs:gap-2 cs:items-center">
          <Badge scale="sm" color="blue">12</Badge>
          <Badge scale="sm" variant="outline" color="red">New</Badge>
          <Badge scale="sm" variant="dot" color="green" />
        </div>
      </GroupBox>
      <GroupBox label="Standard (md)">
        <div className="cs:flex cs:flex-wrap cs:gap-2 cs:items-center">
          <Badge scale="md" color="blue">12</Badge>
          <Badge scale="md" variant="outline" color="red">New</Badge>
          <Badge scale="md" variant="dot" color="green" />
        </div>
      </GroupBox>
      <GroupBox label="Large (lg)">
        <div className="cs:flex cs:flex-wrap cs:gap-2 cs:items-center">
          <Badge scale="lg" color="blue">12</Badge>
          <Badge scale="lg" variant="outline" color="red">New</Badge>
          <Badge scale="lg" variant="dot" color="green" />
        </div>
      </GroupBox>
    </div>
}`,...(y=(w=n.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var G,S,W;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:flex-wrap cs:gap-8 cs:items-center">
      <Badge.Wrapper>
        <div className="cs:h-10 cs:w-10 cs:bg-gray-200 cs:rounded-full cs:flex cs:items-center cs:justify-center">
          <span className="cs:text-gray-600 cs:text-sm">U</span>
        </div>
        <Badge color="red" className="cs:absolute cs:-top-1 cs:-right-1">3</Badge>
      </Badge.Wrapper>
      <Badge.Wrapper>
        <div className="cs:h-10 cs:w-10 cs:bg-gray-200 cs:rounded cs:flex cs:items-center cs:justify-center">
          <span className="cs:text-gray-600 cs:text-sm">M</span>
        </div>
        <Badge variant="dot" color="green" className="cs:absolute cs:top-0 cs:right-0" />
      </Badge.Wrapper>
      <Badge.Wrapper>
        <div className="cs:h-10 cs:w-10 cs:bg-gray-200 cs:rounded cs:flex cs:items-center cs:justify-center">
          <span className="cs:text-gray-600 cs:text-sm">N</span>
        </div>
        <Badge color="red" scale="sm" max={99} className="cs:absolute cs:-top-1 cs:-right-2">{150}</Badge>
      </Badge.Wrapper>
    </div>
}`,...(W=(S=d.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};const _=["Default","Variants","Colors","WithMax","Scales","WithWrapper"];export{l as Colors,r as Default,n as Scales,c as Variants,o as WithMax,d as WithWrapper,_ as __namedExportsOrder,V as default};
