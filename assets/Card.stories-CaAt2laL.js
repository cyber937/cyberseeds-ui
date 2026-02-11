"use client";
import{j as r}from"./iframe-DzGEYPXT.js";import{B as l}from"./Button-yqgBU2xO.js";import{I as m}from"./Input-BZblgO67.js";import{C as e}from"./Card-DySdKqVv.js";import"./preload-helper-CJpEdZxZ.js";import"./colorContrast-C0ZIkquj.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-DumaUFqK.js";import"./useUIColor-Oew3m0TN.js";import"./FormFieldContext-CL_OIXiv.js";import"./Label-Bv9lDuhv.js";import"./clsx-BYFsuUQf.js";const z={component:e,title:"Layout/Card",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]}}},s={render:()=>r.jsx(e,{children:r.jsx(e.Body,{children:"シンプルなカードコンテンツです。"})})},d={render:()=>r.jsxs(e,{children:[r.jsx(e.Header,{children:"カードタイトル"}),r.jsx(e.Body,{children:"カードの本文コンテンツです。ヘッダーとフッター付きのレイアウトを使用しています。"}),r.jsxs(e.Footer,{children:[r.jsx(l,{variant:"secondary",scale:"sm",children:"キャンセル"}),r.jsx(l,{scale:"sm",children:"保存"})]})]})},o={render:()=>r.jsx("div",{className:"cs:space-y-4",children:["xs","sm","md","lg"].map(a=>r.jsxs(e,{scale:a,children:[r.jsxs(e.Header,{children:["Scale: ",a]}),r.jsxs(e.Body,{children:["パディングが ",a," サイズです。"]})]},a))})},n={render:()=>r.jsx(e,{bordered:!1,children:r.jsx(e.Body,{children:"ボーダーなしのカードです。"})})},c={render:()=>r.jsx(e,{shadow:!1,children:r.jsx(e.Body,{children:"シャドウなしのカードです。"})})},t={render:()=>r.jsxs(e,{children:[r.jsx(e.Header,{children:"ユーザー登録"}),r.jsx(e.Body,{children:r.jsxs("div",{className:"cs:space-y-3",children:[r.jsx(m,{label:"名前",placeholder:"山田太郎"}),r.jsx(m,{label:"メールアドレス",placeholder:"example@mail.com"})]})}),r.jsxs(e.Footer,{children:[r.jsx(l,{variant:"secondary",scale:"sm",children:"キャンセル"}),r.jsx(l,{scale:"sm",color:"green",children:"登録"})]})]})};var i,p,u;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Card>
      <Card.Body>
        シンプルなカードコンテンツです。
      </Card.Body>
    </Card>
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var C,h,x;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Card>
      <Card.Header>カードタイトル</Card.Header>
      <Card.Body>
        カードの本文コンテンツです。ヘッダーとフッター付きのレイアウトを使用しています。
      </Card.Body>
      <Card.Footer>
        <Button variant="secondary" scale="sm">キャンセル</Button>
        <Button scale="sm">保存</Button>
      </Card.Footer>
    </Card>
}`,...(x=(h=d.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var y,B,j;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-4">
      {(["xs", "sm", "md", "lg"] as const).map(scale => <Card key={scale} scale={scale}>
          <Card.Header>Scale: {scale}</Card.Header>
          <Card.Body>パディングが {scale} サイズです。</Card.Body>
        </Card>)}
    </div>
}`,...(j=(B=o.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var g,S,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Card bordered={false}>
      <Card.Body>ボーダーなしのカードです。</Card.Body>
    </Card>
}`,...(f=(S=n.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var H,v,F;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Card shadow={false}>
      <Card.Body>シャドウなしのカードです。</Card.Body>
    </Card>
}`,...(F=(v=c.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};var b,W,w;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Card>
      <Card.Header>ユーザー登録</Card.Header>
      <Card.Body>
        <div className="cs:space-y-3">
          <Input label="名前" placeholder="山田太郎" />
          <Input label="メールアドレス" placeholder="example@mail.com" />
        </div>
      </Card.Body>
      <Card.Footer>
        <Button variant="secondary" scale="sm">キャンセル</Button>
        <Button scale="sm" color="green">登録</Button>
      </Card.Footer>
    </Card>
}`,...(w=(W=t.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};const G=["Default","WithHeaderAndFooter","Scales","WithoutBorder","WithoutShadow","Composed"];export{t as Composed,s as Default,o as Scales,d as WithHeaderAndFooter,n as WithoutBorder,c as WithoutShadow,G as __namedExportsOrder,z as default};
