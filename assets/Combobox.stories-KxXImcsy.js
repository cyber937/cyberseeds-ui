"use client";
import{r as t,j as a}from"./iframe-uuPSpAyG.js";import{c as f}from"./clsx-BYFsuUQf.js";import{a as _e,c as $e}from"./colorUtils-CzaG3QqU.js";import{F as Be}from"./designTokens-RbONob3D.js";import{u as He}from"./useUIColor-piWDUgb3.js";import"./preload-helper-CJpEdZxZ.js";const Ge={xs:"cs:h-7 cs:px-2 cs:text-[0.625rem]",sm:"cs:h-8 cs:px-3 cs:text-xs",md:"cs:h-9 cs:px-3 cs:text-sm/6",lg:"cs:h-11 cs:px-4 cs:text-base"},G={xs:"cs:px-2 cs:py-1 cs:text-[0.625rem]",sm:"cs:px-3 cs:py-1.5 cs:text-xs",md:"cs:px-3 cs:py-2 cs:text-sm",lg:"cs:px-4 cs:py-2.5 cs:text-base"},Je=(r,l)=>l.length===0?!0:r.label.toLowerCase().includes(l.toLowerCase());function R({options:r,value:l,defaultValue:L=null,onChange:v,filter:W=Je,placeholder:Ie="Search…",emptyMessage:Te="No matches",clearable:je=!0,scale:D="md",color:Ve,isInvalid:z=!1,disabled:h=!1,className:Ne,id:Re,name:K,ref:g}){const F=l!==void 0,[Le,De]=t.useState(L),b=F?l??null:Le,[E,m]=t.useState(""),[s,p]=t.useState(!1),[c,o]=t.useState(-1),Fe=t.useId(),M=Re??Fe,x=`${M}-listbox`,_=e=>`${M}-option-${e}`,U=t.useRef(null),$=t.useRef(null),q=t.useRef(null),Ee=t.useCallback(e=>{$.current=e,typeof g=="function"?g(e):g&&(g.current=e)},[g]),{color:Me}=He()??{color:void 0},Ue=_e(Me??Ve??"blue"),qe=$e(Ue),n=t.useMemo(()=>r.find(e=>e.value===b)??null,[r,b]),i=t.useMemo(()=>r.filter(e=>W(e,E)),[r,E,W]);t.useEffect(()=>{s||m((n==null?void 0:n.label)??"")},[n,s]),t.useEffect(()=>{if(!s)return;const e=u=>{U.current&&!U.current.contains(u.target)&&(p(!1),o(-1),m((n==null?void 0:n.label)??""))};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[s,n]),t.useEffect(()=>{if(c<0||!q.current)return;const e=q.current.children[c];e&&typeof e.scrollIntoView=="function"&&e.scrollIntoView({block:"nearest"})},[c]);const A=t.useCallback(e=>{F||De(e),v==null||v(e)},[F,v]),B=t.useCallback(e=>{e.disabled||(A(e.value),m(e.label),p(!1),o(-1))},[A]),Ae=e=>{const u=e.target.value;m(u),s||p(!0),o(0)},Oe=()=>{h||p(!0)},Pe=e=>{if(!h)switch(e.key){case"ArrowDown":{e.preventDefault(),s?i.length>0&&o(u=>Math.min(u+1,i.length-1)):(p(!0),o(0));break}case"ArrowUp":{e.preventDefault(),s&&i.length>0&&o(u=>Math.max(u-1,0));break}case"Home":{s&&i.length>0&&(e.preventDefault(),o(0));break}case"End":{s&&i.length>0&&(e.preventDefault(),o(i.length-1));break}case"Enter":{s&&c>=0&&c<i.length&&(e.preventDefault(),B(i[c]));break}case"Escape":{s&&(e.preventDefault(),p(!1),o(-1),m((n==null?void 0:n.label)??""));break}case"Tab":{s&&(p(!1),o(-1),m((n==null?void 0:n.label)??""));break}}},We=()=>{var e;A(null),m(""),o(-1),(e=$.current)==null||e.focus()},ze=s&&c>=0&&i[c]?_(i[c].value):void 0,H=je&&!h&&b!=null;return a.jsxs("div",{ref:U,className:f("cs:relative cs:w-full cs:font-sans",Ne),style:qe,children:[a.jsxs("div",{role:"combobox","aria-expanded":s,"aria-haspopup":"listbox","aria-controls":s?x:void 0,"aria-owns":s?x:void 0,className:"cs:relative",children:[a.jsx("input",{ref:Ee,id:M,type:"text",role:"searchbox",autoComplete:"off",value:E,onChange:Ae,onFocus:Oe,onKeyDown:Pe,placeholder:Ie,disabled:h,"aria-autocomplete":"list","aria-activedescendant":ze,"aria-invalid":z||void 0,"aria-controls":s?x:void 0,className:f("cs:w-full cs:rounded-md cs:border cs:font-sans","cs:bg-white cs:dark:bg-gray-800","cs:text-gray-900 cs:dark:text-gray-100","cs:placeholder:text-gray-400","cs:transition-colors cs:duration-200 cs:ease-in-out cs:motion-reduce:transition-none","cs:disabled:bg-gray-100 cs:disabled:text-gray-400","cs:dark:disabled:bg-gray-700 cs:dark:disabled:text-gray-500",Be,"cs-focus-visible",z?"cs:border-red-500 cs:dark:border-red-500":"cs:border-gray-300 cs:dark:border-gray-600",H?"cs:pr-14":"cs:pr-8",Ge[D])}),H&&a.jsx("button",{type:"button","aria-label":"Clear selection",tabIndex:-1,onClick:We,className:f("cs:absolute cs:top-1/2 cs:-translate-y-1/2 cs:right-7","cs:flex cs:items-center cs:justify-center","cs:rounded-full cs:size-5","cs:text-gray-400 cs:hover:text-gray-700","cs:dark:text-gray-500 cs:dark:hover:text-gray-200"),children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,className:"cs:size-3.5",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"})})}),a.jsx("span",{"aria-hidden":!0,className:f("cs:absolute cs:top-1/2 cs:-translate-y-1/2 cs:right-2.5 cs:pointer-events-none","cs:text-gray-400 cs:dark:text-gray-500","cs:transition-transform",s&&"cs:rotate-180"),children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,className:"cs:size-4",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})})})]}),s&&a.jsx("ul",{ref:q,id:x,role:"listbox",className:f("cs:absolute cs:top-full cs:left-0 cs:right-0 cs:z-10 cs:mt-1","cs:max-h-60 cs:overflow-y-auto","cs:rounded-md cs:border cs:border-gray-200 cs:dark:border-gray-700","cs:bg-white cs:dark:bg-gray-800","cs:shadow-lg","cs:py-1"),children:i.length===0?a.jsx("li",{role:"presentation",className:f("cs:text-gray-500 cs:dark:text-gray-400 cs:italic",G[D]),children:Te}):i.map((e,u)=>{const O=e.value===b,P=u===c;return a.jsxs("li",{id:_(e.value),role:"option","aria-selected":O,"aria-disabled":e.disabled,onMouseDown:Ke=>{Ke.preventDefault(),B(e)},onMouseEnter:()=>{e.disabled||o(u)},className:f("cs:flex cs:items-center cs:justify-between","cs:cursor-pointer cs:select-none",e.disabled&&"cs:cursor-not-allowed cs:opacity-50",P&&!e.disabled&&"cs-bg cs:text-white",!P&&"cs:text-gray-900 cs:dark:text-gray-100",O&&!P&&"cs:font-semibold",G[D]),children:[a.jsx("span",{children:e.label}),O&&a.jsx("svg",{"aria-hidden":!0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,className:"cs:size-4 cs:ml-2",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"})})]},e.value)})}),K&&a.jsx("input",{type:"hidden",name:K,value:b??""})]})}R.__docgenInfo={description:`Searchable single-select combobox following the WAI-ARIA 1.2 combobox
pattern. Options are filtered live as the user types; keyboard navigation
works without the mouse (Arrow ↑/↓, Home, End, Enter, Escape).

@example Controlled with project-specific data
\`\`\`tsx
const items = [
  { id: "a", name: "Apple" },
  { id: "b", name: "Banana" },
];
const options = items.map(i => ({ value: i.id, label: i.name }));

<Combobox
  options={options}
  value={selectedId}
  onChange={setSelectedId}
/>
\`\`\`

Out of scope for this v1 (deferred to future PRs):
- Multi-select
- Async / server-driven option loading
- Free-text values not in \`options\`
- Grouped options
- Virtualization for very large lists (> ~1k)
- Floating-UI-driven flip when near the viewport edge`,methods:[],displayName:"Combobox",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"ComboboxOption"}],raw:"ComboboxOption[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Selected value (controlled). Pass `null` or `undefined` for no selection."},defaultValue:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Initial selection in uncontrolled mode.",defaultValue:{value:"null",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:"Fires with the new selected value (or `null` when cleared)."},filter:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: ComboboxOption, search: string) => boolean",signature:{arguments:[{type:{name:"ComboboxOption"},name:"option"},{type:{name:"string"},name:"search"}],return:{name:"boolean"}}},description:"Custom filter. Receives every option and the current search string;\nreturn `true` to keep the option visible. Default: case-insensitive\nsubstring match against `option.label`.",defaultValue:{value:`(option: ComboboxOption, search: string): boolean => {
  if (search.length === 0) return true;
  return option.label.toLowerCase().includes(search.toLowerCase());
}`,computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search…"',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactNode"},description:"Shown inside the open dropdown when nothing matches.",defaultValue:{value:'"No matches"',computed:!1}},clearable:{required:!1,tsType:{name:"boolean"},description:"Show the clear button when a value is selected. Default: `true`. Set\n`false` to lock the combobox to one of the listed options (no null state).",defaultValue:{value:"true",computed:!1}},scale:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:"PresetColor | CustomColor | SemanticColor",elements:[{name:"union",raw:`| "red"
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
| "stone"`,elements:[{name:"literal",value:'"red"'},{name:"literal",value:'"orange"'},{name:"literal",value:'"amber"'},{name:"literal",value:'"yellow"'},{name:"literal",value:'"lime"'},{name:"literal",value:'"green"'},{name:"literal",value:'"emerald"'},{name:"literal",value:'"teal"'},{name:"literal",value:'"cyan"'},{name:"literal",value:'"sky"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"indigo"'},{name:"literal",value:'"violet"'},{name:"literal",value:'"purple"'},{name:"literal",value:'"fuchsia"'},{name:"literal",value:'"pink"'},{name:"literal",value:'"rose"'},{name:"literal",value:'"slate"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"zinc"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"stone"'}]},{name:"CustomColor"},{name:"union",raw:'"success" | "warning" | "error" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'}]}]},description:""},isInvalid:{required:!1,tsType:{name:"boolean"},description:"When true, marks the input with `aria-invalid` and red ring styling.",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Outer `<div>` className for layout-level overrides."},id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:"When set, a hidden `<input name>` is rendered so the value is included\nin standard form submissions."},ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLInputElement"}],raw:"Ref<HTMLInputElement>"},description:"Forwarded to the search `<input>`."}}};const sa={title:"Form/Combobox",component:R,parameters:{layout:"padded"},argTypes:{scale:{control:"select",options:["xs","sm","md","lg"]},isInvalid:{control:"boolean"},disabled:{control:"boolean"},clearable:{control:"boolean"}}},d=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"},{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"},{value:"kiwi",label:"Kiwi"},{value:"lemon",label:"Lemon"},{value:"mango",label:"Mango"},{value:"nectarine",label:"Nectarine"},{value:"orange",label:"Orange"},{value:"papaya",label:"Papaya"}],y={args:{options:d,placeholder:"Pick a fruit"},render:r=>{const[l,L]=t.useState(null);return a.jsx(R,{...r,value:l,onChange:L})}},w={args:{options:d,defaultValue:"banana",placeholder:"Pick a fruit"}},k={args:{options:d,defaultValue:"apple",disabled:!0}},C={args:{options:d,isInvalid:!0,placeholder:"Required"}},S={args:{options:d,defaultValue:"grape",clearable:!1}},I={args:{options:[{value:"active",label:"Active"},{value:"discontinued",label:"Discontinued",disabled:!0},{value:"clearance",label:"Clearance"}],placeholder:"Pick a status"}},T={args:{options:d,emptyMessage:"No fruits match — try harder.",placeholder:"Type something weird"}},j={args:{options:d,placeholder:"Starts-with filter",filter:(r,l)=>r.label.toLowerCase().startsWith(l.toLowerCase())}},V={args:{options:Array.from({length:200},(r,l)=>({value:`sku-${l}`,label:`SKU-${String(l).padStart(4,"0")}`})),placeholder:"200 SKUs"}},N={render:()=>a.jsx("div",{className:"flex flex-col gap-3 max-w-sm",children:["xs","sm","md","lg"].map(r=>a.jsxs("div",{children:[a.jsxs("p",{className:"mb-1 text-xs text-slate-500",children:['scale="',r,'"']}),a.jsx(R,{options:d,scale:r,placeholder:r})]},r))})};var J,Q,X;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    options: FRUITS,
    placeholder: "Pick a fruit"
  },
  render: args => {
    const [value, setValue] = useState<string | null>(null);
    return <Combobox {...args} value={value} onChange={setValue} />;
  }
}`,...(X=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    options: FRUITS,
    defaultValue: "banana",
    placeholder: "Pick a fruit"
  }
}`,...(ee=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,se,te;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    options: FRUITS,
    defaultValue: "apple",
    disabled: true
  }
}`,...(te=(se=k.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var re,ne,le;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    options: FRUITS,
    isInvalid: true,
    placeholder: "Required"
  }
}`,...(le=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var oe,ie,ce;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    options: FRUITS,
    defaultValue: "grape",
    clearable: false
  }
}`,...(ce=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ue,de,me;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    options: [{
      value: "active",
      label: "Active"
    }, {
      value: "discontinued",
      label: "Discontinued",
      disabled: true
    }, {
      value: "clearance",
      label: "Clearance"
    }],
    placeholder: "Pick a status"
  }
}`,...(me=(de=I.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,fe,ge;T.parameters={...T.parameters,docs:{...(pe=T.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    options: FRUITS,
    emptyMessage: "No fruits match — try harder.",
    placeholder: "Type something weird"
  }
}`,...(ge=(fe=T.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var be,ve,he;j.parameters={...j.parameters,docs:{...(be=j.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    options: FRUITS,
    placeholder: "Starts-with filter",
    filter: (option, search) => option.label.toLowerCase().startsWith(search.toLowerCase())
  }
}`,...(he=(ve=j.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var xe,ye,we;V.parameters={...V.parameters,docs:{...(xe=V.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    options: Array.from({
      length: 200
    }, (_, i) => ({
      value: \`sku-\${i}\`,
      label: \`SKU-\${String(i).padStart(4, "0")}\`
    })),
    placeholder: "200 SKUs"
  }
}`,...(we=(ye=V.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var ke,Ce,Se;N.parameters={...N.parameters,docs:{...(ke=N.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3 max-w-sm">
      {(["xs", "sm", "md", "lg"] as const).map(scale => <div key={scale}>
          <p className="mb-1 text-xs text-slate-500">scale="{scale}"</p>
          <Combobox options={FRUITS} scale={scale} placeholder={scale} />
        </div>)}
    </div>
}`,...(Se=(Ce=N.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source}}};const ta=["Primary","WithDefaultValue","Disabled","Invalid","NotClearable","WithDisabledOptions","CustomEmptyMessage","CustomFilter","LongList","Scales"];export{T as CustomEmptyMessage,j as CustomFilter,k as Disabled,C as Invalid,V as LongList,S as NotClearable,y as Primary,N as Scales,w as WithDefaultValue,I as WithDisabledOptions,ta as __namedExportsOrder,sa as default};
