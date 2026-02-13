"use client";
import{j as a,r as E}from"./iframe-BH6SszEl.js";import{T as e}from"./Tabs-eSg_mHrq.js";import{G as s}from"./GroupBox-CGyAX-li.js";import"./preload-helper-CJpEdZxZ.js";import"./clsx-BYFsuUQf.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-DumaUFqK.js";import"./useUIColor-ByGmMwax.js";import"./Label-B4gz59JQ.js";const O={component:e,title:"Navigation/Tabs",tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["red","orange","amber","green","blue","indigo","violet","purple","pink","gray"]},scale:{control:{type:"radio"},options:["xs","sm","md","lg"]}}},n={render:()=>a.jsxs(e,{defaultValue:"account",children:[a.jsxs(e.List,{children:[a.jsx(e.Trigger,{value:"account",children:"Account"}),a.jsx(e.Trigger,{value:"password",children:"Password"}),a.jsx(e.Trigger,{value:"notifications",children:"Notifications"})]}),a.jsx(e.Content,{value:"account",children:a.jsx("p",{className:"cs:text-gray-700 cs:dark:text-gray-400",children:"Manage your account settings. You can change your name, email address, and more."})}),a.jsx(e.Content,{value:"password",children:a.jsx("p",{className:"cs:text-gray-700 cs:dark:text-gray-400",children:"Change your password. We recommend updating it regularly for security."})}),a.jsx(e.Content,{value:"notifications",children:a.jsx("p",{className:"cs:text-gray-700 cs:dark:text-gray-400",children:"Customize your notification settings. Control email and push notifications."})})]})},r={render:()=>{const[t,w]=E.useState("tab1");return a.jsxs("div",{children:[a.jsxs(e,{value:t,onChange:w,children:[a.jsxs(e.List,{children:[a.jsx(e.Trigger,{value:"tab1",children:"Tab 1"}),a.jsx(e.Trigger,{value:"tab2",children:"Tab 2"}),a.jsx(e.Trigger,{value:"tab3",children:"Tab 3"})]}),a.jsx(e.Content,{value:"tab1",children:"Tab 1 content"}),a.jsx(e.Content,{value:"tab2",children:"Tab 2 content"}),a.jsx(e.Content,{value:"tab3",children:"Tab 3 content"})]}),a.jsxs("p",{className:"cs:mt-2 cs:text-sm cs:text-gray-500",children:["Current tab: ",t]})]})}},l={render:()=>a.jsx("div",{className:"cs:space-y-6",children:["blue","red","green","purple","amber"].map(t=>a.jsx(s,{label:t,children:a.jsxs(e,{defaultValue:"tab1",color:t,children:[a.jsxs(e.List,{children:[a.jsx(e.Trigger,{value:"tab1",children:"Tab 1"}),a.jsx(e.Trigger,{value:"tab2",children:"Tab 2"}),a.jsx(e.Trigger,{value:"tab3",children:"Tab 3"})]}),a.jsx(e.Content,{value:"tab1",children:a.jsxs("span",{className:"cs:text-gray-600 cs:dark:text-gray-400",children:[t," theme content"]})}),a.jsx(e.Content,{value:"tab2",children:"Tab 2"}),a.jsx(e.Content,{value:"tab3",children:"Tab 3"})]})},t))})},b={render:()=>a.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:gap-4 cs:sm:gap-6",children:[a.jsx(s,{label:"Extra Small (xs)",children:a.jsxs(e,{defaultValue:"tab1",scale:"xs",children:[a.jsxs(e.List,{children:[a.jsx(e.Trigger,{value:"tab1",children:"Tab 1"}),a.jsx(e.Trigger,{value:"tab2",children:"Tab 2"})]}),a.jsx(e.Content,{value:"tab1",children:"Extra Small size"}),a.jsx(e.Content,{value:"tab2",children:"Tab 2"})]})}),a.jsx(s,{label:"Small (sm)",children:a.jsxs(e,{defaultValue:"tab1",scale:"sm",children:[a.jsxs(e.List,{children:[a.jsx(e.Trigger,{value:"tab1",children:"Tab 1"}),a.jsx(e.Trigger,{value:"tab2",children:"Tab 2"})]}),a.jsx(e.Content,{value:"tab1",children:"Small size"}),a.jsx(e.Content,{value:"tab2",children:"Tab 2"})]})}),a.jsx(s,{label:"Standard (md)",children:a.jsxs(e,{defaultValue:"tab1",scale:"md",children:[a.jsxs(e.List,{children:[a.jsx(e.Trigger,{value:"tab1",children:"Tab 1"}),a.jsx(e.Trigger,{value:"tab2",children:"Tab 2"})]}),a.jsx(e.Content,{value:"tab1",children:"Standard size"}),a.jsx(e.Content,{value:"tab2",children:"Tab 2"})]})}),a.jsx(s,{label:"Large (lg)",children:a.jsxs(e,{defaultValue:"tab1",scale:"lg",children:[a.jsxs(e.List,{children:[a.jsx(e.Trigger,{value:"tab1",children:"Tab 1"}),a.jsx(e.Trigger,{value:"tab2",children:"Tab 2"})]}),a.jsx(e.Content,{value:"tab1",children:"Large size"}),a.jsx(e.Content,{value:"tab2",children:"Tab 2"})]})})]})},i={render:()=>a.jsxs(e,{defaultValue:"tab1",children:[a.jsxs(e.List,{children:[a.jsx(e.Trigger,{value:"tab1",children:"Enabled"}),a.jsx(e.Trigger,{value:"tab2",disabled:!0,children:"Disabled"}),a.jsx(e.Trigger,{value:"tab3",children:"Enabled"})]}),a.jsx(e.Content,{value:"tab1",children:"Enabled tab content"}),a.jsx(e.Content,{value:"tab2",children:"Disabled tab content"}),a.jsx(e.Content,{value:"tab3",children:"Third tab content"})]})},o={parameters:{viewport:{defaultViewport:"mobile"}},render:()=>a.jsxs(e,{defaultValue:"tab1",children:[a.jsxs(e.List,{children:[a.jsx(e.Trigger,{value:"tab1",children:"Home"}),a.jsx(e.Trigger,{value:"tab2",children:"Profile"}),a.jsx(e.Trigger,{value:"tab3",children:"Settings"}),a.jsx(e.Trigger,{value:"tab4",children:"Notifications"}),a.jsx(e.Trigger,{value:"tab5",children:"Messages"}),a.jsx(e.Trigger,{value:"tab6",children:"Help"})]}),a.jsx(e.Content,{value:"tab1",children:a.jsx("p",{className:"cs:text-gray-700 cs:dark:text-gray-400",children:"On mobile, you can scroll horizontally to switch between tabs."})}),a.jsx(e.Content,{value:"tab2",children:"Profile"}),a.jsx(e.Content,{value:"tab3",children:"Settings"}),a.jsx(e.Content,{value:"tab4",children:"Notifications"}),a.jsx(e.Content,{value:"tab5",children:"Messages"}),a.jsx(e.Content,{value:"tab6",children:"Help"})]})};var c,T,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(g=(T=n.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var d,u,x;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(x=(u=r.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var v,m,p;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(p=(m=l.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,C,j;b.parameters={...b.parameters,docs:{...(h=b.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(j=(C=b.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var y,f,L;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(L=(f=i.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var S,N,V;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(V=(N=o.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};const A=["Default","Controlled","Colors","Scales","WithDisabled","MobileScroll"];export{l as Colors,r as Controlled,n as Default,o as MobileScroll,b as Scales,i as WithDisabled,A as __namedExportsOrder,O as default};
