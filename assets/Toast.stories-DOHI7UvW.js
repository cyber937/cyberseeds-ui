"use client";
import{r as t,j as s}from"./iframe-BH6SszEl.js";import{T as r}from"./Toast-DBAOPExr.js";import{B as c}from"./Button-9ovrN6Dk.js";import{G as i}from"./GroupBox-CGyAX-li.js";import"./preload-helper-CJpEdZxZ.js";import"./clsx-BYFsuUQf.js";import"./useReducedMotion-CvkFFLcm.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-DumaUFqK.js";import"./useUIColor-ByGmMwax.js";import"./colorContrast-C0ZIkquj.js";import"./Label-B4gz59JQ.js";const R=t.createContext(void 0);function F(){const o=t.useContext(R);if(!o)throw new Error("useToast must be used within a ToastProvider");return o}let Q=0;function T({children:o,position:g="top-right"}){const[l,C]=t.useState([]),f=t.useCallback(e=>{C(a=>a.filter(h=>h.id!==e))},[]),n=t.useCallback((e,a,h)=>{const H=`toast-${++Q}`,J=h??(e==="error"?0:5e3);C(K=>[...K,{id:H,message:a,variant:e,duration:J}])},[]),j=t.useCallback((e,a)=>n("success",e,a),[n]),b=t.useCallback((e,a)=>n("error",e,a),[n]),S=t.useCallback((e,a)=>n("warning",e,a),[n]),N=t.useCallback((e,a)=>n("info",e,a),[n]),M=t.useMemo(()=>({toasts:l,success:j,error:b,warning:S,info:N,remove:f}),[l,j,b,S,N,f]),O={"top-right":"cs:top-4 cs:right-4","top-left":"cs:top-4 cs:left-4","bottom-right":"cs:bottom-4 cs:right-4","bottom-left":"cs:bottom-4 cs:left-4","top-center":"cs:top-4 cs:left-1/2 cs:-translate-x-1/2","bottom-center":"cs:bottom-4 cs:left-1/2 cs:-translate-x-1/2"};return s.jsxs(R.Provider,{value:M,children:[o,l.length>0&&s.jsx("div",{className:`cs:fixed cs:z-50 cs:flex cs:flex-col cs:gap-2 ${O[g]}`,children:l.map(e=>s.jsx(r,{variant:e.variant,duration:e.duration,onClose:()=>f(e.id),children:e.message},e.id))})]})}T.__docgenInfo={description:"",methods:[],displayName:"ToastProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:`| "top-right"
| "top-left"
| "bottom-right"
| "bottom-left"
| "top-center"
| "bottom-center"`,elements:[{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"bottom-center"'}]},description:"",defaultValue:{value:'"top-right"',computed:!1}}}};const ms={component:r,title:"Feedback/Toast",tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["success","error","warning","info"]},scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},duration:{control:"number"}}},d={args:{variant:"info",children:"This is a notification.",onClose:()=>{}}},m={render:()=>s.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3 cs:max-w-sm",children:[s.jsx(r,{variant:"success",onClose:()=>{},children:"Saved successfully"}),s.jsx(r,{variant:"error",onClose:()=>{},children:"An error occurred"}),s.jsx(r,{variant:"warning",onClose:()=>{},children:"Attention required"}),s.jsx(r,{variant:"info",onClose:()=>{},children:"You have a notification"})]})},p={render:()=>s.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:gap-4 cs:sm:gap-6",children:[s.jsx(i,{label:"Extra Small (xs)",children:s.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3",children:[s.jsx(r,{variant:"success",scale:"xs",onClose:()=>{},children:"Extra Small size"}),s.jsx(r,{variant:"error",scale:"xs",onClose:()=>{},children:"Extra Small size"})]})}),s.jsx(i,{label:"Small (sm)",children:s.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3",children:[s.jsx(r,{variant:"success",scale:"sm",onClose:()=>{},children:"Small size"}),s.jsx(r,{variant:"error",scale:"sm",onClose:()=>{},children:"Small size"})]})}),s.jsx(i,{label:"Standard (md)",children:s.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3",children:[s.jsx(r,{variant:"success",scale:"md",onClose:()=>{},children:"Standard size"}),s.jsx(r,{variant:"error",scale:"md",onClose:()=>{},children:"Standard size"})]})}),s.jsx(i,{label:"Large (lg)",children:s.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3",children:[s.jsx(r,{variant:"success",scale:"lg",onClose:()=>{},children:"Large size"}),s.jsx(r,{variant:"error",scale:"lg",onClose:()=>{},children:"Large size"})]})})]})},u={render:()=>s.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3 cs:max-w-sm",children:[s.jsx(r,{variant:"success",children:"No close button"}),s.jsx(r,{variant:"info",children:"Auto-dismiss only"})]})};function U(){const o=F();return s.jsxs("div",{className:"cs:flex cs:gap-2 cs:flex-wrap",children:[s.jsx(c,{onClick:()=>o.success("Saved successfully!"),color:"green",children:"Success"}),s.jsx(c,{onClick:()=>o.error("An error occurred."),color:"red",children:"Error"}),s.jsx(c,{onClick:()=>o.warning("Attention required."),color:"amber",children:"Warning"}),s.jsx(c,{onClick:()=>o.info("You have a notification."),color:"blue",children:"Info"})]})}const x={render:()=>s.jsx(T,{position:"top-right",children:s.jsx(U,{})})};function X({position:o}){const g=F();return s.jsx(c,{onClick:()=>g.success(`Position: ${o}`),color:"blue",scale:"sm",children:o})}const v={render:()=>s.jsx("div",{className:"cs:grid cs:grid-cols-2 cs:sm:grid-cols-3 cs:gap-2",children:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"].map(o=>s.jsx(T,{position:o,children:s.jsx(X,{position:o})},o))})};var z,w,P;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: "info",
    children: "This is a notification.",
    onClose: () => {}
  }
}`,...(P=(w=d.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var k,B,y;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(y=(B=m.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var E,A,G;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...($=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};const ps=["Default","Variants","Scales","WithoutCloseButton","ImperativeAPI","Positions"];export{d as Default,x as ImperativeAPI,v as Positions,p as Scales,m as Variants,u as WithoutCloseButton,ps as __namedExportsOrder,ms as default};
