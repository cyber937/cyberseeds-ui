"use client";
import{j as e}from"./iframe-Cwvb0Z0D.js";import{c as u}from"./clsx-BYFsuUQf.js";import{i as t,c as _}from"./colorUtils-B5Tad61Q.js";import{u as I}from"./useUIColor-BTIPPGSW.js";import{G as l}from"./GroupBox-C2Gx9HxS.js";import"./preload-helper-CJpEdZxZ.js";import"./Label-Dci0iaZ3.js";const O={red:"cs:bg-red-600 cs:text-white",orange:"cs:bg-orange-600 cs:text-white",amber:"cs:bg-amber-600 cs:text-white",yellow:"cs:bg-yellow-500 cs:text-white",lime:"cs:bg-lime-600 cs:text-white",green:"cs:bg-green-600 cs:text-white",emerald:"cs:bg-emerald-600 cs:text-white",teal:"cs:bg-teal-600 cs:text-white",cyan:"cs:bg-cyan-600 cs:text-white",sky:"cs:bg-sky-600 cs:text-white",blue:"cs:bg-blue-600 cs:text-white",indigo:"cs:bg-indigo-600 cs:text-white",violet:"cs:bg-violet-600 cs:text-white",purple:"cs:bg-purple-600 cs:text-white",fuchsia:"cs:bg-fuchsia-600 cs:text-white",pink:"cs:bg-pink-600 cs:text-white",rose:"cs:bg-rose-600 cs:text-white",slate:"cs:bg-slate-600 cs:text-white",gray:"cs:bg-gray-600 cs:text-white",zinc:"cs:bg-zinc-600 cs:text-white",neutral:"cs:bg-neutral-600 cs:text-white",stone:"cs:bg-stone-600 cs:text-white"},E={red:"cs:border-red-400 cs:text-red-700 cs:dark:border-red-500 cs:dark:text-red-400",orange:"cs:border-orange-400 cs:text-orange-700 cs:dark:border-orange-500 cs:dark:text-orange-400",amber:"cs:border-amber-400 cs:text-amber-700 cs:dark:border-amber-500 cs:dark:text-amber-400",yellow:"cs:border-yellow-400 cs:text-yellow-700 cs:dark:border-yellow-500 cs:dark:text-yellow-400",lime:"cs:border-lime-400 cs:text-lime-700 cs:dark:border-lime-500 cs:dark:text-lime-400",green:"cs:border-green-400 cs:text-green-700 cs:dark:border-green-500 cs:dark:text-green-400",emerald:"cs:border-emerald-400 cs:text-emerald-700 cs:dark:border-emerald-500 cs:dark:text-emerald-400",teal:"cs:border-teal-400 cs:text-teal-700 cs:dark:border-teal-500 cs:dark:text-teal-400",cyan:"cs:border-cyan-400 cs:text-cyan-700 cs:dark:border-cyan-500 cs:dark:text-cyan-400",sky:"cs:border-sky-400 cs:text-sky-700 cs:dark:border-sky-500 cs:dark:text-sky-400",blue:"cs:border-blue-400 cs:text-blue-700 cs:dark:border-blue-500 cs:dark:text-blue-400",indigo:"cs:border-indigo-400 cs:text-indigo-700 cs:dark:border-indigo-500 cs:dark:text-indigo-400",violet:"cs:border-violet-400 cs:text-violet-700 cs:dark:border-violet-500 cs:dark:text-violet-400",purple:"cs:border-purple-400 cs:text-purple-700 cs:dark:border-purple-500 cs:dark:text-purple-400",fuchsia:"cs:border-fuchsia-400 cs:text-fuchsia-700 cs:dark:border-fuchsia-500 cs:dark:text-fuchsia-400",pink:"cs:border-pink-400 cs:text-pink-700 cs:dark:border-pink-500 cs:dark:text-pink-400",rose:"cs:border-rose-400 cs:text-rose-700 cs:dark:border-rose-500 cs:dark:text-rose-400",slate:"cs:border-slate-400 cs:text-slate-700 cs:dark:border-slate-500 cs:dark:text-slate-400",gray:"cs:border-gray-400 cs:text-gray-700 cs:dark:border-gray-500 cs:dark:text-gray-400",zinc:"cs:border-zinc-400 cs:text-zinc-700 cs:dark:border-zinc-500 cs:dark:text-zinc-400",neutral:"cs:border-neutral-400 cs:text-neutral-700 cs:dark:border-neutral-500 cs:dark:text-neutral-400",stone:"cs:border-stone-400 cs:text-stone-700 cs:dark:border-stone-500 cs:dark:text-stone-400"},R={red:"cs:bg-red-500",orange:"cs:bg-orange-500",amber:"cs:bg-amber-500",yellow:"cs:bg-yellow-500",lime:"cs:bg-lime-500",green:"cs:bg-green-500",emerald:"cs:bg-emerald-500",teal:"cs:bg-teal-500",cyan:"cs:bg-cyan-500",sky:"cs:bg-sky-500",blue:"cs:bg-blue-500",indigo:"cs:bg-indigo-500",violet:"cs:bg-violet-500",purple:"cs:bg-purple-500",fuchsia:"cs:bg-fuchsia-500",pink:"cs:bg-pink-500",rose:"cs:bg-rose-500",slate:"cs:bg-slate-500",gray:"cs:bg-gray-500",zinc:"cs:bg-zinc-500",neutral:"cs:bg-neutral-500",stone:"cs:bg-stone-500"};function $(r,a){return typeof r!="number"||a===void 0?r:r>a?`${a}+`:r}function s({children:r,variant:a="solid",color:V="blue",scale:p="md",max:P,className:x}){const{color:A}=I()??{color:void 0},c=A??V,b=t(c)?void 0:_(c);if(a==="dot")return e.jsx("span",{style:b,className:u("cs:inline-block cs:rounded-full",p==="sm"?"cs:h-2 cs:w-2":"cs:h-2.5 cs:w-2.5",t(c)?R[c]:"cs-custom-badge-dot",x),"aria-hidden":"true"});const U=$(r,P);return e.jsx("span",{style:b,className:u("cs:inline-flex cs:items-center cs:justify-center cs:rounded-full cs:font-sans cs:font-medium cs:leading-none",p==="sm"?"cs:px-1.5 cs:py-0.5 cs:text-[0.6rem] cs:min-w-4":"cs:px-2 cs:py-0.5 cs:text-xs cs:min-w-5",a==="solid"&&(t(c)?O[c]:"cs-custom-badge-solid"),a==="outline"&&"cs:border",a==="outline"&&(t(c)?E[c]:"cs-custom-badge-outline"),x),children:U})}function F({children:r,className:a}){return e.jsx("div",{className:u("cs:relative cs:inline-flex",a),children:r})}s.Wrapper=F;s.__docgenInfo={description:"",methods:[{name:"Wrapper",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: BadgeWrapperProps",optional:!1,type:{name:"BadgeWrapperProps",alias:"BadgeWrapperProps"}}],returns:null}],displayName:"Badge",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "outline" | "dot"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"dot"'}]},description:"",defaultValue:{value:'"solid"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:"PresetColor | CustomColor",elements:[{name:"union",raw:`| "red"
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
| "stone"`,elements:[{name:"literal",value:'"red"'},{name:"literal",value:'"orange"'},{name:"literal",value:'"amber"'},{name:"literal",value:'"yellow"'},{name:"literal",value:'"lime"'},{name:"literal",value:'"green"'},{name:"literal",value:'"emerald"'},{name:"literal",value:'"teal"'},{name:"literal",value:'"cyan"'},{name:"literal",value:'"sky"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"indigo"'},{name:"literal",value:'"violet"'},{name:"literal",value:'"purple"'},{name:"literal",value:'"fuchsia"'},{name:"literal",value:'"pink"'},{name:"literal",value:'"rose"'},{name:"literal",value:'"slate"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"zinc"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"stone"'}]},{name:"CustomColor"}]},description:"",defaultValue:{value:'"blue"',computed:!1}},scale:{required:!1,tsType:{name:"union",raw:'"sm" | "md"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},max:{required:!1,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Z={component:s,title:"Data Display/Badge",tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["solid","outline","dot"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","gray"]},scale:{control:{type:"radio"},options:["sm","md"]},max:{control:"number"}}},n={args:{children:"5",variant:"solid",color:"blue",scale:"md"}},o={render:()=>e.jsxs("div",{className:"cs:flex cs:items-center cs:gap-4",children:[e.jsx(l,{label:"Solid",children:e.jsxs("div",{className:"cs:flex cs:gap-2",children:[e.jsx(s,{variant:"solid",color:"blue",children:"3"}),e.jsx(s,{variant:"solid",color:"red",children:"New"}),e.jsx(s,{variant:"solid",color:"green",children:"Active"})]})}),e.jsx(l,{label:"Outline",children:e.jsxs("div",{className:"cs:flex cs:gap-2",children:[e.jsx(s,{variant:"outline",color:"blue",children:"3"}),e.jsx(s,{variant:"outline",color:"red",children:"New"}),e.jsx(s,{variant:"outline",color:"green",children:"Active"})]})}),e.jsx(l,{label:"Dot",children:e.jsxs("div",{className:"cs:flex cs:gap-2 cs:items-center",children:[e.jsx(s,{variant:"dot",color:"green"}),e.jsx(s,{variant:"dot",color:"red"}),e.jsx(s,{variant:"dot",color:"amber"})]})})]})},d={render:()=>e.jsx("div",{className:"cs:flex cs:flex-wrap cs:gap-2",children:["red","orange","amber","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","gray"].map(r=>e.jsx(s,{color:r,children:r},r))})},i={render:()=>e.jsxs("div",{className:"cs:flex cs:items-center cs:gap-4",children:[e.jsx(s,{color:"red",max:99,children:5}),e.jsx(s,{color:"red",max:99,children:42}),e.jsx(s,{color:"red",max:99,children:99}),e.jsx(s,{color:"red",max:99,children:150}),e.jsx(s,{color:"red",max:9,children:1e3})]})},m={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-2 cs:gap-6",children:[e.jsx(l,{label:"Standard (md)",children:e.jsxs("div",{className:"cs:flex cs:gap-2 cs:items-center",children:[e.jsx(s,{scale:"md",color:"blue",children:"12"}),e.jsx(s,{scale:"md",variant:"outline",color:"red",children:"New"}),e.jsx(s,{scale:"md",variant:"dot",color:"green"})]})}),e.jsx(l,{label:"Small (sm)",children:e.jsxs("div",{className:"cs:flex cs:gap-2 cs:items-center",children:[e.jsx(s,{scale:"sm",color:"blue",children:"12"}),e.jsx(s,{scale:"sm",variant:"outline",color:"red",children:"New"}),e.jsx(s,{scale:"sm",variant:"dot",color:"green"})]})})]})},g={render:()=>e.jsxs("div",{className:"cs:flex cs:gap-8 cs:items-center",children:[e.jsxs(s.Wrapper,{children:[e.jsx("div",{className:"cs:h-10 cs:w-10 cs:bg-gray-200 cs:rounded-full cs:flex cs:items-center cs:justify-center",children:e.jsx("span",{className:"cs:text-gray-600 cs:text-sm",children:"U"})}),e.jsx(s,{color:"red",className:"cs:absolute cs:-top-1 cs:-right-1",children:"3"})]}),e.jsxs(s.Wrapper,{children:[e.jsx("div",{className:"cs:h-10 cs:w-10 cs:bg-gray-200 cs:rounded cs:flex cs:items-center cs:justify-center",children:e.jsx("span",{className:"cs:text-gray-600 cs:text-sm",children:"M"})}),e.jsx(s,{variant:"dot",color:"green",className:"cs:absolute cs:top-0 cs:right-0"})]}),e.jsxs(s.Wrapper,{children:[e.jsx("div",{className:"cs:h-10 cs:w-10 cs:bg-gray-200 cs:rounded cs:flex cs:items-center cs:justify-center",children:e.jsx("span",{className:"cs:text-gray-600 cs:text-sm",children:"N"})}),e.jsx(s,{color:"red",scale:"sm",max:99,className:"cs:absolute cs:-top-1 cs:-right-2",children:150})]})]})};var v,h,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: "5",
    variant: "solid",
    color: "blue",
    scale: "md"
  }
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,k,B;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:items-center cs:gap-4">
      <GroupBox label="Solid">
        <div className="cs:flex cs:gap-2">
          <Badge variant="solid" color="blue">3</Badge>
          <Badge variant="solid" color="red">New</Badge>
          <Badge variant="solid" color="green">Active</Badge>
        </div>
      </GroupBox>
      <GroupBox label="Outline">
        <div className="cs:flex cs:gap-2">
          <Badge variant="outline" color="blue">3</Badge>
          <Badge variant="outline" color="red">New</Badge>
          <Badge variant="outline" color="green">Active</Badge>
        </div>
      </GroupBox>
      <GroupBox label="Dot">
        <div className="cs:flex cs:gap-2 cs:items-center">
          <Badge variant="dot" color="green" />
          <Badge variant="dot" color="red" />
          <Badge variant="dot" color="amber" />
        </div>
      </GroupBox>
    </div>
}`,...(B=(k=o.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var j,w,N;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:flex-wrap cs:gap-2">
      {(["red", "orange", "amber", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "gray"] as const).map(color => <Badge key={color} color={color}>
          {color}
        </Badge>)}
    </div>
}`,...(N=(w=d.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var W,C,S;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:items-center cs:gap-4">
      <Badge color="red" max={99}>{5}</Badge>
      <Badge color="red" max={99}>{42}</Badge>
      <Badge color="red" max={99}>{99}</Badge>
      <Badge color="red" max={99}>{150}</Badge>
      <Badge color="red" max={9}>{1000}</Badge>
    </div>
}`,...(S=(C=i.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var G,z,T;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-2 cs:gap-6">
      <GroupBox label="Standard (md)">
        <div className="cs:flex cs:gap-2 cs:items-center">
          <Badge scale="md" color="blue">12</Badge>
          <Badge scale="md" variant="outline" color="red">New</Badge>
          <Badge scale="md" variant="dot" color="green" />
        </div>
      </GroupBox>
      <GroupBox label="Small (sm)">
        <div className="cs:flex cs:gap-2 cs:items-center">
          <Badge scale="sm" color="blue">12</Badge>
          <Badge scale="sm" variant="outline" color="red">New</Badge>
          <Badge scale="sm" variant="dot" color="green" />
        </div>
      </GroupBox>
    </div>
}`,...(T=(z=m.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var M,q,D;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:gap-8 cs:items-center">
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
}`,...(D=(q=g.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};const ee=["Default","Variants","Colors","WithMax","Scales","WithWrapper"];export{d as Colors,n as Default,m as Scales,o as Variants,i as WithMax,g as WithWrapper,ee as __namedExportsOrder,Z as default};
