import{r as d,g as xe,D as Oe,C as we,a as Ie,s as Ze,u as ut,l as pt,j as e,R as ht,b as mt,G as Ae,Y as Le,c as Xe,d as ft}from"./index-BZ_lWsRj.js";import{TemplateRenderer as gt}from"./index-CZLxNMBg.js";import{u as _e}from"./githubSecrets-DaTf0h-e.js";const Qe=()=>new Promise((p,P)=>{if(window.JSZip){p(window.JSZip);return}const R=document.createElement("script");R.src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js",R.onload=()=>p(window.JSZip),R.onerror=()=>P(new Error("Failed to load JSZip CDN")),document.head.appendChild(R)}),bt=async(p,P)=>{try{const R=await Qe(),y=new R;let g=await(await fetch("/")).text();g=g.replace("</head>",`<script>
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
    <\/script></head>`),g=g.replaceAll('src="/assets/','src="./assets/'),g=g.replaceAll('href="/assets/','href="./assets/'),g=g.replaceAll('href="/vendor/','href="./vendor/'),y.file("index.html",g),y.file("config.json",JSON.stringify(P,null,2));const B=Array.from(document.querySelectorAll('script[type="module"]')),j=Array.from(document.querySelectorAll('link[rel="stylesheet"]'));for(const C of j){const f=C.getAttribute("href");if(f&&f.startsWith("/assets/")){const O=await fetch(f);if(O.ok){const w=await O.text();y.file(f.substring(1),w)}}}const _=B.map(C=>C.getAttribute("src")).filter(C=>!!C&&C.startsWith("/assets/")),z=new Set;for(let C=0;C<_.length;C++){const f=_[C];if(z.has(f))continue;const O=await fetch(f);if(!O.ok)continue;const w=await O.text();y.file(f.substring(1),w),z.add(f);const b=[...w.matchAll(/from"\.\/([a-zA-Z0-9_.-]+\.js)"|import\("\.\/([a-zA-Z0-9_.-]+\.js)"\)/g)].map(o=>o[1]||o[2]);for(const o of b){const S=`/assets/${o}`;!z.has(S)&&!_.includes(S)&&_.push(S)}}const v=[...g.matchAll(/href="(?:\.\/)?(vendor\/[^"]+\.css)"/g)].map(C=>C[1]),Z=[...new Set(v)],m=new Set;for(const C of Z){if(m.has(C))continue;const f=await fetch(`/${C}`);if(!f.ok)continue;const O=await f.text();y.file(C,O),m.add(C);const w=[...O.matchAll(/url\(([^)]+)\)/g)].map(b=>b[1].replace(/['"]/g,""));for(const b of w){const o=new URL(b,`https://x/${C}`).pathname.slice(1);if(m.has(o))continue;const S=await fetch(`/${o}`);if(!S.ok)continue;const I=new Uint8Array(await S.arrayBuffer());y.file(o,I),m.add(o)}}const L=await y.generateAsync({type:"blob"}),E=document.createElement("a");E.href=URL.createObjectURL(L),E.download=`linkhubpage-${p}-profile.zip`,document.body.appendChild(E),E.click(),document.body.removeChild(E)}catch(R){console.error("ZIP packaging failed:",R),alert("Failed to generate ZIP export package.")}},xt=async(p,P)=>{try{const R=await Qe(),y=new R;y.file("wrangler.toml",`name = "linkhubpage-profile-\${username || 'custom'}"
main = "src/worker.ts"
compatibility_date = "2024-01-01"

[assets]
directory = "./public"

[vars]
GOOGLE_CLIENT_ID = "\${profileConfig.googleClientId || ''}"
GOOGLE_ANALYTICS_ID = "\${profileConfig.googleAnalyticsId || ''}"
RESEND_API_KEY = "\${profileConfig.resendApiKey || ''}"
`);const g={name:"linkhubpage-profile-${username || 'custom'}",version:"1.0.0",devDependencies:{wrangler:"^3.0.0"},scripts:{deploy:"wrangler deploy"}};y.file("package.json",JSON.stringify(g,null,2));const W=`export interface Env {
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
        const targetEmail = recipientEmail || "${P.contactEmail||""}";

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
`;y.file("src/worker.ts",W);let j=await(await fetch("/")).text();j=j.replace("</head>",`<script>
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
    <\/script></head>`),j=j.replaceAll('src="/assets/','src="./assets/'),j=j.replaceAll('href="/assets/','href="./assets/'),j=j.replaceAll('href="/vendor/','href="./vendor/'),y.file("public/index.html",j);const z={...P};delete z.resendApiKey,y.file("public/config.json",JSON.stringify(z,null,2));const v=Array.from(document.querySelectorAll('script[type="module"]')),Z=Array.from(document.querySelectorAll('link[rel="stylesheet"]'));for(const b of Z){const o=b.getAttribute("href");if(o&&o.startsWith("/assets/")){const S=await fetch(o);if(S.ok){const I=await S.text();y.file("public/"+o.substring(1),I)}}}const m=v.map(b=>b.getAttribute("src")).filter(b=>!!b&&b.startsWith("/assets/")),L=new Set;for(let b=0;b<m.length;b++){const o=m[b];if(L.has(o))continue;const S=await fetch(o);if(!S.ok)continue;const I=await S.text();y.file("public/"+o.substring(1),I),L.add(o);const F=[...I.matchAll(/from"\.\/([a-zA-Z0-9_.-]+\.js)"|import\("\.\/([a-zA-Z0-9_.-]+\.js)"\)/g)].map(K=>K[1]||K[2]);for(const K of F){const l=`/assets/${K}`;!L.has(l)&&!m.includes(l)&&m.push(l)}}const E=[...j.matchAll(/href="(?:\.\/)?(vendor\/[^"]+\.css)"/g)].map(b=>b[1]),C=[...new Set(E)],f=new Set;for(const b of C){if(f.has(b))continue;const o=await fetch(`/${b}`);if(!o.ok)continue;const S=await o.text();y.file("public/"+b,S),f.add(b);const I=[...S.matchAll(/url\(([^)]+)\)/g)].map(F=>F[1].replace(/['"]/g,""));for(const F of I){const K=new URL(F,`https://x/${b}`).pathname.slice(1);if(f.has(K))continue;const l=await fetch(`/${K}`);if(!l.ok)continue;const u=new Uint8Array(await l.arrayBuffer());y.file("public/"+K,u),f.add(K)}}const O=await y.generateAsync({type:"blob"}),w=document.createElement("a");w.href=URL.createObjectURL(O),w.download=`linkhubpage-${p}-cloudflare-worker.zip`,document.body.appendChild(w),w.click(),document.body.removeChild(w)}catch(R){console.error("Worker ZIP packaging failed:",R),alert("Failed to generate Cloudflare Worker export package.")}},Pe=p=>p.trim().toLowerCase().replace(/^https?:\/\//,"").replace(/\/.*$/,"").replace(/\.$/,"");function yt({username:p,profileConfig:P,persistBuilderDraft:R,getAuthToken:y,setDeployStatus:N,setStatusMsg:g}){const[W,B]=d.useState(!1),[j,_]=d.useState(""),[z,v]=d.useState("idle"),[Z,m]=d.useState(""),[L,E]=d.useState("idle"),[C,f]=d.useState(""),[O,w]=d.useState(""),[b,o]=d.useState(()=>`linkhubpage-profile-${p||"custom"}`),[S,I]=d.useState(""),[F,K]=d.useState(""),l=d.useRef(!1),u=d.useRef(!1),k=d.useRef(!1);d.useEffect(()=>{o(`linkhubpage-profile-${p||"custom"}`)},[p]);const re=async()=>{const a=Pe(j);if(!a){v("invalid"),m("Please enter a valid domain first.");return}v("checking"),m("Checking whether the domain is using Cloudflare nameservers..."),E("idle"),f(""),I("");try{const r=await fetch("/api/cloudflare/domain-check",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({domain:a})}),s=await r.json();if(!r.ok){v("invalid"),m(s.error||"Domain check failed.");return}s.isCloudflare?(v("valid"),m(`Domain ${s.domain} is on Cloudflare. Opening Cloudflare login...`),F.trim()||K(`${s.domain}/*`)):(v("invalid"),m(`Domain ${s.domain} is not currently on Cloudflare nameservers.`))}catch(r){v("invalid"),m(r instanceof Error?r.message:"Unable to verify domain.")}},q=async()=>{const a=Pe(j);if(z!=="valid"){E("error"),m("Please verify your domain on Cloudflare before login.");return}const r=O.trim();if(!r){E("error"),m("Please connect via the Cloudflare popup first.");return}E("connecting"),m("Connecting to Cloudflare and loading your account + zone details...");try{const s=await fetch("/api/cloudflare/connect",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({domain:a,apiToken:r})}),i=await s.json();if(!s.ok){E("error"),m(i.error||"Cloudflare login/connect failed.");return}f(i.accountId||""),I(i.zoneId||""),K(i.routePattern||`${a}/*`),E("connected"),m(`Connected to Cloudflare successfully. Zone: ${i.zoneName||a}`)}catch(s){E("error"),m(s instanceof Error?s.message:"Cloudflare login/connect failed.")}},ye=async()=>{var s,i,D;const a=Pe(j);if(!a){alert("Please provide the domain you want to deploy to.");return}if(z!=="valid"){alert("Please verify that the domain is on Cloudflare first.");return}if(L!=="connected"){alert("Please login/connect Cloudflare to auto-load account and zone details.");return}if(!C||!O||!b||!S){alert("Missing Cloudflare deployment details. Please reconnect Cloudflare and try again.");return}const r=(F||`${a}/*`).trim();N("loading"),g("Compiling your profile assets into a single-file Worker...");try{await R();const x={};(s=P.resendApiKey)!=null&&s.trim()&&(x.BUILDER_RESEND_API_KEY=P.resendApiKey.trim()),(i=P.googleClientId)!=null&&i.trim()&&(x.BUILDER_GOOGLE_CLIENT_ID=P.googleClientId.trim()),(D=P.googleAnalyticsId)!=null&&D.trim()&&(x.BUILDER_GOOGLE_ANALYTICS_ID=P.googleAnalyticsId.trim()),x.CLOUDFLARE_API_TOKEN=O.trim(),x.CLOUDFLARE_ACCOUNT_ID=C.trim(),x.CLOUDFLARE_SCRIPT_NAME=b.trim();const J={...P};delete J.resendApiKey,delete J.googleClientId,delete J.googleAnalyticsId;const ie=await fetch("/");if(!ie.ok)throw new Error("Failed to fetch HTML template.");let X=await ie.text();X=X.replace("</head>",`<script>
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
      <\/script></head>`),X=X.replaceAll('src="/assets/','src="./assets/'),X=X.replaceAll('href="/assets/','href="./assets/');const G={},M={},V=[...X.matchAll(/(?:src|href)="\.\/assets\/([^"]+)"/g)].map(T=>T[1]),U=V.filter(T=>T.endsWith(".js")),ee=V.filter(T=>T.endsWith(".css"));for(const T of ee){if(M[T]!==void 0)continue;const Y=await fetch(`/assets/${T}`);Y.ok&&(M[T]=await Y.text())}for(let T=0;T<U.length;T++){const Y=U[T];if(G[Y]!==void 0)continue;const oe=await fetch(`/assets/${Y}`);if(!oe.ok)continue;const fe=await oe.text();G[Y]=fe;const ce=[...fe.matchAll(/from"\.\/([a-zA-Z0-9_.-]+\.js)"|import\("\.\/([a-zA-Z0-9_.-]+\.js)"\)/g)].map(ae=>ae[1]||ae[2]);for(const ae of ce)G[ae]===void 0&&!U.includes(ae)&&U.push(ae)}const te={},ne={},le=[...X.matchAll(/href="(\/vendor\/[^"]+\.css)"/g)].map(T=>T[1]),he=[...new Set(le)],Se=T=>{let Y="";for(let oe=0;oe<T.length;oe++)Y+=String.fromCharCode(T[oe]);return btoa(Y)};for(const T of he){if(te[T]!==void 0)continue;const Y=await fetch(T);if(!Y.ok)continue;const oe=await Y.text();te[T]=oe;const fe=[...oe.matchAll(/url\(([^)]+)\)/g)].map(ce=>ce[1].replace(/['"]/g,""));for(const ce of fe){const ae=new URL(ce,`https://x${T}`).pathname;if(ne[ae]!==void 0)continue;const ke=await fetch(ae);if(!ke.ok)continue;const Re=await ke.arrayBuffer();ne[ae]=Se(new Uint8Array(Re))}}const ve=`const htmlContent = ${JSON.stringify(X)};
const cssFiles = ${JSON.stringify(M)};
const jsFiles = ${JSON.stringify(G)};
const vendorText = ${JSON.stringify(te)};
const vendorBinary = ${JSON.stringify(ne)};
const configData = ${JSON.stringify(J)};

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
      return new Response(JSON.stringify({
        GOOGLE_CLIENT_ID: env.BUILDER_GOOGLE_CLIENT_ID || '',
        GOOGLE_ANALYTICS_ID: env.BUILDER_GOOGLE_ANALYTICS_ID || ''
      }), {
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
        googleAnalyticsId: 'BUILDER_GOOGLE_ANALYTICS_ID'
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
};`;g("Uploading script and routing to Cloudflare...");const be=await fetch("/api/deploy/cloudflare",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${y()}`},body:JSON.stringify({accountId:C.trim(),apiToken:O.trim(),scriptName:b.trim(),scriptContent:ve,secrets:x,zoneId:S.trim(),routePattern:r})}),me=await be.json();be.ok?(N("success"),me.urls&&Array.isArray(me.urls)?g(`Successfully deployed to Cloudflare Workers! URLs: ${me.urls.join(" | ")}`):g(`Successfully deployed to Cloudflare Workers! URL: ${me.url}`),await R(P,{target:"cloudflare",domain:a})):(N("error"),g(me.error||"Cloudflare deployment failed."))}catch(x){console.error(x),N("error"),g(x instanceof Error?x.message:"Deployment process error.")}},pe=()=>{if(u.current=!1,k.current=!1,!window.open("/cf-connect-popup.html","cf_connect","width=480,height=700")){E("error"),m("Popup blocked. Please allow popups for this site and try again.");return}l.current=!0},n=()=>{v("idle"),E("idle"),w(""),l.current=!1,u.current=!1,k.current=!1};return d.useEffect(()=>{const a=r=>{var s,i;r.origin===window.location.origin&&(((s=r.data)==null?void 0:s.type)!=="cf_token"||!((i=r.data)!=null&&i.token)||w(r.data.token))};return window.addEventListener("message",a),()=>window.removeEventListener("message",a)},[]),d.useEffect(()=>{z==="valid"&&!l.current&&pe()},[z]),d.useEffect(()=>{O&&!u.current&&(u.current=!0,q())},[O]),{showCFDeployForm:W,setShowCFDeployForm:B,cfDomain:j,setCFDomain:_,cfDomainStatus:z,cfDomainMsg:Z,cfConnectStatus:L,handleCheckCloudflareDomain:re,handleCFDirectDeploy:ye,openCFConnectPopup:pe,resetCloudflareConnection:n}}function vt({username:p,user:P,profileConfig:R,persistBuilderDraft:y,setDeployStatus:N,setStatusMsg:g}){const[W,B]=d.useState("subpath"),[j,_]=d.useState(()=>`linkhubpage-profile-${p||"page"}`),[z,v]=d.useState("idle"),[Z,m]=d.useState(""),[L,E]=d.useState(""),[C,f]=d.useState(""),[O,w]=d.useState(null);return d.useEffect(()=>{_(`linkhubpage-profile-${p||"page"}`)},[p]),d.useEffect(()=>{v("idle"),m(""),E(""),f(""),w(null)},[W,j,P==null?void 0:P.email]),{githubPagesMode:W,setGithubPagesMode:B,githubRepoName:j,setGithubRepoName:_,githubConnectStatus:z,githubConnectMsg:Z,githubResolvedOwner:L,githubResolvedRepo:C,githubRepoExists:O,handleCheckGitHubSetup:async()=>{const S=xe("github_access_token");if(!S){v("error"),m("Please log in with GitHub first.");return}v("checking"),m("Checking GitHub account and repository readiness...");const I={Authorization:`Bearer ${S}`,Accept:"application/vnd.github+json"};try{const F=await fetch("https://api.github.com/user",{headers:I});if(!F.ok)throw new Error("Failed to read your GitHub profile. Please login again.");const l=(await F.json()).login,u=W==="root"?`${l}.github.io`:j.trim()||`linkhubpage-profile-${p||"page"}`,k=await fetch(`https://api.github.com/repos/${l}/${u}`,{headers:I}),re=k.ok;if(!re&&k.status!==404){const q=await k.text();throw new Error(`Failed repository check: ${q.slice(0,140)}`)}E(l),f(u),w(re),v("connected"),m(re?`GitHub ready. Repository ${l}/${u} exists and will be updated.`:`GitHub ready. Repository ${l}/${u} does not exist and will be created during deploy.`)}catch(F){v("error"),m(F instanceof Error?F.message:"GitHub setup check failed.")}},handleDeployToGitHub:async()=>{const S=xe("github_access_token");if(!S){N("error"),g("Please log in with GitHub to enable automatic GitHub Pages deployment.");return}if(z!=="connected"){N("error"),g('Please run "Check GitHub Setup" before deploying.');return}N("loading"),g("Preparing GitHub deployment target...");const I={Authorization:`Bearer ${S}`,Accept:"application/vnd.github+json","Content-Type":"application/json"};try{await y();const F=await fetch("https://api.github.com/user",{headers:I});if(!F.ok)throw new Error("Failed to read your GitHub profile. Please try logging in again.");const K=await F.json(),l=L||K.login,u=C||(W==="root"?`${l}.github.io`:j.trim()||`linkhubpage-profile-${p||"page"}`);g("Creating GitHub repository...");const k=await fetch("https://api.github.com/user/repos",{method:"POST",headers:I,body:JSON.stringify({name:u,description:"My LinkHubPage Profile",auto_init:!0})});if(!k.ok&&k.status!==422)throw new Error("Failed to create repository on GitHub");g("Preparing and packaging page assets...");let q=await(await fetch("/")).text();q=q.replace("</head>",`<script>
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
      <\/script></head>`),q=q.replaceAll('src="/assets/','src="./assets/'),q=q.replaceAll('href="/assets/','href="./assets/');const pe=q.replaceAll('src="./assets/','src="../assets/').replaceAll('href="./assets/','href="../assets/'),n={...R};n.adminEmail=(P==null?void 0:P.email)||"",delete n.resendApiKey;const a=[{path:"index.html",content:btoa(unescape(encodeURIComponent(q)))},{path:"admin/index.html",content:btoa(unescape(encodeURIComponent(pe)))},{path:"404.html",content:btoa(unescape(encodeURIComponent(q)))},{path:"config.json",content:btoa(unescape(encodeURIComponent(JSON.stringify(n,null,2))))}],s=[...Array.from(new Set([...q.matchAll(/(?:src|href)="((?:\.\/|\/)?assets\/[^"]+)"/g)].map(A=>A[1])))],i=new Set;for(let A=0;A<s.length;A++){const G=s[A],M=G.startsWith("./")?`/${G.slice(2)}`:G.startsWith("/")?G:`/${G}`,V=G.startsWith("./")?G.slice(2):G.startsWith("/")?G.slice(1):G;if(i.has(V))continue;const U=await fetch(M);if(!U.ok)throw new Error(`Failed to fetch asset ${M} for GitHub deploy`);const ee=await U.text();if(a.push({path:V,content:btoa(unescape(encodeURIComponent(ee)))}),i.add(V),M.endsWith(".js")){const te=[...ee.matchAll(/from"\.\/([a-zA-Z0-9_.-]+\.js)"|import\("\.\/([a-zA-Z0-9_.-]+\.js)"\)/g)].map(ne=>ne[1]||ne[2]);for(const ne of te){const le=`assets/${ne}`;!i.has(le)&&!s.includes(le)&&s.push(le)}}}const D=["/favicon.ico","/icon-192.png","/icon-512.png","/manifest.json"];for(const A of D){const G=await fetch(A);if(!G.ok)continue;const M=new Uint8Array(await G.arrayBuffer());let V="";for(let U=0;U<M.length;U++)V+=String.fromCharCode(M[U]);a.push({path:A.slice(1),content:btoa(V)})}const x=[...q.matchAll(/href="(\/vendor\/[^"]+\.css)"/g)].map(A=>A[1]),J=[...new Set(x)],ie=new Set;for(const A of J){if(ie.has(A))continue;const G=await fetch(A);if(!G.ok)continue;const M=await G.text();a.push({path:A.slice(1),content:btoa(unescape(encodeURIComponent(M)))}),ie.add(A);const V=[...M.matchAll(/url\(([^)]+)\)/g)].map(U=>U[1].replace(/['"]/g,""));for(const U of V){const ee=new URL(U,`https://x${A}`).pathname;if(ie.has(ee))continue;const te=await fetch(ee);if(!te.ok)continue;const ne=new Uint8Array(await te.arrayBuffer());let le="";for(let he=0;he<ne.length;he++)le+=String.fromCharCode(ne[he]);a.push({path:ee.slice(1),content:btoa(le)}),ie.add(ee)}}g("Uploading assets to GitHub...");for(const A of a){const G=await fetch(`https://api.github.com/repos/${l}/${u}/contents/${A.path}`,{headers:I}),M=G.ok?await G.json():null,V=M==null?void 0:M.sha,U=await fetch(`https://api.github.com/repos/${l}/${u}/contents/${A.path}`,{method:"PUT",headers:I,body:JSON.stringify({message:`Deploy ${A.path}`,content:A.content,sha:V})});if(!U.ok){const ee=await U.text();throw new Error(`Failed to upload ${A.path} to GitHub (${U.status}): ${ee.slice(0,180)}`)}}g("Saving integration values into GitHub Secrets...");try{await _e(I,l,u,"BUILDER_GOOGLE_CLIENT_ID",R.googleClientId||""),await _e(I,l,u,"BUILDER_GOOGLE_ANALYTICS_ID",R.googleAnalyticsId||""),await _e(I,l,u,"BUILDER_RESEND_API_KEY",R.resendApiKey||""),await _e(I,l,u,"BUILDER_CALENDLY_URL",R.calendlyUrl||"")}catch(A){console.warn("Failed to sync one or more GitHub secrets:",A)}g("Activating GitHub Pages...");const X=await fetch(`https://api.github.com/repos/${l}/${u}/pages`,{method:"POST",headers:I,body:JSON.stringify({source:{branch:"main",path:"/"}})});if(X.ok||X.status===409){N("success");const A=W==="root"?`https://${l}.github.io/`:`https://${l}.github.io/${u}/`;g(`Successfully deployed to GitHub Pages! URL: ${A}`),await fetch("/api/profile/github-deploy",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${S}`},body:JSON.stringify({repoName:u,url:A})}).catch(G=>console.warn("Failed to record GitHub Pages deployment:",G)),await y(R,{target:"github",githubRepoName:u,githubPagesMode:W})}else throw new Error("Could not enable GitHub Pages automatically")}catch(F){N("error"),g(F instanceof Error?F.message:"GitHub deployment failed")}}}}function wt({profileConfig:p,handleConfigChange:P,user:R,username:y,isReserved:N,getAuthToken:g}){const[W,B]=d.useState("idle"),[j,_]=d.useState(""),[z,v]=d.useState("idle"),[Z,m]=d.useState(""),[L,E]=d.useState("idle"),[C,f]=d.useState(""),[O,w]=d.useState("idle"),[b,o]=d.useState("");return d.useEffect(()=>{w("idle"),o("")},[y,N,R==null?void 0:R.email]),{googleCheckStatus:W,setGoogleCheckStatus:B,googleCheckMsg:j,setGoogleCheckMsg:_,resendCheckStatus:z,setResendCheckStatus:v,resendCheckMsg:Z,setResendCheckMsg:m,calendlyCheckStatus:L,setCalendlyCheckStatus:E,calendlyCheckMsg:C,setCalendlyCheckMsg:f,internalCheckStatus:O,internalCheckMsg:b,handleCheckGoogleClientId:async()=>{const l=(p.googleClientId||"").trim();if(!l){B("invalid"),_("Please enter a Google Client ID first.");return}B("checking"),_("Validating Google Client ID format...");try{const u=await fetch("/api/integrations/google-check",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({clientId:l})}),k=await u.json();if(!u.ok||!k.valid){B("invalid"),_(k.error||"Invalid Google Client ID format.");return}B("valid"),_("Google Client ID looks valid.")}catch(u){B("invalid"),_(u instanceof Error?u.message:"Google Client ID validation failed.")}},handleCheckResendKey:async()=>{const l=(p.resendApiKey||"").trim();if(!l){v("invalid"),m("Please enter a Resend API key first.");return}v("checking"),m("Verifying Resend API key...");try{const u=await fetch("/api/integrations/resend-check",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:l})}),k=await u.json();if(!u.ok||!k.valid){v("invalid"),m(k.error||"Resend API key is invalid.");return}v("valid"),m(k.message||"Resend API key is valid.")}catch(u){v("invalid"),m(u instanceof Error?u.message:"Resend validation failed.")}},handleCheckCalendlyUrl:async()=>{const l=(p.calendlyUrl||"").trim();if(!l){E("invalid"),f("Please enter a Calendly URL first.");return}E("checking"),f("Validating Calendly URL...");try{const u=await fetch("/api/integrations/calendly-check",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({calendlyUrl:l})}),k=await u.json();if(!u.ok||!k.valid){E("invalid"),f(k.error||"Calendly URL is invalid.");return}E("valid"),f(k.message||"Calendly URL looks valid."),k.normalizedUrl&&k.normalizedUrl!==l&&P("calendlyUrl",k.normalizedUrl)}catch(u){E("invalid"),f(u instanceof Error?u.message:"Calendly URL validation failed.")}},handleCheckInternalSetup:async()=>{if(!R){w("error"),o("Please login first.");return}const l=(y||"").trim().toLowerCase();if(!l){w("error"),o("Please reserve a username first.");return}if(!/^[a-z0-9_-]{3,30}$/.test(l)){w("error"),o("Username must be 3-30 chars and contain only a-z, 0-9, _ or -.");return}if(!N){w("error"),o("Username is not reserved yet. Click Reserve first.");return}w("checking"),o("Checking internal hosting readiness...");try{const u=g();if(!u){w("error"),o("Missing auth token. Please sign out and sign in again.");return}if(!(await fetch("/api/profile/draft",{headers:{Authorization:`Bearer ${u}`}})).ok){w("error"),o("Could not verify draft access. Please re-login and retry.");return}w("ready"),o(`Ready to publish at ${window.location.origin}/p/${l}`)}catch(u){w("error"),o(u instanceof Error?u.message:"Internal setup check failed.")}}}}function kt({user:p,login:P,getAuthToken:R,setStatusMsg:y}){const[N,g]=d.useState(""),[W,B]=d.useState(!1),[j,_]=d.useState(()=>typeof window<"u"&&window.__PROFILE_CONFIG__?window.__PROFILE_CONFIG__:{...Oe}),[z,v]=d.useState("idle"),[Z,m]=d.useState(null),L=async(n,a)=>{if(!p)return;const r=R();if(!r)return;const s={...n||j};s.adminEmail=p.email;try{await fetch("/api/profile/draft",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({config:s,...a?{lastDeploy:a}:{}})})}catch(i){console.warn("Failed to persist builder draft:",i)}};d.useEffect(()=>{const{googleClientId:n,googleAnalyticsId:a,adminEmail:r,...s}=j;Object.assign(we,s)},[j]);const E=n=>{_(a=>{const r=a.layout||["profile","links","actions","techstack","github","portfolio"];let s;if(r.includes(n)){if(n==="profile")return a;s=r.filter(i=>i!==n)}else s=[...r,n];return{...a,layout:s}})},C=(n,a)=>{_(r=>{const s=[...r.layout||["profile","links","actions","techstack","github","portfolio"]],i=a==="up"?n-1:n+1;if(i<0||i>=s.length)return r;const D=s[n];return s[n]=s[i],s[i]=D,{...r,layout:s}})},f=(n,a)=>{m(a),n.dataTransfer.effectAllowed="move"},O=n=>{n.preventDefault()},w=(n,a)=>{n.preventDefault(),!(Z===null||Z===a)&&(_(r=>{const s=[...r.layout||["profile","links","actions","techstack","github","portfolio"]],i=s[Z];return s.splice(Z,1),s.splice(a,0,i),{...r,layout:s}}),m(null))},b=n=>{Ie("google_access_token"),Ze("github_access_token",n.token),n.mode!=="stats"&&P({name:n.name||"GitHub User",email:n.email,picture:n.picture||void 0,username:n.username||void 0}),_(a=>n.mode==="stats"?{...a,githubUsername:n.username||a.githubUsername}:{...a,name:n.name?{el:n.name,en:n.name}:a.name,profileImage:n.picture||a.profileImage,contactEmail:n.email||a.contactEmail,githubUsername:n.username||a.githubUsername}),n.username&&n.mode!=="stats"&&g(n.username.toLowerCase()),window.dispatchEvent(new Event("linkhubpage:github-connected"))};d.useEffect(()=>{const n=new URLSearchParams(window.location.hash.slice(1)),a=n.get("provider"),r=n.get("token"),s=n.get("email"),i=n.get("name"),D=n.get("picture"),x=n.get("username"),J=n.get("mode")||void 0;a==="github"&&r&&s&&(b({token:r,email:s,name:i||void 0,picture:D||void 0,username:x||void 0,mode:J}),window.history.replaceState({},document.title,window.location.pathname))},[P]),d.useEffect(()=>{const n=a=>{var r,s;a.origin===window.location.origin&&(((r=a.data)==null?void 0:r.type)!=="github_oauth_success"||!((s=a.data)!=null&&s.token)||b({token:a.data.token,email:a.data.email,name:a.data.name,picture:a.data.picture,username:a.data.username,mode:a.data.mode}))};return window.addEventListener("message",n),()=>window.removeEventListener("message",n)},[]),d.useEffect(()=>{const n=r=>{if(r)try{const{payload:s,ts:i}=JSON.parse(r);if(!(s!=null&&s.token)||Date.now()-i>12e4)return;b({token:s.token,email:s.email,name:s.name,picture:s.picture,username:s.username,mode:s.mode})}catch(s){console.warn("Failed to parse stored GitHub OAuth result:",s)}finally{Ie("github_oauth_result")}};n(xe("github_oauth_result"));const a=r=>{r.key==="github_oauth_result"&&r.newValue&&n(r.newValue)};return window.addEventListener("storage",a),()=>window.removeEventListener("storage",a)},[]);const o=(n,a)=>{_(r=>({...r,[n]:a}))};return{username:N,setUsername:g,isReserved:W,setIsReserved:B,profileConfig:j,setProfileConfig:_,persistBuilderDraft:L,reserveStatus:z,draggedIndex:Z,handleConfigChange:o,handleProfileImageFile:n=>{if(!n.type.startsWith("image/")){alert("Please choose an image file.");return}const a=URL.createObjectURL(n),r=new Image;r.onload=()=>{const i=Math.min(1,480/Math.max(r.width,r.height)),D=document.createElement("canvas");D.width=Math.round(r.width*i),D.height=Math.round(r.height*i);const x=D.getContext("2d");x&&(x.drawImage(r,0,0,D.width,D.height),o("profileImage",D.toDataURL("image/jpeg",.85))),URL.revokeObjectURL(a)},r.onerror=()=>{URL.revokeObjectURL(a),alert("Could not read that image.")},r.src=a},handleNestedConfigChange:(n,a,r)=>{_(s=>{const i=s[n]||{};return{...s,[n]:{...i,[a]:r}}})},handleLinkChange:(n,a,r)=>{_(s=>{const i=[...s.links];return i[n]={...i[n],[a]:r},{...s,links:i}})},getLinkPlatform:n=>{var a,r,s,i,D,x;return(a=n.icon)!=null&&a.includes("instagram")?"instagram":(r=n.icon)!=null&&r.includes("linkedin")?"linkedin":(s=n.icon)!=null&&s.includes("github")?"github":(i=n.icon)!=null&&i.includes("address-card")||n.action==="vcard"?"vcard":(D=n.icon)!=null&&D.includes("calendar")||n.action==="calendly"?"calendly":(x=n.icon)!=null&&x.includes("envelope")||n.action==="contact"?"email":"website"},handleLinkPlatformChange:(n,a)=>{_(r=>{const s=[...r.links],i=s[n];switch(a){case"instagram":s[n]={...i,icon:"fab fa-instagram",cssClass:"instagram",langKey:"instagram",tooltipKey:"tooltip-instagram",action:void 0,external:!0};break;case"linkedin":s[n]={...i,icon:"fab fa-linkedin",cssClass:"linkedin",langKey:"linkedin",tooltipKey:"tooltip-linkedin",action:void 0,external:!0};break;case"github":s[n]={...i,icon:"fab fa-github",cssClass:"github",langKey:"github",tooltipKey:"tooltip-github",action:void 0,external:!0};break;case"website":s[n]={...i,icon:"fa-solid fa-link",cssClass:"custom-link",langKey:"website",tooltipKey:"tooltip-website",action:void 0,external:!0};break;case"calendly":s[n]={...i,icon:"fa-solid fa-calendar",cssClass:"calendly",langKey:"book-meeting",tooltipKey:"tooltip-calendly",action:"calendly",external:!1};break;case"vcard":s[n]={...i,icon:"fa-solid fa-address-card",cssClass:"vcard",langKey:"save-contact",tooltipKey:"tooltip-vcard",action:"vcard",external:!1};break;case"email":s[n]={...i,icon:"fa-solid fa-envelope",cssClass:"email",langKey:"contact",tooltipKey:"tooltip-contact",action:"contact",external:!1};break}return{...r,links:s}})},addLink:()=>{_(n=>({...n,links:[...n.links,{url:"https://",icon:"fa-solid fa-link",cssClass:"custom-link",langKey:"website",tooltipKey:"tooltip-website",external:!0}]}))},deleteLink:n=>{_(a=>({...a,links:a.links.filter((r,s)=>s!==n)}))},toggleBlockVisibility:E,moveBlock:C,handleDragStart:f,handleDragOver:O,handleDrop:w,triggerGoogleLogin:()=>{var n,a,r;if(!((n=we.googleClientId)!=null&&n.trim())){alert("Google login is temporarily unavailable (missing client ID). Please reload the page and try again.");return}typeof window<"u"&&((r=(a=window.google)==null?void 0:a.accounts)!=null&&r.oauth2)&&window.google.accounts.oauth2.initTokenClient({client_id:we.googleClientId,scope:"openid profile email",callback:async i=>{if(i!=null&&i.access_token){Ie("github_access_token"),Ze("google_access_token",i.access_token);const D=await fetch("https://www.googleapis.com/oauth2/v3/userinfo",{headers:{Authorization:`Bearer ${i.access_token}`}});if(D.ok){const x=await D.json();if(P({name:x.name,email:x.email,picture:x.picture}),_(J=>({...J,name:x.name?{el:x.name,en:x.name}:J.name,profileImage:x.picture||J.profileImage,contactEmail:x.email||J.contactEmail})),x.email){const J=x.email.split("@")[0].toLowerCase().replace(/[^a-z0-9_-]/g,"");g(J)}}}}}).requestAccessToken()},triggerYoutubeConnect:()=>{var n,a,r;if(!((n=we.googleClientId)!=null&&n.trim())){alert("Google login is temporarily unavailable (missing client ID). Please reload the page and try again.");return}typeof window<"u"&&((r=(a=window.google)==null?void 0:a.accounts)!=null&&r.oauth2)&&window.google.accounts.oauth2.initTokenClient({client_id:we.googleClientId,scope:"https://www.googleapis.com/auth/youtube.readonly",callback:async i=>{var D,x;if(i!=null&&i.access_token)try{const J=await fetch("https://www.googleapis.com/youtube/v3/channels?part=id&mine=true",{headers:{Authorization:`Bearer ${i.access_token}`}});if(!J.ok){alert("Failed to connect YouTube. Please try again.");return}const X=(x=(D=(await J.json()).items)==null?void 0:D[0])==null?void 0:x.id;X?o("youtubeChannelId",X):alert("No YouTube channel found for this Google account.")}catch{alert("Failed to connect YouTube. Please try again.")}}}).requestAccessToken()},triggerGitHubLogin:n=>{const a=`/api/auth/github?redirect_uri=${encodeURIComponent(window.location.href)}${n?`&mode=${n}`:""}`;window.open(a,"github_connect","width=600,height=700")||(window.location.href=a)},handleReserveUsername:async n=>{if(n.preventDefault(),!!p){v("loading"),y("");try{const a=await fetch("/api/profile/reserve",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${R()}`},body:JSON.stringify({username:N})}),r=await a.json();a.ok?(v("success"),B(!0),y(`Username @${r.username} reserved successfully!`)):(v("error"),y(r.error||"Failed to reserve username"))}catch(a){v("error"),y(a instanceof Error?a.message:"Error occurred")}}}}}const se=[{id:"info",label:"Info",icon:"fa-solid fa-id-card"},{id:"social",label:"Social",icon:"fa-solid fa-share-nodes"},{id:"layout",label:"Layout",icon:"fa-solid fa-table-cells-large"},{id:"style",label:"Style",icon:"fa-solid fa-palette"},{id:"deploy",label:"Deploy",icon:"fa-solid fa-rocket"},{id:"integrations",label:"Integrations",icon:"fa-solid fa-plug"},{id:"publish",label:"Publish",icon:"fa-solid fa-circle-check"}],Ve=[{id:"internal",label:"Internal Hosting",icon:"fa-solid fa-server"},{id:"zip",label:"Download ZIP",icon:"fa-solid fa-box"},{id:"github",label:"GitHub Pages",icon:"fa-brands fa-github"},{id:"cloudflare",label:"Cloudflare Workers",icon:"fa-brands fa-cloudflare"}],Ge=[{id:"profile",name:"Profile Card Header",icon:"fa-solid fa-user-tie"},{id:"links",name:"Social Links Grid",icon:"fa-solid fa-link"},{id:"actions",name:"Action Buttons (QR/Contact)",icon:"fa-solid fa-cube"},{id:"techstack",name:"Tech Languages / Skills",icon:"fa-solid fa-code"},{id:"github",name:"GitHub Stats Cards",icon:"fa-brands fa-github"},{id:"portfolio",name:"Portfolio Projects Grid",icon:"fa-solid fa-folder-open"},{id:"youtube",name:"YouTube Stats Card",icon:"fa-brands fa-youtube"},{id:"youtube-videos",name:"YouTube Videos Grid",icon:"fa-brands fa-youtube"}],_t=()=>{var He,ze,Be,Je,Ke,Me,Ye,We,qe;const{user:p,login:P,logout:R}=ut();d.useEffect(()=>{pt("https://accounts.google.com/gsi/client")},[]);const y=()=>xe("google_access_token")||xe("github_access_token")||"",[N,g]=d.useState("info"),[W,B]=d.useState("idle"),[j,_]=d.useState("idle"),[z,v]=d.useState(""),[Z,m]=d.useState(""),[L,E]=d.useState("internal"),C=d.useRef(null),{username:f,setUsername:O,isReserved:w,setIsReserved:b,profileConfig:o,setProfileConfig:S,persistBuilderDraft:I,reserveStatus:F,draggedIndex:K,handleConfigChange:l,handleProfileImageFile:u,handleNestedConfigChange:k,handleLinkChange:re,getLinkPlatform:q,handleLinkPlatformChange:ye,addLink:pe,deleteLink:n,toggleBlockVisibility:a,moveBlock:r,handleDragStart:s,handleDragOver:i,handleDrop:D,triggerGoogleLogin:x,triggerYoutubeConnect:J,triggerGitHubLogin:ie,handleReserveUsername:X}=kt({user:p,login:P,getAuthToken:y,setStatusMsg:v}),{showCFDeployForm:A,setShowCFDeployForm:G,cfDomain:M,setCFDomain:V,cfDomainStatus:U,cfDomainMsg:ee,cfConnectStatus:te,handleCheckCloudflareDomain:ne,handleCFDirectDeploy:le,openCFConnectPopup:he,resetCloudflareConnection:Se}=yt({username:f,profileConfig:o,persistBuilderDraft:I,getAuthToken:y,setDeployStatus:_,setStatusMsg:v}),{githubPagesMode:ve,setGithubPagesMode:be,githubRepoName:me,setGithubRepoName:T,githubConnectStatus:Y,githubConnectMsg:oe,githubResolvedOwner:fe,githubResolvedRepo:ce,githubRepoExists:ae,handleCheckGitHubSetup:ke,handleDeployToGitHub:Re}=vt({username:f,user:p,profileConfig:o,persistBuilderDraft:I,setDeployStatus:_,setStatusMsg:v});d.useEffect(()=>{document.title="LinkHubPage Builder"},[]),d.useEffect(()=>{(async()=>{if(!p){typeof window<"u"&&!window.__PROFILE_CONFIG__&&S({...Oe}),O(""),b(!1);return}const h=c=>{c&&(E(c.target),c.target==="cloudflare"&&c.domain&&(V(c.domain),G(!0)),c.target==="github"&&(c.githubRepoName&&T(c.githubRepoName),c.githubPagesMode&&be(c.githubPagesMode)))};if(p.username){const c=p.username.toLowerCase();O(c),b(!0);const $=y();try{if($){const Q=await fetch("/api/profile/me",{headers:{Authorization:`Bearer ${$}`}});if(Q.ok){const de=await Q.json();S(de),h(de==null?void 0:de.lastDeploy);try{const ue=await fetch("/api/profile/draft",{headers:{Authorization:`Bearer ${$}`}});if(ue.ok){const Ee=await ue.json();h(Ee==null?void 0:Ee.lastDeploy)}}catch(ue){console.warn("Failed to load last deploy info:",ue)}return}}const H=await fetch(`/api/profile/${c}`);if(H.ok){const Q=await H.json();S(Q),h(Q==null?void 0:Q.lastDeploy);return}}catch(H){console.error("Failed to load profile for username:",c,H)}}try{const c=y();if(c){const $=await fetch("/api/profile/draft",{headers:{Authorization:`Bearer ${c}`}});if($.ok){const H=await $.json();if(H!=null&&H.config){S(H.config),H.config.adminEmail&&b(!!p.username),h(H==null?void 0:H.lastDeploy);return}}}}catch(c){console.warn("Failed to load builder draft:",c)}S(c=>c.adminEmail===""?{...Oe,adminEmail:p.email,name:p.name?{el:p.name,en:p.name}:{el:"",en:""},profileImage:p.picture||"",contactEmail:p.email,githubUsername:p.username||""}:c)})()},[p]);const{googleCheckStatus:je,setGoogleCheckStatus:et,googleCheckMsg:De,setGoogleCheckMsg:tt,resendCheckStatus:Ce,setResendCheckStatus:nt,resendCheckMsg:Te,setResendCheckMsg:at,calendlyCheckStatus:Ne,setCalendlyCheckStatus:ot,calendlyCheckMsg:Ue,setCalendlyCheckMsg:st,internalCheckStatus:ge,internalCheckMsg:$e,handleCheckGoogleClientId:rt,handleCheckResendKey:it,handleCheckCalendlyUrl:lt,handleCheckInternalSetup:ct}=wt({profileConfig:o,handleConfigChange:l,user:p,username:f,isReserved:w,getAuthToken:y}),dt=async()=>{if(!(!p||!w)){if(ge!=="ready"){B("error"),v('Please run "Check Internal Setup" before publishing.');return}B("loading"),v("");try{const t={...o};t.adminEmail=p.email,await I(t);const h=await fetch("/api/profile/save",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${y()}`},body:JSON.stringify({username:f,config:t})});if(h.ok)B("success"),v(`Profile live at: ${window.location.origin}/p/${f}`),await I(t,{target:"internal"});else{const c=await h.json();B("error"),v(c.error||"Failed to save profile")}}catch(t){B("error"),v(t instanceof Error?t.message:"Error saving profile")}}},Fe=L==="internal"?ge==="ready":L==="zip"?!0:L==="github"?Y==="connected":L==="cloudflare"?te==="connected":!1;return e.jsxs("div",{className:"min-h-screen bg-bg-primary text-text-primary flex flex-col md:flex-row",children:[e.jsxs("div",{className:"w-full md:w-1/2 p-6 border-r border-border-primary flex flex-col md:h-screen overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between mb-8 pb-4 border-b border-border-primary",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold tracking-tight text-accent",style:{fontFamily:"var(--font-display)"},children:"LinkHubPage Builder"}),e.jsx("p",{className:"text-xs text-text-secondary",style:{fontFamily:"var(--font-mono)"},children:"linkhubpage.com/builder"})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("button",{type:"button",onClick:()=>{window.location.href="/"},className:"px-3 py-1.5 rounded-lg text-xs font-bold border border-border-primary bg-bg-secondary hover:border-accent hover:text-accent transition cursor-pointer",children:"Back"}),p?e.jsxs("div",{className:"text-right",children:[e.jsxs("span",{className:"text-[10px] block font-bold text-text-secondary",children:["Logged in as ",p.name]}),e.jsx("button",{onClick:R,className:"text-[10px] text-red-400 font-bold hover:underline cursor-pointer",children:"Sign Out"})]}):e.jsx("div",{className:"flex gap-2",children:e.jsx("button",{onClick:x,className:"px-3 py-1.5 bg-accent/15 border border-accent/20 rounded-lg text-xs font-bold hover:bg-accent/30 cursor-pointer",children:"Google"})})]})]}),e.jsx("div",{className:"flex items-center gap-1 mb-6 overflow-x-auto scrollbar-none pb-1",children:se.map((t,h)=>{const c=se.findIndex(ue=>ue.id===N),$=se.findIndex(ue=>ue.id==="deploy"),H=h>c&&h>$&&!Fe,Q=N===t.id,de=h<c;return e.jsxs(ht.Fragment,{children:[e.jsxs("button",{type:"button",onClick:()=>{H||g(t.id)},disabled:H,"aria-current":Q?"true":void 0,title:t.label,className:`flex flex-shrink-0 flex-col items-center gap-1 px-1.5 py-1 rounded-lg text-[10px] font-bold transition cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 ${Q?"text-accent":de?"text-text-primary":"text-text-secondary"}`,children:[e.jsx("span",{className:`flex h-6 w-6 items-center justify-center rounded-full border text-[10px] ${Q?"border-accent bg-accent/10 text-accent":de?"border-emerald-400/50 bg-emerald-400/10 text-emerald-300":"border-border-primary text-text-secondary"}`,children:de?e.jsx("i",{className:"fa-solid fa-check text-[9px]","aria-hidden":"true"}):h+1}),e.jsx("span",{className:"hidden sm:block",children:t.label})]}),h<se.length-1&&e.jsx("div",{className:`h-px flex-1 min-w-[8px] ${h<c?"bg-emerald-400/50":"bg-border-primary"}`})]},t.id)})}),e.jsxs("div",{className:"flex-1 overflow-y-auto pr-1.5 space-y-6",children:[N==="info"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Display Name (Greek)"}),e.jsx("input",{type:"text",value:((He=o.name)==null?void 0:He.el)||"",onChange:t=>k("name","el",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Display Name (English)"}),e.jsx("input",{type:"text",value:((ze=o.name)==null?void 0:ze.en)||"",onChange:t=>k("name","en",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Bio (Greek)"}),e.jsx("input",{type:"text",value:((Be=o.bio)==null?void 0:Be.el)||"",onChange:t=>k("bio","el",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Bio (English)"}),e.jsx("input",{type:"text",value:((Je=o.bio)==null?void 0:Je.en)||"",onChange:t=>k("bio","en",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Location (Greek)"}),e.jsx("input",{type:"text",value:o.location.el,onChange:t=>k("location","el",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Location (English)"}),e.jsx("input",{type:"text",value:o.location.en,onChange:t=>k("location","en",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Skills Section Title (Greek)"}),e.jsx("input",{type:"text",value:((Ke=o.skillsTitle)==null?void 0:Ke.el)||"",onChange:t=>k("skillsTitle","el",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Skills Section Title (English)"}),e.jsx("input",{type:"text",value:((Me=o.skillsTitle)==null?void 0:Me.en)||"",onChange:t=>k("skillsTitle","en",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Portfolio Section Title (Greek)"}),e.jsx("input",{type:"text",value:((Ye=o.portfolioTitle)==null?void 0:Ye.el)||"",onChange:t=>k("portfolioTitle","el",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Portfolio Section Title (English)"}),e.jsx("input",{type:"text",value:((We=o.portfolioTitle)==null?void 0:We.en)||"",onChange:t=>k("portfolioTitle","en",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Profile Image"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"url",placeholder:"https://... or upload a file",value:o.profileImage,onChange:t=>l("profileImage",t.target.value),className:"flex-1 h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"}),e.jsx("button",{type:"button",onClick:()=>{var t;return(t=C.current)==null?void 0:t.click()},className:"shrink-0 h-11 px-4 bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold cursor-pointer",children:"Upload"}),e.jsx("input",{ref:C,type:"file",accept:"image/*",className:"hidden",onChange:t=>{var c;const h=(c=t.target.files)==null?void 0:c[0];h&&u(h),t.target.value=""}})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-6 pt-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",id:"showStatusBadge",checked:o.showStatusBadge,onChange:t=>l("showStatusBadge",t.target.checked),className:"w-4 h-4 rounded border-border-primary accent-accent cursor-pointer"}),e.jsx("label",{htmlFor:"showStatusBadge",className:"text-xs font-bold text-text-secondary cursor-pointer",children:"Show Status Beacon"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",id:"isAvailable",checked:o.isAvailable,onChange:t=>l("isAvailable",t.target.checked),className:"w-4 h-4 rounded border-border-primary accent-accent cursor-pointer"}),e.jsx("label",{htmlFor:"isAvailable",className:"text-xs font-bold text-text-secondary cursor-pointer",children:"Is Available (Green Beacon)"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",id:"showGreeting",checked:o.showGreeting!==!1,onChange:t=>l("showGreeting",t.target.checked),className:"w-4 h-4 rounded border-border-primary accent-accent cursor-pointer"}),e.jsx("label",{htmlFor:"showGreeting",className:"text-xs font-bold text-text-secondary cursor-pointer",children:'Show Greeting Text (e.g. "Good morning", "Καλημέρα")'})]})]}),e.jsxs("div",{className:"space-y-1.5 pt-2",children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase",children:"Available From / Since Date"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"text",placeholder:"e.g. 06/07/2026 or July 2026",value:o.availableFromDate||"",onChange:t=>l("availableFromDate",t.target.value),className:"flex-1 h-10 px-3 bg-bg-secondary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition"}),e.jsx("button",{type:"button",onClick:()=>{const t=new Date,h=String(t.getDate()).padStart(2,"0"),c=String(t.getMonth()+1).padStart(2,"0"),$=t.getFullYear();l("availableFromDate",`${h}/${c}/${$}`)},className:"px-3 bg-bg-secondary border border-border-primary hover:bg-bg-primary hover:border-accent rounded-lg text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1 text-text-secondary hover:text-text-primary",children:"📅 Today"})]}),e.jsx("p",{className:"text-[9px] text-text-secondary",children:"Specify the date from which your status is applicable. Click the button to automatically set today's date."})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase",children:"Include Dates (Always Available)"}),e.jsx("textarea",{value:o.statusIncludeDates||"",onChange:t=>l("statusIncludeDates",t.target.value),placeholder:"e.g. 10/07/2026 - 15/07/2026, 25/08/2026",className:"w-full min-h-[60px] p-3 bg-bg-secondary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition resize-y"}),e.jsx("p",{className:"text-[9px] text-text-secondary",children:"Specific dates or ranges (comma/line separated) when you are always available."})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase",children:"Exclude Dates (Always Unavailable)"}),e.jsx("textarea",{value:o.statusExcludeDates||"",onChange:t=>l("statusExcludeDates",t.target.value),placeholder:"e.g. 01/08/2026 - 07/08/2026",className:"w-full min-h-[60px] p-3 bg-bg-secondary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition resize-y"}),e.jsx("p",{className:"text-[9px] text-text-secondary",children:"Specific dates or ranges (comma/line separated) when you are unavailable (e.g. vacations)."})]})]}),N==="social"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center pb-2 border-b border-border-primary",children:[e.jsx("h3",{className:"text-sm font-bold",children:"Manage Link Items"}),e.jsx("button",{onClick:pe,className:"px-2 py-1 bg-accent rounded text-[10px] font-bold cursor-pointer",children:"+ Add"})]}),e.jsx("div",{className:"space-y-3",children:o.links.map((t,h)=>{var c,$;return e.jsxs("div",{className:"bg-bg-secondary border border-border-primary p-3 rounded-xl flex flex-col gap-2 relative",children:[e.jsx("button",{onClick:()=>n(h),className:"absolute top-2 right-2 text-[10px] text-red-400 font-bold hover:underline cursor-pointer",children:"Delete"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 pr-12",children:[e.jsx("input",{type:"text",placeholder:"Link URL",value:t.url,onChange:H=>re(h,"url",H.target.value),className:"bg-bg-primary border border-border-primary rounded px-2 py-1 text-xs focus:outline-none"}),e.jsxs("select",{value:q(t),onChange:H=>ye(h,H.target.value),className:"bg-bg-primary border border-border-primary rounded px-2 py-1 text-xs focus:outline-none",children:[e.jsx("option",{value:"instagram",children:"Instagram"}),e.jsx("option",{value:"linkedin",children:"LinkedIn"}),e.jsx("option",{value:"github",children:"GitHub"}),e.jsx("option",{value:"website",children:"Custom Link / Website"}),e.jsx("option",{value:"calendly",children:"Book Meeting (Calendly)"}),e.jsx("option",{value:"vcard",children:"Save Contact Card (vCard)"}),e.jsx("option",{value:"email",children:"Contact Form / Email"})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 pr-12",children:[e.jsx("input",{type:"text",placeholder:"Link Title (Greek) - optional",value:((c=t.title)==null?void 0:c.el)||"",onChange:H=>{const Q={...t.title||{el:"",en:""},el:H.target.value};re(h,"title",Q)},className:"bg-bg-primary border border-border-primary rounded px-2 py-1 text-xs focus:outline-none"}),e.jsx("input",{type:"text",placeholder:"Link Title (English) - optional",value:(($=t.title)==null?void 0:$.en)||"",onChange:H=>{const Q={...t.title||{el:"",en:""},en:H.target.value};re(h,"title",Q)},className:"bg-bg-primary border border-border-primary rounded px-2 py-1 text-xs focus:outline-none"})]})]},h)})})]}),N==="style"&&e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Default Theme"}),e.jsxs("select",{value:o.defaultTheme,onChange:t=>l("defaultTheme",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none",children:[e.jsx("option",{value:"dark",children:"Dark"}),e.jsx("option",{value:"light",children:"Light"}),e.jsx("option",{value:"neon",children:"Neon"}),e.jsx("option",{value:"cyberpunk",children:"Cyberpunk"}),e.jsx("option",{value:"sunset",children:"Sunset"}),e.jsx("option",{value:"midnight",children:"Midnight"}),e.jsx("option",{value:"dracula",children:"Dracula"})]})]})}),N==="layout"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"pb-2 border-b border-border-primary",children:[e.jsx("h3",{className:"text-sm font-bold",children:"Configure Profile Layout"}),e.jsx("p",{className:"text-[11px] text-text-secondary",children:"Drag and drop sections to rearrange them, or toggle their visibility switches."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-[10px] font-bold text-text-secondary uppercase",children:"Add Blocks"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:(()=>{const t=o.layout||mt,h=Ae.every($=>t.includes($)),c=Le.every($=>t.includes($));return e.jsxs(e.Fragment,{children:[e.jsxs("button",{type:"button",disabled:h,onClick:()=>l("layout",Xe(o.layout,Ae)),className:"p-3.5 bg-bg-secondary border border-border-primary hover:border-accent/40 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl text-left flex items-center gap-3 cursor-pointer transition",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-bg-primary flex items-center justify-center text-accent text-xs shrink-0",children:e.jsx("i",{className:"fa-brands fa-github"})}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("span",{className:"text-xs font-semibold block",children:"+ Add GitHub blocks"}),e.jsx("span",{className:"text-[10px] text-text-secondary block",children:h?"Already added":"Skills, GitHub stats, portfolio"})]})]}),e.jsxs("button",{type:"button",disabled:c,onClick:()=>l("layout",Xe(o.layout,Le)),className:"p-3.5 bg-bg-secondary border border-border-primary hover:border-accent/40 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl text-left flex items-center gap-3 cursor-pointer transition",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-bg-primary flex items-center justify-center text-accent text-xs shrink-0",children:e.jsx("i",{className:"fa-brands fa-youtube"})}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("span",{className:"text-xs font-semibold block",children:"+ Add YouTube blocks"}),e.jsx("span",{className:"text-[10px] text-text-secondary block",children:c?"Already added":"Subscriber count, views, latest videos"})]})]})]})})()})]}),Ae.some(t=>(o.layout||[]).includes(t))&&!o.githubUsername&&e.jsxs("div",{className:"p-3.5 bg-bg-secondary border border-amber-500/30 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold block",children:"Connect GitHub for real stats"}),e.jsx("span",{className:"text-[10px] text-text-secondary",children:"Your Skills/GitHub Stats/Portfolio blocks need a connected account: stats count your private repos too, portfolio only ever shows public ones."})]}),e.jsx("button",{type:"button",onClick:()=>ie("stats"),className:"shrink-0 px-4 py-2 bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold cursor-pointer",children:"Connect GitHub"})]}),Le.some(t=>(o.layout||[]).includes(t))&&e.jsxs("div",{className:"p-3.5 bg-bg-secondary border border-amber-500/30 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold block",children:o.youtubeChannelId?"YouTube channel connected":"Connect YouTube"}),e.jsx("span",{className:"text-[10px] text-text-secondary",children:o.youtubeChannelId?`Channel ID: ${o.youtubeChannelId}`:"Sign in with the Google account that owns your channel to pull subscriber count, views, and latest videos."})]}),e.jsx("button",{type:"button",onClick:J,className:"shrink-0 px-4 py-2 bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold cursor-pointer",children:o.youtubeChannelId?"Reconnect YouTube":"Connect YouTube"})]}),e.jsx("div",{className:"space-y-3",children:(o.layout||["profile","links","actions","techstack","github","portfolio"]).map((t,h)=>{const c=Ge.find($=>$.id===t);return c?e.jsxs("div",{draggable:!0,onDragStart:$=>s($,h),onDragOver:i,onDrop:$=>D($,h),className:`flex items-center justify-between p-3.5 bg-bg-secondary border rounded-xl cursor-grab active:cursor-grabbing hover:border-accent/45 transition duration-150 ${K===h?"opacity-40 border-accent/40":"border-border-primary"}`,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("i",{className:"fa-solid fa-bars text-text-secondary hover:text-text-primary"}),e.jsx("div",{className:"w-8 h-8 rounded-lg bg-bg-primary flex items-center justify-center text-accent text-xs",children:e.jsx("i",{className:c.icon})}),e.jsx("span",{className:"text-xs font-semibold",children:c.name})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",disabled:h===0,onClick:()=>r(h,"up"),className:"w-7 h-7 bg-bg-primary hover:bg-bg-secondary border border-border-primary disabled:opacity-30 rounded flex items-center justify-center cursor-pointer transition text-[10px]",children:e.jsx("i",{className:"fa-solid fa-chevron-up"})}),e.jsx("button",{type:"button",disabled:h===(o.layout||[]).length-1,onClick:()=>r(h,"down"),className:"w-7 h-7 bg-bg-primary hover:bg-bg-secondary border border-border-primary disabled:opacity-30 rounded flex items-center justify-center cursor-pointer transition text-[10px]",children:e.jsx("i",{className:"fa-solid fa-chevron-down"})}),t!=="profile"&&e.jsx("button",{type:"button",onClick:()=>a(t),className:"text-[10px] font-bold text-red-400 hover:underline px-2 py-1 cursor-pointer",children:"Hide"})]})]},t):null})}),Ge.filter(t=>!(o.layout||["profile","links","actions","techstack","github","portfolio"]).includes(t.id)).length>0&&e.jsxs("div",{className:"mt-6 pt-4 border-t border-border-primary",children:[e.jsx("h4",{className:"text-[10px] font-bold text-text-secondary uppercase mb-3",children:"Hidden Sections (Click to Show)"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:Ge.filter(t=>!(o.layout||["profile","links","actions","techstack","github","portfolio"]).includes(t.id)).map(t=>e.jsxs("button",{type:"button",onClick:()=>a(t.id),className:"p-3 bg-bg-secondary hover:bg-bg-secondary/80 border border-border-primary hover:border-accent/40 rounded-xl text-left flex items-center gap-3 cursor-pointer transition",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-bg-primary flex items-center justify-center text-text-secondary text-xs",children:e.jsx("i",{className:t.icon})}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs block font-semibold",children:t.name}),e.jsx("span",{className:"text-[9px] text-accent block font-medium",children:"+ Add to Profile"})]})]},t.id))})]})]}),N==="integrations"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"rounded-2xl border border-border-primary bg-bg-secondary/60 p-4 space-y-3",children:[e.jsx("h3",{className:"text-sm font-bold",children:"Integrations Setup Guide"}),e.jsx("p",{className:"text-[11px] text-text-secondary",children:"Add your own provider keys below. These values are used by your deployed page/profile and can be different per user profile."}),e.jsxs("p",{className:"text-[10px] text-text-secondary",children:["Security note: builder deployments use namespaced secret keys prefixed with ",e.jsx("span",{className:"text-text-primary",children:"BUILDER_"})," so they never collide with this site's own runtime secrets."]}),e.jsxs("div",{className:"text-[10px] flex flex-wrap gap-3",children:[e.jsx("a",{href:"https://console.cloud.google.com/apis/credentials",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Google Credentials"}),e.jsx("a",{href:"https://github.com/settings/developers",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"GitHub OAuth Apps"}),e.jsx("a",{href:"https://resend.com/api-keys",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Resend API Keys"}),e.jsx("a",{href:"https://analytics.google.com/",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Google Analytics"}),e.jsx("a",{href:"https://calendly.com/app/event_types/user/me",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Calendly Event Types"})]}),e.jsxs("ul",{className:"text-[10px] text-text-secondary space-y-1.5",children:[e.jsx("li",{children:"Google OAuth: Needed for Google Login flows in your profile and builder auth scenarios."}),e.jsx("li",{children:'GitHub OAuth: Needed for "Login with GitHub" and GitHub deployment workflows.'}),e.jsx("li",{children:"Resend: Needed for contact form email delivery from /api/send-email."}),e.jsx("li",{children:"Google Analytics: Optional tracking for visits and key events."}),e.jsx("li",{children:"Calendly: Needed for meeting booking links and popup scheduling flow."})]})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-text-secondary",children:"GitHub OAuth (Worker Environment)"}),e.jsx("p",{className:"text-[10px] text-text-secondary",children:"GitHub OAuth values are configured on Cloudflare Worker environment, not stored in this profile config."}),e.jsxs("ul",{className:"text-[9px] text-text-secondary space-y-1 pl-3 list-disc",children:[e.jsxs("li",{children:["Create an OAuth App in ",e.jsx("a",{href:"https://github.com/settings/developers",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"GitHub Developer Settings"}),"."]}),e.jsx("li",{children:"Homepage URL: https://linkhubpage.com"}),e.jsx("li",{children:"Authorization callback URL: https://linkhubpage.com/api/auth/github/callback"}),e.jsxs("li",{children:["Set ",e.jsx("span",{className:"text-text-primary",children:"GITHUB_CLIENT_ID"})," in Worker Variables and ",e.jsx("span",{className:"text-text-primary",children:"GITHUB_CLIENT_SECRET"})," in Worker Secrets."]}),e.jsx("li",{children:"When using GitHub Pages deploy, integration values are also synced to repository Actions Secrets through the GitHub API."}),e.jsx("li",{children:"If you logged in before this update, sign in with GitHub again to grant the latest permissions."}),e.jsxs("li",{children:["Open ",e.jsx("a",{href:"https://dash.cloudflare.com/",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Cloudflare Dashboard"})," -> Workers & Pages -> linkhubpage -> Settings -> Variables and Secrets."]})]})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-text-secondary",children:"Google Client ID (OAuth)"}),e.jsx("input",{type:"text",value:o.googleClientId||"",onChange:t=>{l("googleClientId",t.target.value),et("idle"),tt("")},placeholder:"e.g. 961938932307-s2ofhoqrm0qcjbrds8klgjjs...",className:"w-full h-10 px-3 bg-bg-secondary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition"}),e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:"text-[10px] text-text-secondary",children:"Configure a custom Google OAuth Client ID to support Google Login on your profile."}),e.jsx("button",{type:"button",onClick:rt,disabled:je==="checking",className:"px-3 h-8 bg-bg-primary border border-border-primary hover:bg-bg-secondary rounded-lg text-[10px] font-bold cursor-pointer disabled:opacity-50",children:je==="checking"?"Checking...":"Check"})]}),De&&e.jsx("p",{className:`text-[10px] ${je==="valid"?"text-emerald-300":je==="invalid"?"text-amber-300":"text-text-secondary"}`,children:De}),e.jsxs("ul",{className:"text-[9px] text-text-secondary space-y-1 pl-3 list-disc",children:[e.jsxs("li",{children:["Go to ",e.jsx("a",{href:"https://console.cloud.google.com/apis/credentials",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Google Cloud Console Credentials"})," -> create OAuth Client ID."]}),e.jsx("li",{children:"Create OAuth Client ID (Web application)."}),e.jsx("li",{children:"Add your domain in Authorized JavaScript origins (e.g. https://linkhubpage.com)."}),e.jsx("li",{children:"Copy the Client ID and paste it here."})]})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-text-secondary",children:"Resend API Key (Contact Email)"}),e.jsx("input",{type:"password",value:o.resendApiKey||"",onChange:t=>{l("resendApiKey",t.target.value),nt("idle"),at("")},placeholder:"re_xxxxxxxxxxxxxxxx",className:"w-full h-10 px-3 bg-bg-secondary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition"}),e.jsx("div",{className:"flex items-center justify-end",children:e.jsx("button",{type:"button",onClick:it,disabled:Ce==="checking",className:"px-3 h-8 bg-bg-primary border border-border-primary hover:bg-bg-secondary rounded-lg text-[10px] font-bold cursor-pointer disabled:opacity-50",children:Ce==="checking"?"Checking...":"Check"})}),e.jsx("p",{className:"text-[10px] text-text-secondary",children:"Provide your Resend API Key to receive emails from the contact form. (Kept secure on the server, not exposed to profile visitors)."}),Te&&e.jsx("p",{className:`text-[10px] ${Ce==="valid"?"text-emerald-300":Ce==="invalid"?"text-amber-300":"text-text-secondary"}`,children:Te}),e.jsxs("p",{className:"text-[9px] text-text-secondary",children:["During Cloudflare direct deploy, this key is sent as Worker Secret (",e.jsx("span",{className:"text-text-primary",children:"BUILDER_RESEND_API_KEY"}),") via API and is not embedded in public config files."]}),e.jsxs("ul",{className:"text-[9px] text-text-secondary space-y-1 pl-3 list-disc",children:[e.jsxs("li",{children:["Go to ",e.jsx("a",{href:"https://resend.com/api-keys",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Resend API Keys"})," -> create a new API key."]}),e.jsx("li",{children:"Set and verify your sending domain in Resend before production use."}),e.jsx("li",{children:"Use a valid sender (for example no-reply@yourdomain.com) that belongs to your verified domain."}),e.jsx("li",{children:"Paste the key in this field to enable contact form delivery."})]})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-text-secondary",children:"Google Analytics ID"}),e.jsx("input",{type:"text",value:o.googleAnalyticsId||"",onChange:t=>l("googleAnalyticsId",t.target.value),placeholder:"e.g. G-XXXXXXXXXX",className:"w-full h-10 px-3 bg-bg-secondary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition"}),e.jsx("p",{className:"text-[10px] text-text-secondary",children:"Track visitors on your profile using your Google Analytics ID."}),e.jsxs("ul",{className:"text-[9px] text-text-secondary space-y-1 pl-3 list-disc",children:[e.jsxs("li",{children:["Go to ",e.jsx("a",{href:"https://analytics.google.com/",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Google Analytics"})," -> Admin -> Data Streams."]}),e.jsx("li",{children:"Create/select a Web data stream for your domain."}),e.jsx("li",{children:"Copy the Measurement ID (format: G-XXXXXXXXXX)."}),e.jsx("li",{children:"Paste it here to activate analytics tracking."})]})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-text-secondary",children:"Calendly URL"}),e.jsx("input",{type:"url",value:o.calendlyUrl,onChange:t=>{l("calendlyUrl",t.target.value),ot("idle"),st("")},placeholder:"e.g. https://calendly.com/your-username/30min",className:"w-full h-10 px-3 bg-bg-secondary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition"}),e.jsx("div",{className:"flex items-center justify-end",children:e.jsx("button",{type:"button",onClick:lt,disabled:Ne==="checking",className:"px-3 h-8 bg-bg-primary border border-border-primary hover:bg-bg-secondary rounded-lg text-[10px] font-bold cursor-pointer disabled:opacity-50",children:Ne==="checking"?"Checking...":"Check"})}),e.jsx("p",{className:"text-[10px] text-text-secondary",children:'Configure the meeting booking URL used by the "Book Meeting" action.'}),Ue&&e.jsx("p",{className:`text-[10px] ${Ne==="valid"?"text-emerald-300":Ne==="invalid"?"text-amber-300":"text-text-secondary"}`,children:Ue}),e.jsxs("ul",{className:"text-[9px] text-text-secondary space-y-1 pl-3 list-disc",children:[e.jsxs("li",{children:["Create/select your event type from ",e.jsx("a",{href:"https://calendly.com/app/event_types/user/me",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Calendly Event Types"}),"."]}),e.jsx("li",{children:"Copy the share URL (for example https://calendly.com/your-username/30min)."}),e.jsx("li",{children:"Paste it here so visitors can book directly from your profile."})]})]})]}),N==="deploy"&&e.jsx("div",{className:"space-y-6",children:p?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("form",{onSubmit:X,className:"bg-bg-secondary border border-border-primary rounded-2xl p-4 space-y-3",children:[e.jsx("h3",{className:"text-sm font-bold",children:"Reserve Username Handle"}),e.jsx("p",{className:"text-[11px] text-text-secondary",children:"Determine your profile path handle (e.g. linkhubpage.com/p/handle)."}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"text",placeholder:"myhandle",value:f,disabled:w,onChange:t=>O(t.target.value.toLowerCase().replace(/[^a-z0-9_-]/g,"")),className:"flex-1 h-10 bg-bg-primary border border-border-primary rounded-xl px-3 text-xs focus:outline-none disabled:opacity-50",required:!0}),e.jsx("button",{type:"submit",disabled:w||F==="loading",className:"px-4 bg-accent text-white rounded-xl text-xs font-bold hover:bg-accent/80 disabled:opacity-50 cursor-pointer",children:"Reserve"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-sm font-bold",children:"Select Deployment Target"}),e.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4",children:Ve.map(t=>e.jsxs("button",{type:"button",onClick:()=>E(t.id),"aria-current":L===t.id?"true":void 0,className:`flex flex-col items-center gap-1.5 rounded-xl border p-3 text-center transition cursor-pointer ${L===t.id?"border-accent bg-accent/10 text-accent":"border-border-primary bg-bg-secondary text-text-secondary hover:border-accent/40 hover:text-text-primary"}`,children:[e.jsx("i",{className:`${t.icon} text-base`,"aria-hidden":"true"}),e.jsx("span",{className:"text-[10px] font-bold leading-tight",children:t.label})]},t.id))}),L==="internal"&&e.jsxs("div",{className:"bg-bg-secondary border border-border-primary rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold block",children:"Internal LinkHubPage Hosting"}),e.jsxs("span",{className:"text-[10px] text-text-secondary",children:["Deploy to linkhubpage.com/p/",f||"username"]}),$e&&e.jsx("p",{className:`text-[10px] mt-1 ${ge==="ready"?"text-emerald-300":ge==="error"?"text-amber-300":"text-text-secondary"}`,children:$e})]}),e.jsx("button",{type:"button",onClick:ct,disabled:ge==="checking",className:"w-full sm:w-auto px-4 py-2.5 bg-bg-primary border border-border-primary hover:bg-bg-secondary rounded-xl text-xs font-bold cursor-pointer disabled:opacity-50",children:ge==="checking"?"Checking...":"Check Internal Setup"})]}),L==="zip"&&e.jsxs("div",{className:"bg-bg-secondary border border-border-primary rounded-2xl p-4",children:[e.jsx("span",{className:"text-xs font-bold block",children:"Download ZIP Package"}),e.jsx("span",{className:"text-[10px] text-text-secondary",children:"Export profile static assets to host anywhere. No connection needed. Download happens on the Publish step."})]}),L==="github"&&e.jsxs("div",{className:"bg-bg-secondary border border-border-primary rounded-2xl p-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold block",children:"Deploy to GitHub Pages"}),e.jsx("span",{className:"text-[10px] text-text-secondary",children:"Choose deployment URL mode: root site or repo subpath"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[e.jsxs("label",{className:"flex items-start gap-2 p-3 border border-border-primary rounded-xl cursor-pointer bg-bg-primary/50",children:[e.jsx("input",{type:"radio",name:"github-pages-mode",checked:ve==="subpath",onChange:()=>be("subpath"),className:"mt-0.5"}),e.jsxs("span",{className:"text-[11px] text-text-secondary",children:[e.jsx("span",{className:"text-text-primary font-semibold block",children:"Subpath mode"}),"Deploy to ",e.jsx("span",{className:"text-text-primary",children:"https://user.github.io/repo/"})]})]}),e.jsxs("label",{className:"flex items-start gap-2 p-3 border border-border-primary rounded-xl cursor-pointer bg-bg-primary/50",children:[e.jsx("input",{type:"radio",name:"github-pages-mode",checked:ve==="root",onChange:()=>be("root"),className:"mt-0.5"}),e.jsxs("span",{className:"text-[11px] text-text-secondary",children:[e.jsx("span",{className:"text-text-primary font-semibold block",children:"Root mode"}),"Deploy to ",e.jsx("span",{className:"text-text-primary",children:"https://user.github.io/"})," (no trailing repo path)"]})]})]}),ve==="subpath"?e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"text-[10px] font-bold text-text-secondary uppercase",children:"Repository Name"}),e.jsx("input",{type:"text",value:me,onChange:t=>T(t.target.value.toLowerCase().replace(/[^a-z0-9_.-]/g,"")),placeholder:"linkhubpage-profile",className:"w-full h-9 px-3 bg-bg-primary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition"})]}):e.jsxs("p",{className:"text-[10px] text-amber-300",children:["Root mode uses repo name ",e.jsx("span",{className:"text-text-primary font-semibold",children:"<your-github-username>.github.io"}),". If it already exists, deployment updates that site."]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between",children:[xe("github_access_token")?e.jsx("button",{type:"button",onClick:ke,disabled:Y==="checking",className:"w-full sm:w-auto px-4 py-2.5 bg-bg-primary border border-border-primary hover:bg-bg-secondary rounded-xl text-xs font-bold cursor-pointer disabled:opacity-50",children:Y==="checking"?"Checking GitHub...":"Check GitHub Setup"}):e.jsx("button",{type:"button",onClick:()=>ie(),className:"w-full sm:w-auto px-4 py-2.5 bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold cursor-pointer",children:"Connect GitHub"}),fe&&ce&&e.jsxs("span",{className:"text-[10px] text-text-secondary",children:["Target: ",e.jsxs("span",{className:"text-text-primary font-semibold",children:[fe,"/",ce]}),ae===!0?" (exists)":ae===!1?" (will be created)":""]})]}),oe&&e.jsx("p",{className:`text-[10px] ${Y==="connected"?"text-emerald-300":Y==="error"?"text-amber-300":"text-text-secondary"}`,children:oe})]}),L==="cloudflare"&&e.jsxs("div",{className:"bg-bg-secondary border border-border-primary rounded-2xl p-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold block",children:"Cloudflare Worker Deployment"}),e.jsx("span",{className:"text-[10px] text-text-secondary",children:"Host your profile on your own Cloudflare account (like our setup, without the builder)"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[e.jsx("button",{type:"button",onClick:()=>xt(f||"custom",o),className:"px-3 py-2 bg-bg-primary border border-border-primary hover:bg-bg-secondary rounded-xl text-xs font-bold transition cursor-pointer text-center text-text-secondary hover:text-text-primary",children:"📦 Download Worker ZIP"}),e.jsx("button",{type:"button",onClick:()=>G(t=>!t),className:`px-3 py-2 border rounded-xl text-xs font-bold transition cursor-pointer text-center ${A?"bg-accent text-white border-accent":"bg-bg-primary border-border-primary hover:bg-bg-secondary text-text-primary"}`,children:"🚀 Deploy Directly via API"})]}),A&&e.jsxs("div",{className:"pt-4 border-t border-border-primary space-y-3",children:[e.jsxs("div",{className:"rounded-xl border border-border-primary bg-bg-primary/50 p-3 space-y-2",children:[e.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wider text-text-secondary",children:"How this works"}),e.jsxs("ul",{className:"text-[10px] text-text-secondary space-y-1",children:[e.jsx("li",{children:"1. Enter your domain (or subdomain) and check it’s on Cloudflare."}),e.jsx("li",{children:"2. A window opens to connect your Cloudflare account, nothing else to configure."}),e.jsx("li",{children:"3. Once connected, go to the Publish step to deploy."})]})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"text-[10px] font-bold text-text-secondary uppercase",children:"Domain to Deploy"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"text",value:M,onChange:t=>{V(t.target.value),Se()},placeholder:"e.g. profile.yourdomain.com",className:"flex-1 h-9 px-3 bg-bg-primary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition",required:A}),e.jsx("button",{type:"button",onClick:ne,disabled:U==="checking",className:"px-3 h-9 bg-bg-primary border border-border-primary hover:bg-bg-secondary rounded-lg text-xs font-bold cursor-pointer disabled:opacity-50",children:U==="checking"?"Checking...":"Check Domain"})]}),ee&&e.jsx("p",{className:`text-[10px] ${U==="valid"?"text-emerald-300":U==="invalid"?"text-amber-300":"text-text-secondary"}`,children:ee}),U==="valid"&&te!=="connected"&&e.jsx("button",{type:"button",onClick:he,disabled:te==="connecting",className:"text-[10px] font-bold text-accent hover:underline cursor-pointer disabled:opacity-50 disabled:no-underline disabled:cursor-default",children:te==="connecting"?"Connecting to Cloudflare...":"Retry Cloudflare login"})]})]})]})]})]}):e.jsxs("div",{className:"bg-bg-secondary border border-border-primary rounded-2xl p-6 text-center",children:[e.jsx("span",{className:"text-xl block mb-2",children:"🔒 Account Required"}),e.jsx("p",{className:"text-xs text-text-secondary mb-4",children:"Please log in with Google to access hosting and deployment options."}),e.jsx("button",{onClick:x,className:"px-4 py-2 bg-accent/15 border border-accent/20 rounded-lg text-xs font-bold hover:bg-accent/30 cursor-pointer",children:"Login with Google"})]})}),N==="publish"&&e.jsx("div",{className:"space-y-6",children:p?e.jsxs("div",{className:"bg-bg-secondary border border-border-primary rounded-2xl p-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold block",children:"Ready to Publish"}),e.jsxs("span",{className:"text-[10px] text-text-secondary",children:["Target: ",e.jsx("span",{className:"text-text-primary font-semibold",children:(qe=Ve.find(t=>t.id===L))==null?void 0:qe.label})]})]}),L==="internal"&&e.jsx("button",{type:"button",onClick:dt,disabled:!w||W==="loading"||ge!=="ready",className:"w-full px-4 py-2.5 bg-accent hover:bg-accent/80 disabled:opacity-50 text-white rounded-xl text-xs font-bold cursor-pointer",children:W==="loading"?"Publishing...":"Publish Profile"}),L==="zip"&&e.jsx("button",{type:"button",onClick:()=>{bt(f||"custom",o),I(o,{target:"zip"})},className:"w-full px-4 py-2.5 bg-accent hover:bg-accent/80 text-white rounded-xl text-xs font-bold cursor-pointer",children:"Download ZIP"}),L==="github"&&e.jsx("button",{type:"button",onClick:Re,disabled:j==="loading"||Y!=="connected",className:"w-full px-4 py-2.5 bg-accent hover:bg-accent/80 disabled:opacity-50 text-white rounded-xl text-xs font-bold cursor-pointer",children:j==="loading"?"Publishing...":"Deploy to GitHub"}),L==="cloudflare"&&e.jsx("button",{type:"button",onClick:le,disabled:j==="loading"||te!=="connected",className:"w-full px-4 py-2.5 bg-accent hover:bg-accent/80 disabled:opacity-50 text-white rounded-xl text-xs font-bold cursor-pointer",children:j==="loading"?"Publishing...":"Start Cloudflare Deployment"})]}):e.jsxs("div",{className:"bg-bg-secondary border border-border-primary rounded-2xl p-6 text-center",children:[e.jsx("span",{className:"text-xl block mb-2",children:"🔒 Account Required"}),e.jsx("p",{className:"text-xs text-text-secondary mb-4",children:"Please log in with Google to publish."}),e.jsx("button",{onClick:x,className:"px-4 py-2 bg-accent/15 border border-accent/20 rounded-lg text-xs font-bold hover:bg-accent/30 cursor-pointer",children:"Login with Google"})]})}),z&&(()=>{const t=[...z.matchAll(/https?:\/\/\S+/g)].map(c=>c[0].replace(/[.,;]+$/,"")),h=t.reduce((c,$)=>c.replace($,""),z).replace(/\s{2,}/g," ").trim();return e.jsxs("div",{className:"p-3 bg-bg-secondary border border-border-primary rounded-xl text-xs text-center font-semibold space-y-2",children:[h&&e.jsx("div",{children:h}),t.map(c=>e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsx("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"text-accent underline break-all font-normal",children:c}),e.jsx("button",{type:"button",onClick:()=>{navigator.clipboard.writeText(c),m(c),setTimeout(()=>m(""),2e3)},className:"shrink-0 px-2 py-1 border border-border-primary hover:border-accent rounded-lg text-[10px] font-bold text-text-secondary hover:text-text-primary transition cursor-pointer",children:Z===c?"✓ Copied":"📋 Copy"})]},c))]})})(),e.jsxs("div",{className:"flex items-center justify-between gap-3 pt-2",children:[e.jsx("button",{type:"button",onClick:()=>{const t=se.findIndex(h=>h.id===N);t>0&&g(se[t-1].id)},disabled:se.findIndex(t=>t.id===N)===0,className:"px-4 py-2 rounded-xl text-xs font-bold border border-border-primary bg-bg-secondary hover:border-accent hover:text-accent transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed",children:"Back"}),e.jsx("button",{type:"button",onClick:()=>{const t=se.findIndex(h=>h.id===N);t<se.length-1&&g(se[t+1].id)},disabled:N===se[se.length-1].id||N==="deploy"&&!Fe,className:"px-4 py-2 rounded-xl text-xs font-bold bg-accent hover:bg-accent/80 text-white transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed",children:"Next"})]})]})]}),e.jsxs("div",{className:"w-full md:w-1/2 bg-zinc-950 flex items-center justify-center p-6 min-h-[500px] md:min-h-screen relative",children:[e.jsx(ft,{}),e.jsxs("div",{"data-theme":o.defaultTheme,className:"w-[340px] h-[680px] bg-bg-primary text-text-primary border-[8px] border-zinc-800 rounded-[48px] shadow-2xl relative overflow-y-auto overflow-x-hidden flex flex-col p-4 scrollbar-none z-10 transition-colors duration-300",children:[e.jsxs("div",{className:"w-32 h-5 bg-zinc-800 rounded-b-2xl absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1.5 z-20",children:[e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-zinc-900"}),e.jsx("div",{className:"w-8 h-1 rounded bg-zinc-900"})]}),e.jsx("div",{className:"flex-1 mt-6 flex flex-col h-full overflow-y-auto",children:e.jsx(gt,{isPreview:!0,config:o})})]})]})]})};export{_t as Builder};
