"use client";
import{j as e}from"./iframe-g7VAFW6d.js";import{useMDXComponents as d}from"./index-DVyXhUoT.js";import{M as c}from"./blocks-CeF9M9AU.js";import"./preload-helper-CJpEdZxZ.js";import"./index-C3aF-azK.js";function r(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Foundations/Overview"}),`
`,e.jsx(s.h1,{id:"cyberseeds-ui--design-foundations",children:"Cyberseeds UI — Design Foundations"}),`
`,e.jsx(s.p,{children:"Cyberseeds UI is built on a consistent set of design tokens that ensure visual harmony across all components."}),`
`,e.jsx(s.h2,{id:"color-system-v100",children:"Color System (v1.0.0)"}),`
`,e.jsxs(s.p,{children:["All colors are applied via ",e.jsx(s.strong,{children:"CSS custom properties"}),", enabling both preset and custom colors to follow the same code path."]}),`
`,e.jsx(s.h3,{id:"preset-colors-22",children:"Preset Colors (22)"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Colors"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Warm"}),e.jsxs("td",{children:[e.jsx("code",{children:"red"}),", ",e.jsx("code",{children:"orange"}),", ",e.jsx("code",{children:"amber"}),", ",e.jsx("code",{children:"yellow"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Green"}),e.jsxs("td",{children:[e.jsx("code",{children:"lime"}),", ",e.jsx("code",{children:"green"}),", ",e.jsx("code",{children:"emerald"}),", ",e.jsx("code",{children:"teal"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Blue"}),e.jsxs("td",{children:[e.jsx("code",{children:"cyan"}),", ",e.jsx("code",{children:"sky"}),", ",e.jsx("code",{children:"blue"}),", ",e.jsx("code",{children:"indigo"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Purple"}),e.jsxs("td",{children:[e.jsx("code",{children:"violet"}),", ",e.jsx("code",{children:"purple"}),", ",e.jsx("code",{children:"fuchsia"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Pink"}),e.jsxs("td",{children:[e.jsx("code",{children:"pink"}),", ",e.jsx("code",{children:"rose"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Neutral"}),e.jsxs("td",{children:[e.jsx("code",{children:"slate"}),", ",e.jsx("code",{children:"gray"}),", ",e.jsx("code",{children:"zinc"}),", ",e.jsx("code",{children:"neutral"}),", ",e.jsx("code",{children:"stone"})]})]})]})]}),`
`,e.jsx(s.h3,{id:"semantic-colors",children:"Semantic Colors"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Default Mapping"}),e.jsx("th",{children:"Usage"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"success"})}),e.jsx("td",{children:e.jsx("code",{children:"green"})}),e.jsx("td",{children:"Positive outcomes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"warning"})}),e.jsx("td",{children:e.jsx("code",{children:"amber"})}),e.jsx("td",{children:"Caution states"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"error"})}),e.jsx("td",{children:e.jsx("code",{children:"red"})}),e.jsx("td",{children:"Error states"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"info"})}),e.jsx("td",{children:e.jsx("code",{children:"blue"})}),e.jsx("td",{children:"Informational"})]})]})]}),`
`,e.jsxs(s.p,{children:["Semantic mappings can be customized via ",e.jsx(s.code,{children:"UIColorProvider"}),":"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<UIColorProvider
  initialColor="success"
  semanticColors={{ success: "emerald", error: "rose" }}
>
`})}),`
`,e.jsx(s.h3,{id:"custom-colors",children:"Custom Colors"}),`
`,e.jsx(s.p,{children:"Provide an object with OKLCH or hex values:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`const brand: CustomColor = {
  base: "#4f46e5",     // Primary shade
  hover: "#4338ca",    // Hover state
  active: "#3730a3",   // Active/pressed
  focus: "#4f46e5",    // Focus ring
  light: "#e0e7ff",    // Light background (PillBox, etc.)
  lightText: "#312e81", // Text on light background
  border: "#a5b4fc",   // Border color
};

// Or provide only \`base\` for automatic shade generation:
const simple: CustomColor = { base: "#4f46e5" };
`})}),`
`,e.jsx(s.h3,{id:"css-variables",children:"CSS Variables"}),`
`,e.jsx(s.p,{children:"All components consume these variables:"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Variable"}),e.jsx("th",{children:"Usage"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--cs-ui-base"})}),e.jsx("td",{children:"Primary background, checked state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--cs-ui-hover"})}),e.jsx("td",{children:"Hover background"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--cs-ui-active"})}),e.jsx("td",{children:"Active/pressed background"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--cs-ui-focus"})}),e.jsx("td",{children:"Focus ring color"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--cs-ui-light"})}),e.jsx("td",{children:"Light variant background"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--cs-ui-lightText"})}),e.jsx("td",{children:"Text on light background"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--cs-ui-border"})}),e.jsx("td",{children:"Border color"})]})]})]}),`
`,e.jsx(s.h3,{id:"color-resolution-order",children:"Color Resolution Order"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["Component ",e.jsx(s.code,{children:"color"})," prop"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"UIColorProvider"})," context"]}),`
`,e.jsxs(s.li,{children:["Default (",e.jsx(s.code,{children:'"blue"'}),")"]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"scale-system",children:"Scale System"}),`
`,e.jsx(s.p,{children:"Four sizes available on all sized components:"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Scale"}),e.jsx("th",{children:"Font Size"}),e.jsx("th",{children:"Use Case"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"xs"})}),e.jsx("td",{children:"0.625rem (10px)"}),e.jsx("td",{children:"Compact UI, badges"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"sm"})}),e.jsx("td",{children:"0.75rem (12px)"}),e.jsx("td",{children:"Secondary actions"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"md"})}),e.jsx("td",{children:"0.875rem (14px)"}),e.jsxs("td",{children:[e.jsx("strong",{children:"Default"})," — primary UI"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"lg"})}),e.jsx("td",{children:"1rem (16px)"}),e.jsx("td",{children:"Large / hero sections"})]})]})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"spacing--layout",children:"Spacing & Layout"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Tailwind CSS v4"})," with ",e.jsx(s.code,{children:"cs:"})," namespace prefix"]}),`
`,e.jsxs(s.li,{children:["Touch targets: minimum 44×44px on mobile (",e.jsx(s.code,{children:"cs:max-md:min-h-11"}),")"]}),`
`,e.jsxs(s.li,{children:["Responsive breakpoints: ",e.jsx(s.code,{children:"sm"})," (640px), ",e.jsx(s.code,{children:"md"})," (768px), ",e.jsx(s.code,{children:"lg"})," (1024px), ",e.jsx(s.code,{children:"xl"})," (1280px)"]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"typography",children:"Typography"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Font family: ",e.jsx(s.code,{children:"cs:font-sans"})," (system UI stack)"]}),`
`,e.jsxs(s.li,{children:["Font weights: ",e.jsx(s.code,{children:"cs:font-medium"})," (buttons, labels), ",e.jsx(s.code,{children:"cs:font-normal"})," (body)"]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"motion",children:"Motion"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Fast transitions: ",e.jsx(s.code,{children:"150ms ease-in-out"})," (hover, focus)"]}),`
`,e.jsxs(s.li,{children:["Normal transitions: ",e.jsx(s.code,{children:"200ms ease-in-out"})," (color changes)"]}),`
`,e.jsxs(s.li,{children:["Slow transitions: ",e.jsx(s.code,{children:"300ms ease-in-out"})," (layout shifts)"]}),`
`,e.jsxs(s.li,{children:["Respects ",e.jsx(s.code,{children:"prefers-reduced-motion"})," via ",e.jsx(s.code,{children:"cs:motion-reduce:transition-none"})]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"theming",children:"Theming"}),`
`,e.jsx(s.h3,{id:"dark-mode",children:"Dark Mode"}),`
`,e.jsxs(s.p,{children:["Use ",e.jsx(s.code,{children:"ThemeProvider"})," to manage theme:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<ThemeProvider mode="system">
  <App />
</ThemeProvider>
`})}),`
`,e.jsxs(s.p,{children:["Modes: ",e.jsx(s.code,{children:'"light"'})," | ",e.jsx(s.code,{children:'"dark"'})," | ",e.jsx(s.code,{children:'"system"'})]}),`
`,e.jsx(s.h3,{id:"uicolorprovider",children:"UIColorProvider"}),`
`,e.jsx(s.p,{children:"Sets the accent color for all child components:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<UIColorProvider initialColor="indigo">
  <Button>Uses indigo</Button>
  <Input label="Also indigo" />
</UIColorProvider>
`})})]})}function x(n={}){const{wrapper:s}={...d(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{x as default};
