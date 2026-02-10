"use client";
import{j as e}from"./iframe-Cw0Ps6tz.js";import{F as r}from"./FormField-LnCWEMe7.js";import{I as l}from"./Input-BK_s9oT1.js";import{T as z}from"./TextArea-Dcb3NRa8.js";import{S as J,a}from"./Select-gKhjfQG_.js";import{G as s}from"./GroupBox-DG57gNze.js";import"./preload-helper-CJpEdZxZ.js";import"./clsx-BYFsuUQf.js";import"./colorUtils-D-K_anEj.js";import"./Label-CNCgww0H.js";import"./useUIColor-DDdChcPS.js";import"./FormFieldContext-DapriasF.js";import"./designTokens-DumaUFqK.js";const ae={component:r,title:"Form/FormField",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},isInvalid:{control:"boolean"},isRequired:{control:"boolean"},isDisabled:{control:"boolean"}}},i={args:{scale:"md"},render:u=>e.jsxs(r,{...u,children:[e.jsx(r.Label,{children:"メールアドレス"}),e.jsx(l,{type:"email",placeholder:"example@email.com"}),e.jsx(r.Help,{children:"有効なメールアドレスを入力してください"})]})},o={args:{isInvalid:!0,isRequired:!0},render:u=>e.jsxs(r,{...u,children:[e.jsx(r.Label,{children:"ユーザー名"}),e.jsx(l,{placeholder:"ユーザー名を入力"}),e.jsx(r.Error,{children:"ユーザー名は必須です"})]})},d={render:()=>e.jsxs(r,{children:[e.jsx(r.Label,{children:"パスワード"}),e.jsx(l,{type:"password",placeholder:"パスワードを入力"}),e.jsx(r.Help,{children:"8文字以上で、英数字を含めてください"})]})},n={render:()=>e.jsxs(r,{isRequired:!0,children:[e.jsx(r.Label,{children:"名前"}),e.jsx(l,{placeholder:"名前を入力"})]})},m={render:()=>e.jsxs(r,{isDisabled:!0,children:[e.jsx(r.Label,{children:"メールアドレス"}),e.jsx(l,{placeholder:"変更できません"}),e.jsx(r.Help,{children:"このフィールドは無効です"})]})},c={render:()=>e.jsxs(r,{isRequired:!0,children:[e.jsx(r.Label,{children:"コメント"}),e.jsx(z,{placeholder:"コメントを入力してください",rows:4}),e.jsx(r.Help,{children:"最大500文字まで入力できます"})]})},p={render:()=>e.jsxs(r,{isRequired:!0,children:[e.jsx(r.Label,{children:"カテゴリ"}),e.jsxs(J,{children:[e.jsx(a,{label:"選択してください",value:""}),e.jsx(a,{label:"技術",value:"tech"}),e.jsx(a,{label:"デザイン",value:"design"}),e.jsx(a,{label:"マーケティング",value:"marketing"})]})]})},F={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:gap-4 cs:sm:gap-6",children:[e.jsx(s,{label:"Extra Small (xs)",children:e.jsxs(r,{scale:"xs",isRequired:!0,children:[e.jsx(r.Label,{children:"メールアドレス"}),e.jsx(l,{type:"email",placeholder:"example@email.com"}),e.jsx(r.Help,{children:"有効なメールアドレスを入力"})]})}),e.jsx(s,{label:"Small (sm)",children:e.jsxs(r,{scale:"sm",isRequired:!0,children:[e.jsx(r.Label,{children:"メールアドレス"}),e.jsx(l,{type:"email",placeholder:"example@email.com"}),e.jsx(r.Help,{children:"有効なメールアドレスを入力"})]})}),e.jsx(s,{label:"Standard (md)",children:e.jsxs(r,{scale:"md",isRequired:!0,children:[e.jsx(r.Label,{children:"メールアドレス"}),e.jsx(l,{type:"email",placeholder:"example@email.com"}),e.jsx(r.Help,{children:"有効なメールアドレスを入力"})]})}),e.jsx(s,{label:"Large (lg)",children:e.jsxs(r,{scale:"lg",isRequired:!0,children:[e.jsx(r.Label,{children:"メールアドレス"}),e.jsx(l,{type:"email",placeholder:"example@email.com"}),e.jsx(r.Help,{children:"有効なメールアドレスを入力"})]})})]})},t={render:()=>e.jsxs("div",{className:"cs:space-y-4 cs:max-w-md",children:[e.jsxs(r,{isRequired:!0,children:[e.jsx(r.Label,{children:"名前"}),e.jsx(l,{placeholder:"山田 太郎"})]}),e.jsxs(r,{isRequired:!0,isInvalid:!0,children:[e.jsx(r.Label,{children:"メールアドレス"}),e.jsx(l,{type:"email",placeholder:"example@email.com"}),e.jsx(r.Error,{children:"有効なメールアドレスを入力してください"})]}),e.jsxs(r,{isRequired:!0,children:[e.jsx(r.Label,{children:"カテゴリ"}),e.jsxs(J,{children:[e.jsx(a,{label:"選択してください",value:""}),e.jsx(a,{label:"お問い合わせ",value:"inquiry"}),e.jsx(a,{label:"フィードバック",value:"feedback"}),e.jsx(a,{label:"バグ報告",value:"bug"})]})]}),e.jsxs(r,{children:[e.jsx(r.Label,{children:"メッセージ"}),e.jsx(z,{placeholder:"メッセージを入力してください",rows:4}),e.jsx(r.Help,{children:"最大1000文字まで入力できます"})]})]})};var x,h,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    scale: "md"
  },
  render: args => <FormField {...args}>
      <FormField.Label>メールアドレス</FormField.Label>
      <Input type="email" placeholder="example@email.com" />
      <FormField.Help>有効なメールアドレスを入力してください</FormField.Help>
    </FormField>
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var j,L,g;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    isRequired: true
  },
  render: args => <FormField {...args}>
      <FormField.Label>ユーザー名</FormField.Label>
      <Input placeholder="ユーザー名を入力" />
      <FormField.Error>ユーザー名は必須です</FormField.Error>
    </FormField>
}`,...(g=(L=o.parameters)==null?void 0:L.docs)==null?void 0:g.source}}};var S,H,q;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <FormField>
      <FormField.Label>パスワード</FormField.Label>
      <Input type="password" placeholder="パスワードを入力" />
      <FormField.Help>8文字以上で、英数字を含めてください</FormField.Help>
    </FormField>
}`,...(q=(H=d.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var v,R,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <FormField isRequired>
      <FormField.Label>名前</FormField.Label>
      <Input placeholder="名前を入力" />
    </FormField>
}`,...(y=(R=n.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var I,E,f;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <FormField isDisabled>
      <FormField.Label>メールアドレス</FormField.Label>
      <Input placeholder="変更できません" />
      <FormField.Help>このフィールドは無効です</FormField.Help>
    </FormField>
}`,...(f=(E=m.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var G,O,B;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <FormField isRequired>
      <FormField.Label>コメント</FormField.Label>
      <TextArea placeholder="コメントを入力してください" rows={4} />
      <FormField.Help>最大500文字まで入力できます</FormField.Help>
    </FormField>
}`,...(B=(O=c.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var w,W,D;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <FormField isRequired>
      <FormField.Label>カテゴリ</FormField.Label>
      <Select>
        <SelectOption label="選択してください" value="" />
        <SelectOption label="技術" value="tech" />
        <SelectOption label="デザイン" value="design" />
        <SelectOption label="マーケティング" value="marketing" />
      </Select>
    </FormField>
}`,...(D=(W=p.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var T,A,k;F.parameters={...F.parameters,docs:{...(T=F.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:gap-4 cs:sm:gap-6">
      <GroupBox label="Extra Small (xs)">
        <FormField scale="xs" isRequired>
          <FormField.Label>メールアドレス</FormField.Label>
          <Input type="email" placeholder="example@email.com" />
          <FormField.Help>有効なメールアドレスを入力</FormField.Help>
        </FormField>
      </GroupBox>
      <GroupBox label="Small (sm)">
        <FormField scale="sm" isRequired>
          <FormField.Label>メールアドレス</FormField.Label>
          <Input type="email" placeholder="example@email.com" />
          <FormField.Help>有効なメールアドレスを入力</FormField.Help>
        </FormField>
      </GroupBox>
      <GroupBox label="Standard (md)">
        <FormField scale="md" isRequired>
          <FormField.Label>メールアドレス</FormField.Label>
          <Input type="email" placeholder="example@email.com" />
          <FormField.Help>有効なメールアドレスを入力</FormField.Help>
        </FormField>
      </GroupBox>
      <GroupBox label="Large (lg)">
        <FormField scale="lg" isRequired>
          <FormField.Label>メールアドレス</FormField.Label>
          <Input type="email" placeholder="example@email.com" />
          <FormField.Help>有効なメールアドレスを入力</FormField.Help>
        </FormField>
      </GroupBox>
    </div>
}`,...(k=(A=F.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var N,C,_;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-4 cs:max-w-md">
      <FormField isRequired>
        <FormField.Label>名前</FormField.Label>
        <Input placeholder="山田 太郎" />
      </FormField>

      <FormField isRequired isInvalid>
        <FormField.Label>メールアドレス</FormField.Label>
        <Input type="email" placeholder="example@email.com" />
        <FormField.Error>有効なメールアドレスを入力してください</FormField.Error>
      </FormField>

      <FormField isRequired>
        <FormField.Label>カテゴリ</FormField.Label>
        <Select>
          <SelectOption label="選択してください" value="" />
          <SelectOption label="お問い合わせ" value="inquiry" />
          <SelectOption label="フィードバック" value="feedback" />
          <SelectOption label="バグ報告" value="bug" />
        </Select>
      </FormField>

      <FormField>
        <FormField.Label>メッセージ</FormField.Label>
        <TextArea placeholder="メッセージを入力してください" rows={4} />
        <FormField.Help>最大1000文字まで入力できます</FormField.Help>
      </FormField>
    </div>
}`,...(_=(C=t.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};const se=["Default","WithError","WithHelp","Required","Disabled","WithTextArea","WithSelect","Scales","CompleteForm"];export{t as CompleteForm,i as Default,m as Disabled,n as Required,F as Scales,o as WithError,d as WithHelp,p as WithSelect,c as WithTextArea,se as __namedExportsOrder,ae as default};
