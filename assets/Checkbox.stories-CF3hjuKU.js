"use client";
import{j as e,r as m}from"./iframe-B1uMaBYR.js";import{C as s}from"./Checkbox-PfbVikk-.js";import"./preload-helper-CJpEdZxZ.js";import"./clsx-BYFsuUQf.js";import"./colorContrast-C0ZIkquj.js";import"./colorUtils-CzaG3QqU.js";import"./FormFieldContext-BHu2Dvwc.js";import"./useUIColor-BB8pR0ej.js";const F={component:s,title:"System/Checkbox",tags:["autodocs"],argTypes:{scale:{control:{type:"radio"},options:["xs","sm","md","lg"]},color:{control:{type:"select"},options:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","gray","zinc","neutral","stone"]}}},l={args:{label:"Check This!",scale:"md",color:"blue"},render:c=>e.jsx(s,{...c})},r={args:{scale:"md"},render:c=>e.jsxs("div",{className:"cs:space-y-4",children:[e.jsxs("div",{className:"cs:grid cs:grid-cols-2 cs:sm:grid-cols-3 cs:md:grid-cols-5 cs:gap-4 cs:md:gap-6",children:[e.jsx(s,{label:"Red",...c,color:"red"}),e.jsx(s,{label:"Orange",...c,color:"orange"}),e.jsx(s,{label:"Amber",...c,color:"amber"}),e.jsx(s,{label:"Yellow",...c,color:"yellow"}),e.jsx(s,{label:"Lime",...c,color:"lime"})]}),e.jsxs("div",{className:"cs:grid cs:grid-cols-2 cs:sm:grid-cols-3 cs:md:grid-cols-5 cs:gap-4 cs:md:gap-6",children:[e.jsx(s,{label:"Green",...c,color:"green"}),e.jsx(s,{label:"Emerald",...c,color:"emerald"}),e.jsx(s,{label:"Teal",...c,color:"teal"}),e.jsx(s,{label:"Cyan",...c,color:"cyan"}),e.jsx(s,{label:"Sky",...c,color:"sky"})]}),e.jsxs("div",{className:"cs:grid cs:grid-cols-2 cs:sm:grid-cols-3 cs:md:grid-cols-5 cs:gap-4 cs:md:gap-6",children:[e.jsx(s,{label:"Blue",...c,color:"blue"}),e.jsx(s,{label:"Indigo",...c,color:"indigo"}),e.jsx(s,{label:"Violet",...c,color:"violet"}),e.jsx(s,{label:"Purple",...c,color:"purple"}),e.jsx(s,{label:"Fuchsia",...c,color:"fuchsia"})]}),e.jsxs("div",{className:"cs:grid cs:grid-cols-2 cs:sm:grid-cols-3 cs:md:grid-cols-5 cs:gap-4 cs:md:gap-6",children:[e.jsx(s,{label:"Pink",...c,color:"pink"}),e.jsx(s,{label:"Rose",...c,color:"rose"}),e.jsx(s,{label:"Slate",...c,color:"slate"}),e.jsx(s,{label:"Gray",...c,color:"gray"}),e.jsx(s,{label:"Zinc",...c,color:"zinc"})]}),e.jsxs("div",{className:"cs:grid cs:grid-cols-2 cs:sm:grid-cols-3 cs:md:grid-cols-5 cs:gap-4 cs:md:gap-6",children:[e.jsx(s,{label:"Neutral",...c,color:"neutral"}),e.jsx(s,{label:"Stone",...c,color:"stone"})]})]})},a={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Extra Small (xs)"}),e.jsx(s,{label:"Agree to terms",scale:"xs",color:"blue"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Small (sm)"}),e.jsx(s,{label:"Agree to terms",scale:"sm",color:"blue"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Standard (md)"}),e.jsx(s,{label:"Agree to terms",scale:"md",color:"blue"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"cs:text-xs cs:text-gray-500 cs:mb-2",children:"Large (lg)"}),e.jsx(s,{label:"Agree to terms",scale:"lg",color:"blue"})]})]})},o={args:{label:"Already checked",defaultChecked:!0,color:"blue"},render:c=>e.jsx(s,{...c})},d={render:()=>{const c=m.useRef(null);return m.useEffect(()=>{var b;const t=(b=c.current)==null?void 0:b.querySelector("input[type=checkbox]");t instanceof HTMLInputElement&&(t.indeterminate=!0)},[]),e.jsx("div",{ref:c,children:e.jsx(s,{label:"Indeterminate (mixed selection)"})})}},n={render:()=>e.jsxs("div",{className:"cs:flex cs:flex-col cs:gap-2",children:[e.jsx(s,{label:"Disabled (unchecked)",disabled:!0}),e.jsx(s,{label:"Disabled (checked)",disabled:!0,defaultChecked:!0})]})},i={render:()=>e.jsxs("div",{className:"cs:grid cs:grid-cols-2 cs:gap-3",children:[e.jsx(s,{label:"Unchecked"}),e.jsx(s,{label:"Checked",defaultChecked:!0}),e.jsx(s,{label:"Disabled / unchecked",disabled:!0}),e.jsx(s,{label:"Disabled / checked",disabled:!0,defaultChecked:!0})]})};var x,g,p;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Check This!",
    scale: "md",
    color: "blue"
  },
  render: args => <Checkbox {...args} />
}`,...(p=(g=l.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var h,u,k;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    scale: "md"
  },
  render: args => <div className="cs:space-y-4">
      <div className="cs:grid cs:grid-cols-2 cs:sm:grid-cols-3 cs:md:grid-cols-5 cs:gap-4 cs:md:gap-6">
        <Checkbox label="Red" {...args} color="red"></Checkbox>
        <Checkbox label="Orange" {...args} color="orange"></Checkbox>
        <Checkbox label="Amber" {...args} color="amber"></Checkbox>
        <Checkbox label="Yellow" {...args} color="yellow"></Checkbox>
        <Checkbox label="Lime" {...args} color="lime"></Checkbox>
      </div>
      <div className="cs:grid cs:grid-cols-2 cs:sm:grid-cols-3 cs:md:grid-cols-5 cs:gap-4 cs:md:gap-6">
        <Checkbox label="Green" {...args} color="green"></Checkbox>
        <Checkbox label="Emerald" {...args} color="emerald"></Checkbox>
        <Checkbox label="Teal" {...args} color="teal"></Checkbox>
        <Checkbox label="Cyan" {...args} color="cyan"></Checkbox>
        <Checkbox label="Sky" {...args} color="sky"></Checkbox>
      </div>
      <div className="cs:grid cs:grid-cols-2 cs:sm:grid-cols-3 cs:md:grid-cols-5 cs:gap-4 cs:md:gap-6">
        <Checkbox label="Blue" {...args} color="blue"></Checkbox>
        <Checkbox label="Indigo" {...args} color="indigo"></Checkbox>
        <Checkbox label="Violet" {...args} color="violet"></Checkbox>
        <Checkbox label="Purple" {...args} color="purple"></Checkbox>
        <Checkbox label="Fuchsia" {...args} color="fuchsia"></Checkbox>
      </div>
      <div className="cs:grid cs:grid-cols-2 cs:sm:grid-cols-3 cs:md:grid-cols-5 cs:gap-4 cs:md:gap-6">
        <Checkbox label="Pink" {...args} color="pink"></Checkbox>
        <Checkbox label="Rose" {...args} color="rose"></Checkbox>
        <Checkbox label="Slate" {...args} color="slate"></Checkbox>
        <Checkbox label="Gray" {...args} color="gray"></Checkbox>
        <Checkbox label="Zinc" {...args} color="zinc"></Checkbox>
      </div>
      <div className="cs:grid cs:grid-cols-2 cs:sm:grid-cols-3 cs:md:grid-cols-5 cs:gap-4 cs:md:gap-6">
        <Checkbox label="Neutral" {...args} color="neutral"></Checkbox>
        <Checkbox label="Stone" {...args} color="stone"></Checkbox>
      </div>
    </div>
}`,...(k=(u=r.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var C,j,v;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6">
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Extra Small (xs)</p>
        <Checkbox label="Agree to terms" scale="xs" color="blue" />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Small (sm)</p>
        <Checkbox label="Agree to terms" scale="sm" color="blue" />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Standard (md)</p>
        <Checkbox label="Agree to terms" scale="md" color="blue" />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Large (lg)</p>
        <Checkbox label="Agree to terms" scale="lg" color="blue" />
      </div>
    </div>
}`,...(v=(j=a.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var y,f,N;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Already checked",
    defaultChecked: true,
    color: "blue"
  },
  render: args => <Checkbox {...args} />
}`,...(N=(f=o.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var S,D,A;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      const input = wrapperRef.current?.querySelector("input[type=checkbox]");
      if (input instanceof HTMLInputElement) input.indeterminate = true;
    }, []);
    return <div ref={wrapperRef}>
        <Checkbox label="Indeterminate (mixed selection)" />
      </div>;
  }
}`,...(A=(D=d.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var E,R,w;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="cs:flex cs:flex-col cs:gap-2">
      <Checkbox label="Disabled (unchecked)" disabled />
      <Checkbox label="Disabled (checked)" disabled defaultChecked />
    </div>
}`,...(w=(R=n.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var I,T,L;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="cs:grid cs:grid-cols-2 cs:gap-3">
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Disabled / unchecked" disabled />
      <Checkbox label="Disabled / checked" disabled defaultChecked />
    </div>
}`,...(L=(T=i.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};const U=["Default","Color","Scales","Checked","Indeterminate","Disabled","States"];export{o as Checked,r as Color,l as Default,n as Disabled,d as Indeterminate,a as Scales,i as States,U as __namedExportsOrder,F as default};
