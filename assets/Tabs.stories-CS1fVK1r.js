"use client";
import{r as c,j as e}from"./iframe-Cwvb0Z0D.js";import{c as d}from"./clsx-BYFsuUQf.js";import{i as h}from"./colorUtils-B5Tad61Q.js";import{u as O}from"./useUIColor-BTIPPGSW.js";import{G as y}from"./GroupBox-C2Gx9HxS.js";import"./preload-helper-CJpEdZxZ.js";import"./Label-Dci0iaZ3.js";const M=c.createContext(void 0);function _(){const t=c.useContext(M);if(!t)throw new Error("Tabs sub-components must be used within a Tabs component");return t}const W={red:"cs:border-red-600",orange:"cs:border-orange-600",amber:"cs:border-amber-600",yellow:"cs:border-yellow-600",lime:"cs:border-lime-600",green:"cs:border-green-600",emerald:"cs:border-emerald-600",teal:"cs:border-teal-600",cyan:"cs:border-cyan-600",sky:"cs:border-sky-600",blue:"cs:border-blue-600",indigo:"cs:border-indigo-600",violet:"cs:border-violet-600",purple:"cs:border-purple-600",fuchsia:"cs:border-fuchsia-600",pink:"cs:border-pink-600",rose:"cs:border-rose-600",slate:"cs:border-slate-600",gray:"cs:border-gray-600",zinc:"cs:border-zinc-600",neutral:"cs:border-neutral-600",stone:"cs:border-stone-600"},H={red:"cs:text-red-600",orange:"cs:text-orange-600",amber:"cs:text-amber-600",yellow:"cs:text-yellow-600",lime:"cs:text-lime-600",green:"cs:text-green-600",emerald:"cs:text-emerald-600",teal:"cs:text-teal-600",cyan:"cs:text-cyan-600",sky:"cs:text-sky-600",blue:"cs:text-blue-600",indigo:"cs:text-indigo-600",violet:"cs:text-violet-600",purple:"cs:text-purple-600",fuchsia:"cs:text-fuchsia-600",pink:"cs:text-pink-600",rose:"cs:text-rose-600",slate:"cs:text-slate-600",gray:"cs:text-gray-600",zinc:"cs:text-zinc-600",neutral:"cs:text-neutral-600",stone:"cs:text-stone-600"},F={sm:"cs:text-xs cs:px-3 cs:py-1.5",md:"cs:text-sm cs:px-4 cs:py-2"};function a({children:t,value:r,defaultValue:i="",onChange:n,scale:s,color:o="blue",className:l}){const b=c.useId(),[x,R]=c.useState(i),{color:U}=O()??{color:void 0},C=U??o,v=r!==void 0,f=v?r:x,j=c.useCallback(k=>{v||R(k),n==null||n(k)},[v,n]),K=c.useMemo(()=>({activeValue:f,onChange:j,baseId:b,scale:s,color:C}),[f,j,b,s,C]);return e.jsx(M.Provider,{value:K,children:e.jsx("div",{className:d("cs:font-sans",l),children:t})})}function J({children:t,className:r}){const i=c.useCallback(n=>{const s=Array.from(n.currentTarget.querySelectorAll('[role="tab"]:not([disabled])')),o=s.indexOf(n.target);if(o===-1)return;let l=null;switch(n.key){case"ArrowRight":l=(o+1)%s.length;break;case"ArrowLeft":l=(o-1+s.length)%s.length;break;case"Home":l=0;break;case"End":l=s.length-1;break}l!==null&&(n.preventDefault(),s[l].focus(),s[l].click())},[]);return e.jsx("div",{role:"tablist",onKeyDown:i,className:d("cs:flex cs:border-b cs:border-gray-200 cs:dark:border-gray-700",r),children:t})}function Q({children:t,value:r,disabled:i=!1,className:n}){const s=_(),o=s.activeValue===r,l=`${s.baseId}-tab-${r}`,b=`${s.baseId}-panel-${r}`,x=o?d("cs:border-b-2 cs:-mb-px",h(s.color)&&W[s.color],h(s.color)&&H[s.color],!h(s.color)&&"cs-custom-tab-active"):"cs:text-gray-500 cs:dark:text-gray-400 cs:hover:text-gray-700 cs:dark:hover:text-gray-300";return e.jsx("button",{type:"button",role:"tab",id:l,"aria-selected":o,"aria-controls":b,tabIndex:o?0:-1,disabled:i,onClick:()=>s.onChange(r),className:d("cs:font-medium cs:transition-colors cs:duration-150 cs:outline-none cs:disabled:opacity-50 cs:disabled:cursor-not-allowed",F[s.scale??"md"],x,n),children:t})}function X({children:t,value:r,className:i}){const n=_(),s=n.activeValue===r,o=`${n.baseId}-tab-${r}`,l=`${n.baseId}-panel-${r}`;return s?e.jsx("div",{role:"tabpanel",id:l,"aria-labelledby":o,tabIndex:0,className:d("cs:py-4",i),children:t}):null}a.List=J;a.Trigger=Q;a.Content=X;a.__docgenInfo={description:"",methods:[{name:"List",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: TabsListProps",optional:!1,type:{name:"TabsListProps",alias:"TabsListProps"}}],returns:null},{name:"Trigger",docblock:null,modifiers:["static"],params:[{name:"{ children, value, disabled = false, className }: TabsTriggerProps",optional:!1,type:{name:"TabsTriggerProps",alias:"TabsTriggerProps"}}],returns:null},{name:"Content",docblock:null,modifiers:["static"],params:[{name:"{ children, value, className }: TabsContentProps",optional:!1,type:{name:"TabsContentProps",alias:"TabsContentProps"}}],returns:null}],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},scale:{required:!1,tsType:{name:"union",raw:'"sm" | "md"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'}]},description:""},color:{required:!1,tsType:{name:"union",raw:"PresetColor | CustomColor",elements:[{name:"union",raw:`| "red"
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
| "stone"`,elements:[{name:"literal",value:'"red"'},{name:"literal",value:'"orange"'},{name:"literal",value:'"amber"'},{name:"literal",value:'"yellow"'},{name:"literal",value:'"lime"'},{name:"literal",value:'"green"'},{name:"literal",value:'"emerald"'},{name:"literal",value:'"teal"'},{name:"literal",value:'"cyan"'},{name:"literal",value:'"sky"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"indigo"'},{name:"literal",value:'"violet"'},{name:"literal",value:'"purple"'},{name:"literal",value:'"fuchsia"'},{name:"literal",value:'"pink"'},{name:"literal",value:'"rose"'},{name:"literal",value:'"slate"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"zinc"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"stone"'}]},{name:"CustomColor"}]},description:"",defaultValue:{value:'"blue"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const ne={component:a,title:"Navigation/Tabs",tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["red","orange","amber","green","blue","indigo","violet","purple","pink","gray"]},scale:{control:{type:"radio"},options:["sm","md"]}}},u={render:()=>e.jsxs(a,{defaultValue:"account",children:[e.jsxs(a.List,{children:[e.jsx(a.Trigger,{value:"account",children:"アカウント"}),e.jsx(a.Trigger,{value:"password",children:"パスワード"}),e.jsx(a.Trigger,{value:"notifications",children:"通知"})]}),e.jsx(a.Content,{value:"account",children:e.jsx("p",{className:"cs:text-gray-700 cs:dark:text-gray-300",children:"アカウント設定を管理します。名前、メールアドレスなどを変更できます。"})}),e.jsx(a.Content,{value:"password",children:e.jsx("p",{className:"cs:text-gray-700 cs:dark:text-gray-300",children:"パスワードを変更します。セキュリティのため、定期的な変更をお勧めします。"})}),e.jsx(a.Content,{value:"notifications",children:e.jsx("p",{className:"cs:text-gray-700 cs:dark:text-gray-300",children:"通知設定をカスタマイズします。メール通知やプッシュ通知を制御できます。"})})]})},g={render:()=>{const[t,r]=c.useState("tab1");return e.jsxs("div",{children:[e.jsxs(a,{value:t,onChange:r,children:[e.jsxs(a.List,{children:[e.jsx(a.Trigger,{value:"tab1",children:"タブ 1"}),e.jsx(a.Trigger,{value:"tab2",children:"タブ 2"}),e.jsx(a.Trigger,{value:"tab3",children:"タブ 3"})]}),e.jsx(a.Content,{value:"tab1",children:"タブ1のコンテンツ"}),e.jsx(a.Content,{value:"tab2",children:"タブ2のコンテンツ"}),e.jsx(a.Content,{value:"tab3",children:"タブ3のコンテンツ"})]}),e.jsxs("p",{className:"cs:mt-2 cs:text-sm cs:text-gray-500",children:["現在のタブ: ",t]})]})}},m={render:()=>e.jsx("div",{className:"cs:space-y-6",children:["blue","red","green","purple","amber"].map(t=>e.jsx(y,{label:t,children:e.jsxs(a,{defaultValue:"tab1",color:t,children:[e.jsxs(a.List,{children:[e.jsx(a.Trigger,{value:"tab1",children:"タブ 1"}),e.jsx(a.Trigger,{value:"tab2",children:"タブ 2"}),e.jsx(a.Trigger,{value:"tab3",children:"タブ 3"})]}),e.jsx(a.Content,{value:"tab1",children:e.jsxs("span",{className:"cs:text-gray-600 cs:dark:text-gray-400",children:[t," テーマのコンテンツ"]})}),e.jsx(a.Content,{value:"tab2",children:"タブ 2"}),e.jsx(a.Content,{value:"tab3",children:"タブ 3"})]})},t))})},T={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-2 cs:gap-6",children:[e.jsx(y,{label:"Standard (md)",children:e.jsxs(a,{defaultValue:"tab1",scale:"md",children:[e.jsxs(a.List,{children:[e.jsx(a.Trigger,{value:"tab1",children:"タブ 1"}),e.jsx(a.Trigger,{value:"tab2",children:"タブ 2"})]}),e.jsx(a.Content,{value:"tab1",children:"Standard サイズ"}),e.jsx(a.Content,{value:"tab2",children:"タブ 2"})]})}),e.jsx(y,{label:"Small (sm)",children:e.jsxs(a,{defaultValue:"tab1",scale:"sm",children:[e.jsxs(a.List,{children:[e.jsx(a.Trigger,{value:"tab1",children:"タブ 1"}),e.jsx(a.Trigger,{value:"tab2",children:"タブ 2"})]}),e.jsx(a.Content,{value:"tab1",children:"Small サイズ"}),e.jsx(a.Content,{value:"tab2",children:"タブ 2"})]})})]})},p={render:()=>e.jsxs(a,{defaultValue:"tab1",children:[e.jsxs(a.List,{children:[e.jsx(a.Trigger,{value:"tab1",children:"有効"}),e.jsx(a.Trigger,{value:"tab2",disabled:!0,children:"無効"}),e.jsx(a.Trigger,{value:"tab3",children:"有効"})]}),e.jsx(a.Content,{value:"tab1",children:"有効なタブのコンテンツ"}),e.jsx(a.Content,{value:"tab2",children:"無効なタブのコンテンツ"}),e.jsx(a.Content,{value:"tab3",children:"3番目のタブのコンテンツ"})]})};var L,N,w;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="account">
      <Tabs.List>
        <Tabs.Trigger value="account">アカウント</Tabs.Trigger>
        <Tabs.Trigger value="password">パスワード</Tabs.Trigger>
        <Tabs.Trigger value="notifications">通知</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">
        <p className="cs:text-gray-700 cs:dark:text-gray-300">
          アカウント設定を管理します。名前、メールアドレスなどを変更できます。
        </p>
      </Tabs.Content>
      <Tabs.Content value="password">
        <p className="cs:text-gray-700 cs:dark:text-gray-300">
          パスワードを変更します。セキュリティのため、定期的な変更をお勧めします。
        </p>
      </Tabs.Content>
      <Tabs.Content value="notifications">
        <p className="cs:text-gray-700 cs:dark:text-gray-300">
          通知設定をカスタマイズします。メール通知やプッシュ通知を制御できます。
        </p>
      </Tabs.Content>
    </Tabs>
}`,...(w=(N=u.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var S,I,V;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(V=(I=g.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var P,q,G;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(G=(q=m.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var $,B,D;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-2 cs:gap-6">
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
    </div>
}`,...(D=(B=T.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var z,A,E;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(E=(A=p.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};const le=["Default","Controlled","Colors","Scales","WithDisabled"];export{m as Colors,g as Controlled,u as Default,T as Scales,p as WithDisabled,le as __namedExportsOrder,ne as default};
