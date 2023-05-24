import{jsxs as a,jsx as o}from"react/jsx-runtime";import l from"react-dom/server";import{escapeInject as d,dangerouslySkipEscape as p}from"vite-plugin-ssr/server";const m={},h=({children:e,pageContext:n})=>(console.log("hi"),a("div",{className:m.content,children:["TITLE LOL",o("br",{}),e]})),f=["pageProps","urlPathname"],x=async e=>{const{Page:n,pageProps:r}=e;if(!n)throw new Error("My render() hook expects pageContext.Page to be defined");const i=l.renderToString(o(h,{pageContext:e,children:o(n,{...r})})),{documentProps:t}=e.exports,s=t&&t.title||"Vite SSR app",c=t&&t.description||"App using Vite + vite-plugin-ssr";return{documentHtml:d`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${c}" />
        <title>${s}</title>
      </head>
      <body>
        <div id="react-root">${p(i)}</div>
      </body>
    </html>`,pageContext:{}}};export{f as passToClient,x as render};
