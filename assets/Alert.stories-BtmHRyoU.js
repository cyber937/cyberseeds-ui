"use client";
import{j as r}from"./iframe-DzGEYPXT.js";import{A as e}from"./Alert-D0M2ZGQA.js";import"./preload-helper-CJpEdZxZ.js";import"./clsx-BYFsuUQf.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-DumaUFqK.js";import"./useUIColor-Oew3m0TN.js";const M={component:e,title:"Feedback/Alert",tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["info","success","warning","error"]},scale:{control:{type:"radio"},options:["xs","sm","md","lg"]}}},a={args:{variant:"info",scale:"md",children:"これはお知らせです。"}},s={render:()=>r.jsxs("div",{className:"cs:space-y-3",children:[r.jsx(e,{variant:"info",children:"情報: システムメンテナンスのお知らせです。"}),r.jsx(e,{variant:"success",children:"成功: データが正常に保存されました。"}),r.jsx(e,{variant:"warning",children:"警告: ストレージ容量が残りわずかです。"}),r.jsx(e,{variant:"error",children:"エラー: ネットワーク接続に失敗しました。"})]})},n={render:()=>r.jsxs("div",{className:"cs:space-y-3",children:[r.jsx(e,{variant:"info",title:"お知らせ",children:"システムメンテナンスを予定しています。"}),r.jsx(e,{variant:"success",title:"完了",children:"データが正常に保存されました。"}),r.jsx(e,{variant:"warning",title:"注意",children:"ストレージ容量が残りわずかです。"}),r.jsx(e,{variant:"error",title:"エラー",children:"ネットワーク接続に失敗しました。再度お試しください。"})]})},t={render:()=>r.jsxs("div",{className:"cs:space-y-3",children:[r.jsx(e,{variant:"info",closable:!0,onClose:()=>alert("閉じました"),children:"閉じるボタン付きのアラートです。"}),r.jsx(e,{variant:"error",title:"エラー",closable:!0,onClose:()=>alert("閉じました"),children:"タイトル付きの閉じるボタンアラートです。"})]})},i={render:()=>r.jsxs("div",{className:"cs:space-y-3",children:[r.jsx(e,{variant:"info",scale:"xs",children:"Extra Small (xs)"}),r.jsx(e,{variant:"info",scale:"sm",children:"Small (sm)"}),r.jsx(e,{variant:"info",scale:"md",children:"Medium (md)"}),r.jsx(e,{variant:"info",scale:"lg",children:"Large (lg)"})]})},l={render:()=>r.jsxs("div",{className:"cs:space-y-3",children:[r.jsx(e,{variant:"info",icon:!1,children:"アイコンなしのアラートです。"}),r.jsx(e,{variant:"error",icon:!1,title:"エラー",children:"アイコンなし + タイトル付きです。"})]})};var c,o,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: "info",
    scale: "md",
    children: "これはお知らせです。"
  }
}`,...(d=(o=a.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var m,p,v;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-3">
      <Alert variant="info">情報: システムメンテナンスのお知らせです。</Alert>
      <Alert variant="success">成功: データが正常に保存されました。</Alert>
      <Alert variant="warning">警告: ストレージ容量が残りわずかです。</Alert>
      <Alert variant="error">エラー: ネットワーク接続に失敗しました。</Alert>
    </div>
}`,...(v=(p=s.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var A,u,x;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-3">
      <Alert variant="info" title="お知らせ">
        システムメンテナンスを予定しています。
      </Alert>
      <Alert variant="success" title="完了">
        データが正常に保存されました。
      </Alert>
      <Alert variant="warning" title="注意">
        ストレージ容量が残りわずかです。
      </Alert>
      <Alert variant="error" title="エラー">
        ネットワーク接続に失敗しました。再度お試しください。
      </Alert>
    </div>
}`,...(x=(u=n.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var f,h,j;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-3">
      <Alert variant="info" closable onClose={() => alert("閉じました")}>
        閉じるボタン付きのアラートです。
      </Alert>
      <Alert variant="error" title="エラー" closable onClose={() => alert("閉じました")}>
        タイトル付きの閉じるボタンアラートです。
      </Alert>
    </div>
}`,...(j=(h=t.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var g,y,S;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-3">
      <Alert variant="info" scale="xs">Extra Small (xs)</Alert>
      <Alert variant="info" scale="sm">Small (sm)</Alert>
      <Alert variant="info" scale="md">Medium (md)</Alert>
      <Alert variant="info" scale="lg">Large (lg)</Alert>
    </div>
}`,...(S=(y=i.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var N,b,C;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-3">
      <Alert variant="info" icon={false}>アイコンなしのアラートです。</Alert>
      <Alert variant="error" icon={false} title="エラー">
        アイコンなし + タイトル付きです。
      </Alert>
    </div>
}`,...(C=(b=l.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const V=["Default","Variants","WithTitle","Closable","Scales","WithoutIcon"];export{t as Closable,a as Default,i as Scales,s as Variants,n as WithTitle,l as WithoutIcon,V as __namedExportsOrder,M as default};
