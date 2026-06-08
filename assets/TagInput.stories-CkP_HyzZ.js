"use client";
import{r as l,j as a}from"./iframe-uuPSpAyG.js";import{c as G}from"./clsx-BYFsuUQf.js";import{c as J,a as Q}from"./colorUtils-CzaG3QqU.js";import{u as W}from"./useUIColor-piWDUgb3.js";import"./preload-helper-CJpEdZxZ.js";const X={xs:"cs:text-xs cs:gap-1 cs:p-1",sm:"cs:text-xs cs:gap-1 cs:p-1.5",md:"cs:text-sm cs:gap-1.5 cs:p-2",lg:"cs:text-base cs:gap-2 cs:p-2.5"};function c({value:t,defaultValue:r=[],onChange:o,placeholder:R="Add a tag…",scale:_="md",color:B="blue",disabled:u=!1,dedupe:L=!0,maxTags:y,className:$,"aria-label":z,ref:F}){const h=l.useId(),{color:H}=W()??{color:void 0},K=J(Q(H??B)),x=t!==void 0,[P,U]=l.useState(r),s=x?t:P,[d,v]=l.useState("");function T(e){x||U(e),o==null||o(e)}function w(e){const n=e.trim();if(n&&!(y!==void 0&&s.length>=y)){if(L&&s.some(i=>i.toLowerCase()===n.toLowerCase())){v("");return}T([...s,n]),v("")}}function b(e){T(s.filter((n,i)=>i!==e))}function O(e){e.key==="Enter"||e.key===","?(e.preventDefault(),w(d)):e.key==="Backspace"&&d===""&&s.length>0&&b(s.length-1)}return a.jsxs("div",{className:G("cs:flex cs:flex-wrap cs:items-center cs:font-sans","cs:rounded-md cs:border cs:border-gray-300 cs:dark:border-gray-600","cs:bg-white cs:dark:bg-gray-800","cs:focus-within:outline-2 cs:focus-within:outline-offset-2 cs:focus-within:outline-[var(--cs-ui-focus)]",u&&"cs:opacity-50",X[_],$),style:K,onClick:()=>{var e;u||(e=document.getElementById(h))==null||e.focus()},children:[s.map((e,n)=>a.jsxs("span",{className:"cs-pill cs:inline-flex cs:items-center cs:gap-1 cs:rounded-full cs:px-2 cs:py-0.5 cs:text-white",children:[e,!u&&a.jsx("button",{type:"button","aria-label":`Remove ${e}`,onClick:i=>{i.stopPropagation(),b(n)},className:"cs:cursor-pointer cs:leading-none cs:opacity-80 cs:hover:opacity-100",children:"×"})]},`${e}-${n}`)),a.jsx("input",{ref:F,id:h,type:"text",value:d,disabled:u,placeholder:s.length===0?R:"","aria-label":z??"Add a tag",onChange:e=>v(e.target.value),onKeyDown:O,onBlur:()=>w(d),className:"cs:min-w-[6rem] cs:flex-1 cs:bg-transparent cs:text-gray-900 cs:dark:text-gray-200 cs:outline-none cs:placeholder:text-gray-400"})]})}c.__docgenInfo={description:"",methods:[],displayName:"TagInput",props:{value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(tags: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"tags"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Add a tag…"',computed:!1}},scale:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:"PresetColor | CustomColor | SemanticColor",elements:[{name:"union",raw:`| "red"
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
| "stone"`,elements:[{name:"literal",value:'"red"'},{name:"literal",value:'"orange"'},{name:"literal",value:'"amber"'},{name:"literal",value:'"yellow"'},{name:"literal",value:'"lime"'},{name:"literal",value:'"green"'},{name:"literal",value:'"emerald"'},{name:"literal",value:'"teal"'},{name:"literal",value:'"cyan"'},{name:"literal",value:'"sky"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"indigo"'},{name:"literal",value:'"violet"'},{name:"literal",value:'"purple"'},{name:"literal",value:'"fuchsia"'},{name:"literal",value:'"pink"'},{name:"literal",value:'"rose"'},{name:"literal",value:'"slate"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"zinc"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"stone"'}]},{name:"CustomColor"},{name:"union",raw:'"success" | "warning" | "error" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'}]}]},description:"",defaultValue:{value:'"blue"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},dedupe:{required:!1,tsType:{name:"boolean"},description:"Reject duplicate tags (case-insensitive). Defaults to true.",defaultValue:{value:"true",computed:!1}},maxTags:{required:!1,tsType:{name:"number"},description:"Cap the number of tags."},className:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLInputElement"}],raw:"Ref<HTMLInputElement>"},description:"Forwarded to the inner text `<input>`."}}};const se={component:c,title:"Form/TagInput",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","amber","green","blue","indigo","violet","pink","gray"]},disabled:{control:{type:"boolean"}}},parameters:{docs:{description:{component:"Multi-value text input rendering chips. Type and press Enter or comma to add; Backspace on an empty field removes the last; click × to remove. Controlled or uncontrolled, with `dedupe` and `maxTags`."}}}},m={render:t=>{const[r,o]=l.useState(["cars","trucks"]);return a.jsx("div",{style:{width:320},children:a.jsx(c,{...t,value:r,onChange:o})})}},p={render:()=>{const[t,r]=l.useState([]);return a.jsx("div",{style:{width:320},children:a.jsx(c,{value:t,onChange:r,placeholder:"Add categories…"})})}},g={render:()=>{const[t,r]=l.useState(["a","b"]);return a.jsx("div",{style:{width:320},children:a.jsx(c,{value:t,onChange:r,maxTags:3,color:"violet"})})}},f={args:{defaultValue:["locked","tags"],disabled:!0}};var C,k,S;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const [tags, setTags] = useState<string[]>(["cars", "trucks"]);
    return <div style={{
      width: 320
    }}>
        <TagInput {...args} value={tags} onChange={setTags} />
      </div>;
  }
}`,...(S=(k=m.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var j,I,q;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<string[]>([]);
    return <div style={{
      width: 320
    }}>
        <TagInput value={tags} onChange={setTags} placeholder="Add categories…" />
      </div>;
  }
}`,...(q=(I=p.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var E,A,D;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<string[]>(["a", "b"]);
    return <div style={{
      width: 320
    }}>
        <TagInput value={tags} onChange={setTags} maxTags={3} color="violet" />
      </div>;
  }
}`,...(D=(A=g.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var V,N,M;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    defaultValue: ["locked", "tags"],
    disabled: true
  }
}`,...(M=(N=f.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};const re=["Default","Empty","MaxThree","Disabled"];export{m as Default,f as Disabled,p as Empty,g as MaxThree,re as __namedExportsOrder,se as default};
