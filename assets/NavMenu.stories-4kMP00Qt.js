"use client";
import{j as e,r as R}from"./iframe-BvSZAKLD.js";import{c as i}from"./clsx-BYFsuUQf.js";import{a as E,c as L}from"./colorUtils-CzaG3QqU.js";import{u as F}from"./useUIColor-DuigiTdC.js";import{B as j}from"./Badge-DDpdvzb9.js";import"./preload-helper-CJpEdZxZ.js";import"./colorContrast-C0ZIkquj.js";const P={md:"cs:px-3 cs:py-2 cs:text-sm cs:gap-x-2.5"},G={md:"cs:size-4.5"};function W({children:p,color:r="blue",scale:a="md",fullHeight:n=!1,ariaLabel:d="Main navigation",className:m}){const{color:I}=F()??{color:void 0},t=E(I??r),b=L(t);return e.jsx("nav",{"aria-label":d,style:b,"data-nav-scale":a,className:i("cs:font-sans cs:flex cs:flex-col cs:gap-1",n&&"cs:h-full",m),children:p})}const J=R.memo(function({title:r,children:a,className:n}){return e.jsxs("div",{className:i("cs:flex cs:flex-col cs:gap-0.5",n),children:[e.jsx("div",{className:"cs:px-3 cs:pt-3 cs:pb-1 cs:text-[0.625rem] cs:font-semibold cs:uppercase cs:tracking-wide cs:text-gray-500 cs:dark:text-gray-400",children:r}),e.jsx("div",{className:"cs:flex cs:flex-col cs:gap-0.5",children:a})]})}),K=R.memo(function({href:r,active:a=!1,icon:n,trailing:d,onClick:m,children:I,disabled:t=!1,className:b}){const A=P.md,O=G.md,f=i("cs:flex cs:items-center cs:rounded-md cs:transition-colors cs:duration-150 cs:motion-reduce:transition-none","cs:focus-visible:outline-2 cs:focus-visible:outline-offset-2 cs-focus-visible",A,a?"cs:bg-[color-mix(in_oklch,_var(--cs-ui-base)_15%,_transparent)] cs:text-[var(--cs-ui-base)] cs:font-medium":"cs:text-gray-700 cs:dark:text-gray-300 cs:hover:bg-gray-100 cs:dark:hover:bg-gray-800",t&&"cs:opacity-50 cs:pointer-events-none",b),N=e.jsxs(e.Fragment,{children:[n&&e.jsx("span",{className:i("cs:flex cs:items-center cs:justify-center cs:shrink-0",O),"aria-hidden":"true",children:n}),e.jsx("span",{className:"cs:flex-1 cs:min-w-0 cs:truncate cs:text-left",children:I}),d&&e.jsx("span",{className:"cs:shrink-0",children:d})]});return r?e.jsx("a",{href:r,onClick:m,"aria-current":a?"page":void 0,"aria-disabled":t||void 0,tabIndex:t?-1:void 0,className:f,children:N}):e.jsx("button",{type:"button",onClick:m,disabled:t,"aria-current":a?"page":void 0,className:i("cs:border-0 cs:shadow-none cs:bg-transparent cs:w-full cs:cursor-pointer",f),children:N})}),s=Object.assign(W,{Section:J,Item:K});W.__docgenInfo={description:"",methods:[],displayName:"NavMenuRoot",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},color:{required:!1,tsType:{name:"union",raw:"PresetColor | CustomColor | SemanticColor",elements:[{name:"union",raw:`| "red"
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
| "stone"`,elements:[{name:"literal",value:'"red"'},{name:"literal",value:'"orange"'},{name:"literal",value:'"amber"'},{name:"literal",value:'"yellow"'},{name:"literal",value:'"lime"'},{name:"literal",value:'"green"'},{name:"literal",value:'"emerald"'},{name:"literal",value:'"teal"'},{name:"literal",value:'"cyan"'},{name:"literal",value:'"sky"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"indigo"'},{name:"literal",value:'"violet"'},{name:"literal",value:'"purple"'},{name:"literal",value:'"fuchsia"'},{name:"literal",value:'"pink"'},{name:"literal",value:'"rose"'},{name:"literal",value:'"slate"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"zinc"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"stone"'}]},{name:"CustomColor"},{name:"union",raw:'"success" | "warning" | "error" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'}]}]},description:"Sets the accent used by the active item. Defaults to UIColor context or blue.",defaultValue:{value:'"blue"',computed:!1}},scale:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},fullHeight:{required:!1,tsType:{name:"boolean"},description:"Stretches the menu vertically. Useful inside a sidebar shell.",defaultValue:{value:"false",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:'ARIA label for the underlying <nav> landmark. Default "Main navigation".',defaultValue:{value:'"Main navigation"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const ae={component:s,title:"Layout/NavMenu",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"]}}},l=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M3 12L12 3l9 9"}),e.jsx("path",{d:"M5 10v10h14V10"})]}),c=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),e.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),e.jsx("rect",{x:"3",y:"14",width:"7",height:"7"}),e.jsx("rect",{x:"14",y:"14",width:"7",height:"7"})]}),o=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"3"}),e.jsx("path",{d:"M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 0 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 0 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 0 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5h.1a1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 0 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"})]}),u={render:()=>e.jsx("div",{className:"cs:w-60 cs:p-3 cs:bg-white cs:dark:bg-gray-900 cs:rounded-md cs:border cs:border-gray-200 cs:dark:border-gray-700",children:e.jsxs(s,{children:[e.jsx(s.Item,{href:"/",icon:e.jsx(l,{}),active:!0,children:"Dashboard"}),e.jsx(s.Item,{href:"/items",icon:e.jsx(c,{}),children:"Items"}),e.jsx(s.Item,{href:"/settings",icon:e.jsx(o,{}),children:"Settings"})]})})},v={render:()=>e.jsx("div",{className:"cs:w-60 cs:p-3 cs:bg-white cs:dark:bg-gray-900 cs:rounded-md cs:border cs:border-gray-200 cs:dark:border-gray-700",children:e.jsxs(s,{color:"indigo",children:[e.jsxs(s.Section,{title:"Operations",children:[e.jsx(s.Item,{href:"/",icon:e.jsx(l,{}),children:"Dashboard"}),e.jsx(s.Item,{href:"/items",icon:e.jsx(c,{}),active:!0,children:"Items"}),e.jsx(s.Item,{href:"/movements",icon:e.jsx(c,{}),children:"Movements"})]}),e.jsxs(s.Section,{title:"Admin",children:[e.jsx(s.Item,{href:"/users",icon:e.jsx(o,{}),children:"Users"}),e.jsx(s.Item,{href:"/settings",icon:e.jsx(o,{}),children:"Settings"})]})]})})},g={render:()=>e.jsx("div",{className:"cs:w-60 cs:p-3 cs:bg-white cs:dark:bg-gray-900 cs:rounded-md cs:border cs:border-gray-200 cs:dark:border-gray-700",children:e.jsxs(s,{color:"emerald",children:[e.jsx(s.Item,{href:"/",icon:e.jsx(l,{}),children:"Dashboard"}),e.jsx(s.Item,{href:"/items",icon:e.jsx(c,{}),active:!0,trailing:e.jsx(j,{variant:"solid",color:"red",scale:"xs",children:"3"}),children:"Items"}),e.jsx(s.Item,{href:"/inbox",icon:e.jsx(o,{}),trailing:e.jsx(j,{variant:"solid",color:"blue",scale:"xs",children:"12"}),children:"Inbox"})]})})},h={render:()=>e.jsx("div",{className:"cs:w-60 cs:p-3 cs:bg-white cs:dark:bg-gray-900 cs:rounded-md cs:border cs:border-gray-200 cs:dark:border-gray-700",children:e.jsxs(s,{children:[e.jsx(s.Item,{icon:e.jsx(l,{}),onClick:()=>alert("Home clicked"),children:"Dashboard"}),e.jsx(s.Item,{icon:e.jsx(c,{}),active:!0,onClick:()=>alert("Items clicked"),children:"Items"}),e.jsx(s.Item,{icon:e.jsx(o,{}),disabled:!0,onClick:()=>alert("won't fire"),children:"Settings (disabled)"})]})})},x={render:()=>e.jsx("div",{className:"cs:w-60 cs:p-3 cs:bg-white cs:dark:bg-gray-900 cs:rounded-md cs:border cs:border-gray-200 cs:dark:border-gray-700",children:e.jsxs(s,{children:[e.jsx(s.Item,{href:"/",icon:e.jsx(l,{}),active:!0,children:"Dashboard"}),e.jsx(s.Item,{href:"/items",icon:e.jsx(c,{}),disabled:!0,children:"Items (coming soon)"}),e.jsx(s.Item,{href:"/settings",icon:e.jsx(o,{}),children:"Settings"})]})})};var y,M,k;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="cs:w-60 cs:p-3 cs:bg-white cs:dark:bg-gray-900 cs:rounded-md cs:border cs:border-gray-200 cs:dark:border-gray-700">
      <NavMenu>
        <NavMenu.Item href="/" icon={<HomeIcon />} active>Dashboard</NavMenu.Item>
        <NavMenu.Item href="/items" icon={<ItemsIcon />}>Items</NavMenu.Item>
        <NavMenu.Item href="/settings" icon={<SettingsIcon />}>Settings</NavMenu.Item>
      </NavMenu>
    </div>
}`,...(k=(M=u.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var w,S,C;v.parameters={...v.parameters,docs:{...(w=v.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="cs:w-60 cs:p-3 cs:bg-white cs:dark:bg-gray-900 cs:rounded-md cs:border cs:border-gray-200 cs:dark:border-gray-700">
      <NavMenu color="indigo">
        <NavMenu.Section title="Operations">
          <NavMenu.Item href="/" icon={<HomeIcon />}>Dashboard</NavMenu.Item>
          <NavMenu.Item href="/items" icon={<ItemsIcon />} active>Items</NavMenu.Item>
          <NavMenu.Item href="/movements" icon={<ItemsIcon />}>Movements</NavMenu.Item>
        </NavMenu.Section>
        <NavMenu.Section title="Admin">
          <NavMenu.Item href="/users" icon={<SettingsIcon />}>Users</NavMenu.Item>
          <NavMenu.Item href="/settings" icon={<SettingsIcon />}>Settings</NavMenu.Item>
        </NavMenu.Section>
      </NavMenu>
    </div>
}`,...(C=(S=v.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,B,H;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="cs:w-60 cs:p-3 cs:bg-white cs:dark:bg-gray-900 cs:rounded-md cs:border cs:border-gray-200 cs:dark:border-gray-700">
      <NavMenu color="emerald">
        <NavMenu.Item href="/" icon={<HomeIcon />}>Dashboard</NavMenu.Item>
        <NavMenu.Item href="/items" icon={<ItemsIcon />} active trailing={<Badge variant="solid" color="red" scale="xs">3</Badge>}>
          Items
        </NavMenu.Item>
        <NavMenu.Item href="/inbox" icon={<SettingsIcon />} trailing={<Badge variant="solid" color="blue" scale="xs">12</Badge>}>
          Inbox
        </NavMenu.Item>
      </NavMenu>
    </div>
}`,...(H=(B=g.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var T,V,_;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="cs:w-60 cs:p-3 cs:bg-white cs:dark:bg-gray-900 cs:rounded-md cs:border cs:border-gray-200 cs:dark:border-gray-700">
      <NavMenu>
        <NavMenu.Item icon={<HomeIcon />} onClick={() => alert("Home clicked")}>
          Dashboard
        </NavMenu.Item>
        <NavMenu.Item icon={<ItemsIcon />} active onClick={() => alert("Items clicked")}>
          Items
        </NavMenu.Item>
        <NavMenu.Item icon={<SettingsIcon />} disabled onClick={() => alert("won't fire")}>
          Settings (disabled)
        </NavMenu.Item>
      </NavMenu>
    </div>
}`,...(_=(V=h.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var q,U,z;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="cs:w-60 cs:p-3 cs:bg-white cs:dark:bg-gray-900 cs:rounded-md cs:border cs:border-gray-200 cs:dark:border-gray-700">
      <NavMenu>
        <NavMenu.Item href="/" icon={<HomeIcon />} active>Dashboard</NavMenu.Item>
        <NavMenu.Item href="/items" icon={<ItemsIcon />} disabled>Items (coming soon)</NavMenu.Item>
        <NavMenu.Item href="/settings" icon={<SettingsIcon />}>Settings</NavMenu.Item>
      </NavMenu>
    </div>
}`,...(z=(U=x.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};const re=["Default","Sectioned","WithBadges","ButtonItems","Disabled"];export{h as ButtonItems,u as Default,x as Disabled,v as Sectioned,g as WithBadges,re as __namedExportsOrder,ae as default};
