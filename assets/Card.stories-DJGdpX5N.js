"use client";
import{j as e}from"./iframe-DnHwbLWn.js";import{B as b}from"./Button-bmTELk8U.js";import{I as p}from"./Input-DSDRXBRU.js";import{C as r}from"./Card-BMcTd9a6.js";import"./preload-helper-CJpEdZxZ.js";import"./colorContrast-C0ZIkquj.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-RbONob3D.js";import"./Slot-DpTkjzQA.js";import"./clsx-BYFsuUQf.js";import"./useUIColor-Dv37HYfb.js";import"./FormFieldContext-B_PjsPfp.js";import"./Label-ZHORWJsP.js";const ce={component:r,title:"Layout/Card",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]}}},s={render:()=>e.jsx(r,{children:e.jsx(r.Body,{children:"Simple card content."})})},d={render:()=>e.jsxs(r,{children:[e.jsx(r.Header,{children:"Card Title"}),e.jsx(r.Body,{children:"Card body content. This layout uses a header and footer."}),e.jsxs(r.Footer,{children:[e.jsx(b,{variant:"secondary",scale:"sm",children:"Cancel"}),e.jsx(b,{scale:"sm",children:"Save"})]})]})},t={render:()=>e.jsx("div",{className:"cs:space-y-4",children:["xs","sm","md","lg"].map(a=>e.jsxs(r,{scale:a,children:[e.jsxs(r.Header,{children:["Scale: ",a]}),e.jsxs(r.Body,{children:["Padding is ",a," size."]})]},a))})},o={render:()=>e.jsx(r,{bordered:!1,children:e.jsx(r.Body,{children:"Card without border."})})},l={render:()=>e.jsx(r,{shadow:!1,children:e.jsx(r.Body,{children:"Card without shadow."})})},c={render:()=>e.jsxs(r,{children:[e.jsx(r.Header,{children:"User Registration"}),e.jsx(r.Body,{children:e.jsxs("div",{className:"cs:space-y-3",children:[e.jsx(p,{label:"Name",placeholder:"John Doe"}),e.jsx(p,{label:"Email Address",placeholder:"example@mail.com"})]})}),e.jsxs(r.Footer,{children:[e.jsx(b,{variant:"secondary",scale:"sm",children:"Cancel"}),e.jsx(b,{scale:"sm",color:"green",children:"Register"})]})]})},n={render:()=>e.jsx("div",{className:"cs:w-48",children:e.jsx(r,{children:e.jsx(r.Stat,{label:"Total Students",value:120})})})},i={render:()=>e.jsx("div",{className:"cs:w-48",children:e.jsx(r,{children:e.jsx(r.Stat,{label:"Inactive",value:5,subText:"Withdrawn 4 / Graduated 1"})})})},m={render:()=>e.jsx("div",{className:"cs:w-48",children:e.jsx(r,{children:e.jsx(r.Stat,{label:"Pending",value:15,onClick:()=>alert("Clicked!")})})})},u={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-2 md:cs:grid-cols-5 cs:gap-4",children:[e.jsx(r,{children:e.jsx(r.Stat,{label:"Total",value:25,subText:"Withdrawn 4 / Graduated 1"})}),e.jsx(r,{bgColor:"cs:bg-blue-50 cs:dark:bg-blue-950",children:e.jsx(r.Stat,{label:"Submitted",value:10,labelColor:"cs:text-blue-600",valueColor:"cs:text-blue-800"})}),e.jsx(r,{bgColor:"cs:bg-green-50 cs:dark:bg-green-950",children:e.jsx(r.Stat,{label:"Approved",value:8,labelColor:"cs:text-green-600",valueColor:"cs:text-green-800"})}),e.jsx(r,{bgColor:"cs:bg-gray-50 cs:dark:bg-gray-800",children:e.jsx(r.Stat,{label:"Rejected",value:2,labelColor:"cs:text-gray-600",valueColor:"cs:text-gray-800"})}),e.jsx(r,{bgColor:"cs:bg-amber-50 cs:dark:bg-amber-950",children:e.jsx(r.Stat,{label:"Not Submitted",value:5,subText:"Survey only",labelColor:"cs:text-amber-600",valueColor:"cs:text-amber-800",subTextColor:"cs:text-amber-500"})})]})},C={render:()=>e.jsx("div",{className:"cs:space-y-4",children:["xs","sm","md","lg"].map(a=>e.jsx("div",{className:"cs:w-48",children:e.jsx(r,{scale:a,children:e.jsx(r.Stat,{label:`Scale: ${a}`,value:42,subText:"Sub text"})})},a))})};var x,g,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Card>
      <Card.Body>
        Simple card content.
      </Card.Body>
    </Card>
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var S,v,j;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(j=(v=d.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var y,B,w;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-4">
      {(["xs", "sm", "md", "lg"] as const).map(scale => <Card key={scale} scale={scale}>
          <Card.Header>Scale: {scale}</Card.Header>
          <Card.Body>Padding is {scale} size.</Card.Body>
        </Card>)}
    </div>
}`,...(w=(B=t.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var T,N,k;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Card bordered={false}>
      <Card.Body>Card without border.</Card.Body>
    </Card>
}`,...(k=(N=o.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var f,W,H;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Card shadow={false}>
      <Card.Body>Card without shadow.</Card.Body>
    </Card>
}`,...(H=(W=l.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var F,R,A;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(A=(R=c.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var G,I,D;n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="cs:w-48">
      <Card>
        <Card.Stat label="Total Students" value={120} />
      </Card>
    </div>
}`,...(D=(I=n.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var E,P,z;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="cs:w-48">
      <Card>
        <Card.Stat label="Inactive" value={5} subText="Withdrawn 4 / Graduated 1" />
      </Card>
    </div>
}`,...(z=(P=i.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var J,U,_;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div className="cs:w-48">
      <Card>
        <Card.Stat label="Pending" value={15} onClick={() => alert("Clicked!")} />
      </Card>
    </div>
}`,...(_=(U=m.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var $,L,O;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(O=(L=u.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var q,K,M;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="cs:space-y-4">
      {(["xs", "sm", "md", "lg"] as const).map(scale => <div key={scale} className="cs:w-48">
          <Card scale={scale}>
            <Card.Stat label={\`Scale: \${scale}\`} value={42} subText="Sub text" />
          </Card>
        </div>)}
    </div>
}`,...(M=(K=C.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};const ne=["Default","WithHeaderAndFooter","Scales","WithoutBorder","WithoutShadow","Composed","StatCard","StatCardWithSubText","StatCardClickable","StatCardGrid","StatCardScales"];export{c as Composed,s as Default,t as Scales,n as StatCard,m as StatCardClickable,u as StatCardGrid,C as StatCardScales,i as StatCardWithSubText,d as WithHeaderAndFooter,o as WithoutBorder,l as WithoutShadow,ne as __namedExportsOrder,ce as default};
