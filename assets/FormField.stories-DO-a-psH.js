"use client";
import{j as e}from"./iframe-xpODeKre.js";import{F as r}from"./FormField-BZan9XuV.js";import{I as l}from"./Input-DWix1U7_.js";import{T as x}from"./TextArea-DbcqkaX3.js";import{S as h,a}from"./Select-Bs8dvKY2.js";import{G as s}from"./GroupBox-DjfEcUY-.js";import"./preload-helper-CYfZjOYs.js";import"./clsx-BYFsuUQf.js";import"./colorUtils-CzaG3QqU.js";import"./Label-FrOtQjDZ.js";import"./useUIColor-rs1v8CsH.js";import"./FormFieldContext-BgabJ0RT.js";import"./designTokens-DumaUFqK.js";const w={component:r,title:"Form/FormField",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},isInvalid:{control:"boolean"},isRequired:{control:"boolean"},isDisabled:{control:"boolean"}}},d={args:{scale:"md"},render:u=>e.jsxs(r,{...u,children:[e.jsx(r.Label,{children:"Email Address"}),e.jsx(l,{type:"email",placeholder:"example@email.com"}),e.jsx(r.Help,{children:"Please enter a valid email address"})]})},i={args:{isInvalid:!0,isRequired:!0},render:u=>e.jsxs(r,{...u,children:[e.jsx(r.Label,{children:"Username"}),e.jsx(l,{placeholder:"Enter username"}),e.jsx(r.Error,{children:"Username is required"})]})},o={render:()=>e.jsxs(r,{children:[e.jsx(r.Label,{children:"Password"}),e.jsx(l,{type:"password",placeholder:"Enter password"}),e.jsx(r.Help,{children:"Must be at least 8 characters with alphanumeric characters"})]})},n={render:()=>e.jsxs(r,{isRequired:!0,children:[e.jsx(r.Label,{children:"Name"}),e.jsx(l,{placeholder:"Enter name"})]})},m={render:()=>e.jsxs(r,{isDisabled:!0,children:[e.jsx(r.Label,{children:"Email Address"}),e.jsx(l,{placeholder:"Cannot be changed"}),e.jsx(r.Help,{children:"This field is disabled"})]})},c={render:()=>e.jsxs(r,{isRequired:!0,children:[e.jsx(r.Label,{children:"Comment"}),e.jsx(x,{placeholder:"Enter your comment",rows:4}),e.jsx(r.Help,{children:"Up to 500 characters"})]})},t={render:()=>e.jsxs(r,{isRequired:!0,children:[e.jsx(r.Label,{children:"Category"}),e.jsxs(h,{children:[e.jsx(a,{label:"Please select",value:""}),e.jsx(a,{label:"Technology",value:"tech"}),e.jsx(a,{label:"Design",value:"design"}),e.jsx(a,{label:"Marketing",value:"marketing"})]})]})},p={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:gap-4 cs:sm:gap-6",children:[e.jsx(s,{label:"Extra Small (xs)",children:e.jsxs(r,{scale:"xs",isRequired:!0,children:[e.jsx(r.Label,{children:"Email Address"}),e.jsx(l,{type:"email",placeholder:"example@email.com"}),e.jsx(r.Help,{children:"Enter a valid email address"})]})}),e.jsx(s,{label:"Small (sm)",children:e.jsxs(r,{scale:"sm",isRequired:!0,children:[e.jsx(r.Label,{children:"Email Address"}),e.jsx(l,{type:"email",placeholder:"example@email.com"}),e.jsx(r.Help,{children:"Enter a valid email address"})]})}),e.jsx(s,{label:"Standard (md)",children:e.jsxs(r,{scale:"md",isRequired:!0,children:[e.jsx(r.Label,{children:"Email Address"}),e.jsx(l,{type:"email",placeholder:"example@email.com"}),e.jsx(r.Help,{children:"Enter a valid email address"})]})}),e.jsx(s,{label:"Large (lg)",children:e.jsxs(r,{scale:"lg",isRequired:!0,children:[e.jsx(r.Label,{children:"Email Address"}),e.jsx(l,{type:"email",placeholder:"example@email.com"}),e.jsx(r.Help,{children:"Enter a valid email address"})]})})]})},F={render:()=>e.jsxs("div",{className:"cs:space-y-4 cs:max-w-md",children:[e.jsxs(r,{isRequired:!0,children:[e.jsx(r.Label,{children:"Name"}),e.jsx(l,{placeholder:"John Doe"})]}),e.jsxs(r,{isRequired:!0,isInvalid:!0,children:[e.jsx(r.Label,{children:"Email Address"}),e.jsx(l,{type:"email",placeholder:"example@email.com"}),e.jsx(r.Error,{children:"Please enter a valid email address"})]}),e.jsxs(r,{isRequired:!0,children:[e.jsx(r.Label,{children:"Category"}),e.jsxs(h,{children:[e.jsx(a,{label:"Please select",value:""}),e.jsx(a,{label:"Inquiry",value:"inquiry"}),e.jsx(a,{label:"Feedback",value:"feedback"}),e.jsx(a,{label:"Bug Report",value:"bug"})]})]}),e.jsxs(r,{children:[e.jsx(r.Label,{children:"Message"}),e.jsx(x,{placeholder:"Enter your message",rows:4}),e.jsx(r.Help,{children:"Up to 1000 characters"})]})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    scale: "md"
  },
  render: args => <FormField {...args}>
      <FormField.Label>Email Address</FormField.Label>
      <Input type="email" placeholder="example@email.com" />
      <FormField.Help>Please enter a valid email address</FormField.Help>
    </FormField>
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    isRequired: true
  },
  render: args => <FormField {...args}>
      <FormField.Label>Username</FormField.Label>
      <Input placeholder="Enter username" />
      <FormField.Error>Username is required</FormField.Error>
    </FormField>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <FormField>
      <FormField.Label>Password</FormField.Label>
      <Input type="password" placeholder="Enter password" />
      <FormField.Help>Must be at least 8 characters with alphanumeric characters</FormField.Help>
    </FormField>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <FormField isRequired>
      <FormField.Label>Name</FormField.Label>
      <Input placeholder="Enter name" />
    </FormField>
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <FormField isDisabled>
      <FormField.Label>Email Address</FormField.Label>
      <Input placeholder="Cannot be changed" />
      <FormField.Help>This field is disabled</FormField.Help>
    </FormField>
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <FormField isRequired>
      <FormField.Label>Comment</FormField.Label>
      <TextArea placeholder="Enter your comment" rows={4} />
      <FormField.Help>Up to 500 characters</FormField.Help>
    </FormField>
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <FormField isRequired>
      <FormField.Label>Category</FormField.Label>
      <Select>
        <SelectOption label="Please select" value="" />
        <SelectOption label="Technology" value="tech" />
        <SelectOption label="Design" value="design" />
        <SelectOption label="Marketing" value="marketing" />
      </Select>
    </FormField>
}`,...t.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};const f=["Default","WithError","WithHelp","Required","Disabled","WithTextArea","WithSelect","Scales","CompleteForm"];export{F as CompleteForm,d as Default,m as Disabled,n as Required,p as Scales,i as WithError,o as WithHelp,t as WithSelect,c as WithTextArea,f as __namedExportsOrder,w as default};
