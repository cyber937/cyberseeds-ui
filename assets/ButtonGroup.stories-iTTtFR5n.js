"use client";
import{r as o,j as e}from"./iframe-DGUMRchz.js";import{c as K}from"./clsx-BYFsuUQf.js";import{r as X,c as Y,i as Z}from"./colorUtils-D-K_anEj.js";import{L as ee}from"./colorContrast-C0ZIkquj.js";import{c as te,F as re,d as ae}from"./designTokens-DumaUFqK.js";import{u as ne}from"./useUIColor-BVWDqBP4.js";import"./preload-helper-CJpEdZxZ.js";const W=o.createContext(void 0);function se(){const r=o.useContext(W);if(!r)throw new Error("ButtonGroup.Item must be used within a ButtonGroup component");return r}const le={xs:"cs:px-2 cs:py-0.5 cs:text-[0.625rem]",sm:"cs:px-3 cs:py-1 cs:text-xs",md:"cs:px-4 cs:py-1.5 cs:text-sm",lg:"cs:px-5 cs:py-2 cs:text-base"};function S(r){return r?new Set(Array.isArray(r)?r:[r]):new Set}function t({children:r,value:l,defaultValue:m,onChange:c,multiple:a=!1,color:i="blue",scale:p="md",className:b}){const[G,j]=o.useState(()=>S(m)),{color:$}=ne()??{color:void 0},w=X($??i),h=l!==void 0,v=h?S(l):G,C=o.useCallback(s=>{let n;a?(n=new Set(v),n.has(s)?n.delete(s):n.add(s)):n=new Set([s]),h||j(n);const d=a?Array.from(n):s;c==null||c(d)},[a,v,h,c]),J=o.useMemo(()=>({selectedValues:v,onSelect:C,scale:p,color:w,multiple:a}),[v,C,p,w,a]),Q=o.useCallback(s=>{if(a)return;const n=Array.from(s.currentTarget.querySelectorAll('button[role="radio"]:not([disabled])')),d=n.indexOf(s.target);if(d===-1)return;let u=null;switch(s.key){case"ArrowRight":u=(d+1)%n.length;break;case"ArrowLeft":u=(d-1+n.length)%n.length;break;case"Home":u=0;break;case"End":u=n.length-1;break}u!==null&&(s.preventDefault(),n[u].focus(),n[u].click())},[a]);return e.jsx(W.Provider,{value:J,children:e.jsx("div",{role:a?"group":"radiogroup",onKeyDown:Q,className:K("cs:inline-flex cs:font-sans",b),children:r})})}function oe({children:r,value:l,disabled:m=!1,className:c}){const a=se(),i=a.selectedValues.has(l),p=Y(a.color),G=`cs-btn-primary ${Z(a.color)&&ee.has(a.color)?"cs:text-gray-900":"cs:text-white cs:dark:text-gray-200"}`;return e.jsx("button",{type:"button",role:a.multiple?"checkbox":"radio","aria-checked":i,disabled:m,tabIndex:a.multiple||i?0:-1,onClick:()=>!m&&a.onSelect(l),style:i?p:void 0,className:K("cs:font-medium cs:cursor-pointer cs:whitespace-nowrap","first:cs:rounded-l-md last:cs:rounded-r-md",le[a.scale],te,re,"cs-focus-visible",ae,i?G:"cs:text-gray-700 cs:dark:text-gray-400 cs:ring-1 cs:ring-inset cs:ring-gray-300 cs:dark:ring-gray-600 cs:bg-white cs:dark:bg-gray-800 cs:hover:bg-gray-100 cs:dark:hover:bg-gray-700",m&&"cs:opacity-50 cs:cursor-not-allowed",c),children:r})}t.Item=oe;t.__docgenInfo={description:"",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ children, value, disabled = false, className }: ButtonGroupItemProps",optional:!1,type:{name:"ButtonGroupItemProps",alias:"ButtonGroupItemProps"}}],returns:null}],displayName:"ButtonGroup",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"PresetColor | CustomColor | SemanticColor",elements:[{name:"union",raw:`| "red"
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
| "stone"`,elements:[{name:"literal",value:'"red"'},{name:"literal",value:'"orange"'},{name:"literal",value:'"amber"'},{name:"literal",value:'"yellow"'},{name:"literal",value:'"lime"'},{name:"literal",value:'"green"'},{name:"literal",value:'"emerald"'},{name:"literal",value:'"teal"'},{name:"literal",value:'"cyan"'},{name:"literal",value:'"sky"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"indigo"'},{name:"literal",value:'"violet"'},{name:"literal",value:'"purple"'},{name:"literal",value:'"fuchsia"'},{name:"literal",value:'"pink"'},{name:"literal",value:'"rose"'},{name:"literal",value:'"slate"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"zinc"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"stone"'}]},{name:"CustomColor"},{name:"union",raw:'"success" | "warning" | "error" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'}]}]},description:"",defaultValue:{value:'"blue"',computed:!1}},scale:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const xe={component:t,title:"System/ButtonGroup",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray"]}}},x={args:{defaultValue:"all",scale:"md"},render:r=>e.jsxs(t,{...r,children:[e.jsx(t.Item,{value:"all",children:"全員"}),e.jsx(t.Item,{value:"student",children:"生徒"}),e.jsx(t.Item,{value:"parent",children:"保護者"}),e.jsx(t.Item,{value:"staff",children:"教務"})]})},g={render:()=>{const[r,l]=o.useState("all");return e.jsxs("div",{className:"cs:space-y-4",children:[e.jsxs(t,{value:r,onChange:l,children:[e.jsx(t.Item,{value:"all",children:"全員"}),e.jsx(t.Item,{value:"student",children:"生徒"}),e.jsx(t.Item,{value:"parent",children:"保護者"}),e.jsx(t.Item,{value:"staff",children:"教務"})]}),e.jsxs("p",{className:"cs:text-sm cs:text-gray-500",children:["選択中: ",String(r)]})]})}},I={render:()=>{const[r,l]=o.useState(["read","write"]);return e.jsxs("div",{className:"cs:space-y-4",children:[e.jsxs(t,{multiple:!0,value:r,onChange:l,children:[e.jsx(t.Item,{value:"read",children:"読み取り"}),e.jsx(t.Item,{value:"write",children:"書き込み"}),e.jsx(t.Item,{value:"delete",children:"削除"}),e.jsx(t.Item,{value:"admin",children:"管理"})]}),e.jsxs("p",{className:"cs:text-sm cs:text-gray-500",children:["選択中: ",Array.isArray(r)?r.join(", "):r]})]})}},y={render:()=>e.jsx("div",{className:"cs:space-y-3",children:["blue","green","red","amber","purple"].map(r=>e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:r}),e.jsxs(t,{defaultValue:"a",color:r,children:[e.jsx(t.Item,{value:"a",children:"Option A"}),e.jsx(t.Item,{value:"b",children:"Option B"}),e.jsx(t.Item,{value:"c",children:"Option C"})]})]},r))})},f={render:()=>e.jsx("div",{className:"cs:space-y-3",children:["xs","sm","md","lg"].map(r=>e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:r}),e.jsxs(t,{defaultValue:"a",scale:r,children:[e.jsx(t.Item,{value:"a",children:"Option A"}),e.jsx(t.Item,{value:"b",children:"Option B"}),e.jsx(t.Item,{value:"c",children:"Option C"})]})]},r))})},B={render:()=>e.jsxs(t,{defaultValue:"a",children:[e.jsx(t.Item,{value:"a",children:"有効"}),e.jsx(t.Item,{value:"b",disabled:!0,children:"無効"}),e.jsx(t.Item,{value:"c",children:"有効"})]})};var N,k,V;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    defaultValue: "all",
    scale: "md"
  },
  render: args => <ButtonGroup {...args}>
      <ButtonGroup.Item value="all">全員</ButtonGroup.Item>
      <ButtonGroup.Item value="student">生徒</ButtonGroup.Item>
      <ButtonGroup.Item value="parent">保護者</ButtonGroup.Item>
      <ButtonGroup.Item value="staff">教務</ButtonGroup.Item>
    </ButtonGroup>
}`,...(V=(k=x.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var A,O,T;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | string[]>("all");
    return <div className="cs:space-y-4">
        <ButtonGroup value={value} onChange={setValue}>
          <ButtonGroup.Item value="all">全員</ButtonGroup.Item>
          <ButtonGroup.Item value="student">生徒</ButtonGroup.Item>
          <ButtonGroup.Item value="parent">保護者</ButtonGroup.Item>
          <ButtonGroup.Item value="staff">教務</ButtonGroup.Item>
        </ButtonGroup>
        <p className="cs:text-sm cs:text-gray-500">選択中: {String(value)}</p>
      </div>;
  }
}`,...(T=(O=g.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var _,q,D;I.parameters={...I.parameters,docs:{...(_=I.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | string[]>(["read", "write"]);
    return <div className="cs:space-y-4">
        <ButtonGroup multiple value={value} onChange={setValue}>
          <ButtonGroup.Item value="read">読み取り</ButtonGroup.Item>
          <ButtonGroup.Item value="write">書き込み</ButtonGroup.Item>
          <ButtonGroup.Item value="delete">削除</ButtonGroup.Item>
          <ButtonGroup.Item value="admin">管理</ButtonGroup.Item>
        </ButtonGroup>
        <p className="cs:text-sm cs:text-gray-500">選択中: {Array.isArray(value) ? value.join(", ") : value}</p>
      </div>;
  }
}`,...(D=(q=I.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var R,E,P;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-3">
      {(["blue", "green", "red", "amber", "purple"] as const).map(color => <div key={color}>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-1">{color}</p>
          <ButtonGroup defaultValue="a" color={color}>
            <ButtonGroup.Item value="a">Option A</ButtonGroup.Item>
            <ButtonGroup.Item value="b">Option B</ButtonGroup.Item>
            <ButtonGroup.Item value="c">Option C</ButtonGroup.Item>
          </ButtonGroup>
        </div>)}
    </div>
}`,...(P=(E=y.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var M,U,L;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-3">
      {(["xs", "sm", "md", "lg"] as const).map(scale => <div key={scale}>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-1">{scale}</p>
          <ButtonGroup defaultValue="a" scale={scale}>
            <ButtonGroup.Item value="a">Option A</ButtonGroup.Item>
            <ButtonGroup.Item value="b">Option B</ButtonGroup.Item>
            <ButtonGroup.Item value="c">Option C</ButtonGroup.Item>
          </ButtonGroup>
        </div>)}
    </div>
}`,...(L=(U=f.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var F,H,z;B.parameters={...B.parameters,docs:{...(F=B.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <ButtonGroup defaultValue="a">
      <ButtonGroup.Item value="a">有効</ButtonGroup.Item>
      <ButtonGroup.Item value="b" disabled>無効</ButtonGroup.Item>
      <ButtonGroup.Item value="c">有効</ButtonGroup.Item>
    </ButtonGroup>
}`,...(z=(H=B.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};const ge=["Default","Controlled","MultiSelect","Colors","Scales","WithDisabled"];export{y as Colors,g as Controlled,x as Default,I as MultiSelect,f as Scales,B as WithDisabled,ge as __namedExportsOrder,xe as default};
