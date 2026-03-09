"use client";
import{j as t}from"./iframe-m5NElw2l.js";import{T as o}from"./Tooltip-DfmD_3Sl.js";import{B as e}from"./Button-CYfYp8mi.js";import{G as p}from"./GroupBox-CWG8vLDB.js";import"./preload-helper-CYfZjOYs.js";import"./clsx-BYFsuUQf.js";import"./colorContrast-C0ZIkquj.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-DumaUFqK.js";import"./useUIColor-BQPT7-YU.js";import"./Label-C81Mus0J.js";const j={component:o,title:"Overlay/Tooltip",tags:["autodocs"],argTypes:{position:{control:{type:"select"},options:["top","bottom","left","right"]},delay:{control:"number"}}},n={args:{content:"Tooltip content goes here",position:"top",children:t.jsx(e,{children:"Hover me"})}},s={render:()=>t.jsxs("div",{className:"cs:flex cs:flex-wrap cs:items-center cs:justify-center cs:gap-8 cs:py-16",children:[t.jsx(o,{content:"Displayed above",position:"top",children:t.jsx(e,{color:"blue",children:"Top"})}),t.jsx(o,{content:"Displayed below",position:"bottom",children:t.jsx(e,{color:"green",children:"Bottom"})}),t.jsx(o,{content:"Displayed on left",position:"left",children:t.jsx(e,{color:"amber",children:"Left"})}),t.jsx(o,{content:"Displayed on right",position:"right",children:t.jsx(e,{color:"purple",children:"Right"})})]})},i={render:()=>t.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-3 cs:gap-4 cs:md:gap-6",children:[t.jsx(p,{label:"No delay (0ms)",children:t.jsx(o,{content:"Shown instantly",delay:0,children:t.jsx(e,{color:"blue",children:"Hover"})})}),t.jsx(p,{label:"Default (300ms)",children:t.jsx(o,{content:"Shown after 300ms",delay:300,children:t.jsx(e,{color:"green",children:"Hover"})})}),t.jsx(p,{label:"Slow (1000ms)",children:t.jsx(o,{content:"Shown after 1 second",delay:1e3,children:t.jsx(e,{color:"amber",children:"Hover"})})})]})},r={render:()=>t.jsx("div",{className:"cs:flex cs:items-center cs:justify-center cs:py-12",children:t.jsx(o,{content:"Press Ctrl+S to save",children:t.jsx(e,{color:"blue",children:"Save"})})})},l={render:()=>t.jsxs("div",{style:{position:"relative",height:"80vh",width:"100%"},children:[t.jsx("p",{className:"cs:text-sm cs:text-gray-500 cs:text-center cs:py-2",children:"Position is specified, but it auto-flips when near viewport edges."}),t.jsx("div",{style:{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)"},children:t.jsx(o,{content:"top specified, flips to bottom",position:"top",children:t.jsx(e,{color:"blue",children:"Top edge (top to bottom)"})})}),t.jsx("div",{style:{position:"absolute",bottom:0,left:"50%",transform:"translateX(-50%)"},children:t.jsx(o,{content:"bottom specified, flips to top",position:"bottom",children:t.jsx(e,{color:"green",children:"Bottom edge (bottom to top)"})})}),t.jsx("div",{style:{position:"absolute",left:0,top:"50%",transform:"translateY(-50%)"},children:t.jsx(o,{content:"left specified, flips to right",position:"left",children:t.jsx(e,{color:"amber",children:"Left edge (left to right)"})})}),t.jsx("div",{style:{position:"absolute",right:0,top:"50%",transform:"translateY(-50%)"},children:t.jsx(o,{content:"right specified, flips to left",position:"right",children:t.jsx(e,{color:"purple",children:"Right edge (right to left)"})})}),t.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:t.jsx(o,{content:"Enough space, displayed on top",position:"top",children:t.jsx(e,{color:"gray",children:"Center (top stays top)"})})})]})},c={parameters:{viewport:{defaultViewport:"mobile"}},render:()=>t.jsxs("div",{className:"cs:space-y-8 cs:py-16 cs:text-center",children:[t.jsx("p",{className:"cs:text-xs cs:text-gray-500",children:"On touch devices, tap to show/hide the tooltip. Tap outside to dismiss."}),t.jsxs("div",{className:"cs:flex cs:flex-wrap cs:justify-center cs:gap-8",children:[t.jsx(o,{content:"Tap to show",position:"bottom",children:t.jsx(e,{color:"blue",children:"Tap"})}),t.jsx(o,{content:"Tap again to dismiss",position:"bottom",children:t.jsx(e,{color:"green",children:"Toggle"})})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    content: "Tooltip content goes here",
    position: "top",
    children: <Button>Hover me</Button>
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:flex-wrap cs:items-center cs:justify-center cs:gap-8 cs:py-16">
      <Tooltip content="Displayed above" position="top">
        <Button color="blue">Top</Button>
      </Tooltip>
      <Tooltip content="Displayed below" position="bottom">
        <Button color="green">Bottom</Button>
      </Tooltip>
      <Tooltip content="Displayed on left" position="left">
        <Button color="amber">Left</Button>
      </Tooltip>
      <Tooltip content="Displayed on right" position="right">
        <Button color="purple">Right</Button>
      </Tooltip>
    </div>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-3 cs:gap-4 cs:md:gap-6">
      <GroupBox label="No delay (0ms)">
        <Tooltip content="Shown instantly" delay={0}>
          <Button color="blue">Hover</Button>
        </Tooltip>
      </GroupBox>
      <GroupBox label="Default (300ms)">
        <Tooltip content="Shown after 300ms" delay={300}>
          <Button color="green">Hover</Button>
        </Tooltip>
      </GroupBox>
      <GroupBox label="Slow (1000ms)">
        <Tooltip content="Shown after 1 second" delay={1000}>
          <Button color="amber">Hover</Button>
        </Tooltip>
      </GroupBox>
    </div>
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:items-center cs:justify-center cs:py-12">
      <Tooltip content="Press Ctrl+S to save">
        <Button color="blue">Save</Button>
      </Tooltip>
    </div>
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    position: "relative",
    height: "80vh",
    width: "100%"
  }}>
      <p className="cs:text-sm cs:text-gray-500 cs:text-center cs:py-2">
        Position is specified, but it auto-flips when near viewport edges.
      </p>
      {/* Top edge — position="top" should flip to bottom */}
      <div style={{
      position: "absolute",
      top: 0,
      left: "50%",
      transform: "translateX(-50%)"
    }}>
        <Tooltip content="top specified, flips to bottom" position="top">
          <Button color="blue">Top edge (top to bottom)</Button>
        </Tooltip>
      </div>
      {/* Bottom edge — position="bottom" should flip to top */}
      <div style={{
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)"
    }}>
        <Tooltip content="bottom specified, flips to top" position="bottom">
          <Button color="green">Bottom edge (bottom to top)</Button>
        </Tooltip>
      </div>
      {/* Left edge — position="left" should flip to right */}
      <div style={{
      position: "absolute",
      left: 0,
      top: "50%",
      transform: "translateY(-50%)"
    }}>
        <Tooltip content="left specified, flips to right" position="left">
          <Button color="amber">Left edge (left to right)</Button>
        </Tooltip>
      </div>
      {/* Right edge — position="right" should flip to left */}
      <div style={{
      position: "absolute",
      right: 0,
      top: "50%",
      transform: "translateY(-50%)"
    }}>
        <Tooltip content="right specified, flips to left" position="right">
          <Button color="purple">Right edge (right to left)</Button>
        </Tooltip>
      </div>
      {/* Center — position="top" should stay as top */}
      <div style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    }}>
        <Tooltip content="Enough space, displayed on top" position="top">
          <Button color="gray">Center (top stays top)</Button>
        </Tooltip>
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile"
    }
  },
  render: () => <div className="cs:space-y-8 cs:py-16 cs:text-center">
      <p className="cs:text-xs cs:text-gray-500">
        On touch devices, tap to show/hide the tooltip. Tap outside to dismiss.
      </p>
      <div className="cs:flex cs:flex-wrap cs:justify-center cs:gap-8">
        <Tooltip content="Tap to show" position="bottom">
          <Button color="blue">Tap</Button>
        </Tooltip>
        <Tooltip content="Tap again to dismiss" position="bottom">
          <Button color="green">Toggle</Button>
        </Tooltip>
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};const T=["Default","Positions","WithDelay","WithRichContent","AutoFlip","TouchToggle"];export{l as AutoFlip,n as Default,s as Positions,c as TouchToggle,i as WithDelay,r as WithRichContent,T as __namedExportsOrder,j as default};
