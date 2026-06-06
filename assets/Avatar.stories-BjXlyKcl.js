"use client";
import{r as f,j as a}from"./iframe-BvSZAKLD.js";import{c as re}from"./clsx-BYFsuUQf.js";import{a as le,c as ne}from"./colorUtils-CzaG3QqU.js";import{u as ce}from"./useUIColor-DuigiTdC.js";import"./preload-helper-CJpEdZxZ.js";const te={xs:"cs:size-6 cs:text-[0.625rem]",sm:"cs:size-8 cs:text-xs",md:"cs:size-10 cs:text-sm",lg:"cs:size-12 cs:text-base"};function oe(s){const e=s.trim().split(/\s+/).filter(Boolean);return e.length===0?"":e.length===1?e[0].slice(0,2).toUpperCase():(e[0][0]+e[e.length-1][0]).toUpperCase()}const r=f.memo(function({src:e,alt:v,name:n,fallback:D,scale:H="md",color:O="gray",shape:J="circle",className:Q,ref:X}){const[Y,Z]=f.useState(!1),{color:$}=ce()??{color:void 0},ee=le($??O),ae=ne(ee),l=!!e&&!Y,se=D??(n?oe(n):null);return a.jsx("span",{ref:X,role:l?void 0:"img","aria-label":l?void 0:v??n??"Avatar",style:l?void 0:ae,className:re("cs:inline-flex cs:items-center cs:justify-center cs:overflow-hidden cs:select-none cs:font-medium cs:font-sans cs:shrink-0",J==="circle"?"cs:rounded-full":"cs:rounded-md",!l&&"cs-pill",te[H],Q),children:l?a.jsx("img",{src:e,alt:v??n??"",className:"cs:w-full cs:h-full cs:object-cover",onError:()=>Z(!0),draggable:!1}):a.jsx("span",{"aria-hidden":"true",children:se})})});r.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:"Image URL. If absent or fails to load, falls back to initials/icon/text."},alt:{required:!1,tsType:{name:"string"},description:"Alt text for the image. Also used by AT when the image fails to load."},name:{required:!1,tsType:{name:"string"},description:`Full name. When the image is missing/broken, the first letter of each
word (max 2 initials) is rendered as the fallback content.`},fallback:{required:!1,tsType:{name:"ReactNode"},description:"Custom fallback content (icon, emoji, etc.). Wins over `name` initials."},scale:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:"PresetColor | CustomColor | SemanticColor",elements:[{name:"union",raw:`| "red"
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
| "stone"`,elements:[{name:"literal",value:'"red"'},{name:"literal",value:'"orange"'},{name:"literal",value:'"amber"'},{name:"literal",value:'"yellow"'},{name:"literal",value:'"lime"'},{name:"literal",value:'"green"'},{name:"literal",value:'"emerald"'},{name:"literal",value:'"teal"'},{name:"literal",value:'"cyan"'},{name:"literal",value:'"sky"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"indigo"'},{name:"literal",value:'"violet"'},{name:"literal",value:'"purple"'},{name:"literal",value:'"fuchsia"'},{name:"literal",value:'"pink"'},{name:"literal",value:'"rose"'},{name:"literal",value:'"slate"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"zinc"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"stone"'}]},{name:"CustomColor"},{name:"union",raw:'"success" | "warning" | "error" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'}]}]},description:"",defaultValue:{value:'"gray"',computed:!1}},shape:{required:!1,tsType:{name:"union",raw:'"circle" | "square"',elements:[{name:"literal",value:'"circle"'},{name:"literal",value:'"square"'}]},description:"Apply circular shape (default) vs. square with rounded corners.",defaultValue:{value:'"circle"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLSpanElement"}],raw:"Ref<HTMLSpanElement>"},description:""}}};const ge={component:r,title:"Data Display/Avatar",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},shape:{control:{type:"radio"},options:["circle","square"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"]}}},G="https://i.pravatar.cc/150?img=12",c={args:{src:G,alt:"Sample user",scale:"md"}},t={args:{name:"Kiyoshi Nagahama",color:"blue",scale:"md"}},o={args:{name:"Cher",color:"purple",scale:"md"}},i={args:{fallback:"🦊",color:"amber",scale:"md",alt:"Fox avatar"}},m={args:{src:"https://this-url-does-not-resolve.invalid/x.png",name:"Fallback User",color:"red",scale:"md"}},d={args:{src:G,shape:"square",scale:"md",alt:"Square avatar"}},u={render:()=>a.jsx("div",{className:"cs:flex cs:items-end cs:gap-3",children:["xs","sm","md","lg"].map(s=>a.jsxs("div",{className:"cs:flex cs:flex-col cs:items-center cs:gap-1",children:[a.jsx(r,{name:"KN",color:"blue",scale:s}),a.jsx("span",{className:"cs:text-xs cs:text-gray-500",children:s})]},s))})},p={render:()=>{const s=["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"];return a.jsx("div",{className:"cs:grid cs:grid-cols-5 cs:gap-3",children:s.map(e=>a.jsx(r,{name:e.charAt(0).toUpperCase()+e.charAt(1),color:e,scale:"md"},e))})}},g={render:()=>a.jsxs("div",{className:"cs:flex cs:-space-x-2",children:[a.jsx(r,{name:"Alice Apple",color:"red",scale:"md",className:"cs:ring-2 cs:ring-white"}),a.jsx(r,{name:"Bob Berry",color:"blue",scale:"md",className:"cs:ring-2 cs:ring-white"}),a.jsx(r,{name:"Cara Cherry",color:"green",scale:"md",className:"cs:ring-2 cs:ring-white"}),a.jsx(r,{name:"+3",color:"gray",scale:"md",className:"cs:ring-2 cs:ring-white"})]})};var h,x,y;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    src: SAMPLE_IMAGE,
    alt: "Sample user",
    scale: "md"
  }
}`,...(y=(x=c.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var b,S,k;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    name: "Kiyoshi Nagahama",
    color: "blue",
    scale: "md"
  }
}`,...(k=(S=t.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var A,N,w;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    name: "Cher",
    color: "purple",
    scale: "md"
  }
}`,...(w=(N=o.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var C,j,q;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    fallback: "🦊",
    color: "amber",
    scale: "md",
    alt: "Fox avatar"
  }
}`,...(q=(j=i.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var I,T,E;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    src: "https://this-url-does-not-resolve.invalid/x.png",
    name: "Fallback User",
    color: "red",
    scale: "md"
  }
}`,...(E=(T=m.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var z,F,M;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    src: SAMPLE_IMAGE,
    shape: "square",
    scale: "md",
    alt: "Square avatar"
  }
}`,...(M=(F=d.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var U,B,_;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:items-end cs:gap-3">
      {(["xs", "sm", "md", "lg"] as const).map(s => <div key={s} className="cs:flex cs:flex-col cs:items-center cs:gap-1">
          <Avatar name="KN" color="blue" scale={s} />
          <span className="cs:text-xs cs:text-gray-500">{s}</span>
        </div>)}
    </div>
}`,...(_=(B=u.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var L,R,K;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const colors = ["red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "gray", "zinc", "neutral", "stone"] as const;
    return <div className="cs:grid cs:grid-cols-5 cs:gap-3">
        {colors.map(c => <Avatar key={c} name={c.charAt(0).toUpperCase() + c.charAt(1)} color={c} scale="md" />)}
      </div>;
  }
}`,...(K=(R=p.parameters)==null?void 0:R.docs)==null?void 0:K.source}}};var P,V,W;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:-space-x-2">
      <Avatar name="Alice Apple" color="red" scale="md" className="cs:ring-2 cs:ring-white" />
      <Avatar name="Bob Berry" color="blue" scale="md" className="cs:ring-2 cs:ring-white" />
      <Avatar name="Cara Cherry" color="green" scale="md" className="cs:ring-2 cs:ring-white" />
      <Avatar name="+3" color="gray" scale="md" className="cs:ring-2 cs:ring-white" />
    </div>
}`,...(W=(V=g.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const ve=["WithImage","Initials","SingleNameInitial","CustomFallback","BrokenImage","Square","Scales","Color","Stack"];export{m as BrokenImage,p as Color,i as CustomFallback,t as Initials,u as Scales,o as SingleNameInitial,d as Square,g as Stack,c as WithImage,ve as __namedExportsOrder,ge as default};
