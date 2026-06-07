"use client";
import{r as l,j as e}from"./iframe-DnHwbLWn.js";import{c as h}from"./clsx-BYFsuUQf.js";import"./preload-helper-CJpEdZxZ.js";function U({children:p,separator:t="/",className:a}){const s=l.Children.toArray(p).filter(l.isValidElement),c=s.length-1;return e.jsx("nav",{"aria-label":"Breadcrumb",className:h("cs:font-sans cs:text-sm",a),children:e.jsx("ol",{className:"cs:flex cs:flex-wrap cs:items-center cs:gap-x-2 cs:gap-y-1 cs:list-none cs:p-0 cs:m-0",children:s.map((u,b)=>e.jsxs("li",{className:"cs:flex cs:items-center cs:gap-x-2",children:[u,b<c&&e.jsx("span",{className:"cs:text-gray-400 cs:dark:text-gray-500 cs:select-none","aria-hidden":"true",children:t})]},b))})})}const R=l.memo(function({children:t,href:a,current:s=!1,className:c,onClick:u}){return s||!a?e.jsx("span",{"aria-current":s?"page":void 0,className:h(s?"cs:text-gray-900 cs:dark:text-gray-100 cs:font-medium":"cs:text-gray-600 cs:dark:text-gray-400",c),children:t}):e.jsx("a",{href:a,onClick:u,className:h("cs:text-gray-600 cs:dark:text-gray-400 cs:hover:text-gray-900 cs:dark:hover:text-gray-200 cs:hover:underline cs:focus-visible:outline-2 cs:focus-visible:outline-offset-2 cs:focus-visible:outline-blue-600 cs:rounded-sm",c),children:t})}),r=Object.assign(U,{Item:R});U.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbRoot",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},separator:{required:!1,tsType:{name:"ReactNode"},description:'Custom separator between items. Default is "/".',defaultValue:{value:'"/"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const q={component:r,title:"Layout/Breadcrumb",tags:["autodocs"]},m={render:()=>e.jsxs(r,{children:[e.jsx(r.Item,{href:"/",children:"Home"}),e.jsx(r.Item,{href:"/items",children:"Items"}),e.jsx(r.Item,{current:!0,children:"SKU-1234"})]})},n={render:()=>e.jsxs(r,{children:[e.jsx(r.Item,{href:"/",children:"Home"}),e.jsx(r.Item,{href:"/items",children:"Items"}),e.jsx(r.Item,{href:"/items/sku-1234",children:"SKU-1234"}),e.jsx(r.Item,{current:!0,children:"Movements"})]})},d={render:()=>e.jsxs(r,{separator:"›",children:[e.jsx(r.Item,{href:"/",children:"Home"}),e.jsx(r.Item,{href:"/dashboard",children:"Dashboard"}),e.jsx(r.Item,{current:!0,children:"Settings"})]})},o={render:()=>e.jsxs(r,{separator:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:e.jsx("polyline",{points:"9 18 15 12 9 6"})}),children:[e.jsx(r.Item,{href:"/",children:"Home"}),e.jsx(r.Item,{href:"/admin",children:"Admin"}),e.jsx(r.Item,{current:!0,children:"Users"})]})},i={render:()=>e.jsx(r,{children:e.jsx(r.Item,{current:!0,children:"Dashboard"})})};var I,x,B;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/items">Items</Breadcrumb.Item>
      <Breadcrumb.Item current>SKU-1234</Breadcrumb.Item>
    </Breadcrumb>
}`,...(B=(x=m.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var f,g,j;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/items">Items</Breadcrumb.Item>
      <Breadcrumb.Item href="/items/sku-1234">SKU-1234</Breadcrumb.Item>
      <Breadcrumb.Item current>Movements</Breadcrumb.Item>
    </Breadcrumb>
}`,...(j=(g=n.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var v,y,S;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Breadcrumb separator="›">
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/dashboard">Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item current>Settings</Breadcrumb.Item>
    </Breadcrumb>
}`,...(S=(y=d.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var k,D,N;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Breadcrumb separator={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <polyline points="9 18 15 12 9 6" />
        </svg>}>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/admin">Admin</Breadcrumb.Item>
      <Breadcrumb.Item current>Users</Breadcrumb.Item>
    </Breadcrumb>
}`,...(N=(D=o.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var H,w,C;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <Breadcrumb.Item current>Dashboard</Breadcrumb.Item>
    </Breadcrumb>
}`,...(C=(w=i.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const A=["Default","Deep","ChevronSeparator","SvgSeparator","SingleItem"];export{d as ChevronSeparator,n as Deep,m as Default,i as SingleItem,o as SvgSeparator,A as __namedExportsOrder,q as default};
