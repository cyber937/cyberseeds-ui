"use client";
import{j as e,r as Y}from"./iframe-uuPSpAyG.js";import{c as I}from"./clsx-BYFsuUQf.js";import{B as f}from"./Button-D2kyB6nW.js";import"./preload-helper-CJpEdZxZ.js";import"./colorContrast-C0ZIkquj.js";import"./colorUtils-CzaG3QqU.js";import"./designTokens-RbONob3D.js";import"./Slot-C5ffSEkS.js";import"./useUIColor-piWDUgb3.js";const A={xs:"cs:px-2 cs:py-1.5 cs:gap-2 cs:text-xs",sm:"cs:px-3 cs:py-2 cs:gap-2 cs:text-xs",md:"cs:px-4 cs:py-3 cs:gap-3 cs:text-sm",lg:"cs:px-5 cs:py-4 cs:gap-3 cs:text-base"};function p({offset:a,limit:t,total:n,onChange:s,previousLabel:z="Previous",nextLabel:B="Next",showSummary:F=!0,scale:d="md",color:g,className:Z}){const D=n===0?0:a+1,H=Math.min(a+t,n),U=a<=0,X=a+t>=n;return e.jsxs("nav",{"aria-label":"Pagination",className:I("cs:flex cs:items-center cs:justify-between","cs:rounded-lg cs:border cs:border-gray-200 cs:dark:border-gray-700","cs:bg-white cs:dark:bg-gray-800","cs:text-gray-600 cs:dark:text-gray-300 cs:font-sans",A[d],Z),children:[F?e.jsxs("span",{children:["Showing"," ",e.jsx("span",{className:"cs:font-semibold cs:text-gray-900 cs:dark:text-gray-100 cs:tabular-nums",children:D.toLocaleString()}),"–",e.jsx("span",{className:"cs:font-semibold cs:text-gray-900 cs:dark:text-gray-100 cs:tabular-nums",children:H.toLocaleString()})," ","of"," ",e.jsx("span",{className:"cs:font-semibold cs:text-gray-900 cs:dark:text-gray-100 cs:tabular-nums",children:n.toLocaleString()})]}):e.jsx("span",{"aria-hidden":!0}),e.jsxs("div",{className:"cs:flex cs:items-center cs:gap-2",children:[e.jsx(f,{variant:"secondary",scale:d==="lg"?"md":"sm",color:g,disabled:U,onClick:()=>s(Math.max(0,a-t)),children:z}),e.jsx(f,{variant:"secondary",scale:d==="lg"?"md":"sm",color:g,disabled:X,onClick:()=>s(a+t),children:B})]})]})}p.__docgenInfo={description:`Compact paginator showing "X-Y of Z" with Previous / Next buttons.

The component is fully controlled — \`offset\`, \`limit\`, and \`total\` come
from the parent (typically URL-driven state) and \`onChange\` reports the
new offset back. No page-number jumps; the catalog is browsed
sequentially. This matches admin patterns where filters change the
working set frequently and "page 12 of 39,553" is rarely meaningful.

Buttons disable themselves at the boundaries:
- Previous when \`offset <= 0\`
- Next when \`offset + limit >= total\`

@example
\`\`\`tsx
<Pagination
  offset={offset}
  limit={50}
  total={total}
  onChange={(next) => updateUrl({ offset: next })}
/>
\`\`\``,methods:[],displayName:"Pagination",props:{offset:{required:!0,tsType:{name:"number"},description:"Zero-based offset of the current page's first row."},limit:{required:!0,tsType:{name:"number"},description:"Page size (rows per page)."},total:{required:!0,tsType:{name:"number"},description:"Total number of rows after filtering."},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(nextOffset: number) => void",signature:{arguments:[{type:{name:"number"},name:"nextOffset"}],return:{name:"void"}}},description:"Fires with the new offset when the user navigates."},previousLabel:{required:!1,tsType:{name:"string"},description:'Optional label for the "Previous" button. Defaults to "Previous".',defaultValue:{value:'"Previous"',computed:!1}},nextLabel:{required:!1,tsType:{name:"string"},description:'Optional label for the "Next" button. Defaults to "Next".',defaultValue:{value:'"Next"',computed:!1}},showSummary:{required:!1,tsType:{name:"boolean"},description:'Renders the count summary ("X-Y of Z"). Pass `false` to hide it when the\nsurrounding page already shows the totals.',defaultValue:{value:"true",computed:!1}},scale:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:"PresetColor | CustomColor | SemanticColor",elements:[{name:"union",raw:`| "red"
| "orange"
| "amber"
| "yellow"
| "lime"
| "green"
| "emerald"
| "teal"
| "cyan"
| "sky"
| "blue"
| "indigo"
| "violet"
| "purple"
| "fuchsia"
| "pink"
| "rose"
| "slate"
| "gray"
| "zinc"
| "neutral"
| "stone"`,elements:[{name:"literal",value:'"red"'},{name:"literal",value:'"orange"'},{name:"literal",value:'"amber"'},{name:"literal",value:'"yellow"'},{name:"literal",value:'"lime"'},{name:"literal",value:'"green"'},{name:"literal",value:'"emerald"'},{name:"literal",value:'"teal"'},{name:"literal",value:'"cyan"'},{name:"literal",value:'"sky"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"indigo"'},{name:"literal",value:'"violet"'},{name:"literal",value:'"purple"'},{name:"literal",value:'"fuchsia"'},{name:"literal",value:'"pink"'},{name:"literal",value:'"rose"'},{name:"literal",value:'"slate"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"zinc"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"stone"'}]},{name:"CustomColor"},{name:"union",raw:'"success" | "warning" | "error" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'}]}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ne={title:"Navigation/Pagination",component:p,parameters:{layout:"padded"},argTypes:{scale:{control:"select",options:["xs","sm","md","lg"]}}},r={args:{offset:0,limit:50,total:39553},render:a=>{const[t,n]=Y.useState(a.offset);return e.jsx(p,{...a,offset:t,onChange:s=>n(s)})}},o={args:{offset:0,limit:25,total:200,onChange:()=>{}}},l={args:{offset:100,limit:25,total:200,onChange:()=>{}}},i={args:{offset:175,limit:25,total:200,onChange:()=>{}}},m={args:{offset:0,limit:50,total:1,onChange:()=>{}}},c={args:{offset:0,limit:50,total:0,onChange:()=>{}}},u={args:{offset:50,limit:50,total:200,showSummary:!1,onChange:()=>{}}};var h,y,x;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    offset: 0,
    limit: 50,
    total: 39553
  },
  render: args => {
    const [offset, setOffset] = useState(args.offset);
    return <Pagination {...args} offset={offset} onChange={next => setOffset(next)} />;
  }
}`,...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var v,b,w;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    offset: 0,
    limit: 25,
    total: 200,
    onChange: () => {}
  }
}`,...(w=(b=o.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var C,P,S;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    offset: 100,
    limit: 25,
    total: 200,
    onChange: () => {}
  }
}`,...(S=(P=l.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var N,j,k;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    offset: 175,
    limit: 25,
    total: 200,
    onChange: () => {}
  }
}`,...(k=(j=i.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var T,q,L;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    offset: 0,
    limit: 50,
    total: 1,
    onChange: () => {}
  }
}`,...(L=(q=m.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var O,E,M;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    offset: 0,
    limit: 50,
    total: 0,
    onChange: () => {}
  }
}`,...(M=(E=c.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var R,V,_;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    offset: 50,
    limit: 50,
    total: 200,
    showSummary: false,
    onChange: () => {}
  }
}`,...(_=(V=u.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};const se=["Primary","FirstPage","MiddlePage","LastPage","SingleRow","Empty","HiddenSummary"];export{c as Empty,o as FirstPage,u as HiddenSummary,i as LastPage,l as MiddlePage,r as Primary,m as SingleRow,se as __namedExportsOrder,ne as default};
