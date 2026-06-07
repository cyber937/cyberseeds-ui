"use client";
import{j as a,r as M}from"./iframe-DnHwbLWn.js";import{T as e}from"./Tabs-CS9y8AHU.js";import{G as n}from"./GroupBox-D4pT8ZrY.js";import"./preload-helper-CJpEdZxZ.js";import"./clsx-BYFsuUQf.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-RbONob3D.js";import"./useUIColor-Dv37HYfb.js";import"./Slot-DpTkjzQA.js";import"./Label-ZHORWJsP.js";const I={component:e,title:"Navigation/Tabs",tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["red","orange","amber","green","blue","indigo","violet","purple","pink","gray"]},scale:{control:{type:"radio"},options:["xs","sm","md","lg"]}}},r={render:()=>a.jsxs(e,{defaultValue:"account",children:[a.jsxs(e.List,{children:[a.jsx(e.Trigger,{value:"account",children:"Account"}),a.jsx(e.Trigger,{value:"password",children:"Password"}),a.jsx(e.Trigger,{value:"notifications",children:"Notifications"})]}),a.jsx(e.Content,{value:"account",children:a.jsx("p",{className:"cs:text-gray-700 cs:dark:text-gray-400",children:"Manage your account settings. You can change your name, email address, and more."})}),a.jsx(e.Content,{value:"password",children:a.jsx("p",{className:"cs:text-gray-700 cs:dark:text-gray-400",children:"Change your password. We recommend updating it regularly for security."})}),a.jsx(e.Content,{value:"notifications",children:a.jsx("p",{className:"cs:text-gray-700 cs:dark:text-gray-400",children:"Customize your notification settings. Control email and push notifications."})})]})},l={render:()=>{const[s,D]=M.useState("tab1");return a.jsxs("div",{children:[a.jsxs(e,{value:s,onChange:D,children:[a.jsxs(e.List,{children:[a.jsx(e.Trigger,{value:"tab1",children:"Tab 1"}),a.jsx(e.Trigger,{value:"tab2",children:"Tab 2"}),a.jsx(e.Trigger,{value:"tab3",children:"Tab 3"})]}),a.jsx(e.Content,{value:"tab1",children:"Tab 1 content"}),a.jsx(e.Content,{value:"tab2",children:"Tab 2 content"}),a.jsx(e.Content,{value:"tab3",children:"Tab 3 content"})]}),a.jsxs("p",{className:"cs:mt-2 cs:text-sm cs:text-gray-500",children:["Current tab: ",s]})]})}},i={render:()=>a.jsx("div",{className:"cs:space-y-6",children:["blue","red","green","purple","amber"].map(s=>a.jsx(n,{label:s,children:a.jsxs(e,{defaultValue:"tab1",color:s,children:[a.jsxs(e.List,{children:[a.jsx(e.Trigger,{value:"tab1",children:"Tab 1"}),a.jsx(e.Trigger,{value:"tab2",children:"Tab 2"}),a.jsx(e.Trigger,{value:"tab3",children:"Tab 3"})]}),a.jsx(e.Content,{value:"tab1",children:a.jsxs("span",{className:"cs:text-gray-600 cs:dark:text-gray-400",children:[s," theme content"]})}),a.jsx(e.Content,{value:"tab2",children:"Tab 2"}),a.jsx(e.Content,{value:"tab3",children:"Tab 3"})]})},s))})},b={render:()=>a.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:gap-4 cs:sm:gap-6",children:[a.jsx(n,{label:"Extra Small (xs)",children:a.jsxs(e,{defaultValue:"tab1",scale:"xs",children:[a.jsxs(e.List,{children:[a.jsx(e.Trigger,{value:"tab1",children:"Tab 1"}),a.jsx(e.Trigger,{value:"tab2",children:"Tab 2"})]}),a.jsx(e.Content,{value:"tab1",children:"Extra Small size"}),a.jsx(e.Content,{value:"tab2",children:"Tab 2"})]})}),a.jsx(n,{label:"Small (sm)",children:a.jsxs(e,{defaultValue:"tab1",scale:"sm",children:[a.jsxs(e.List,{children:[a.jsx(e.Trigger,{value:"tab1",children:"Tab 1"}),a.jsx(e.Trigger,{value:"tab2",children:"Tab 2"})]}),a.jsx(e.Content,{value:"tab1",children:"Small size"}),a.jsx(e.Content,{value:"tab2",children:"Tab 2"})]})}),a.jsx(n,{label:"Standard (md)",children:a.jsxs(e,{defaultValue:"tab1",scale:"md",children:[a.jsxs(e.List,{children:[a.jsx(e.Trigger,{value:"tab1",children:"Tab 1"}),a.jsx(e.Trigger,{value:"tab2",children:"Tab 2"})]}),a.jsx(e.Content,{value:"tab1",children:"Standard size"}),a.jsx(e.Content,{value:"tab2",children:"Tab 2"})]})}),a.jsx(n,{label:"Large (lg)",children:a.jsxs(e,{defaultValue:"tab1",scale:"lg",children:[a.jsxs(e.List,{children:[a.jsx(e.Trigger,{value:"tab1",children:"Tab 1"}),a.jsx(e.Trigger,{value:"tab2",children:"Tab 2"})]}),a.jsx(e.Content,{value:"tab1",children:"Large size"}),a.jsx(e.Content,{value:"tab2",children:"Tab 2"})]})})]})},o={render:()=>a.jsxs(e,{defaultValue:"tab1",children:[a.jsxs(e.List,{children:[a.jsx(e.Trigger,{value:"tab1",children:"Enabled"}),a.jsx(e.Trigger,{value:"tab2",disabled:!0,children:"Disabled"}),a.jsx(e.Trigger,{value:"tab3",children:"Enabled"})]}),a.jsx(e.Content,{value:"tab1",children:"Enabled tab content"}),a.jsx(e.Content,{value:"tab2",children:"Disabled tab content"}),a.jsx(e.Content,{value:"tab3",children:"Third tab content"})]})},c={parameters:{viewport:{defaultViewport:"mobile"}},render:()=>a.jsxs(e,{defaultValue:"tab1",children:[a.jsxs(e.List,{children:[a.jsx(e.Trigger,{value:"tab1",children:"Home"}),a.jsx(e.Trigger,{value:"tab2",children:"Profile"}),a.jsx(e.Trigger,{value:"tab3",children:"Settings"}),a.jsx(e.Trigger,{value:"tab4",children:"Notifications"}),a.jsx(e.Trigger,{value:"tab5",children:"Messages"}),a.jsx(e.Trigger,{value:"tab6",children:"Help"})]}),a.jsx(e.Content,{value:"tab1",children:a.jsx("p",{className:"cs:text-gray-700 cs:dark:text-gray-400",children:"On mobile, you can scroll horizontally to switch between tabs."})}),a.jsx(e.Content,{value:"tab2",children:"Profile"}),a.jsx(e.Content,{value:"tab3",children:"Settings"}),a.jsx(e.Content,{value:"tab4",children:"Notifications"}),a.jsx(e.Content,{value:"tab5",children:"Messages"}),a.jsx(e.Content,{value:"tab6",children:"Help"})]})},t={name:"Link Navigation (asChild)",render:()=>a.jsx(e,{value:"account",children:a.jsxs(e.List,{children:[a.jsx(e.Trigger,{value:"account",asChild:!0,children:a.jsx("a",{href:"#account",children:"Account"})}),a.jsx(e.Trigger,{value:"password",asChild:!0,children:a.jsx("a",{href:"#password",children:"Password"})}),a.jsx(e.Trigger,{value:"billing",asChild:!0,children:a.jsx("a",{href:"#billing",children:"Billing"})})]})})};var T,g,d;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="account">
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="password">Password</Tabs.Trigger>
        <Tabs.Trigger value="notifications">Notifications</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">
        <p className="cs:text-gray-700 cs:dark:text-gray-400">
          Manage your account settings. You can change your name, email address, and more.
        </p>
      </Tabs.Content>
      <Tabs.Content value="password">
        <p className="cs:text-gray-700 cs:dark:text-gray-400">
          Change your password. We recommend updating it regularly for security.
        </p>
      </Tabs.Content>
      <Tabs.Content value="notifications">
        <p className="cs:text-gray-700 cs:dark:text-gray-400">
          Customize your notification settings. Control email and push notifications.
        </p>
      </Tabs.Content>
    </Tabs>
}`,...(d=(g=r.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var u,x,v;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [tab, setTab] = useState("tab1");
    return <div>
        <Tabs value={tab} onChange={setTab}>
          <Tabs.List>
            <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
            <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">Tab 1 content</Tabs.Content>
          <Tabs.Content value="tab2">Tab 2 content</Tabs.Content>
          <Tabs.Content value="tab3">Tab 3 content</Tabs.Content>
        </Tabs>
        <p className="cs:mt-2 cs:text-sm cs:text-gray-500">
          Current tab: {tab}
        </p>
      </div>;
  }
}`,...(v=(x=l.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var h,m,p;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-6">
      {(["blue", "red", "green", "purple", "amber"] as const).map(color => <GroupBox key={color} label={color}>
          <Tabs defaultValue="tab1" color={color}>
            <Tabs.List>
              <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
              <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
              <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="tab1">
              <span className="cs:text-gray-600 cs:dark:text-gray-400">
                {color} theme content
              </span>
            </Tabs.Content>
            <Tabs.Content value="tab2">Tab 2</Tabs.Content>
            <Tabs.Content value="tab3">Tab 3</Tabs.Content>
          </Tabs>
        </GroupBox>)}
    </div>
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var C,j,f;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:gap-4 cs:sm:gap-6">
      <GroupBox label="Extra Small (xs)">
        <Tabs defaultValue="tab1" scale="xs">
          <Tabs.List>
            <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">Extra Small size</Tabs.Content>
          <Tabs.Content value="tab2">Tab 2</Tabs.Content>
        </Tabs>
      </GroupBox>
      <GroupBox label="Small (sm)">
        <Tabs defaultValue="tab1" scale="sm">
          <Tabs.List>
            <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">Small size</Tabs.Content>
          <Tabs.Content value="tab2">Tab 2</Tabs.Content>
        </Tabs>
      </GroupBox>
      <GroupBox label="Standard (md)">
        <Tabs defaultValue="tab1" scale="md">
          <Tabs.List>
            <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">Standard size</Tabs.Content>
          <Tabs.Content value="tab2">Tab 2</Tabs.Content>
        </Tabs>
      </GroupBox>
      <GroupBox label="Large (lg)">
        <Tabs defaultValue="tab1" scale="lg">
          <Tabs.List>
            <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">Large size</Tabs.Content>
          <Tabs.Content value="tab2">Tab 2</Tabs.Content>
        </Tabs>
      </GroupBox>
    </div>
}`,...(f=(j=b.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var y,L,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Enabled</Tabs.Trigger>
        <Tabs.Trigger value="tab2" disabled>
          Disabled
        </Tabs.Trigger>
        <Tabs.Trigger value="tab3">Enabled</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">Enabled tab content</Tabs.Content>
      <Tabs.Content value="tab2">Disabled tab content</Tabs.Content>
      <Tabs.Content value="tab3">Third tab content</Tabs.Content>
    </Tabs>
}`,...(S=(L=o.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var N,w,V;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile"
    }
  },
  render: () => <Tabs defaultValue="tab1">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Home</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Profile</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Settings</Tabs.Trigger>
        <Tabs.Trigger value="tab4">Notifications</Tabs.Trigger>
        <Tabs.Trigger value="tab5">Messages</Tabs.Trigger>
        <Tabs.Trigger value="tab6">Help</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <p className="cs:text-gray-700 cs:dark:text-gray-400">
          On mobile, you can scroll horizontally to switch between tabs.
        </p>
      </Tabs.Content>
      <Tabs.Content value="tab2">Profile</Tabs.Content>
      <Tabs.Content value="tab3">Settings</Tabs.Content>
      <Tabs.Content value="tab4">Notifications</Tabs.Content>
      <Tabs.Content value="tab5">Messages</Tabs.Content>
      <Tabs.Content value="tab6">Help</Tabs.Content>
    </Tabs>
}`,...(V=(w=c.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var k,B,E,z,G;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Link Navigation (asChild)",
  render: () => <Tabs value="account">
      <Tabs.List>
        <Tabs.Trigger value="account" asChild>
          <a href="#account">Account</a>
        </Tabs.Trigger>
        <Tabs.Trigger value="password" asChild>
          <a href="#password">Password</a>
        </Tabs.Trigger>
        <Tabs.Trigger value="billing" asChild>
          <a href="#billing">Billing</a>
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs>
}`,...(E=(B=t.parameters)==null?void 0:B.docs)==null?void 0:E.source},description:{story:"asChild パターン — Trigger を `<a>` としてレンダリング。Next.js の `<Link>` でも同様に使用可能。",...(G=(z=t.parameters)==null?void 0:z.docs)==null?void 0:G.description}}};const J=["Default","Controlled","Colors","Scales","WithDisabled","MobileScroll","LinkNavigation"];export{i as Colors,l as Controlled,r as Default,t as LinkNavigation,c as MobileScroll,b as Scales,o as WithDisabled,J as __namedExportsOrder,I as default};
