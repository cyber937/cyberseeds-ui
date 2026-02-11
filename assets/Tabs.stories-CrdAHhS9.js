"use client";
import{j as a,r as G}from"./iframe-g7VAFW6d.js";import{T as e}from"./Tabs-CeCgICTJ.js";import{G as t}from"./GroupBox-Djcp2fLk.js";import"./preload-helper-CJpEdZxZ.js";import"./clsx-BYFsuUQf.js";import"./colorUtils-D-K_anEj.js";import"./designTokens-DumaUFqK.js";import"./useUIColor-DmpuWLHr.js";import"./Label-DDLMPEb_.js";const q={component:e,title:"Navigation/Tabs",tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["red","orange","amber","green","blue","indigo","violet","purple","pink","gray"]},scale:{control:{type:"radio"},options:["xs","sm","md","lg"]}}},r={render:()=>a.jsxs(e,{defaultValue:"account",children:[a.jsxs(e.List,{children:[a.jsx(e.Trigger,{value:"account",children:"アカウント"}),a.jsx(e.Trigger,{value:"password",children:"パスワード"}),a.jsx(e.Trigger,{value:"notifications",children:"通知"})]}),a.jsx(e.Content,{value:"account",children:a.jsx("p",{className:"cs:text-gray-700 cs:dark:text-gray-400",children:"アカウント設定を管理します。名前、メールアドレスなどを変更できます。"})}),a.jsx(e.Content,{value:"password",children:a.jsx("p",{className:"cs:text-gray-700 cs:dark:text-gray-400",children:"パスワードを変更します。セキュリティのため、定期的な変更をお勧めします。"})}),a.jsx(e.Content,{value:"notifications",children:a.jsx("p",{className:"cs:text-gray-700 cs:dark:text-gray-400",children:"通知設定をカスタマイズします。メール通知やプッシュ通知を制御できます。"})})]})},n={render:()=>{const[s,k]=G.useState("tab1");return a.jsxs("div",{children:[a.jsxs(e,{value:s,onChange:k,children:[a.jsxs(e.List,{children:[a.jsx(e.Trigger,{value:"tab1",children:"タブ 1"}),a.jsx(e.Trigger,{value:"tab2",children:"タブ 2"}),a.jsx(e.Trigger,{value:"tab3",children:"タブ 3"})]}),a.jsx(e.Content,{value:"tab1",children:"タブ1のコンテンツ"}),a.jsx(e.Content,{value:"tab2",children:"タブ2のコンテンツ"}),a.jsx(e.Content,{value:"tab3",children:"タブ3のコンテンツ"})]}),a.jsxs("p",{className:"cs:mt-2 cs:text-sm cs:text-gray-500",children:["現在のタブ: ",s]})]})}},l={render:()=>a.jsx("div",{className:"cs:space-y-6",children:["blue","red","green","purple","amber"].map(s=>a.jsx(t,{label:s,children:a.jsxs(e,{defaultValue:"tab1",color:s,children:[a.jsxs(e.List,{children:[a.jsx(e.Trigger,{value:"tab1",children:"タブ 1"}),a.jsx(e.Trigger,{value:"tab2",children:"タブ 2"}),a.jsx(e.Trigger,{value:"tab3",children:"タブ 3"})]}),a.jsx(e.Content,{value:"tab1",children:a.jsxs("span",{className:"cs:text-gray-600 cs:dark:text-gray-400",children:[s," テーマのコンテンツ"]})}),a.jsx(e.Content,{value:"tab2",children:"タブ 2"}),a.jsx(e.Content,{value:"tab3",children:"タブ 3"})]})},s))})},b={render:()=>a.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:gap-4 cs:sm:gap-6",children:[a.jsx(t,{label:"Extra Small (xs)",children:a.jsxs(e,{defaultValue:"tab1",scale:"xs",children:[a.jsxs(e.List,{children:[a.jsx(e.Trigger,{value:"tab1",children:"タブ 1"}),a.jsx(e.Trigger,{value:"tab2",children:"タブ 2"})]}),a.jsx(e.Content,{value:"tab1",children:"Extra Small サイズ"}),a.jsx(e.Content,{value:"tab2",children:"タブ 2"})]})}),a.jsx(t,{label:"Small (sm)",children:a.jsxs(e,{defaultValue:"tab1",scale:"sm",children:[a.jsxs(e.List,{children:[a.jsx(e.Trigger,{value:"tab1",children:"タブ 1"}),a.jsx(e.Trigger,{value:"tab2",children:"タブ 2"})]}),a.jsx(e.Content,{value:"tab1",children:"Small サイズ"}),a.jsx(e.Content,{value:"tab2",children:"タブ 2"})]})}),a.jsx(t,{label:"Standard (md)",children:a.jsxs(e,{defaultValue:"tab1",scale:"md",children:[a.jsxs(e.List,{children:[a.jsx(e.Trigger,{value:"tab1",children:"タブ 1"}),a.jsx(e.Trigger,{value:"tab2",children:"タブ 2"})]}),a.jsx(e.Content,{value:"tab1",children:"Standard サイズ"}),a.jsx(e.Content,{value:"tab2",children:"タブ 2"})]})}),a.jsx(t,{label:"Large (lg)",children:a.jsxs(e,{defaultValue:"tab1",scale:"lg",children:[a.jsxs(e.List,{children:[a.jsx(e.Trigger,{value:"tab1",children:"タブ 1"}),a.jsx(e.Trigger,{value:"tab2",children:"タブ 2"})]}),a.jsx(e.Content,{value:"tab1",children:"Large サイズ"}),a.jsx(e.Content,{value:"tab2",children:"タブ 2"})]})})]})},i={render:()=>a.jsxs(e,{defaultValue:"tab1",children:[a.jsxs(e.List,{children:[a.jsx(e.Trigger,{value:"tab1",children:"有効"}),a.jsx(e.Trigger,{value:"tab2",disabled:!0,children:"無効"}),a.jsx(e.Trigger,{value:"tab3",children:"有効"})]}),a.jsx(e.Content,{value:"tab1",children:"有効なタブのコンテンツ"}),a.jsx(e.Content,{value:"tab2",children:"無効なタブのコンテンツ"}),a.jsx(e.Content,{value:"tab3",children:"3番目のタブのコンテンツ"})]})},o={parameters:{viewport:{defaultViewport:"mobile"}},render:()=>a.jsxs(e,{defaultValue:"tab1",children:[a.jsxs(e.List,{children:[a.jsx(e.Trigger,{value:"tab1",children:"ホーム"}),a.jsx(e.Trigger,{value:"tab2",children:"プロフィール"}),a.jsx(e.Trigger,{value:"tab3",children:"設定"}),a.jsx(e.Trigger,{value:"tab4",children:"通知"}),a.jsx(e.Trigger,{value:"tab5",children:"メッセージ"}),a.jsx(e.Trigger,{value:"tab6",children:"ヘルプ"})]}),a.jsx(e.Content,{value:"tab1",children:a.jsx("p",{className:"cs:text-gray-700 cs:dark:text-gray-400",children:"モバイルでは水平スクロールでタブを切り替えられます。"})}),a.jsx(e.Content,{value:"tab2",children:"プロフィール"}),a.jsx(e.Content,{value:"tab3",children:"設定"}),a.jsx(e.Content,{value:"tab4",children:"通知"}),a.jsx(e.Content,{value:"tab5",children:"メッセージ"}),a.jsx(e.Content,{value:"tab6",children:"ヘルプ"})]})};var c,T,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="account">
      <Tabs.List>
        <Tabs.Trigger value="account">アカウント</Tabs.Trigger>
        <Tabs.Trigger value="password">パスワード</Tabs.Trigger>
        <Tabs.Trigger value="notifications">通知</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">
        <p className="cs:text-gray-700 cs:dark:text-gray-400">
          アカウント設定を管理します。名前、メールアドレスなどを変更できます。
        </p>
      </Tabs.Content>
      <Tabs.Content value="password">
        <p className="cs:text-gray-700 cs:dark:text-gray-400">
          パスワードを変更します。セキュリティのため、定期的な変更をお勧めします。
        </p>
      </Tabs.Content>
      <Tabs.Content value="notifications">
        <p className="cs:text-gray-700 cs:dark:text-gray-400">
          通知設定をカスタマイズします。メール通知やプッシュ通知を制御できます。
        </p>
      </Tabs.Content>
    </Tabs>
}`,...(g=(T=r.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var d,u,x;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [tab, setTab] = useState("tab1");
    return <div>
        <Tabs value={tab} onChange={setTab}>
          <Tabs.List>
            <Tabs.Trigger value="tab1">タブ 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2">タブ 2</Tabs.Trigger>
            <Tabs.Trigger value="tab3">タブ 3</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">タブ1のコンテンツ</Tabs.Content>
          <Tabs.Content value="tab2">タブ2のコンテンツ</Tabs.Content>
          <Tabs.Content value="tab3">タブ3のコンテンツ</Tabs.Content>
        </Tabs>
        <p className="cs:mt-2 cs:text-sm cs:text-gray-500">
          現在のタブ: {tab}
        </p>
      </div>;
  }
}`,...(x=(u=n.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var v,p,m;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-6">
      {(["blue", "red", "green", "purple", "amber"] as const).map(color => <GroupBox key={color} label={color}>
          <Tabs defaultValue="tab1" color={color}>
            <Tabs.List>
              <Tabs.Trigger value="tab1">タブ 1</Tabs.Trigger>
              <Tabs.Trigger value="tab2">タブ 2</Tabs.Trigger>
              <Tabs.Trigger value="tab3">タブ 3</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="tab1">
              <span className="cs:text-gray-600 cs:dark:text-gray-400">
                {color} テーマのコンテンツ
              </span>
            </Tabs.Content>
            <Tabs.Content value="tab2">タブ 2</Tabs.Content>
            <Tabs.Content value="tab3">タブ 3</Tabs.Content>
          </Tabs>
        </GroupBox>)}
    </div>
}`,...(m=(p=l.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,j,C;b.parameters={...b.parameters,docs:{...(h=b.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:gap-4 cs:sm:gap-6">
      <GroupBox label="Extra Small (xs)">
        <Tabs defaultValue="tab1" scale="xs">
          <Tabs.List>
            <Tabs.Trigger value="tab1">タブ 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2">タブ 2</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">Extra Small サイズ</Tabs.Content>
          <Tabs.Content value="tab2">タブ 2</Tabs.Content>
        </Tabs>
      </GroupBox>
      <GroupBox label="Small (sm)">
        <Tabs defaultValue="tab1" scale="sm">
          <Tabs.List>
            <Tabs.Trigger value="tab1">タブ 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2">タブ 2</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">Small サイズ</Tabs.Content>
          <Tabs.Content value="tab2">タブ 2</Tabs.Content>
        </Tabs>
      </GroupBox>
      <GroupBox label="Standard (md)">
        <Tabs defaultValue="tab1" scale="md">
          <Tabs.List>
            <Tabs.Trigger value="tab1">タブ 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2">タブ 2</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">Standard サイズ</Tabs.Content>
          <Tabs.Content value="tab2">タブ 2</Tabs.Content>
        </Tabs>
      </GroupBox>
      <GroupBox label="Large (lg)">
        <Tabs defaultValue="tab1" scale="lg">
          <Tabs.List>
            <Tabs.Trigger value="tab1">タブ 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2">タブ 2</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">Large サイズ</Tabs.Content>
          <Tabs.Content value="tab2">タブ 2</Tabs.Content>
        </Tabs>
      </GroupBox>
    </div>
}`,...(C=(j=b.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var L,y,f;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1">
      <Tabs.List>
        <Tabs.Trigger value="tab1">有効</Tabs.Trigger>
        <Tabs.Trigger value="tab2" disabled>
          無効
        </Tabs.Trigger>
        <Tabs.Trigger value="tab3">有効</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">有効なタブのコンテンツ</Tabs.Content>
      <Tabs.Content value="tab2">無効なタブのコンテンツ</Tabs.Content>
      <Tabs.Content value="tab3">3番目のタブのコンテンツ</Tabs.Content>
    </Tabs>
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var S,V,N;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile"
    }
  },
  render: () => <Tabs defaultValue="tab1">
      <Tabs.List>
        <Tabs.Trigger value="tab1">ホーム</Tabs.Trigger>
        <Tabs.Trigger value="tab2">プロフィール</Tabs.Trigger>
        <Tabs.Trigger value="tab3">設定</Tabs.Trigger>
        <Tabs.Trigger value="tab4">通知</Tabs.Trigger>
        <Tabs.Trigger value="tab5">メッセージ</Tabs.Trigger>
        <Tabs.Trigger value="tab6">ヘルプ</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <p className="cs:text-gray-700 cs:dark:text-gray-400">
          モバイルでは水平スクロールでタブを切り替えられます。
        </p>
      </Tabs.Content>
      <Tabs.Content value="tab2">プロフィール</Tabs.Content>
      <Tabs.Content value="tab3">設定</Tabs.Content>
      <Tabs.Content value="tab4">通知</Tabs.Content>
      <Tabs.Content value="tab5">メッセージ</Tabs.Content>
      <Tabs.Content value="tab6">ヘルプ</Tabs.Content>
    </Tabs>
}`,...(N=(V=o.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};const z=["Default","Controlled","Colors","Scales","WithDisabled","MobileScroll"];export{l as Colors,n as Controlled,r as Default,o as MobileScroll,b as Scales,i as WithDisabled,z as __namedExportsOrder,q as default};
