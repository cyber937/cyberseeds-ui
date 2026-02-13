"use client";
import{j as e}from"./iframe-BH6SszEl.js";import{B as l}from"./Button-9ovrN6Dk.js";import{I as i}from"./Input-BfV3lcmB.js";import{C as r}from"./Card-C1NxiuKz.js";import"./preload-helper-CJpEdZxZ.js";import"./colorContrast-C0ZIkquj.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-DumaUFqK.js";import"./useUIColor-ByGmMwax.js";import"./FormFieldContext-DLt5Iq4U.js";import"./Label-B4gz59JQ.js";import"./clsx-BYFsuUQf.js";const k={component:r,title:"Layout/Card",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]}}},s={render:()=>e.jsx(r,{children:e.jsx(r.Body,{children:"Simple card content."})})},d={render:()=>e.jsxs(r,{children:[e.jsx(r.Header,{children:"Card Title"}),e.jsx(r.Body,{children:"Card body content. This layout uses a header and footer."}),e.jsxs(r.Footer,{children:[e.jsx(l,{variant:"secondary",scale:"sm",children:"Cancel"}),e.jsx(l,{scale:"sm",children:"Save"})]})]})},o={render:()=>e.jsx("div",{className:"cs:space-y-4",children:["xs","sm","md","lg"].map(a=>e.jsxs(r,{scale:a,children:[e.jsxs(r.Header,{children:["Scale: ",a]}),e.jsxs(r.Body,{children:["Padding is ",a," size."]})]},a))})},n={render:()=>e.jsx(r,{bordered:!1,children:e.jsx(r.Body,{children:"Card without border."})})},t={render:()=>e.jsx(r,{shadow:!1,children:e.jsx(r.Body,{children:"Card without shadow."})})},c={render:()=>e.jsxs(r,{children:[e.jsx(r.Header,{children:"User Registration"}),e.jsx(r.Body,{children:e.jsxs("div",{className:"cs:space-y-3",children:[e.jsx(i,{label:"Name",placeholder:"John Doe"}),e.jsx(i,{label:"Email Address",placeholder:"example@mail.com"})]})}),e.jsxs(r.Footer,{children:[e.jsx(l,{variant:"secondary",scale:"sm",children:"Cancel"}),e.jsx(l,{scale:"sm",color:"green",children:"Register"})]})]})};var m,p,C;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Card>
      <Card.Body>
        Simple card content.
      </Card.Body>
    </Card>
}`,...(C=(p=s.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var h,u,x;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(u=d.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var y,B,j;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-4">
      {(["xs", "sm", "md", "lg"] as const).map(scale => <Card key={scale} scale={scale}>
          <Card.Header>Scale: {scale}</Card.Header>
          <Card.Body>Padding is {scale} size.</Card.Body>
        </Card>)}
    </div>
}`,...(j=(B=o.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var g,S,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Card bordered={false}>
      <Card.Body>Card without border.</Card.Body>
    </Card>
}`,...(f=(S=n.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var v,H,b;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Card shadow={false}>
      <Card.Body>Card without shadow.</Card.Body>
    </Card>
}`,...(b=(H=t.parameters)==null?void 0:H.docs)==null?void 0:b.source}}};var w,F,N;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(N=(F=c.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};const L=["Default","WithHeaderAndFooter","Scales","WithoutBorder","WithoutShadow","Composed"];export{c as Composed,s as Default,o as Scales,d as WithHeaderAndFooter,n as WithoutBorder,t as WithoutShadow,L as __namedExportsOrder,k as default};
