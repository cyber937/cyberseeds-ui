"use client";
import{j as e,r as D}from"./iframe-BH6SszEl.js";import{T as s}from"./Tabs-eSg_mHrq.js";import{B as n}from"./ButtonTabs-BRlgcojV.js";import"./preload-helper-CJpEdZxZ.js";import"./clsx-BYFsuUQf.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-DumaUFqK.js";import"./useUIColor-ByGmMwax.js";import"./colorContrast-C0ZIkquj.js";const I={component:n,title:"Navigation/ButtonTabs",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray"]}}},a={args:{defaultValue:"lending",scale:"md"},render:t=>e.jsxs(n,{...t,children:[e.jsxs(n.List,{children:[e.jsx(n.Trigger,{value:"lending",children:"Lending"}),e.jsx(n.Trigger,{value:"return",children:"Return"})]}),e.jsx(n.Content,{value:"lending",children:"Lending screen content"}),e.jsx(n.Content,{value:"return",children:"Return screen content"})]})},r={render:()=>{const[t,E]=D.useState("tab1");return e.jsxs("div",{className:"cs:space-y-4",children:[e.jsxs(n,{value:t,onChange:E,children:[e.jsxs(n.List,{children:[e.jsx(n.Trigger,{value:"tab1",children:"Tab 1"}),e.jsx(n.Trigger,{value:"tab2",children:"Tab 2"}),e.jsx(n.Trigger,{value:"tab3",children:"Tab 3"})]}),e.jsx(n.Content,{value:"tab1",children:"Tab 1 content"}),e.jsx(n.Content,{value:"tab2",children:"Tab 2 content"}),e.jsx(n.Content,{value:"tab3",children:"Tab 3 content"})]}),e.jsxs("p",{className:"cs:text-sm cs:text-gray-500",children:["Selected: ",t]})]})}},l={render:()=>e.jsx("div",{className:"cs:space-y-4",children:["blue","green","red","amber","purple"].map(t=>e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:t}),e.jsxs(n,{defaultValue:"a",color:t,children:[e.jsxs(n.List,{children:[e.jsx(n.Trigger,{value:"a",children:"Tab A"}),e.jsx(n.Trigger,{value:"b",children:"Tab B"}),e.jsx(n.Trigger,{value:"c",children:"Tab C"})]}),e.jsx(n.Content,{value:"a",children:"Content A"}),e.jsx(n.Content,{value:"b",children:"Content B"}),e.jsx(n.Content,{value:"c",children:"Content C"})]})]},t))})},o={render:()=>e.jsx("div",{className:"cs:space-y-4",children:["xs","sm","md","lg"].map(t=>e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:t}),e.jsxs(n,{defaultValue:"a",scale:t,children:[e.jsxs(n.List,{children:[e.jsx(n.Trigger,{value:"a",children:"Tab A"}),e.jsx(n.Trigger,{value:"b",children:"Tab B"}),e.jsx(n.Trigger,{value:"c",children:"Tab C"})]}),e.jsx(n.Content,{value:"a",children:"Content A"}),e.jsx(n.Content,{value:"b",children:"Content B"}),e.jsx(n.Content,{value:"c",children:"Content C"})]})]},t))})},u={render:()=>e.jsxs(n,{defaultValue:"a",children:[e.jsxs(n.List,{children:[e.jsx(n.Trigger,{value:"a",children:"Enabled"}),e.jsx(n.Trigger,{value:"b",disabled:!0,children:"Disabled"}),e.jsx(n.Trigger,{value:"c",children:"Enabled"})]}),e.jsx(n.Content,{value:"a",children:"Tab A content"}),e.jsx(n.Content,{value:"c",children:"Tab C content"})]})},i={render:()=>e.jsxs("div",{className:"cs:space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:"fullWidth"}),e.jsxs(n,{defaultValue:"lending",children:[e.jsxs(n.List,{fullWidth:!0,children:[e.jsx(n.Trigger,{value:"lending",children:"Lending"}),e.jsx(n.Trigger,{value:"return",children:"Return"})]}),e.jsx(n.Content,{value:"lending",children:"Lending screen content"}),e.jsx(n.Content,{value:"return",children:"Return screen content"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:"fullWidth (3 tabs)"}),e.jsxs(n,{defaultValue:"a",children:[e.jsxs(n.List,{fullWidth:!0,children:[e.jsx(n.Trigger,{value:"a",children:"Tab A"}),e.jsx(n.Trigger,{value:"b",children:"Tab B"}),e.jsx(n.Trigger,{value:"c",children:"Tab C"})]}),e.jsx(n.Content,{value:"a",children:"Content A"}),e.jsx(n.Content,{value:"b",children:"Content B"}),e.jsx(n.Content,{value:"c",children:"Content C"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:"default (inline)"}),e.jsxs(n,{defaultValue:"lending",children:[e.jsxs(n.List,{children:[e.jsx(n.Trigger,{value:"lending",children:"Lending"}),e.jsx(n.Trigger,{value:"return",children:"Return"})]}),e.jsx(n.Content,{value:"lending",children:"Lending screen content"}),e.jsx(n.Content,{value:"return",children:"Return screen content"})]})]})]})},c={render:()=>e.jsxs("div",{className:"cs:space-y-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"ButtonTabs (button style)"}),e.jsxs(n,{defaultValue:"a",children:[e.jsxs(n.List,{children:[e.jsx(n.Trigger,{value:"a",children:"Lending"}),e.jsx(n.Trigger,{value:"b",children:"Return"})]}),e.jsx(n.Content,{value:"a",children:"Lending screen"}),e.jsx(n.Content,{value:"b",children:"Return screen"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Tabs (underline style)"}),e.jsxs(s,{defaultValue:"a",children:[e.jsxs(s.List,{children:[e.jsx(s.Trigger,{value:"a",children:"Lending"}),e.jsx(s.Trigger,{value:"b",children:"Return"})]}),e.jsx(s.Content,{value:"a",children:"Lending screen"}),e.jsx(s.Content,{value:"b",children:"Return screen"})]})]})]})};var d,T,b;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    defaultValue: "lending",
    scale: "md"
  },
  render: args => <ButtonTabs {...args}>
      <ButtonTabs.List>
        <ButtonTabs.Trigger value="lending">Lending</ButtonTabs.Trigger>
        <ButtonTabs.Trigger value="return">Return</ButtonTabs.Trigger>
      </ButtonTabs.List>
      <ButtonTabs.Content value="lending">Lending screen content</ButtonTabs.Content>
      <ButtonTabs.Content value="return">Return screen content</ButtonTabs.Content>
    </ButtonTabs>
}`,...(b=(T=a.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var g,x,B;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("tab1");
    return <div className="cs:space-y-4">
        <ButtonTabs value={value} onChange={setValue}>
          <ButtonTabs.List>
            <ButtonTabs.Trigger value="tab1">Tab 1</ButtonTabs.Trigger>
            <ButtonTabs.Trigger value="tab2">Tab 2</ButtonTabs.Trigger>
            <ButtonTabs.Trigger value="tab3">Tab 3</ButtonTabs.Trigger>
          </ButtonTabs.List>
          <ButtonTabs.Content value="tab1">Tab 1 content</ButtonTabs.Content>
          <ButtonTabs.Content value="tab2">Tab 2 content</ButtonTabs.Content>
          <ButtonTabs.Content value="tab3">Tab 3 content</ButtonTabs.Content>
        </ButtonTabs>
        <p className="cs:text-sm cs:text-gray-500">Selected: {value}</p>
      </div>;
  }
}`,...(B=(x=r.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var v,C,h;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-4">
      {(["blue", "green", "red", "amber", "purple"] as const).map(color => <div key={color}>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-1">{color}</p>
          <ButtonTabs defaultValue="a" color={color}>
            <ButtonTabs.List>
              <ButtonTabs.Trigger value="a">Tab A</ButtonTabs.Trigger>
              <ButtonTabs.Trigger value="b">Tab B</ButtonTabs.Trigger>
              <ButtonTabs.Trigger value="c">Tab C</ButtonTabs.Trigger>
            </ButtonTabs.List>
            <ButtonTabs.Content value="a">Content A</ButtonTabs.Content>
            <ButtonTabs.Content value="b">Content B</ButtonTabs.Content>
            <ButtonTabs.Content value="c">Content C</ButtonTabs.Content>
          </ButtonTabs>
        </div>)}
    </div>
}`,...(h=(C=l.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var m,p,j;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-4">
      {(["xs", "sm", "md", "lg"] as const).map(scale => <div key={scale}>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-1">{scale}</p>
          <ButtonTabs defaultValue="a" scale={scale}>
            <ButtonTabs.List>
              <ButtonTabs.Trigger value="a">Tab A</ButtonTabs.Trigger>
              <ButtonTabs.Trigger value="b">Tab B</ButtonTabs.Trigger>
              <ButtonTabs.Trigger value="c">Tab C</ButtonTabs.Trigger>
            </ButtonTabs.List>
            <ButtonTabs.Content value="a">Content A</ButtonTabs.Content>
            <ButtonTabs.Content value="b">Content B</ButtonTabs.Content>
            <ButtonTabs.Content value="c">Content C</ButtonTabs.Content>
          </ButtonTabs>
        </div>)}
    </div>
}`,...(j=(p=o.parameters)==null?void 0:p.docs)==null?void 0:j.source}}};var L,y,f;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <ButtonTabs defaultValue="a">
      <ButtonTabs.List>
        <ButtonTabs.Trigger value="a">Enabled</ButtonTabs.Trigger>
        <ButtonTabs.Trigger value="b" disabled>Disabled</ButtonTabs.Trigger>
        <ButtonTabs.Trigger value="c">Enabled</ButtonTabs.Trigger>
      </ButtonTabs.List>
      <ButtonTabs.Content value="a">Tab A content</ButtonTabs.Content>
      <ButtonTabs.Content value="c">Tab C content</ButtonTabs.Content>
    </ButtonTabs>
}`,...(f=(y=u.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var N,R,V;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-4">
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">fullWidth</p>
        <ButtonTabs defaultValue="lending">
          <ButtonTabs.List fullWidth>
            <ButtonTabs.Trigger value="lending">Lending</ButtonTabs.Trigger>
            <ButtonTabs.Trigger value="return">Return</ButtonTabs.Trigger>
          </ButtonTabs.List>
          <ButtonTabs.Content value="lending">Lending screen content</ButtonTabs.Content>
          <ButtonTabs.Content value="return">Return screen content</ButtonTabs.Content>
        </ButtonTabs>
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">fullWidth (3 tabs)</p>
        <ButtonTabs defaultValue="a">
          <ButtonTabs.List fullWidth>
            <ButtonTabs.Trigger value="a">Tab A</ButtonTabs.Trigger>
            <ButtonTabs.Trigger value="b">Tab B</ButtonTabs.Trigger>
            <ButtonTabs.Trigger value="c">Tab C</ButtonTabs.Trigger>
          </ButtonTabs.List>
          <ButtonTabs.Content value="a">Content A</ButtonTabs.Content>
          <ButtonTabs.Content value="b">Content B</ButtonTabs.Content>
          <ButtonTabs.Content value="c">Content C</ButtonTabs.Content>
        </ButtonTabs>
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">default (inline)</p>
        <ButtonTabs defaultValue="lending">
          <ButtonTabs.List>
            <ButtonTabs.Trigger value="lending">Lending</ButtonTabs.Trigger>
            <ButtonTabs.Trigger value="return">Return</ButtonTabs.Trigger>
          </ButtonTabs.List>
          <ButtonTabs.Content value="lending">Lending screen content</ButtonTabs.Content>
          <ButtonTabs.Content value="return">Return screen content</ButtonTabs.Content>
        </ButtonTabs>
      </div>
    </div>
}`,...(V=(R=i.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var A,W,S;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-6">
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">ButtonTabs (button style)</p>
        <ButtonTabs defaultValue="a">
          <ButtonTabs.List>
            <ButtonTabs.Trigger value="a">Lending</ButtonTabs.Trigger>
            <ButtonTabs.Trigger value="b">Return</ButtonTabs.Trigger>
          </ButtonTabs.List>
          <ButtonTabs.Content value="a">Lending screen</ButtonTabs.Content>
          <ButtonTabs.Content value="b">Return screen</ButtonTabs.Content>
        </ButtonTabs>
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Tabs (underline style)</p>
        <Tabs defaultValue="a">
          <Tabs.List>
            <Tabs.Trigger value="a">Lending</Tabs.Trigger>
            <Tabs.Trigger value="b">Return</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="a">Lending screen</Tabs.Content>
          <Tabs.Content value="b">Return screen</Tabs.Content>
        </Tabs>
      </div>
    </div>
}`,...(S=(W=c.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};const J=["Default","Controlled","Colors","Scales","WithDisabled","FullWidth","ComparedWithTabs"];export{l as Colors,c as ComparedWithTabs,r as Controlled,a as Default,i as FullWidth,o as Scales,u as WithDisabled,J as __namedExportsOrder,I as default};
