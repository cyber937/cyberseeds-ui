"use client";
import{j as e}from"./iframe-BH6SszEl.js";import{F as r}from"./FormField-BAYyXBvp.js";import{I as l}from"./Input-BfV3lcmB.js";import{T as W}from"./TextArea-DUDqpC13.js";import{S as M,a}from"./Select-a6R8DiIm.js";import{G as s}from"./GroupBox-CGyAX-li.js";import"./preload-helper-CJpEdZxZ.js";import"./clsx-BYFsuUQf.js";import"./colorUtils-CzaG3QqU.js";import"./Label-B4gz59JQ.js";import"./useUIColor-ByGmMwax.js";import"./FormFieldContext-DLt5Iq4U.js";import"./designTokens-DumaUFqK.js";const ae={component:r,title:"Form/FormField",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},isInvalid:{control:"boolean"},isRequired:{control:"boolean"},isDisabled:{control:"boolean"}}},d={args:{scale:"md"},render:u=>e.jsxs(r,{...u,children:[e.jsx(r.Label,{children:"Email Address"}),e.jsx(l,{type:"email",placeholder:"example@email.com"}),e.jsx(r.Help,{children:"Please enter a valid email address"})]})},i={args:{isInvalid:!0,isRequired:!0},render:u=>e.jsxs(r,{...u,children:[e.jsx(r.Label,{children:"Username"}),e.jsx(l,{placeholder:"Enter username"}),e.jsx(r.Error,{children:"Username is required"})]})},o={render:()=>e.jsxs(r,{children:[e.jsx(r.Label,{children:"Password"}),e.jsx(l,{type:"password",placeholder:"Enter password"}),e.jsx(r.Help,{children:"Must be at least 8 characters with alphanumeric characters"})]})},n={render:()=>e.jsxs(r,{isRequired:!0,children:[e.jsx(r.Label,{children:"Name"}),e.jsx(l,{placeholder:"Enter name"})]})},m={render:()=>e.jsxs(r,{isDisabled:!0,children:[e.jsx(r.Label,{children:"Email Address"}),e.jsx(l,{placeholder:"Cannot be changed"}),e.jsx(r.Help,{children:"This field is disabled"})]})},c={render:()=>e.jsxs(r,{isRequired:!0,children:[e.jsx(r.Label,{children:"Comment"}),e.jsx(W,{placeholder:"Enter your comment",rows:4}),e.jsx(r.Help,{children:"Up to 500 characters"})]})},t={render:()=>e.jsxs(r,{isRequired:!0,children:[e.jsx(r.Label,{children:"Category"}),e.jsxs(M,{children:[e.jsx(a,{label:"Please select",value:""}),e.jsx(a,{label:"Technology",value:"tech"}),e.jsx(a,{label:"Design",value:"design"}),e.jsx(a,{label:"Marketing",value:"marketing"})]})]})},p={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:gap-4 cs:sm:gap-6",children:[e.jsx(s,{label:"Extra Small (xs)",children:e.jsxs(r,{scale:"xs",isRequired:!0,children:[e.jsx(r.Label,{children:"Email Address"}),e.jsx(l,{type:"email",placeholder:"example@email.com"}),e.jsx(r.Help,{children:"Enter a valid email address"})]})}),e.jsx(s,{label:"Small (sm)",children:e.jsxs(r,{scale:"sm",isRequired:!0,children:[e.jsx(r.Label,{children:"Email Address"}),e.jsx(l,{type:"email",placeholder:"example@email.com"}),e.jsx(r.Help,{children:"Enter a valid email address"})]})}),e.jsx(s,{label:"Standard (md)",children:e.jsxs(r,{scale:"md",isRequired:!0,children:[e.jsx(r.Label,{children:"Email Address"}),e.jsx(l,{type:"email",placeholder:"example@email.com"}),e.jsx(r.Help,{children:"Enter a valid email address"})]})}),e.jsx(s,{label:"Large (lg)",children:e.jsxs(r,{scale:"lg",isRequired:!0,children:[e.jsx(r.Label,{children:"Email Address"}),e.jsx(l,{type:"email",placeholder:"example@email.com"}),e.jsx(r.Help,{children:"Enter a valid email address"})]})})]})},F={render:()=>e.jsxs("div",{className:"cs:space-y-4 cs:max-w-md",children:[e.jsxs(r,{isRequired:!0,children:[e.jsx(r.Label,{children:"Name"}),e.jsx(l,{placeholder:"John Doe"})]}),e.jsxs(r,{isRequired:!0,isInvalid:!0,children:[e.jsx(r.Label,{children:"Email Address"}),e.jsx(l,{type:"email",placeholder:"example@email.com"}),e.jsx(r.Error,{children:"Please enter a valid email address"})]}),e.jsxs(r,{isRequired:!0,children:[e.jsx(r.Label,{children:"Category"}),e.jsxs(M,{children:[e.jsx(a,{label:"Please select",value:""}),e.jsx(a,{label:"Inquiry",value:"inquiry"}),e.jsx(a,{label:"Feedback",value:"feedback"}),e.jsx(a,{label:"Bug Report",value:"bug"})]})]}),e.jsxs(r,{children:[e.jsx(r.Label,{children:"Message"}),e.jsx(W,{placeholder:"Enter your message",rows:4}),e.jsx(r.Help,{children:"Up to 1000 characters"})]})]})};var x,h,b;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    scale: "md"
  },
  render: args => <FormField {...args}>
      <FormField.Label>Email Address</FormField.Label>
      <Input type="email" placeholder="example@email.com" />
      <FormField.Help>Please enter a valid email address</FormField.Help>
    </FormField>
}`,...(b=(h=d.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var j,g,L;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    isRequired: true
  },
  render: args => <FormField {...args}>
      <FormField.Label>Username</FormField.Label>
      <Input placeholder="Enter username" />
      <FormField.Error>Username is required</FormField.Error>
    </FormField>
}`,...(L=(g=i.parameters)==null?void 0:g.docs)==null?void 0:L.source}}};var E,v,S;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <FormField>
      <FormField.Label>Password</FormField.Label>
      <Input type="password" placeholder="Enter password" />
      <FormField.Help>Must be at least 8 characters with alphanumeric characters</FormField.Help>
    </FormField>
}`,...(S=(v=o.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var y,q,H;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <FormField isRequired>
      <FormField.Label>Name</FormField.Label>
      <Input placeholder="Enter name" />
    </FormField>
}`,...(H=(q=n.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var R,I,A;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <FormField isDisabled>
      <FormField.Label>Email Address</FormField.Label>
      <Input placeholder="Cannot be changed" />
      <FormField.Help>This field is disabled</FormField.Help>
    </FormField>
}`,...(A=(I=m.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var w,f,B;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <FormField isRequired>
      <FormField.Label>Comment</FormField.Label>
      <TextArea placeholder="Enter your comment" rows={4} />
      <FormField.Help>Up to 500 characters</FormField.Help>
    </FormField>
}`,...(B=(f=c.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var D,T,C;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <FormField isRequired>
      <FormField.Label>Category</FormField.Label>
      <Select>
        <SelectOption label="Please select" value="" />
        <SelectOption label="Technology" value="tech" />
        <SelectOption label="Design" value="design" />
        <SelectOption label="Marketing" value="marketing" />
      </Select>
    </FormField>
}`,...(C=(T=t.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var G,O,P;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:gap-4 cs:sm:gap-6">
      <GroupBox label="Extra Small (xs)">
        <FormField scale="xs" isRequired>
          <FormField.Label>Email Address</FormField.Label>
          <Input type="email" placeholder="example@email.com" />
          <FormField.Help>Enter a valid email address</FormField.Help>
        </FormField>
      </GroupBox>
      <GroupBox label="Small (sm)">
        <FormField scale="sm" isRequired>
          <FormField.Label>Email Address</FormField.Label>
          <Input type="email" placeholder="example@email.com" />
          <FormField.Help>Enter a valid email address</FormField.Help>
        </FormField>
      </GroupBox>
      <GroupBox label="Standard (md)">
        <FormField scale="md" isRequired>
          <FormField.Label>Email Address</FormField.Label>
          <Input type="email" placeholder="example@email.com" />
          <FormField.Help>Enter a valid email address</FormField.Help>
        </FormField>
      </GroupBox>
      <GroupBox label="Large (lg)">
        <FormField scale="lg" isRequired>
          <FormField.Label>Email Address</FormField.Label>
          <Input type="email" placeholder="example@email.com" />
          <FormField.Help>Enter a valid email address</FormField.Help>
        </FormField>
      </GroupBox>
    </div>
}`,...(P=(O=p.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var k,N,U;F.parameters={...F.parameters,docs:{...(k=F.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-4 cs:max-w-md">
      <FormField isRequired>
        <FormField.Label>Name</FormField.Label>
        <Input placeholder="John Doe" />
      </FormField>

      <FormField isRequired isInvalid>
        <FormField.Label>Email Address</FormField.Label>
        <Input type="email" placeholder="example@email.com" />
        <FormField.Error>Please enter a valid email address</FormField.Error>
      </FormField>

      <FormField isRequired>
        <FormField.Label>Category</FormField.Label>
        <Select>
          <SelectOption label="Please select" value="" />
          <SelectOption label="Inquiry" value="inquiry" />
          <SelectOption label="Feedback" value="feedback" />
          <SelectOption label="Bug Report" value="bug" />
        </Select>
      </FormField>

      <FormField>
        <FormField.Label>Message</FormField.Label>
        <TextArea placeholder="Enter your message" rows={4} />
        <FormField.Help>Up to 1000 characters</FormField.Help>
      </FormField>
    </div>
}`,...(U=(N=F.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};const se=["Default","WithError","WithHelp","Required","Disabled","WithTextArea","WithSelect","Scales","CompleteForm"];export{F as CompleteForm,d as Default,m as Disabled,n as Required,p as Scales,i as WithError,o as WithHelp,t as WithSelect,c as WithTextArea,se as __namedExportsOrder,ae as default};
