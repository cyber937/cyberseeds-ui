"use client";
import{r as n,j as s}from"./iframe-BvSZAKLD.js";import{T as t}from"./Toast-C0f7ZZZy.js";import{B as i}from"./Button-UEsOGCCP.js";import{G as l}from"./GroupBox-BidVyic-.js";import"./preload-helper-CJpEdZxZ.js";import"./clsx-BYFsuUQf.js";import"./useReducedMotion-Bfs-tZYw.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-RbONob3D.js";import"./useUIColor-DuigiTdC.js";import"./colorContrast-C0ZIkquj.js";import"./Slot-CxqAnQZs.js";import"./Label-SCSYSKC3.js";const O=n.createContext(void 0);function R(){const r=n.useContext(O);if(!r)throw new Error("useToast must be used within a ToastProvider");return r}let X=0;function T({children:r,position:g="top-right"}){const[f,C]=n.useState([]),h=n.useCallback(o=>{C(a=>a.filter(e=>e.id!==o))},[]),c=n.useCallback((o,a,e,J)=>{const K=`toast-${++X}`,Q=e??(o==="error"?0:5e3);C(U=>[...U,{id:K,message:a,variant:o,duration:Q,position:J}])},[]),j=n.useCallback((o,a,e)=>c("success",o,a,e),[c]),b=n.useCallback((o,a,e)=>c("error",o,a,e),[c]),S=n.useCallback((o,a,e)=>c("warning",o,a,e),[c]),N=n.useCallback((o,a,e)=>c("info",o,a,e),[c]),F=n.useMemo(()=>({toasts:f,success:j,error:b,warning:S,info:N,remove:h}),[f,j,b,S,N,h]),M={"top-right":"cs:top-4 cs:right-4","top-left":"cs:top-4 cs:left-4","bottom-right":"cs:bottom-4 cs:right-4","bottom-left":"cs:bottom-4 cs:left-4","top-center":"cs:top-4 cs:left-1/2 cs:-translate-x-1/2","bottom-center":"cs:bottom-4 cs:left-1/2 cs:-translate-x-1/2"},H=f.reduce((o,a)=>{const e=a.position??g;return(o[e]??(o[e]=[])).push(a),o},{});return s.jsxs(O.Provider,{value:F,children:[r,Object.entries(H).map(([o,a])=>s.jsx("div",{className:`cs:fixed cs:z-50 cs:flex cs:flex-col cs:gap-2 ${M[o]}`,children:a.map(e=>s.jsx(t,{variant:e.variant,duration:e.duration,onClose:()=>h(e.id),children:e.message},e.id))},o))]})}T.__docgenInfo={description:"",methods:[],displayName:"ToastProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:`| "top-right"
| "top-left"
| "bottom-right"
| "bottom-left"
| "top-center"
| "bottom-center"`,elements:[{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"bottom-center"'}]},description:"",defaultValue:{value:'"top-right"',computed:!1}}}};const xs={component:t,title:"Feedback/Toast",tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["success","error","warning","info"]},scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},duration:{control:"number"}}},d={args:{variant:"info",children:"This is a notification.",onClose:()=>{}}},m={render:()=>s.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3 cs:max-w-sm",children:[s.jsx(t,{variant:"success",onClose:()=>{},children:"Saved successfully"}),s.jsx(t,{variant:"error",onClose:()=>{},children:"An error occurred"}),s.jsx(t,{variant:"warning",onClose:()=>{},children:"Attention required"}),s.jsx(t,{variant:"info",onClose:()=>{},children:"You have a notification"})]})},p={render:()=>s.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:gap-4 cs:sm:gap-6",children:[s.jsx(l,{label:"Extra Small (xs)",children:s.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3",children:[s.jsx(t,{variant:"success",scale:"xs",onClose:()=>{},children:"Extra Small size"}),s.jsx(t,{variant:"error",scale:"xs",onClose:()=>{},children:"Extra Small size"})]})}),s.jsx(l,{label:"Small (sm)",children:s.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3",children:[s.jsx(t,{variant:"success",scale:"sm",onClose:()=>{},children:"Small size"}),s.jsx(t,{variant:"error",scale:"sm",onClose:()=>{},children:"Small size"})]})}),s.jsx(l,{label:"Standard (md)",children:s.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3",children:[s.jsx(t,{variant:"success",scale:"md",onClose:()=>{},children:"Standard size"}),s.jsx(t,{variant:"error",scale:"md",onClose:()=>{},children:"Standard size"})]})}),s.jsx(l,{label:"Large (lg)",children:s.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3",children:[s.jsx(t,{variant:"success",scale:"lg",onClose:()=>{},children:"Large size"}),s.jsx(t,{variant:"error",scale:"lg",onClose:()=>{},children:"Large size"})]})})]})},u={render:()=>s.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3 cs:max-w-sm",children:[s.jsx(t,{variant:"success",children:"No close button"}),s.jsx(t,{variant:"info",children:"Auto-dismiss only"})]})};function Z(){const r=R();return s.jsxs("div",{className:"cs:flex cs:gap-2 cs:flex-wrap",children:[s.jsx(i,{onClick:()=>r.success("Saved successfully!"),color:"green",children:"Success"}),s.jsx(i,{onClick:()=>r.error("An error occurred."),color:"red",children:"Error"}),s.jsx(i,{onClick:()=>r.warning("Attention required."),color:"amber",children:"Warning"}),s.jsx(i,{onClick:()=>r.info("You have a notification."),color:"blue",children:"Info"})]})}const x={render:()=>s.jsx(T,{position:"top-right",children:s.jsx(Z,{})})};function ss({position:r}){const g=R();return s.jsx(i,{onClick:()=>g.success(`Position: ${r}`),color:"blue",scale:"sm",children:r})}const v={render:()=>s.jsx("div",{className:"cs:grid cs:grid-cols-2 cs:sm:grid-cols-3 cs:gap-2",children:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"].map(r=>s.jsx(T,{position:r,children:s.jsx(ss,{position:r})},r))})};var z,P,w;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: "info",
    children: "This is a notification.",
    onClose: () => {}
  }
}`,...(w=(P=d.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var B,k,y;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:flex-col cs:gap-3 cs:max-w-sm">
      <Toast variant="success" onClose={() => {}}>
        Saved successfully
      </Toast>
      <Toast variant="error" onClose={() => {}}>
        An error occurred
      </Toast>
      <Toast variant="warning" onClose={() => {}}>
        Attention required
      </Toast>
      <Toast variant="info" onClose={() => {}}>
        You have a notification
      </Toast>
    </div>
}`,...(y=(k=m.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var E,A,G;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:gap-4 cs:sm:gap-6">
      <GroupBox label="Extra Small (xs)">
        <div className="cs:flex cs:flex-col cs:gap-3">
          <Toast variant="success" scale="xs" onClose={() => {}}>
            Extra Small size
          </Toast>
          <Toast variant="error" scale="xs" onClose={() => {}}>
            Extra Small size
          </Toast>
        </div>
      </GroupBox>
      <GroupBox label="Small (sm)">
        <div className="cs:flex cs:flex-col cs:gap-3">
          <Toast variant="success" scale="sm" onClose={() => {}}>
            Small size
          </Toast>
          <Toast variant="error" scale="sm" onClose={() => {}}>
            Small size
          </Toast>
        </div>
      </GroupBox>
      <GroupBox label="Standard (md)">
        <div className="cs:flex cs:flex-col cs:gap-3">
          <Toast variant="success" scale="md" onClose={() => {}}>
            Standard size
          </Toast>
          <Toast variant="error" scale="md" onClose={() => {}}>
            Standard size
          </Toast>
        </div>
      </GroupBox>
      <GroupBox label="Large (lg)">
        <div className="cs:flex cs:flex-col cs:gap-3">
          <Toast variant="success" scale="lg" onClose={() => {}}>
            Large size
          </Toast>
          <Toast variant="error" scale="lg" onClose={() => {}}>
            Large size
          </Toast>
        </div>
      </GroupBox>
    </div>
}`,...(G=(A=p.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var D,I,L;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:flex-col cs:gap-3 cs:max-w-sm">
      <Toast variant="success">No close button</Toast>
      <Toast variant="info">Auto-dismiss only</Toast>
    </div>
}`,...(L=(I=u.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var q,V,_;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <ToastProvider position="top-right">
      <ToastDemo />
    </ToastProvider>
}`,...(_=(V=x.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var W,Y,$;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-2 cs:sm:grid-cols-3 cs:gap-2">
      {(["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"] as const).map(pos => <ToastProvider key={pos} position={pos}>
          <PositionDemo position={pos} />
        </ToastProvider>)}
    </div>
}`,...($=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};const vs=["Default","Variants","Scales","WithoutCloseButton","ImperativeAPI","Positions"];export{d as Default,x as ImperativeAPI,v as Positions,p as Scales,m as Variants,u as WithoutCloseButton,vs as __namedExportsOrder,xs as default};
