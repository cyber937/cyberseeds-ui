"use client";
import{r as n,j as t}from"./iframe-DszvCNP2.js";import{c as R}from"./clsx-BYFsuUQf.js";import{B as e}from"./Button-CkG6xyYf.js";import{G as N}from"./GroupBox-D5Qy1-1c.js";import"./preload-helper-CJpEdZxZ.js";import"./colorMap-B4H6m5kb.js";import"./colorContrast-C0ZIkquj.js";import"./colorUtils-BF1Ih5IA.js";import"./designTokens-oNQ9a2iE.js";import"./useUIColor-_6l39SGF.js";import"./Label-DBOsNz8O.js";const F={top:"cs:bottom-full cs:left-1/2 cs:-translate-x-1/2 cs:mb-2",bottom:"cs:top-full cs:left-1/2 cs:-translate-x-1/2 cs:mt-2",left:"cs:right-full cs:top-1/2 cs:-translate-y-1/2 cs:mr-2",right:"cs:left-full cs:top-1/2 cs:-translate-y-1/2 cs:ml-2"},A={top:"cs:top-full cs:left-1/2 cs:-translate-x-1/2 cs:border-t-gray-900 cs:dark:border-t-gray-100 cs:border-x-transparent cs:border-b-transparent cs:border-4",bottom:"cs:bottom-full cs:left-1/2 cs:-translate-x-1/2 cs:border-b-gray-900 cs:dark:border-b-gray-100 cs:border-x-transparent cs:border-t-transparent cs:border-4",left:"cs:left-full cs:top-1/2 cs:-translate-y-1/2 cs:border-l-gray-900 cs:dark:border-l-gray-100 cs:border-y-transparent cs:border-r-transparent cs:border-4",right:"cs:right-full cs:top-1/2 cs:-translate-y-1/2 cs:border-r-gray-900 cs:dark:border-r-gray-100 cs:border-y-transparent cs:border-l-transparent cs:border-4"},M={top:"bottom",bottom:"top",left:"right",right:"left"};function O(T,u,i){const c=T.getBoundingClientRect(),r=i==null?void 0:i.getBoundingClientRect(),s=(r==null?void 0:r.height)??32,f=(r==null?void 0:r.width)??80,l=8,w=c.top,a=window.innerHeight-c.bottom,h=c.left,g=window.innerWidth-c.right,p={top:s+l,bottom:s+l,left:f+l,right:f+l},m={top:w>=p.top,bottom:a>=p.bottom,left:h>=p.left,right:g>=p.right};if(m[u])return u;const d=M[u];if(m[d])return d;for(const b of["bottom","top","right","left"])if(m[b])return b;return u}function o({children:T,content:u,position:i="top",delay:c=300,className:r}){const[s,f]=n.useState(!1),[l,w]=n.useState(i),a=n.useRef(null),h=n.useRef(null),g=n.useRef(null),p=n.useId(),m=n.useCallback(()=>{a.current=setTimeout(()=>f(!0),c)},[c]),d=n.useCallback(()=>{a.current&&clearTimeout(a.current),f(!1)},[]);return n.useLayoutEffect(()=>{s&&h.current&&w(O(h.current,i,g.current))},[s,i]),n.useEffect(()=>{const b=_=>{_.key==="Escape"&&d()};return s&&document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[s,d]),n.useEffect(()=>()=>{a.current&&clearTimeout(a.current)},[]),t.jsxs("div",{ref:h,className:"cs:relative cs:inline-block",onMouseEnter:m,onMouseLeave:d,onFocus:m,onBlur:d,children:[t.jsx("div",{"aria-describedby":s?p:void 0,children:T}),s&&t.jsxs("div",{ref:g,id:p,role:"tooltip",className:R("cs:absolute cs:z-40 cs:whitespace-nowrap cs:rounded-md cs:px-2 cs:py-1 cs:text-xs cs:font-sans cs:bg-gray-900 cs:text-white cs:dark:bg-gray-100 cs:dark:text-gray-900 cs:shadow-md cs:pointer-events-none",F[l],r),children:[u,t.jsx("div",{className:R("cs:absolute cs:h-0 cs:w-0",A[l]),"aria-hidden":"true"})]})]})}o.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},content:{required:!0,tsType:{name:"ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},delay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const st={component:o,title:"Overlay/Tooltip",tags:["autodocs"],argTypes:{position:{control:{type:"select"},options:["top","bottom","left","right"]},delay:{control:"number"}}},x={args:{content:"ツールチップの内容です",position:"top",children:t.jsx(e,{children:"ホバーしてください"})}},y={render:()=>t.jsxs("div",{className:"cs:flex cs:items-center cs:justify-center cs:gap-8 cs:py-16",children:[t.jsx(o,{content:"上に表示",position:"top",children:t.jsx(e,{color:"blue",children:"Top"})}),t.jsx(o,{content:"下に表示",position:"bottom",children:t.jsx(e,{color:"green",children:"Bottom"})}),t.jsx(o,{content:"左に表示",position:"left",children:t.jsx(e,{color:"amber",children:"Left"})}),t.jsx(o,{content:"右に表示",position:"right",children:t.jsx(e,{color:"purple",children:"Right"})})]})},v={render:()=>t.jsxs("div",{className:"cs:grid cs:grid-cols-3 cs:gap-6",children:[t.jsx(N,{label:"No delay (0ms)",children:t.jsx(o,{content:"即座に表示",delay:0,children:t.jsx(e,{color:"blue",children:"Hover"})})}),t.jsx(N,{label:"Default (300ms)",children:t.jsx(o,{content:"300ms後に表示",delay:300,children:t.jsx(e,{color:"green",children:"Hover"})})}),t.jsx(N,{label:"Slow (1000ms)",children:t.jsx(o,{content:"1秒後に表示",delay:1e3,children:t.jsx(e,{color:"amber",children:"Hover"})})})]})},j={render:()=>t.jsx("div",{className:"cs:flex cs:items-center cs:justify-center cs:py-12",children:t.jsx(o,{content:"Ctrl+S で保存できます",children:t.jsx(e,{color:"blue",children:"保存"})})})},B={render:()=>t.jsxs("div",{style:{position:"relative",height:"80vh",width:"100%"},children:[t.jsx("p",{className:"cs:text-sm cs:text-gray-500 cs:text-center cs:py-2",children:"position を指定していますが、ビューポート端に近い場合は自動的にフリップします。"}),t.jsx("div",{style:{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)"},children:t.jsx(o,{content:"top指定 → 下にフリップ",position:"top",children:t.jsx(e,{color:"blue",children:"上端 (top→bottom)"})})}),t.jsx("div",{style:{position:"absolute",bottom:0,left:"50%",transform:"translateX(-50%)"},children:t.jsx(o,{content:"bottom指定 → 上にフリップ",position:"bottom",children:t.jsx(e,{color:"green",children:"下端 (bottom→top)"})})}),t.jsx("div",{style:{position:"absolute",left:0,top:"50%",transform:"translateY(-50%)"},children:t.jsx(o,{content:"left指定 → 右にフリップ",position:"left",children:t.jsx(e,{color:"amber",children:"左端 (left→right)"})})}),t.jsx("div",{style:{position:"absolute",right:0,top:"50%",transform:"translateY(-50%)"},children:t.jsx(o,{content:"right指定 → 左にフリップ",position:"right",children:t.jsx(e,{color:"purple",children:"右端 (right→left)"})})}),t.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:t.jsx(o,{content:"十分なスペースがあるので上に表示",position:"top",children:t.jsx(e,{color:"gray",children:"中央 (top→top)"})})})]})};var k,S,C;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    content: "ツールチップの内容です",
    position: "top",
    children: <Button>ホバーしてください</Button>
  }
}`,...(C=(S=x.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var G,H,L;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(L=(H=y.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var E,D,W;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-3 cs:gap-6">
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
}`,...(W=(D=v.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var q,P,I;j.parameters={...j.parameters,docs:{...(q=j.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:items-center cs:justify-center cs:py-12">
      <Tooltip content="Ctrl+S で保存できます">
        <Button color="blue">保存</Button>
      </Tooltip>
    </div>
}`,...(I=(P=j.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var V,X,Y;B.parameters={...B.parameters,docs:{...(V=B.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(Y=(X=B.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const rt=["Default","Positions","WithDelay","WithRichContent","AutoFlip"];export{B as AutoFlip,x as Default,y as Positions,v as WithDelay,j as WithRichContent,rt as __namedExportsOrder,st as default};
