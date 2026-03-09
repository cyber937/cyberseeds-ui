"use client";
import{r as t,j as s}from"./iframe-m5NElw2l.js";import{T as r}from"./Toast-CJdOYnUl.js";import{B as c}from"./Button-CYfYp8mi.js";import{G as i}from"./GroupBox-CWG8vLDB.js";import"./preload-helper-CYfZjOYs.js";import"./clsx-BYFsuUQf.js";import"./useReducedMotion-BQIWizaD.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-DumaUFqK.js";import"./useUIColor-BQPT7-YU.js";import"./colorContrast-C0ZIkquj.js";import"./Label-C81Mus0J.js";const z=t.createContext(void 0);function w(){const o=t.useContext(z);if(!o)throw new Error("useToast must be used within a ToastProvider");return o}let A=0;function T({children:o,position:g="top-right"}){const[l,C]=t.useState([]),f=t.useCallback(e=>{C(a=>a.filter(h=>h.id!==e))},[]),n=t.useCallback((e,a,h)=>{const B=`toast-${++A}`,y=h??(e==="error"?0:5e3);C(E=>[...E,{id:B,message:a,variant:e,duration:y}])},[]),j=t.useCallback((e,a)=>n("success",e,a),[n]),b=t.useCallback((e,a)=>n("error",e,a),[n]),S=t.useCallback((e,a)=>n("warning",e,a),[n]),N=t.useCallback((e,a)=>n("info",e,a),[n]),P=t.useMemo(()=>({toasts:l,success:j,error:b,warning:S,info:N,remove:f}),[l,j,b,S,N,f]),k={"top-right":"cs:top-4 cs:right-4","top-left":"cs:top-4 cs:left-4","bottom-right":"cs:bottom-4 cs:right-4","bottom-left":"cs:bottom-4 cs:left-4","top-center":"cs:top-4 cs:left-1/2 cs:-translate-x-1/2","bottom-center":"cs:bottom-4 cs:left-1/2 cs:-translate-x-1/2"};return s.jsxs(z.Provider,{value:P,children:[o,l.length>0&&s.jsx("div",{className:`cs:fixed cs:z-50 cs:flex cs:flex-col cs:gap-2 ${k[g]}`,children:l.map(e=>s.jsx(r,{variant:e.variant,duration:e.duration,onClose:()=>f(e.id),children:e.message},e.id))})]})}T.__docgenInfo={description:"",methods:[],displayName:"ToastProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:`| "top-right"
| "top-left"
| "bottom-right"
| "bottom-left"
| "top-center"
| "bottom-center"`,elements:[{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"bottom-center"'}]},description:"",defaultValue:{value:'"top-right"',computed:!1}}}};const H={component:r,title:"Feedback/Toast",tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["success","error","warning","info"]},scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},duration:{control:"number"}}},d={args:{variant:"info",children:"This is a notification.",onClose:()=>{}}},m={render:()=>s.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3 cs:max-w-sm",children:[s.jsx(r,{variant:"success",onClose:()=>{},children:"Saved successfully"}),s.jsx(r,{variant:"error",onClose:()=>{},children:"An error occurred"}),s.jsx(r,{variant:"warning",onClose:()=>{},children:"Attention required"}),s.jsx(r,{variant:"info",onClose:()=>{},children:"You have a notification"})]})},p={render:()=>s.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:gap-4 cs:sm:gap-6",children:[s.jsx(i,{label:"Extra Small (xs)",children:s.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3",children:[s.jsx(r,{variant:"success",scale:"xs",onClose:()=>{},children:"Extra Small size"}),s.jsx(r,{variant:"error",scale:"xs",onClose:()=>{},children:"Extra Small size"})]})}),s.jsx(i,{label:"Small (sm)",children:s.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3",children:[s.jsx(r,{variant:"success",scale:"sm",onClose:()=>{},children:"Small size"}),s.jsx(r,{variant:"error",scale:"sm",onClose:()=>{},children:"Small size"})]})}),s.jsx(i,{label:"Standard (md)",children:s.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3",children:[s.jsx(r,{variant:"success",scale:"md",onClose:()=>{},children:"Standard size"}),s.jsx(r,{variant:"error",scale:"md",onClose:()=>{},children:"Standard size"})]})}),s.jsx(i,{label:"Large (lg)",children:s.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3",children:[s.jsx(r,{variant:"success",scale:"lg",onClose:()=>{},children:"Large size"}),s.jsx(r,{variant:"error",scale:"lg",onClose:()=>{},children:"Large size"})]})})]})},u={render:()=>s.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3 cs:max-w-sm",children:[s.jsx(r,{variant:"success",children:"No close button"}),s.jsx(r,{variant:"info",children:"Auto-dismiss only"})]})};function G(){const o=w();return s.jsxs("div",{className:"cs:flex cs:gap-2 cs:flex-wrap",children:[s.jsx(c,{onClick:()=>o.success("Saved successfully!"),color:"green",children:"Success"}),s.jsx(c,{onClick:()=>o.error("An error occurred."),color:"red",children:"Error"}),s.jsx(c,{onClick:()=>o.warning("Attention required."),color:"amber",children:"Warning"}),s.jsx(c,{onClick:()=>o.info("You have a notification."),color:"blue",children:"Info"})]})}const x={render:()=>s.jsx(T,{position:"top-right",children:s.jsx(G,{})})};function D({position:o}){const g=w();return s.jsx(c,{onClick:()=>g.success(`Position: ${o}`),color:"blue",scale:"sm",children:o})}const v={render:()=>s.jsx("div",{className:"cs:grid cs:grid-cols-2 cs:sm:grid-cols-3 cs:gap-2",children:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"].map(o=>s.jsx(T,{position:o,children:s.jsx(D,{position:o})},o))})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    children: "This is a notification.",
    onClose: () => {}
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:flex-col cs:gap-3 cs:max-w-sm">
      <Toast variant="success">No close button</Toast>
      <Toast variant="info">Auto-dismiss only</Toast>
    </div>
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <ToastProvider position="top-right">
      <ToastDemo />
    </ToastProvider>
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-2 cs:sm:grid-cols-3 cs:gap-2">
      {(["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"] as const).map(pos => <ToastProvider key={pos} position={pos}>
          <PositionDemo position={pos} />
        </ToastProvider>)}
    </div>
}`,...v.parameters?.docs?.source}}};const J=["Default","Variants","Scales","WithoutCloseButton","ImperativeAPI","Positions"];export{d as Default,x as ImperativeAPI,v as Positions,p as Scales,m as Variants,u as WithoutCloseButton,J as __namedExportsOrder,H as default};
