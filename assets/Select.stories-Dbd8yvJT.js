"use client";
import{j as e}from"./iframe-BH6SszEl.js";import{I as j}from"./Input-BfV3lcmB.js";import{S as a,a as l}from"./Select-a6R8DiIm.js";import"./preload-helper-CJpEdZxZ.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-DumaUFqK.js";import"./FormFieldContext-DLt5Iq4U.js";import"./Label-B4gz59JQ.js";import"./clsx-BYFsuUQf.js";import"./useUIColor-ByGmMwax.js";const E={component:a,title:"System/Select",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"]}}},s={args:{scale:"md","aria-label":"Select"},render:r=>e.jsx("div",{className:"flex",children:e.jsxs(a,{...r,children:[e.jsx(l,{label:"Please select",value:"0"},"0"),e.jsx(l,{label:"Option 1",value:"1"},"1"),e.jsx(l,{label:"Option 2",value:"2"},"2")]})})},c={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Extra Small (xs)"}),e.jsxs(a,{scale:"xs","aria-label":"Extra small size",children:[e.jsx(l,{label:"Please select",value:"0"},"0"),e.jsx(l,{label:"Option 1",value:"1"},"1"),e.jsx(l,{label:"Option 2",value:"2"},"2")]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Small (sm)"}),e.jsxs(a,{scale:"sm","aria-label":"Small size",children:[e.jsx(l,{label:"Please select",value:"0"},"0"),e.jsx(l,{label:"Option 1",value:"1"},"1"),e.jsx(l,{label:"Option 2",value:"2"},"2")]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Standard (md)"}),e.jsxs(a,{scale:"md","aria-label":"Standard size",children:[e.jsx(l,{label:"Please select",value:"0"},"0"),e.jsx(l,{label:"Option 1",value:"1"},"1"),e.jsx(l,{label:"Option 2",value:"2"},"2")]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Large (lg)"}),e.jsxs(a,{scale:"lg","aria-label":"Large size",children:[e.jsx(l,{label:"Please select",value:"0"},"0"),e.jsx(l,{label:"Option 1",value:"1"},"1"),e.jsx(l,{label:"Option 2",value:"2"},"2")]})]})]})},t={render:()=>e.jsxs("div",{className:"cs:flex cs:gap-2 cs:max-w-md",children:[e.jsx("div",{className:"cs:w-32 cs:shrink-0",children:e.jsxs(a,{scale:"md","aria-label":"Grade",children:[e.jsx(l,{value:"",label:"All Grades"}),e.jsx(l,{value:"1",label:"Grade 1"}),e.jsx(l,{value:"2",label:"Grade 2"}),e.jsx(l,{value:"3",label:"Grade 3"})]})}),e.jsx("div",{className:"cs:flex-1 cs:min-w-0",children:e.jsx(j,{scale:"md",placeholder:"Search by name...","aria-label":"Name search"})})]})},n={args:{scale:"md",isInvalid:!0,"aria-label":"Select"},render:r=>e.jsxs(a,{...r,children:[e.jsx(l,{label:"Please select",value:"0"},"0"),e.jsx(l,{label:"Option 1",value:"1"},"1"),e.jsx(l,{label:"Option 2",value:"2"},"2")]})};var i,d,o;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    scale: "md",
    "aria-label": "Select"
  },
  render: args => <div className="flex">
      <Select {...args}>
        <SelectOption key="0" label="Please select" value="0" />
        <SelectOption key="1" label="Option 1" value="1" />
        <SelectOption key="2" label="Option 2" value="2" />
      </Select>
    </div>
}`,...(o=(d=s.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};var p,m,x;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6">
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Extra Small (xs)</p>
        <Select scale="xs" aria-label="Extra small size">
          <SelectOption key="0" label="Please select" value="0" />
          <SelectOption key="1" label="Option 1" value="1" />
          <SelectOption key="2" label="Option 2" value="2" />
        </Select>
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Small (sm)</p>
        <Select scale="sm" aria-label="Small size">
          <SelectOption key="0" label="Please select" value="0" />
          <SelectOption key="1" label="Option 1" value="1" />
          <SelectOption key="2" label="Option 2" value="2" />
        </Select>
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Standard (md)</p>
        <Select scale="md" aria-label="Standard size">
          <SelectOption key="0" label="Please select" value="0" />
          <SelectOption key="1" label="Option 1" value="1" />
          <SelectOption key="2" label="Option 2" value="2" />
        </Select>
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Large (lg)</p>
        <Select scale="lg" aria-label="Large size">
          <SelectOption key="0" label="Please select" value="0" />
          <SelectOption key="1" label="Option 1" value="1" />
          <SelectOption key="2" label="Option 2" value="2" />
        </Select>
      </div>
    </div>
}`,...(x=(m=c.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var v,b,u;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:gap-2 cs:max-w-md">
      <div className="cs:w-32 cs:shrink-0">
        <Select scale="md" aria-label="Grade">
          <SelectOption value="" label="All Grades" />
          <SelectOption value="1" label="Grade 1" />
          <SelectOption value="2" label="Grade 2" />
          <SelectOption value="3" label="Grade 3" />
        </Select>
      </div>
      <div className="cs:flex-1 cs:min-w-0">
        <Input scale="md" placeholder="Search by name..." aria-label="Name search" />
      </div>
    </div>
}`,...(u=(b=t.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var S,g,O;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    scale: "md",
    isInvalid: true,
    "aria-label": "Select"
  },
  render: args => <Select {...args}>
      <SelectOption key="0" label="Please select" value="0" />
      <SelectOption key="1" label="Option 1" value="1" />
      <SelectOption key="2" label="Option 2" value="2" />
    </Select>
}`,...(O=(g=n.parameters)==null?void 0:g.docs)==null?void 0:O.source}}};const L=["Default","Scale","WithInput","Invalid"];export{s as Default,n as Invalid,c as Scale,t as WithInput,L as __namedExportsOrder,E as default};
