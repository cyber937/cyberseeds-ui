"use client";
import{j as e,r as E}from"./iframe-DzGEYPXT.js";import{T as s}from"./Tabs-CyLAbLHt.js";import{B as t}from"./ButtonTabs-CtoRPtMx.js";import"./preload-helper-CJpEdZxZ.js";import"./clsx-BYFsuUQf.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-DumaUFqK.js";import"./useUIColor-Oew3m0TN.js";import"./colorContrast-C0ZIkquj.js";const I={component:t,title:"Navigation/ButtonTabs",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray"]}}},a={args:{defaultValue:"lending",scale:"md"},render:n=>e.jsxs(t,{...n,children:[e.jsxs(t.List,{children:[e.jsx(t.Trigger,{value:"lending",children:"貸出"}),e.jsx(t.Trigger,{value:"return",children:"返却"})]}),e.jsx(t.Content,{value:"lending",children:"貸出画面の内容"}),e.jsx(t.Content,{value:"return",children:"返却画面の内容"})]})},r={render:()=>{const[n,D]=E.useState("tab1");return e.jsxs("div",{className:"cs:space-y-4",children:[e.jsxs(t,{value:n,onChange:D,children:[e.jsxs(t.List,{children:[e.jsx(t.Trigger,{value:"tab1",children:"タブ 1"}),e.jsx(t.Trigger,{value:"tab2",children:"タブ 2"}),e.jsx(t.Trigger,{value:"tab3",children:"タブ 3"})]}),e.jsx(t.Content,{value:"tab1",children:"タブ 1 のコンテンツ"}),e.jsx(t.Content,{value:"tab2",children:"タブ 2 のコンテンツ"}),e.jsx(t.Content,{value:"tab3",children:"タブ 3 のコンテンツ"})]}),e.jsxs("p",{className:"cs:text-sm cs:text-gray-500",children:["選択中: ",n]})]})}},l={render:()=>e.jsx("div",{className:"cs:space-y-4",children:["blue","green","red","amber","purple"].map(n=>e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:n}),e.jsxs(t,{defaultValue:"a",color:n,children:[e.jsxs(t.List,{children:[e.jsx(t.Trigger,{value:"a",children:"タブ A"}),e.jsx(t.Trigger,{value:"b",children:"タブ B"}),e.jsx(t.Trigger,{value:"c",children:"タブ C"})]}),e.jsx(t.Content,{value:"a",children:"コンテンツ A"}),e.jsx(t.Content,{value:"b",children:"コンテンツ B"}),e.jsx(t.Content,{value:"c",children:"コンテンツ C"})]})]},n))})},u={render:()=>e.jsx("div",{className:"cs:space-y-4",children:["xs","sm","md","lg"].map(n=>e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:n}),e.jsxs(t,{defaultValue:"a",scale:n,children:[e.jsxs(t.List,{children:[e.jsx(t.Trigger,{value:"a",children:"タブ A"}),e.jsx(t.Trigger,{value:"b",children:"タブ B"}),e.jsx(t.Trigger,{value:"c",children:"タブ C"})]}),e.jsx(t.Content,{value:"a",children:"コンテンツ A"}),e.jsx(t.Content,{value:"b",children:"コンテンツ B"}),e.jsx(t.Content,{value:"c",children:"コンテンツ C"})]})]},n))})},o={render:()=>e.jsxs(t,{defaultValue:"a",children:[e.jsxs(t.List,{children:[e.jsx(t.Trigger,{value:"a",children:"有効"}),e.jsx(t.Trigger,{value:"b",disabled:!0,children:"無効"}),e.jsx(t.Trigger,{value:"c",children:"有効"})]}),e.jsx(t.Content,{value:"a",children:"タブ A のコンテンツ"}),e.jsx(t.Content,{value:"c",children:"タブ C のコンテンツ"})]})},i={render:()=>e.jsxs("div",{className:"cs:space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:"fullWidth"}),e.jsxs(t,{defaultValue:"lending",children:[e.jsxs(t.List,{fullWidth:!0,children:[e.jsx(t.Trigger,{value:"lending",children:"貸出"}),e.jsx(t.Trigger,{value:"return",children:"返却"})]}),e.jsx(t.Content,{value:"lending",children:"貸出画面の内容"}),e.jsx(t.Content,{value:"return",children:"返却画面の内容"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:"fullWidth (3 tabs)"}),e.jsxs(t,{defaultValue:"a",children:[e.jsxs(t.List,{fullWidth:!0,children:[e.jsx(t.Trigger,{value:"a",children:"タブ A"}),e.jsx(t.Trigger,{value:"b",children:"タブ B"}),e.jsx(t.Trigger,{value:"c",children:"タブ C"})]}),e.jsx(t.Content,{value:"a",children:"コンテンツ A"}),e.jsx(t.Content,{value:"b",children:"コンテンツ B"}),e.jsx(t.Content,{value:"c",children:"コンテンツ C"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:"default (inline)"}),e.jsxs(t,{defaultValue:"lending",children:[e.jsxs(t.List,{children:[e.jsx(t.Trigger,{value:"lending",children:"貸出"}),e.jsx(t.Trigger,{value:"return",children:"返却"})]}),e.jsx(t.Content,{value:"lending",children:"貸出画面の内容"}),e.jsx(t.Content,{value:"return",children:"返却画面の内容"})]})]})]})},c={render:()=>e.jsxs("div",{className:"cs:space-y-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"ButtonTabs (ボタン形式)"}),e.jsxs(t,{defaultValue:"a",children:[e.jsxs(t.List,{children:[e.jsx(t.Trigger,{value:"a",children:"貸出"}),e.jsx(t.Trigger,{value:"b",children:"返却"})]}),e.jsx(t.Content,{value:"a",children:"貸出画面"}),e.jsx(t.Content,{value:"b",children:"返却画面"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Tabs (アンダーライン形式)"}),e.jsxs(s,{defaultValue:"a",children:[e.jsxs(s.List,{children:[e.jsx(s.Trigger,{value:"a",children:"貸出"}),e.jsx(s.Trigger,{value:"b",children:"返却"})]}),e.jsx(s.Content,{value:"a",children:"貸出画面"}),e.jsx(s.Content,{value:"b",children:"返却画面"})]})]})]})};var d,T,b;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    defaultValue: "lending",
    scale: "md"
  },
  render: args => <ButtonTabs {...args}>
      <ButtonTabs.List>
        <ButtonTabs.Trigger value="lending">貸出</ButtonTabs.Trigger>
        <ButtonTabs.Trigger value="return">返却</ButtonTabs.Trigger>
      </ButtonTabs.List>
      <ButtonTabs.Content value="lending">貸出画面の内容</ButtonTabs.Content>
      <ButtonTabs.Content value="return">返却画面の内容</ButtonTabs.Content>
    </ButtonTabs>
}`,...(b=(T=a.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var g,x,B;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("tab1");
    return <div className="cs:space-y-4">
        <ButtonTabs value={value} onChange={setValue}>
          <ButtonTabs.List>
            <ButtonTabs.Trigger value="tab1">タブ 1</ButtonTabs.Trigger>
            <ButtonTabs.Trigger value="tab2">タブ 2</ButtonTabs.Trigger>
            <ButtonTabs.Trigger value="tab3">タブ 3</ButtonTabs.Trigger>
          </ButtonTabs.List>
          <ButtonTabs.Content value="tab1">タブ 1 のコンテンツ</ButtonTabs.Content>
          <ButtonTabs.Content value="tab2">タブ 2 のコンテンツ</ButtonTabs.Content>
          <ButtonTabs.Content value="tab3">タブ 3 のコンテンツ</ButtonTabs.Content>
        </ButtonTabs>
        <p className="cs:text-sm cs:text-gray-500">選択中: {value}</p>
      </div>;
  }
}`,...(B=(x=r.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var v,h,m;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-4">
      {(["blue", "green", "red", "amber", "purple"] as const).map(color => <div key={color}>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-1">{color}</p>
          <ButtonTabs defaultValue="a" color={color}>
            <ButtonTabs.List>
              <ButtonTabs.Trigger value="a">タブ A</ButtonTabs.Trigger>
              <ButtonTabs.Trigger value="b">タブ B</ButtonTabs.Trigger>
              <ButtonTabs.Trigger value="c">タブ C</ButtonTabs.Trigger>
            </ButtonTabs.List>
            <ButtonTabs.Content value="a">コンテンツ A</ButtonTabs.Content>
            <ButtonTabs.Content value="b">コンテンツ B</ButtonTabs.Content>
            <ButtonTabs.Content value="c">コンテンツ C</ButtonTabs.Content>
          </ButtonTabs>
        </div>)}
    </div>
}`,...(m=(h=l.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var p,C,j;u.parameters={...u.parameters,docs:{...(p=u.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-4">
      {(["xs", "sm", "md", "lg"] as const).map(scale => <div key={scale}>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-1">{scale}</p>
          <ButtonTabs defaultValue="a" scale={scale}>
            <ButtonTabs.List>
              <ButtonTabs.Trigger value="a">タブ A</ButtonTabs.Trigger>
              <ButtonTabs.Trigger value="b">タブ B</ButtonTabs.Trigger>
              <ButtonTabs.Trigger value="c">タブ C</ButtonTabs.Trigger>
            </ButtonTabs.List>
            <ButtonTabs.Content value="a">コンテンツ A</ButtonTabs.Content>
            <ButtonTabs.Content value="b">コンテンツ B</ButtonTabs.Content>
            <ButtonTabs.Content value="c">コンテンツ C</ButtonTabs.Content>
          </ButtonTabs>
        </div>)}
    </div>
}`,...(j=(C=u.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var f,y,L;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <ButtonTabs defaultValue="a">
      <ButtonTabs.List>
        <ButtonTabs.Trigger value="a">有効</ButtonTabs.Trigger>
        <ButtonTabs.Trigger value="b" disabled>無効</ButtonTabs.Trigger>
        <ButtonTabs.Trigger value="c">有効</ButtonTabs.Trigger>
      </ButtonTabs.List>
      <ButtonTabs.Content value="a">タブ A のコンテンツ</ButtonTabs.Content>
      <ButtonTabs.Content value="c">タブ C のコンテンツ</ButtonTabs.Content>
    </ButtonTabs>
}`,...(L=(y=o.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var N,V,A;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-4">
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">fullWidth</p>
        <ButtonTabs defaultValue="lending">
          <ButtonTabs.List fullWidth>
            <ButtonTabs.Trigger value="lending">貸出</ButtonTabs.Trigger>
            <ButtonTabs.Trigger value="return">返却</ButtonTabs.Trigger>
          </ButtonTabs.List>
          <ButtonTabs.Content value="lending">貸出画面の内容</ButtonTabs.Content>
          <ButtonTabs.Content value="return">返却画面の内容</ButtonTabs.Content>
        </ButtonTabs>
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">fullWidth (3 tabs)</p>
        <ButtonTabs defaultValue="a">
          <ButtonTabs.List fullWidth>
            <ButtonTabs.Trigger value="a">タブ A</ButtonTabs.Trigger>
            <ButtonTabs.Trigger value="b">タブ B</ButtonTabs.Trigger>
            <ButtonTabs.Trigger value="c">タブ C</ButtonTabs.Trigger>
          </ButtonTabs.List>
          <ButtonTabs.Content value="a">コンテンツ A</ButtonTabs.Content>
          <ButtonTabs.Content value="b">コンテンツ B</ButtonTabs.Content>
          <ButtonTabs.Content value="c">コンテンツ C</ButtonTabs.Content>
        </ButtonTabs>
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">default (inline)</p>
        <ButtonTabs defaultValue="lending">
          <ButtonTabs.List>
            <ButtonTabs.Trigger value="lending">貸出</ButtonTabs.Trigger>
            <ButtonTabs.Trigger value="return">返却</ButtonTabs.Trigger>
          </ButtonTabs.List>
          <ButtonTabs.Content value="lending">貸出画面の内容</ButtonTabs.Content>
          <ButtonTabs.Content value="return">返却画面の内容</ButtonTabs.Content>
        </ButtonTabs>
      </div>
    </div>
}`,...(A=(V=i.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var W,S,k;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-6">
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">ButtonTabs (ボタン形式)</p>
        <ButtonTabs defaultValue="a">
          <ButtonTabs.List>
            <ButtonTabs.Trigger value="a">貸出</ButtonTabs.Trigger>
            <ButtonTabs.Trigger value="b">返却</ButtonTabs.Trigger>
          </ButtonTabs.List>
          <ButtonTabs.Content value="a">貸出画面</ButtonTabs.Content>
          <ButtonTabs.Content value="b">返却画面</ButtonTabs.Content>
        </ButtonTabs>
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Tabs (アンダーライン形式)</p>
        <Tabs defaultValue="a">
          <Tabs.List>
            <Tabs.Trigger value="a">貸出</Tabs.Trigger>
            <Tabs.Trigger value="b">返却</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="a">貸出画面</Tabs.Content>
          <Tabs.Content value="b">返却画面</Tabs.Content>
        </Tabs>
      </div>
    </div>
}`,...(k=(S=c.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};const J=["Default","Controlled","Colors","Scales","WithDisabled","FullWidth","ComparedWithTabs"];export{l as Colors,c as ComparedWithTabs,r as Controlled,a as Default,i as FullWidth,u as Scales,o as WithDisabled,J as __namedExportsOrder,I as default};
