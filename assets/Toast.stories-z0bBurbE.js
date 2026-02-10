"use client";
import{r as t,j as s}from"./iframe-Cw0Ps6tz.js";import{T as r}from"./Toast-DLeXJyk4.js";import{B as c}from"./Button-DK8zoYQk.js";import{G as i}from"./GroupBox-DG57gNze.js";import"./preload-helper-CJpEdZxZ.js";import"./clsx-BYFsuUQf.js";import"./useReducedMotion-BTA63WGw.js";import"./colorUtils-D-K_anEj.js";import"./designTokens-DumaUFqK.js";import"./useUIColor-DDdChcPS.js";import"./colorContrast-C0ZIkquj.js";import"./Label-CNCgww0H.js";const F=t.createContext(void 0);function M(){const o=t.useContext(F);if(!o)throw new Error("useToast must be used within a ToastProvider");return o}let U=0;function T({children:o,position:v="top-right"}){const[l,C]=t.useState([]),f=t.useCallback(e=>{C(a=>a.filter(h=>h.id!==e))},[]),n=t.useCallback((e,a,h)=>{const J=`toast-${++U}`,K=h??(e==="error"?0:5e3);C(Q=>[...Q,{id:J,message:a,variant:e,duration:K}])},[]),j=t.useCallback((e,a)=>n("success",e,a),[n]),b=t.useCallback((e,a)=>n("error",e,a),[n]),S=t.useCallback((e,a)=>n("warning",e,a),[n]),N=t.useCallback((e,a)=>n("info",e,a),[n]),O=t.useMemo(()=>({toasts:l,success:j,error:b,warning:S,info:N,remove:f}),[l,j,b,S,N,f]),H={"top-right":"cs:top-4 cs:right-4","top-left":"cs:top-4 cs:left-4","bottom-right":"cs:bottom-4 cs:right-4","bottom-left":"cs:bottom-4 cs:left-4","top-center":"cs:top-4 cs:left-1/2 cs:-translate-x-1/2","bottom-center":"cs:bottom-4 cs:left-1/2 cs:-translate-x-1/2"};return s.jsxs(F.Provider,{value:O,children:[o,l.length>0&&s.jsx("div",{className:`cs:fixed cs:z-50 cs:flex cs:flex-col cs:gap-2 ${H[v]}`,children:l.map(e=>s.jsx(r,{variant:e.variant,duration:e.duration,onClose:()=>f(e.id),children:e.message},e.id))})]})}T.__docgenInfo={description:"",methods:[],displayName:"ToastProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:`| "top-right"
| "top-left"
| "bottom-right"
| "bottom-left"
| "top-center"
| "bottom-center"`,elements:[{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"bottom-center"'}]},description:"",defaultValue:{value:'"top-right"',computed:!1}}}};const ms={component:r,title:"Feedback/Toast",tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["success","error","warning","info"]},scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},duration:{control:"number"}}},d={args:{variant:"info",children:"これはお知らせです。",onClose:()=>{}}},m={render:()=>s.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3 cs:max-w-sm",children:[s.jsx(r,{variant:"success",onClose:()=>{},children:"保存しました"}),s.jsx(r,{variant:"error",onClose:()=>{},children:"エラーが発生しました"}),s.jsx(r,{variant:"warning",onClose:()=>{},children:"注意が必要です"}),s.jsx(r,{variant:"info",onClose:()=>{},children:"お知らせがあります"})]})},p={render:()=>s.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:gap-4 cs:sm:gap-6",children:[s.jsx(i,{label:"Extra Small (xs)",children:s.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3",children:[s.jsx(r,{variant:"success",scale:"xs",onClose:()=>{},children:"Extra Small サイズ"}),s.jsx(r,{variant:"error",scale:"xs",onClose:()=>{},children:"Extra Small サイズ"})]})}),s.jsx(i,{label:"Small (sm)",children:s.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3",children:[s.jsx(r,{variant:"success",scale:"sm",onClose:()=>{},children:"Small サイズ"}),s.jsx(r,{variant:"error",scale:"sm",onClose:()=>{},children:"Small サイズ"})]})}),s.jsx(i,{label:"Standard (md)",children:s.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3",children:[s.jsx(r,{variant:"success",scale:"md",onClose:()=>{},children:"Standard サイズ"}),s.jsx(r,{variant:"error",scale:"md",onClose:()=>{},children:"Standard サイズ"})]})}),s.jsx(i,{label:"Large (lg)",children:s.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3",children:[s.jsx(r,{variant:"success",scale:"lg",onClose:()=>{},children:"Large サイズ"}),s.jsx(r,{variant:"error",scale:"lg",onClose:()=>{},children:"Large サイズ"})]})})]})},x={render:()=>s.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3 cs:max-w-sm",children:[s.jsx(r,{variant:"success",children:"閉じるボタンなし"}),s.jsx(r,{variant:"info",children:"自動消去のみ"})]})};function X(){const o=M();return s.jsxs("div",{className:"cs:flex cs:gap-2 cs:flex-wrap",children:[s.jsx(c,{onClick:()=>o.success("保存しました！"),color:"green",children:"Success"}),s.jsx(c,{onClick:()=>o.error("エラーが発生しました。"),color:"red",children:"Error"}),s.jsx(c,{onClick:()=>o.warning("注意が必要です。"),color:"amber",children:"Warning"}),s.jsx(c,{onClick:()=>o.info("お知らせがあります。"),color:"blue",children:"Info"})]})}const u={render:()=>s.jsx(T,{position:"top-right",children:s.jsx(X,{})})};function Y({position:o}){const v=M();return s.jsx(c,{onClick:()=>v.success(`Position: ${o}`),color:"blue",scale:"sm",children:o})}const g={render:()=>s.jsx("div",{className:"cs:grid cs:grid-cols-2 cs:sm:grid-cols-3 cs:gap-2",children:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"].map(o=>s.jsx(T,{position:o,children:s.jsx(Y,{position:o})},o))})};var w,P,k;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "info",
    children: "これはお知らせです。",
    onClose: () => {}
  }
}`,...(k=(P=d.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var B,E,G;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:flex-col cs:gap-3 cs:max-w-sm">
      <Toast variant="success" onClose={() => {}}>
        保存しました
      </Toast>
      <Toast variant="error" onClose={() => {}}>
        エラーが発生しました
      </Toast>
      <Toast variant="warning" onClose={() => {}}>
        注意が必要です
      </Toast>
      <Toast variant="info" onClose={() => {}}>
        お知らせがあります
      </Toast>
    </div>
}`,...(G=(E=m.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var y,D,I;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:gap-4 cs:sm:gap-6">
      <GroupBox label="Extra Small (xs)">
        <div className="cs:flex cs:flex-col cs:gap-3">
          <Toast variant="success" scale="xs" onClose={() => {}}>
            Extra Small サイズ
          </Toast>
          <Toast variant="error" scale="xs" onClose={() => {}}>
            Extra Small サイズ
          </Toast>
        </div>
      </GroupBox>
      <GroupBox label="Small (sm)">
        <div className="cs:flex cs:flex-col cs:gap-3">
          <Toast variant="success" scale="sm" onClose={() => {}}>
            Small サイズ
          </Toast>
          <Toast variant="error" scale="sm" onClose={() => {}}>
            Small サイズ
          </Toast>
        </div>
      </GroupBox>
      <GroupBox label="Standard (md)">
        <div className="cs:flex cs:flex-col cs:gap-3">
          <Toast variant="success" scale="md" onClose={() => {}}>
            Standard サイズ
          </Toast>
          <Toast variant="error" scale="md" onClose={() => {}}>
            Standard サイズ
          </Toast>
        </div>
      </GroupBox>
      <GroupBox label="Large (lg)">
        <div className="cs:flex cs:flex-col cs:gap-3">
          <Toast variant="success" scale="lg" onClose={() => {}}>
            Large サイズ
          </Toast>
          <Toast variant="error" scale="lg" onClose={() => {}}>
            Large サイズ
          </Toast>
        </div>
      </GroupBox>
    </div>
}`,...(I=(D=p.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var L,V,_;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:flex-col cs:gap-3 cs:max-w-sm">
      <Toast variant="success">閉じるボタンなし</Toast>
      <Toast variant="info">自動消去のみ</Toast>
    </div>
}`,...(_=(V=x.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var W,$,q;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <ToastProvider position="top-right">
      <ToastDemo />
    </ToastProvider>
}`,...(q=($=u.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var A,R,z;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-2 cs:sm:grid-cols-3 cs:gap-2">
      {(["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"] as const).map(pos => <ToastProvider key={pos} position={pos}>
          <PositionDemo position={pos} />
        </ToastProvider>)}
    </div>
}`,...(z=(R=g.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};const ps=["Default","Variants","Scales","WithoutCloseButton","ImperativeAPI","Positions"];export{d as Default,u as ImperativeAPI,g as Positions,p as Scales,m as Variants,x as WithoutCloseButton,ps as __namedExportsOrder,ms as default};
