const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/markdown-CJFh_-Nn.js","assets/components-89jrYwCS.js","assets/highlight-D7KJDoiJ.js"])))=>i.map(i=>d[i]);
import{n as e,r as h,M as b,L as j,S as k}from"./components-89jrYwCS.js";const w="modulepreload",v=function(o){return"/"+o},p={},m=function(a,i,u){let l=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const t=document.querySelector("meta[property=csp-nonce]"),r=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));l=Promise.allSettled(i.map(n=>{if(n=v(n),n in p)return;p[n]=!0;const d=n.endsWith(".css"),x=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${x}`))return;const s=document.createElement("link");if(s.rel=d?"stylesheet":w,d||(s.as="script"),s.crossOrigin="",s.href=n,r&&s.setAttribute("nonce",r),document.head.appendChild(s),d)return new Promise((g,f)=>{s.addEventListener("load",g),s.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${n}`)))})}))}function c(t){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t}return l.then(t=>{for(const r of t||[])r.status==="rejected"&&c(r.reason);return a().catch(c)})},y=()=>e.jsxs(e.Fragment,{children:[e.jsxs("section",{"data-background-color":"#212121",children:[e.jsx("img",{src:"/Remix_Logo_Dark_Glowing.png",height:"auto",width:"500"}),e.jsx("h1",{children:"Workshop"}),"Find this presentation at"," ",e.jsx("a",{href:"https://pavestru.github.io/remix-workshop",target:"_blank",children:"https://pavestru.github.io/remix-workshop"})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Your trainers"}),e.jsx("p",{children:"Pavel Struhár"}),e.jsx("p",{children:"Ján Capiak"})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Objective"}),e.jsx("p",{children:"Learn how to build a simple full-stack application using Remix."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Application requirements"}),e.jsx("p",{children:"Build a URL shortener application with dashboard UI"}),e.jsxs("ul",{children:[e.jsx("li",{class:"fragment",children:"Authenticated users can create, update, delete, list shortened URLs."}),e.jsx("li",{class:"fragment",children:"Everyone can access the shortened URL and be redirected to a destination (long URL)."}),e.jsxs("li",{class:"fragment",children:["e.g."," ",e.jsxs("a",{href:"https://rmx.sk/workshop",target:"_blank",children:["https://rmx.sk/",e.jsx("strong",{children:"workshop"})]})," ","points to"," ",e.jsx("a",{href:"https://github.com/pavestru/remix-workshop",target:"_blank",children:"https://github.com/pavestru/remix-workshop"})]})]})]}),e.jsxs("section",{children:[e.jsx("h1",{children:"Demo"}),e.jsx("p",{children:e.jsx("a",{href:"https://remix-workshop.pages.dev",target:"_blank",children:"https://remix-workshop.pages.dev"})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Agenda"}),e.jsxs("ul",{children:[e.jsx("li",{children:"9:00 - 9:15 Introduction"}),e.jsx("li",{children:"9:15 - 9:45 Lab 1: App scaffolding (Cloudflare)"}),e.jsx("li",{children:"9:45 - 10:15 Lab 2: Authentication (Supabase)"}),e.jsx("li",{children:"10:15 - 11:00 Lab 3: Data fetching"}),e.jsx("li",{children:"11:00 - 11:30 Lab 4: Forms"}),e.jsx("li",{children:"11:30 - 12:00 Wrap-up"})]})]})]}),R=()=>e.jsxs(e.Fragment,{children:[e.jsxs("section",{children:[e.jsx("h2",{children:"Prerequisites"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Node.js + npm"}),e.jsx("li",{children:"Cloudflare account"}),e.jsx("li",{children:"Supabase account"})]})]}),e.jsx("section",{"data-markdown":"","data-background-color":"#212121",children:e.jsx("textarea",{"data-template":!0,children:`

## Introduction to
<img src="/Remix_Logo_Dark_Glowing.png" height="auto" width="500" />
---
### What is Remix?

- A full-stack framework for React
  - by the authors of React Router
- Server rendering **first**
- Data fetching
- Routing
- Form handling
- etc.
---
### Why Remix?

- Better performance
- Better developer experience
- Better SEO
- <a href="https://remix.run" target="_blank">https://remix.run</a>
---
But let's start with React first
### React component

\`\`\`jsx
import React from 'react';

const Component = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
}
\`\`\`
---
### Remix route

/$slug

\`\`\`jsx [1-10||1-4||5-10]
export const loader = async ({ params }) => {
  const fullName = getFullName(params.slug)
  return { fullName };
};

const Component = ({ name }) => {
  const { fullName } = useLoaderData();
  return <h1>Hello, {fullName}!</h1>;
}
export default Component;
\`\`\`

<a href="https://remix.run/docs/en/main/route/loader" target="_blank">https://remix.run/docs/en/main/route/loader</a>

---
### Remix route with form

\`\`\`jsx [1-4||5-8||10-17]
export const loader = async ({ params }) => {
  const fullName = getFullName(params.slug)
  return { fullName };
};

export const action = async ({ request }) => {
  ...
}

const Component = ({ name }) => {
  const { fullName } = useLoaderData();
  return (<div>
    <h1>Hello, {fullName}!</h1>
    <Form action={action} />...</Form>
  </div>);
}
export default Component;
\`\`\`

---
### Remix router

- file-based routing
- nested routes

\`\`\`
 app/
├── routes/
│   ├── _index.tsx
│   ├── about.tsx
│   ├── concerts.$city.tsx
│   └── concerts.trending.tsx
└── root.tsx
\`\`\`

<a href="https://remix.run/docs/en/main/file-conventions/routes" target="_blank">Route File Naming Documentation</a>
---
### Other file conventions
- Root Layout - app/root.tsx
- Client modules - *.client.ts
- Server modules - *.server.ts
---
### TypeScript

- Annoyance in the beginning
- Improves Dev. eXperience in the long run
  - auto-completed code
  - self-documented code
  - type-safe data flow
---
### Wrangler

- Cloudflare CLI
- wrangler.toml - configuration
- e.g. \`wrangler types\`
---
### All labs and hints

<a href="https://github.com/pavestru/remix-workshop" target="_blank">https://github.com/pavestru/remix-workshop</a>
      `})})]}),_=()=>e.jsx("section",{"data-markdown":"",children:e.jsx("textarea",{"data-template":!0,children:`
# Lab 1: Warm-up

Go to <a href="https://github.com/pavestru/remix-workshop/blob/main/lab_1.md" target="_blank">Lab 1 assignment</a>
---
## Lab 1 Showcase
      `})}),L=()=>e.jsx(e.Fragment,{children:e.jsx("section",{"data-markdown":"","data-background-color":"#212121",children:e.jsx("textarea",{"data-template":!0,children:`
# Wrap Up
---
## Application features missing

- **Analytics**
- User management
---
## Cloudflare - the weird

- SQLite vs KV
- platform lock-in
  - move to SQLite
  - rename @remix-run/cloudflare to @remix-run/node
---
## Remix - The good!

- [Remix Stacks](https://remix.run/docs/en/main/guides/templates#stacks)
---
## Remix - The bad and ugly

- Not suitable for single-page-apps (yet?)
  - this presentation is a Remix SPA (ugly)

---
## Remix - The good and bad (trade-offs)

- Coupling of client and server
- No React Server Components (yet?)
---
<img src="/dead_remix.png" height="auto" width="500" />

Remix is dead...

[https://remix.run/blog](https://remix.run/blog)
---
<img src="/reactrouter_logo_dark.png" height="auto" width="500" />

Long live React Router!
      `})})}),A=()=>e.jsx(e.Fragment,{children:e.jsx("section",{"data-markdown":"","data-background-color":"#212121",children:e.jsx("textarea",{"data-template":!0,children:`
## Authentication with
<img src="/supabase-logo-dark.png" height="auto" width="500" />
---
### What is Supabase Auth?

- easily implement authentication and authorization
- popular Auth methods:
  - password
  - magic link
  - one-time password (OTP)
  - social login (GitHub, Google etc.)
  - single sign-on (SSO)
---
### Initiating a session

- session is created when user signs in
- is represented in the form of a JWT and a refresh token
- session terminates when user signs out, due to inactivity, reaches maximum lifetime etc.
- two flows for initiating a session and receiving tokens
  - Implicit flow
  - PKCE flow
---
### PKCE flow

 <img src="/o-auth-pkce-flow.png"  />
 more: <a href="https://supabase.com/docs/guides/auth/sessions/pkce-flow" target="_blank">PKCE flow</a>
      `})})}),S=()=>e.jsx("section",{"data-markdown":"",children:e.jsx("textarea",{"data-template":!0,children:`
### Lab 2: Authentication

Go to <a href="https://github.com/pavestru/remix-workshop/blob/main/lab_2.md" target="_blank">Lab 2 assignment</a>

How it could look like:

 <img src="/lab-2-result.png" />
      `})}),C=()=>e.jsx(e.Fragment,{children:e.jsx("section",{"data-markdown":"","data-background-color":"#212121",children:e.jsx("textarea",{"data-template":!0,children:`
### Database on Cloudflare
---
## KV storage
- key-value data store
- high read volumes with low latency
- available in free and paid ties

more [KV pricing](https://developers.cloudflare.com/kv/platform/pricing)
---
### Database access

- DB layer provided in db.server.ts (read it!)
- Generate types: npm run typegen
---
### Loader
\`\`\`jsx [1-10||1-4||5-10]
export const loader = async ({ params }) => {
  const data = getData(params.id)
  return { data };
};

const Component = ({ name }) => {
  const { data } = useLoaderData<typeof loader>();
  /* your code goes here */;
}
export default Component;
\`\`\`
      `})})}),D=()=>e.jsx("section",{"data-markdown":"",children:e.jsx("textarea",{"data-template":!0,children:`
### Lab 3: Database

Go to <a href="https://github.com/pavestru/remix-workshop/blob/main/lab_3.md" target="_blank">Lab 3 assignment</a>

How it could look like:

 <img src="/lab-3-result.png" />
      `})}),E=()=>e.jsx(e.Fragment,{children:e.jsx("section",{"data-markdown":"","data-background-color":"#212121",children:e.jsx("textarea",{"data-template":!0,children:`
# Form
---
## Forms in Remix

- submits data to actions via fetch
- prevents the default browser behaviour

\`\`\`jsx [1-2||3-6]
export const action = async () => {...};

const Component = ()=> {
 return (
    <Form method="post">
      {/* existing elements */}
    </Form>
  )
}
---
## Route Action

\`\`\`jsx
export async function action({
  request,
}: ActionFunctionArgs) {
  const formData = await request.formData();
  const user = await getUser(request);

  await updateUser(user.id, {
    email: formData.get("email"),
    displayName: formData.get("displayName"),
  });

  return json({ ok: true });
}
\`\`\`
more <a href="https://remix.run/docs/en/main/discussion/data-flow#route-action" target="_blank">Route Action</a>
`})})}),F=()=>e.jsx("section",{"data-markdown":"",children:e.jsx("textarea",{"data-template":!0,children:`
### Lab 4: Form

Go to <a href="https://github.com/pavestru/remix-workshop/blob/main/lab_4.md" target="_blank">Lab 4 assignment</a>

How it could look like:

<img src="/lab-4-result.png" />
      `})});function N(){const o=h.useRef(null),a=h.useRef(null);return h.useEffect(()=>((async()=>{if(a.current)return;const{default:u}=await m(async()=>{const{default:t}=await import("./reveal.esm-B3O8JSaZ.js");return{default:t}},[]),{default:l}=await m(async()=>{const{default:t}=await import("./markdown-CJFh_-Nn.js").then(r=>r.m);return{default:t}},__vite__mapDeps([0,1])),{default:c}=await m(async()=>{const{default:t}=await import("./highlight-D7KJDoiJ.js").then(r=>r.h);return{default:t}},__vite__mapDeps([2,1]));a.current=new u(o.current),a.current.initialize({plugins:[c,l],has:!0,history:!0})})(),()=>{try{a.current&&(a.current.destroy(),a.current=null)}catch{console.warn("Reveal.js destroy call failed.")}}),[]),e.jsxs("html",{children:[e.jsxs("head",{children:[e.jsx("link",{rel:"icon",href:"data:image/x-icon;base64,AA"}),e.jsx(b,{}),e.jsx(j,{})]}),e.jsxs("body",{children:[e.jsx("div",{className:"reveal",ref:o,children:e.jsxs("div",{className:"slides",children:[e.jsx(y,{}),e.jsx(R,{}),e.jsx(_,{}),e.jsx(A,{}),e.jsx(S,{}),e.jsx(C,{}),e.jsx(D,{}),e.jsx(E,{}),e.jsx(F,{}),e.jsx(L,{})]})}),e.jsx(k,{})]})]})}export{N as default};
