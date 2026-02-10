"use client";
import{r as t,j as e}from"./iframe-Cwvb0Z0D.js";import{c as y}from"./clsx-BYFsuUQf.js";import{B as f}from"./Button-CxOaoCyA.js";import{G as N}from"./GroupBox-C2Gx9HxS.js";import"./preload-helper-CJpEdZxZ.js";import"./colorMap-EN3et11X.js";import"./colorUtils-B5Tad61Q.js";import"./useUIColor-BTIPPGSW.js";import"./Label-Dci0iaZ3.js";const Y={success:{bg:"cs:bg-green-50 cs:dark:bg-green-900/30",border:"cs:border-green-200 cs:dark:border-green-700",text:"cs:text-green-800 cs:dark:text-green-200",iconColor:"cs:text-green-500 cs:dark:text-green-400"},error:{bg:"cs:bg-red-50 cs:dark:bg-red-900/30",border:"cs:border-red-200 cs:dark:border-red-700",text:"cs:text-red-800 cs:dark:text-red-200",iconColor:"cs:text-red-500 cs:dark:text-red-400"},warning:{bg:"cs:bg-amber-50 cs:dark:bg-amber-900/30",border:"cs:border-amber-200 cs:dark:border-amber-700",text:"cs:text-amber-800 cs:dark:text-amber-200",iconColor:"cs:text-amber-500 cs:dark:text-amber-400"},info:{bg:"cs:bg-blue-50 cs:dark:bg-blue-900/30",border:"cs:border-blue-200 cs:dark:border-blue-700",text:"cs:text-blue-800 cs:dark:text-blue-200",iconColor:"cs:text-blue-500 cs:dark:text-blue-400"}},Z={sm:"cs:text-xs cs:px-3 cs:py-2 cs:min-w-56",md:"cs:text-sm cs:px-4 cs:py-3 cs:min-w-72"},I={sm:"cs:h-4 cs:w-4",md:"cs:h-5 cs:w-5"};function ee({className:s}){return e.jsx("svg",{className:s,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})})}function se({className:s}){return e.jsx("svg",{className:s,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z",clipRule:"evenodd"})})}function re({className:s}){return e.jsx("svg",{className:s,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{fillRule:"evenodd",d:"M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})})}function te({className:s}){return e.jsx("svg",{className:s,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})})}const ae={success:ee,error:se,warning:re,info:te};function n({children:s,variant:i="info",scale:l="md",duration:m=5e3,onClose:a,className:c}){const[g,u]=t.useState(!1),p=t.useRef(null),d=Y[i],C=ae[i];t.useEffect(()=>{const x=requestAnimationFrame(()=>u(!0));return()=>cancelAnimationFrame(x)},[]),t.useEffect(()=>{if(m!==0)return p.current=setTimeout(()=>{u(!1),setTimeout(()=>a==null?void 0:a(),200)},m),()=>{p.current&&clearTimeout(p.current)}},[m,a]);const k=t.useCallback(()=>{u(!1),setTimeout(()=>a==null?void 0:a(),200)},[a]),r=i==="error"?"alert":"status",o=i==="error"?"assertive":"polite";return e.jsxs("div",{role:r,"aria-live":o,"aria-atomic":"true",className:y("cs:flex cs:items-start cs:gap-3 cs:rounded-md cs:border cs:shadow-lg cs:font-sans cs:transition-all cs:duration-200 cs:ease-in-out",d.bg,d.border,d.text,Z[l],g?"cs:opacity-100 cs:translate-y-0":"cs:opacity-0 cs:-translate-y-2",c),children:[e.jsx(C,{className:y("cs:shrink-0",I[l],d.iconColor)}),e.jsx("div",{className:"cs:flex-1",children:s}),a&&e.jsx("button",{type:"button",onClick:k,"aria-label":"Close",className:y("cs:shrink-0 cs:rounded cs:p-0.5 cs:transition-opacity cs:hover:opacity-70 cs:focus:outline-2 cs:focus:outline-offset-1",d.text),children:e.jsx("svg",{className:I[l],xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"})})})]})}n.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"success" | "error" | "warning" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},scale:{required:!1,tsType:{name:"union",raw:'"sm" | "md"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5000",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const J=t.createContext(void 0);function K(){const s=t.useContext(J);if(!s)throw new Error("useToast must be used within a ToastProvider");return s}let oe=0;function S({children:s,position:i="top-right"}){const[l,m]=t.useState([]),a=t.useCallback(r=>{m(o=>o.filter(x=>x.id!==r))},[]),c=t.useCallback((r,o,x)=>{const Q=`toast-${++oe}`,U=x??(r==="error"?0:5e3);m(X=>[...X,{id:Q,message:o,variant:r,duration:U}])},[]),g=t.useCallback((r,o)=>c("success",r,o),[c]),u=t.useCallback((r,o)=>c("error",r,o),[c]),p=t.useCallback((r,o)=>c("warning",r,o),[c]),d=t.useCallback((r,o)=>c("info",r,o),[c]),C=t.useMemo(()=>({toasts:l,success:g,error:u,warning:p,info:d,remove:a}),[l,g,u,p,d,a]),k={"top-right":"cs:top-4 cs:right-4","top-left":"cs:top-4 cs:left-4","bottom-right":"cs:bottom-4 cs:right-4","bottom-left":"cs:bottom-4 cs:left-4","top-center":"cs:top-4 cs:left-1/2 cs:-translate-x-1/2","bottom-center":"cs:bottom-4 cs:left-1/2 cs:-translate-x-1/2"};return e.jsxs(J.Provider,{value:C,children:[s,l.length>0&&e.jsx("div",{className:`cs:fixed cs:z-50 cs:flex cs:flex-col cs:gap-2 ${k[i]}`,children:l.map(r=>e.jsx(n,{variant:r.variant,duration:r.duration,onClose:()=>a(r.id),children:r.message},r.id))})]})}S.__docgenInfo={description:"",methods:[],displayName:"ToastProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:`| "top-right"
| "top-left"
| "bottom-right"
| "bottom-left"
| "top-center"
| "bottom-center"`,elements:[{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"bottom-center"'}]},description:"",defaultValue:{value:'"top-right"',computed:!1}}}};const ve={component:n,title:"Feedback/Toast",tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["success","error","warning","info"]},scale:{control:{type:"radio"},options:["sm","md"]},duration:{control:"number"}}},v={args:{variant:"info",children:"これはお知らせです。",onClose:()=>{}}},h={render:()=>e.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3 cs:max-w-sm",children:[e.jsx(n,{variant:"success",onClose:()=>{},children:"保存しました"}),e.jsx(n,{variant:"error",onClose:()=>{},children:"エラーが発生しました"}),e.jsx(n,{variant:"warning",onClose:()=>{},children:"注意が必要です"}),e.jsx(n,{variant:"info",onClose:()=>{},children:"お知らせがあります"})]})},b={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-2 cs:gap-6",children:[e.jsx(N,{label:"Standard (md)",children:e.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3",children:[e.jsx(n,{variant:"success",scale:"md",onClose:()=>{},children:"Standard サイズ"}),e.jsx(n,{variant:"error",scale:"md",onClose:()=>{},children:"Standard サイズ"})]})}),e.jsx(N,{label:"Small (sm)",children:e.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3",children:[e.jsx(n,{variant:"success",scale:"sm",onClose:()=>{},children:"Small サイズ"}),e.jsx(n,{variant:"error",scale:"sm",onClose:()=>{},children:"Small サイズ"})]})})]})},w={render:()=>e.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-3 cs:max-w-sm",children:[e.jsx(n,{variant:"success",children:"閉じるボタンなし"}),e.jsx(n,{variant:"info",children:"自動消去のみ"})]})};function ne(){const s=K();return e.jsxs("div",{className:"cs:flex cs:gap-2 cs:flex-wrap",children:[e.jsx(f,{onClick:()=>s.success("保存しました！"),color:"green",children:"Success"}),e.jsx(f,{onClick:()=>s.error("エラーが発生しました。"),color:"red",children:"Error"}),e.jsx(f,{onClick:()=>s.warning("注意が必要です。"),color:"amber",children:"Warning"}),e.jsx(f,{onClick:()=>s.info("お知らせがあります。"),color:"blue",children:"Info"})]})}const T={render:()=>e.jsx(S,{position:"top-right",children:e.jsx(ne,{})})};function ce({position:s}){const i=K();return e.jsx(f,{onClick:()=>i.success(`Position: ${s}`),color:"blue",scale:"sm",children:s})}const j={render:()=>e.jsx("div",{className:"cs:grid cs:grid-cols-3 cs:gap-2 cs:max-w-md",children:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"].map(s=>e.jsx(S,{position:s,children:e.jsx(ce,{position:s})},s))})};var P,B,R;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: "info",
    children: "これはお知らせです。",
    onClose: () => {}
  }
}`,...(R=(B=v.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var z,M,L;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(L=(M=h.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var q,V,E;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-2 cs:gap-6">
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
    </div>
}`,...(E=(V=b.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var A,D,G;w.parameters={...w.parameters,docs:{...(A=w.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:flex-col cs:gap-3 cs:max-w-sm">
      <Toast variant="success">閉じるボタンなし</Toast>
      <Toast variant="info">自動消去のみ</Toast>
    </div>
}`,...(G=(D=w.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var _,W,F;T.parameters={...T.parameters,docs:{...(_=T.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <ToastProvider position="top-right">
      <ToastDemo />
    </ToastProvider>
}`,...(F=(W=T.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var H,$,O;j.parameters={...j.parameters,docs:{...(H=j.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-3 cs:gap-2 cs:max-w-md">
      {(["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"] as const).map(pos => <ToastProvider key={pos} position={pos}>
          <PositionDemo position={pos} />
        </ToastProvider>)}
    </div>
}`,...(O=($=j.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};const he=["Default","Variants","Scales","WithoutCloseButton","ImperativeAPI","Positions"];export{v as Default,T as ImperativeAPI,j as Positions,b as Scales,h as Variants,w as WithoutCloseButton,he as __namedExportsOrder,ve as default};
