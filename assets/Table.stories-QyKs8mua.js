"use client";
import{j as e,r as u}from"./iframe-BvSZAKLD.js";import{B as P}from"./Badge-DDpdvzb9.js";import{c as t}from"./clsx-BYFsuUQf.js";import"./preload-helper-CJpEdZxZ.js";import"./colorContrast-C0ZIkquj.js";import"./colorUtils-CzaG3QqU.js";import"./useUIColor-DuigiTdC.js";const g=u.createContext("md"),_={xs:"cs:px-2 cs:py-1.5 cs:text-xs",sm:"cs:px-3 cs:py-2 cs:text-xs",md:"cs:px-4 cs:py-2 cs:text-sm",lg:"cs:px-5 cs:py-3 cs:text-base"},E={xs:"cs:px-2 cs:py-2 cs:text-[0.625rem]",sm:"cs:px-3 cs:py-2.5 cs:text-xs",md:"cs:px-4 cs:py-3 cs:text-xs",lg:"cs:px-5 cs:py-3 cs:text-sm"},L={left:"cs:text-left",right:"cs:text-right",center:"cs:text-center"};function a({scale:r="md",striped:l,bordered:s=!0,className:n,children:d,...T}){return e.jsx(g.Provider,{value:r,children:e.jsx("div",{className:t("cs:overflow-x-auto cs:bg-white cs:dark:bg-gray-800",s&&"cs:rounded-lg cs:border cs:border-gray-200 cs:dark:border-gray-700 cs:shadow-sm"),children:e.jsx("table",{...T,"data-striped":l?"true":void 0,className:t("cs:min-w-full cs:divide-y cs:divide-gray-200 cs:dark:divide-gray-700 cs:font-sans",n),children:d})})})}function A({children:r,className:l,...s}){return e.jsx("thead",{...s,className:t("cs:bg-gray-50 cs:dark:bg-gray-900","cs:text-gray-500 cs:dark:text-gray-300","cs:uppercase cs:tracking-wide",l),children:r})}function D({children:r,className:l,...s}){return e.jsx("tbody",{...s,className:t("cs:divide-y cs:divide-gray-100 cs:dark:divide-gray-800","cs:[table[data-striped='true']_&>tr:nth-child(even)]:bg-gray-50","cs:dark:[table[data-striped='true']_&>tr:nth-child(even)]:bg-gray-900/40",l),children:r})}function K({interactive:r,className:l,children:s,...n}){return e.jsx("tr",{...n,"data-interactive":r?"true":void 0,className:t("cs:transition-colors",r?"cs:cursor-pointer cs:hover:bg-gray-50 cs:dark:hover:bg-gray-700/40":"cs:hover:bg-gray-50 cs:dark:hover:bg-gray-700/20",l),children:s})}function U({align:r="left",className:l,children:s,...n}){const d=u.useContext(g);return e.jsx("th",{scope:"col",...n,className:t("cs:font-semibold",E[d],L[r],l),children:s})}function O({align:r="left",numeric:l,className:s,children:n,...d}){const T=u.useContext(g);return e.jsx("td",{...d,className:t("cs:text-gray-700 cs:dark:text-gray-200 cs:align-middle",_[T],L[r],l&&"cs:tabular-nums",s),children:n})}a.Head=A;a.Body=D;a.Row=K;a.HeaderCell=U;a.Cell=O;a.__docgenInfo={description:`Compound table primitive.

\`\`\`tsx
<Table striped scale="md">
  <Table.Head>
    <Table.Row>
      <Table.HeaderCell>SKU</Table.HeaderCell>
      <Table.HeaderCell align="right">On hand</Table.HeaderCell>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    {rows.map(r => (
      <Table.Row key={r.sku} interactive onClick={() => open(r)}>
        <Table.Cell>{r.sku}</Table.Cell>
        <Table.Cell align="right" numeric>{r.onHand}</Table.Cell>
      </Table.Row>
    ))}
  </Table.Body>
</Table>
\`\`\`

Works alongside TanStack Table's headless mode — feed \`flexRender(...)\` into
\`<Table.Cell>\` / \`<Table.HeaderCell>\` and let TanStack drive data while the
compound handles styling and accessibility.

\`scale\` propagates through context so nested cells pick up the right
padding without prop drilling.`,methods:[{name:"Head",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>`,optional:!1,type:{name:"HTMLAttributes",elements:[{name:"HTMLTableSectionElement"}],raw:"HTMLAttributes<HTMLTableSectionElement>",alias:"HTMLAttributes"}}],returns:null},{name:"Body",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>`,optional:!1,type:{name:"HTMLAttributes",elements:[{name:"HTMLTableSectionElement"}],raw:"HTMLAttributes<HTMLTableSectionElement>",alias:"HTMLAttributes"}}],returns:null},{name:"Row",docblock:null,modifiers:["static"],params:[{name:`{
  interactive,
  className,
  children,
  ...props
}: TableRowProps`,optional:!1,type:{name:"TableRowProps",alias:"TableRowProps"}}],returns:null},{name:"HeaderCell",docblock:null,modifiers:["static"],params:[{name:`{
  align = "left",
  className,
  children,
  ...props
}: TableHeaderCellProps`,optional:!1,type:{name:"TableHeaderCellProps",alias:"TableHeaderCellProps"}}],returns:null},{name:"Cell",docblock:null,modifiers:["static"],params:[{name:`{
  align = "left",
  numeric,
  className,
  children,
  ...props
}: TableCellProps`,optional:!1,type:{name:"TableCellProps",alias:"TableCellProps"}}],returns:null}],displayName:"Table",props:{scale:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},striped:{required:!1,tsType:{name:"boolean"},description:"Alternate-row backgrounds."},bordered:{required:!1,tsType:{name:"boolean"},description:"Outer wrapper gets a border and rounded corners when true (default).",defaultValue:{value:"true",computed:!1}}},composes:["HTMLAttributes"]};const z={title:"Display/Table",component:a,parameters:{layout:"padded"},argTypes:{scale:{control:"select",options:["xs","sm","md","lg"]},striped:{control:"boolean"},bordered:{control:"boolean"}}},m=[{sku:"WIDGET-1",description:"Standard widget",status:"active",on_hand:12,price:"1.50"},{sku:"WIDGET-2",description:"Heavy duty widget",status:"active",on_hand:4,price:"2.99"},{sku:"GADGET-1",description:"Discontinued gadget",status:"discontinued",on_hand:0,price:"9.99"},{sku:"TOOL-7",description:"Clearance tool",status:"clearance",on_hand:3,price:"0.50"}],c={args:{scale:"md"},render:r=>e.jsxs(a,{...r,children:[e.jsx(a.Head,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{children:"SKU"}),e.jsx(a.HeaderCell,{children:"Description"}),e.jsx(a.HeaderCell,{children:"Status"}),e.jsx(a.HeaderCell,{align:"right",children:"On hand"}),e.jsx(a.HeaderCell,{align:"right",children:"Price"})]})}),e.jsx(a.Body,{children:m.map(l=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:l.sku}),e.jsx(a.Cell,{children:l.description}),e.jsx(a.Cell,{children:l.status}),e.jsx(a.Cell,{align:"right",numeric:!0,children:l.on_hand}),e.jsxs(a.Cell,{align:"right",numeric:!0,children:["$",l.price]})]},l.sku))})]})},i={args:{striped:!0},render:c.render},o={args:{},render:r=>e.jsxs(a,{...r,children:[e.jsx(a.Head,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{children:"SKU"}),e.jsx(a.HeaderCell,{children:"Description"})]})}),e.jsx(a.Body,{children:m.map(l=>e.jsxs(a.Row,{interactive:!0,onClick:()=>alert(`Clicked ${l.sku}`),children:[e.jsx(a.Cell,{children:l.sku}),e.jsx(a.Cell,{children:l.description})]},l.sku))})]})},b={args:{},render:r=>e.jsxs(a,{...r,children:[e.jsx(a.Head,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{children:"SKU"}),e.jsx(a.HeaderCell,{children:"Status"})]})}),e.jsx(a.Body,{children:m.map(l=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:l.sku}),e.jsx(a.Cell,{children:e.jsx(P,{color:l.status==="active"?"emerald":l.status==="clearance"?"amber":"slate",children:l.status})})]},l.sku))})]})},p={render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:["xs","sm","md","lg"].map(r=>e.jsxs("div",{children:[e.jsxs("p",{className:"mb-1 text-xs text-slate-500",children:['scale="',r,'"']}),e.jsxs(a,{scale:r,children:[e.jsx(a.Head,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{children:"SKU"}),e.jsx(a.HeaderCell,{align:"right",children:"Qty"})]})}),e.jsx(a.Body,{children:m.slice(0,2).map(l=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:l.sku}),e.jsx(a.Cell,{align:"right",numeric:!0,children:l.on_hand})]},l.sku))})]})]},r))})};var x,h,C;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    scale: "md"
  },
  render: args => <Table {...args}>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>SKU</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell align="right">On hand</Table.HeaderCell>
          <Table.HeaderCell align="right">Price</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {rows.map(r => <Table.Row key={r.sku}>
            <Table.Cell>{r.sku}</Table.Cell>
            <Table.Cell>{r.description}</Table.Cell>
            <Table.Cell>{r.status}</Table.Cell>
            <Table.Cell align="right" numeric>{r.on_hand}</Table.Cell>
            <Table.Cell align="right" numeric>\${r.price}</Table.Cell>
          </Table.Row>)}
      </Table.Body>
    </Table>
}`,...(C=(h=c.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var H,y,j;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    striped: true
  },
  render: Primary.render
}`,...(j=(y=i.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var k,w,f;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {},
  render: args => <Table {...args}>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>SKU</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {rows.map(r => <Table.Row key={r.sku} interactive onClick={() => alert(\`Clicked \${r.sku}\`)}>
            <Table.Cell>{r.sku}</Table.Cell>
            <Table.Cell>{r.description}</Table.Cell>
          </Table.Row>)}
      </Table.Body>
    </Table>
}`,...(f=(w=o.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var v,R,S;b.parameters={...b.parameters,docs:{...(v=b.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {},
  render: args => <Table {...args}>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>SKU</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {rows.map(r => <Table.Row key={r.sku}>
            <Table.Cell>{r.sku}</Table.Cell>
            <Table.Cell>
              <Badge color={r.status === "active" ? "emerald" : r.status === "clearance" ? "amber" : "slate"}>
                {r.status}
              </Badge>
            </Table.Cell>
          </Table.Row>)}
      </Table.Body>
    </Table>
}`,...(S=(R=b.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var B,M,N;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      {(["xs", "sm", "md", "lg"] as const).map(scale => <div key={scale}>
          <p className="mb-1 text-xs text-slate-500">scale="{scale}"</p>
          <Table scale={scale}>
            <Table.Head>
              <Table.Row>
                <Table.HeaderCell>SKU</Table.HeaderCell>
                <Table.HeaderCell align="right">Qty</Table.HeaderCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {rows.slice(0, 2).map(r => <Table.Row key={r.sku}>
                  <Table.Cell>{r.sku}</Table.Cell>
                  <Table.Cell align="right" numeric>{r.on_hand}</Table.Cell>
                </Table.Row>)}
            </Table.Body>
          </Table>
        </div>)}
    </div>
}`,...(N=(M=p.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const F=["Primary","Striped","Interactive","WithBadges","Scales"];export{o as Interactive,c as Primary,p as Scales,i as Striped,b as WithBadges,F as __namedExportsOrder,z as default};
