import{jsxs as t,Fragment as n,jsx as r}from"react/jsx-runtime";import{b as a,a as s}from"../chunks/chunk-c8aedf3b.js";const c=({blog:e})=>(console.log(e),t(n,{children:[r("div",{children:e.date}),r("div",{children:e.title}),e.content.map(o=>o)]})),l=e=>({pageContext:{pageProps:{blog:a.find(o=>e.routeParams.id===s(o))}}});export{c as Page,l as onBeforeRender};