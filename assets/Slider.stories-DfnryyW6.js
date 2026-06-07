"use client";
import{r as u,j as e}from"./iframe-DnHwbLWn.js";import{c as t}from"./clsx-BYFsuUQf.js";import{c as O,a as P}from"./colorUtils-CzaG3QqU.js";import{u as A}from"./useUIColor-Dv37HYfb.js";import"./preload-helper-CJpEdZxZ.js";const G={xs:"cs:h-1",sm:"cs:h-1.5",md:"cs:h-2",lg:"cs:h-2.5"},y={xs:"cs:text-[0.625rem]",sm:"cs:text-xs",md:"cs:text-sm",lg:"cs:text-base"};function i({value:l,defaultValue:r=0,onChange:a,min:q=0,max:j=100,step:N=1,scale:c="md",color:$="blue",disabled:D=!1,showValue:I=!1,label:m,formatValue:p,className:L,"aria-label":_}){const v=u.useId(),{color:E}=A()??{color:void 0},F=O(P(E??$)),f=l!==void 0,[U,z]=u.useState(r),d=f?l:U;function B(H){const g=Number(H.target.value);f||z(g),a==null||a(g)}const R=p?p(d):String(d);return e.jsxs("div",{className:t("cs:font-sans",L),children:[m&&e.jsx("label",{htmlFor:v,className:t("cs:mb-1 cs:block cs:font-medium cs:text-gray-900 cs:dark:text-gray-300",y[c]),children:m}),e.jsxs("div",{className:"cs:flex cs:items-center cs:gap-3",children:[e.jsx("input",{id:v,type:"range",min:q,max:j,step:N,value:d,disabled:D,onChange:B,"aria-label":_??m,className:t("cs:w-full cs:cursor-pointer cs:appearance-none cs:rounded-full cs:bg-gray-200 cs:dark:bg-gray-700","cs:disabled:opacity-50 cs:disabled:cursor-not-allowed","cs:focus-visible:outline-2 cs:focus-visible:outline-offset-2 cs:focus-visible:outline-[var(--cs-ui-focus)]",G[c]),style:{...F,accentColor:"var(--cs-ui-base)"}}),I&&e.jsx("span",{className:t("cs:shrink-0 cs:tabular-nums cs:text-gray-700 cs:dark:text-gray-300",y[c]),children:R})]})]})}i.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"number"},description:""},defaultValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},scale:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:"PresetColor | CustomColor | SemanticColor",elements:[{name:"union",raw:`| "red"
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
| "stone"`,elements:[{name:"literal",value:'"red"'},{name:"literal",value:'"orange"'},{name:"literal",value:'"amber"'},{name:"literal",value:'"yellow"'},{name:"literal",value:'"lime"'},{name:"literal",value:'"green"'},{name:"literal",value:'"emerald"'},{name:"literal",value:'"teal"'},{name:"literal",value:'"cyan"'},{name:"literal",value:'"sky"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"indigo"'},{name:"literal",value:'"violet"'},{name:"literal",value:'"purple"'},{name:"literal",value:'"fuchsia"'},{name:"literal",value:'"pink"'},{name:"literal",value:'"rose"'},{name:"literal",value:'"slate"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"zinc"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"stone"'}]},{name:"CustomColor"},{name:"union",raw:'"success" | "warning" | "error" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'}]}]},description:"",defaultValue:{value:'"blue"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showValue:{required:!1,tsType:{name:"boolean"},description:"Show the current value to the right of the track.",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},formatValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}}},description:"Format the displayed value (e.g. `(v) => `$${v}``)."},className:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""}}};const X={component:i,title:"Form/Slider",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","amber","green","blue","indigo","violet","pink","gray"]},disabled:{control:{type:"boolean"}},showValue:{control:{type:"boolean"}}},parameters:{docs:{description:{component:"Range input tinted with the UI color (preset / custom / context). Controlled or uncontrolled, with optional value display, label, and `formatValue`."}}}},s={render:l=>{const[r,a]=u.useState(40);return e.jsx("div",{style:{width:280},children:e.jsx(i,{...l,value:r,onChange:a})})},args:{showValue:!0,label:"Volume"}},n={render:()=>{const[l,r]=u.useState(2500);return e.jsx("div",{style:{width:280},children:e.jsx(i,{value:l,onChange:r,min:0,max:1e4,step:100,color:"emerald",showValue:!0,label:"Budget",formatValue:a=>`$${a.toLocaleString()}`})})}},o={args:{defaultValue:60,disabled:!0,showValue:!0,label:"Locked"}};var b,h,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => {
    const [v, setV] = useState(40);
    return <div style={{
      width: 280
    }}>
        <Slider {...args} value={v} onChange={setV} />
      </div>;
  },
  args: {
    showValue: true,
    label: "Volume"
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var V,w,S;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [v, setV] = useState(2500);
    return <div style={{
      width: 280
    }}>
        <Slider value={v} onChange={setV} min={0} max={10000} step={100} color="emerald" showValue label="Budget" formatValue={n => \`$\${n.toLocaleString()}\`} />
      </div>;
  }
}`,...(S=(w=n.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var C,T,k;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    defaultValue: 60,
    disabled: true,
    showValue: true,
    label: "Locked"
  }
}`,...(k=(T=o.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Y=["Default","Currency","Disabled"];export{n as Currency,s as Default,o as Disabled,Y as __namedExportsOrder,X as default};
