"use client";
import{r as t,j as a}from"./iframe-B2nu7eul.js";import{c as f}from"./clsx-BYFsuUQf.js";import{a as ze,c as Ke}from"./colorUtils-CzaG3QqU.js";import{F as _e}from"./designTokens-RbONob3D.js";import{u as $e}from"./useUIColor-8B1oW7n3.js";import"./preload-helper-CJpEdZxZ.js";const Be={xs:"cs:h-7 cs:px-2 cs:text-[0.625rem]",sm:"cs:h-8 cs:px-3 cs:text-xs",md:"cs:h-9 cs:px-3 cs:text-sm/6",lg:"cs:h-11 cs:px-4 cs:text-base"},G={xs:"cs:px-2 cs:py-1 cs:text-[0.625rem]",sm:"cs:px-3 cs:py-1.5 cs:text-xs",md:"cs:px-3 cs:py-2 cs:text-sm",lg:"cs:px-4 cs:py-2.5 cs:text-base"},Ge=(r,l)=>l.length===0?!0:r.label.toLowerCase().includes(l.toLowerCase());function N({options:r,value:l,defaultValue:R=null,onChange:b,filter:P=Ge,placeholder:Se="Search…",emptyMessage:Ie="No matches",clearable:je=!0,scale:D="md",color:Te,isInvalid:W=!1,disabled:v=!1,className:Ve,id:Ne,name:z}){const F=l!==void 0,[Re,De]=t.useState(R),g=F?l??null:Re,[L,m]=t.useState(""),[s,p]=t.useState(!1),[c,o]=t.useState(-1),Fe=t.useId(),U=Ne??Fe,h=`${U}-listbox`,K=e=>`${U}-option-${e}`,E=t.useRef(null),_=t.useRef(null),M=t.useRef(null),{color:Le}=$e()??{color:void 0},Ue=ze(Le??Te??"blue"),Ee=Ke(Ue),n=t.useMemo(()=>r.find(e=>e.value===g)??null,[r,g]),i=t.useMemo(()=>r.filter(e=>P(e,L)),[r,L,P]);t.useEffect(()=>{s||m((n==null?void 0:n.label)??"")},[n,s]),t.useEffect(()=>{if(!s)return;const e=u=>{E.current&&!E.current.contains(u.target)&&(p(!1),o(-1),m((n==null?void 0:n.label)??""))};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[s,n]),t.useEffect(()=>{if(c<0||!M.current)return;const e=M.current.children[c];e&&typeof e.scrollIntoView=="function"&&e.scrollIntoView({block:"nearest"})},[c]);const q=t.useCallback(e=>{F||De(e),b==null||b(e)},[F,b]),$=t.useCallback(e=>{e.disabled||(q(e.value),m(e.label),p(!1),o(-1))},[q]),Me=e=>{const u=e.target.value;m(u),s||p(!0),o(0)},qe=()=>{v||p(!0)},Ae=e=>{if(!v)switch(e.key){case"ArrowDown":{e.preventDefault(),s?i.length>0&&o(u=>Math.min(u+1,i.length-1)):(p(!0),o(0));break}case"ArrowUp":{e.preventDefault(),s&&i.length>0&&o(u=>Math.max(u-1,0));break}case"Home":{s&&i.length>0&&(e.preventDefault(),o(0));break}case"End":{s&&i.length>0&&(e.preventDefault(),o(i.length-1));break}case"Enter":{s&&c>=0&&c<i.length&&(e.preventDefault(),$(i[c]));break}case"Escape":{s&&(e.preventDefault(),p(!1),o(-1),m((n==null?void 0:n.label)??""));break}case"Tab":{s&&(p(!1),o(-1),m((n==null?void 0:n.label)??""));break}}},Oe=()=>{var e;q(null),m(""),o(-1),(e=_.current)==null||e.focus()},Pe=s&&c>=0&&i[c]?K(i[c].value):void 0,B=je&&!v&&g!=null;return a.jsxs("div",{ref:E,className:f("cs:relative cs:w-full cs:font-sans",Ve),style:Ee,children:[a.jsxs("div",{role:"combobox","aria-expanded":s,"aria-haspopup":"listbox","aria-controls":s?h:void 0,"aria-owns":s?h:void 0,className:"cs:relative",children:[a.jsx("input",{ref:_,id:U,type:"text",role:"searchbox",autoComplete:"off",value:L,onChange:Me,onFocus:qe,onKeyDown:Ae,placeholder:Se,disabled:v,"aria-autocomplete":"list","aria-activedescendant":Pe,"aria-invalid":W||void 0,"aria-controls":s?h:void 0,className:f("cs:w-full cs:rounded-md cs:border cs:font-sans","cs:bg-white cs:dark:bg-gray-800","cs:text-gray-900 cs:dark:text-gray-100","cs:placeholder:text-gray-400","cs:transition-colors cs:duration-200 cs:ease-in-out cs:motion-reduce:transition-none","cs:disabled:bg-gray-100 cs:disabled:text-gray-400","cs:dark:disabled:bg-gray-700 cs:dark:disabled:text-gray-500",_e,"cs-focus-visible",W?"cs:border-red-500 cs:dark:border-red-500":"cs:border-gray-300 cs:dark:border-gray-600",B?"cs:pr-14":"cs:pr-8",Be[D])}),B&&a.jsx("button",{type:"button","aria-label":"Clear selection",tabIndex:-1,onClick:Oe,className:f("cs:absolute cs:top-1/2 cs:-translate-y-1/2 cs:right-7","cs:flex cs:items-center cs:justify-center","cs:rounded-full cs:size-5","cs:text-gray-400 cs:hover:text-gray-700","cs:dark:text-gray-500 cs:dark:hover:text-gray-200"),children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,className:"cs:size-3.5",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"})})}),a.jsx("span",{"aria-hidden":!0,className:f("cs:absolute cs:top-1/2 cs:-translate-y-1/2 cs:right-2.5 cs:pointer-events-none","cs:text-gray-400 cs:dark:text-gray-500","cs:transition-transform",s&&"cs:rotate-180"),children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,className:"cs:size-4",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})})})]}),s&&a.jsx("ul",{ref:M,id:h,role:"listbox",className:f("cs:absolute cs:top-full cs:left-0 cs:right-0 cs:z-10 cs:mt-1","cs:max-h-60 cs:overflow-y-auto","cs:rounded-md cs:border cs:border-gray-200 cs:dark:border-gray-700","cs:bg-white cs:dark:bg-gray-800","cs:shadow-lg","cs:py-1"),children:i.length===0?a.jsx("li",{role:"presentation",className:f("cs:text-gray-500 cs:dark:text-gray-400 cs:italic",G[D]),children:Ie}):i.map((e,u)=>{const A=e.value===g,O=u===c;return a.jsxs("li",{id:K(e.value),role:"option","aria-selected":A,"aria-disabled":e.disabled,onMouseDown:We=>{We.preventDefault(),$(e)},onMouseEnter:()=>{e.disabled||o(u)},className:f("cs:flex cs:items-center cs:justify-between","cs:cursor-pointer cs:select-none",e.disabled&&"cs:cursor-not-allowed cs:opacity-50",O&&!e.disabled&&"cs-bg cs:text-white",!O&&"cs:text-gray-900 cs:dark:text-gray-100",A&&!O&&"cs:font-semibold",G[D]),children:[a.jsx("span",{children:e.label}),A&&a.jsx("svg",{"aria-hidden":!0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,className:"cs:size-4 cs:ml-2",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"})})]},e.value)})}),z&&a.jsx("input",{type:"hidden",name:z,value:g??""})]})}N.__docgenInfo={description:`Searchable single-select combobox following the WAI-ARIA 1.2 combobox
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
| "stone"`,elements:[{name:"literal",value:'"red"'},{name:"literal",value:'"orange"'},{name:"literal",value:'"amber"'},{name:"literal",value:'"yellow"'},{name:"literal",value:'"lime"'},{name:"literal",value:'"green"'},{name:"literal",value:'"emerald"'},{name:"literal",value:'"teal"'},{name:"literal",value:'"cyan"'},{name:"literal",value:'"sky"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"indigo"'},{name:"literal",value:'"violet"'},{name:"literal",value:'"purple"'},{name:"literal",value:'"fuchsia"'},{name:"literal",value:'"pink"'},{name:"literal",value:'"rose"'},{name:"literal",value:'"slate"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"zinc"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"stone"'}]},{name:"CustomColor"},{name:"union",raw:'"success" | "warning" | "error" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'}]}]},description:""},isInvalid:{required:!1,tsType:{name:"boolean"},description:"When true, marks the input with `aria-invalid` and red ring styling.",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Outer `<div>` className for layout-level overrides."},id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:"When set, a hidden `<input name>` is rendered so the value is included\nin standard form submissions."}}};const ea={title:"Form/Combobox",component:N,parameters:{layout:"padded"},argTypes:{scale:{control:"select",options:["xs","sm","md","lg"]},isInvalid:{control:"boolean"},disabled:{control:"boolean"},clearable:{control:"boolean"}}},d=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"},{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"},{value:"kiwi",label:"Kiwi"},{value:"lemon",label:"Lemon"},{value:"mango",label:"Mango"},{value:"nectarine",label:"Nectarine"},{value:"orange",label:"Orange"},{value:"papaya",label:"Papaya"}],x={args:{options:d,placeholder:"Pick a fruit"},render:r=>{const[l,R]=t.useState(null);return a.jsx(N,{...r,value:l,onChange:R})}},y={args:{options:d,defaultValue:"banana",placeholder:"Pick a fruit"}},w={args:{options:d,defaultValue:"apple",disabled:!0}},k={args:{options:d,isInvalid:!0,placeholder:"Required"}},C={args:{options:d,defaultValue:"grape",clearable:!1}},S={args:{options:[{value:"active",label:"Active"},{value:"discontinued",label:"Discontinued",disabled:!0},{value:"clearance",label:"Clearance"}],placeholder:"Pick a status"}},I={args:{options:d,emptyMessage:"No fruits match — try harder.",placeholder:"Type something weird"}},j={args:{options:d,placeholder:"Starts-with filter",filter:(r,l)=>r.label.toLowerCase().startsWith(l.toLowerCase())}},T={args:{options:Array.from({length:200},(r,l)=>({value:`sku-${l}`,label:`SKU-${String(l).padStart(4,"0")}`})),placeholder:"200 SKUs"}},V={render:()=>a.jsx("div",{className:"flex flex-col gap-3 max-w-sm",children:["xs","sm","md","lg"].map(r=>a.jsxs("div",{children:[a.jsxs("p",{className:"mb-1 text-xs text-slate-500",children:['scale="',r,'"']}),a.jsx(N,{options:d,scale:r,placeholder:r})]},r))})};var H,J,Q;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    options: FRUITS,
    placeholder: "Pick a fruit"
  },
  render: args => {
    const [value, setValue] = useState<string | null>(null);
    return <Combobox {...args} value={value} onChange={setValue} />;
  }
}`,...(Q=(J=x.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    options: FRUITS,
    defaultValue: "banana",
    placeholder: "Pick a fruit"
  }
}`,...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,se;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    options: FRUITS,
    defaultValue: "apple",
    disabled: true
  }
}`,...(se=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var re,te,ne;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    options: FRUITS,
    isInvalid: true,
    placeholder: "Required"
  }
}`,...(ne=(te=k.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var le,oe,ie;C.parameters={...C.parameters,docs:{...(le=C.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    options: FRUITS,
    defaultValue: "grape",
    clearable: false
  }
}`,...(ie=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ce,ue,de;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var me,pe,fe;I.parameters={...I.parameters,docs:{...(me=I.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    options: FRUITS,
    emptyMessage: "No fruits match — try harder.",
    placeholder: "Type something weird"
  }
}`,...(fe=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var ge,be,ve;j.parameters={...j.parameters,docs:{...(ge=j.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    options: FRUITS,
    placeholder: "Starts-with filter",
    filter: (option, search) => option.label.toLowerCase().startsWith(search.toLowerCase())
  }
}`,...(ve=(be=j.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var he,xe,ye;T.parameters={...T.parameters,docs:{...(he=T.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    options: Array.from({
      length: 200
    }, (_, i) => ({
      value: \`sku-\${i}\`,
      label: \`SKU-\${String(i).padStart(4, "0")}\`
    })),
    placeholder: "200 SKUs"
  }
}`,...(ye=(xe=T.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var we,ke,Ce;V.parameters={...V.parameters,docs:{...(we=V.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3 max-w-sm">
      {(["xs", "sm", "md", "lg"] as const).map(scale => <div key={scale}>
          <p className="mb-1 text-xs text-slate-500">scale="{scale}"</p>
          <Combobox options={FRUITS} scale={scale} placeholder={scale} />
        </div>)}
    </div>
}`,...(Ce=(ke=V.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};const aa=["Primary","WithDefaultValue","Disabled","Invalid","NotClearable","WithDisabledOptions","CustomEmptyMessage","CustomFilter","LongList","Scales"];export{I as CustomEmptyMessage,j as CustomFilter,w as Disabled,k as Invalid,T as LongList,C as NotClearable,x as Primary,V as Scales,y as WithDefaultValue,S as WithDisabledOptions,aa as __namedExportsOrder,ea as default};
