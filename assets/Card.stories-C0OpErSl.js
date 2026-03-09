"use client";
import{j as e}from"./iframe-xpODeKre.js";import{B as p}from"./Button-BwOKmFUz.js";import{I as x}from"./Input-DWix1U7_.js";import{C as a}from"./Card-C4K3Je7b.js";import"./preload-helper-CYfZjOYs.js";import"./colorContrast-C0ZIkquj.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-DumaUFqK.js";import"./useUIColor-rs1v8CsH.js";import"./FormFieldContext-BgabJ0RT.js";import"./Label-FrOtQjDZ.js";import"./clsx-BYFsuUQf.js";const f={component:a,title:"Layout/Card",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]}}},s={render:()=>e.jsx(a,{children:e.jsx(a.Body,{children:"Simple card content."})})},d={render:()=>e.jsxs(a,{children:[e.jsx(a.Header,{children:"Card Title"}),e.jsx(a.Body,{children:"Card body content. This layout uses a header and footer."}),e.jsxs(a.Footer,{children:[e.jsx(p,{variant:"secondary",scale:"sm",children:"Cancel"}),e.jsx(p,{scale:"sm",children:"Save"})]})]})},t={render:()=>e.jsx("div",{className:"cs:space-y-4",children:["xs","sm","md","lg"].map(r=>e.jsxs(a,{scale:r,children:[e.jsxs(a.Header,{children:["Scale: ",r]}),e.jsxs(a.Body,{children:["Padding is ",r," size."]})]},r))})},c={render:()=>e.jsx(a,{bordered:!1,children:e.jsx(a.Body,{children:"Card without border."})})},n={render:()=>e.jsx(a,{shadow:!1,children:e.jsx(a.Body,{children:"Card without shadow."})})},o={render:()=>e.jsxs(a,{children:[e.jsx(a.Header,{children:"User Registration"}),e.jsx(a.Body,{children:e.jsxs("div",{className:"cs:space-y-3",children:[e.jsx(x,{label:"Name",placeholder:"John Doe"}),e.jsx(x,{label:"Email Address",placeholder:"example@mail.com"})]})}),e.jsxs(a.Footer,{children:[e.jsx(p,{variant:"secondary",scale:"sm",children:"Cancel"}),e.jsx(p,{scale:"sm",color:"green",children:"Register"})]})]})},l={render:()=>e.jsx("div",{className:"cs:w-48",children:e.jsx(a,{children:e.jsx(a.Stat,{label:"Total Students",value:120})})})},i={render:()=>e.jsx("div",{className:"cs:w-48",children:e.jsx(a,{children:e.jsx(a.Stat,{label:"Inactive",value:5,subText:"Withdrawn 4 / Graduated 1"})})})},m={render:()=>e.jsx("div",{className:"cs:w-48",children:e.jsx(a,{children:e.jsx(a.Stat,{label:"Pending",value:15,onClick:()=>alert("Clicked!")})})})},u={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-2 md:cs:grid-cols-5 cs:gap-4",children:[e.jsx(a,{children:e.jsx(a.Stat,{label:"Total",value:25,subText:"Withdrawn 4 / Graduated 1"})}),e.jsx(a,{className:"cs:bg-blue-50 cs:dark:bg-blue-950",children:e.jsx(a.Stat,{label:"Submitted",value:10})}),e.jsx(a,{className:"cs:bg-green-50 cs:dark:bg-green-950",children:e.jsx(a.Stat,{label:"Approved",value:8})}),e.jsx(a,{className:"cs:bg-gray-50 cs:dark:bg-gray-800",children:e.jsx(a.Stat,{label:"Rejected",value:2})}),e.jsx(a,{className:"cs:bg-amber-50 cs:dark:bg-amber-950",children:e.jsx(a.Stat,{label:"Not Submitted",value:5,subText:"Survey only"})})]})},C={render:()=>e.jsx("div",{className:"cs:space-y-4",children:["xs","sm","md","lg"].map(r=>e.jsx("div",{className:"cs:w-48",children:e.jsx(a,{scale:r,children:e.jsx(a.Stat,{label:`Scale: ${r}`,value:42,subText:"Sub text"})})},r))})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Card bordered={false}>
      <Card.Body>Card without border.</Card.Body>
    </Card>
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Card shadow={false}>
      <Card.Body>Card without shadow.</Card.Body>
    </Card>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="cs:w-48">
      <Card>
        <Card.Stat label="Total Students" value={120} />
      </Card>
    </div>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
      <Card className="cs:bg-blue-50 cs:dark:bg-blue-950">
        <Card.Stat label="Submitted" value={10} />
      </Card>
      <Card className="cs:bg-green-50 cs:dark:bg-green-950">
        <Card.Stat label="Approved" value={8} />
      </Card>
      <Card className="cs:bg-gray-50 cs:dark:bg-gray-800">
        <Card.Stat label="Rejected" value={2} />
      </Card>
      <Card className="cs:bg-amber-50 cs:dark:bg-amber-950">
        <Card.Stat label="Not Submitted" value={5} subText="Survey only" />
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
}`,...C.parameters?.docs?.source}}};const W=["Default","WithHeaderAndFooter","Scales","WithoutBorder","WithoutShadow","Composed","StatCard","StatCardWithSubText","StatCardClickable","StatCardGrid","StatCardScales"];export{o as Composed,s as Default,t as Scales,l as StatCard,m as StatCardClickable,u as StatCardGrid,C as StatCardScales,i as StatCardWithSubText,d as WithHeaderAndFooter,c as WithoutBorder,n as WithoutShadow,W as __namedExportsOrder,f as default};
