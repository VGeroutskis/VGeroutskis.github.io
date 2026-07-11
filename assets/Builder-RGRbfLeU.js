import{r as p,g as Ae,D as $e,C as Ee,s as Xe,a as Qe,u as ut,l as pt,j as e,R as ht,T as ft,b as mt,G as Oe,Y as Ge,c as et,d as gt}from"./index-D63cL1aW.js";import{TemplateRenderer as bt}from"./index-C4bKeFvQ.js";import{u as Le}from"./githubSecrets-BmlEvOtC.js";const at=()=>new Promise((d,G)=>{if(window.JSZip){d(window.JSZip);return}const S=document.createElement("script");S.src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js",S.onload=()=>d(window.JSZip),S.onerror=()=>G(new Error("Failed to load JSZip CDN")),document.head.appendChild(S)}),xt=async(d,G)=>{try{const S=await at(),w=new S;let g=await(await fetch("/")).text();g=g.replace("</head>",`<script>
      // Load local config.json file
      fetch('./config.json')
        .then(res => res.json())
        .then(data => {
          window.__PROFILE_CONFIG__ = data;
          // Reload page to apply config
          if (!window.__CONFIG_LOADED__) {
            window.__CONFIG_LOADED__ = true;
            // Trigger dynamic update runtime
            if (window.updateRuntimeConfig) {
              window.updateRuntimeConfig(data);
            }
          }
        });
    <\/script></head>`),g=g.replaceAll('src="/assets/','src="./assets/'),g=g.replaceAll('href="/assets/','href="./assets/'),g=g.replaceAll('href="/vendor/','href="./vendor/'),w.file("index.html",g),w.file("config.json",JSON.stringify(G,null,2));const J=Array.from(document.querySelectorAll('script[type="module"]')),A=Array.from(document.querySelectorAll('link[rel="stylesheet"]'));for(const I of A){const x=I.getAttribute("href");if(x&&x.startsWith("/assets/")){const T=await fetch(x);if(T.ok){const C=await T.text();w.file(x.substring(1),C)}}}const R=J.map(I=>I.getAttribute("src")).filter(I=>!!I&&I.startsWith("/assets/")),F=new Set;for(let I=0;I<R.length;I++){const x=R[I];if(F.has(x))continue;const T=await fetch(x);if(!T.ok)continue;const C=await T.text();w.file(x.substring(1),C),F.add(x);const k=[...C.matchAll(/from"\.\/([a-zA-Z0-9_.-]+\.js)"|import\("\.\/([a-zA-Z0-9_.-]+\.js)"\)/g)].map(N=>N[1]||N[2]);for(const N of k){const h=`/assets/${N}`;!F.has(h)&&!R.includes(h)&&R.push(h)}const s=[...C.matchAll(/"\/assets\/([a-zA-Z0-9_.-]+\.json)"/g)].map(N=>N[1]);for(const N of s){const h=`/assets/${N}`;!F.has(h)&&!R.includes(h)&&R.push(h)}}const j=[...g.matchAll(/href="(?:\.\/)?(vendor\/[^"]+\.css)"/g)].map(I=>I[1]),W=[...new Set(j)],f=new Set;for(const I of W){if(f.has(I))continue;const x=await fetch(`/${I}`);if(!x.ok)continue;const T=await x.text();w.file(I,T),f.add(I);const C=[...T.matchAll(/url\(([^)]+)\)/g)].map(k=>k[1].replace(/['"]/g,""));for(const k of C){const s=new URL(k,`https://x/${I}`).pathname.slice(1);if(f.has(s))continue;const N=await fetch(`/${s}`);if(!N.ok)continue;const h=new Uint8Array(await N.arrayBuffer());w.file(s,h),f.add(s)}}const L=await w.generateAsync({type:"blob"}),P=document.createElement("a");P.href=URL.createObjectURL(L),P.download=`linkhubpage-${d}-profile.zip`,document.body.appendChild(P),P.click(),document.body.removeChild(P)}catch(S){console.error("ZIP packaging failed:",S),alert("Failed to generate ZIP export package.")}},yt=async(d,G)=>{try{const S=await at(),w=new S;w.file("wrangler.toml",`name = "linkhubpage-profile-\${username || 'custom'}"
main = "src/worker.ts"
compatibility_date = "2024-01-01"

[assets]
directory = "./public"

[vars]
GOOGLE_CLIENT_ID = "\${profileConfig.googleClientId || ''}"
GOOGLE_ANALYTICS_ID = "\${profileConfig.googleAnalyticsId || ''}"
RESEND_API_KEY = "\${profileConfig.resendApiKey || ''}"
`);const g={name:"linkhubpage-profile-${username || 'custom'}",version:"1.0.0",devDependencies:{wrangler:"^3.0.0"},scripts:{deploy:"wrangler deploy"}};w.file("package.json",JSON.stringify(g,null,2));const Y=`export interface Env {
  GOOGLE_CLIENT_ID?: string;
  GOOGLE_ANALYTICS_ID?: string;
  RESEND_API_KEY?: string;
}

function escapeHtml(value: string): string {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function getEmailHtml(name: string, email: string, message: string): string {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\\n/g, '<br/>');
  return \`<!DOCTYPE html><html><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0"><title>New Contact Message</title>
<style>
body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background-color:#0e0f11;color:#e2e8f0;margin:0;padding:0;-webkit-font-smoothing:antialiased;}
.wrapper{width:100%;background-color:#0e0f11;padding:40px 20px;box-sizing:border-box;}
.container{max-width:580px;margin:0 auto;background-color:#16181d;border:1px solid #242930;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.2);}
.accent-bar{height:4px;background:linear-gradient(90deg,#00d2ff,#0284c7);}
.header{padding:32px 32px 20px 32px;border-bottom:1px solid #242930;}
.header h2{margin:0;font-size:20px;font-weight:700;color:#ffffff;letter-spacing:-0.025em;}
.header p{margin:4px 0 0 0;font-size:13px;color:#94a3b8;}
.content{padding:32px;}
.field-group{margin-bottom:24px;}
.field-label{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#94a3b8;margin-bottom:6px;}
.field-value{font-size:15px;color:#ffffff;font-weight:500;}
.field-value a{color:#00d2ff;text-decoration:none;}
.message-box{background-color:#1e293b;border-left:3px solid #00d2ff;border-radius:8px;padding:20px;margin-top:8px;font-size:15px;line-height:1.6;color:#f1f5f9;font-style:italic;}
.footer{background-color:#0f1115;padding:24px 32px;text-align:center;border-top:1px solid #242930;font-size:12px;color:#64748b;}
.footer a{color:#94a3b8;text-decoration:underline;}
</style></head><body>
<div class="wrapper"><div class="container"><div class="accent-bar"></div>
<div class="header"><h2>New Message Received</h2><p>A visitor has contacted you via your LinkHubPage profile</p></div>
<div class="content">
<div class="field-group"><div class="field-label">Sender Name</div><div class="field-value">\${safeName}</div></div>
<div class="field-group"><div class="field-label">Sender Email</div><div class="field-value"><a href="mailto:\${safeEmail}">\${safeEmail}</a></div></div>
<div class="field-group"><div class="field-label">Message</div><div class="message-box">\${safeMessage}</div></div>
</div>
<div class="footer">Sent automatically from your LinkHubPage profile</div>
</div></div></body></html>\`;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Serve public environment variables dynamically (e.g. Google login credentials)
    if (url.pathname === '/api/config' && request.method === 'GET') {
      return new Response(JSON.stringify({
        GOOGLE_CLIENT_ID: env.GOOGLE_CLIENT_ID || '',
        GOOGLE_ANALYTICS_ID: env.GOOGLE_ANALYTICS_ID || ''
      }), {
        status: 200,
        headers: { 
          'content-type': 'application/json',
          'access-control-allow-origin': '*'
        }
      });
    }

    // API route to send emails
    if (url.pathname === '/api/send-email' && request.method === 'POST') {
      try {
        const body = await request.json() as { name: string; email: string; message: string; recipientEmail?: string };
        const { name, email, message, recipientEmail } = body;

        if (!name || !email || !message) {
          return new Response(JSON.stringify({ error: 'Missing fields' }), {
            status: 400,
            headers: { 'content-type': 'application/json' }
          });
        }

        const resendKey = env.RESEND_API_KEY;
        const targetEmail = recipientEmail || "${G.contactEmail||""}";

        if (resendKey) {
          const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': \`Bearer \${resendKey}\`
            },
            body: JSON.stringify({
              from: 'LinkHubPage Contact <onboarding@resend.dev>',
              to: targetEmail,
              reply_to: email,
              subject: \`LinkHubPage Contact: \${name}\`,
              text: \`Name: \${name}\\nEmail: \${email}\\n\\nMessage:\\n\${message}\`,
              html: getEmailHtml(name, email, message)
            })
          });

          if (resendResponse.ok) {
            return new Response(JSON.stringify({ success: true }), {
              status: 200,
              headers: { 'content-type': 'application/json' }
            });
          } else {
            const errText = await resendResponse.text();
            return new Response(JSON.stringify({ error: 'Email service failed', details: errText }), {
              status: 502,
              headers: { 'content-type': 'application/json' }
            });
          }
        }

        return new Response(JSON.stringify({ error: 'Email service not configured (Missing RESEND_API_KEY)' }), {
          status: 501,
          headers: { 'content-type': 'application/json' }
        });
      } catch (err: any) {
        return new Response(JSON.stringify({ error: 'Internal Server Error', message: err.message }), {
          status: 500,
          headers: { 'content-type': 'application/json' }
        });
      }
    }

    return new Response('Not Found', { status: 404 });
  }
};
`;w.file("src/worker.ts",Y);let A=await(await fetch("/")).text();A=A.replace("</head>",`<script>
      fetch('./config.json')
        .then(res => res.json())
        .then(data => {
          window.__PROFILE_CONFIG__ = data;
          if (!window.__CONFIG_LOADED__) {
            window.__CONFIG_LOADED__ = true;
            if (window.updateRuntimeConfig) {
              window.updateRuntimeConfig(data);
            }
          }
        });
    <\/script></head>`),A=A.replaceAll('src="/assets/','src="./assets/'),A=A.replaceAll('href="/assets/','href="./assets/'),A=A.replaceAll('href="/vendor/','href="./vendor/'),w.file("public/index.html",A);const F={...G};delete F.resendApiKey,w.file("public/config.json",JSON.stringify(F,null,2));const j=Array.from(document.querySelectorAll('script[type="module"]')),W=Array.from(document.querySelectorAll('link[rel="stylesheet"]'));for(const k of W){const s=k.getAttribute("href");if(s&&s.startsWith("/assets/")){const N=await fetch(s);if(N.ok){const h=await N.text();w.file("public/"+s.substring(1),h)}}}const f=j.map(k=>k.getAttribute("src")).filter(k=>!!k&&k.startsWith("/assets/")),L=new Set;for(let k=0;k<f.length;k++){const s=f[k];if(L.has(s))continue;const N=await fetch(s);if(!N.ok)continue;const h=await N.text();w.file("public/"+s.substring(1),h),L.add(s);const H=[...h.matchAll(/from"\.\/([a-zA-Z0-9_.-]+\.js)"|import\("\.\/([a-zA-Z0-9_.-]+\.js)"\)/g)].map(i=>i[1]||i[2]);for(const i of H){const l=`/assets/${i}`;!L.has(l)&&!f.includes(l)&&f.push(l)}const q=[...h.matchAll(/"\/assets\/([a-zA-Z0-9_.-]+\.json)"/g)].map(i=>i[1]);for(const i of q){const l=`/assets/${i}`;!L.has(l)&&!f.includes(l)&&f.push(l)}}const P=[...A.matchAll(/href="(?:\.\/)?(vendor\/[^"]+\.css)"/g)].map(k=>k[1]),I=[...new Set(P)],x=new Set;for(const k of I){if(x.has(k))continue;const s=await fetch(`/${k}`);if(!s.ok)continue;const N=await s.text();w.file("public/"+k,N),x.add(k);const h=[...N.matchAll(/url\(([^)]+)\)/g)].map(H=>H[1].replace(/['"]/g,""));for(const H of h){const q=new URL(H,`https://x/${k}`).pathname.slice(1);if(x.has(q))continue;const i=await fetch(`/${q}`);if(!i.ok)continue;const l=new Uint8Array(await i.arrayBuffer());w.file("public/"+q,l),x.add(q)}}const T=await w.generateAsync({type:"blob"}),C=document.createElement("a");C.href=URL.createObjectURL(T),C.download=`linkhubpage-${d}-cloudflare-worker.zip`,document.body.appendChild(C),C.click(),document.body.removeChild(C)}catch(S){console.error("Worker ZIP packaging failed:",S),alert("Failed to generate Cloudflare Worker export package.")}},De=d=>d.trim().toLowerCase().replace(/^https?:\/\//,"").replace(/\/.*$/,"").replace(/\.$/,"");function wt({username:d,profileConfig:G,persistBuilderDraft:S,getAuthToken:w,setDeployStatus:v,setStatusMsg:g}){const[Y,J]=p.useState(!1),[A,R]=p.useState(""),[F,j]=p.useState("idle"),[W,f]=p.useState(""),[L,P]=p.useState("idle"),[I,x]=p.useState(""),[T,C]=p.useState(""),[k,s]=p.useState(()=>`linkhubpage-profile-${d||"custom"}`),[N,h]=p.useState(""),[H,q]=p.useState(""),i=p.useRef(!1),l=p.useRef(!1),_=p.useRef(!1);p.useEffect(()=>{s(`linkhubpage-profile-${d||"custom"}`)},[d]);const te=async()=>{const r=De(A);if(!r){j("invalid"),f("Please enter a valid domain first.");return}j("checking"),f("Checking whether the domain is using Cloudflare nameservers..."),P("idle"),x(""),h("");try{const o=await fetch("/api/cloudflare/domain-check",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({domain:r})}),n=await o.json();if(!o.ok){j("invalid"),f(n.error||"Domain check failed.");return}n.isCloudflare?(j("valid"),f(`Domain ${n.domain} is on Cloudflare. Opening Cloudflare login...`),H.trim()||q(`${n.domain}/*`)):(j("invalid"),f(`Domain ${n.domain} is not currently on Cloudflare nameservers.`))}catch(o){j("invalid"),f(o instanceof Error?o.message:"Unable to verify domain.")}},be=async()=>{const r=De(A);if(F!=="valid"){P("error"),f("Please verify your domain on Cloudflare before login.");return}const o=T.trim();if(!o){P("error"),f("Please connect via the Cloudflare popup first.");return}P("connecting"),f("Connecting to Cloudflare and loading your account + zone details...");try{const n=await fetch("/api/cloudflare/connect",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({domain:r,apiToken:o})}),c=await n.json();if(!n.ok){P("error"),f(c.error||"Cloudflare login/connect failed.");return}x(c.accountId||""),h(c.zoneId||""),q(c.routePattern||`${r}/*`),P("connected"),f(`Connected to Cloudflare successfully. Zone: ${c.zoneName||r}`)}catch(n){P("error"),f(n instanceof Error?n.message:"Cloudflare login/connect failed.")}},ce=async()=>{var n,c,B;const r=De(A);if(!r){alert("Please provide the domain you want to deploy to.");return}if(F!=="valid"){alert("Please verify that the domain is on Cloudflare first.");return}if(L!=="connected"){alert("Please login/connect Cloudflare to auto-load account and zone details.");return}if(!I||!T||!k||!N){alert("Missing Cloudflare deployment details. Please reconnect Cloudflare and try again.");return}const o=(H||`${r}/*`).trim();v("loading"),g("Compiling your profile assets into a single-file Worker...");try{await S();const y={};(n=G.resendApiKey)!=null&&n.trim()&&(y.BUILDER_RESEND_API_KEY=G.resendApiKey.trim()),(c=G.googleClientId)!=null&&c.trim()&&(y.BUILDER_GOOGLE_CLIENT_ID=G.googleClientId.trim()),(B=G.googleAnalyticsId)!=null&&B.trim()&&(y.BUILDER_GOOGLE_ANALYTICS_ID=G.googleAnalyticsId.trim()),y.CLOUDFLARE_API_TOKEN=T.trim(),y.CLOUDFLARE_ACCOUNT_ID=I.trim(),y.CLOUDFLARE_SCRIPT_NAME=k.trim();const K={...G};delete K.resendApiKey,delete K.googleClientId,delete K.googleAnalyticsId;const de=await fetch("/");if(!de.ok)throw new Error("Failed to fetch HTML template.");let Z=await de.text();Z=Z.replace("</head>",`<script>
        window.__BUILDER_DEPLOY_MODE__ = true;
        window.__BUILDER_DEPLOY_TARGET__ = 'cloudflare';
        const __lhpShowSuspended = (msg) => {
          const text = msg || 'This site is currently unavailable.';
          document.documentElement.innerHTML = '<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#06080d;color:#cbd5e1;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;"><div style="max-width:640px;padding:32px;text-align:center;"><h1 style="margin:0 0 12px 0;color:#22d3ee;font-size:28px;">Site Suspended</h1><p style="margin:0;color:#94a3b8;line-height:1.6;">' + text + '</p></div></body>';
        };
        const __lhpCheckSubscription = async (cfg) => {
          const email = (cfg && cfg.adminEmail) ? String(cfg.adminEmail).trim() : '';
          if (!email) return true;
          try {
            const res = await fetch('https://linkhubpage.com/api/subscription/status?email=' + encodeURIComponent(email), { cache: 'no-store' });
            if (!res.ok) return true;
            const sub = await res.json();
            if (sub && sub.active === false) {
              __lhpShowSuspended(sub.reason || 'Subscription expired');
              return false;
            }
          } catch (_) {
            return true;
          }
          return true;
        };
        const __lhpParts = window.location.pathname.split('/').filter(Boolean);
        if (__lhpParts[__lhpParts.length - 1] === 'admin') __lhpParts.pop();
        const __lhpPrefix = __lhpParts.length > 0 ? '/' + __lhpParts[0] + '/' : '/';
        fetch(__lhpPrefix + 'config.json')
          .then(res => res.json())
          .then(async data => {
            const allowed = await __lhpCheckSubscription(data);
            if (!allowed) return;
            window.__PROFILE_CONFIG__ = data;
            if (!window.__CONFIG_LOADED__) {
              window.__CONFIG_LOADED__ = true;
              if (window.updateRuntimeConfig) {
                window.updateRuntimeConfig(data);
              }
            }
          });
      <\/script></head>`),Z=Z.replaceAll('src="/assets/','src="./assets/'),Z=Z.replaceAll('href="/assets/','href="./assets/');const ne={},ue={},xe={},se=[...Z.matchAll(/(?:src|href)="\.\/assets\/([^"]+)"/g)].map(O=>O[1]),ie=se.filter(O=>O.endsWith(".js")),pe=se.filter(O=>O.endsWith(".css"));for(const O of pe){if(ue[O]!==void 0)continue;const V=await fetch(`/assets/${O}`);V.ok&&(ue[O]=await V.text())}for(let O=0;O<ie.length;O++){const V=ie[O];if(ne[V]!==void 0)continue;const Q=await fetch(`/assets/${V}`);if(!Q.ok)continue;const b=await Q.text();ne[V]=b;const E=[...b.matchAll(/from"\.\/([a-zA-Z0-9_.-]+\.js)"|import\("\.\/([a-zA-Z0-9_.-]+\.js)"\)/g)].map(D=>D[1]||D[2]);for(const D of E)ne[D]===void 0&&!ie.includes(D)&&ie.push(D);const $=[...b.matchAll(/"\/assets\/([a-zA-Z0-9_.-]+\.json)"/g)].map(D=>D[1]);for(const D of $){if(xe[D]!==void 0)continue;const M=await fetch(`/assets/${D}`);M.ok&&(xe[D]=await M.text())}}const he={},ye={},Ne=[...Z.matchAll(/href="(\/vendor\/[^"]+\.css)"/g)].map(O=>O[1]),_e=[...new Set(Ne)],we=O=>{let V="";for(let Q=0;Q<O.length;Q++)V+=String.fromCharCode(O[Q]);return btoa(V)};for(const O of _e){if(he[O]!==void 0)continue;const V=await fetch(O);if(!V.ok)continue;const Q=await V.text();he[O]=Q;const b=[...Q.matchAll(/url\(([^)]+)\)/g)].map(E=>E[1].replace(/['"]/g,""));for(const E of b){const $=new URL(E,`https://x${O}`).pathname;if(ye[$]!==void 0)continue;const D=await fetch($);if(!D.ok)continue;const M=await D.arrayBuffer();ye[$]=we(new Uint8Array(M))}}const fe=`const htmlContent = ${JSON.stringify(Z)};
const cssFiles = ${JSON.stringify(ue)};
const jsFiles = ${JSON.stringify(ne)};
const jsonFiles = ${JSON.stringify(xe)};
const vendorText = ${JSON.stringify(he)};
const vendorBinary = ${JSON.stringify(ye)};
const configData = ${JSON.stringify(K)};

function b64ToBytes(b64) {
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function escapeHtml(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function getEmailHtml(name, email, message) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\\n/g, '<br/>');
  return '<!DOCTYPE html><html><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1.0"><title>New Contact Message</title>' +
    '<style>' +
    'body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background-color:#0e0f11;color:#e2e8f0;margin:0;padding:0;-webkit-font-smoothing:antialiased;}' +
    '.wrapper{width:100%;background-color:#0e0f11;padding:40px 20px;box-sizing:border-box;}' +
    '.container{max-width:580px;margin:0 auto;background-color:#16181d;border:1px solid #242930;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.2);}' +
    '.accent-bar{height:4px;background:linear-gradient(90deg,#00d2ff,#0284c7);}' +
    '.header{padding:32px 32px 20px 32px;border-bottom:1px solid #242930;}' +
    '.header h2{margin:0;font-size:20px;font-weight:700;color:#ffffff;letter-spacing:-0.025em;}' +
    '.header p{margin:4px 0 0 0;font-size:13px;color:#94a3b8;}' +
    '.content{padding:32px;}' +
    '.field-group{margin-bottom:24px;}' +
    '.field-label{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#94a3b8;margin-bottom:6px;}' +
    '.field-value{font-size:15px;color:#ffffff;font-weight:500;}' +
    '.field-value a{color:#00d2ff;text-decoration:none;}' +
    '.message-box{background-color:#1e293b;border-left:3px solid #00d2ff;border-radius:8px;padding:20px;margin-top:8px;font-size:15px;line-height:1.6;color:#f1f5f9;font-style:italic;}' +
    '.footer{background-color:#0f1115;padding:24px 32px;text-align:center;border-top:1px solid #242930;font-size:12px;color:#64748b;}' +
    '.footer a{color:#94a3b8;text-decoration:underline;}' +
    '</style></head><body>' +
    '<div class="wrapper"><div class="container"><div class="accent-bar"></div>' +
    '<div class="header"><h2>New Message Received</h2><p>A visitor has contacted you via your LinkHubPage profile</p></div>' +
    '<div class="content">' +
    '<div class="field-group"><div class="field-label">Sender Name</div><div class="field-value">' + safeName + '</div></div>' +
    '<div class="field-group"><div class="field-label">Sender Email</div><div class="field-value"><a href="mailto:' + safeEmail + '">' + safeEmail + '</a></div></div>' +
    '<div class="field-group"><div class="field-label">Message</div><div class="message-box">' + safeMessage + '</div></div>' +
    '</div>' +
    '<div class="footer">Sent automatically from your LinkHubPage profile</div>' +
    '</div></div></body></html>';
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/config' && request.method === 'GET') {
      const configOverrides = {
        GOOGLE_CLIENT_ID: env.BUILDER_GOOGLE_CLIENT_ID || '',
        GOOGLE_ANALYTICS_ID: env.BUILDER_GOOGLE_ANALYTICS_ID || ''
      };
      // Only included when actually set, unlike the two fields above - an
      // empty string here would overwrite the favicon baked into
      // config.json at export time via Object.assign in updateRuntimeConfig,
      // blanking the favicon on every export that hasn't used the live
      // override yet.
      if (env.BUILDER_FAVICON) configOverrides.favicon = env.BUILDER_FAVICON;
      return new Response(JSON.stringify(configOverrides), {
        status: 200,
        headers: {
          'content-type': 'application/json',
          'access-control-allow-origin': '*'
        }
      });
    }

    // Lets the owner update their own Resend/Google Analytics/Google Client ID
    // secrets from this exported site's own /admin, without going back to the
    // main Builder and redeploying. Authenticates the same way the admin login
    // itself does (Google token -> userinfo -> adminEmail match), then calls
    // back into the Cloudflare API using this worker's own stored token to
    // update its own secrets.
    if (url.pathname === '/api/admin/config' && request.method === 'POST') {
      const authHeader = request.headers.get('Authorization') || '';
      if (!authHeader.startsWith('Bearer ')) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), {
          status: 401,
          headers: { 'content-type': 'application/json' }
        });
      }

      if (!env.CLOUDFLARE_API_TOKEN || !env.CLOUDFLARE_ACCOUNT_ID || !env.CLOUDFLARE_SCRIPT_NAME) {
        return new Response(JSON.stringify({ error: 'This site was deployed before secret self-update was supported. Redeploy from the Builder once to enable it.' }), {
          status: 501,
          headers: { 'content-type': 'application/json' }
        });
      }

      const accessToken = authHeader.substring(7);
      const userRes = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: 'Bearer ' + accessToken }
      });
      if (!userRes.ok) {
        return new Response(JSON.stringify({ error: 'Invalid token' }), {
          status: 401,
          headers: { 'content-type': 'application/json' }
        });
      }
      const googleUser = await userRes.json();
      if (!googleUser.email || googleUser.email !== configData.adminEmail) {
        return new Response(JSON.stringify({ error: 'Not authorized for this profile' }), {
          status: 403,
          headers: { 'content-type': 'application/json' }
        });
      }

      let body;
      try {
        body = await request.json();
      } catch (e) {
        return new Response(JSON.stringify({ error: 'Invalid request body' }), {
          status: 400,
          headers: { 'content-type': 'application/json' }
        });
      }

      const fieldToSecret = {
        resendApiKey: 'BUILDER_RESEND_API_KEY',
        googleClientId: 'BUILDER_GOOGLE_CLIENT_ID',
        googleAnalyticsId: 'BUILDER_GOOGLE_ANALYTICS_ID',
        favicon: 'BUILDER_FAVICON'
      };

      const updated = [];
      for (const field of Object.keys(fieldToSecret)) {
        const value = body[field];
        if (typeof value !== 'string' || value.trim().length === 0) continue;

        const secretRes = await fetch(
          'https://api.cloudflare.com/client/v4/accounts/' + env.CLOUDFLARE_ACCOUNT_ID + '/workers/scripts/' + env.CLOUDFLARE_SCRIPT_NAME + '/secrets',
          {
            method: 'PUT',
            headers: {
              'Authorization': 'Bearer ' + env.CLOUDFLARE_API_TOKEN,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: fieldToSecret[field],
              text: value.trim(),
              type: 'secret_text'
            })
          }
        );

        if (!secretRes.ok) {
          return new Response(JSON.stringify({ error: 'Failed to update ' + field + ' on Cloudflare', updated }), {
            status: 502,
            headers: { 'content-type': 'application/json' }
          });
        }
        updated.push(field);
      }

      return new Response(JSON.stringify({ success: true, updated }), {
        status: 200,
        headers: { 'content-type': 'application/json' }
      });
    }

    if (url.pathname === '/builder' || url.pathname === '/builder/' || url.pathname === '/links' || url.pathname === '/links/') {
      return Response.redirect(url.origin + '/', 302);
    }

    if (url.pathname === '/' || url.pathname === '/index.html' || url.pathname === '/404.html' || url.pathname === '/admin' || url.pathname === '/admin/') {
      return new Response(htmlContent, {
        headers: {
          'content-type': 'text/html; charset=utf-8',
          'cache-control': 'public, max-age=0, must-revalidate'
        }
      });
    }

    if (url.pathname === '/config.json') {
      const publicConfig = { ...configData };
      delete publicConfig.resendApiKey;
      return new Response(JSON.stringify(publicConfig, null, 2), {
        headers: {
          'content-type': 'application/json',
          'cache-control': 'public, max-age=0, must-revalidate'
        }
      });
    }

    // Fonts and JS/CSS chunks are filename-addressed by content hash (or,
    // for /vendor/, fixed for the lifetime of this deploy) - a year-long
    // immutable cache is safe and is one of Lighthouse's standard "serve
    // static assets with an efficient cache policy" checks. Only the HTML
    // and config.json above (which can change without their URL changing)
    // stay revalidate-on-every-request.
    if (url.pathname.startsWith('/vendor/')) {
      if (vendorText[url.pathname] !== undefined) {
        return new Response(vendorText[url.pathname], {
          headers: {
            'content-type': 'text/css',
            'cache-control': 'public, max-age=31536000, immutable'
          }
        });
      }
      if (vendorBinary[url.pathname] !== undefined) {
        return new Response(b64ToBytes(vendorBinary[url.pathname]), {
          headers: {
            'content-type': 'font/woff2',
            'cache-control': 'public, max-age=31536000, immutable'
          }
        });
      }
      return new Response('Not found', { status: 404 });
    }

    if (url.pathname.endsWith('.css')) {
      const filename = url.pathname.split('/').pop();
      const content = filename ? cssFiles[filename] : undefined;
      if (content === undefined) return new Response('Not found', { status: 404 });
      return new Response(content, {
        headers: {
          'content-type': 'text/css',
          'cache-control': 'public, max-age=31536000, immutable'
        }
      });
    }

    if (url.pathname.endsWith('.js')) {
      const filename = url.pathname.split('/').pop();
      const content = filename ? jsFiles[filename] : undefined;
      if (content === undefined) return new Response('Not found', { status: 404 });
      return new Response(content, {
        headers: {
          'content-type': 'application/javascript',
          'cache-control': 'public, max-age=31536000, immutable'
        }
      });
    }

    if (url.pathname.startsWith('/assets/') && url.pathname.endsWith('.json')) {
      const filename = url.pathname.split('/').pop();
      const content = filename ? jsonFiles[filename] : undefined;
      if (content === undefined) return new Response('Not found', { status: 404 });
      return new Response(content, {
        headers: {
          'content-type': 'application/json',
          'cache-control': 'public, max-age=31536000, immutable'
        }
      });
    }

    if (url.pathname === '/api/send-email' && request.method === 'POST') {
      try {
        const body = await request.json();
        const { name, email, message, recipientEmail } = body;

        if (!name || !email || !message) {
          return new Response(JSON.stringify({ error: 'Missing fields' }), {
            status: 400,
            headers: { 'content-type': 'application/json' }
          });
        }

        const resendKey = env.BUILDER_RESEND_API_KEY;
        const targetEmail = recipientEmail || configData.contactEmail || '';

        if (resendKey) {
          const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + resendKey
            },
            body: JSON.stringify({
              from: 'LinkHubPage Contact <onboarding@resend.dev>',
              to: targetEmail,
              reply_to: email,
              subject: 'LinkHubPage Contact: ' + name,
              text: 'Name: ' + name + '\\nEmail: ' + email + '\\n\\nMessage:\\n' + message,
              html: getEmailHtml(name, email, message)
            })
          });

          if (resendResponse.ok) {
            return new Response(JSON.stringify({ success: true }), {
              status: 200,
              headers: { 'content-type': 'application/json' }
            });
          } else {
            const errText = await resendResponse.text();
            return new Response(JSON.stringify({ error: 'Email service failed', details: errText }), {
              status: 502,
              headers: { 'content-type': 'application/json' }
            });
          }
        }

        return new Response(JSON.stringify({ error: 'Email service not configured (Missing BUILDER_RESEND_API_KEY)' }), {
          status: 501,
          headers: { 'content-type': 'application/json' }
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: 'Internal Server Error', message: err.message }), {
          status: 500,
          headers: { 'content-type': 'application/json' }
        });
      }
    }

    return Response.redirect(url.origin + '/', 302);
  }
};`;g("Uploading script and routing to Cloudflare...");const Se=await fetch("/api/deploy/cloudflare",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${w()}`},body:JSON.stringify({accountId:I.trim(),apiToken:T.trim(),scriptName:k.trim(),scriptContent:fe,secrets:y,zoneId:N.trim(),routePattern:o})}),re=await Se.json();Se.ok?(v("success"),re.urls&&Array.isArray(re.urls)?g(`Successfully deployed to Cloudflare Workers! URLs: ${re.urls.join(" | ")}`):g(`Successfully deployed to Cloudflare Workers! URL: ${re.url}`),await S(G,{target:"cloudflare",domain:r})):(v("error"),g(re.error||"Cloudflare deployment failed."))}catch(y){console.error(y),v("error"),g(y instanceof Error?y.message:"Deployment process error.")}},je=()=>{if(l.current=!1,_.current=!1,!window.open("/cf-connect-popup.html","cf_connect","width=480,height=700")){P("error"),f("Popup blocked. Please allow popups for this site and try again.");return}i.current=!0},a=()=>{j("idle"),P("idle"),C(""),i.current=!1,l.current=!1,_.current=!1};return p.useEffect(()=>{const r=o=>{var n,c;o.origin===window.location.origin&&(((n=o.data)==null?void 0:n.type)!=="cf_token"||!((c=o.data)!=null&&c.token)||C(o.data.token))};return window.addEventListener("message",r),()=>window.removeEventListener("message",r)},[]),p.useEffect(()=>{F==="valid"&&!i.current&&je()},[F]),p.useEffect(()=>{T&&!l.current&&(l.current=!0,be())},[T]),{showCFDeployForm:Y,setShowCFDeployForm:J,cfDomain:A,setCFDomain:R,cfDomainStatus:F,cfDomainMsg:W,cfConnectStatus:L,handleCheckCloudflareDomain:te,handleCFDirectDeploy:ce,openCFConnectPopup:je,resetCloudflareConnection:a}}const vt=3e3,kt=40;async function jt(d,G,S){for(let w=0;w<kt;w++){await new Promise(v=>setTimeout(v,vt));try{const v=await fetch(`https://api.github.com/repos/${G}/${S}/pages/builds/latest`,{headers:d});if(v.ok){const g=await v.json();if(g.status==="built")return"built";if(g.status==="errored")return"errored"}}catch{}}return"timeout"}function Ct({username:d,user:G,profileConfig:S,persistBuilderDraft:w,setDeployStatus:v,setStatusMsg:g}){const[Y,J]=p.useState("subpath"),[A,R]=p.useState(()=>`linkhubpage-profile-${d||"page"}`),[F,j]=p.useState("idle"),[W,f]=p.useState(""),[L,P]=p.useState(""),[I,x]=p.useState(""),[T,C]=p.useState(null);return p.useEffect(()=>{R(`linkhubpage-profile-${d||"page"}`)},[d]),p.useEffect(()=>{j("idle"),f(""),P(""),x(""),C(null)},[Y,A,G==null?void 0:G.email]),{githubPagesMode:Y,setGithubPagesMode:J,githubRepoName:A,setGithubRepoName:R,githubConnectStatus:F,githubConnectMsg:W,githubResolvedOwner:L,githubResolvedRepo:I,githubRepoExists:T,handleCheckGitHubSetup:async()=>{const N=Ae("github_access_token");if(!N){j("error"),f("Please log in with GitHub first.");return}j("checking"),f("Checking GitHub account and repository readiness...");const h={Authorization:`Bearer ${N}`,Accept:"application/vnd.github+json"};try{const H=await fetch("https://api.github.com/user",{headers:h});if(!H.ok)throw new Error("Failed to read your GitHub profile. Please login again.");const i=(await H.json()).login,l=Y==="root"?`${i}.github.io`:A.trim()||`linkhubpage-profile-${d||"page"}`,_=await fetch(`https://api.github.com/repos/${i}/${l}`,{headers:h}),te=_.ok;if(!te&&_.status!==404){const be=await _.text();throw new Error(`Failed repository check: ${be.slice(0,140)}`)}P(i),x(l),C(te),j("connected"),f(te?`GitHub ready. Repository ${i}/${l} exists and will be updated.`:`GitHub ready. Repository ${i}/${l} does not exist and will be created during deploy.`)}catch(H){j("error"),f(H instanceof Error?H.message:"GitHub setup check failed.")}},handleDeployToGitHub:async()=>{const N=Ae("github_access_token");if(!N){v("error"),g("Please log in with GitHub to enable automatic GitHub Pages deployment.");return}if(F!=="connected"){v("error"),g('Please run "Check GitHub Setup" before deploying.');return}v("loading"),g("Preparing GitHub deployment target...");const h={Authorization:`Bearer ${N}`,Accept:"application/vnd.github+json","Content-Type":"application/json"};try{await w();const H=await fetch("https://api.github.com/user",{headers:h});if(!H.ok)throw new Error("Failed to read your GitHub profile. Please try logging in again.");const q=await H.json(),i=L||q.login,l=I||(Y==="root"?`${i}.github.io`:A.trim()||`linkhubpage-profile-${d||"page"}`);g("Creating GitHub repository...");const _=await fetch("https://api.github.com/user/repos",{method:"POST",headers:h,body:JSON.stringify({name:l,description:"My LinkHubPage Profile",auto_init:!0})});if(!_.ok&&_.status!==422)throw new Error("Failed to create repository on GitHub");const te=await fetch(`https://api.github.com/repos/${i}/${l}`,{headers:h});if(!te.ok)throw new Error("Failed to read repository details from GitHub.");const ce=(await te.json()).default_branch;g("Preparing and packaging page assets...");let a=await(await fetch("/")).text();a=a.replace("</head>",`<script>
        window.__BUILDER_DEPLOY_MODE__ = true;
        window.__BUILDER_DEPLOY_TARGET__ = 'github';
        const __lhpShowSuspended = (msg) => {
          const text = msg || 'This site is currently unavailable.';
          document.documentElement.innerHTML = '<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#06080d;color:#cbd5e1;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;"><div style="max-width:640px;padding:32px;text-align:center;"><h1 style="margin:0 0 12px 0;color:#22d3ee;font-size:28px;">Site Suspended</h1><p style="margin:0;color:#94a3b8;line-height:1.6;">' + text + '</p></div></body>';
        };
        const __lhpCheckSubscription = async (cfg) => {
          const email = (cfg && cfg.adminEmail) ? String(cfg.adminEmail).trim() : '';
          if (!email) return true;
          try {
            const res = await fetch('https://linkhubpage.com/api/subscription/status?email=' + encodeURIComponent(email), { cache: 'no-store' });
            if (!res.ok) return true;
            const sub = await res.json();
            if (sub && sub.active === false) {
              __lhpShowSuspended(sub.reason || 'Subscription expired');
              return false;
            }
          } catch (_) {
            return true;
          }
          return true;
        };
        const __lhpParts = window.location.pathname.split('/').filter(Boolean);
        if (__lhpParts[__lhpParts.length - 1] === 'admin') __lhpParts.pop();
        const __lhpPrefix = __lhpParts.length > 0 ? '/' + __lhpParts[0] + '/' : '/';
        fetch(__lhpPrefix + 'config.json')
          .then(res => res.json())
          .then(async data => {
            const allowed = await __lhpCheckSubscription(data);
            if (!allowed) return;
            window.__PROFILE_CONFIG__ = data;
            if (window.updateRuntimeConfig) window.updateRuntimeConfig(data);
          });
      <\/script></head>`),a=a.replaceAll('src="/assets/','src="./assets/'),a=a.replaceAll('href="/assets/','href="./assets/');const o=a.replaceAll('src="./assets/','src="../assets/').replaceAll('href="./assets/','href="../assets/'),n={...S};n.adminEmail=(G==null?void 0:G.email)||"",delete n.resendApiKey;const c=[{path:"index.html",content:btoa(unescape(encodeURIComponent(a)))},{path:"admin/index.html",content:btoa(unescape(encodeURIComponent(o)))},{path:"404.html",content:btoa(unescape(encodeURIComponent(a)))},{path:"config.json",content:btoa(unescape(encodeURIComponent(JSON.stringify(n,null,2))))}],y=[...Array.from(new Set([...a.matchAll(/(?:src|href)="((?:\.\/|\/)?assets\/[^"]+)"/g)].map(b=>b[1])))],K=new Set;for(let b=0;b<y.length;b++){const E=y[b],$=E.startsWith("./")?`/${E.slice(2)}`:E.startsWith("/")?E:`/${E}`,D=E.startsWith("./")?E.slice(2):E.startsWith("/")?E.slice(1):E;if(K.has(D))continue;const M=await fetch($);if(!M.ok)throw new Error(`Failed to fetch asset ${$} for GitHub deploy`);const le=await M.text();if(c.push({path:D,content:btoa(unescape(encodeURIComponent(le)))}),K.add(D),$.endsWith(".js")){const ve=[...le.matchAll(/from"\.\/([a-zA-Z0-9_.-]+\.js)"|import\("\.\/([a-zA-Z0-9_.-]+\.js)"\)/g)].map(X=>X[1]||X[2]);for(const X of ve){const ae=`assets/${X}`;!K.has(ae)&&!y.includes(ae)&&y.push(ae)}const Re=[...le.matchAll(/"\/assets\/([a-zA-Z0-9_.-]+\.json)"/g)].map(X=>X[1]);for(const X of Re){const ae=`assets/${X}`;!K.has(ae)&&!y.includes(ae)&&y.push(ae)}}}const de=["/favicon.ico","/icon-192.png","/icon-512.png","/manifest.json"];for(const b of de){const E=await fetch(b);if(!E.ok)continue;const $=new Uint8Array(await E.arrayBuffer());let D="";for(let M=0;M<$.length;M++)D+=String.fromCharCode($[M]);c.push({path:b.slice(1),content:btoa(D)})}const Z=[...a.matchAll(/href="(\/vendor\/[^"]+\.css)"/g)].map(b=>b[1]),Ce=[...new Set(Z)],ne=new Set;for(const b of Ce){if(ne.has(b))continue;const E=await fetch(b);if(!E.ok)continue;const $=await E.text();c.push({path:b.slice(1),content:btoa(unescape(encodeURIComponent($)))}),ne.add(b);const D=[...$.matchAll(/url\(([^)]+)\)/g)].map(M=>M[1].replace(/['"]/g,""));for(const M of D){const le=new URL(M,`https://x${b}`).pathname;if(ne.has(le))continue;const ve=await fetch(le);if(!ve.ok)continue;const Re=new Uint8Array(await ve.arrayBuffer());let X="";for(let ae=0;ae<Re.length;ae++)X+=String.fromCharCode(Re[ae]);c.push({path:le.slice(1),content:btoa(X)}),ne.add(le)}}g("Uploading assets to GitHub...");const ue=await fetch(`https://api.github.com/repos/${i}/${l}/git/refs/heads/${ce}`,{headers:h});if(!ue.ok)throw new Error("Failed to read the main branch from GitHub.");const se=(await ue.json()).object.sha,ie=await fetch(`https://api.github.com/repos/${i}/${l}/git/commits/${se}`,{headers:h});if(!ie.ok)throw new Error("Failed to read the base commit from GitHub.");const he=(await ie.json()).tree.sha,ye=new Set(c.map(b=>b.path).filter(b=>b.startsWith("assets/"))),Ne=await fetch(`https://api.github.com/repos/${i}/${l}/git/trees/${he}?recursive=1`,{headers:h}),_e=[];if(Ne.ok){const E=(await Ne.json()).tree||[];for(const $ of E)$.type==="blob"&&$.path.startsWith("assets/")&&!ye.has($.path)&&_e.push({path:$.path,mode:"100644",type:"blob",sha:null})}const we=await Promise.all(c.map(async b=>{const E=await fetch(`https://api.github.com/repos/${i}/${l}/git/blobs`,{method:"POST",headers:h,body:JSON.stringify({content:b.content,encoding:"base64"})});if(!E.ok){const D=await E.text();throw new Error(`Failed to upload ${b.path} to GitHub (${E.status}): ${D.slice(0,180)}`)}const $=await E.json();return{path:b.path,sha:$.sha}})),fe=await fetch(`https://api.github.com/repos/${i}/${l}/git/trees`,{method:"POST",headers:h,body:JSON.stringify({base_tree:he,tree:[...we.map(b=>({path:b.path,mode:"100644",type:"blob",sha:b.sha})),..._e]})});if(!fe.ok)throw new Error("Failed to create the file tree on GitHub.");const Se=await fe.json(),re=await fetch(`https://api.github.com/repos/${i}/${l}/git/commits`,{method:"POST",headers:h,body:JSON.stringify({message:"Deploy profile via LinkHubPage Builder",tree:Se.sha,parents:[se]})});if(!re.ok)throw new Error("Failed to create the deploy commit on GitHub.");const O=await re.json();if(!(await fetch(`https://api.github.com/repos/${i}/${l}/git/refs/heads/${ce}`,{method:"PATCH",headers:h,body:JSON.stringify({sha:O.sha})})).ok)throw new Error("Failed to update the main branch on GitHub.");g("Saving integration values into GitHub Secrets...");try{await Le(h,i,l,"BUILDER_GOOGLE_CLIENT_ID",S.googleClientId||""),await Le(h,i,l,"BUILDER_GOOGLE_ANALYTICS_ID",S.googleAnalyticsId||""),await Le(h,i,l,"BUILDER_RESEND_API_KEY",S.resendApiKey||""),await Le(h,i,l,"BUILDER_CALENDLY_URL",S.calendlyUrl||"")}catch(b){console.warn("Failed to sync one or more GitHub secrets:",b)}g("Activating GitHub Pages...");const Q=await fetch(`https://api.github.com/repos/${i}/${l}/pages`,{method:"POST",headers:h,body:JSON.stringify({source:{branch:ce,path:"/"}})});if(Q.ok||Q.status===409){const b=Y==="root"?`https://${i}.github.io/`:`https://${i}.github.io/${l}/`;g("Waiting for GitHub Pages to finish building...");const E=await jt(h,i,l);if(E==="errored")throw new Error(`GitHub Pages build failed. Check the build logs at https://github.com/${i}/${l}/deployments, then try deploying again.`);v("success"),g(E==="timeout"?`Files pushed and GitHub Pages is enabled, but the build is taking longer than usual. It should be live shortly at: ${b}`:`Successfully deployed to GitHub Pages! URL: ${b}`),await fetch("/api/profile/github-deploy",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${N}`},body:JSON.stringify({repoName:l,url:b})}).catch($=>console.warn("Failed to record GitHub Pages deployment:",$)),await w(S,{target:"github",githubRepoName:l,githubPagesMode:Y})}else throw new Error("Could not enable GitHub Pages automatically")}catch(H){v("error"),g(H instanceof Error?H.message:"GitHub deployment failed")}}}}function Nt({profileConfig:d,handleConfigChange:G,user:S,username:w,isReserved:v,getAuthToken:g}){const[Y,J]=p.useState("idle"),[A,R]=p.useState(""),[F,j]=p.useState("idle"),[W,f]=p.useState(""),[L,P]=p.useState("idle"),[I,x]=p.useState(""),[T,C]=p.useState("idle"),[k,s]=p.useState("");return p.useEffect(()=>{C("idle"),s("")},[w,v,S==null?void 0:S.email]),{googleCheckStatus:Y,setGoogleCheckStatus:J,googleCheckMsg:A,setGoogleCheckMsg:R,resendCheckStatus:F,setResendCheckStatus:j,resendCheckMsg:W,setResendCheckMsg:f,calendlyCheckStatus:L,setCalendlyCheckStatus:P,calendlyCheckMsg:I,setCalendlyCheckMsg:x,internalCheckStatus:T,internalCheckMsg:k,handleCheckGoogleClientId:async()=>{const i=(d.googleClientId||"").trim();if(!i){J("invalid"),R("Please enter a Google Client ID first.");return}J("checking"),R("Validating Google Client ID format...");try{const l=await fetch("/api/integrations/google-check",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({clientId:i})}),_=await l.json();if(!l.ok||!_.valid){J("invalid"),R(_.error||"Invalid Google Client ID format.");return}J("valid"),R("Google Client ID looks valid.")}catch(l){J("invalid"),R(l instanceof Error?l.message:"Google Client ID validation failed.")}},handleCheckResendKey:async()=>{const i=(d.resendApiKey||"").trim();if(!i){j("invalid"),f("Please enter a Resend API key first.");return}j("checking"),f("Verifying Resend API key...");try{const l=await fetch("/api/integrations/resend-check",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:i})}),_=await l.json();if(!l.ok||!_.valid){j("invalid"),f(_.error||"Resend API key is invalid.");return}j("valid"),f(_.message||"Resend API key is valid.")}catch(l){j("invalid"),f(l instanceof Error?l.message:"Resend validation failed.")}},handleCheckCalendlyUrl:async()=>{const i=(d.calendlyUrl||"").trim();if(!i){P("invalid"),x("Please enter a Calendly URL first.");return}P("checking"),x("Validating Calendly URL...");try{const l=await fetch("/api/integrations/calendly-check",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({calendlyUrl:i})}),_=await l.json();if(!l.ok||!_.valid){P("invalid"),x(_.error||"Calendly URL is invalid.");return}P("valid"),x(_.message||"Calendly URL looks valid."),_.normalizedUrl&&_.normalizedUrl!==i&&G("calendlyUrl",_.normalizedUrl)}catch(l){P("invalid"),x(l instanceof Error?l.message:"Calendly URL validation failed.")}},handleCheckInternalSetup:async()=>{if(!S){C("error"),s("Please login first.");return}const i=(w||"").trim().toLowerCase();if(!i){C("error"),s("Please reserve a username first.");return}if(!/^[a-z0-9_-]{3,30}$/.test(i)){C("error"),s("Username must be 3-30 chars and contain only a-z, 0-9, _ or -.");return}if(!v){C("error"),s("Username is not reserved yet. Click Reserve first.");return}C("checking"),s("Checking internal hosting readiness...");try{const l=g();if(!l){C("error"),s("Missing auth token. Please sign out and sign in again.");return}if(!(await fetch("/api/profile/draft",{headers:{Authorization:`Bearer ${l}`}})).ok){C("error"),s("Could not verify draft access. Please re-login and retry.");return}C("ready"),s(`Ready to publish at ${window.location.origin}/p/${i}`)}catch(l){C("error"),s(l instanceof Error?l.message:"Internal setup check failed.")}}}}function _t({user:d,login:G,getAuthToken:S,setStatusMsg:w}){const[v,g]=p.useState(""),[Y,J]=p.useState(!1),[A,R]=p.useState(()=>typeof window<"u"&&window.__PROFILE_CONFIG__?window.__PROFILE_CONFIG__:{...$e}),[F,j]=p.useState("idle"),[W,f]=p.useState(null),L=async(a,r)=>{if(!d)return;const o=S();if(!o)return;const n={...a||A};n.adminEmail=d.email;try{await fetch("/api/profile/draft",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${o}`},body:JSON.stringify({config:n,...r?{lastDeploy:r}:{}})})}catch(c){console.warn("Failed to persist builder draft:",c)}};p.useEffect(()=>{const{googleClientId:a,googleAnalyticsId:r,adminEmail:o,...n}=A;Object.assign(Ee,n)},[A]);const P=a=>{R(r=>{const o=r.layout||["profile","links","actions","techstack","github","portfolio"];let n;if(o.includes(a)){if(a==="profile")return r;n=o.filter(c=>c!==a)}else n=[...o,a];return{...r,layout:n}})},I=(a,r)=>{R(o=>{const n=[...o.layout||["profile","links","actions","techstack","github","portfolio"]],c=r==="up"?a-1:a+1;if(c<0||c>=n.length)return o;const B=n[a];return n[a]=n[c],n[c]=B,{...o,layout:n}})},x=(a,r)=>{f(r),a.dataTransfer.effectAllowed="move"},T=a=>{a.preventDefault()},C=(a,r)=>{a.preventDefault(),!(W===null||W===r)&&(R(o=>{const n=[...o.layout||["profile","links","actions","techstack","github","portfolio"]],c=n[W];return n.splice(W,1),n.splice(r,0,c),{...o,layout:n}}),f(null))},k=a=>{Xe("github_access_token",a.token),R(o=>({...o,githubUsername:a.username||o.githubUsername}));const r=S();r&&fetch("/api/integrations/github-link",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({githubUsername:a.username||"",githubEmail:a.email||""})}).catch(o=>console.warn("Failed to record GitHub account link:",o)),window.dispatchEvent(new Event("linkhubpage:github-connected"))};p.useEffect(()=>{const a=new URLSearchParams(window.location.hash.slice(1)),r=a.get("provider"),o=a.get("token"),n=a.get("email");a.get("name"),a.get("picture");const c=a.get("username");a.get("mode"),r==="github"&&o&&n&&(k({token:o,email:n,username:c||void 0}),window.history.replaceState({},document.title,window.location.pathname))},[G]),p.useEffect(()=>{const a=r=>{var o,n;r.origin===window.location.origin&&(((o=r.data)==null?void 0:o.type)!=="github_oauth_success"||!((n=r.data)!=null&&n.token)||k({token:r.data.token,email:r.data.email,name:r.data.name,picture:r.data.picture,username:r.data.username,mode:r.data.mode}))};return window.addEventListener("message",a),()=>window.removeEventListener("message",a)},[]),p.useEffect(()=>{const a=o=>{if(o)try{const{payload:n,ts:c}=JSON.parse(o);if(!(n!=null&&n.token)||Date.now()-c>12e4)return;k({token:n.token,email:n.email,name:n.name,picture:n.picture,username:n.username,mode:n.mode})}catch(n){console.warn("Failed to parse stored GitHub OAuth result:",n)}finally{Qe("github_oauth_result")}};a(Ae("github_oauth_result"));const r=o=>{o.key==="github_oauth_result"&&o.newValue&&a(o.newValue)};return window.addEventListener("storage",r),()=>window.removeEventListener("storage",r)},[]);const s=(a,r)=>{R(o=>({...o,[a]:r}))};return{username:v,setUsername:g,isReserved:Y,setIsReserved:J,profileConfig:A,setProfileConfig:R,persistBuilderDraft:L,reserveStatus:F,draggedIndex:W,handleConfigChange:s,handleProfileImageFile:a=>{if(!a.type.startsWith("image/")){alert("Please choose an image file.");return}const r=URL.createObjectURL(a),o=new Image;o.onload=()=>{const c=Math.min(1,480/Math.max(o.width,o.height)),B=document.createElement("canvas");B.width=Math.round(o.width*c),B.height=Math.round(o.height*c);const y=B.getContext("2d");y&&(y.drawImage(o,0,0,B.width,B.height),s("profileImage",B.toDataURL("image/jpeg",.85))),URL.revokeObjectURL(r)},o.onerror=()=>{URL.revokeObjectURL(r),alert("Could not read that image.")},o.src=r},handleNestedConfigChange:(a,r,o)=>{R(n=>{const c=n[a]||{};return{...n,[a]:{...c,[r]:o}}})},handleLinkChange:(a,r,o)=>{R(n=>{const c=[...n.links];return c[a]={...c[a],[r]:o},{...n,links:c}})},getLinkPlatform:a=>{var r,o,n,c,B,y;return(r=a.icon)!=null&&r.includes("instagram")?"instagram":(o=a.icon)!=null&&o.includes("linkedin")?"linkedin":(n=a.icon)!=null&&n.includes("github")?"github":(c=a.icon)!=null&&c.includes("address-card")||a.action==="vcard"?"vcard":(B=a.icon)!=null&&B.includes("calendar")||a.action==="calendly"?"calendly":(y=a.icon)!=null&&y.includes("envelope")||a.action==="contact"?"email":"website"},handleLinkPlatformChange:(a,r)=>{R(o=>{const n=[...o.links],c=n[a];switch(r){case"instagram":n[a]={...c,icon:"fab fa-instagram",cssClass:"instagram",langKey:"instagram",tooltipKey:"tooltip-instagram",action:void 0,external:!0};break;case"linkedin":n[a]={...c,icon:"fab fa-linkedin",cssClass:"linkedin",langKey:"linkedin",tooltipKey:"tooltip-linkedin",action:void 0,external:!0};break;case"github":n[a]={...c,icon:"fab fa-github",cssClass:"github",langKey:"github",tooltipKey:"tooltip-github",action:void 0,external:!0};break;case"website":n[a]={...c,icon:"fa-solid fa-link",cssClass:"custom-link",langKey:"website",tooltipKey:"tooltip-website",action:void 0,external:!0};break;case"calendly":n[a]={...c,icon:"fa-solid fa-calendar",cssClass:"calendly",langKey:"book-meeting",tooltipKey:"tooltip-calendly",action:"calendly",external:!1};break;case"vcard":n[a]={...c,icon:"fa-solid fa-address-card",cssClass:"vcard",langKey:"save-contact",tooltipKey:"tooltip-vcard",action:"vcard",external:!1};break;case"email":n[a]={...c,icon:"fa-solid fa-envelope",cssClass:"email",langKey:"contact",tooltipKey:"tooltip-contact",action:"contact",external:!1};break}return{...o,links:n}})},addLink:()=>{R(a=>({...a,links:[...a.links,{url:"https://",icon:"fa-solid fa-link",cssClass:"custom-link",langKey:"website",tooltipKey:"tooltip-website",external:!0}]}))},deleteLink:a=>{R(r=>({...r,links:r.links.filter((o,n)=>n!==a)}))},toggleBlockVisibility:P,moveBlock:I,handleDragStart:x,handleDragOver:T,handleDrop:C,triggerGoogleLogin:()=>{var a,r,o;if(!((a=Ee.googleClientId)!=null&&a.trim())){alert("Google login is temporarily unavailable (missing client ID). Please reload the page and try again.");return}typeof window<"u"&&((o=(r=window.google)==null?void 0:r.accounts)!=null&&o.oauth2)&&window.google.accounts.oauth2.initTokenClient({client_id:Ee.googleClientId,scope:"openid profile email",callback:async c=>{if(c!=null&&c.access_token){Qe("github_access_token"),Xe("google_access_token",c.access_token);const B=await fetch("https://www.googleapis.com/oauth2/v3/userinfo",{headers:{Authorization:`Bearer ${c.access_token}`}});if(B.ok){const y=await B.json();if(G({name:y.name,email:y.email,picture:y.picture}),R(K=>({...K,name:y.name?{el:y.name,en:y.name}:K.name,profileImage:y.picture||K.profileImage,contactEmail:y.email||K.contactEmail})),y.email){const K=y.email.split("@")[0].toLowerCase().replace(/[^a-z0-9_-]/g,"");g(K)}}}}}).requestAccessToken()},triggerYoutubeConnect:()=>{var a,r,o;if(!((a=Ee.googleClientId)!=null&&a.trim())){alert("Google login is temporarily unavailable (missing client ID). Please reload the page and try again.");return}typeof window<"u"&&((o=(r=window.google)==null?void 0:r.accounts)!=null&&o.oauth2)&&window.google.accounts.oauth2.initTokenClient({client_id:Ee.googleClientId,scope:"https://www.googleapis.com/auth/youtube.readonly",callback:async c=>{var B,y;if(c!=null&&c.access_token)try{const K=await fetch("https://www.googleapis.com/youtube/v3/channels?part=id&mine=true",{headers:{Authorization:`Bearer ${c.access_token}`}});if(!K.ok){alert("Failed to connect YouTube. Please try again.");return}const Z=(y=(B=(await K.json()).items)==null?void 0:B[0])==null?void 0:y.id;Z?s("youtubeChannelId",Z):alert("No YouTube channel found for this Google account.")}catch{alert("Failed to connect YouTube. Please try again.")}}}).requestAccessToken()},triggerGitHubLogin:a=>{const r=`/api/auth/github?redirect_uri=${encodeURIComponent(window.location.href)}${a?`&mode=${a}`:""}`;window.open(r,"github_connect","width=600,height=700")||(window.location.href=r)},handleReserveUsername:async a=>{if(a.preventDefault(),!!d){j("loading"),w("");try{const r=await fetch("/api/profile/reserve",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${S()}`},body:JSON.stringify({username:v})}),o=await r.json();r.ok?(j("success"),J(!0),w(`Username @${o.username} reserved successfully!`)):(j("error"),w(o.error||"Failed to reserve username"))}catch(r){j("error"),w(r instanceof Error?r.message:"Error occurred")}}}}}const oe=[{id:"info",label:"Info",icon:"fa-solid fa-id-card"},{id:"social",label:"Social",icon:"fa-solid fa-share-nodes"},{id:"layout",label:"Layout",icon:"fa-solid fa-table-cells-large"},{id:"style",label:"Style",icon:"fa-solid fa-palette"},{id:"deploy",label:"Deploy",icon:"fa-solid fa-rocket"},{id:"integrations",label:"Integrations",icon:"fa-solid fa-plug"},{id:"publish",label:"Publish",icon:"fa-solid fa-circle-check"}],tt=[{id:"internal",label:"Internal Hosting",icon:"fa-solid fa-server"},{id:"zip",label:"Download ZIP",icon:"fa-solid fa-box"},{id:"github",label:"GitHub Pages",icon:"fa-brands fa-github"},{id:"cloudflare",label:"Cloudflare Workers",icon:"fa-brands fa-cloudflare"}],Te=[{id:"profile",name:"Profile Card Header",icon:"fa-solid fa-user-tie"},{id:"links",name:"Social Links Grid",icon:"fa-solid fa-link"},{id:"actions",name:"Action Buttons (QR/Contact)",icon:"fa-solid fa-cube"},{id:"techstack",name:"Tech Languages / Skills",icon:"fa-solid fa-code"},{id:"github",name:"GitHub Stats Cards",icon:"fa-brands fa-github"},{id:"portfolio",name:"Portfolio Projects Grid",icon:"fa-solid fa-folder-open"},{id:"youtube",name:"YouTube Stats Card",icon:"fa-brands fa-youtube"},{id:"youtube-videos",name:"YouTube Videos Grid",icon:"fa-brands fa-youtube"}],At=()=>{var Be,Je,Ke,Me,Ye,We,qe,Ze,Ve;const{user:d,login:G,logout:S}=ut();p.useEffect(()=>{pt("https://accounts.google.com/gsi/client")},[]);const w=()=>Ae("google_access_token")||"",[v,g]=p.useState("info"),[Y,J]=p.useState("idle"),[A,R]=p.useState("idle"),[F,j]=p.useState(""),[W,f]=p.useState(""),[L,P]=p.useState("internal"),I=p.useRef(null),{username:x,setUsername:T,isReserved:C,setIsReserved:k,profileConfig:s,setProfileConfig:N,persistBuilderDraft:h,reserveStatus:H,draggedIndex:q,handleConfigChange:i,handleProfileImageFile:l,handleNestedConfigChange:_,handleLinkChange:te,getLinkPlatform:be,handleLinkPlatformChange:ce,addLink:je,deleteLink:a,toggleBlockVisibility:r,moveBlock:o,handleDragStart:n,handleDragOver:c,handleDrop:B,triggerGoogleLogin:y,triggerYoutubeConnect:K,triggerGitHubLogin:de,handleReserveUsername:Z}=_t({user:d,login:G,getAuthToken:w,setStatusMsg:j}),{showCFDeployForm:Ce,setShowCFDeployForm:ne,cfDomain:ue,setCFDomain:xe,cfDomainStatus:se,cfDomainMsg:ie,cfConnectStatus:pe,handleCheckCloudflareDomain:he,handleCFDirectDeploy:ye,openCFConnectPopup:Ne,resetCloudflareConnection:_e}=wt({username:x,profileConfig:s,persistBuilderDraft:h,getAuthToken:w,setDeployStatus:R,setStatusMsg:j}),{githubPagesMode:we,setGithubPagesMode:fe,githubRepoName:Se,setGithubRepoName:re,githubConnectStatus:O,githubConnectMsg:V,githubResolvedOwner:Q,githubResolvedRepo:b,githubRepoExists:E,handleCheckGitHubSetup:$,handleDeployToGitHub:D}=Ct({username:x,user:d,profileConfig:s,persistBuilderDraft:h,setDeployStatus:R,setStatusMsg:j});p.useEffect(()=>{document.title="LinkHubPage Builder"},[]),p.useEffect(()=>{(async()=>{if(!d){typeof window<"u"&&!window.__PROFILE_CONFIG__&&N({...$e}),T(""),k(!1);return}const m=u=>{u&&(P(u.target),u.target==="cloudflare"&&u.domain&&(xe(u.domain),ne(!0)),u.target==="github"&&(u.githubRepoName&&re(u.githubRepoName),u.githubPagesMode&&fe(u.githubPagesMode)))};if(d.username){const u=d.username.toLowerCase();T(u),k(!0);const U=w();try{if(U){const ee=await fetch("/api/profile/me",{headers:{Authorization:`Bearer ${U}`}});if(ee.ok){const me=await ee.json();N(me),m(me==null?void 0:me.lastDeploy);try{const ge=await fetch("/api/profile/draft",{headers:{Authorization:`Bearer ${U}`}});if(ge.ok){const Pe=await ge.json();m(Pe==null?void 0:Pe.lastDeploy)}}catch(ge){console.warn("Failed to load last deploy info:",ge)}return}}const z=await fetch(`/api/profile/${u}`);if(z.ok){const ee=await z.json();N(ee),m(ee==null?void 0:ee.lastDeploy);return}}catch(z){console.error("Failed to load profile for username:",u,z)}}try{const u=w();if(u){const U=await fetch("/api/profile/draft",{headers:{Authorization:`Bearer ${u}`}});if(U.ok){const z=await U.json();if(z!=null&&z.config){N(z.config),z.config.adminEmail&&k(!!d.username),m(z==null?void 0:z.lastDeploy);return}}}}catch(u){console.warn("Failed to load builder draft:",u)}N(u=>u.adminEmail===""?{...$e,adminEmail:d.email,name:d.name?{el:d.name,en:d.name}:{el:"",en:""},profileImage:d.picture||"",contactEmail:d.email,githubUsername:d.username||""}:u)})()},[d]);const{googleCheckStatus:M,setGoogleCheckStatus:le,googleCheckMsg:ve,setGoogleCheckMsg:Re,resendCheckStatus:X,setResendCheckStatus:ae,resendCheckMsg:Ue,setResendCheckMsg:nt,calendlyCheckStatus:Ie,setCalendlyCheckStatus:ot,calendlyCheckMsg:Fe,setCalendlyCheckMsg:st,internalCheckStatus:ke,internalCheckMsg:He,handleCheckGoogleClientId:rt,handleCheckResendKey:it,handleCheckCalendlyUrl:lt,handleCheckInternalSetup:ct}=Nt({profileConfig:s,handleConfigChange:i,user:d,username:x,isReserved:C,getAuthToken:w}),dt=async()=>{if(!(!d||!C)){if(ke!=="ready"){J("error"),j('Please run "Check Internal Setup" before publishing.');return}J("loading"),j("");try{const t={...s};t.adminEmail=d.email,await h(t);const m=await fetch("/api/profile/save",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${w()}`},body:JSON.stringify({username:x,config:t})});if(m.ok)J("success"),j(`Profile live at: ${window.location.origin}/p/${x}`),await h(t,{target:"internal"});else{const u=await m.json();J("error"),j(u.error||"Failed to save profile")}}catch(t){J("error"),j(t instanceof Error?t.message:"Error saving profile")}}},ze=L==="internal"?ke==="ready":L==="zip"?!0:L==="github"?O==="connected":L==="cloudflare"?pe==="connected":!1;return e.jsxs("div",{className:"min-h-screen bg-bg-primary text-text-primary flex flex-col md:flex-row",children:[e.jsxs("div",{className:"w-full md:w-1/2 p-6 border-r border-border-primary flex flex-col md:h-screen overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between mb-8 pb-4 border-b border-border-primary",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold tracking-tight text-accent",style:{fontFamily:"var(--font-display)"},children:"LinkHubPage Builder"}),e.jsx("p",{className:"text-xs text-text-secondary",style:{fontFamily:"var(--font-mono)"},children:"linkhubpage.com/builder"})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("button",{type:"button",onClick:()=>{window.location.href="/"},className:"px-3 py-1.5 rounded-lg text-xs font-bold border border-border-primary bg-bg-secondary hover:border-accent hover:text-accent transition cursor-pointer",children:"Back"}),d?e.jsxs("div",{className:"text-right",children:[e.jsxs("span",{className:"text-[10px] block font-bold text-text-secondary",children:["Logged in as ",d.name]}),e.jsx("button",{onClick:S,className:"text-[10px] text-red-400 font-bold hover:underline cursor-pointer",children:"Sign Out"})]}):e.jsx("div",{className:"flex gap-2",children:e.jsx("button",{onClick:y,className:"px-3 py-1.5 bg-accent/15 border border-accent/20 rounded-lg text-xs font-bold hover:bg-accent/30 cursor-pointer",children:"Google"})})]})]}),e.jsx("div",{className:"flex items-center gap-1 mb-6 overflow-x-auto scrollbar-none pb-1",children:oe.map((t,m)=>{const u=oe.findIndex(ge=>ge.id===v),U=oe.findIndex(ge=>ge.id==="deploy"),z=m>u&&m>U&&!ze,ee=v===t.id,me=m<u;return e.jsxs(ht.Fragment,{children:[e.jsxs("button",{type:"button",onClick:()=>{z||g(t.id)},disabled:z,"aria-current":ee?"true":void 0,title:t.label,className:`flex flex-shrink-0 flex-col items-center gap-1 px-1.5 py-1 rounded-lg text-[10px] font-bold transition cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 ${ee?"text-accent":me?"text-text-primary":"text-text-secondary"}`,children:[e.jsx("span",{className:`flex h-6 w-6 items-center justify-center rounded-full border text-[10px] ${ee?"border-accent bg-accent/10 text-accent":me?"border-emerald-400/50 bg-emerald-400/10 text-emerald-300":"border-border-primary text-text-secondary"}`,children:me?e.jsx("i",{className:"fa-solid fa-check text-[9px]","aria-hidden":"true"}):m+1}),e.jsx("span",{className:"hidden sm:block",children:t.label})]}),m<oe.length-1&&e.jsx("div",{className:`h-px flex-1 min-w-[8px] ${m<u?"bg-emerald-400/50":"bg-border-primary"}`})]},t.id)})}),e.jsxs("div",{className:"flex-1 overflow-y-auto pr-1.5 space-y-6",children:[v==="info"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Display Name (Greek)"}),e.jsx("input",{type:"text",value:((Be=s.name)==null?void 0:Be.el)||"",onChange:t=>_("name","el",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Display Name (English)"}),e.jsx("input",{type:"text",value:((Je=s.name)==null?void 0:Je.en)||"",onChange:t=>_("name","en",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Bio (Greek)"}),e.jsx("input",{type:"text",value:((Ke=s.bio)==null?void 0:Ke.el)||"",onChange:t=>_("bio","el",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Bio (English)"}),e.jsx("input",{type:"text",value:((Me=s.bio)==null?void 0:Me.en)||"",onChange:t=>_("bio","en",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Location (Greek)"}),e.jsx("input",{type:"text",value:s.location.el,onChange:t=>_("location","el",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Location (English)"}),e.jsx("input",{type:"text",value:s.location.en,onChange:t=>_("location","en",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Skills Section Title (Greek)"}),e.jsx("input",{type:"text",value:((Ye=s.skillsTitle)==null?void 0:Ye.el)||"",onChange:t=>_("skillsTitle","el",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Skills Section Title (English)"}),e.jsx("input",{type:"text",value:((We=s.skillsTitle)==null?void 0:We.en)||"",onChange:t=>_("skillsTitle","en",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Portfolio Section Title (Greek)"}),e.jsx("input",{type:"text",value:((qe=s.portfolioTitle)==null?void 0:qe.el)||"",onChange:t=>_("portfolioTitle","el",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Portfolio Section Title (English)"}),e.jsx("input",{type:"text",value:((Ze=s.portfolioTitle)==null?void 0:Ze.en)||"",onChange:t=>_("portfolioTitle","en",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Profile Image"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"url",placeholder:"https://... or upload a file",value:s.profileImage,onChange:t=>i("profileImage",t.target.value),className:"flex-1 h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"}),e.jsx("button",{type:"button",onClick:()=>{var t;return(t=I.current)==null?void 0:t.click()},className:"shrink-0 h-11 px-4 bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold cursor-pointer",children:"Upload"}),e.jsx("input",{ref:I,type:"file",accept:"image/*",className:"hidden",onChange:t=>{var u;const m=(u=t.target.files)==null?void 0:u[0];m&&l(m),t.target.value=""}})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-6 pt-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",id:"showStatusBadge",checked:s.showStatusBadge,onChange:t=>i("showStatusBadge",t.target.checked),className:"w-4 h-4 rounded border-border-primary accent-accent cursor-pointer"}),e.jsx("label",{htmlFor:"showStatusBadge",className:"text-xs font-bold text-text-secondary cursor-pointer",children:"Show Status Beacon"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",id:"isAvailable",checked:s.isAvailable,onChange:t=>i("isAvailable",t.target.checked),className:"w-4 h-4 rounded border-border-primary accent-accent cursor-pointer"}),e.jsx("label",{htmlFor:"isAvailable",className:"text-xs font-bold text-text-secondary cursor-pointer",children:"Is Available (Green Beacon)"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",id:"showGreeting",checked:s.showGreeting!==!1,onChange:t=>i("showGreeting",t.target.checked),className:"w-4 h-4 rounded border-border-primary accent-accent cursor-pointer"}),e.jsx("label",{htmlFor:"showGreeting",className:"text-xs font-bold text-text-secondary cursor-pointer",children:'Show Greeting Text (e.g. "Good morning", "Καλημέρα")'})]})]}),e.jsxs("div",{className:"space-y-1.5 pt-2",children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase",children:"Available From / Since Date"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"text",placeholder:"e.g. 06/07/2026 or July 2026",value:s.availableFromDate||"",onChange:t=>i("availableFromDate",t.target.value),className:"flex-1 h-10 px-3 bg-bg-secondary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition"}),e.jsx("button",{type:"button",onClick:()=>{const t=new Date,m=String(t.getDate()).padStart(2,"0"),u=String(t.getMonth()+1).padStart(2,"0"),U=t.getFullYear();i("availableFromDate",`${m}/${u}/${U}`)},className:"px-3 bg-bg-secondary border border-border-primary hover:bg-bg-primary hover:border-accent rounded-lg text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1 text-text-secondary hover:text-text-primary",children:"📅 Today"})]}),e.jsx("p",{className:"text-[9px] text-text-secondary",children:"Specify the date from which your status is applicable. Click the button to automatically set today's date."})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase",children:"Include Dates (Always Available)"}),e.jsx("textarea",{value:s.statusIncludeDates||"",onChange:t=>i("statusIncludeDates",t.target.value),placeholder:"e.g. 10/07/2026 - 15/07/2026, 25/08/2026",className:"w-full min-h-[60px] p-3 bg-bg-secondary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition resize-y"}),e.jsx("p",{className:"text-[9px] text-text-secondary",children:"Specific dates or ranges (comma/line separated) when you are always available."})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase",children:"Exclude Dates (Always Unavailable)"}),e.jsx("textarea",{value:s.statusExcludeDates||"",onChange:t=>i("statusExcludeDates",t.target.value),placeholder:"e.g. 01/08/2026 - 07/08/2026",className:"w-full min-h-[60px] p-3 bg-bg-secondary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition resize-y"}),e.jsx("p",{className:"text-[9px] text-text-secondary",children:"Specific dates or ranges (comma/line separated) when you are unavailable (e.g. vacations)."})]})]}),v==="social"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center pb-2 border-b border-border-primary",children:[e.jsx("h3",{className:"text-sm font-bold",children:"Manage Link Items"}),e.jsx("button",{onClick:je,className:"px-2 py-1 bg-accent rounded text-[10px] font-bold cursor-pointer",children:"+ Add"})]}),e.jsx("div",{className:"space-y-3",children:s.links.map((t,m)=>{var u,U;return e.jsxs("div",{className:"bg-bg-secondary border border-border-primary p-3 rounded-xl flex flex-col gap-2 relative",children:[e.jsx("button",{onClick:()=>a(m),className:"absolute top-2 right-2 text-[10px] text-red-400 font-bold hover:underline cursor-pointer",children:"Delete"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 pr-12",children:[e.jsx("input",{type:"text",placeholder:"Link URL",value:t.url,onChange:z=>te(m,"url",z.target.value),className:"bg-bg-primary border border-border-primary rounded px-2 py-1 text-xs focus:outline-none"}),e.jsxs("select",{value:be(t),onChange:z=>ce(m,z.target.value),className:"bg-bg-primary border border-border-primary rounded px-2 py-1 text-xs focus:outline-none",children:[e.jsx("option",{value:"instagram",children:"Instagram"}),e.jsx("option",{value:"linkedin",children:"LinkedIn"}),e.jsx("option",{value:"github",children:"GitHub"}),e.jsx("option",{value:"website",children:"Custom Link / Website"}),e.jsx("option",{value:"calendly",children:"Book Meeting (Calendly)"}),e.jsx("option",{value:"vcard",children:"Save Contact Card (vCard)"}),e.jsx("option",{value:"email",children:"Contact Form / Email"})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 pr-12",children:[e.jsx("input",{type:"text",placeholder:"Link Title (Greek) - optional",value:((u=t.title)==null?void 0:u.el)||"",onChange:z=>{const ee={...t.title||{el:"",en:""},el:z.target.value};te(m,"title",ee)},className:"bg-bg-primary border border-border-primary rounded px-2 py-1 text-xs focus:outline-none"}),e.jsx("input",{type:"text",placeholder:"Link Title (English) - optional",value:((U=t.title)==null?void 0:U.en)||"",onChange:z=>{const ee={...t.title||{el:"",en:""},en:z.target.value};te(m,"title",ee)},className:"bg-bg-primary border border-border-primary rounded px-2 py-1 text-xs focus:outline-none"})]})]},m)})})]}),v==="style"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Default Theme"}),e.jsx("select",{value:s.defaultTheme,onChange:t=>i("defaultTheme",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none",children:ft.map(t=>e.jsx("option",{value:t,children:t.charAt(0).toUpperCase()+t.slice(1)},t))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Default Language"}),e.jsxs("select",{value:s.defaultLang,onChange:t=>i("defaultLang",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none",children:[e.jsx("option",{value:"el",children:"Ελληνικά"}),e.jsx("option",{value:"en",children:"English"})]})]})]}),v==="layout"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"pb-2 border-b border-border-primary",children:[e.jsx("h3",{className:"text-sm font-bold",children:"Configure Profile Layout"}),e.jsx("p",{className:"text-[11px] text-text-secondary",children:"Drag and drop sections to rearrange them, or toggle their visibility switches."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-[10px] font-bold text-text-secondary uppercase",children:"Add Blocks"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:(()=>{const t=s.layout||mt,m=Oe.every(U=>t.includes(U)),u=Ge.every(U=>t.includes(U));return e.jsxs(e.Fragment,{children:[e.jsxs("button",{type:"button",disabled:m,onClick:()=>i("layout",et(s.layout,Oe)),className:"p-3.5 bg-bg-secondary border border-border-primary hover:border-accent/40 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl text-left flex items-center gap-3 cursor-pointer transition",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-bg-primary flex items-center justify-center text-accent text-xs shrink-0",children:e.jsx("i",{className:"fa-brands fa-github"})}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("span",{className:"text-xs font-semibold block",children:"+ Add GitHub blocks"}),e.jsx("span",{className:"text-[10px] text-text-secondary block",children:m?"Already added":"Skills, GitHub stats, portfolio"})]})]}),e.jsxs("button",{type:"button",disabled:u,onClick:()=>i("layout",et(s.layout,Ge)),className:"p-3.5 bg-bg-secondary border border-border-primary hover:border-accent/40 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl text-left flex items-center gap-3 cursor-pointer transition",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-bg-primary flex items-center justify-center text-accent text-xs shrink-0",children:e.jsx("i",{className:"fa-brands fa-youtube"})}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("span",{className:"text-xs font-semibold block",children:"+ Add YouTube blocks"}),e.jsx("span",{className:"text-[10px] text-text-secondary block",children:u?"Already added":"Subscriber count, views, latest videos"})]})]})]})})()})]}),Oe.some(t=>(s.layout||[]).includes(t))&&!s.githubUsername&&e.jsxs("div",{className:"p-3.5 bg-bg-secondary border border-amber-500/30 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold block",children:"Connect GitHub for real stats"}),e.jsx("span",{className:"text-[10px] text-text-secondary",children:"Your Skills/GitHub Stats/Portfolio blocks need a connected account: stats count your private repos too, portfolio only ever shows public ones."})]}),e.jsx("button",{type:"button",onClick:()=>de("stats"),className:"shrink-0 px-4 py-2 bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold cursor-pointer",children:"Connect GitHub"})]}),Ge.some(t=>(s.layout||[]).includes(t))&&e.jsxs("div",{className:"p-3.5 bg-bg-secondary border border-amber-500/30 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold block",children:s.youtubeChannelId?"YouTube channel connected":"Connect YouTube"}),e.jsx("span",{className:"text-[10px] text-text-secondary",children:s.youtubeChannelId?`Channel ID: ${s.youtubeChannelId}`:"Sign in with the Google account that owns your channel to pull subscriber count, views, and latest videos."})]}),e.jsx("button",{type:"button",onClick:K,className:"shrink-0 px-4 py-2 bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold cursor-pointer",children:s.youtubeChannelId?"Reconnect YouTube":"Connect YouTube"})]}),e.jsx("div",{className:"space-y-3",children:(s.layout||["profile","links","actions","techstack","github","portfolio"]).map((t,m)=>{const u=Te.find(U=>U.id===t);return u?e.jsxs("div",{draggable:!0,onDragStart:U=>n(U,m),onDragOver:c,onDrop:U=>B(U,m),className:`flex items-center justify-between p-3.5 bg-bg-secondary border rounded-xl cursor-grab active:cursor-grabbing hover:border-accent/45 transition duration-150 ${q===m?"opacity-40 border-accent/40":"border-border-primary"}`,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("i",{className:"fa-solid fa-bars text-text-secondary hover:text-text-primary"}),e.jsx("div",{className:"w-8 h-8 rounded-lg bg-bg-primary flex items-center justify-center text-accent text-xs",children:e.jsx("i",{className:u.icon})}),e.jsx("span",{className:"text-xs font-semibold",children:u.name})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",disabled:m===0,onClick:()=>o(m,"up"),className:"w-7 h-7 bg-bg-primary hover:bg-bg-secondary border border-border-primary disabled:opacity-30 rounded flex items-center justify-center cursor-pointer transition text-[10px]",children:e.jsx("i",{className:"fa-solid fa-chevron-up"})}),e.jsx("button",{type:"button",disabled:m===(s.layout||[]).length-1,onClick:()=>o(m,"down"),className:"w-7 h-7 bg-bg-primary hover:bg-bg-secondary border border-border-primary disabled:opacity-30 rounded flex items-center justify-center cursor-pointer transition text-[10px]",children:e.jsx("i",{className:"fa-solid fa-chevron-down"})}),t!=="profile"&&e.jsx("button",{type:"button",onClick:()=>r(t),className:"text-[10px] font-bold text-red-400 hover:underline px-2 py-1 cursor-pointer",children:"Hide"})]})]},t):null})}),Te.filter(t=>!(s.layout||["profile","links","actions","techstack","github","portfolio"]).includes(t.id)).length>0&&e.jsxs("div",{className:"mt-6 pt-4 border-t border-border-primary",children:[e.jsx("h4",{className:"text-[10px] font-bold text-text-secondary uppercase mb-3",children:"Hidden Sections (Click to Show)"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:Te.filter(t=>!(s.layout||["profile","links","actions","techstack","github","portfolio"]).includes(t.id)).map(t=>e.jsxs("button",{type:"button",onClick:()=>r(t.id),className:"p-3 bg-bg-secondary hover:bg-bg-secondary/80 border border-border-primary hover:border-accent/40 rounded-xl text-left flex items-center gap-3 cursor-pointer transition",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-bg-primary flex items-center justify-center text-text-secondary text-xs",children:e.jsx("i",{className:t.icon})}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs block font-semibold",children:t.name}),e.jsx("span",{className:"text-[9px] text-accent block font-medium",children:"+ Add to Profile"})]})]},t.id))})]})]}),v==="integrations"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"rounded-2xl border border-border-primary bg-bg-secondary/60 p-4 space-y-3",children:[e.jsx("h3",{className:"text-sm font-bold",children:"Integrations Setup Guide"}),e.jsx("p",{className:"text-[11px] text-text-secondary",children:"Add your own provider keys below. These values are used by your deployed page/profile and can be different per user profile."}),e.jsxs("p",{className:"text-[10px] text-text-secondary",children:["Security note: builder deployments use namespaced secret keys prefixed with ",e.jsx("span",{className:"text-text-primary",children:"BUILDER_"})," so they never collide with this site's own runtime secrets."]}),e.jsxs("div",{className:"text-[10px] flex flex-wrap gap-3",children:[e.jsx("a",{href:"https://console.cloud.google.com/apis/credentials",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Google Credentials"}),e.jsx("a",{href:"https://github.com/settings/developers",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"GitHub OAuth Apps"}),e.jsx("a",{href:"https://resend.com/api-keys",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Resend API Keys"}),e.jsx("a",{href:"https://analytics.google.com/",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Google Analytics"}),e.jsx("a",{href:"https://calendly.com/app/event_types/user/me",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Calendly Event Types"})]}),e.jsxs("ul",{className:"text-[10px] text-text-secondary space-y-1.5",children:[e.jsx("li",{children:"Google OAuth: Needed for Google Login flows in your profile and builder auth scenarios."}),e.jsx("li",{children:'GitHub OAuth: Needed for "Login with GitHub" and GitHub deployment workflows.'}),e.jsx("li",{children:"Resend: Needed for contact form email delivery from /api/send-email."}),e.jsx("li",{children:"Google Analytics: Optional tracking for visits and key events."}),e.jsx("li",{children:"Calendly: Needed for meeting booking links and popup scheduling flow."})]})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-text-secondary",children:"GitHub OAuth (Worker Environment)"}),e.jsx("p",{className:"text-[10px] text-text-secondary",children:"GitHub OAuth values are configured on Cloudflare Worker environment, not stored in this profile config."}),e.jsxs("ul",{className:"text-[9px] text-text-secondary space-y-1 pl-3 list-disc",children:[e.jsxs("li",{children:["Create an OAuth App in ",e.jsx("a",{href:"https://github.com/settings/developers",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"GitHub Developer Settings"}),"."]}),e.jsx("li",{children:"Homepage URL: https://linkhubpage.com"}),e.jsx("li",{children:"Authorization callback URL: https://linkhubpage.com/api/auth/github/callback"}),e.jsxs("li",{children:["Set ",e.jsx("span",{className:"text-text-primary",children:"GITHUB_CLIENT_ID"})," in Worker Variables and ",e.jsx("span",{className:"text-text-primary",children:"GITHUB_CLIENT_SECRET"})," in Worker Secrets."]}),e.jsx("li",{children:"When using GitHub Pages deploy, integration values are also synced to repository Actions Secrets through the GitHub API."}),e.jsx("li",{children:"If you logged in before this update, sign in with GitHub again to grant the latest permissions."}),e.jsxs("li",{children:["Open ",e.jsx("a",{href:"https://dash.cloudflare.com/",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Cloudflare Dashboard"})," -> Workers & Pages -> linkhubpage -> Settings -> Variables and Secrets."]})]})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-text-secondary",children:"Google Client ID (OAuth)"}),e.jsx("input",{type:"text",value:s.googleClientId||"",onChange:t=>{i("googleClientId",t.target.value),le("idle"),Re("")},placeholder:"e.g. 961938932307-s2ofhoqrm0qcjbrds8klgjjs...",className:"w-full h-10 px-3 bg-bg-secondary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition"}),e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:"text-[10px] text-text-secondary",children:"Configure a custom Google OAuth Client ID to support Google Login on your profile."}),e.jsx("button",{type:"button",onClick:rt,disabled:M==="checking",className:"px-3 h-8 bg-bg-primary border border-border-primary hover:bg-bg-secondary rounded-lg text-[10px] font-bold cursor-pointer disabled:opacity-50",children:M==="checking"?"Checking...":"Check"})]}),ve&&e.jsx("p",{className:`text-[10px] ${M==="valid"?"text-emerald-300":M==="invalid"?"text-amber-300":"text-text-secondary"}`,children:ve}),e.jsxs("ul",{className:"text-[9px] text-text-secondary space-y-1 pl-3 list-disc",children:[e.jsxs("li",{children:["Go to ",e.jsx("a",{href:"https://console.cloud.google.com/apis/credentials",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Google Cloud Console Credentials"})," -> create OAuth Client ID."]}),e.jsx("li",{children:"Create OAuth Client ID (Web application)."}),e.jsx("li",{children:"Add your domain in Authorized JavaScript origins (e.g. https://linkhubpage.com)."}),e.jsx("li",{children:"Copy the Client ID and paste it here."})]})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-text-secondary",children:"Resend API Key (Contact Email)"}),e.jsx("input",{type:"password",value:s.resendApiKey||"",onChange:t=>{i("resendApiKey",t.target.value),ae("idle"),nt("")},placeholder:"re_xxxxxxxxxxxxxxxx",className:"w-full h-10 px-3 bg-bg-secondary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition"}),e.jsx("div",{className:"flex items-center justify-end",children:e.jsx("button",{type:"button",onClick:it,disabled:X==="checking",className:"px-3 h-8 bg-bg-primary border border-border-primary hover:bg-bg-secondary rounded-lg text-[10px] font-bold cursor-pointer disabled:opacity-50",children:X==="checking"?"Checking...":"Check"})}),e.jsx("p",{className:"text-[10px] text-text-secondary",children:"Provide your Resend API Key to receive emails from the contact form. (Kept secure on the server, not exposed to profile visitors)."}),Ue&&e.jsx("p",{className:`text-[10px] ${X==="valid"?"text-emerald-300":X==="invalid"?"text-amber-300":"text-text-secondary"}`,children:Ue}),e.jsxs("p",{className:"text-[9px] text-text-secondary",children:["During Cloudflare direct deploy, this key is sent as Worker Secret (",e.jsx("span",{className:"text-text-primary",children:"BUILDER_RESEND_API_KEY"}),") via API and is not embedded in public config files."]}),e.jsxs("ul",{className:"text-[9px] text-text-secondary space-y-1 pl-3 list-disc",children:[e.jsxs("li",{children:["Go to ",e.jsx("a",{href:"https://resend.com/api-keys",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Resend API Keys"})," -> create a new API key."]}),e.jsx("li",{children:"Set and verify your sending domain in Resend before production use."}),e.jsx("li",{children:"Use a valid sender (for example no-reply@yourdomain.com) that belongs to your verified domain."}),e.jsx("li",{children:"Paste the key in this field to enable contact form delivery."})]})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-text-secondary",children:"Google Analytics ID"}),e.jsx("input",{type:"text",value:s.googleAnalyticsId||"",onChange:t=>i("googleAnalyticsId",t.target.value),placeholder:"e.g. G-XXXXXXXXXX",className:"w-full h-10 px-3 bg-bg-secondary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition"}),e.jsx("p",{className:"text-[10px] text-text-secondary",children:"Track visitors on your profile using your Google Analytics ID."}),e.jsxs("ul",{className:"text-[9px] text-text-secondary space-y-1 pl-3 list-disc",children:[e.jsxs("li",{children:["Go to ",e.jsx("a",{href:"https://analytics.google.com/",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Google Analytics"})," -> Admin -> Data Streams."]}),e.jsx("li",{children:"Create/select a Web data stream for your domain."}),e.jsx("li",{children:"Copy the Measurement ID (format: G-XXXXXXXXXX)."}),e.jsx("li",{children:"Paste it here to activate analytics tracking."})]})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-text-secondary",children:"Calendly URL"}),e.jsx("input",{type:"url",value:s.calendlyUrl,onChange:t=>{i("calendlyUrl",t.target.value),ot("idle"),st("")},placeholder:"e.g. https://calendly.com/your-username/30min",className:"w-full h-10 px-3 bg-bg-secondary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition"}),e.jsx("div",{className:"flex items-center justify-end",children:e.jsx("button",{type:"button",onClick:lt,disabled:Ie==="checking",className:"px-3 h-8 bg-bg-primary border border-border-primary hover:bg-bg-secondary rounded-lg text-[10px] font-bold cursor-pointer disabled:opacity-50",children:Ie==="checking"?"Checking...":"Check"})}),e.jsx("p",{className:"text-[10px] text-text-secondary",children:'Configure the meeting booking URL used by the "Book Meeting" action.'}),Fe&&e.jsx("p",{className:`text-[10px] ${Ie==="valid"?"text-emerald-300":Ie==="invalid"?"text-amber-300":"text-text-secondary"}`,children:Fe}),e.jsxs("ul",{className:"text-[9px] text-text-secondary space-y-1 pl-3 list-disc",children:[e.jsxs("li",{children:["Create/select your event type from ",e.jsx("a",{href:"https://calendly.com/app/event_types/user/me",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Calendly Event Types"}),"."]}),e.jsx("li",{children:"Copy the share URL (for example https://calendly.com/your-username/30min)."}),e.jsx("li",{children:"Paste it here so visitors can book directly from your profile."})]})]})]}),v==="deploy"&&e.jsx("div",{className:"space-y-6",children:d?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("form",{onSubmit:Z,className:"bg-bg-secondary border border-border-primary rounded-2xl p-4 space-y-3",children:[e.jsx("h3",{className:"text-sm font-bold",children:"Reserve Username Handle"}),e.jsx("p",{className:"text-[11px] text-text-secondary",children:"Determine your profile path handle (e.g. linkhubpage.com/p/handle)."}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"text",placeholder:"myhandle",value:x,disabled:C,onChange:t=>T(t.target.value.toLowerCase().replace(/[^a-z0-9_-]/g,"")),className:"flex-1 h-10 bg-bg-primary border border-border-primary rounded-xl px-3 text-xs focus:outline-none disabled:opacity-50",required:!0}),e.jsx("button",{type:"submit",disabled:C||H==="loading",className:"px-4 bg-accent text-white rounded-xl text-xs font-bold hover:bg-accent/80 disabled:opacity-50 cursor-pointer",children:"Reserve"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-sm font-bold",children:"Select Deployment Target"}),e.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4",children:tt.map(t=>e.jsxs("button",{type:"button",onClick:()=>P(t.id),"aria-current":L===t.id?"true":void 0,className:`flex flex-col items-center gap-1.5 rounded-xl border p-3 text-center transition cursor-pointer ${L===t.id?"border-accent bg-accent/10 text-accent":"border-border-primary bg-bg-secondary text-text-secondary hover:border-accent/40 hover:text-text-primary"}`,children:[e.jsx("i",{className:`${t.icon} text-base`,"aria-hidden":"true"}),e.jsx("span",{className:"text-[10px] font-bold leading-tight",children:t.label})]},t.id))}),L==="internal"&&e.jsxs("div",{className:"bg-bg-secondary border border-border-primary rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold block",children:"Internal LinkHubPage Hosting"}),e.jsxs("span",{className:"text-[10px] text-text-secondary",children:["Deploy to linkhubpage.com/p/",x||"username"]}),He&&e.jsx("p",{className:`text-[10px] mt-1 ${ke==="ready"?"text-emerald-300":ke==="error"?"text-amber-300":"text-text-secondary"}`,children:He})]}),e.jsx("button",{type:"button",onClick:ct,disabled:ke==="checking",className:"w-full sm:w-auto px-4 py-2.5 bg-bg-primary border border-border-primary hover:bg-bg-secondary rounded-xl text-xs font-bold cursor-pointer disabled:opacity-50",children:ke==="checking"?"Checking...":"Check Internal Setup"})]}),L==="zip"&&e.jsxs("div",{className:"bg-bg-secondary border border-border-primary rounded-2xl p-4",children:[e.jsx("span",{className:"text-xs font-bold block",children:"Download ZIP Package"}),e.jsx("span",{className:"text-[10px] text-text-secondary",children:"Export profile static assets to host anywhere. No connection needed. Download happens on the Publish step."})]}),L==="github"&&e.jsxs("div",{className:"bg-bg-secondary border border-border-primary rounded-2xl p-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold block",children:"Deploy to GitHub Pages"}),e.jsx("span",{className:"text-[10px] text-text-secondary",children:"Choose deployment URL mode: root site or repo subpath"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[e.jsxs("label",{className:"flex items-start gap-2 p-3 border border-border-primary rounded-xl cursor-pointer bg-bg-primary/50",children:[e.jsx("input",{type:"radio",name:"github-pages-mode",checked:we==="subpath",onChange:()=>fe("subpath"),className:"mt-0.5"}),e.jsxs("span",{className:"text-[11px] text-text-secondary",children:[e.jsx("span",{className:"text-text-primary font-semibold block",children:"Subpath mode"}),"Deploy to ",e.jsx("span",{className:"text-text-primary",children:"https://user.github.io/repo/"})]})]}),e.jsxs("label",{className:"flex items-start gap-2 p-3 border border-border-primary rounded-xl cursor-pointer bg-bg-primary/50",children:[e.jsx("input",{type:"radio",name:"github-pages-mode",checked:we==="root",onChange:()=>fe("root"),className:"mt-0.5"}),e.jsxs("span",{className:"text-[11px] text-text-secondary",children:[e.jsx("span",{className:"text-text-primary font-semibold block",children:"Root mode"}),"Deploy to ",e.jsx("span",{className:"text-text-primary",children:"https://user.github.io/"})," (no trailing repo path)"]})]})]}),we==="subpath"?e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"text-[10px] font-bold text-text-secondary uppercase",children:"Repository Name"}),e.jsx("input",{type:"text",value:Se,onChange:t=>re(t.target.value.toLowerCase().replace(/[^a-z0-9_.-]/g,"")),placeholder:"linkhubpage-profile",className:"w-full h-9 px-3 bg-bg-primary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition"})]}):e.jsxs("p",{className:"text-[10px] text-amber-300",children:["Root mode uses repo name ",e.jsx("span",{className:"text-text-primary font-semibold",children:"<your-github-username>.github.io"}),". If it already exists, deployment updates that site."]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between",children:[Ae("github_access_token")?e.jsx("button",{type:"button",onClick:$,disabled:O==="checking",className:"w-full sm:w-auto px-4 py-2.5 bg-bg-primary border border-border-primary hover:bg-bg-secondary rounded-xl text-xs font-bold cursor-pointer disabled:opacity-50",children:O==="checking"?"Checking GitHub...":"Check GitHub Setup"}):e.jsx("button",{type:"button",onClick:()=>de(),className:"w-full sm:w-auto px-4 py-2.5 bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold cursor-pointer",children:"Connect GitHub"}),Q&&b&&e.jsxs("span",{className:"text-[10px] text-text-secondary",children:["Target: ",e.jsxs("span",{className:"text-text-primary font-semibold",children:[Q,"/",b]}),E===!0?" (exists)":E===!1?" (will be created)":""]})]}),V&&e.jsx("p",{className:`text-[10px] ${O==="connected"?"text-emerald-300":O==="error"?"text-amber-300":"text-text-secondary"}`,children:V})]}),L==="cloudflare"&&e.jsxs("div",{className:"bg-bg-secondary border border-border-primary rounded-2xl p-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold block",children:"Cloudflare Worker Deployment"}),e.jsx("span",{className:"text-[10px] text-text-secondary",children:"Host your profile on your own Cloudflare account (like our setup, without the builder)"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[e.jsx("button",{type:"button",onClick:()=>yt(x||"custom",{...s,adminEmail:(d==null?void 0:d.email)||""}),className:"px-3 py-2 bg-bg-primary border border-border-primary hover:bg-bg-secondary rounded-xl text-xs font-bold transition cursor-pointer text-center text-text-secondary hover:text-text-primary",children:"📦 Download Worker ZIP"}),e.jsx("button",{type:"button",onClick:()=>ne(t=>!t),className:`px-3 py-2 border rounded-xl text-xs font-bold transition cursor-pointer text-center ${Ce?"bg-accent text-white border-accent":"bg-bg-primary border-border-primary hover:bg-bg-secondary text-text-primary"}`,children:"🚀 Deploy Directly via API"})]}),Ce&&e.jsxs("div",{className:"pt-4 border-t border-border-primary space-y-3",children:[e.jsxs("div",{className:"rounded-xl border border-border-primary bg-bg-primary/50 p-3 space-y-2",children:[e.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wider text-text-secondary",children:"How this works"}),e.jsxs("ul",{className:"text-[10px] text-text-secondary space-y-1",children:[e.jsx("li",{children:"1. Enter your domain (or subdomain) and check it’s on Cloudflare."}),e.jsx("li",{children:"2. A window opens to connect your Cloudflare account, nothing else to configure."}),e.jsx("li",{children:"3. Once connected, go to the Publish step to deploy."})]})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"text-[10px] font-bold text-text-secondary uppercase",children:"Domain to Deploy"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"text",value:ue,onChange:t=>{xe(t.target.value),_e()},placeholder:"e.g. profile.yourdomain.com",className:"flex-1 h-9 px-3 bg-bg-primary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition",required:Ce}),e.jsx("button",{type:"button",onClick:he,disabled:se==="checking",className:"px-3 h-9 bg-bg-primary border border-border-primary hover:bg-bg-secondary rounded-lg text-xs font-bold cursor-pointer disabled:opacity-50",children:se==="checking"?"Checking...":"Check Domain"})]}),ie&&e.jsx("p",{className:`text-[10px] ${se==="valid"?"text-emerald-300":se==="invalid"?"text-amber-300":"text-text-secondary"}`,children:ie}),se==="valid"&&pe!=="connected"&&e.jsx("button",{type:"button",onClick:Ne,disabled:pe==="connecting",className:"text-[10px] font-bold text-accent hover:underline cursor-pointer disabled:opacity-50 disabled:no-underline disabled:cursor-default",children:pe==="connecting"?"Connecting to Cloudflare...":"Retry Cloudflare login"})]})]})]})]})]}):e.jsxs("div",{className:"bg-bg-secondary border border-border-primary rounded-2xl p-6 text-center",children:[e.jsx("span",{className:"text-xl block mb-2",children:"🔒 Account Required"}),e.jsx("p",{className:"text-xs text-text-secondary mb-4",children:"Please log in with Google to access hosting and deployment options."}),e.jsx("button",{onClick:y,className:"px-4 py-2 bg-accent/15 border border-accent/20 rounded-lg text-xs font-bold hover:bg-accent/30 cursor-pointer",children:"Login with Google"})]})}),v==="publish"&&e.jsx("div",{className:"space-y-6",children:d?e.jsxs("div",{className:"bg-bg-secondary border border-border-primary rounded-2xl p-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold block",children:"Ready to Publish"}),e.jsxs("span",{className:"text-[10px] text-text-secondary",children:["Target: ",e.jsx("span",{className:"text-text-primary font-semibold",children:(Ve=tt.find(t=>t.id===L))==null?void 0:Ve.label})]})]}),L==="internal"&&e.jsx("button",{type:"button",onClick:dt,disabled:!C||Y==="loading"||ke!=="ready",className:"w-full px-4 py-2.5 bg-accent hover:bg-accent/80 disabled:opacity-50 text-white rounded-xl text-xs font-bold cursor-pointer",children:Y==="loading"?"Publishing...":"Publish Profile"}),L==="zip"&&e.jsx("button",{type:"button",onClick:()=>{const t={...s,adminEmail:(d==null?void 0:d.email)||""};xt(x||"custom",t),h(t,{target:"zip"})},className:"w-full px-4 py-2.5 bg-accent hover:bg-accent/80 text-white rounded-xl text-xs font-bold cursor-pointer",children:"Download ZIP"}),L==="github"&&e.jsx("button",{type:"button",onClick:D,disabled:A==="loading"||O!=="connected",className:"w-full px-4 py-2.5 bg-accent hover:bg-accent/80 disabled:opacity-50 text-white rounded-xl text-xs font-bold cursor-pointer",children:A==="loading"?"Publishing...":"Deploy to GitHub"}),L==="cloudflare"&&e.jsx("button",{type:"button",onClick:ye,disabled:A==="loading"||pe!=="connected",className:"w-full px-4 py-2.5 bg-accent hover:bg-accent/80 disabled:opacity-50 text-white rounded-xl text-xs font-bold cursor-pointer",children:A==="loading"?"Publishing...":"Start Cloudflare Deployment"})]}):e.jsxs("div",{className:"bg-bg-secondary border border-border-primary rounded-2xl p-6 text-center",children:[e.jsx("span",{className:"text-xl block mb-2",children:"🔒 Account Required"}),e.jsx("p",{className:"text-xs text-text-secondary mb-4",children:"Please log in with Google to publish."}),e.jsx("button",{onClick:y,className:"px-4 py-2 bg-accent/15 border border-accent/20 rounded-lg text-xs font-bold hover:bg-accent/30 cursor-pointer",children:"Login with Google"})]})}),F&&(()=>{const t=[...F.matchAll(/https?:\/\/\S+/g)].map(u=>u[0].replace(/[.,;]+$/,"")),m=t.reduce((u,U)=>u.replace(U,""),F).replace(/\s{2,}/g," ").trim();return e.jsxs("div",{className:"p-3 bg-bg-secondary border border-border-primary rounded-xl text-xs text-center font-semibold space-y-2",children:[m&&e.jsx("div",{children:m}),t.map(u=>e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsx("a",{href:u,target:"_blank",rel:"noopener noreferrer",className:"text-accent underline break-all font-normal",children:u}),e.jsx("button",{type:"button",onClick:()=>{navigator.clipboard.writeText(u),f(u),setTimeout(()=>f(""),2e3)},className:"shrink-0 px-2 py-1 border border-border-primary hover:border-accent rounded-lg text-[10px] font-bold text-text-secondary hover:text-text-primary transition cursor-pointer",children:W===u?"✓ Copied":"📋 Copy"})]},u))]})})(),e.jsxs("div",{className:"flex items-center justify-between gap-3 pt-2",children:[e.jsx("button",{type:"button",onClick:()=>{const t=oe.findIndex(m=>m.id===v);t>0&&g(oe[t-1].id)},disabled:oe.findIndex(t=>t.id===v)===0,className:"px-4 py-2 rounded-xl text-xs font-bold border border-border-primary bg-bg-secondary hover:border-accent hover:text-accent transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed",children:"Back"}),e.jsx("button",{type:"button",onClick:()=>{const t=oe.findIndex(m=>m.id===v);t<oe.length-1&&g(oe[t+1].id)},disabled:v===oe[oe.length-1].id||v==="deploy"&&!ze,className:"px-4 py-2 rounded-xl text-xs font-bold bg-accent hover:bg-accent/80 text-white transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed",children:"Next"})]})]})]}),e.jsxs("div",{className:"w-full md:w-1/2 bg-zinc-950 flex items-center justify-center p-6 min-h-[500px] md:min-h-screen relative",children:[e.jsx(gt,{}),e.jsxs("div",{"data-theme":s.defaultTheme,className:"w-[340px] h-[680px] bg-bg-primary text-text-primary border-[8px] border-zinc-800 rounded-[48px] shadow-2xl relative overflow-y-auto overflow-x-hidden flex flex-col p-4 scrollbar-none z-10 transition-colors duration-300",children:[e.jsxs("div",{className:"w-32 h-5 bg-zinc-800 rounded-b-2xl absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1.5 z-20",children:[e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-zinc-900"}),e.jsx("div",{className:"w-8 h-1 rounded bg-zinc-900"})]}),e.jsx("div",{className:"flex-1 mt-6 flex flex-col h-full overflow-y-auto",children:e.jsx(bt,{isPreview:!0,config:s})})]})]})]})};export{At as Builder};
