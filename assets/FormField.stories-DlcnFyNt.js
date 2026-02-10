"use client";
import{r as q,j as e}from"./iframe-Cwvb0Z0D.js";import{c as h}from"./clsx-BYFsuUQf.js";import{L as oe}from"./Label-Dci0iaZ3.js";import{u as ie}from"./useUIColor-BTIPPGSW.js";import{F as ne,u as de}from"./FormFieldContext-DaikLai8.js";import{I as o}from"./Input-CrMi6TAl.js";import{T as ee}from"./TextArea-BzEa7pZQ.js";import{S as le,a as i}from"./Select-CtFfHfc2.js";import{G as H}from"./GroupBox-C2Gx9HxS.js";import"./preload-helper-CJpEdZxZ.js";import"./colorUtils-B5Tad61Q.js";import"./colorMap-EN3et11X.js";const re={sm:"cs:text-xs",md:"cs:text-sm"};function l({children:r,scale:a,color:s="blue",isInvalid:v=!1,isRequired:f=!1,isDisabled:L=!1}){const n=q.useId(),g=`${n}-error`,y=`${n}-help`,{color:ae}=ie()??{color:void 0},S=ae??s,se=q.useMemo(()=>({id:n,errorId:g,helpId:y,isInvalid:v,isRequired:f,isDisabled:L,scale:a,color:S}),[n,g,y,v,f,L,a,S]);return e.jsx(ne.Provider,{value:se,children:e.jsx("div",{className:h("cs:flex cs:flex-col",a==="sm"?"cs:gap-0.5":"cs:gap-1"),children:r})})}function me({children:r,className:a}){const s=j("FormField.Label");return e.jsx(oe,{htmlFor:s.id,text:typeof r=="string"?r:"",scale:s.scale,require:s.isRequired,className:h("cs:ml-2",a)})}function te({children:r,className:a}){const s=j("FormField.Error");return s.isInvalid?e.jsx("p",{id:s.errorId,role:"alert","aria-live":"polite",className:h("cs:text-red-500 cs:dark:text-red-400 cs:font-sans cs:ml-2",re[s.scale??"md"],a),children:r}):null}function ce({children:r,className:a}){const s=j("FormField.Help");return e.jsx("p",{id:s.helpId,className:h("cs:text-gray-500 cs:dark:text-gray-400 cs:font-sans cs:ml-2",re[s.scale??"md"],a),children:r})}function j(r){const a=de();if(!a)throw new Error(`${r} must be used within a FormField`);return a}l.Label=me;l.Error=te;l.Help=ce;l.__docgenInfo={description:"",methods:[{name:"Label",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: FormFieldLabelProps",optional:!1,type:{name:"FormFieldLabelProps",alias:"FormFieldLabelProps"}}],returns:null},{name:"Error",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: FormFieldErrorProps",optional:!1,type:{name:"FormFieldErrorProps",alias:"FormFieldErrorProps"}}],returns:null},{name:"Help",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: FormFieldHelpProps",optional:!1,type:{name:"FormFieldHelpProps",alias:"FormFieldHelpProps"}}],returns:null}],displayName:"FormField",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},scale:{required:!1,tsType:{name:"union",raw:'"sm" | "md"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'}]},description:""},color:{required:!1,tsType:{name:"union",raw:"PresetColor | CustomColor",elements:[{name:"union",raw:`| "red"
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
| "stone"`,elements:[{name:"literal",value:'"red"'},{name:"literal",value:'"orange"'},{name:"literal",value:'"amber"'},{name:"literal",value:'"yellow"'},{name:"literal",value:'"lime"'},{name:"literal",value:'"green"'},{name:"literal",value:'"emerald"'},{name:"literal",value:'"teal"'},{name:"literal",value:'"cyan"'},{name:"literal",value:'"sky"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"indigo"'},{name:"literal",value:'"violet"'},{name:"literal",value:'"purple"'},{name:"literal",value:'"fuchsia"'},{name:"literal",value:'"pink"'},{name:"literal",value:'"rose"'},{name:"literal",value:'"slate"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"zinc"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"stone"'}]},{name:"CustomColor"}]},description:"",defaultValue:{value:'"blue"',computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Se={component:l,title:"Form/FormField",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["sm","md"]},isInvalid:{control:"boolean"},isRequired:{control:"boolean"},isDisabled:{control:"boolean"}}},d={args:{scale:"md"},render:r=>e.jsxs(l,{...r,children:[e.jsx(l.Label,{children:"メールアドレス"}),e.jsx(o,{type:"email",placeholder:"example@email.com"}),e.jsx(l.Help,{children:"有効なメールアドレスを入力してください"})]})},m={args:{isInvalid:!0,isRequired:!0},render:r=>e.jsxs(l,{...r,children:[e.jsx(l.Label,{children:"ユーザー名"}),e.jsx(o,{placeholder:"ユーザー名を入力"}),e.jsx(l.Error,{children:"ユーザー名は必須です"})]})},t={render:()=>e.jsxs(l,{children:[e.jsx(l.Label,{children:"パスワード"}),e.jsx(o,{type:"password",placeholder:"パスワードを入力"}),e.jsx(l.Help,{children:"8文字以上で、英数字を含めてください"})]})},c={render:()=>e.jsxs(l,{isRequired:!0,children:[e.jsx(l.Label,{children:"名前"}),e.jsx(o,{placeholder:"名前を入力"})]})},p={render:()=>e.jsxs(l,{isDisabled:!0,children:[e.jsx(l.Label,{children:"メールアドレス"}),e.jsx(o,{placeholder:"変更できません"}),e.jsx(l.Help,{children:"このフィールドは無効です"})]})},u={render:()=>e.jsxs(l,{isRequired:!0,children:[e.jsx(l.Label,{children:"コメント"}),e.jsx(ee,{placeholder:"コメントを入力してください",rows:4}),e.jsx(l.Help,{children:"最大500文字まで入力できます"})]})},F={render:()=>e.jsxs(l,{isRequired:!0,children:[e.jsx(l.Label,{children:"カテゴリ"}),e.jsxs(le,{children:[e.jsx(i,{label:"選択してください",value:""}),e.jsx(i,{label:"技術",value:"tech"}),e.jsx(i,{label:"デザイン",value:"design"}),e.jsx(i,{label:"マーケティング",value:"marketing"})]})]})},x={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-2 cs:gap-6",children:[e.jsx(H,{label:"Standard (md)",children:e.jsxs(l,{scale:"md",isRequired:!0,children:[e.jsx(l.Label,{children:"メールアドレス"}),e.jsx(o,{type:"email",placeholder:"example@email.com"}),e.jsx(l.Help,{children:"有効なメールアドレスを入力"})]})}),e.jsx(H,{label:"Small (sm)",children:e.jsxs(l,{scale:"sm",isRequired:!0,children:[e.jsx(l.Label,{children:"メールアドレス"}),e.jsx(o,{type:"email",placeholder:"example@email.com"}),e.jsx(l.Help,{children:"有効なメールアドレスを入力"})]})})]})},b={render:()=>e.jsxs("div",{className:"cs:space-y-4 cs:max-w-md",children:[e.jsxs(l,{isRequired:!0,children:[e.jsx(l.Label,{children:"名前"}),e.jsx(o,{placeholder:"山田 太郎"})]}),e.jsxs(l,{isRequired:!0,isInvalid:!0,children:[e.jsx(l.Label,{children:"メールアドレス"}),e.jsx(o,{type:"email",placeholder:"example@email.com"}),e.jsx(l.Error,{children:"有効なメールアドレスを入力してください"})]}),e.jsxs(l,{isRequired:!0,children:[e.jsx(l.Label,{children:"カテゴリ"}),e.jsxs(le,{children:[e.jsx(i,{label:"選択してください",value:""}),e.jsx(i,{label:"お問い合わせ",value:"inquiry"}),e.jsx(i,{label:"フィードバック",value:"feedback"}),e.jsx(i,{label:"バグ報告",value:"bug"})]})]}),e.jsxs(l,{children:[e.jsx(l.Label,{children:"メッセージ"}),e.jsx(ee,{placeholder:"メッセージを入力してください",rows:4}),e.jsx(l.Help,{children:"最大1000文字まで入力できます"})]})]})};var I,R,E;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    scale: "md"
  },
  render: args => <FormField {...args}>
      <FormField.Label>メールアドレス</FormField.Label>
      <Input type="email" placeholder="example@email.com" />
      <FormField.Help>有効なメールアドレスを入力してください</FormField.Help>
    </FormField>
}`,...(E=(R=d.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var w,T,k;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    isRequired: true
  },
  render: args => <FormField {...args}>
      <FormField.Label>ユーザー名</FormField.Label>
      <Input placeholder="ユーザー名を入力" />
      <FormField.Error>ユーザー名は必須です</FormField.Error>
    </FormField>
}`,...(k=(T=m.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var N,C,P;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <FormField>
      <FormField.Label>パスワード</FormField.Label>
      <Input type="password" placeholder="パスワードを入力" />
      <FormField.Help>8文字以上で、英数字を含めてください</FormField.Help>
    </FormField>
}`,...(P=(C=t.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var O,W,D;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <FormField isRequired>
      <FormField.Label>名前</FormField.Label>
      <Input placeholder="名前を入力" />
    </FormField>
}`,...(D=(W=c.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var G,A,B;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <FormField isDisabled>
      <FormField.Label>メールアドレス</FormField.Label>
      <Input placeholder="変更できません" />
      <FormField.Help>このフィールドは無効です</FormField.Help>
    </FormField>
}`,...(B=(A=p.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var V,_,$;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <FormField isRequired>
      <FormField.Label>コメント</FormField.Label>
      <TextArea placeholder="コメントを入力してください" rows={4} />
      <FormField.Help>最大500文字まで入力できます</FormField.Help>
    </FormField>
}`,...($=(_=u.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var z,M,U;F.parameters={...F.parameters,docs:{...(z=F.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <FormField isRequired>
      <FormField.Label>カテゴリ</FormField.Label>
      <Select>
        <SelectOption label="選択してください" value="" />
        <SelectOption label="技術" value="tech" />
        <SelectOption label="デザイン" value="design" />
        <SelectOption label="マーケティング" value="marketing" />
      </Select>
    </FormField>
}`,...(U=(M=F.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var J,K,Q;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-2 cs:gap-6">
      <GroupBox label="Standard (md)">
        <FormField scale="md" isRequired>
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
    </div>
}`,...(Q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const qe=["Default","WithError","WithHelp","Required","Disabled","WithTextArea","WithSelect","Scales","CompleteForm"];export{b as CompleteForm,d as Default,p as Disabled,c as Required,x as Scales,m as WithError,t as WithHelp,F as WithSelect,u as WithTextArea,qe as __namedExportsOrder,Se as default};
