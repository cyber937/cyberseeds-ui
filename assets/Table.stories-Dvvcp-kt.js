"use client";
import{j as e,r as b}from"./iframe-uuPSpAyG.js";import{B as V}from"./Badge-DFNnMaW8.js";import{C as f}from"./Checkbox-BEWT0KsM.js";import{c as o}from"./clsx-BYFsuUQf.js";import"./preload-helper-CJpEdZxZ.js";import"./colorContrast-C0ZIkquj.js";import"./colorUtils-CzaG3QqU.js";import"./useUIColor-piWDUgb3.js";import"./FormFieldContext-KWNoPJyl.js";const H=b.createContext("md"),z={xs:"cs:px-2 cs:py-1.5 cs:text-xs",sm:"cs:px-3 cs:py-2 cs:text-xs",md:"cs:px-4 cs:py-2 cs:text-sm",lg:"cs:px-5 cs:py-3 cs:text-base"},F={xs:"cs:px-2 cs:py-2 cs:text-[0.625rem]",sm:"cs:px-3 cs:py-2.5 cs:text-xs",md:"cs:px-4 cs:py-3 cs:text-xs",lg:"cs:px-5 cs:py-3 cs:text-sm"},q={left:"cs:text-left",right:"cs:text-right",center:"cs:text-center"};function a({scale:s="md",striped:l,bordered:r=!0,className:c,children:t,...d}){return e.jsx(H.Provider,{value:s,children:e.jsx("div",{className:o("cs:overflow-x-auto cs:bg-white cs:dark:bg-gray-800",r&&"cs:rounded-lg cs:border cs:border-gray-200 cs:dark:border-gray-700 cs:shadow-sm"),children:e.jsx("table",{...d,"data-striped":l?"true":void 0,className:o("cs:min-w-full cs:divide-y cs:divide-gray-200 cs:dark:divide-gray-700 cs:font-sans",c),children:t})})})}function J({children:s,className:l,...r}){return e.jsx("thead",{...r,className:o("cs:bg-gray-50 cs:dark:bg-gray-900","cs:text-gray-500 cs:dark:text-gray-300","cs:uppercase cs:tracking-wide",l),children:s})}function X({children:s,className:l,...r}){return e.jsx("tbody",{...r,className:o("cs:divide-y cs:divide-gray-100 cs:dark:divide-gray-800","cs:[table[data-striped='true']_&>tr:nth-child(even)]:bg-gray-50","cs:dark:[table[data-striped='true']_&>tr:nth-child(even)]:bg-gray-900/40",l),children:s})}function Y({interactive:s,selected:l,className:r,children:c,...t}){return e.jsx("tr",{...t,"data-interactive":s?"true":void 0,"aria-selected":l||void 0,className:o("cs:transition-colors",s?"cs:cursor-pointer cs:hover:bg-gray-50 cs:dark:hover:bg-gray-700/40":"cs:hover:bg-gray-50 cs:dark:hover:bg-gray-700/20",l&&"cs:bg-gray-100 cs:dark:bg-gray-700/50",r),children:c})}const Z={asc:"ascending",desc:"descending",none:"none"};function ee({direction:s}){return e.jsxs("span",{className:"cs:inline-flex cs:flex-col cs:leading-[0.5]","aria-hidden":"true",children:[e.jsx("span",{className:o("cs:text-[0.6em]",s==="asc"?"cs:opacity-100":"cs:opacity-30"),children:"▲"}),e.jsx("span",{className:o("cs:text-[0.6em]",s==="desc"?"cs:opacity-100":"cs:opacity-30"),children:"▼"})]})}function ae({align:s="left",sortable:l,sortDirection:r=!1,onSort:c,className:t,children:d,...u}){const T=b.useContext(H);return e.jsx("th",{scope:"col",...u,"aria-sort":l?Z[r||"none"]:void 0,className:o("cs:font-semibold",F[T],q[s],t),children:l?e.jsxs("button",{type:"button",onClick:c,className:o("cs:inline-flex cs:items-center cs:gap-1.5 cs:cursor-pointer cs:select-none","cs:font-semibold cs:uppercase cs:tracking-wide","cs:hover:text-gray-900 cs:dark:hover:text-gray-100",s==="right"&&"cs:flex-row-reverse"),children:[d,e.jsx(ee,{direction:r})]}):d})}function le({align:s="left",numeric:l,className:r,children:c,...t}){const d=b.useContext(H);return e.jsx("td",{...t,className:o("cs:text-gray-700 cs:dark:text-gray-200 cs:align-middle",z[d],q[s],l&&"cs:tabular-nums",r),children:c})}a.Head=J;a.Body=X;a.Row=Y;a.HeaderCell=ae;a.Cell=le;a.__docgenInfo={description:`Compound table primitive.

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
  selected,
  className,
  children,
  ...props
}: TableRowProps`,optional:!1,type:{name:"TableRowProps",alias:"TableRowProps"}}],returns:null},{name:"HeaderCell",docblock:null,modifiers:["static"],params:[{name:`{
  align = "left",
  sortable,
  sortDirection = false,
  onSort,
  className,
  children,
  ...props
}: TableHeaderCellProps`,optional:!1,type:{name:"TableHeaderCellProps",alias:"TableHeaderCellProps"}}],returns:null},{name:"Cell",docblock:null,modifiers:["static"],params:[{name:`{
  align = "left",
  numeric,
  className,
  children,
  ...props
}: TableCellProps`,optional:!1,type:{name:"TableCellProps",alias:"TableCellProps"}}],returns:null}],displayName:"Table",props:{scale:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},striped:{required:!1,tsType:{name:"boolean"},description:"Alternate-row backgrounds."},bordered:{required:!1,tsType:{name:"boolean"},description:"Outer wrapper gets a border and rounded corners when true (default).",defaultValue:{value:"true",computed:!1}}},composes:["HTMLAttributes"]};const ue={title:"Display/Table",component:a,parameters:{layout:"padded"},argTypes:{scale:{control:"select",options:["xs","sm","md","lg"]},striped:{control:"boolean"},bordered:{control:"boolean"}}},m=[{sku:"WIDGET-1",description:"Standard widget",status:"active",on_hand:12,price:"1.50"},{sku:"WIDGET-2",description:"Heavy duty widget",status:"active",on_hand:4,price:"2.99"},{sku:"GADGET-1",description:"Discontinued gadget",status:"discontinued",on_hand:0,price:"9.99"},{sku:"TOOL-7",description:"Clearance tool",status:"clearance",on_hand:3,price:"0.50"}],p={args:{scale:"md"},render:s=>e.jsxs(a,{...s,children:[e.jsx(a.Head,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{children:"SKU"}),e.jsx(a.HeaderCell,{children:"Description"}),e.jsx(a.HeaderCell,{children:"Status"}),e.jsx(a.HeaderCell,{align:"right",children:"On hand"}),e.jsx(a.HeaderCell,{align:"right",children:"Price"})]})}),e.jsx(a.Body,{children:m.map(l=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:l.sku}),e.jsx(a.Cell,{children:l.description}),e.jsx(a.Cell,{children:l.status}),e.jsx(a.Cell,{align:"right",numeric:!0,children:l.on_hand}),e.jsxs(a.Cell,{align:"right",numeric:!0,children:["$",l.price]})]},l.sku))})]})},h={args:{striped:!0},render:p.render},g={args:{},render:s=>e.jsxs(a,{...s,children:[e.jsx(a.Head,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{children:"SKU"}),e.jsx(a.HeaderCell,{children:"Description"})]})}),e.jsx(a.Body,{children:m.map(l=>e.jsxs(a.Row,{interactive:!0,onClick:()=>alert(`Clicked ${l.sku}`),children:[e.jsx(a.Cell,{children:l.sku}),e.jsx(a.Cell,{children:l.description})]},l.sku))})]})},x={args:{},render:s=>e.jsxs(a,{...s,children:[e.jsx(a.Head,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{children:"SKU"}),e.jsx(a.HeaderCell,{children:"Status"})]})}),e.jsx(a.Body,{children:m.map(l=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:l.sku}),e.jsx(a.Cell,{children:e.jsx(V,{color:l.status==="active"?"emerald":l.status==="clearance"?"amber":"slate",children:l.status})})]},l.sku))})]})},C={render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:["xs","sm","md","lg"].map(s=>e.jsxs("div",{children:[e.jsxs("p",{className:"mb-1 text-xs text-slate-500",children:['scale="',s,'"']}),e.jsxs(a,{scale:s,children:[e.jsx(a.Head,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{children:"SKU"}),e.jsx(a.HeaderCell,{align:"right",children:"Qty"})]})}),e.jsx(a.Body,{children:m.slice(0,2).map(l=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:l.sku}),e.jsx(a.Cell,{align:"right",numeric:!0,children:l.on_hand})]},l.sku))})]})]},s))})},y={render:()=>{const[s,l]=b.useState("sku"),[r,c]=b.useState("asc"),[t,d]=b.useState({}),u=b.useMemo(()=>{const n=[...m];return n.sort((i,k)=>{const j=i[s],S=k[s],w=j<S?-1:j>S?1:0;return r==="asc"?w:-w}),n},[s,r]);function T(n){s===n?c(i=>i==="asc"?"desc":"asc"):(l(n),c("asc"))}const Q=u.every(n=>t[n.sku]);return e.jsxs(a,{children:[e.jsx(a.Head,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{children:e.jsx(f,{"aria-label":"Select all",checked:Q,onCheckedChange:n=>d(n?Object.fromEntries(u.map(i=>[i.sku,!0])):{})})}),e.jsx(a.HeaderCell,{sortable:!0,sortDirection:s==="sku"?r:!1,onSort:()=>T("sku"),children:"SKU"}),e.jsx(a.HeaderCell,{align:"right",sortable:!0,sortDirection:s==="on_hand"?r:!1,onSort:()=>T("on_hand"),children:"On hand"})]})}),e.jsx(a.Body,{children:u.map(n=>e.jsxs(a.Row,{selected:!!t[n.sku],children:[e.jsx(a.Cell,{children:e.jsx(f,{"aria-label":`Select ${n.sku}`,checked:!!t[n.sku],onCheckedChange:i=>d(k=>({...k,[n.sku]:i}))})}),e.jsx(a.Cell,{children:n.sku}),e.jsx(a.Cell,{align:"right",numeric:!0,children:n.on_hand})]},n.sku))})]})}};var v,R,B;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(B=(R=p.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var K,_,N;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    striped: true
  },
  render: Primary.render
}`,...(N=(_=h.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var M,D,L;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(L=(D=g.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var P,A,E;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(E=(A=x.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var O,U,$;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...($=(U=C.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var I,W,G;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [sortKey, setSortKey] = useState<"sku" | "on_hand">("sku");
    const [dir, setDir] = useState<"asc" | "desc">("asc");
    const [selected, setSelected] = useState<Record<string, boolean>>({});
    const sorted = useMemo(() => {
      const copy = [...rows];
      copy.sort((a, b) => {
        const av = a[sortKey];
        const bv = b[sortKey];
        const cmp = av < bv ? -1 : av > bv ? 1 : 0;
        return dir === "asc" ? cmp : -cmp;
      });
      return copy;
    }, [sortKey, dir]);
    function toggleSort(key: "sku" | "on_hand") {
      if (sortKey === key) setDir(d => d === "asc" ? "desc" : "asc");else {
        setSortKey(key);
        setDir("asc");
      }
    }
    const allSelected = sorted.every(r => selected[r.sku]);
    return <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>
              <Checkbox aria-label="Select all" checked={allSelected} onCheckedChange={c => setSelected(c ? Object.fromEntries(sorted.map(r => [r.sku, true])) : {})} />
            </Table.HeaderCell>
            <Table.HeaderCell sortable sortDirection={sortKey === "sku" ? dir : false} onSort={() => toggleSort("sku")}>
              SKU
            </Table.HeaderCell>
            <Table.HeaderCell align="right" sortable sortDirection={sortKey === "on_hand" ? dir : false} onSort={() => toggleSort("on_hand")}>
              On hand
            </Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {sorted.map(r => <Table.Row key={r.sku} selected={!!selected[r.sku]}>
              <Table.Cell>
                <Checkbox aria-label={\`Select \${r.sku}\`} checked={!!selected[r.sku]} onCheckedChange={c => setSelected(s => ({
              ...s,
              [r.sku]: c
            }))} />
              </Table.Cell>
              <Table.Cell>{r.sku}</Table.Cell>
              <Table.Cell align="right" numeric>{r.on_hand}</Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>;
  }
}`,...(G=(W=y.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};const pe=["Primary","Striped","Interactive","WithBadges","Scales","SortableAndSelectable"];export{g as Interactive,p as Primary,C as Scales,y as SortableAndSelectable,h as Striped,x as WithBadges,pe as __namedExportsOrder,ue as default};
