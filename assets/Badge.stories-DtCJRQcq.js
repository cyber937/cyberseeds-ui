"use client";
import{j as e}from"./iframe-DszvCNP2.js";import{c as u}from"./clsx-BYFsuUQf.js";import{r as U,i as _,c as I,a as m}from"./colorUtils-BF1Ih5IA.js";import{u as O}from"./useUIColor-_6l39SGF.js";import{G as l}from"./GroupBox-D5Qy1-1c.js";import"./preload-helper-CJpEdZxZ.js";import"./Label-DBOsNz8O.js";const L={red:"cs:bg-red-600 cs:text-white cs:dark:bg-red-500",orange:"cs:bg-orange-600 cs:text-white cs:dark:bg-orange-500",amber:"cs:bg-amber-600 cs:text-gray-900 cs:dark:bg-amber-500 cs:dark:text-gray-900",yellow:"cs:bg-yellow-500 cs:text-gray-900 cs:dark:bg-yellow-400 cs:dark:text-gray-900",lime:"cs:bg-lime-600 cs:text-gray-900 cs:dark:bg-lime-500 cs:dark:text-gray-900",green:"cs:bg-green-600 cs:text-white cs:dark:bg-green-500",emerald:"cs:bg-emerald-600 cs:text-white cs:dark:bg-emerald-500",teal:"cs:bg-teal-600 cs:text-white cs:dark:bg-teal-500",cyan:"cs:bg-cyan-600 cs:text-white cs:dark:bg-cyan-500",sky:"cs:bg-sky-600 cs:text-white cs:dark:bg-sky-500",blue:"cs:bg-blue-600 cs:text-white cs:dark:bg-blue-500",indigo:"cs:bg-indigo-600 cs:text-white cs:dark:bg-indigo-500",violet:"cs:bg-violet-600 cs:text-white cs:dark:bg-violet-500",purple:"cs:bg-purple-600 cs:text-white cs:dark:bg-purple-500",fuchsia:"cs:bg-fuchsia-600 cs:text-white cs:dark:bg-fuchsia-500",pink:"cs:bg-pink-600 cs:text-white cs:dark:bg-pink-500",rose:"cs:bg-rose-600 cs:text-white cs:dark:bg-rose-500",slate:"cs:bg-slate-600 cs:text-white cs:dark:bg-slate-500",gray:"cs:bg-gray-600 cs:text-white cs:dark:bg-gray-500",zinc:"cs:bg-zinc-600 cs:text-white cs:dark:bg-zinc-500",neutral:"cs:bg-neutral-600 cs:text-white cs:dark:bg-neutral-500",stone:"cs:bg-stone-600 cs:text-white cs:dark:bg-stone-500"},R={red:"cs:border-red-400 cs:text-red-700 cs:dark:border-red-500 cs:dark:text-red-400",orange:"cs:border-orange-400 cs:text-orange-700 cs:dark:border-orange-500 cs:dark:text-orange-400",amber:"cs:border-amber-400 cs:text-amber-700 cs:dark:border-amber-500 cs:dark:text-amber-400",yellow:"cs:border-yellow-400 cs:text-yellow-700 cs:dark:border-yellow-500 cs:dark:text-yellow-400",lime:"cs:border-lime-400 cs:text-lime-700 cs:dark:border-lime-500 cs:dark:text-lime-400",green:"cs:border-green-400 cs:text-green-700 cs:dark:border-green-500 cs:dark:text-green-400",emerald:"cs:border-emerald-400 cs:text-emerald-700 cs:dark:border-emerald-500 cs:dark:text-emerald-400",teal:"cs:border-teal-400 cs:text-teal-700 cs:dark:border-teal-500 cs:dark:text-teal-400",cyan:"cs:border-cyan-400 cs:text-cyan-700 cs:dark:border-cyan-500 cs:dark:text-cyan-400",sky:"cs:border-sky-400 cs:text-sky-700 cs:dark:border-sky-500 cs:dark:text-sky-400",blue:"cs:border-blue-400 cs:text-blue-700 cs:dark:border-blue-500 cs:dark:text-blue-400",indigo:"cs:border-indigo-400 cs:text-indigo-700 cs:dark:border-indigo-500 cs:dark:text-indigo-400",violet:"cs:border-violet-400 cs:text-violet-700 cs:dark:border-violet-500 cs:dark:text-violet-400",purple:"cs:border-purple-400 cs:text-purple-700 cs:dark:border-purple-500 cs:dark:text-purple-400",fuchsia:"cs:border-fuchsia-400 cs:text-fuchsia-700 cs:dark:border-fuchsia-500 cs:dark:text-fuchsia-400",pink:"cs:border-pink-400 cs:text-pink-700 cs:dark:border-pink-500 cs:dark:text-pink-400",rose:"cs:border-rose-400 cs:text-rose-700 cs:dark:border-rose-500 cs:dark:text-rose-400",slate:"cs:border-slate-400 cs:text-slate-700 cs:dark:border-slate-500 cs:dark:text-slate-400",gray:"cs:border-gray-400 cs:text-gray-700 cs:dark:border-gray-500 cs:dark:text-gray-400",zinc:"cs:border-zinc-400 cs:text-zinc-700 cs:dark:border-zinc-500 cs:dark:text-zinc-400",neutral:"cs:border-neutral-400 cs:text-neutral-700 cs:dark:border-neutral-500 cs:dark:text-neutral-400",stone:"cs:border-stone-400 cs:text-stone-700 cs:dark:border-stone-500 cs:dark:text-stone-400"},$={red:"cs:bg-red-500",orange:"cs:bg-orange-500",amber:"cs:bg-amber-500",yellow:"cs:bg-yellow-500",lime:"cs:bg-lime-500",green:"cs:bg-green-500",emerald:"cs:bg-emerald-500",teal:"cs:bg-teal-500",cyan:"cs:bg-cyan-500",sky:"cs:bg-sky-500",blue:"cs:bg-blue-500",indigo:"cs:bg-indigo-500",violet:"cs:bg-violet-500",purple:"cs:bg-purple-500",fuchsia:"cs:bg-fuchsia-500",pink:"cs:bg-pink-500",rose:"cs:bg-rose-500",slate:"cs:bg-slate-500",gray:"cs:bg-gray-500",zinc:"cs:bg-zinc-500",neutral:"cs:bg-neutral-500",stone:"cs:bg-stone-500"},F={xs:"cs:h-1.5 cs:w-1.5",sm:"cs:h-2 cs:w-2",md:"cs:h-2.5 cs:w-2.5",lg:"cs:h-3 cs:w-3"},H={xs:"cs:px-1 cs:py-0.5 cs:text-[0.5rem] cs:min-w-3.5",sm:"cs:px-1.5 cs:py-0.5 cs:text-[0.6rem] cs:min-w-4",md:"cs:px-2 cs:py-0.5 cs:text-xs cs:min-w-5",lg:"cs:px-2.5 cs:py-1 cs:text-sm cs:min-w-6"};function J(r,a){return typeof r!="number"||a===void 0?r:r>a?`${a}+`:r}function s({children:r,variant:a="solid",color:V="blue",scale:x="md",max:P,className:p}){const{color:A}=O()??{color:void 0},c=U(A??V),b=_(c)?I(c):void 0;if(a==="dot")return e.jsx("span",{style:b,className:u("cs:inline-block cs:rounded-full",F[x],m(c)?$[c]:"cs-custom-badge-dot",p),"aria-hidden":"true"});const E=J(r,P);return e.jsx("span",{style:b,className:u("cs:inline-flex cs:items-center cs:justify-center cs:rounded-full cs:font-sans cs:font-medium cs:leading-none",H[x],a==="solid"&&(m(c)?L[c]:"cs-custom-badge-solid"),a==="outline"&&"cs:border",a==="outline"&&(m(c)?R[c]:"cs-custom-badge-outline"),p),children:E})}function K({children:r,className:a}){return e.jsx("div",{className:u("cs:relative cs:inline-flex",a),children:r})}s.Wrapper=K;s.__docgenInfo={description:"",methods:[{name:"Wrapper",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: BadgeWrapperProps",optional:!1,type:{name:"BadgeWrapperProps",alias:"BadgeWrapperProps"}}],returns:null}],displayName:"Badge",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "outline" | "dot"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"dot"'}]},description:"",defaultValue:{value:'"solid"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:"PresetColor | CustomColor | SemanticColor",elements:[{name:"union",raw:`| "red"
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
| "stone"`,elements:[{name:"literal",value:'"red"'},{name:"literal",value:'"orange"'},{name:"literal",value:'"amber"'},{name:"literal",value:'"yellow"'},{name:"literal",value:'"lime"'},{name:"literal",value:'"green"'},{name:"literal",value:'"emerald"'},{name:"literal",value:'"teal"'},{name:"literal",value:'"cyan"'},{name:"literal",value:'"sky"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"indigo"'},{name:"literal",value:'"violet"'},{name:"literal",value:'"purple"'},{name:"literal",value:'"fuchsia"'},{name:"literal",value:'"pink"'},{name:"literal",value:'"rose"'},{name:"literal",value:'"slate"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"zinc"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"stone"'}]},{name:"CustomColor"},{name:"union",raw:'"success" | "warning" | "error" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'}]}]},description:"",defaultValue:{value:'"blue"',computed:!1}},scale:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},max:{required:!1,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ae={component:s,title:"Data Display/Badge",tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["solid","outline","dot"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","gray"]},scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},max:{control:"number"}}},t={args:{children:"5",variant:"solid",color:"blue",scale:"md"}},n={render:()=>e.jsxs("div",{className:"cs:flex cs:items-center cs:gap-4",children:[e.jsx(l,{label:"Solid",children:e.jsxs("div",{className:"cs:flex cs:gap-2",children:[e.jsx(s,{variant:"solid",color:"blue",children:"3"}),e.jsx(s,{variant:"solid",color:"red",children:"New"}),e.jsx(s,{variant:"solid",color:"green",children:"Active"})]})}),e.jsx(l,{label:"Outline",children:e.jsxs("div",{className:"cs:flex cs:gap-2",children:[e.jsx(s,{variant:"outline",color:"blue",children:"3"}),e.jsx(s,{variant:"outline",color:"red",children:"New"}),e.jsx(s,{variant:"outline",color:"green",children:"Active"})]})}),e.jsx(l,{label:"Dot",children:e.jsxs("div",{className:"cs:flex cs:gap-2 cs:items-center",children:[e.jsx(s,{variant:"dot",color:"green"}),e.jsx(s,{variant:"dot",color:"red"}),e.jsx(s,{variant:"dot",color:"amber"})]})})]})},o={render:()=>e.jsx("div",{className:"cs:flex cs:flex-wrap cs:gap-2",children:["red","orange","amber","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","gray"].map(r=>e.jsx(s,{color:r,children:r},r))})},d={render:()=>e.jsxs("div",{className:"cs:flex cs:items-center cs:gap-4",children:[e.jsx(s,{color:"red",max:99,children:5}),e.jsx(s,{color:"red",max:99,children:42}),e.jsx(s,{color:"red",max:99,children:99}),e.jsx(s,{color:"red",max:99,children:150}),e.jsx(s,{color:"red",max:9,children:1e3})]})},i={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-4 cs:gap-6",children:[e.jsx(l,{label:"Extra Small (xs)",children:e.jsxs("div",{className:"cs:flex cs:gap-2 cs:items-center",children:[e.jsx(s,{scale:"xs",color:"blue",children:"12"}),e.jsx(s,{scale:"xs",variant:"outline",color:"red",children:"New"}),e.jsx(s,{scale:"xs",variant:"dot",color:"green"})]})}),e.jsx(l,{label:"Small (sm)",children:e.jsxs("div",{className:"cs:flex cs:gap-2 cs:items-center",children:[e.jsx(s,{scale:"sm",color:"blue",children:"12"}),e.jsx(s,{scale:"sm",variant:"outline",color:"red",children:"New"}),e.jsx(s,{scale:"sm",variant:"dot",color:"green"})]})}),e.jsx(l,{label:"Standard (md)",children:e.jsxs("div",{className:"cs:flex cs:gap-2 cs:items-center",children:[e.jsx(s,{scale:"md",color:"blue",children:"12"}),e.jsx(s,{scale:"md",variant:"outline",color:"red",children:"New"}),e.jsx(s,{scale:"md",variant:"dot",color:"green"})]})}),e.jsx(l,{label:"Large (lg)",children:e.jsxs("div",{className:"cs:flex cs:gap-2 cs:items-center",children:[e.jsx(s,{scale:"lg",color:"blue",children:"12"}),e.jsx(s,{scale:"lg",variant:"outline",color:"red",children:"New"}),e.jsx(s,{scale:"lg",variant:"dot",color:"green"})]})})]})},g={render:()=>e.jsxs("div",{className:"cs:flex cs:gap-8 cs:items-center",children:[e.jsxs(s.Wrapper,{children:[e.jsx("div",{className:"cs:h-10 cs:w-10 cs:bg-gray-200 cs:rounded-full cs:flex cs:items-center cs:justify-center",children:e.jsx("span",{className:"cs:text-gray-600 cs:text-sm",children:"U"})}),e.jsx(s,{color:"red",className:"cs:absolute cs:-top-1 cs:-right-1",children:"3"})]}),e.jsxs(s.Wrapper,{children:[e.jsx("div",{className:"cs:h-10 cs:w-10 cs:bg-gray-200 cs:rounded cs:flex cs:items-center cs:justify-center",children:e.jsx("span",{className:"cs:text-gray-600 cs:text-sm",children:"M"})}),e.jsx(s,{variant:"dot",color:"green",className:"cs:absolute cs:top-0 cs:right-0"})]}),e.jsxs(s.Wrapper,{children:[e.jsx("div",{className:"cs:h-10 cs:w-10 cs:bg-gray-200 cs:rounded cs:flex cs:items-center cs:justify-center",children:e.jsx("span",{className:"cs:text-gray-600 cs:text-sm",children:"N"})}),e.jsx(s,{color:"red",scale:"sm",max:99,className:"cs:absolute cs:-top-1 cs:-right-2",children:150})]})]})};var v,h,y;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: "5",
    variant: "solid",
    color: "blue",
    scale: "md"
  }
}`,...(y=(h=t.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var k,f,B;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(B=(f=n.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var j,w,N;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:flex-wrap cs:gap-2">
      {(["red", "orange", "amber", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "gray"] as const).map(color => <Badge key={color} color={color}>
          {color}
        </Badge>)}
    </div>
}`,...(N=(w=o.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var C,S,W;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:items-center cs:gap-4">
      <Badge color="red" max={99}>{5}</Badge>
      <Badge color="red" max={99}>{42}</Badge>
      <Badge color="red" max={99}>{99}</Badge>
      <Badge color="red" max={99}>{150}</Badge>
      <Badge color="red" max={9}>{1000}</Badge>
    </div>
}`,...(W=(S=d.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var G,z,M;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-4 cs:gap-6">
      <GroupBox label="Extra Small (xs)">
        <div className="cs:flex cs:gap-2 cs:items-center">
          <Badge scale="xs" color="blue">12</Badge>
          <Badge scale="xs" variant="outline" color="red">New</Badge>
          <Badge scale="xs" variant="dot" color="green" />
        </div>
      </GroupBox>
      <GroupBox label="Small (sm)">
        <div className="cs:flex cs:gap-2 cs:items-center">
          <Badge scale="sm" color="blue">12</Badge>
          <Badge scale="sm" variant="outline" color="red">New</Badge>
          <Badge scale="sm" variant="dot" color="green" />
        </div>
      </GroupBox>
      <GroupBox label="Standard (md)">
        <div className="cs:flex cs:gap-2 cs:items-center">
          <Badge scale="md" color="blue">12</Badge>
          <Badge scale="md" variant="outline" color="red">New</Badge>
          <Badge scale="md" variant="dot" color="green" />
        </div>
      </GroupBox>
      <GroupBox label="Large (lg)">
        <div className="cs:flex cs:gap-2 cs:items-center">
          <Badge scale="lg" color="blue">12</Badge>
          <Badge scale="lg" variant="outline" color="red">New</Badge>
          <Badge scale="lg" variant="dot" color="green" />
        </div>
      </GroupBox>
    </div>
}`,...(M=(z=i.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var T,q,D;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(D=(q=g.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};const ce=["Default","Variants","Colors","WithMax","Scales","WithWrapper"];export{o as Colors,t as Default,i as Scales,n as Variants,d as WithMax,g as WithWrapper,ce as __namedExportsOrder,ae as default};
