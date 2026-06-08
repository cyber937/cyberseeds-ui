"use client";
import{r as c,j as e}from"./iframe-uuPSpAyG.js";import{c as p}from"./clsx-BYFsuUQf.js";import{P as m}from"./Popover-BZzfRMLG.js";import{B as M}from"./Button-D2kyB6nW.js";import"./preload-helper-CJpEdZxZ.js";import"./Slot-C5ffSEkS.js";import"./colorContrast-C0ZIkquj.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-RbONob3D.js";import"./useUIColor-piWDUgb3.js";const B=c.createContext(void 0);function L(s){const t=c.useContext(B);if(!t)throw new Error(`${s} must be used within a <Menu>`);return t}function n({children:s,placement:t="bottom",align:r="start",closeOnSelect:a=!0,defaultOpen:d=!1,open:i,onOpenChange:l}){const o=i!==void 0,[u,b]=c.useState(d),y=o?i:u,j=c.useCallback(S=>{o||b(S),l==null||l(S)},[o,l]),v=c.useCallback(()=>j(!1),[j]),W=c.useMemo(()=>({open:y,closeMenu:v,closeOnSelect:a}),[y,v,a]);return e.jsx(B.Provider,{value:W,children:e.jsx(m,{open:y,onOpenChange:j,placement:t,align:r,children:s})})}function K({children:s,asChild:t=!1,className:r}){return e.jsx(m.Trigger,{asChild:t,haspopup:"menu",className:r,children:s})}function q(s){const t=Array.from(s.currentTarget.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"])'));if(t.length===0)return;const r=t.indexOf(document.activeElement);let a=null;switch(s.key){case"ArrowDown":a=r<0?0:(r+1)%t.length;break;case"ArrowUp":a=r<0?t.length-1:(r-1+t.length)%t.length;break;case"Home":a=0;break;case"End":a=t.length-1;break;default:return}s.preventDefault(),t[a].focus()}function V({children:s,className:t,"aria-label":r}){return e.jsx(m.Content,{role:"menu",autoFocus:!0,"aria-label":r,onKeyDown:q,className:p("cs:py-1",t),children:s})}function U({children:s,onSelect:t,disabled:r=!1,destructive:a=!1,icon:d,className:i}){const{closeMenu:l,closeOnSelect:o}=L("Menu.Item"),u=c.useCallback(()=>{r||(t==null||t(),o&&l())},[r,t,o,l]);return e.jsxs("button",{type:"button",role:"menuitem",tabIndex:-1,disabled:r,"aria-disabled":r||void 0,onClick:u,className:p("cs:flex cs:w-full cs:items-center cs:gap-2 cs:rounded-sm cs:px-2 cs:py-1.5","cs:text-left cs:text-sm cs:font-sans cs:cursor-pointer","cs:border-0 cs:bg-transparent cs:outline-none","cs:focus-visible:bg-gray-100 cs:dark:focus-visible:bg-gray-700","cs:hover:bg-gray-100 cs:dark:hover:bg-gray-700",a?"cs:text-red-600 cs:dark:text-red-400":"cs:text-gray-900 cs:dark:text-gray-200",r&&"cs:opacity-50 cs:cursor-not-allowed cs:pointer-events-none",i),children:[d&&e.jsx("span",{className:"cs:shrink-0 cs:inline-flex",children:d}),e.jsx("span",{className:"cs:flex-1",children:s})]})}function _({label:s,children:t,icon:r,disabled:a=!1,className:d}){const[i,l]=c.useState(!1),o=c.useRef(null),u=c.useCallback(()=>{o.current&&(clearTimeout(o.current),o.current=null)},[]),b=c.useCallback(()=>{u(),o.current=setTimeout(()=>l(!1),180)},[u]);return e.jsx("div",{onMouseEnter:()=>{a||(u(),l(!0))},onMouseLeave:b,children:e.jsxs(m,{open:i,onOpenChange:l,placement:"right",align:"start",children:[e.jsx(m.Trigger,{asChild:!0,haspopup:"menu",children:e.jsxs("button",{type:"button",role:"menuitem",tabIndex:-1,disabled:a,"aria-disabled":a||void 0,className:p("cs:flex cs:w-full cs:items-center cs:gap-2 cs:rounded-sm cs:px-2 cs:py-1.5","cs:text-left cs:text-sm cs:font-sans cs:cursor-pointer","cs:border-0 cs:bg-transparent cs:outline-none","cs:text-gray-900 cs:dark:text-gray-200","cs:focus-visible:bg-gray-100 cs:dark:focus-visible:bg-gray-700","cs:hover:bg-gray-100 cs:dark:hover:bg-gray-700",i&&"cs:bg-gray-100 cs:dark:bg-gray-700",a&&"cs:opacity-50 cs:cursor-not-allowed cs:pointer-events-none",d),children:[r&&e.jsx("span",{className:"cs:shrink-0 cs:inline-flex",children:r}),e.jsx("span",{className:"cs:flex-1",children:s}),e.jsx("span",{"aria-hidden":!0,className:"cs:text-gray-400",children:"›"})]})}),e.jsx(m.Content,{role:"menu",onKeyDown:q,className:"cs:py-1",children:t})]})})}function G({children:s,className:t}){return e.jsx("div",{className:p("cs:px-2 cs:py-1 cs:text-xs cs:font-semibold cs:uppercase cs:tracking-wider","cs:text-gray-500 cs:dark:text-gray-400 cs:select-none",t),children:s})}function F({className:s}){return e.jsx("div",{role:"separator",className:p("cs:my-1 cs:h-px cs:bg-gray-200 cs:dark:bg-gray-700",s)})}n.Trigger=K;n.Content=V;n.Item=U;n.Sub=_;n.Label=G;n.Separator=F;n.__docgenInfo={description:"",methods:[{name:"Trigger",docblock:null,modifiers:["static"],params:[{name:"{ children, asChild = false, className }: MenuTriggerProps",optional:!1,type:{name:"MenuTriggerProps",alias:"MenuTriggerProps"}}],returns:null},{name:"Content",docblock:null,modifiers:["static"],params:[{name:'{ children, className, "aria-label": ariaLabel }: MenuContentProps',optional:!1,type:{name:"MenuContentProps",alias:"MenuContentProps"}}],returns:null},{name:"Item",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  onSelect,
  disabled = false,
  destructive = false,
  icon,
  className,
}: MenuItemProps`,optional:!1,type:{name:"MenuItemProps",alias:"MenuItemProps"}}],returns:null},{name:"Sub",docblock:null,modifiers:["static"],params:[{name:"{ label, children, icon, disabled = false, className }: MenuSubProps",optional:!1,type:{name:"MenuSubProps",alias:"MenuSubProps"}}],returns:null},{name:"Label",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: { children: ReactNode; className?: string }",optional:!1,type:{name:"signature",type:"object",raw:"{ children: ReactNode; className?: string }",signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}},{key:"className",value:{name:"string",required:!1}}]}}}],returns:null},{name:"Separator",docblock:null,modifiers:["static"],params:[{name:"{ className }: { className?: string }",optional:!1,type:{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}}],returns:null}],displayName:"Menu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},placement:{required:!1,tsType:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"bottom"',computed:!1}},align:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'}]},description:"",defaultValue:{value:'"start"',computed:!1}},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:"Close the menu after an item is selected. Defaults to `true`.",defaultValue:{value:"true",computed:!1}},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const te={component:n,title:"Overlay/Menu",tags:["autodocs"],argTypes:{placement:{control:{type:"radio"},options:["top","bottom","left","right"]},align:{control:{type:"radio"},options:["start","center","end"]},closeOnSelect:{control:{type:"boolean"}}},parameters:{docs:{description:{component:'Action menu built on `Popover`, following the WAI-ARIA menu pattern. Trigger gets `aria-haspopup="menu"`; the panel is `role="menu"` with `Menu.Item` (`menuitem`), `Menu.Label`, and `Menu.Separator`. Arrow keys roam items, Enter/Space selects, Escape closes. Selecting an item closes the menu unless `closeOnSelect={false}`.'}}}},g={render:s=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"3rem"},children:e.jsxs(n,{...s,children:[e.jsx(n.Trigger,{asChild:!0,children:e.jsx(M,{children:"Actions"})}),e.jsxs(n.Content,{"aria-label":"Item actions",children:[e.jsx(n.Item,{onSelect:()=>{},children:"Edit"}),e.jsx(n.Item,{onSelect:()=>{},children:"Duplicate"}),e.jsx(n.Item,{onSelect:()=>{},disabled:!0,children:"Archive"})]})]})}),args:{placement:"bottom",align:"start",closeOnSelect:!0}},h={render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"3rem"},children:e.jsxs(n,{children:[e.jsx(n.Trigger,{asChild:!0,children:e.jsx(M,{variant:"secondary",children:"SKU-1234 ▾"})}),e.jsxs(n.Content,{"aria-label":"Row actions",children:[e.jsx(n.Label,{children:"Manage"}),e.jsx(n.Item,{icon:e.jsx("span",{"aria-hidden":!0,children:"✏️"}),onSelect:()=>{},children:"Edit details"}),e.jsx(n.Item,{icon:e.jsx("span",{"aria-hidden":!0,children:"📄"}),onSelect:()=>{},children:"Export row"}),e.jsx(n.Separator,{}),e.jsx(n.Item,{icon:e.jsx("span",{"aria-hidden":!0,children:"🗑️"}),destructive:!0,onSelect:()=>{},children:"Delete"})]})]})})},f={render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"3rem"},children:e.jsxs(n,{children:[e.jsx(n.Trigger,{asChild:!0,children:e.jsx(M,{children:"Actions"})}),e.jsxs(n.Content,{"aria-label":"Item actions",children:[e.jsx(n.Item,{onSelect:()=>{},children:"Edit"}),e.jsxs(n.Sub,{label:"Move to",children:[e.jsx(n.Item,{onSelect:()=>{},children:"Warehouse A"}),e.jsx(n.Item,{onSelect:()=>{},children:"Warehouse B"}),e.jsxs(n.Sub,{label:"Regions",children:[e.jsx(n.Item,{onSelect:()=>{},children:"West"}),e.jsx(n.Item,{onSelect:()=>{},children:"East"})]})]}),e.jsx(n.Separator,{}),e.jsx(n.Item,{destructive:!0,onSelect:()=>{},children:"Delete"})]})]})})},x={render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"3rem"},children:e.jsxs(n,{defaultOpen:!0,children:[e.jsx(n.Trigger,{asChild:!0,children:e.jsx(M,{children:"Actions"})}),e.jsxs(n.Content,{"aria-label":"Item actions",children:[e.jsx(n.Item,{onSelect:()=>{},children:"Receive"}),e.jsx(n.Item,{onSelect:()=>{},children:"Sell"}),e.jsx(n.Item,{onSelect:()=>{},children:"Adjust"})]})]})})};var I,C,k;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(k=(C=g.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var T,N,w;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(w=(N=h.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var A,E,D;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    justifyContent: "center",
    padding: "3rem"
  }}>
      <Menu>
        <Menu.Trigger asChild>
          <Button>Actions</Button>
        </Menu.Trigger>
        <Menu.Content aria-label="Item actions">
          <Menu.Item onSelect={() => {}}>Edit</Menu.Item>
          <Menu.Sub label="Move to">
            <Menu.Item onSelect={() => {}}>Warehouse A</Menu.Item>
            <Menu.Item onSelect={() => {}}>Warehouse B</Menu.Item>
            <Menu.Sub label="Regions">
              <Menu.Item onSelect={() => {}}>West</Menu.Item>
              <Menu.Item onSelect={() => {}}>East</Menu.Item>
            </Menu.Sub>
          </Menu.Sub>
          <Menu.Separator />
          <Menu.Item destructive onSelect={() => {}}>
            Delete
          </Menu.Item>
        </Menu.Content>
      </Menu>
    </div>
}`,...(D=(E=f.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var P,O,R;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(R=(O=x.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const se=["Default","WithGroupsAndDestructive","WithSubmenu","StartsOpen"];export{g as Default,x as StartsOpen,h as WithGroupsAndDestructive,f as WithSubmenu,se as __namedExportsOrder,te as default};
