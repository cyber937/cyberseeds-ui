"use client";
import{j as o,r as u}from"./iframe-Cwvb0Z0D.js";import{B as e}from"./Button-CxOaoCyA.js";import{C as c}from"./Checkbox-DrtNMi2a.js";import{G as C}from"./GroupBox-C2Gx9HxS.js";import{I as n}from"./Input-CrMi6TAl.js";import{P as H}from"./PhoneInput-BomZ3AHL.js";import{P as r}from"./PillBox-B3KlzNys.js";import{R as b,a as d}from"./RadioGroup-BAfgPjyM.js";import{S as J}from"./Switch-12jO74T0.js";import{T as K}from"./TextArea-BzEa7pZQ.js";import{U as h}from"./useUIColor-BTIPPGSW.js";import"./preload-helper-CJpEdZxZ.js";import"./colorMap-EN3et11X.js";import"./colorUtils-B5Tad61Q.js";import"./Label-Dci0iaZ3.js";import"./clsx-BYFsuUQf.js";import"./FormFieldContext-DaikLai8.js";const s={base:"#4f46e5",hover:"#4338ca",active:"#3730a3",focus:"#4f46e5",light:"#e0e7ff",lightText:"#312e81",border:"#a5b4fc"},l={base:"#f97066",hover:"#e04e45",active:"#c53030",focus:"#f97066",light:"#fff1f0",lightText:"#9b1c1c",border:"#fca5a1"},a={base:"#16a34a",hover:"#15803d",active:"#166534",focus:"#16a34a",light:"#dcfce7",lightText:"#14532d",border:"#86efac"},M=({brandColor:A})=>{const[D,L]=u.useState(""),[_,q]=u.useState(""),[g,z]=u.useState(!0);return o.jsx(h,{initialColor:A,children:o.jsxs(C,{label:"CustomColor Demo",className:"cs:space-y-4",children:[o.jsxs("div",{className:"cs:flex cs:gap-4",children:[o.jsx(e,{children:"Primary"}),o.jsx(e,{variant:"secondary",children:"Secondary"}),o.jsx(e,{disabled:!0,children:"Disabled"})]}),o.jsx(c,{label:"Checkbox"}),o.jsx(n,{label:"Input",placeholder:"Focus to see custom outline"}),o.jsx(H,{label:"Phone Number",value:D,onChange:L}),o.jsxs("div",{className:"cs:flex cs:gap-2",children:[o.jsx(r,{label:"Custom Pill"}),o.jsx(r,{label:"Another Pill"})]}),o.jsx(C,{label:"Radio Group",children:o.jsxs(d,{value:_,onChange:q,children:[o.jsx(d.Option,{label:"Option A",value:"a"}),o.jsx(d.Option,{label:"Option B",value:"b"}),o.jsx(d.Option,{label:"Option C",value:"c"})]})}),o.jsx(J,{checked:g,onClick:()=>z(!g),onLabel:"On",offLabel:"Off"}),o.jsx(K,{placeholder:"Focus to see custom outline"})]})})},po={component:M,title:"CustomColor",tags:["autodocs"],argTypes:{brandColor:{control:{type:"object"}}}},m={args:{brandColor:s}},p={args:{brandColor:l}},x={args:{brandColor:a}},t={render:()=>o.jsxs("div",{className:"cs:space-y-4",children:[o.jsx("h3",{className:"cs:text-sm cs:font-semibold cs:text-gray-700",children:"Per-component custom color (without UIColorProvider)"}),o.jsxs("div",{className:"cs:flex cs:gap-4",children:[o.jsx(e,{color:s,children:"Indigo"}),o.jsx(e,{color:l,children:"Coral"}),o.jsx(e,{color:a,children:"Forest"})]}),o.jsxs("div",{className:"cs:flex cs:gap-4",children:[o.jsx(c,{label:"Indigo",color:s}),o.jsx(c,{label:"Coral",color:l}),o.jsx(c,{label:"Forest",color:a})]}),o.jsxs("div",{className:"cs:flex cs:gap-4",children:[o.jsx(b,{label:"Indigo",color:s,name:"custom-radio",value:"indigo"}),o.jsx(b,{label:"Coral",color:l,name:"custom-radio",value:"coral"}),o.jsx(b,{label:"Forest",color:a,name:"custom-radio",value:"forest"})]}),o.jsxs("div",{className:"cs:flex cs:gap-2",children:[o.jsx(r,{label:"Indigo",color:s}),o.jsx(r,{label:"Coral",color:l}),o.jsx(r,{label:"Forest",color:a})]}),o.jsxs("div",{className:"cs:grid cs:grid-cols-3 cs:gap-4",children:[o.jsx(n,{label:"Indigo",color:s,placeholder:"Focus me"}),o.jsx(n,{label:"Coral",color:l,placeholder:"Focus me"}),o.jsx(n,{label:"Forest",color:a,placeholder:"Focus me"})]})]})},i={render:()=>o.jsxs("div",{className:"cs:grid cs:grid-cols-2 cs:gap-8",children:[o.jsxs("div",{children:[o.jsx("h3",{className:"cs:text-sm cs:font-semibold cs:text-gray-700 cs:mb-4",children:"Preset: indigo"}),o.jsx(h,{initialColor:"indigo",children:o.jsxs("div",{className:"cs:space-y-4",children:[o.jsx(e,{children:"Button"}),o.jsx(c,{label:"Checkbox"}),o.jsx(r,{label:"PillBox"}),o.jsx(n,{placeholder:"Input"})]})})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"cs:text-sm cs:font-semibold cs:text-gray-700 cs:mb-4",children:"Custom: brand indigo"}),o.jsx(h,{initialColor:s,children:o.jsxs("div",{className:"cs:space-y-4",children:[o.jsx(e,{children:"Button"}),o.jsx(c,{label:"Checkbox"}),o.jsx(r,{label:"PillBox"}),o.jsx(n,{placeholder:"Input"})]})})]})]})};var v,j,f;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    brandColor: indigo
  }
}`,...(f=(j=m.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var P,I,N;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    brandColor: coral
  }
}`,...(N=(I=p.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var B,y,F;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    brandColor: forest
  }
}`,...(F=(y=x.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var k,S,O,U,R;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-4">
      <h3 className="cs:text-sm cs:font-semibold cs:text-gray-700">
        Per-component custom color (without UIColorProvider)
      </h3>

      <div className="cs:flex cs:gap-4">
        <Button color={indigo}>Indigo</Button>
        <Button color={coral}>Coral</Button>
        <Button color={forest}>Forest</Button>
      </div>

      <div className="cs:flex cs:gap-4">
        <Checkbox label="Indigo" color={indigo} />
        <Checkbox label="Coral" color={coral} />
        <Checkbox label="Forest" color={forest} />
      </div>

      <div className="cs:flex cs:gap-4">
        <Radio label="Indigo" color={indigo} name="custom-radio" value="indigo" />
        <Radio label="Coral" color={coral} name="custom-radio" value="coral" />
        <Radio label="Forest" color={forest} name="custom-radio" value="forest" />
      </div>

      <div className="cs:flex cs:gap-2">
        <PillBox label="Indigo" color={indigo} />
        <PillBox label="Coral" color={coral} />
        <PillBox label="Forest" color={forest} />
      </div>

      <div className="cs:grid cs:grid-cols-3 cs:gap-4">
        <Input label="Indigo" color={indigo} placeholder="Focus me" />
        <Input label="Coral" color={coral} placeholder="Focus me" />
        <Input label="Forest" color={forest} placeholder="Focus me" />
      </div>
    </div>
}`,...(O=(S=t.parameters)==null?void 0:S.docs)==null?void 0:O.source},description:{story:"Each component with its own CustomColor (no UIColorProvider)",...(R=(U=t.parameters)==null?void 0:U.docs)==null?void 0:R.description}}};var w,T,E,G,V;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-2 cs:gap-8">
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
}`,...(E=(T=i.parameters)==null?void 0:T.docs)==null?void 0:E.source},description:{story:"Side-by-side comparison: preset vs custom color",...(V=(G=i.parameters)==null?void 0:G.docs)==null?void 0:V.description}}};const xo=["Indigo","Coral","Forest","PerComponent","PresetVsCustom"];export{p as Coral,x as Forest,m as Indigo,t as PerComponent,i as PresetVsCustom,xo as __namedExportsOrder,po as default};
