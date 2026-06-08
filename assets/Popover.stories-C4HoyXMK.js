"use client";
import{j as e}from"./iframe-B1uMaBYR.js";import{P as n}from"./Popover-BhKohLHP.js";import{B as a}from"./Button-Cm26qKpL.js";import"./preload-helper-CJpEdZxZ.js";import"./clsx-BYFsuUQf.js";import"./Slot-DzzAxQzI.js";import"./colorContrast-C0ZIkquj.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-RbONob3D.js";import"./useUIColor-BB8pR0ej.js";const b={component:n,title:"Overlay/Popover",tags:["autodocs"],argTypes:{placement:{control:{type:"radio"},options:["top","bottom","left","right"]},align:{control:{type:"radio"},options:["start","center","end"]}},parameters:{docs:{description:{component:"Anchored floating panel primitive. Compose `Popover.Trigger` and `Popover.Content`. Auto-flips to a side with room, closes on outside click and Escape, and works controlled (`open` / `onOpenChange`) or uncontrolled (`defaultOpen`). It's the base for `Menu`."}}}},r={render:t=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"4rem"},children:e.jsxs(n,{...t,children:[e.jsx(n.Trigger,{asChild:!0,children:e.jsx(a,{children:"Open popover"})}),e.jsx(n.Content,{children:e.jsxs("div",{style:{maxWidth:220},className:"cs:space-y-1 cs:p-1",children:[e.jsx("p",{className:"cs:text-sm cs:font-medium",children:"Dimensions"}),e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:dark:text-gray-400",children:"Anchored to the trigger and dismissed on outside click or Escape."})]})})]})}),args:{placement:"bottom",align:"center"}},o={render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, max-content)",gap:"3rem",padding:"5rem",justifyContent:"center"},children:["top","bottom","left","right"].map(t=>e.jsxs(n,{placement:t,children:[e.jsx(n.Trigger,{asChild:!0,children:e.jsx(a,{variant:"secondary",children:t})}),e.jsx(n.Content,{children:e.jsxs("p",{className:"cs:text-sm cs:p-1",children:["Placed on ",t]})})]},t))})},s={render:t=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"4rem"},children:e.jsxs(n,{...t,defaultOpen:!0,children:[e.jsx(n.Trigger,{asChild:!0,children:e.jsx(a,{children:"Toggle"})}),e.jsx(n.Content,{children:e.jsx("p",{className:"cs:text-sm cs:p-1",children:"Open on mount via defaultOpen."})})]})}),args:{placement:"bottom",align:"start"}};var i,p,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    justifyContent: "center",
    padding: "4rem"
  }}>
      <Popover {...args}>
        <Popover.Trigger asChild>
          <Button>Open popover</Button>
        </Popover.Trigger>
        <Popover.Content>
          <div style={{
          maxWidth: 220
        }} className="cs:space-y-1 cs:p-1">
            <p className="cs:text-sm cs:font-medium">Dimensions</p>
            <p className="cs:text-xs cs:text-gray-500 cs:dark:text-gray-400">
              Anchored to the trigger and dismissed on outside click or Escape.
            </p>
          </div>
        </Popover.Content>
      </Popover>
    </div>,
  args: {
    placement: "bottom",
    align: "center"
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,l,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, max-content)",
    gap: "3rem",
    padding: "5rem",
    justifyContent: "center"
  }}>
      {(["top", "bottom", "left", "right"] as const).map(placement => <Popover key={placement} placement={placement}>
          <Popover.Trigger asChild>
            <Button variant="secondary">{placement}</Button>
          </Popover.Trigger>
          <Popover.Content>
            <p className="cs:text-sm cs:p-1">Placed on {placement}</p>
          </Popover.Content>
        </Popover>)}
    </div>
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var g,u,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    justifyContent: "center",
    padding: "4rem"
  }}>
      <Popover {...args} defaultOpen>
        <Popover.Trigger asChild>
          <Button>Toggle</Button>
        </Popover.Trigger>
        <Popover.Content>
          <p className="cs:text-sm cs:p-1">Open on mount via defaultOpen.</p>
        </Popover.Content>
      </Popover>
    </div>,
  args: {
    placement: "bottom",
    align: "start"
  }
}`,...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const B=["Default","Placements","StartsOpen"];export{r as Default,o as Placements,s as StartsOpen,B as __namedExportsOrder,b as default};
