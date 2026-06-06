"use client";
import{r as x,j as e}from"./iframe-BvSZAKLD.js";import{c as f}from"./clsx-BYFsuUQf.js";import{L as y}from"./colorContrast-C0ZIkquj.js";import{a as b,c as k,i as w}from"./colorUtils-CzaG3QqU.js";import{u as j}from"./useUIColor-DuigiTdC.js";const T={xs:"cs:gap-x-1.5",sm:"cs:gap-x-2",md:"cs:gap-x-3",lg:"cs:gap-x-3"},L={xs:"cs:size-3",sm:"cs:size-3.5",md:"cs:size-4",lg:"cs:size-5"},N={xs:"cs:size-2.5",sm:"cs:size-3",md:"cs:size-3.5",lg:"cs:size-4"},z={xs:"cs:text-[0.625rem]",sm:"cs:text-xs",md:"cs:text-sm/6",lg:"cs:text-base"};function C({scale:a="md",color:i="blue",label:t,id:o,onCheckedChange:s,onChange:l,className:m,ref:d,...u}){const p=x.useId(),n=o??p,{color:g}=j()??{color:void 0},r=b(g??i),v=k(r),h=c=>{s==null||s(c.target.checked),l==null||l(c)};return e.jsxs("div",{className:f(`cs:flex cs:max-md:min-h-11 cs:max-md:items-center ${T[a]}`,m),children:[e.jsx("div",{className:"cs:flex cs:h-6 cs:shrink-0 cs:items-center",children:e.jsxs("div",{className:`cs:group cs:grid cs:grid-cols-1 ${L[a]}`,children:[e.jsx("input",{ref:d,id:n,type:"checkbox",style:v,className:"cs:col-start-1 cs:row-start-1 cs:appearance-none cs:rounded-sm cs:border cs:border-gray-300 cs:dark:border-gray-600 cs:bg-white cs:dark:bg-gray-700 cs:focus-visible:outline-2 cs:focus-visible:outline-offset-2 cs:disabled:border-gray-300 cs:disabled:bg-gray-100 cs:dark:disabled:bg-gray-800 cs:disabled:checked:bg-gray-200 cs:forced-colors:appearance-auto cs-checked",onChange:h,...u}),e.jsxs("svg",{fill:"none",viewBox:"0 0 14 14",className:`cs:pointer-events-none cs:col-start-1 cs:row-start-1 cs:self-center cs:justify-self-center cs:group-has-disabled:stroke-gray-950/25 ${w(r)&&y.has(r)?"cs:stroke-gray-900":"cs:stroke-white"} ${N[a]}`,children:[e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"cs:opacity-0 cs:group-has-checked:opacity-100"}),e.jsx("path",{d:"M3 7H11",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"cs:opacity-0 cs:group-has-indeterminate:opacity-100"})]})]})}),t&&e.jsx("div",{className:"cs:text-sm/6",children:e.jsx("label",{htmlFor:n,className:`cs:font-sans cs:dark:text-gray-400 ${z[a]}`,children:t})})]})}C.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:""},scale:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:"PresetColor | CustomColor | SemanticColor",elements:[{name:"union",raw:`| "red"
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
| "stone"`,elements:[{name:"literal",value:'"red"'},{name:"literal",value:'"orange"'},{name:"literal",value:'"amber"'},{name:"literal",value:'"yellow"'},{name:"literal",value:'"lime"'},{name:"literal",value:'"green"'},{name:"literal",value:'"emerald"'},{name:"literal",value:'"teal"'},{name:"literal",value:'"cyan"'},{name:"literal",value:'"sky"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"indigo"'},{name:"literal",value:'"violet"'},{name:"literal",value:'"purple"'},{name:"literal",value:'"fuchsia"'},{name:"literal",value:'"pink"'},{name:"literal",value:'"rose"'},{name:"literal",value:'"slate"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"zinc"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"stone"'}]},{name:"CustomColor"},{name:"union",raw:'"success" | "warning" | "error" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'}]}]},description:"",defaultValue:{value:'"blue"',computed:!1}},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:`Typed callback that receives the next checked state on every toggle.

Equivalent to writing \`onChange={(e) => fn(e.target.checked)}\`, but
matches the API surface of {@link Switch} so callers can swap between
them without rewriting the handler. The raw \`onChange(event)\` still
fires for callers that need the original event.`},className:{required:!1,tsType:{name:"string"},description:"Extra class names applied to the outer wrapper."},ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLInputElement"}],raw:"Ref<HTMLInputElement>"},description:'Forwarded to the inner `<input type="checkbox">`.'}},composes:["Omit"]};export{C};
