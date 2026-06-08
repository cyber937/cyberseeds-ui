"use client";
import{r as y,j as a}from"./iframe-uuPSpAyG.js";import{c as b}from"./clsx-BYFsuUQf.js";import{L as k}from"./colorContrast-C0ZIkquj.js";import{a as w,c as j,i as I}from"./colorUtils-CzaG3QqU.js";import{u as T}from"./FormFieldContext-KWNoPJyl.js";import{u as L}from"./useUIColor-piWDUgb3.js";const N={xs:"cs:gap-x-1.5",sm:"cs:gap-x-2",md:"cs:gap-x-3",lg:"cs:gap-x-3"},z={xs:"cs:size-3",sm:"cs:size-3.5",md:"cs:size-4",lg:"cs:size-5"},C={xs:"cs:size-2.5",sm:"cs:size-3",md:"cs:size-3.5",lg:"cs:size-4"},S={xs:"cs:text-[0.625rem]",sm:"cs:text-xs",md:"cs:text-sm/6",lg:"cs:text-base"};function M({scale:s="md",color:o="blue",label:n,id:m,onCheckedChange:r,onChange:l,className:d,ref:u,...p}){const v=y.useId(),e=T(),i=m??(e==null?void 0:e.id)??v,g=e?[e.errorId,e.helpId].join(" "):void 0,{color:h}=L()??{color:void 0},t=w(h??o),x=j(t),f=c=>{r==null||r(c.target.checked),l==null||l(c)};return a.jsxs("div",{className:b(`cs:flex cs:max-md:min-h-11 cs:max-md:items-center ${N[s]}`,d),children:[a.jsx("div",{className:"cs:flex cs:h-6 cs:shrink-0 cs:items-center",children:a.jsxs("div",{className:`cs:group cs:grid cs:grid-cols-1 ${z[s]}`,children:[a.jsx("input",{ref:u,id:i,type:"checkbox","aria-describedby":g,"aria-invalid":(e==null?void 0:e.isInvalid)||void 0,style:x,className:"cs:col-start-1 cs:row-start-1 cs:appearance-none cs:rounded-sm cs:border cs:border-gray-300 cs:dark:border-gray-600 cs:bg-white cs:dark:bg-gray-700 cs:focus-visible:outline-2 cs:focus-visible:outline-offset-2 cs:disabled:border-gray-300 cs:disabled:bg-gray-100 cs:dark:disabled:bg-gray-800 cs:disabled:checked:bg-gray-200 cs:forced-colors:appearance-auto cs-checked",onChange:f,...p}),a.jsxs("svg",{fill:"none",viewBox:"0 0 14 14",className:`cs:pointer-events-none cs:col-start-1 cs:row-start-1 cs:self-center cs:justify-self-center cs:group-has-disabled:stroke-gray-950/25 ${I(t)&&k.has(t)?"cs:stroke-gray-900":"cs:stroke-white"} ${C[s]}`,children:[a.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"cs:opacity-0 cs:group-has-checked:opacity-100"}),a.jsx("path",{d:"M3 7H11",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"cs:opacity-0 cs:group-has-indeterminate:opacity-100"})]})]})}),n&&a.jsx("div",{className:"cs:text-sm/6",children:a.jsx("label",{htmlFor:i,className:`cs:font-sans cs:dark:text-gray-400 ${S[s]}`,children:n})})]})}M.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:""},scale:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:"PresetColor | CustomColor | SemanticColor",elements:[{name:"union",raw:`| "red"
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
fires for callers that need the original event.`},className:{required:!1,tsType:{name:"string"},description:"Extra class names applied to the outer wrapper."},ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLInputElement"}],raw:"Ref<HTMLInputElement>"},description:'Forwarded to the inner `<input type="checkbox">`.'}},composes:["Omit"]};export{M as C};
