"use client";
import{j as e,r as q}from"./iframe-DGUMRchz.js";import{B as m}from"./Button-BWuoWopC.js";import{I as x}from"./Input-CoGzvw17.js";import{c as p}from"./clsx-BYFsuUQf.js";import"./preload-helper-CJpEdZxZ.js";import"./colorContrast-C0ZIkquj.js";import"./colorUtils-D-K_anEj.js";import"./designTokens-DumaUFqK.js";import"./useUIColor-BVWDqBP4.js";import"./FormFieldContext-DV9bQFLy.js";import"./Label-wkz5Hl00.js";const I=q.createContext(null);function u(){return q.useContext(I)??{scale:"md"}}const A={xs:"cs:p-2",sm:"cs:p-3",md:"cs:p-4",lg:"cs:p-6"},_={xs:"cs:px-2 cs:py-1.5",sm:"cs:px-3 cs:py-2",md:"cs:px-4 cs:py-3",lg:"cs:px-6 cs:py-4"};function r({children:a,scale:s="md",shadow:o=!0,bordered:E=!0,className:V}){return e.jsx(I.Provider,{value:{scale:s},children:e.jsx("div",{className:p("cs:bg-white cs:dark:bg-gray-800 cs:rounded-xl cs:font-sans cs:overflow-hidden",E&&"cs:border cs:border-gray-200 cs:dark:border-gray-700",o&&"cs:shadow-sm",V),children:a})})}function D({children:a,className:s}){const{scale:o}=u();return e.jsx("div",{className:p("cs:border-b cs:border-gray-200 cs:dark:border-gray-700 cs:font-semibold cs:text-gray-900 cs:dark:text-gray-200",_[o],s),children:a})}function M({children:a,className:s}){const{scale:o}=u();return e.jsx("div",{className:p("cs:text-gray-700 cs:dark:text-gray-400",A[o],s),children:a})}function R({children:a,className:s}){const{scale:o}=u();return e.jsx("div",{className:p("cs:border-t cs:border-gray-200 cs:dark:border-gray-700 cs:flex cs:justify-end cs:gap-2",_[o],s),children:a})}r.Header=D;r.Body=M;r.Footer=R;r.__docgenInfo={description:"",methods:[{name:"Header",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: CardSectionProps",optional:!1,type:{name:"CardSectionProps",alias:"CardSectionProps"}}],returns:null},{name:"Body",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: CardSectionProps",optional:!1,type:{name:"CardSectionProps",alias:"CardSectionProps"}}],returns:null},{name:"Footer",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: CardSectionProps",optional:!1,type:{name:"CardSectionProps",alias:"CardSectionProps"}}],returns:null}],displayName:"Card",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},scale:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},shadow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const $={component:r,title:"Layout/Card",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]}}},d={render:()=>e.jsx(r,{children:e.jsx(r.Body,{children:"シンプルなカードコンテンツです。"})})},n={render:()=>e.jsxs(r,{children:[e.jsx(r.Header,{children:"カードタイトル"}),e.jsx(r.Body,{children:"カードの本文コンテンツです。ヘッダーとフッター付きのレイアウトを使用しています。"}),e.jsxs(r.Footer,{children:[e.jsx(m,{variant:"secondary",scale:"sm",children:"キャンセル"}),e.jsx(m,{scale:"sm",children:"保存"})]})]})},c={render:()=>e.jsx("div",{className:"cs:space-y-4",children:["xs","sm","md","lg"].map(a=>e.jsxs(r,{scale:a,children:[e.jsxs(r.Header,{children:["Scale: ",a]}),e.jsxs(r.Body,{children:["パディングが ",a," サイズです。"]})]},a))})},t={render:()=>e.jsx(r,{bordered:!1,children:e.jsx(r.Body,{children:"ボーダーなしのカードです。"})})},l={render:()=>e.jsx(r,{shadow:!1,children:e.jsx(r.Body,{children:"シャドウなしのカードです。"})})},i={render:()=>e.jsxs(r,{children:[e.jsx(r.Header,{children:"ユーザー登録"}),e.jsx(r.Body,{children:e.jsxs("div",{className:"cs:space-y-3",children:[e.jsx(x,{label:"名前",placeholder:"山田太郎"}),e.jsx(x,{label:"メールアドレス",placeholder:"example@mail.com"})]})}),e.jsxs(r.Footer,{children:[e.jsx(m,{variant:"secondary",scale:"sm",children:"キャンセル"}),e.jsx(m,{scale:"sm",color:"green",children:"登録"})]})]})};var y,C,h;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Card>
      <Card.Body>
        シンプルなカードコンテンツです。
      </Card.Body>
    </Card>
}`,...(h=(C=d.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var f,g,j;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(j=(g=n.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var B,b,v;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-4">
      {(["xs", "sm", "md", "lg"] as const).map(scale => <Card key={scale} scale={scale}>
          <Card.Header>Scale: {scale}</Card.Header>
          <Card.Body>パディングが {scale} サイズです。</Card.Body>
        </Card>)}
    </div>
}`,...(v=(b=c.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var S,H,N;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Card bordered={false}>
      <Card.Body>ボーダーなしのカードです。</Card.Body>
    </Card>
}`,...(N=(H=t.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var F,P,k;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Card shadow={false}>
      <Card.Body>シャドウなしのカードです。</Card.Body>
    </Card>
}`,...(k=(P=l.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var w,T,W;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(W=(T=i.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};const ee=["Default","WithHeaderAndFooter","Scales","WithoutBorder","WithoutShadow","Composed"];export{i as Composed,d as Default,c as Scales,n as WithHeaderAndFooter,t as WithoutBorder,l as WithoutShadow,ee as __namedExportsOrder,$ as default};
