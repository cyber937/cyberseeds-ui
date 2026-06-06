"use client";
import{r as l,j as t,R as x}from"./iframe-BvSZAKLD.js";import{L as h}from"./colorContrast-C0ZIkquj.js";import{a as b,i as C,c as w}from"./colorUtils-CzaG3QqU.js";import{b as N,F as k}from"./designTokens-RbONob3D.js";import{S as T}from"./Slot-CxqAnQZs.js";import{u as I}from"./useUIColor-DuigiTdC.js";const u=l.createContext(null),B={xs:"cs:px-1.5 cs:py-0.5 cs:text-[0.625rem] cs:h-5 cs:max-md:min-h-11",sm:"cs:px-2 cs:py-1 cs:text-xs cs:h-6 cs:max-md:min-h-11",md:"cs:px-3 cs:py-1.5 cs:text-sm/6 cs:h-9 cs:max-md:min-h-11",lg:"cs:px-4 cs:py-2 cs:text-base cs:h-11"};function d({scale:a="md",variant:e="primary",color:s="blue",children:r,className:p="",asChild:v=!1,...o}){const{color:y}=I()??{color:void 0},n=b(y??s),i=C(n)&&h.has(n)?"cs:text-gray-900":"cs:text-white cs:dark:text-gray-200",g=l.useMemo(()=>({primary:`${i} cs:disabled:text-gray-500 cs-btn-primary`,secondary:"cs:dark:text-gray-400 cs:ring-gray-500/80 cs:ring-1 cs:ring-inset cs:text-black cs:hover:bg-gray-400 cs:active:bg-gray-300 cs:dark:hover:bg-gray-600 cs:dark:active:bg-gray-500"}),[i]),c=e==="primary"?w(n):void 0,f=l.useMemo(()=>({scale:a}),[a]),m=`cs:border-0 cs:shadow-none cs:inline-flex cs:items-center cs:rounded-md cs:font-sans cs:justify-center cs:font-semibold cs:cursor-pointer cs:w-fit cs:max-w-full cs:whitespace-nowrap cs:self-start cs:align-middle cs:gap-1.5 cs:active:scale-[0.97] cs:motion-reduce:active:scale-100 ${N} ${k} ${B[a]} ${g[e]} cs-focus-visible ${p}`;return t.jsx(u.Provider,{value:f,children:v?t.jsx(T,{style:c,className:m,...o,children:r}):t.jsx("button",{style:c,className:m,...o,children:r})})}const R={xs:"cs:size-3",sm:"cs:size-4",md:"cs:size-5",lg:"cs:size-6"};d.Icon=function({children:e}){const s=l.useContext(u);if(!s)throw new Error("Button.Icon must be used within a <Button>");return x.cloneElement(e,{className:`${e.props.className??""} ${R[s.scale]}`.trim()})};d.__docgenInfo={description:"",methods:[{name:"Icon",docblock:null,modifiers:["static"],params:[{name:`{
  children,
}: {
  children: ReactElement<{ className?: string }>;
}`,optional:!1,type:{name:"signature",type:"object",raw:`{
  children: ReactElement<{ className?: string }>;
}`,signature:{properties:[{key:"children",value:{name:"ReactElement",elements:[{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}],raw:"ReactElement<{ className?: string }>",required:!0}}]}}}],returns:null}],displayName:"Button",props:{scale:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:"PresetColor | CustomColor | SemanticColor",elements:[{name:"union",raw:`| "red"
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
| "stone"`,elements:[{name:"literal",value:'"red"'},{name:"literal",value:'"orange"'},{name:"literal",value:'"amber"'},{name:"literal",value:'"yellow"'},{name:"literal",value:'"lime"'},{name:"literal",value:'"green"'},{name:"literal",value:'"emerald"'},{name:"literal",value:'"teal"'},{name:"literal",value:'"cyan"'},{name:"literal",value:'"sky"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"indigo"'},{name:"literal",value:'"violet"'},{name:"literal",value:'"purple"'},{name:"literal",value:'"fuchsia"'},{name:"literal",value:'"pink"'},{name:"literal",value:'"rose"'},{name:"literal",value:'"slate"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"zinc"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"stone"'}]},{name:"CustomColor"},{name:"union",raw:'"success" | "warning" | "error" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'}]}]},description:"",defaultValue:{value:'"blue"',computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:"When true, merges Button's styling and event handlers onto a single\nchild element (typically `<a>` or a router `<Link>`) instead of\nrendering its own `<button>`. Mirrors the `Tabs.Trigger asChild`\npattern. The child receives Button's class names, focus-ring, color\nstyles, and any handlers / refs from Button's props.",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};export{d as B};
