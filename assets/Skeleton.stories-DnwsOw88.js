"use client";
import{j as e}from"./iframe-B1uMaBYR.js";import{c as m}from"./clsx-BYFsuUQf.js";import"./preload-helper-CJpEdZxZ.js";const f={xs:"cs:h-3",sm:"cs:h-3.5",md:"cs:h-4",lg:"cs:h-5"},v="cs:bg-gray-200 cs:dark:bg-gray-700 cs:animate-pulse cs:motion-reduce:animate-none";function s(a){if(a!==void 0)return typeof a=="number"?`${a}px`:a}function r({variant:a="text",width:u,height:M,lines:t,scale:p="md",className:h}){if(a==="text"&&t&&t>1)return e.jsx("div",{role:"status","aria-label":"Loading","aria-live":"polite","aria-busy":"true",className:m("cs:flex cs:flex-col cs:gap-2",h),children:Array.from({length:t}).map((I,x)=>{const H=x===t-1;return e.jsx("div",{className:m(v,"cs:rounded-md",f[p]),style:{width:H?"60%":s(u)??"100%"}},x)})});const g=a==="circular",V=g?"cs:rounded-full":"cs:rounded-md",D={width:s(u)??(a==="text"?"100%":void 0),height:s(M)??(a==="text"?void 0:g?s(u)??"40px":void 0)};return e.jsx("div",{role:"status","aria-label":"Loading","aria-live":"polite","aria-busy":"true",className:m(v,V,a==="text"&&f[p],h),style:D})}r.__docgenInfo={description:'Placeholder skeleton shown while content is loading.\n\nThree variants:\n- `"text"` (default): full-width pulsing bar sized to a line of body text.\n- `"circular"`: perfect circle, takes `width` × `height` (avatar-shaped).\n- `"rectangular"`: rectangular block (cards, image stand-ins).\n\nThe pulsing animation is suppressed under `prefers-reduced-motion: reduce`\n(via Tailwind\'s `motion-reduce` variant) so the placeholder still reads as\n"loading" but doesn\'t move.\n\n@example Single line\n```tsx\n<Skeleton width="60%" />\n```\n\n@example Avatar\n```tsx\n<Skeleton variant="circular" width={40} height={40} />\n```\n\n@example Multi-line paragraph\n```tsx\n<Skeleton lines={3} />\n```',methods:[],displayName:"Skeleton",props:{variant:{required:!1,tsType:{name:"union",raw:'"text" | "circular" | "rectangular"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"circular"'},{name:"literal",value:'"rectangular"'}]},description:'"text" sizes to typical line-height; "circular" rounds fully.',defaultValue:{value:'"text"',computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},lines:{required:!1,tsType:{name:"number"},description:"Text variant: stack N placeholder lines with subtle width variation."},scale:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"Text-only — picks the default height based on font size.",defaultValue:{value:'"md"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const G={title:"Display/Skeleton",component:r,parameters:{layout:"padded"},argTypes:{variant:{control:"select",options:["text","circular","rectangular"]},scale:{control:"select",options:["xs","sm","md","lg"]}}},n={args:{width:200}},i={args:{variant:"circular",width:40,height:40}},l={args:{variant:"rectangular",width:"100%",height:120}},o={args:{lines:4}},c={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(r,{variant:"circular",width:40,height:40}),e.jsxs("div",{className:"flex flex-1 flex-col gap-2",children:[e.jsx(r,{width:"40%"}),e.jsx(r,{width:"80%"})]})]})},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-3 rounded-lg border border-slate-200 p-4",children:[e.jsx(r,{variant:"rectangular",width:"100%",height:120}),e.jsx(r,{width:"70%"}),e.jsx(r,{lines:2})]})};var w,y,b;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    width: 200
  }
}`,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var S,k,j;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: "circular",
    width: 40,
    height: 40
  }
}`,...(j=(k=i.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var T,N,q;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: "rectangular",
    width: "100%",
    height: 120
  }
}`,...(q=(N=l.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var L,C,P;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    lines: 4
  }
}`,...(P=(C=o.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var R,_,z;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Skeleton variant="circular" width={40} height={40} />
      <div className="flex flex-1 flex-col gap-2">
        <Skeleton width="40%" />
        <Skeleton width="80%" />
      </div>
    </div>
}`,...(z=(_=c.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var A,O,E;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3 rounded-lg border border-slate-200 p-4">
      <Skeleton variant="rectangular" width="100%" height={120} />
      <Skeleton width="70%" />
      <Skeleton lines={2} />
    </div>
}`,...(E=(O=d.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const J=["Primary","Avatar","Rectangle","Paragraph","RowOfThree","CardLoader"];export{i as Avatar,d as CardLoader,o as Paragraph,n as Primary,l as Rectangle,c as RowOfThree,J as __namedExportsOrder,G as default};
