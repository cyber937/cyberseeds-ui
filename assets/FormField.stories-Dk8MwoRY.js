"use client";
import{r as q,j as e}from"./iframe-DszvCNP2.js";import{c as j}from"./clsx-BYFsuUQf.js";import{r as oe}from"./colorUtils-BF1Ih5IA.js";import{L as ie}from"./Label-DBOsNz8O.js";import{u as ne}from"./useUIColor-_6l39SGF.js";import{F as de,u as me}from"./FormFieldContext-TpYHAaEw.js";import{I as o}from"./Input-XcsrcPQ1.js";import{T as ee}from"./TextArea-Bvrb384V.js";import{S as le,a as i}from"./Select-DHRp9MK1.js";import{G as d}from"./GroupBox-D5Qy1-1c.js";import"./preload-helper-CJpEdZxZ.js";import"./colorMap-B4H6m5kb.js";import"./designTokens-oNQ9a2iE.js";const re={xs:"cs:text-[0.625rem]",sm:"cs:text-xs",md:"cs:text-sm",lg:"cs:text-base"};function l({children:r,scale:a,color:s="blue",isInvalid:f=!1,isRequired:g=!1,isDisabled:L=!1}){const n=q.useId(),y=`${n}-error`,H=`${n}-help`,{color:ae}=ne()??{color:void 0},S=oe(ae??s),se=q.useMemo(()=>({id:n,errorId:y,helpId:H,isInvalid:f,isRequired:g,isDisabled:L,scale:a,color:S}),[n,y,H,f,g,L,a,S]);return e.jsx(de.Provider,{value:se,children:e.jsx("div",{className:j("cs:flex cs:flex-col",a==="sm"?"cs:gap-0.5":"cs:gap-1"),children:r})})}function te({children:r,className:a}){const s=v("FormField.Label");return e.jsx(ie,{htmlFor:s.id,text:typeof r=="string"?r:"",scale:s.scale,require:s.isRequired,className:j("cs:ml-2",a)})}function ce({children:r,className:a}){const s=v("FormField.Error");return s.isInvalid?e.jsx("p",{id:s.errorId,role:"alert","aria-live":"polite",className:j("cs:text-red-500 cs:dark:text-red-400 cs:font-sans cs:ml-2",re[s.scale??"md"],a),children:r}):null}function pe({children:r,className:a}){const s=v("FormField.Help");return e.jsx("p",{id:s.helpId,className:j("cs:text-gray-500 cs:dark:text-gray-400 cs:font-sans cs:ml-2",re[s.scale??"md"],a),children:r})}function v(r){const a=me();if(!a)throw new Error(`${r} must be used within a FormField`);return a}l.Label=te;l.Error=ce;l.Help=pe;l.__docgenInfo={description:"",methods:[{name:"Label",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: FormFieldLabelProps",optional:!1,type:{name:"FormFieldLabelProps",alias:"FormFieldLabelProps"}}],returns:null},{name:"Error",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: FormFieldErrorProps",optional:!1,type:{name:"FormFieldErrorProps",alias:"FormFieldErrorProps"}}],returns:null},{name:"Help",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: FormFieldHelpProps",optional:!1,type:{name:"FormFieldHelpProps",alias:"FormFieldHelpProps"}}],returns:null}],displayName:"FormField",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},scale:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""},color:{required:!1,tsType:{name:"union",raw:"PresetColor | CustomColor | SemanticColor",elements:[{name:"union",raw:`| "red"
| "orange"
| "amber"
| "yellow"
| "lime"
| "green"
| "emerald"
| "teal"
| "cyan"
| "sky"
| "blue"
| "indigo"
| "violet"
| "purple"
| "fuchsia"
| "pink"
| "rose"
| "slate"
| "gray"
| "zinc"
| "neutral"
| "stone"`,elements:[{name:"literal",value:'"red"'},{name:"literal",value:'"orange"'},{name:"literal",value:'"amber"'},{name:"literal",value:'"yellow"'},{name:"literal",value:'"lime"'},{name:"literal",value:'"green"'},{name:"literal",value:'"emerald"'},{name:"literal",value:'"teal"'},{name:"literal",value:'"cyan"'},{name:"literal",value:'"sky"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"indigo"'},{name:"literal",value:'"violet"'},{name:"literal",value:'"purple"'},{name:"literal",value:'"fuchsia"'},{name:"literal",value:'"pink"'},{name:"literal",value:'"rose"'},{name:"literal",value:'"slate"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"zinc"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"stone"'}]},{name:"CustomColor"},{name:"union",raw:'"success" | "warning" | "error" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'}]}]},description:"",defaultValue:{value:'"blue"',computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const qe={component:l,title:"Form/FormField",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},isInvalid:{control:"boolean"},isRequired:{control:"boolean"},isDisabled:{control:"boolean"}}},m={args:{scale:"md"},render:r=>e.jsxs(l,{...r,children:[e.jsx(l.Label,{children:"メールアドレス"}),e.jsx(o,{type:"email",placeholder:"example@email.com"}),e.jsx(l.Help,{children:"有効なメールアドレスを入力してください"})]})},t={args:{isInvalid:!0,isRequired:!0},render:r=>e.jsxs(l,{...r,children:[e.jsx(l.Label,{children:"ユーザー名"}),e.jsx(o,{placeholder:"ユーザー名を入力"}),e.jsx(l.Error,{children:"ユーザー名は必須です"})]})},c={render:()=>e.jsxs(l,{children:[e.jsx(l.Label,{children:"パスワード"}),e.jsx(o,{type:"password",placeholder:"パスワードを入力"}),e.jsx(l.Help,{children:"8文字以上で、英数字を含めてください"})]})},p={render:()=>e.jsxs(l,{isRequired:!0,children:[e.jsx(l.Label,{children:"名前"}),e.jsx(o,{placeholder:"名前を入力"})]})},u={render:()=>e.jsxs(l,{isDisabled:!0,children:[e.jsx(l.Label,{children:"メールアドレス"}),e.jsx(o,{placeholder:"変更できません"}),e.jsx(l.Help,{children:"このフィールドは無効です"})]})},F={render:()=>e.jsxs(l,{isRequired:!0,children:[e.jsx(l.Label,{children:"コメント"}),e.jsx(ee,{placeholder:"コメントを入力してください",rows:4}),e.jsx(l.Help,{children:"最大500文字まで入力できます"})]})},x={render:()=>e.jsxs(l,{isRequired:!0,children:[e.jsx(l.Label,{children:"カテゴリ"}),e.jsxs(le,{children:[e.jsx(i,{label:"選択してください",value:""}),e.jsx(i,{label:"技術",value:"tech"}),e.jsx(i,{label:"デザイン",value:"design"}),e.jsx(i,{label:"マーケティング",value:"marketing"})]})]})},b={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-2 cs:gap-6",children:[e.jsx(d,{label:"Extra Small (xs)",children:e.jsxs(l,{scale:"xs",isRequired:!0,children:[e.jsx(l.Label,{children:"メールアドレス"}),e.jsx(o,{type:"email",placeholder:"example@email.com"}),e.jsx(l.Help,{children:"有効なメールアドレスを入力"})]})}),e.jsx(d,{label:"Small (sm)",children:e.jsxs(l,{scale:"sm",isRequired:!0,children:[e.jsx(l.Label,{children:"メールアドレス"}),e.jsx(o,{type:"email",placeholder:"example@email.com"}),e.jsx(l.Help,{children:"有効なメールアドレスを入力"})]})}),e.jsx(d,{label:"Standard (md)",children:e.jsxs(l,{scale:"md",isRequired:!0,children:[e.jsx(l.Label,{children:"メールアドレス"}),e.jsx(o,{type:"email",placeholder:"example@email.com"}),e.jsx(l.Help,{children:"有効なメールアドレスを入力"})]})}),e.jsx(d,{label:"Large (lg)",children:e.jsxs(l,{scale:"lg",isRequired:!0,children:[e.jsx(l.Label,{children:"メールアドレス"}),e.jsx(o,{type:"email",placeholder:"example@email.com"}),e.jsx(l.Help,{children:"有効なメールアドレスを入力"})]})})]})},h={render:()=>e.jsxs("div",{className:"cs:space-y-4 cs:max-w-md",children:[e.jsxs(l,{isRequired:!0,children:[e.jsx(l.Label,{children:"名前"}),e.jsx(o,{placeholder:"山田 太郎"})]}),e.jsxs(l,{isRequired:!0,isInvalid:!0,children:[e.jsx(l.Label,{children:"メールアドレス"}),e.jsx(o,{type:"email",placeholder:"example@email.com"}),e.jsx(l.Error,{children:"有効なメールアドレスを入力してください"})]}),e.jsxs(l,{isRequired:!0,children:[e.jsx(l.Label,{children:"カテゴリ"}),e.jsxs(le,{children:[e.jsx(i,{label:"選択してください",value:""}),e.jsx(i,{label:"お問い合わせ",value:"inquiry"}),e.jsx(i,{label:"フィードバック",value:"feedback"}),e.jsx(i,{label:"バグ報告",value:"bug"})]})]}),e.jsxs(l,{children:[e.jsx(l.Label,{children:"メッセージ"}),e.jsx(ee,{placeholder:"メッセージを入力してください",rows:4}),e.jsx(l.Help,{children:"最大1000文字まで入力できます"})]})]})};var R,I,E;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    scale: "md"
  },
  render: args => <FormField {...args}>
      <FormField.Label>メールアドレス</FormField.Label>
      <Input type="email" placeholder="example@email.com" />
      <FormField.Help>有効なメールアドレスを入力してください</FormField.Help>
    </FormField>
}`,...(E=(I=m.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var w,T,k;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    isRequired: true
  },
  render: args => <FormField {...args}>
      <FormField.Label>ユーザー名</FormField.Label>
      <Input placeholder="ユーザー名を入力" />
      <FormField.Error>ユーザー名は必須です</FormField.Error>
    </FormField>
}`,...(k=(T=t.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var C,N,P;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <FormField>
      <FormField.Label>パスワード</FormField.Label>
      <Input type="password" placeholder="パスワードを入力" />
      <FormField.Help>8文字以上で、英数字を含めてください</FormField.Help>
    </FormField>
}`,...(P=(N=c.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var G,O,B;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <FormField isRequired>
      <FormField.Label>名前</FormField.Label>
      <Input placeholder="名前を入力" />
    </FormField>
}`,...(B=(O=p.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var W,D,A;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <FormField isDisabled>
      <FormField.Label>メールアドレス</FormField.Label>
      <Input placeholder="変更できません" />
      <FormField.Help>このフィールドは無効です</FormField.Help>
    </FormField>
}`,...(A=(D=u.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var V,_,$;F.parameters={...F.parameters,docs:{...(V=F.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <FormField isRequired>
      <FormField.Label>コメント</FormField.Label>
      <TextArea placeholder="コメントを入力してください" rows={4} />
      <FormField.Help>最大500文字まで入力できます</FormField.Help>
    </FormField>
}`,...($=(_=F.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var z,M,U;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <FormField isRequired>
      <FormField.Label>カテゴリ</FormField.Label>
      <Select>
        <SelectOption label="選択してください" value="" />
        <SelectOption label="技術" value="tech" />
        <SelectOption label="デザイン" value="design" />
        <SelectOption label="マーケティング" value="marketing" />
      </Select>
    </FormField>
}`,...(U=(M=x.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-2 cs:gap-6">
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
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Re=["Default","WithError","WithHelp","Required","Disabled","WithTextArea","WithSelect","Scales","CompleteForm"];export{h as CompleteForm,m as Default,u as Disabled,p as Required,b as Scales,t as WithError,c as WithHelp,x as WithSelect,F as WithTextArea,Re as __namedExportsOrder,qe as default};
