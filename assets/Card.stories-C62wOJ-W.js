"use client";
import{j as e}from"./iframe-m5NElw2l.js";import{B as b}from"./Button-CYfYp8mi.js";import{I as p}from"./Input-Dhmijhgc.js";import{C as r}from"./Card-ClPJHExN.js";import"./preload-helper-CYfZjOYs.js";import"./colorContrast-C0ZIkquj.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-DumaUFqK.js";import"./useUIColor-BQPT7-YU.js";import"./FormFieldContext-BdRfQ4zK.js";import"./Label-C81Mus0J.js";import"./clsx-BYFsuUQf.js";const f={component:r,title:"Layout/Card",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]}}},s={render:()=>e.jsx(r,{children:e.jsx(r.Body,{children:"Simple card content."})})},d={render:()=>e.jsxs(r,{children:[e.jsx(r.Header,{children:"Card Title"}),e.jsx(r.Body,{children:"Card body content. This layout uses a header and footer."}),e.jsxs(r.Footer,{children:[e.jsx(b,{variant:"secondary",scale:"sm",children:"Cancel"}),e.jsx(b,{scale:"sm",children:"Save"})]})]})},t={render:()=>e.jsx("div",{className:"cs:space-y-4",children:["xs","sm","md","lg"].map(a=>e.jsxs(r,{scale:a,children:[e.jsxs(r.Header,{children:["Scale: ",a]}),e.jsxs(r.Body,{children:["Padding is ",a," size."]})]},a))})},o={render:()=>e.jsx(r,{bordered:!1,children:e.jsx(r.Body,{children:"Card without border."})})},l={render:()=>e.jsx(r,{shadow:!1,children:e.jsx(r.Body,{children:"Card without shadow."})})},c={render:()=>e.jsxs(r,{children:[e.jsx(r.Header,{children:"User Registration"}),e.jsx(r.Body,{children:e.jsxs("div",{className:"cs:space-y-3",children:[e.jsx(p,{label:"Name",placeholder:"John Doe"}),e.jsx(p,{label:"Email Address",placeholder:"example@mail.com"})]})}),e.jsxs(r.Footer,{children:[e.jsx(b,{variant:"secondary",scale:"sm",children:"Cancel"}),e.jsx(b,{scale:"sm",color:"green",children:"Register"})]})]})},n={render:()=>e.jsx("div",{className:"cs:w-48",children:e.jsx(r,{children:e.jsx(r.Stat,{label:"Total Students",value:120})})})},i={render:()=>e.jsx("div",{className:"cs:w-48",children:e.jsx(r,{children:e.jsx(r.Stat,{label:"Inactive",value:5,subText:"Withdrawn 4 / Graduated 1"})})})},m={render:()=>e.jsx("div",{className:"cs:w-48",children:e.jsx(r,{children:e.jsx(r.Stat,{label:"Pending",value:15,onClick:()=>alert("Clicked!")})})})},u={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-2 md:cs:grid-cols-5 cs:gap-4",children:[e.jsx(r,{children:e.jsx(r.Stat,{label:"Total",value:25,subText:"Withdrawn 4 / Graduated 1"})}),e.jsx(r,{bgColor:"cs:bg-blue-50 cs:dark:bg-blue-950",children:e.jsx(r.Stat,{label:"Submitted",value:10,labelColor:"cs:text-blue-600",valueColor:"cs:text-blue-800"})}),e.jsx(r,{bgColor:"cs:bg-green-50 cs:dark:bg-green-950",children:e.jsx(r.Stat,{label:"Approved",value:8,labelColor:"cs:text-green-600",valueColor:"cs:text-green-800"})}),e.jsx(r,{bgColor:"cs:bg-gray-50 cs:dark:bg-gray-800",children:e.jsx(r.Stat,{label:"Rejected",value:2,labelColor:"cs:text-gray-600",valueColor:"cs:text-gray-800"})}),e.jsx(r,{bgColor:"cs:bg-amber-50 cs:dark:bg-amber-950",children:e.jsx(r.Stat,{label:"Not Submitted",value:5,subText:"Survey only",labelColor:"cs:text-amber-600",valueColor:"cs:text-amber-800",subTextColor:"cs:text-amber-500"})})]})},C={render:()=>e.jsx("div",{className:"cs:space-y-4",children:["xs","sm","md","lg"].map(a=>e.jsx("div",{className:"cs:w-48",children:e.jsx(r,{scale:a,children:e.jsx(r.Stat,{label:`Scale: ${a}`,value:42,subText:"Sub text"})})},a))})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Card>
      <Card.Body>
        Simple card content.
      </Card.Body>
    </Card>
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Card>
      <Card.Header>Card Title</Card.Header>
      <Card.Body>
        Card body content. This layout uses a header and footer.
      </Card.Body>
      <Card.Footer>
        <Button variant="secondary" scale="sm">Cancel</Button>
        <Button scale="sm">Save</Button>
      </Card.Footer>
    </Card>
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-4">
      {(["xs", "sm", "md", "lg"] as const).map(scale => <Card key={scale} scale={scale}>
          <Card.Header>Scale: {scale}</Card.Header>
          <Card.Body>Padding is {scale} size.</Card.Body>
        </Card>)}
    </div>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Card bordered={false}>
      <Card.Body>Card without border.</Card.Body>
    </Card>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Card shadow={false}>
      <Card.Body>Card without shadow.</Card.Body>
    </Card>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Card>
      <Card.Header>User Registration</Card.Header>
      <Card.Body>
        <div className="cs:space-y-3">
          <Input label="Name" placeholder="John Doe" />
          <Input label="Email Address" placeholder="example@mail.com" />
        </div>
      </Card.Body>
      <Card.Footer>
        <Button variant="secondary" scale="sm">Cancel</Button>
        <Button scale="sm" color="green">Register</Button>
      </Card.Footer>
    </Card>
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="cs:w-48">
      <Card>
        <Card.Stat label="Total Students" value={120} />
      </Card>
    </div>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="cs:w-48">
      <Card>
        <Card.Stat label="Inactive" value={5} subText="Withdrawn 4 / Graduated 1" />
      </Card>
    </div>
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="cs:w-48">
      <Card>
        <Card.Stat label="Pending" value={15} onClick={() => alert("Clicked!")} />
      </Card>
    </div>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-2 md:cs:grid-cols-5 cs:gap-4">
      <Card>
        <Card.Stat label="Total" value={25} subText="Withdrawn 4 / Graduated 1" />
      </Card>
      <Card bgColor="cs:bg-blue-50 cs:dark:bg-blue-950">
        <Card.Stat label="Submitted" value={10} labelColor="cs:text-blue-600" valueColor="cs:text-blue-800" />
      </Card>
      <Card bgColor="cs:bg-green-50 cs:dark:bg-green-950">
        <Card.Stat label="Approved" value={8} labelColor="cs:text-green-600" valueColor="cs:text-green-800" />
      </Card>
      <Card bgColor="cs:bg-gray-50 cs:dark:bg-gray-800">
        <Card.Stat label="Rejected" value={2} labelColor="cs:text-gray-600" valueColor="cs:text-gray-800" />
      </Card>
      <Card bgColor="cs:bg-amber-50 cs:dark:bg-amber-950">
        <Card.Stat label="Not Submitted" value={5} subText="Survey only" labelColor="cs:text-amber-600" valueColor="cs:text-amber-800" subTextColor="cs:text-amber-500" />
      </Card>
    </div>
}`,...u.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-4">
      {(["xs", "sm", "md", "lg"] as const).map(scale => <div key={scale} className="cs:w-48">
          <Card scale={scale}>
            <Card.Stat label={\`Scale: \${scale}\`} value={42} subText="Sub text" />
          </Card>
        </div>)}
    </div>
}`,...C.parameters?.docs?.source}}};const W=["Default","WithHeaderAndFooter","Scales","WithoutBorder","WithoutShadow","Composed","StatCard","StatCardWithSubText","StatCardClickable","StatCardGrid","StatCardScales"];export{c as Composed,s as Default,t as Scales,n as StatCard,m as StatCardClickable,u as StatCardGrid,C as StatCardScales,i as StatCardWithSubText,d as WithHeaderAndFooter,o as WithoutBorder,l as WithoutShadow,W as __namedExportsOrder,f as default};
