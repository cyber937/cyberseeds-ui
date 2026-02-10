"use client";
import{r as c,j as e}from"./iframe-DszvCNP2.js";import{c as b}from"./clsx-BYFsuUQf.js";import{r as F,a as C}from"./colorUtils-BF1Ih5IA.js";import{c as K,F as W}from"./designTokens-oNQ9a2iE.js";import{u as H}from"./useUIColor-_6l39SGF.js";import{G as d}from"./GroupBox-D5Qy1-1c.js";import"./preload-helper-CJpEdZxZ.js";import"./Label-DBOsNz8O.js";const _=c.createContext(void 0);function R(){const s=c.useContext(_);if(!s)throw new Error("Tabs sub-components must be used within a Tabs component");return s}const J={red:"cs:border-red-600 cs:dark:border-red-400",orange:"cs:border-orange-600 cs:dark:border-orange-400",amber:"cs:border-amber-600 cs:dark:border-amber-400",yellow:"cs:border-yellow-600 cs:dark:border-yellow-400",lime:"cs:border-lime-600 cs:dark:border-lime-400",green:"cs:border-green-600 cs:dark:border-green-400",emerald:"cs:border-emerald-600 cs:dark:border-emerald-400",teal:"cs:border-teal-600 cs:dark:border-teal-400",cyan:"cs:border-cyan-600 cs:dark:border-cyan-400",sky:"cs:border-sky-600 cs:dark:border-sky-400",blue:"cs:border-blue-600 cs:dark:border-blue-400",indigo:"cs:border-indigo-600 cs:dark:border-indigo-400",violet:"cs:border-violet-600 cs:dark:border-violet-400",purple:"cs:border-purple-600 cs:dark:border-purple-400",fuchsia:"cs:border-fuchsia-600 cs:dark:border-fuchsia-400",pink:"cs:border-pink-600 cs:dark:border-pink-400",rose:"cs:border-rose-600 cs:dark:border-rose-400",slate:"cs:border-slate-600 cs:dark:border-slate-400",gray:"cs:border-gray-600 cs:dark:border-gray-400",zinc:"cs:border-zinc-600 cs:dark:border-zinc-400",neutral:"cs:border-neutral-600 cs:dark:border-neutral-400",stone:"cs:border-stone-600 cs:dark:border-stone-400"},Q={red:"cs:text-red-600 cs:dark:text-red-400",orange:"cs:text-orange-600 cs:dark:text-orange-400",amber:"cs:text-amber-600 cs:dark:text-amber-400",yellow:"cs:text-yellow-600 cs:dark:text-yellow-400",lime:"cs:text-lime-600 cs:dark:text-lime-400",green:"cs:text-green-600 cs:dark:text-green-400",emerald:"cs:text-emerald-600 cs:dark:text-emerald-400",teal:"cs:text-teal-600 cs:dark:text-teal-400",cyan:"cs:text-cyan-600 cs:dark:text-cyan-400",sky:"cs:text-sky-600 cs:dark:text-sky-400",blue:"cs:text-blue-600 cs:dark:text-blue-400",indigo:"cs:text-indigo-600 cs:dark:text-indigo-400",violet:"cs:text-violet-600 cs:dark:text-violet-400",purple:"cs:text-purple-600 cs:dark:text-purple-400",fuchsia:"cs:text-fuchsia-600 cs:dark:text-fuchsia-400",pink:"cs:text-pink-600 cs:dark:text-pink-400",rose:"cs:text-rose-600 cs:dark:text-rose-400",slate:"cs:text-slate-600 cs:dark:text-slate-400",gray:"cs:text-gray-600 cs:dark:text-gray-400",zinc:"cs:text-zinc-600 cs:dark:text-zinc-400",neutral:"cs:text-neutral-600 cs:dark:text-neutral-400",stone:"cs:text-stone-600 cs:dark:text-stone-400"},X={xs:"cs:text-[0.625rem] cs:px-2 cs:py-1",sm:"cs:text-xs cs:px-3 cs:py-1.5",md:"cs:text-sm cs:px-4 cs:py-2",lg:"cs:text-base cs:px-5 cs:py-2.5"};function a({children:s,value:t,defaultValue:i="",onChange:n,scale:r,color:o="blue",className:l}){const u=c.useId(),[v,M]=c.useState(i),{color:O}=H()??{color:void 0},y=F(O??o),h=t!==void 0,k=h?t:v,f=c.useCallback(j=>{h||M(j),n==null||n(j)},[h,n]),U=c.useMemo(()=>({activeValue:k,onChange:f,baseId:u,scale:r,color:y}),[k,f,u,r,y]);return e.jsx(_.Provider,{value:U,children:e.jsx("div",{className:b("cs:font-sans",l),children:s})})}function Y({children:s,className:t}){const i=c.useCallback(n=>{const r=Array.from(n.currentTarget.querySelectorAll('[role="tab"]:not([disabled])')),o=r.indexOf(n.target);if(o===-1)return;let l=null;switch(n.key){case"ArrowRight":l=(o+1)%r.length;break;case"ArrowLeft":l=(o-1+r.length)%r.length;break;case"Home":l=0;break;case"End":l=r.length-1;break}l!==null&&(n.preventDefault(),r[l].focus(),r[l].click())},[]);return e.jsx("div",{role:"tablist",onKeyDown:i,className:b("cs:flex cs:border-b cs:border-gray-200 cs:dark:border-gray-700",t),children:s})}function Z({children:s,value:t,disabled:i=!1,className:n}){const r=R(),o=r.activeValue===t,l=`${r.baseId}-tab-${t}`,u=`${r.baseId}-panel-${t}`,v=o?b("cs:border-b-2 cs:-mb-px",C(r.color)&&J[r.color],C(r.color)&&Q[r.color],!C(r.color)&&"cs-custom-tab-active"):"cs:text-gray-500 cs:dark:text-gray-400 cs:hover:text-gray-700 cs:dark:hover:text-gray-300";return e.jsx("button",{type:"button",role:"tab",id:l,"aria-selected":o,"aria-controls":u,tabIndex:o?0:-1,disabled:i,onClick:()=>r.onChange(t),className:b(`cs:font-medium ${K} ${W} cs:disabled:opacity-50 cs:disabled:cursor-not-allowed`,X[r.scale??"md"],v,n),children:s})}function ee({children:s,value:t,className:i}){const n=R(),r=n.activeValue===t,o=`${n.baseId}-tab-${t}`,l=`${n.baseId}-panel-${t}`;return r?e.jsx("div",{role:"tabpanel",id:l,"aria-labelledby":o,tabIndex:0,className:b("cs:py-4",i),children:s}):null}a.List=Y;a.Trigger=Z;a.Content=ee;a.__docgenInfo={description:"",methods:[{name:"List",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: TabsListProps",optional:!1,type:{name:"TabsListProps",alias:"TabsListProps"}}],returns:null},{name:"Trigger",docblock:null,modifiers:["static"],params:[{name:"{ children, value, disabled = false, className }: TabsTriggerProps",optional:!1,type:{name:"TabsTriggerProps",alias:"TabsTriggerProps"}}],returns:null},{name:"Content",docblock:null,modifiers:["static"],params:[{name:"{ children, value, className }: TabsContentProps",optional:!1,type:{name:"TabsContentProps",alias:"TabsContentProps"}}],returns:null}],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},scale:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""},color:{required:!1,tsType:{name:"union",raw:"PresetColor | CustomColor | SemanticColor",elements:[{name:"union",raw:`| "red"
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
| "stone"`,elements:[{name:"literal",value:'"red"'},{name:"literal",value:'"orange"'},{name:"literal",value:'"amber"'},{name:"literal",value:'"yellow"'},{name:"literal",value:'"lime"'},{name:"literal",value:'"green"'},{name:"literal",value:'"emerald"'},{name:"literal",value:'"teal"'},{name:"literal",value:'"cyan"'},{name:"literal",value:'"sky"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"indigo"'},{name:"literal",value:'"violet"'},{name:"literal",value:'"purple"'},{name:"literal",value:'"fuchsia"'},{name:"literal",value:'"pink"'},{name:"literal",value:'"rose"'},{name:"literal",value:'"slate"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"zinc"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"stone"'}]},{name:"CustomColor"},{name:"union",raw:'"success" | "warning" | "error" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'}]}]},description:"",defaultValue:{value:'"blue"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const ie={component:a,title:"Navigation/Tabs",tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["red","orange","amber","green","blue","indigo","violet","purple","pink","gray"]},scale:{control:{type:"radio"},options:["xs","sm","md","lg"]}}},g={render:()=>e.jsxs(a,{defaultValue:"account",children:[e.jsxs(a.List,{children:[e.jsx(a.Trigger,{value:"account",children:"アカウント"}),e.jsx(a.Trigger,{value:"password",children:"パスワード"}),e.jsx(a.Trigger,{value:"notifications",children:"通知"})]}),e.jsx(a.Content,{value:"account",children:e.jsx("p",{className:"cs:text-gray-700 cs:dark:text-gray-400",children:"アカウント設定を管理します。名前、メールアドレスなどを変更できます。"})}),e.jsx(a.Content,{value:"password",children:e.jsx("p",{className:"cs:text-gray-700 cs:dark:text-gray-400",children:"パスワードを変更します。セキュリティのため、定期的な変更をお勧めします。"})}),e.jsx(a.Content,{value:"notifications",children:e.jsx("p",{className:"cs:text-gray-700 cs:dark:text-gray-400",children:"通知設定をカスタマイズします。メール通知やプッシュ通知を制御できます。"})})]})},T={render:()=>{const[s,t]=c.useState("tab1");return e.jsxs("div",{children:[e.jsxs(a,{value:s,onChange:t,children:[e.jsxs(a.List,{children:[e.jsx(a.Trigger,{value:"tab1",children:"タブ 1"}),e.jsx(a.Trigger,{value:"tab2",children:"タブ 2"}),e.jsx(a.Trigger,{value:"tab3",children:"タブ 3"})]}),e.jsx(a.Content,{value:"tab1",children:"タブ1のコンテンツ"}),e.jsx(a.Content,{value:"tab2",children:"タブ2のコンテンツ"}),e.jsx(a.Content,{value:"tab3",children:"タブ3のコンテンツ"})]}),e.jsxs("p",{className:"cs:mt-2 cs:text-sm cs:text-gray-500",children:["現在のタブ: ",s]})]})}},m={render:()=>e.jsx("div",{className:"cs:space-y-6",children:["blue","red","green","purple","amber"].map(s=>e.jsx(d,{label:s,children:e.jsxs(a,{defaultValue:"tab1",color:s,children:[e.jsxs(a.List,{children:[e.jsx(a.Trigger,{value:"tab1",children:"タブ 1"}),e.jsx(a.Trigger,{value:"tab2",children:"タブ 2"}),e.jsx(a.Trigger,{value:"tab3",children:"タブ 3"})]}),e.jsx(a.Content,{value:"tab1",children:e.jsxs("span",{className:"cs:text-gray-600 cs:dark:text-gray-400",children:[s," テーマのコンテンツ"]})}),e.jsx(a.Content,{value:"tab2",children:"タブ 2"}),e.jsx(a.Content,{value:"tab3",children:"タブ 3"})]})},s))})},x={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-2 cs:gap-6",children:[e.jsx(d,{label:"Extra Small (xs)",children:e.jsxs(a,{defaultValue:"tab1",scale:"xs",children:[e.jsxs(a.List,{children:[e.jsx(a.Trigger,{value:"tab1",children:"タブ 1"}),e.jsx(a.Trigger,{value:"tab2",children:"タブ 2"})]}),e.jsx(a.Content,{value:"tab1",children:"Extra Small サイズ"}),e.jsx(a.Content,{value:"tab2",children:"タブ 2"})]})}),e.jsx(d,{label:"Small (sm)",children:e.jsxs(a,{defaultValue:"tab1",scale:"sm",children:[e.jsxs(a.List,{children:[e.jsx(a.Trigger,{value:"tab1",children:"タブ 1"}),e.jsx(a.Trigger,{value:"tab2",children:"タブ 2"})]}),e.jsx(a.Content,{value:"tab1",children:"Small サイズ"}),e.jsx(a.Content,{value:"tab2",children:"タブ 2"})]})}),e.jsx(d,{label:"Standard (md)",children:e.jsxs(a,{defaultValue:"tab1",scale:"md",children:[e.jsxs(a.List,{children:[e.jsx(a.Trigger,{value:"tab1",children:"タブ 1"}),e.jsx(a.Trigger,{value:"tab2",children:"タブ 2"})]}),e.jsx(a.Content,{value:"tab1",children:"Standard サイズ"}),e.jsx(a.Content,{value:"tab2",children:"タブ 2"})]})}),e.jsx(d,{label:"Large (lg)",children:e.jsxs(a,{defaultValue:"tab1",scale:"lg",children:[e.jsxs(a.List,{children:[e.jsx(a.Trigger,{value:"tab1",children:"タブ 1"}),e.jsx(a.Trigger,{value:"tab2",children:"タブ 2"})]}),e.jsx(a.Content,{value:"tab1",children:"Large サイズ"}),e.jsx(a.Content,{value:"tab2",children:"タブ 2"})]})})]})},p={render:()=>e.jsxs(a,{defaultValue:"tab1",children:[e.jsxs(a.List,{children:[e.jsx(a.Trigger,{value:"tab1",children:"有効"}),e.jsx(a.Trigger,{value:"tab2",disabled:!0,children:"無効"}),e.jsx(a.Trigger,{value:"tab3",children:"有効"})]}),e.jsx(a.Content,{value:"tab1",children:"有効なタブのコンテンツ"}),e.jsx(a.Content,{value:"tab2",children:"無効なタブのコンテンツ"}),e.jsx(a.Content,{value:"tab3",children:"3番目のタブのコンテンツ"})]})};var L,N,w;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(w=(N=g.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var S,V,I;T.parameters={...T.parameters,docs:{...(S=T.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(I=(V=T.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var G,P,B;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(B=(P=m.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var $,E,q;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-2 cs:gap-6">
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
}`,...(q=(E=x.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var z,A,D;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(D=(A=p.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const de=["Default","Controlled","Colors","Scales","WithDisabled"];export{m as Colors,T as Controlled,g as Default,x as Scales,p as WithDisabled,de as __namedExportsOrder,ie as default};
