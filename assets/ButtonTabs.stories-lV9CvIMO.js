"use client";
import{r as u,j as e}from"./iframe-DGUMRchz.js";import{T as d}from"./Tabs-DhcTRNTP.js";import{c as j}from"./clsx-BYFsuUQf.js";import{r as K,c as J,i as Q}from"./colorUtils-D-K_anEj.js";import{L as X}from"./colorContrast-C0ZIkquj.js";import{c as Y,F as Z,d as ee}from"./designTokens-DumaUFqK.js";import{u as te}from"./useUIColor-BVWDqBP4.js";import"./preload-helper-CJpEdZxZ.js";const H=u.createContext(void 0);function M(){const a=u.useContext(H);if(!a)throw new Error("ButtonTabs sub-components must be used within a ButtonTabs component");return a}const ae={xs:"cs:text-[0.625rem] cs:px-2 cs:py-0.5",sm:"cs:text-xs cs:px-3 cs:py-1",md:"cs:text-sm cs:px-4 cs:py-1.5",lg:"cs:text-base cs:px-5 cs:py-2"};function t({children:a,value:n,defaultValue:o="",onChange:l,scale:s,color:i="blue",className:r}){const T=u.useId(),[b,c]=u.useState(o),{color:f}=te()??{color:void 0},m=K(f??i),g=n!==void 0,v=g?n:b,N=u.useCallback(L=>{g||c(L),l==null||l(L)},[g,l]),z=u.useMemo(()=>({activeValue:v,onChange:N,baseId:T,scale:s,color:m}),[v,N,T,s,m]);return e.jsx(H.Provider,{value:z,children:e.jsx("div",{className:j("cs:font-sans cs:text-gray-900 cs:dark:text-gray-300",r),children:a})})}function ne({children:a,className:n}){const o=u.useCallback(l=>{const s=Array.from(l.currentTarget.querySelectorAll('[role="tab"]:not([disabled])')),i=s.indexOf(l.target);if(i===-1)return;let r=null;switch(l.key){case"ArrowRight":r=(i+1)%s.length;break;case"ArrowLeft":r=(i-1+s.length)%s.length;break;case"Home":r=0;break;case"End":r=s.length-1;break}r!==null&&(l.preventDefault(),s[r].focus(),s[r].click())},[]);return e.jsx("div",{role:"tablist",onKeyDown:o,className:j("cs:inline-flex cs:rounded-lg cs:bg-gray-100 cs:dark:bg-gray-800 cs:p-1 cs:gap-1",n),children:a})}function se({children:a,value:n,disabled:o=!1,className:l}){const{activeValue:s,onChange:i,baseId:r,scale:T="md",color:b}=M(),c=s===n,f=J(b),m=Q(b)&&X.has(b)?"cs:text-gray-900":"cs:text-white cs:dark:text-gray-200",g=`${r}-tab-${n}`,v=`${r}-panel-${n}`;return e.jsx("button",{type:"button",role:"tab",id:g,"aria-selected":c,"aria-controls":v,tabIndex:c?0:-1,disabled:o,onClick:()=>!o&&i(n),style:c?f:void 0,className:j("cs:font-medium cs:cursor-pointer cs:whitespace-nowrap cs:rounded-md",ae[T],Y,Z,"cs-focus-visible",ee,c?`cs-btn-tab-active ${m} cs:shadow-sm`:"cs:text-gray-600 cs:dark:text-gray-400 cs:hover:bg-gray-200 cs:dark:hover:bg-gray-700",o&&"cs:opacity-50 cs:cursor-not-allowed",l),children:a})}function re({children:a,value:n,className:o}){const{activeValue:l,baseId:s}=M();if(l!==n)return null;const i=`${s}-tab-${n}`,r=`${s}-panel-${n}`;return e.jsx("div",{role:"tabpanel",id:r,"aria-labelledby":i,className:j("cs:mt-2",o),children:a})}t.List=ne;t.Trigger=se;t.Content=re;t.__docgenInfo={description:"",methods:[{name:"List",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: ButtonTabsListProps",optional:!1,type:{name:"ButtonTabsListProps",alias:"ButtonTabsListProps"}}],returns:null},{name:"Trigger",docblock:null,modifiers:["static"],params:[{name:"{ children, value, disabled = false, className }: ButtonTabsTriggerProps",optional:!1,type:{name:"ButtonTabsTriggerProps",alias:"ButtonTabsTriggerProps"}}],returns:null},{name:"Content",docblock:null,modifiers:["static"],params:[{name:"{ children, value, className }: ButtonTabsContentProps",optional:!1,type:{name:"ButtonTabsContentProps",alias:"ButtonTabsContentProps"}}],returns:null}],displayName:"ButtonTabs",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},scale:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""},color:{required:!1,tsType:{name:"union",raw:"PresetColor | CustomColor | SemanticColor",elements:[{name:"union",raw:`| "red"
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
| "stone"`,elements:[{name:"literal",value:'"red"'},{name:"literal",value:'"orange"'},{name:"literal",value:'"amber"'},{name:"literal",value:'"yellow"'},{name:"literal",value:'"lime"'},{name:"literal",value:'"green"'},{name:"literal",value:'"emerald"'},{name:"literal",value:'"teal"'},{name:"literal",value:'"cyan"'},{name:"literal",value:'"sky"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"indigo"'},{name:"literal",value:'"violet"'},{name:"literal",value:'"purple"'},{name:"literal",value:'"fuchsia"'},{name:"literal",value:'"pink"'},{name:"literal",value:'"rose"'},{name:"literal",value:'"slate"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"zinc"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"stone"'}]},{name:"CustomColor"},{name:"union",raw:'"success" | "warning" | "error" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'}]}]},description:"",defaultValue:{value:'"blue"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const Te={component:t,title:"Navigation/ButtonTabs",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray"]}}},p={args:{defaultValue:"lending",scale:"md"},render:a=>e.jsxs(t,{...a,children:[e.jsxs(t.List,{children:[e.jsx(t.Trigger,{value:"lending",children:"貸出"}),e.jsx(t.Trigger,{value:"return",children:"返却"})]}),e.jsx(t.Content,{value:"lending",children:"貸出画面の内容"}),e.jsx(t.Content,{value:"return",children:"返却画面の内容"})]})},x={render:()=>{const[a,n]=u.useState("tab1");return e.jsxs("div",{className:"cs:space-y-4",children:[e.jsxs(t,{value:a,onChange:n,children:[e.jsxs(t.List,{children:[e.jsx(t.Trigger,{value:"tab1",children:"タブ 1"}),e.jsx(t.Trigger,{value:"tab2",children:"タブ 2"}),e.jsx(t.Trigger,{value:"tab3",children:"タブ 3"})]}),e.jsx(t.Content,{value:"tab1",children:"タブ 1 のコンテンツ"}),e.jsx(t.Content,{value:"tab2",children:"タブ 2 のコンテンツ"}),e.jsx(t.Content,{value:"tab3",children:"タブ 3 のコンテンツ"})]}),e.jsxs("p",{className:"cs:text-sm cs:text-gray-500",children:["選択中: ",a]})]})}},B={render:()=>e.jsx("div",{className:"cs:space-y-4",children:["blue","green","red","amber","purple"].map(a=>e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:a}),e.jsxs(t,{defaultValue:"a",color:a,children:[e.jsxs(t.List,{children:[e.jsx(t.Trigger,{value:"a",children:"タブ A"}),e.jsx(t.Trigger,{value:"b",children:"タブ B"}),e.jsx(t.Trigger,{value:"c",children:"タブ C"})]}),e.jsx(t.Content,{value:"a",children:"コンテンツ A"}),e.jsx(t.Content,{value:"b",children:"コンテンツ B"}),e.jsx(t.Content,{value:"c",children:"コンテンツ C"})]})]},a))})},C={render:()=>e.jsx("div",{className:"cs:space-y-4",children:["xs","sm","md","lg"].map(a=>e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:a}),e.jsxs(t,{defaultValue:"a",scale:a,children:[e.jsxs(t.List,{children:[e.jsx(t.Trigger,{value:"a",children:"タブ A"}),e.jsx(t.Trigger,{value:"b",children:"タブ B"}),e.jsx(t.Trigger,{value:"c",children:"タブ C"})]}),e.jsx(t.Content,{value:"a",children:"コンテンツ A"}),e.jsx(t.Content,{value:"b",children:"コンテンツ B"}),e.jsx(t.Content,{value:"c",children:"コンテンツ C"})]})]},a))})},h={render:()=>e.jsxs(t,{defaultValue:"a",children:[e.jsxs(t.List,{children:[e.jsx(t.Trigger,{value:"a",children:"有効"}),e.jsx(t.Trigger,{value:"b",disabled:!0,children:"無効"}),e.jsx(t.Trigger,{value:"c",children:"有効"})]}),e.jsx(t.Content,{value:"a",children:"タブ A のコンテンツ"}),e.jsx(t.Content,{value:"c",children:"タブ C のコンテンツ"})]})},y={render:()=>e.jsxs("div",{className:"cs:space-y-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"ButtonTabs (ボタン形式)"}),e.jsxs(t,{defaultValue:"a",children:[e.jsxs(t.List,{children:[e.jsx(t.Trigger,{value:"a",children:"貸出"}),e.jsx(t.Trigger,{value:"b",children:"返却"})]}),e.jsx(t.Content,{value:"a",children:"貸出画面"}),e.jsx(t.Content,{value:"b",children:"返却画面"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Tabs (アンダーライン形式)"}),e.jsxs(d,{defaultValue:"a",children:[e.jsxs(d.List,{children:[e.jsx(d.Trigger,{value:"a",children:"貸出"}),e.jsx(d.Trigger,{value:"b",children:"返却"})]}),e.jsx(d.Content,{value:"a",children:"貸出画面"}),e.jsx(d.Content,{value:"b",children:"返却画面"})]})]})]})};var k,V,w;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(w=(V=p.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var S,I,A;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(A=(I=x.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var P,_,$;B.parameters={...B.parameters,docs:{...(P=B.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...($=(_=B.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var q,D,O;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(O=(D=C.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var R,E,U;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <ButtonTabs defaultValue="a">
      <ButtonTabs.List>
        <ButtonTabs.Trigger value="a">有効</ButtonTabs.Trigger>
        <ButtonTabs.Trigger value="b" disabled>無効</ButtonTabs.Trigger>
        <ButtonTabs.Trigger value="c">有効</ButtonTabs.Trigger>
      </ButtonTabs.List>
      <ButtonTabs.Content value="a">タブ A のコンテンツ</ButtonTabs.Content>
      <ButtonTabs.Content value="c">タブ C のコンテンツ</ButtonTabs.Content>
    </ButtonTabs>
}`,...(U=(E=h.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};var G,W,F;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(F=(W=y.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};const me=["Default","Controlled","Colors","Scales","WithDisabled","ComparedWithTabs"];export{B as Colors,y as ComparedWithTabs,x as Controlled,p as Default,C as Scales,h as WithDisabled,me as __namedExportsOrder,Te as default};
