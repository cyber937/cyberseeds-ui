"use client";
import{j as o,r as u}from"./iframe-xpODeKre.js";import{B as s}from"./Button-BwOKmFUz.js";import{C as c}from"./Checkbox-uUn8GWVb.js";import{G as f}from"./GroupBox-DjfEcUY-.js";import{I as n}from"./Input-DWix1U7_.js";import{P as B}from"./PhoneInput-CHdxsD07.js";import{P as r}from"./PillBox-CPkuEBpO.js";import{R as b}from"./Radio-DeOw1c5v.js";import{R as d}from"./RadioGroup-BH31PNsN.js";import{S as y}from"./Switch-D23cLHzj.js";import{T as F}from"./TextArea-DbcqkaX3.js";import{U as g}from"./useUIColor-rs1v8CsH.js";import"./preload-helper-CYfZjOYs.js";import"./colorContrast-C0ZIkquj.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-DumaUFqK.js";import"./Label-FrOtQjDZ.js";import"./clsx-BYFsuUQf.js";import"./FormFieldContext-BgabJ0RT.js";const e={base:"#4f46e5",hover:"#4338ca",active:"#3730a3",focus:"#4f46e5",light:"#e0e7ff",lightText:"#312e81",border:"#a5b4fc"},l={base:"#f97066",hover:"#e04e45",active:"#c53030",focus:"#f97066",light:"#fff1f0",lightText:"#9b1c1c",border:"#fca5a1"},a={base:"#16a34a",hover:"#15803d",active:"#166534",focus:"#16a34a",light:"#dcfce7",lightText:"#14532d",border:"#86efac"},w=({brandColor:C})=>{const[v,j]=u.useState(""),[P,I]=u.useState(""),[h,N]=u.useState(!0);return o.jsx(g,{initialColor:C,children:o.jsxs(f,{label:"CustomColor Demo",className:"cs:space-y-4",children:[o.jsxs("div",{className:"cs:flex cs:flex-wrap cs:gap-4",children:[o.jsx(s,{children:"Primary"}),o.jsx(s,{variant:"secondary",children:"Secondary"}),o.jsx(s,{disabled:!0,children:"Disabled"})]}),o.jsx(c,{label:"Checkbox"}),o.jsx(n,{label:"Input",placeholder:"Focus to see custom outline"}),o.jsx(B,{label:"Phone Number",value:v,onChange:j}),o.jsxs("div",{className:"cs:flex cs:flex-wrap cs:gap-2",children:[o.jsx(r,{label:"Custom Pill"}),o.jsx(r,{label:"Another Pill"})]}),o.jsx(f,{label:"Radio Group",children:o.jsxs(d,{value:P,onChange:I,children:[o.jsx(d.Option,{label:"Option A",value:"a"}),o.jsx(d.Option,{label:"Option B",value:"b"}),o.jsx(d.Option,{label:"Option C",value:"c"})]})}),o.jsx(y,{checked:h,onClick:()=>N(!h),onLabel:"On",offLabel:"Off"}),o.jsx(F,{placeholder:"Focus to see custom outline"})]})})},Q={component:w,title:"CustomColor",tags:["autodocs"],argTypes:{brandColor:{control:{type:"object"}}}},m={args:{brandColor:e}},p={args:{brandColor:l}},x={args:{brandColor:a}},t={render:()=>o.jsxs("div",{className:"cs:space-y-4",children:[o.jsx("h3",{className:"cs:text-sm cs:font-semibold cs:text-gray-700",children:"Per-component custom color (without UIColorProvider)"}),o.jsxs("div",{className:"cs:flex cs:flex-wrap cs:gap-4",children:[o.jsx(s,{color:e,children:"Indigo"}),o.jsx(s,{color:l,children:"Coral"}),o.jsx(s,{color:a,children:"Forest"})]}),o.jsxs("div",{className:"cs:flex cs:flex-wrap cs:gap-4",children:[o.jsx(c,{label:"Indigo",color:e}),o.jsx(c,{label:"Coral",color:l}),o.jsx(c,{label:"Forest",color:a})]}),o.jsxs("div",{className:"cs:flex cs:flex-wrap cs:gap-4",children:[o.jsx(b,{label:"Indigo",color:e,name:"custom-radio",value:"indigo"}),o.jsx(b,{label:"Coral",color:l,name:"custom-radio",value:"coral"}),o.jsx(b,{label:"Forest",color:a,name:"custom-radio",value:"forest"})]}),o.jsxs("div",{className:"cs:flex cs:flex-wrap cs:gap-2",children:[o.jsx(r,{label:"Indigo",color:e}),o.jsx(r,{label:"Coral",color:l}),o.jsx(r,{label:"Forest",color:a})]}),o.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-3 cs:gap-4",children:[o.jsx(n,{label:"Indigo",color:e,placeholder:"Focus me"}),o.jsx(n,{label:"Coral",color:l,placeholder:"Focus me"}),o.jsx(n,{label:"Forest",color:a,placeholder:"Focus me"})]})]})},i={render:()=>o.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:gap-4 cs:sm:gap-8",children:[o.jsxs("div",{children:[o.jsx("h3",{className:"cs:text-sm cs:font-semibold cs:text-gray-700 cs:mb-4",children:"Preset: indigo"}),o.jsx(g,{initialColor:"indigo",children:o.jsxs("div",{className:"cs:space-y-4",children:[o.jsx(s,{children:"Button"}),o.jsx(c,{label:"Checkbox"}),o.jsx(r,{label:"PillBox"}),o.jsx(n,{placeholder:"Input"})]})})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"cs:text-sm cs:font-semibold cs:text-gray-700 cs:mb-4",children:"Custom: brand indigo"}),o.jsx(g,{initialColor:e,children:o.jsxs("div",{className:"cs:space-y-4",children:[o.jsx(s,{children:"Button"}),o.jsx(c,{label:"Checkbox"}),o.jsx(r,{label:"PillBox"}),o.jsx(n,{placeholder:"Input"})]})})]})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    brandColor: indigo
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    brandColor: coral
  }
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    brandColor: forest
  }
}`,...x.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-4">
      <h3 className="cs:text-sm cs:font-semibold cs:text-gray-700">
        Per-component custom color (without UIColorProvider)
      </h3>

      <div className="cs:flex cs:flex-wrap cs:gap-4">
        <Button color={indigo}>Indigo</Button>
        <Button color={coral}>Coral</Button>
        <Button color={forest}>Forest</Button>
      </div>

      <div className="cs:flex cs:flex-wrap cs:gap-4">
        <Checkbox label="Indigo" color={indigo} />
        <Checkbox label="Coral" color={coral} />
        <Checkbox label="Forest" color={forest} />
      </div>

      <div className="cs:flex cs:flex-wrap cs:gap-4">
        <Radio label="Indigo" color={indigo} name="custom-radio" value="indigo" />
        <Radio label="Coral" color={coral} name="custom-radio" value="coral" />
        <Radio label="Forest" color={forest} name="custom-radio" value="forest" />
      </div>

      <div className="cs:flex cs:flex-wrap cs:gap-2">
        <PillBox label="Indigo" color={indigo} />
        <PillBox label="Coral" color={coral} />
        <PillBox label="Forest" color={forest} />
      </div>

      <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-3 cs:gap-4">
        <Input label="Indigo" color={indigo} placeholder="Focus me" />
        <Input label="Coral" color={coral} placeholder="Focus me" />
        <Input label="Forest" color={forest} placeholder="Focus me" />
      </div>
    </div>
}`,...t.parameters?.docs?.source},description:{story:"Each component with its own CustomColor (no UIColorProvider)",...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:gap-4 cs:sm:gap-8">
      <div>
        <h3 className="cs:text-sm cs:font-semibold cs:text-gray-700 cs:mb-4">
          Preset: indigo
        </h3>
        <UIColorProvider initialColor="indigo">
          <div className="cs:space-y-4">
            <Button>Button</Button>
            <Checkbox label="Checkbox" />
            <PillBox label="PillBox" />
            <Input placeholder="Input" />
          </div>
        </UIColorProvider>
      </div>
      <div>
        <h3 className="cs:text-sm cs:font-semibold cs:text-gray-700 cs:mb-4">
          Custom: brand indigo
        </h3>
        <UIColorProvider initialColor={indigo}>
          <div className="cs:space-y-4">
            <Button>Button</Button>
            <Checkbox label="Checkbox" />
            <PillBox label="PillBox" />
            <Input placeholder="Input" />
          </div>
        </UIColorProvider>
      </div>
    </div>
}`,...i.parameters?.docs?.source},description:{story:"Side-by-side comparison: preset vs custom color",...i.parameters?.docs?.description}}};const W=["Indigo","Coral","Forest","PerComponent","PresetVsCustom"];export{p as Coral,x as Forest,m as Indigo,t as PerComponent,i as PresetVsCustom,W as __namedExportsOrder,Q as default};
