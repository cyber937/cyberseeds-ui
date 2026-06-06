"use client";
import{r as o,j as e}from"./iframe-BvSZAKLD.js";import{c as g}from"./clsx-BYFsuUQf.js";import{P as M}from"./Popover-0dRNBHtb.js";import{B as y}from"./Button-UEsOGCCP.js";import"./preload-helper-CJpEdZxZ.js";import"./Slot-CxqAnQZs.js";import"./colorContrast-C0ZIkquj.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-RbONob3D.js";import"./useUIColor-DuigiTdC.js";const E=o.createContext(void 0);function O(r){const t=o.useContext(E);if(!t)throw new Error(`${r} must be used within a <Menu>`);return t}function n({children:r,placement:t="bottom",align:a="start",closeOnSelect:s=!0,defaultOpen:c=!1,open:u,onOpenChange:l}){const i=u!==void 0,[f,D]=o.useState(c),h=i?u:f,x=o.useCallback(v=>{i||D(v),l==null||l(v)},[i,l]),b=o.useCallback(()=>x(!1),[x]),P=o.useMemo(()=>({open:h,closeMenu:b,closeOnSelect:s}),[h,b,s]);return e.jsx(E.Provider,{value:P,children:e.jsx(M,{open:h,onOpenChange:x,placement:t,align:a,children:r})})}function q({children:r,asChild:t=!1,className:a}){return e.jsx(M.Trigger,{asChild:t,haspopup:"menu",className:a,children:r})}function R(r){const t=Array.from(r.currentTarget.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"])'));if(t.length===0)return;const a=t.indexOf(document.activeElement);let s=null;switch(r.key){case"ArrowDown":s=a<0?0:(a+1)%t.length;break;case"ArrowUp":s=a<0?t.length-1:(a-1+t.length)%t.length;break;case"Home":s=0;break;case"End":s=t.length-1;break;default:return}r.preventDefault(),t[s].focus()}function B({children:r,className:t,"aria-label":a}){return e.jsx(M.Content,{role:"menu",autoFocus:!0,"aria-label":a,onKeyDown:R,className:g("cs:py-1",t),children:r})}function L({children:r,onSelect:t,disabled:a=!1,destructive:s=!1,icon:c,className:u}){const{closeMenu:l,closeOnSelect:i}=O("Menu.Item"),f=o.useCallback(()=>{a||(t==null||t(),i&&l())},[a,t,i,l]);return e.jsxs("button",{type:"button",role:"menuitem",tabIndex:-1,disabled:a,"aria-disabled":a||void 0,onClick:f,className:g("cs:flex cs:w-full cs:items-center cs:gap-2 cs:rounded-sm cs:px-2 cs:py-1.5","cs:text-left cs:text-sm cs:font-sans cs:cursor-pointer","cs:border-0 cs:bg-transparent cs:outline-none","cs:focus-visible:bg-gray-100 cs:dark:focus-visible:bg-gray-700","cs:hover:bg-gray-100 cs:dark:hover:bg-gray-700",s?"cs:text-red-600 cs:dark:text-red-400":"cs:text-gray-900 cs:dark:text-gray-200",a&&"cs:opacity-50 cs:cursor-not-allowed cs:pointer-events-none",u),children:[c&&e.jsx("span",{className:"cs:shrink-0 cs:inline-flex",children:c}),e.jsx("span",{className:"cs:flex-1",children:r})]})}function V({children:r,className:t}){return e.jsx("div",{className:g("cs:px-2 cs:py-1 cs:text-xs cs:font-semibold cs:uppercase cs:tracking-wider","cs:text-gray-500 cs:dark:text-gray-400 cs:select-none",t),children:r})}function K({className:r}){return e.jsx("div",{role:"separator",className:g("cs:my-1 cs:h-px cs:bg-gray-200 cs:dark:bg-gray-700",r)})}n.Trigger=q;n.Content=B;n.Item=L;n.Label=V;n.Separator=K;n.__docgenInfo={description:"",methods:[{name:"Trigger",docblock:null,modifiers:["static"],params:[{name:"{ children, asChild = false, className }: MenuTriggerProps",optional:!1,type:{name:"MenuTriggerProps",alias:"MenuTriggerProps"}}],returns:null},{name:"Content",docblock:null,modifiers:["static"],params:[{name:'{ children, className, "aria-label": ariaLabel }: MenuContentProps',optional:!1,type:{name:"MenuContentProps",alias:"MenuContentProps"}}],returns:null},{name:"Item",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  onSelect,
  disabled = false,
  destructive = false,
  icon,
  className,
}: MenuItemProps`,optional:!1,type:{name:"MenuItemProps",alias:"MenuItemProps"}}],returns:null},{name:"Label",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: { children: ReactNode; className?: string }",optional:!1,type:{name:"signature",type:"object",raw:"{ children: ReactNode; className?: string }",signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}},{key:"className",value:{name:"string",required:!1}}]}}}],returns:null},{name:"Separator",docblock:null,modifiers:["static"],params:[{name:"{ className }: { className?: string }",optional:!1,type:{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}}],returns:null}],displayName:"Menu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},placement:{required:!1,tsType:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"bottom"',computed:!1}},align:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'}]},description:"",defaultValue:{value:'"start"',computed:!1}},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:"Close the menu after an item is selected. Defaults to `true`.",defaultValue:{value:"true",computed:!1}},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const X={component:n,title:"Overlay/Menu",tags:["autodocs"],argTypes:{placement:{control:{type:"radio"},options:["top","bottom","left","right"]},align:{control:{type:"radio"},options:["start","center","end"]},closeOnSelect:{control:{type:"boolean"}}},parameters:{docs:{description:{component:'Action menu built on `Popover`, following the WAI-ARIA menu pattern. Trigger gets `aria-haspopup="menu"`; the panel is `role="menu"` with `Menu.Item` (`menuitem`), `Menu.Label`, and `Menu.Separator`. Arrow keys roam items, Enter/Space selects, Escape closes. Selecting an item closes the menu unless `closeOnSelect={false}`.'}}}},d={render:r=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"3rem"},children:e.jsxs(n,{...r,children:[e.jsx(n.Trigger,{asChild:!0,children:e.jsx(y,{children:"Actions"})}),e.jsxs(n.Content,{"aria-label":"Item actions",children:[e.jsx(n.Item,{onSelect:()=>{},children:"Edit"}),e.jsx(n.Item,{onSelect:()=>{},children:"Duplicate"}),e.jsx(n.Item,{onSelect:()=>{},disabled:!0,children:"Archive"})]})]})}),args:{placement:"bottom",align:"start",closeOnSelect:!0}},m={render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"3rem"},children:e.jsxs(n,{children:[e.jsx(n.Trigger,{asChild:!0,children:e.jsx(y,{variant:"secondary",children:"SKU-1234 ▾"})}),e.jsxs(n.Content,{"aria-label":"Row actions",children:[e.jsx(n.Label,{children:"Manage"}),e.jsx(n.Item,{icon:e.jsx("span",{"aria-hidden":!0,children:"✏️"}),onSelect:()=>{},children:"Edit details"}),e.jsx(n.Item,{icon:e.jsx("span",{"aria-hidden":!0,children:"📄"}),onSelect:()=>{},children:"Export row"}),e.jsx(n.Separator,{}),e.jsx(n.Item,{icon:e.jsx("span",{"aria-hidden":!0,children:"🗑️"}),destructive:!0,onSelect:()=>{},children:"Delete"})]})]})})},p={render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"3rem"},children:e.jsxs(n,{defaultOpen:!0,children:[e.jsx(n.Trigger,{asChild:!0,children:e.jsx(y,{children:"Actions"})}),e.jsxs(n.Content,{"aria-label":"Item actions",children:[e.jsx(n.Item,{onSelect:()=>{},children:"Receive"}),e.jsx(n.Item,{onSelect:()=>{},children:"Sell"}),e.jsx(n.Item,{onSelect:()=>{},children:"Adjust"})]})]})})};var j,I,S;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    justifyContent: "center",
    padding: "3rem"
  }}>
      <Menu {...args}>
        <Menu.Trigger asChild>
          <Button>Actions</Button>
        </Menu.Trigger>
        <Menu.Content aria-label="Item actions">
          <Menu.Item onSelect={() => {}}>Edit</Menu.Item>
          <Menu.Item onSelect={() => {}}>Duplicate</Menu.Item>
          <Menu.Item onSelect={() => {}} disabled>
            Archive
          </Menu.Item>
        </Menu.Content>
      </Menu>
    </div>,
  args: {
    placement: "bottom",
    align: "start",
    closeOnSelect: true
  }
}`,...(S=(I=d.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var C,k,T;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    justifyContent: "center",
    padding: "3rem"
  }}>
      <Menu>
        <Menu.Trigger asChild>
          <Button variant="secondary">SKU-1234 ▾</Button>
        </Menu.Trigger>
        <Menu.Content aria-label="Row actions">
          <Menu.Label>Manage</Menu.Label>
          <Menu.Item icon={<span aria-hidden>✏️</span>} onSelect={() => {}}>
            Edit details
          </Menu.Item>
          <Menu.Item icon={<span aria-hidden>📄</span>} onSelect={() => {}}>
            Export row
          </Menu.Item>
          <Menu.Separator />
          <Menu.Item icon={<span aria-hidden>🗑️</span>} destructive onSelect={() => {}}>
            Delete
          </Menu.Item>
        </Menu.Content>
      </Menu>
    </div>
}`,...(T=(k=m.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var w,N,A;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    justifyContent: "center",
    padding: "3rem"
  }}>
      <Menu defaultOpen>
        <Menu.Trigger asChild>
          <Button>Actions</Button>
        </Menu.Trigger>
        <Menu.Content aria-label="Item actions">
          <Menu.Item onSelect={() => {}}>Receive</Menu.Item>
          <Menu.Item onSelect={() => {}}>Sell</Menu.Item>
          <Menu.Item onSelect={() => {}}>Adjust</Menu.Item>
        </Menu.Content>
      </Menu>
    </div>
}`,...(A=(N=p.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};const Y=["Default","WithGroupsAndDestructive","StartsOpen"];export{d as Default,p as StartsOpen,m as WithGroupsAndDestructive,Y as __namedExportsOrder,X as default};
