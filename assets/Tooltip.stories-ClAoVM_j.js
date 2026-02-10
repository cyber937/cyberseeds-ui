"use client";
import{j as t}from"./iframe-DzWUJk_7.js";import{T as o}from"./Tooltip-BWJdNCjs.js";import{B as n}from"./Button-C74mDBxr.js";import{G as p}from"./GroupBox-B-B5GH6N.js";import"./preload-helper-CJpEdZxZ.js";import"./clsx-BYFsuUQf.js";import"./colorMap-B4H6m5kb.js";import"./colorContrast-C0ZIkquj.js";import"./colorUtils-BF1Ih5IA.js";import"./designTokens-DumaUFqK.js";import"./useUIColor-1Gq7OnLw.js";import"./Label-D2mr-aBn.js";const P={component:o,title:"Overlay/Tooltip",tags:["autodocs"],argTypes:{position:{control:{type:"select"},options:["top","bottom","left","right"]},delay:{control:"number"}}},e={args:{content:"ツールチップの内容です",position:"top",children:t.jsx(n,{children:"ホバーしてください"})}},s={render:()=>t.jsxs("div",{className:"cs:flex cs:items-center cs:justify-center cs:gap-8 cs:py-16",children:[t.jsx(o,{content:"上に表示",position:"top",children:t.jsx(n,{color:"blue",children:"Top"})}),t.jsx(o,{content:"下に表示",position:"bottom",children:t.jsx(n,{color:"green",children:"Bottom"})}),t.jsx(o,{content:"左に表示",position:"left",children:t.jsx(n,{color:"amber",children:"Left"})}),t.jsx(o,{content:"右に表示",position:"right",children:t.jsx(n,{color:"purple",children:"Right"})})]})},r={render:()=>t.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-3 cs:gap-4 cs:md:gap-6",children:[t.jsx(p,{label:"No delay (0ms)",children:t.jsx(o,{content:"即座に表示",delay:0,children:t.jsx(n,{color:"blue",children:"Hover"})})}),t.jsx(p,{label:"Default (300ms)",children:t.jsx(o,{content:"300ms後に表示",delay:300,children:t.jsx(n,{color:"green",children:"Hover"})})}),t.jsx(p,{label:"Slow (1000ms)",children:t.jsx(o,{content:"1秒後に表示",delay:1e3,children:t.jsx(n,{color:"amber",children:"Hover"})})})]})},i={render:()=>t.jsx("div",{className:"cs:flex cs:items-center cs:justify-center cs:py-12",children:t.jsx(o,{content:"Ctrl+S で保存できます",children:t.jsx(n,{color:"blue",children:"保存"})})})},l={render:()=>t.jsxs("div",{style:{position:"relative",height:"80vh",width:"100%"},children:[t.jsx("p",{className:"cs:text-sm cs:text-gray-500 cs:text-center cs:py-2",children:"position を指定していますが、ビューポート端に近い場合は自動的にフリップします。"}),t.jsx("div",{style:{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)"},children:t.jsx(o,{content:"top指定 → 下にフリップ",position:"top",children:t.jsx(n,{color:"blue",children:"上端 (top→bottom)"})})}),t.jsx("div",{style:{position:"absolute",bottom:0,left:"50%",transform:"translateX(-50%)"},children:t.jsx(o,{content:"bottom指定 → 上にフリップ",position:"bottom",children:t.jsx(n,{color:"green",children:"下端 (bottom→top)"})})}),t.jsx("div",{style:{position:"absolute",left:0,top:"50%",transform:"translateY(-50%)"},children:t.jsx(o,{content:"left指定 → 右にフリップ",position:"left",children:t.jsx(n,{color:"amber",children:"左端 (left→right)"})})}),t.jsx("div",{style:{position:"absolute",right:0,top:"50%",transform:"translateY(-50%)"},children:t.jsx(o,{content:"right指定 → 左にフリップ",position:"right",children:t.jsx(n,{color:"purple",children:"右端 (right→left)"})})}),t.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:t.jsx(o,{content:"十分なスペースがあるので上に表示",position:"top",children:t.jsx(n,{color:"gray",children:"中央 (top→top)"})})})]})},c={parameters:{viewport:{defaultViewport:"mobile"}},render:()=>t.jsxs("div",{className:"cs:space-y-8 cs:py-16 cs:text-center",children:[t.jsx("p",{className:"cs:text-xs cs:text-gray-500",children:"タッチデバイスではタップでツールチップを表示/非表示できます。外側をタップすると閉じます。"}),t.jsxs("div",{className:"cs:flex cs:justify-center cs:gap-8",children:[t.jsx(o,{content:"タップで表示",position:"bottom",children:t.jsx(n,{color:"blue",children:"タップ"})}),t.jsx(o,{content:"もう一度タップで閉じます",position:"bottom",children:t.jsx(n,{color:"green",children:"トグル"})})]})]})};var a,d,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    content: "ツールチップの内容です",
    position: "top",
    children: <Button>ホバーしてください</Button>
  }
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,h,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:items-center cs:justify-center cs:gap-8 cs:py-16">
      <Tooltip content="上に表示" position="top">
        <Button color="blue">Top</Button>
      </Tooltip>
      <Tooltip content="下に表示" position="bottom">
        <Button color="green">Bottom</Button>
      </Tooltip>
      <Tooltip content="左に表示" position="left">
        <Button color="amber">Left</Button>
      </Tooltip>
      <Tooltip content="右に表示" position="right">
        <Button color="purple">Right</Button>
      </Tooltip>
    </div>
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var g,f,j;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-3 cs:gap-4 cs:md:gap-6">
      <GroupBox label="No delay (0ms)">
        <Tooltip content="即座に表示" delay={0}>
          <Button color="blue">Hover</Button>
        </Tooltip>
      </GroupBox>
      <GroupBox label="Default (300ms)">
        <Tooltip content="300ms後に表示" delay={300}>
          <Button color="green">Hover</Button>
        </Tooltip>
      </GroupBox>
      <GroupBox label="Slow (1000ms)">
        <Tooltip content="1秒後に表示" delay={1000}>
          <Button color="amber">Hover</Button>
        </Tooltip>
      </GroupBox>
    </div>
}`,...(j=(f=r.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var b,y,v;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:items-center cs:justify-center cs:py-12">
      <Tooltip content="Ctrl+S で保存できます">
        <Button color="blue">保存</Button>
      </Tooltip>
    </div>
}`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var B,T,N;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    position: "relative",
    height: "80vh",
    width: "100%"
  }}>
      <p className="cs:text-sm cs:text-gray-500 cs:text-center cs:py-2">
        position を指定していますが、ビューポート端に近い場合は自動的にフリップします。
      </p>
      {/* Top edge — position="top" should flip to bottom */}
      <div style={{
      position: "absolute",
      top: 0,
      left: "50%",
      transform: "translateX(-50%)"
    }}>
        <Tooltip content="top指定 → 下にフリップ" position="top">
          <Button color="blue">上端 (top→bottom)</Button>
        </Tooltip>
      </div>
      {/* Bottom edge — position="bottom" should flip to top */}
      <div style={{
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)"
    }}>
        <Tooltip content="bottom指定 → 上にフリップ" position="bottom">
          <Button color="green">下端 (bottom→top)</Button>
        </Tooltip>
      </div>
      {/* Left edge — position="left" should flip to right */}
      <div style={{
      position: "absolute",
      left: 0,
      top: "50%",
      transform: "translateY(-50%)"
    }}>
        <Tooltip content="left指定 → 右にフリップ" position="left">
          <Button color="amber">左端 (left→right)</Button>
        </Tooltip>
      </div>
      {/* Right edge — position="right" should flip to left */}
      <div style={{
      position: "absolute",
      right: 0,
      top: "50%",
      transform: "translateY(-50%)"
    }}>
        <Tooltip content="right指定 → 左にフリップ" position="right">
          <Button color="purple">右端 (right→left)</Button>
        </Tooltip>
      </div>
      {/* Center — position="top" should stay as top */}
      <div style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    }}>
        <Tooltip content="十分なスペースがあるので上に表示" position="top">
          <Button color="gray">中央 (top→top)</Button>
        </Tooltip>
      </div>
    </div>
}`,...(N=(T=l.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var S,w,G;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile"
    }
  },
  render: () => <div className="cs:space-y-8 cs:py-16 cs:text-center">
      <p className="cs:text-xs cs:text-gray-500">
        タッチデバイスではタップでツールチップを表示/非表示できます。外側をタップすると閉じます。
      </p>
      <div className="cs:flex cs:justify-center cs:gap-8">
        <Tooltip content="タップで表示" position="bottom">
          <Button color="blue">タップ</Button>
        </Tooltip>
        <Tooltip content="もう一度タップで閉じます" position="bottom">
          <Button color="green">トグル</Button>
        </Tooltip>
      </div>
    </div>
}`,...(G=(w=c.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};const V=["Default","Positions","WithDelay","WithRichContent","AutoFlip","TouchToggle"];export{l as AutoFlip,e as Default,s as Positions,c as TouchToggle,r as WithDelay,i as WithRichContent,V as __namedExportsOrder,P as default};
