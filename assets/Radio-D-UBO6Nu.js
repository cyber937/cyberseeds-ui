"use client";
import{r as o,j as s}from"./iframe-BvSZAKLD.js";import{c as y}from"./clsx-BYFsuUQf.js";import{L as x}from"./colorContrast-C0ZIkquj.js";import{a as h,c as w,i as k}from"./colorUtils-CzaG3QqU.js";import{c as T}from"./designTokens-RbONob3D.js";import{u as S}from"./useUIColor-DuigiTdC.js";const I={xs:"cs:gap-x-1.5",sm:"cs:gap-x-2",md:"cs:gap-x-3",lg:"cs:gap-x-3"},R={xs:"cs:size-3",sm:"cs:size-3.5",md:"cs:size-4",lg:"cs:size-5"},C={xs:"cs:text-[0.625rem]",sm:"cs:text-xs",md:"cs:text-sm/6",lg:"cs:text-base"},N=o.memo(function({label:n,scale:e="md",color:c="blue",id:m,onCheckedChange:a,onChange:l,className:d,ref:u,...p}){const f=o.useId(),t=m??f,{color:v}=S()??{color:void 0},r=h(v??c),g=w(r),b=i=>{a==null||a(i.target.checked),l==null||l(i)};return s.jsxs("div",{className:y(`cs:flex cs:items-center cs:max-md:min-h-11 ${I[e]}`,d),children:[s.jsx("input",{ref:u,id:t,type:"radio",style:g,className:`cs:relative cs:appearance-none cs:rounded-full cs:border cs:border-gray-200 cs:dark:border-gray-600 cs:bg-white cs:dark:bg-gray-700 ${k(r)&&x.has(r)?"cs:before:bg-gray-900":"cs:before:bg-white"} cs:before:absolute cs:before:inset-1 cs:before:rounded-full cs:not-checked:before:hidden cs:focus-visible:outline-2 cs:focus-visible:outline-offset-2 cs:disabled:border-gray-300 cs:disabled:bg-gray-100 cs:dark:disabled:bg-gray-800 cs:disabled:before:bg-gray-400 cs:forced-colors:appearance-auto cs:forced-colors:before:hidden ${T} ${R[e]} cs-checked`,onChange:b,...p}),n&&s.jsx("label",{htmlFor:t,className:`cs:block cs:text-gray-900 cs:dark:text-gray-400 cs:font-sans ${C[e]}`,children:n})]})});N.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{label:{required:!1,tsType:{name:"string"},description:""},scale:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:"PresetColor | CustomColor | SemanticColor",elements:[{name:"union",raw:`| "red"
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
| "stone"`,elements:[{name:"literal",value:'"red"'},{name:"literal",value:'"orange"'},{name:"literal",value:'"amber"'},{name:"literal",value:'"yellow"'},{name:"literal",value:'"lime"'},{name:"literal",value:'"green"'},{name:"literal",value:'"emerald"'},{name:"literal",value:'"teal"'},{name:"literal",value:'"cyan"'},{name:"literal",value:'"sky"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"indigo"'},{name:"literal",value:'"violet"'},{name:"literal",value:'"purple"'},{name:"literal",value:'"fuchsia"'},{name:"literal",value:'"pink"'},{name:"literal",value:'"rose"'},{name:"literal",value:'"slate"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"zinc"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"stone"'}]},{name:"CustomColor"},{name:"union",raw:'"success" | "warning" | "error" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'}]}]},description:"",defaultValue:{value:'"blue"',computed:!1}},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:`Typed callback that fires with the next checked state whenever the radio
is selected. The raw \`onChange(event)\` still fires alongside it.

Symmetrical with {@link Checkbox} and {@link Switch}.`},className:{required:!1,tsType:{name:"string"},description:"Extra class names applied to the outer wrapper."},ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLInputElement"}],raw:"Ref<HTMLInputElement>"},description:'Forwarded to the inner `<input type="radio">`.'}},composes:["Omit"]};export{N as R};
