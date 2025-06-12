import{j as t,r as n,R as d}from"./iframe-SMyN5pTS.js";import{u as p,b as y}from"./colorMap-BNZnq6PF.js";const c=n.createContext(null);function i({scale:l="md",variant:e="primary",color:s="blue",children:a,className:o="",...u}){const{color:m}=p()??{color:void 0},r=m??s,v={sm:"cs:px-2 cs:py-1 cs:text-xs",md:"cs:px-3 cs:py-1.5 cs:text-sm"},g={red:"cs:hover:bg-red-500 cs:active:bg-red-400",orange:"cs:hover:bg-orange-500 cs:active:bg-orange-400",amber:"cs:hover:bg-amber-500 cs:active:bg-amber-400",yellow:"cs:hover:bg-yellow-500 cs:active:bg-yellow-400",lime:"cs:hover:bg-lime-500 cs:active:bg-lime-400",green:"cs:hover:bg-green-500 cs:active:bg-green-400",emerald:"cs:hover:bg-emerald-500 cs:active:bg-emerald-400",teal:"cs:hover:bg-teal-500 cs:active:bg-teal-400",cyan:"cs:hover:bg-cyan-500 cs:active:bg-cyan-400",sky:"cs:hover:bg-sky-500 cs:active:bg-sky-400",blue:"cs:hover:bg-blue-500 cs:active:bg-blue-400",indigo:"cs:hover:bg-indigo-500 cs:active:bg-indigo-400",violet:"cs:hover:bg-violet-500 cs:active:bg-violet-400",purple:"cs:hover:bg-purple-500 cs:active:bg-purple-400",fuchsia:"cs:hover:bg-fuchsia-500 cs:active:bg-fuchsia-400",pink:"cs:hover:bg-pink-500 cs:active:bg-pink-400",rose:"cs:hover:bg-rose-500 cs:active:bg-rose-400",slate:"cs:hover:bg-slate-500 cs:active:bg-slate-400",gray:"cs:hover:bg-gray-500 cs:active:bg-gray-400",zinc:"cs:hover:bg-zinc-500 cs:active:bg-zinc-400",neutral:"cs:hover:bg-neutral-500 cs:active:bg-neutral-400",stone:"cs:hover:bg-stone-500 cs:active:bg-stone-400"},b={primary:`cs:text-white ${y[r]} ${g[r]}`,secondary:"cs:dark:text-white cs:ring-gray-500/80 cs:ring-1 cs:ring-inset cs:text-black cs:hover:bg-gray-400 cs:active:bg-gray-300"};return t.jsx(c.Provider,{value:{scale:l},children:t.jsx("button",{className:`cs:inline-flex cs:items-center cs:rounded-md cs:font-sans cs:justify-center cs:font-semibold cs:cursor-pointer cs:w-fit cs:max-w-full cs:whitespace-nowrap cs:self-start cs:align-middle cs:gap-1.5 cs:transition-colors cs:duration-150 cs:ease-in-out ${v[l]} ${b[e]} ${o}`,...u,children:a})})}i.Icon=function({children:e}){const s={sm:"cs:size-4",md:"cs:size-5"},a=n.useContext(c);if(!a)throw new Error("Button.Icon must be used within a <Button>");return d.cloneElement(e,{className:`${e.props.className??""} ${s[a.scale]}`.trim()})};i.__docgenInfo={description:"",methods:[{name:"Icon",docblock:null,modifiers:["static"],params:[{name:`{
  children,
}: {
  children: ReactElement<{ className?: string }>;
}`,optional:!1,type:{name:"signature",type:"object",raw:`{
  children: ReactElement<{ className?: string }>;
}`,signature:{properties:[{key:"children",value:{name:"ReactElement",elements:[{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}],raw:"ReactElement<{ className?: string }>",required:!0}}]}}}],returns:null}],displayName:"Button",props:{scale:{required:!1,tsType:{name:"union",raw:'"sm" | "md"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:`| "red"
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
| "stone"`,elements:[{name:"literal",value:'"red"'},{name:"literal",value:'"orange"'},{name:"literal",value:'"amber"'},{name:"literal",value:'"yellow"'},{name:"literal",value:'"lime"'},{name:"literal",value:'"green"'},{name:"literal",value:'"emerald"'},{name:"literal",value:'"teal"'},{name:"literal",value:'"cyan"'},{name:"literal",value:'"sky"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"indigo"'},{name:"literal",value:'"violet"'},{name:"literal",value:'"purple"'},{name:"literal",value:'"fuchsia"'},{name:"literal",value:'"pink"'},{name:"literal",value:'"rose"'},{name:"literal",value:'"slate"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"zinc"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"stone"'}]},description:"",defaultValue:{value:'"blue"',computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};export{i as B};
