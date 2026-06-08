"use client";
import{r as c,j as n}from"./iframe-B1uMaBYR.js";import{c as h}from"./clsx-BYFsuUQf.js";import{L as w}from"./colorContrast-C0ZIkquj.js";import{a as k,c as I,i as T}from"./colorUtils-CzaG3QqU.js";import{c as S}from"./designTokens-RbONob3D.js";import{u as R}from"./FormFieldContext-BHu2Dvwc.js";import{u as C}from"./useUIColor-BB8pR0ej.js";const N={xs:"cs:gap-x-1.5",sm:"cs:gap-x-2",md:"cs:gap-x-3",lg:"cs:gap-x-3"},j={xs:"cs:size-3",sm:"cs:size-3.5",md:"cs:size-4",lg:"cs:size-5"},q={xs:"cs:text-[0.625rem]",sm:"cs:text-xs",md:"cs:text-sm/6",lg:"cs:text-base"},z=c.memo(function({label:t,scale:a="md",color:m="blue",id:d,onCheckedChange:l,onChange:r,className:u,ref:p,...f}){const v=c.useId(),i=d??v,e=R(),b=e?[e.errorId,e.helpId].join(" "):void 0,{color:g}=C()??{color:void 0},s=k(g??m),y=I(s),x=o=>{l==null||l(o.target.checked),r==null||r(o)};return n.jsxs("div",{className:h(`cs:flex cs:items-center cs:max-md:min-h-11 ${N[a]}`,u),children:[n.jsx("input",{ref:p,id:i,type:"radio","aria-describedby":b,"aria-invalid":(e==null?void 0:e.isInvalid)||void 0,style:y,className:`cs:relative cs:appearance-none cs:rounded-full cs:border cs:border-gray-200 cs:dark:border-gray-600 cs:bg-white cs:dark:bg-gray-700 ${T(s)&&w.has(s)?"cs:before:bg-gray-900":"cs:before:bg-white"} cs:before:absolute cs:before:inset-1 cs:before:rounded-full cs:not-checked:before:hidden cs:focus-visible:outline-2 cs:focus-visible:outline-offset-2 cs:disabled:border-gray-300 cs:disabled:bg-gray-100 cs:dark:disabled:bg-gray-800 cs:disabled:before:bg-gray-400 cs:forced-colors:appearance-auto cs:forced-colors:before:hidden ${S} ${j[a]} cs-checked`,onChange:x,...f}),t&&n.jsx("label",{htmlFor:i,className:`cs:block cs:text-gray-900 cs:dark:text-gray-400 cs:font-sans ${q[a]}`,children:t})]})});z.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{label:{required:!1,tsType:{name:"string"},description:""},scale:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:"PresetColor | CustomColor | SemanticColor",elements:[{name:"union",raw:`| "red"
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

Symmetrical with {@link Checkbox} and {@link Switch}.`},className:{required:!1,tsType:{name:"string"},description:"Extra class names applied to the outer wrapper."},ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLInputElement"}],raw:"Ref<HTMLInputElement>"},description:'Forwarded to the inner `<input type="radio">`.'}},composes:["Omit"]};export{z as R};
