"use client";
import{r as t,j as s}from"./iframe-uuPSpAyG.js";import{T as n}from"./Toast-BZt0W9As.js";import{B as l}from"./Button-D2kyB6nW.js";import{G as d}from"./GroupBox-Qndnaji8.js";import"./preload-helper-CJpEdZxZ.js";import"./clsx-BYFsuUQf.js";import"./useReducedMotion-BEDCrva0.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-RbONob3D.js";import"./useUIColor-piWDUgb3.js";import"./colorContrast-C0ZIkquj.js";import"./Slot-C5ffSEkS.js";import"./Label-Dl16MvfL.js";const H=t.createContext(void 0);function J(){const r=t.useContext(H);if(!r)throw new Error("useToast must be used within a ToastProvider");return r}let rs=0;function b({children:r,position:h="top-right"}){const[C,j]=t.useState([]),T=t.useCallback(o=>{j(a=>a.filter(e=>e.id!==o))},[]),i=t.useCallback((o,a,e,c,Z)=>{const ss=`toast-${++rs}`,es=e??(o==="error"?0:5e3);j(os=>[...os,{id:ss,message:a,variant:o,duration:es,position:c,action:Z}])},[]),S=t.useCallback((o,a,e,c)=>i("success",o,a,e,c),[i]),N=t.useCallback((o,a,e,c)=>i("error",o,a,e,c),[i]),z=t.useCallback((o,a,e,c)=>i("warning",o,a,e,c),[i]),P=t.useCallback((o,a,e,c)=>i("info",o,a,e,c),[i]),K=t.useMemo(()=>({toasts:C,success:S,error:N,warning:z,info:P,remove:T}),[C,S,N,z,P,T]),Q={"top-right":"cs:top-4 cs:right-4","top-left":"cs:top-4 cs:left-4","bottom-right":"cs:bottom-4 cs:right-4","bottom-left":"cs:bottom-4 cs:left-4","top-center":"cs:top-4 cs:left-1/2 cs:-translate-x-1/2","bottom-center":"cs:bottom-4 cs:left-1/2 cs:-translate-x-1/2"},X=C.reduce((o,a)=>{const e=a.position??h;return(o[e]??(o[e]=[])).push(a),o},{});return s.jsxs(H.Provider,{value:K,children:[r,Object.entries(X).map(([o,a])=>s.jsx("div",{className:`cs:fixed cs:z-50 cs:flex cs:flex-col cs:gap-2 ${Q[o]}`,children:a.map(e=>s.jsx(n,{variant:e.variant,duration:e.duration,action:e.action,onClose:()=>T(e.id),children:e.message},e.id))},o))]})}b.__docgenInfo={description:"",methods:[],displayName:"ToastProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:`| "top-right"
| "top-left"
| "bottom-right"
| "bottom-left"
| "top-center"
| "bottom-center"`,elements:[{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"bottom-center"'}]},description:"",defaultValue:{value:'"top-right"',computed:!1}}}};const Cs={component:n,title:"Feedback/Toast",tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["success","error","warning","info"]},scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},duration:{control:"number"}}},m={args:{variant:"info",children:"This is a notification.",onClose:()=>{}}},p={args:{variant:"info",children:"Item deleted.",action:{label:"Undo",onClick:()=>{}},onClose:()=>{}}},u={render:()=>s.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3 cs:max-w-sm",children:[s.jsx(n,{variant:"success",onClose:()=>{},children:"Saved successfully"}),s.jsx(n,{variant:"error",onClose:()=>{},children:"An error occurred"}),s.jsx(n,{variant:"warning",onClose:()=>{},children:"Attention required"}),s.jsx(n,{variant:"info",onClose:()=>{},children:"You have a notification"})]})},x={render:()=>s.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:gap-4 cs:sm:gap-6",children:[s.jsx(d,{label:"Extra Small (xs)",children:s.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3",children:[s.jsx(n,{variant:"success",scale:"xs",onClose:()=>{},children:"Extra Small size"}),s.jsx(n,{variant:"error",scale:"xs",onClose:()=>{},children:"Extra Small size"})]})}),s.jsx(d,{label:"Small (sm)",children:s.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3",children:[s.jsx(n,{variant:"success",scale:"sm",onClose:()=>{},children:"Small size"}),s.jsx(n,{variant:"error",scale:"sm",onClose:()=>{},children:"Small size"})]})}),s.jsx(d,{label:"Standard (md)",children:s.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3",children:[s.jsx(n,{variant:"success",scale:"md",onClose:()=>{},children:"Standard size"}),s.jsx(n,{variant:"error",scale:"md",onClose:()=>{},children:"Standard size"})]})}),s.jsx(d,{label:"Large (lg)",children:s.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3",children:[s.jsx(n,{variant:"success",scale:"lg",onClose:()=>{},children:"Large size"}),s.jsx(n,{variant:"error",scale:"lg",onClose:()=>{},children:"Large size"})]})})]})},v={render:()=>s.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3 cs:max-w-sm",children:[s.jsx(n,{variant:"success",children:"No close button"}),s.jsx(n,{variant:"info",children:"Auto-dismiss only"})]})};function as(){const r=J();return s.jsxs("div",{className:"cs:flex cs:gap-2 cs:flex-wrap",children:[s.jsx(l,{onClick:()=>r.success("Saved successfully!"),color:"green",children:"Success"}),s.jsx(l,{onClick:()=>r.error("An error occurred."),color:"red",children:"Error"}),s.jsx(l,{onClick:()=>r.warning("Attention required."),color:"amber",children:"Warning"}),s.jsx(l,{onClick:()=>r.info("You have a notification."),color:"blue",children:"Info"})]})}const g={render:()=>s.jsx(b,{position:"top-right",children:s.jsx(as,{})})};function ns({position:r}){const h=J();return s.jsx(l,{onClick:()=>h.success(`Position: ${r}`),color:"blue",scale:"sm",children:r})}const f={render:()=>s.jsx("div",{className:"cs:grid cs:grid-cols-2 cs:sm:grid-cols-3 cs:gap-2",children:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"].map(r=>s.jsx(b,{position:r,children:s.jsx(ns,{position:r})},r))})};var k,w,B;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "info",
    children: "This is a notification.",
    onClose: () => {}
  }
}`,...(B=(w=m.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var y,A,E;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: "info",
    children: "Item deleted.",
    action: {
      label: "Undo",
      onClick: () => {}
    },
    onClose: () => {}
  }
}`,...(E=(A=p.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var G,I,D;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(D=(I=u.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var L,q,W;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(W=(q=x.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var V,_,Y;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:flex-col cs:gap-3 cs:max-w-sm">
      <Toast variant="success">No close button</Toast>
      <Toast variant="info">Auto-dismiss only</Toast>
    </div>
}`,...(Y=(_=v.parameters)==null?void 0:_.docs)==null?void 0:Y.source}}};var $,O,R;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <ToastProvider position="top-right">
      <ToastDemo />
    </ToastProvider>
}`,...(R=(O=g.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var U,F,M;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-2 cs:sm:grid-cols-3 cs:gap-2">
      {(["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"] as const).map(pos => <ToastProvider key={pos} position={pos}>
          <PositionDemo position={pos} />
        </ToastProvider>)}
    </div>
}`,...(M=(F=f.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};const Ts=["Default","WithAction","Variants","Scales","WithoutCloseButton","ImperativeAPI","Positions"];export{m as Default,g as ImperativeAPI,f as Positions,x as Scales,u as Variants,p as WithAction,v as WithoutCloseButton,Ts as __namedExportsOrder,Cs as default};
