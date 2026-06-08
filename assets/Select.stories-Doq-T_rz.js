"use client";
import{j as e}from"./iframe-B1uMaBYR.js";import{I as D}from"./Input-QGsY5HYD.js";import{S as a,a as l}from"./Select-CB1DqroY.js";import"./preload-helper-CJpEdZxZ.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-RbONob3D.js";import"./FormFieldContext-BHu2Dvwc.js";import"./Label-DhXzDgbm.js";import"./clsx-BYFsuUQf.js";import"./useUIColor-BB8pR0ej.js";const R={component:a,title:"System/Select",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"]}}},c={args:{scale:"md","aria-label":"Select"},render:s=>e.jsx("div",{className:"flex",children:e.jsxs(a,{...s,children:[e.jsx(l,{label:"Please select",value:"0"},"0"),e.jsx(l,{label:"Option 1",value:"1"},"1"),e.jsx(l,{label:"Option 2",value:"2"},"2")]})})},t={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Extra Small (xs)"}),e.jsxs(a,{scale:"xs","aria-label":"Extra small size",children:[e.jsx(l,{label:"Please select",value:"0"},"0"),e.jsx(l,{label:"Option 1",value:"1"},"1"),e.jsx(l,{label:"Option 2",value:"2"},"2")]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Small (sm)"}),e.jsxs(a,{scale:"sm","aria-label":"Small size",children:[e.jsx(l,{label:"Please select",value:"0"},"0"),e.jsx(l,{label:"Option 1",value:"1"},"1"),e.jsx(l,{label:"Option 2",value:"2"},"2")]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Standard (md)"}),e.jsxs(a,{scale:"md","aria-label":"Standard size",children:[e.jsx(l,{label:"Please select",value:"0"},"0"),e.jsx(l,{label:"Option 1",value:"1"},"1"),e.jsx(l,{label:"Option 2",value:"2"},"2")]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Large (lg)"}),e.jsxs(a,{scale:"lg","aria-label":"Large size",children:[e.jsx(l,{label:"Please select",value:"0"},"0"),e.jsx(l,{label:"Option 1",value:"1"},"1"),e.jsx(l,{label:"Option 2",value:"2"},"2")]})]})]})},n={render:()=>e.jsxs("div",{className:"cs:flex cs:gap-2 cs:max-w-md",children:[e.jsx("div",{className:"cs:w-32 cs:shrink-0",children:e.jsxs(a,{scale:"md","aria-label":"Grade",children:[e.jsx(l,{value:"",label:"All Grades"}),e.jsx(l,{value:"1",label:"Grade 1"}),e.jsx(l,{value:"2",label:"Grade 2"}),e.jsx(l,{value:"3",label:"Grade 3"})]})}),e.jsx("div",{className:"cs:flex-1 cs:min-w-0",children:e.jsx(D,{scale:"md",placeholder:"Search by name...","aria-label":"Name search"})})]})},r={args:{scale:"md",isInvalid:!0,"aria-label":"Select"},render:s=>e.jsxs(a,{...s,children:[e.jsx(l,{label:"Please select",value:"0"},"0"),e.jsx(l,{label:"Option 1",value:"1"},"1"),e.jsx(l,{label:"Option 2",value:"2"},"2")]})},i={args:{scale:"md",disabled:!0,"aria-label":"Select"},render:s=>e.jsxs(a,{...s,children:[e.jsx(l,{label:"Please select",value:"0"},"0"),e.jsx(l,{label:"Option 1",value:"1"},"1")]})},d={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-2 cs:gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:"Default"}),e.jsxs(a,{"aria-label":"Default",children:[e.jsx(l,{value:"",label:"Pick one"}),e.jsx(l,{value:"a",label:"Option A"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:"Invalid"}),e.jsxs(a,{"aria-label":"Invalid",isInvalid:!0,children:[e.jsx(l,{value:"",label:"Pick one"}),e.jsx(l,{value:"a",label:"Option A"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:"Disabled"}),e.jsxs(a,{"aria-label":"Disabled",disabled:!0,children:[e.jsx(l,{value:"",label:"Pick one"}),e.jsx(l,{value:"a",label:"Option A"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-1",children:"Pre-selected"}),e.jsxs(a,{"aria-label":"Pre-selected",defaultValue:"a",children:[e.jsx(l,{value:"a",label:"Option A"}),e.jsx(l,{value:"b",label:"Option B"})]})]})]})};var o,p,x;c.parameters={...c.parameters,docs:{...(o=c.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(x=(p=c.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var m,b,v;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var u,S,O;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(O=(S=n.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var g,j,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(j=r.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var h,k,N;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    scale: "md",
    disabled: true,
    "aria-label": "Select"
  },
  render: args => <Select {...args}>
      <SelectOption key="0" label="Please select" value="0" />
      <SelectOption key="1" label="Option 1" value="1" />
    </Select>
}`,...(N=(k=i.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var P,f,I;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-2 cs:gap-4">
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">Default</p>
        <Select aria-label="Default">
          <SelectOption value="" label="Pick one" />
          <SelectOption value="a" label="Option A" />
        </Select>
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">Invalid</p>
        <Select aria-label="Invalid" isInvalid>
          <SelectOption value="" label="Pick one" />
          <SelectOption value="a" label="Option A" />
        </Select>
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">Disabled</p>
        <Select aria-label="Disabled" disabled>
          <SelectOption value="" label="Pick one" />
          <SelectOption value="a" label="Option A" />
        </Select>
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">Pre-selected</p>
        <Select aria-label="Pre-selected" defaultValue="a">
          <SelectOption value="a" label="Option A" />
          <SelectOption value="b" label="Option B" />
        </Select>
      </div>
    </div>
}`,...(I=(f=d.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};const T=["Default","Scale","WithInput","Invalid","Disabled","States"];export{c as Default,i as Disabled,r as Invalid,t as Scale,d as States,n as WithInput,T as __namedExportsOrder,R as default};
