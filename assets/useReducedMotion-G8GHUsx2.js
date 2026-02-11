"use client";
import{r as n}from"./iframe-DzGEYPXT.js";const o="(prefers-reduced-motion: reduce)";function i(){return typeof window>"u"?!1:window.matchMedia(o).matches}function s(){const[r,c]=n.useState(i);return n.useEffect(()=>{const e=window.matchMedia(o),t=d=>c(d.matches);return e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]),r}export{s as u};
