"use client";
import{j as e}from"./iframe-BvSZAKLD.js";import{B as q}from"./Button-UEsOGCCP.js";import{c as r}from"./clsx-BYFsuUQf.js";import"./preload-helper-CJpEdZxZ.js";import"./colorContrast-C0ZIkquj.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-RbONob3D.js";import"./Slot-CxqAnQZs.js";import"./useUIColor-DuigiTdC.js";const I={xs:"cs:p-4 cs:gap-1.5",sm:"cs:p-6 cs:gap-2",md:"cs:p-10 cs:gap-3",lg:"cs:p-14 cs:gap-4"},B={xs:"cs:text-2xl",sm:"cs:text-3xl",md:"cs:text-4xl",lg:"cs:text-5xl"},M={xs:"cs:text-sm",sm:"cs:text-base",md:"cs:text-lg",lg:"cs:text-xl"},A={xs:"cs:text-xs",sm:"cs:text-xs",md:"cs:text-sm",lg:"cs:text-base"};function l({title:t,description:d,icon:m,action:p,scale:s="md",className:T}){return e.jsxs("div",{role:"status",className:r("cs:flex cs:flex-col cs:items-center cs:justify-center cs:text-center","cs:rounded-lg cs:border cs:border-dashed cs:border-gray-300 cs:dark:border-gray-600","cs:bg-white cs:dark:bg-gray-800",I[s],T),children:[m&&e.jsx("div",{"aria-hidden":"true",className:r("cs:text-gray-400 cs:dark:text-gray-500",B[s]),children:m}),t&&e.jsx("h3",{className:r("cs:font-sans cs:font-semibold cs:text-gray-900 cs:dark:text-gray-100",M[s]),children:t}),d&&e.jsx("p",{className:r("cs:font-sans cs:text-gray-500 cs:dark:text-gray-400 cs:max-w-md",A[s]),children:d}),p&&e.jsx("div",{className:"cs:mt-2",children:p})]})}l.__docgenInfo={description:`Placeholder shown when a list, table, or panel has no rows to display.

Differs from \`Alert variant="info"\` in three ways:
- centered, vertical stack of icon + title + description + action
- quieter visual weight (dashed border, no colored accents)
- first-class action slot so "do something to make this list non-empty"
  prompts read naturally

Use Alert when the message is transient feedback ("filter cleared",
"saved"). Use EmptyState when the message reflects a long-lived state
("no movements recorded yet").`,methods:[],displayName:"EmptyState",props:{title:{required:!1,tsType:{name:"string"},description:"Optional headline. Renders as an `<h3>` for screen readers."},description:{required:!1,tsType:{name:"ReactNode"},description:"Longer-form explanation rendered beneath the title."},icon:{required:!1,tsType:{name:"ReactNode"},description:"Decorative icon (SVG, emoji, image element …). Sized by `iconScaleMap` so\nit stays proportional to the chosen `scale`."},action:{required:!1,tsType:{name:"ReactNode"},description:'Call-to-action rendered beneath the description — typically a Button or\na `<Link>`. Use this for "Import data" / "Create your first item" prompts.'},scale:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const V={title:"Display/EmptyState",component:l,parameters:{layout:"padded"},argTypes:{scale:{control:"select",options:["xs","sm","md","lg"]}}},a={args:{title:"No items match these filters",description:"Try clearing the search box or relaxing the status filter."}},o={args:{icon:"📦",title:"No items yet",description:"Import an .xlsx workbook or create your first item to get started."}},n={args:{icon:"📊",title:"No data to chart",description:"Record at least one stock movement and the trend line will appear here.",action:e.jsx(q,{children:"Record movement"})}},c={args:{description:"No results."}},i={render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:["xs","sm","md","lg"].map(t=>e.jsx(l,{scale:t,icon:"🪹",title:`scale="${t}"`,description:"Same content, four sizes."},t))})};var x,g,u;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: "No items match these filters",
    description: "Try clearing the search box or relaxing the status filter."
  }
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,y,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    icon: "📦",
    title: "No items yet",
    description: "Import an .xlsx workbook or create your first item to get started."
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var S,v,N;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    icon: "📊",
    title: "No data to chart",
    description: "Record at least one stock movement and the trend line will appear here.",
    action: <Button>Record movement</Button>
  }
}`,...(N=(v=n.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var b,k,w;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    description: "No results."
  }
}`,...(w=(k=c.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var j,E,R;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      {(["xs", "sm", "md", "lg"] as const).map(scale => <EmptyState key={scale} scale={scale} icon="🪹" title={\`scale="\${scale}"\`} description="Same content, four sizes." />)}
    </div>
}`,...(R=(E=i.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const $=["Primary","WithIcon","WithAction","SilentEmpty","Scales"];export{a as Primary,i as Scales,c as SilentEmpty,n as WithAction,o as WithIcon,$ as __namedExportsOrder,V as default};
