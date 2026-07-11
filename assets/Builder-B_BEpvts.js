import{r as u,g as ve,D as Ge,C as we,s as qe,a as Ze,u as ut,l as pt,j as e,R as ht,b as ft,G as Ae,Y as Ie,c as Xe,d as mt}from"./index-DahQZi5E.js";import{TemplateRenderer as gt}from"./index-B_QuxKOw.js";import{u as _e}from"./githubSecrets-BMYCCUSU.js";const Qe=()=>new Promise((c,L)=>{if(window.JSZip){c(window.JSZip);return}const C=document.createElement("script");C.src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js",C.onload=()=>c(window.JSZip),C.onerror=()=>L(new Error("Failed to load JSZip CDN")),document.head.appendChild(C)}),bt=async(c,L)=>{try{const C=await Qe(),b=new C;let f=await(await fetch("/")).text();f=f.replace("</head>",`<script>
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
    <\/script></head>`),f=f.replaceAll('src="/assets/','src="./assets/'),f=f.replaceAll('href="/assets/','href="./assets/'),f=f.replaceAll('href="/vendor/','href="./vendor/'),b.file("index.html",f),b.file("config.json",JSON.stringify(L,null,2));const B=Array.from(document.querySelectorAll('script[type="module"]')),N=Array.from(document.querySelectorAll('link[rel="stylesheet"]'));for(const _ of N){const g=_.getAttribute("href");if(g&&g.startsWith("/assets/")){const O=await fetch(g);if(O.ok){const v=await O.text();b.file(g.substring(1),v)}}}const S=B.map(_=>_.getAttribute("src")).filter(_=>!!_&&_.startsWith("/assets/")),z=new Set;for(let _=0;_<S.length;_++){const g=S[_];if(z.has(g))continue;const O=await fetch(g);if(!O.ok)continue;const v=await O.text();b.file(g.substring(1),v),z.add(g);const y=[...v.matchAll(/from"\.\/([a-zA-Z0-9_.-]+\.js)"|import\("\.\/([a-zA-Z0-9_.-]+\.js)"\)/g)].map(s=>s[1]||s[2]);for(const s of y){const R=`/assets/${s}`;!z.has(R)&&!S.includes(R)&&S.push(R)}}const w=[...f.matchAll(/href="(?:\.\/)?(vendor\/[^"]+\.css)"/g)].map(_=>_[1]),Z=[...new Set(w)],m=new Set;for(const _ of Z){if(m.has(_))continue;const g=await fetch(`/${_}`);if(!g.ok)continue;const O=await g.text();b.file(_,O),m.add(_);const v=[...O.matchAll(/url\(([^)]+)\)/g)].map(y=>y[1].replace(/['"]/g,""));for(const y of v){const s=new URL(y,`https://x/${_}`).pathname.slice(1);if(m.has(s))continue;const R=await fetch(`/${s}`);if(!R.ok)continue;const E=new Uint8Array(await R.arrayBuffer());b.file(s,E),m.add(s)}}const P=await b.generateAsync({type:"blob"}),I=document.createElement("a");I.href=URL.createObjectURL(P),I.download=`linkhubpage-${c}-profile.zip`,document.body.appendChild(I),I.click(),document.body.removeChild(I)}catch(C){console.error("ZIP packaging failed:",C),alert("Failed to generate ZIP export package.")}},xt=async(c,L)=>{try{const C=await Qe(),b=new C;b.file("wrangler.toml",`name = "linkhubpage-profile-\${username || 'custom'}"
main = "src/worker.ts"
compatibility_date = "2024-01-01"

[assets]
directory = "./public"

[vars]
GOOGLE_CLIENT_ID = "\${profileConfig.googleClientId || ''}"
GOOGLE_ANALYTICS_ID = "\${profileConfig.googleAnalyticsId || ''}"
RESEND_API_KEY = "\${profileConfig.resendApiKey || ''}"
`);const f={name:"linkhubpage-profile-${username || 'custom'}",version:"1.0.0",devDependencies:{wrangler:"^3.0.0"},scripts:{deploy:"wrangler deploy"}};b.file("package.json",JSON.stringify(f,null,2));const W=`export interface Env {
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
        const targetEmail = recipientEmail || "${L.contactEmail||""}";

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
`;b.file("src/worker.ts",W);let N=await(await fetch("/")).text();N=N.replace("</head>",`<script>
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
    <\/script></head>`),N=N.replaceAll('src="/assets/','src="./assets/'),N=N.replaceAll('href="/assets/','href="./assets/'),N=N.replaceAll('href="/vendor/','href="./vendor/'),b.file("public/index.html",N);const z={...L};delete z.resendApiKey,b.file("public/config.json",JSON.stringify(z,null,2));const w=Array.from(document.querySelectorAll('script[type="module"]')),Z=Array.from(document.querySelectorAll('link[rel="stylesheet"]'));for(const y of Z){const s=y.getAttribute("href");if(s&&s.startsWith("/assets/")){const R=await fetch(s);if(R.ok){const E=await R.text();b.file("public/"+s.substring(1),E)}}}const m=w.map(y=>y.getAttribute("src")).filter(y=>!!y&&y.startsWith("/assets/")),P=new Set;for(let y=0;y<m.length;y++){const s=m[y];if(P.has(s))continue;const R=await fetch(s);if(!R.ok)continue;const E=await R.text();b.file("public/"+s.substring(1),E),P.add(s);const $=[...E.matchAll(/from"\.\/([a-zA-Z0-9_.-]+\.js)"|import\("\.\/([a-zA-Z0-9_.-]+\.js)"\)/g)].map(K=>K[1]||K[2]);for(const K of $){const l=`/assets/${K}`;!P.has(l)&&!m.includes(l)&&m.push(l)}}const I=[...N.matchAll(/href="(?:\.\/)?(vendor\/[^"]+\.css)"/g)].map(y=>y[1]),_=[...new Set(I)],g=new Set;for(const y of _){if(g.has(y))continue;const s=await fetch(`/${y}`);if(!s.ok)continue;const R=await s.text();b.file("public/"+y,R),g.add(y);const E=[...R.matchAll(/url\(([^)]+)\)/g)].map($=>$[1].replace(/['"]/g,""));for(const $ of E){const K=new URL($,`https://x/${y}`).pathname.slice(1);if(g.has(K))continue;const l=await fetch(`/${K}`);if(!l.ok)continue;const p=new Uint8Array(await l.arrayBuffer());b.file("public/"+K,p),g.add(K)}}const O=await b.generateAsync({type:"blob"}),v=document.createElement("a");v.href=URL.createObjectURL(O),v.download=`linkhubpage-${c}-cloudflare-worker.zip`,document.body.appendChild(v),v.click(),document.body.removeChild(v)}catch(C){console.error("Worker ZIP packaging failed:",C),alert("Failed to generate Cloudflare Worker export package.")}},Le=c=>c.trim().toLowerCase().replace(/^https?:\/\//,"").replace(/\/.*$/,"").replace(/\.$/,"");function yt({username:c,profileConfig:L,persistBuilderDraft:C,getAuthToken:b,setDeployStatus:x,setStatusMsg:f}){const[W,B]=u.useState(!1),[N,S]=u.useState(""),[z,w]=u.useState("idle"),[Z,m]=u.useState(""),[P,I]=u.useState("idle"),[_,g]=u.useState(""),[O,v]=u.useState(""),[y,s]=u.useState(()=>`linkhubpage-profile-${c||"custom"}`),[R,E]=u.useState(""),[$,K]=u.useState(""),l=u.useRef(!1),p=u.useRef(!1),j=u.useRef(!1);u.useEffect(()=>{s(`linkhubpage-profile-${c||"custom"}`)},[c]);const re=async()=>{const a=Le(N);if(!a){w("invalid"),m("Please enter a valid domain first.");return}w("checking"),m("Checking whether the domain is using Cloudflare nameservers..."),I("idle"),g(""),E("");try{const r=await fetch("/api/cloudflare/domain-check",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({domain:a})}),o=await r.json();if(!r.ok){w("invalid"),m(o.error||"Domain check failed.");return}o.isCloudflare?(w("valid"),m(`Domain ${o.domain} is on Cloudflare. Opening Cloudflare login...`),$.trim()||K(`${o.domain}/*`)):(w("invalid"),m(`Domain ${o.domain} is not currently on Cloudflare nameservers.`))}catch(r){w("invalid"),m(r instanceof Error?r.message:"Unable to verify domain.")}},q=async()=>{const a=Le(N);if(z!=="valid"){I("error"),m("Please verify your domain on Cloudflare before login.");return}const r=O.trim();if(!r){I("error"),m("Please connect via the Cloudflare popup first.");return}I("connecting"),m("Connecting to Cloudflare and loading your account + zone details...");try{const o=await fetch("/api/cloudflare/connect",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({domain:a,apiToken:r})}),i=await o.json();if(!o.ok){I("error"),m(i.error||"Cloudflare login/connect failed.");return}g(i.accountId||""),E(i.zoneId||""),K(i.routePattern||`${a}/*`),I("connected"),m(`Connected to Cloudflare successfully. Zone: ${i.zoneName||a}`)}catch(o){I("error"),m(o instanceof Error?o.message:"Cloudflare login/connect failed.")}},xe=async()=>{var o,i,F;const a=Le(N);if(!a){alert("Please provide the domain you want to deploy to.");return}if(z!=="valid"){alert("Please verify that the domain is on Cloudflare first.");return}if(P!=="connected"){alert("Please login/connect Cloudflare to auto-load account and zone details.");return}if(!_||!O||!y||!R){alert("Missing Cloudflare deployment details. Please reconnect Cloudflare and try again.");return}const r=($||`${a}/*`).trim();x("loading"),f("Compiling your profile assets into a single-file Worker...");try{await C();const k={};(o=L.resendApiKey)!=null&&o.trim()&&(k.BUILDER_RESEND_API_KEY=L.resendApiKey.trim()),(i=L.googleClientId)!=null&&i.trim()&&(k.BUILDER_GOOGLE_CLIENT_ID=L.googleClientId.trim()),(F=L.googleAnalyticsId)!=null&&F.trim()&&(k.BUILDER_GOOGLE_ANALYTICS_ID=L.googleAnalyticsId.trim()),k.CLOUDFLARE_API_TOKEN=O.trim(),k.CLOUDFLARE_ACCOUNT_ID=_.trim(),k.CLOUDFLARE_SCRIPT_NAME=y.trim();const M={...L};delete M.resendApiKey,delete M.googleClientId,delete M.googleAnalyticsId;const ie=await fetch("/");if(!ie.ok)throw new Error("Failed to fetch HTML template.");let X=await ie.text();X=X.replace("</head>",`<script>
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
      <\/script></head>`),X=X.replaceAll('src="/assets/','src="./assets/'),X=X.replaceAll('href="/assets/','href="./assets/');const G={},J={},V=[...X.matchAll(/(?:src|href)="\.\/assets\/([^"]+)"/g)].map(D=>D[1]),T=V.filter(D=>D.endsWith(".js")),ee=V.filter(D=>D.endsWith(".css"));for(const D of ee){if(J[D]!==void 0)continue;const Y=await fetch(`/assets/${D}`);Y.ok&&(J[D]=await Y.text())}for(let D=0;D<T.length;D++){const Y=T[D];if(G[Y]!==void 0)continue;const oe=await fetch(`/assets/${Y}`);if(!oe.ok)continue;const me=await oe.text();G[Y]=me;const ce=[...me.matchAll(/from"\.\/([a-zA-Z0-9_.-]+\.js)"|import\("\.\/([a-zA-Z0-9_.-]+\.js)"\)/g)].map(ae=>ae[1]||ae[2]);for(const ae of ce)G[ae]===void 0&&!T.includes(ae)&&T.push(ae)}const te={},ne={},le=[...X.matchAll(/href="(\/vendor\/[^"]+\.css)"/g)].map(D=>D[1]),he=[...new Set(le)],Se=D=>{let Y="";for(let oe=0;oe<D.length;oe++)Y+=String.fromCharCode(D[oe]);return btoa(Y)};for(const D of he){if(te[D]!==void 0)continue;const Y=await fetch(D);if(!Y.ok)continue;const oe=await Y.text();te[D]=oe;const me=[...oe.matchAll(/url\(([^)]+)\)/g)].map(ce=>ce[1].replace(/['"]/g,""));for(const ce of me){const ae=new URL(ce,`https://x${D}`).pathname;if(ne[ae]!==void 0)continue;const ke=await fetch(ae);if(!ke.ok)continue;const Re=await ke.arrayBuffer();ne[ae]=Se(new Uint8Array(Re))}}const ye=`const htmlContent = ${JSON.stringify(X)};
const cssFiles = ${JSON.stringify(J)};
const jsFiles = ${JSON.stringify(G)};
const vendorText = ${JSON.stringify(te)};
const vendorBinary = ${JSON.stringify(ne)};
const configData = ${JSON.stringify(M)};

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
};`;f("Uploading script and routing to Cloudflare...");const be=await fetch("/api/deploy/cloudflare",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${b()}`},body:JSON.stringify({accountId:_.trim(),apiToken:O.trim(),scriptName:y.trim(),scriptContent:ye,secrets:k,zoneId:R.trim(),routePattern:r})}),fe=await be.json();be.ok?(x("success"),fe.urls&&Array.isArray(fe.urls)?f(`Successfully deployed to Cloudflare Workers! URLs: ${fe.urls.join(" | ")}`):f(`Successfully deployed to Cloudflare Workers! URL: ${fe.url}`),await C(L,{target:"cloudflare",domain:a})):(x("error"),f(fe.error||"Cloudflare deployment failed."))}catch(k){console.error(k),x("error"),f(k instanceof Error?k.message:"Deployment process error.")}},pe=()=>{if(p.current=!1,j.current=!1,!window.open("/cf-connect-popup.html","cf_connect","width=480,height=700")){I("error"),m("Popup blocked. Please allow popups for this site and try again.");return}l.current=!0},n=()=>{w("idle"),I("idle"),v(""),l.current=!1,p.current=!1,j.current=!1};return u.useEffect(()=>{const a=r=>{var o,i;r.origin===window.location.origin&&(((o=r.data)==null?void 0:o.type)!=="cf_token"||!((i=r.data)!=null&&i.token)||v(r.data.token))};return window.addEventListener("message",a),()=>window.removeEventListener("message",a)},[]),u.useEffect(()=>{z==="valid"&&!l.current&&pe()},[z]),u.useEffect(()=>{O&&!p.current&&(p.current=!0,q())},[O]),{showCFDeployForm:W,setShowCFDeployForm:B,cfDomain:N,setCFDomain:S,cfDomainStatus:z,cfDomainMsg:Z,cfConnectStatus:P,handleCheckCloudflareDomain:re,handleCFDirectDeploy:xe,openCFConnectPopup:pe,resetCloudflareConnection:n}}const wt=3e3,vt=40;async function kt(c,L,C){for(let b=0;b<vt;b++){await new Promise(x=>setTimeout(x,wt));try{const x=await fetch(`https://api.github.com/repos/${L}/${C}/pages/builds/latest`,{headers:c});if(x.ok){const f=await x.json();if(f.status==="built")return"built";if(f.status==="errored")return"errored"}}catch{}}return"timeout"}function jt({username:c,user:L,profileConfig:C,persistBuilderDraft:b,setDeployStatus:x,setStatusMsg:f}){const[W,B]=u.useState("subpath"),[N,S]=u.useState(()=>`linkhubpage-profile-${c||"page"}`),[z,w]=u.useState("idle"),[Z,m]=u.useState(""),[P,I]=u.useState(""),[_,g]=u.useState(""),[O,v]=u.useState(null);return u.useEffect(()=>{S(`linkhubpage-profile-${c||"page"}`)},[c]),u.useEffect(()=>{w("idle"),m(""),I(""),g(""),v(null)},[W,N,L==null?void 0:L.email]),{githubPagesMode:W,setGithubPagesMode:B,githubRepoName:N,setGithubRepoName:S,githubConnectStatus:z,githubConnectMsg:Z,githubResolvedOwner:P,githubResolvedRepo:_,githubRepoExists:O,handleCheckGitHubSetup:async()=>{const R=ve("github_access_token");if(!R){w("error"),m("Please log in with GitHub first.");return}w("checking"),m("Checking GitHub account and repository readiness...");const E={Authorization:`Bearer ${R}`,Accept:"application/vnd.github+json"};try{const $=await fetch("https://api.github.com/user",{headers:E});if(!$.ok)throw new Error("Failed to read your GitHub profile. Please login again.");const l=(await $.json()).login,p=W==="root"?`${l}.github.io`:N.trim()||`linkhubpage-profile-${c||"page"}`,j=await fetch(`https://api.github.com/repos/${l}/${p}`,{headers:E}),re=j.ok;if(!re&&j.status!==404){const q=await j.text();throw new Error(`Failed repository check: ${q.slice(0,140)}`)}I(l),g(p),v(re),w("connected"),m(re?`GitHub ready. Repository ${l}/${p} exists and will be updated.`:`GitHub ready. Repository ${l}/${p} does not exist and will be created during deploy.`)}catch($){w("error"),m($ instanceof Error?$.message:"GitHub setup check failed.")}},handleDeployToGitHub:async()=>{const R=ve("github_access_token");if(!R){x("error"),f("Please log in with GitHub to enable automatic GitHub Pages deployment.");return}if(z!=="connected"){x("error"),f('Please run "Check GitHub Setup" before deploying.');return}x("loading"),f("Preparing GitHub deployment target...");const E={Authorization:`Bearer ${R}`,Accept:"application/vnd.github+json","Content-Type":"application/json"};try{await b();const $=await fetch("https://api.github.com/user",{headers:E});if(!$.ok)throw new Error("Failed to read your GitHub profile. Please try logging in again.");const K=await $.json(),l=P||K.login,p=_||(W==="root"?`${l}.github.io`:N.trim()||`linkhubpage-profile-${c||"page"}`);f("Creating GitHub repository...");const j=await fetch("https://api.github.com/user/repos",{method:"POST",headers:E,body:JSON.stringify({name:p,description:"My LinkHubPage Profile",auto_init:!0})});if(!j.ok&&j.status!==422)throw new Error("Failed to create repository on GitHub");f("Preparing and packaging page assets...");let q=await(await fetch("/")).text();q=q.replace("</head>",`<script>
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
      <\/script></head>`),q=q.replaceAll('src="/assets/','src="./assets/'),q=q.replaceAll('href="/assets/','href="./assets/');const pe=q.replaceAll('src="./assets/','src="../assets/').replaceAll('href="./assets/','href="../assets/'),n={...C};n.adminEmail=(L==null?void 0:L.email)||"",delete n.resendApiKey;const a=[{path:"index.html",content:btoa(unescape(encodeURIComponent(q)))},{path:"admin/index.html",content:btoa(unescape(encodeURIComponent(pe)))},{path:"404.html",content:btoa(unescape(encodeURIComponent(q)))},{path:"config.json",content:btoa(unescape(encodeURIComponent(JSON.stringify(n,null,2))))}],o=[...Array.from(new Set([...q.matchAll(/(?:src|href)="((?:\.\/|\/)?assets\/[^"]+)"/g)].map(A=>A[1])))],i=new Set;for(let A=0;A<o.length;A++){const G=o[A],J=G.startsWith("./")?`/${G.slice(2)}`:G.startsWith("/")?G:`/${G}`,V=G.startsWith("./")?G.slice(2):G.startsWith("/")?G.slice(1):G;if(i.has(V))continue;const T=await fetch(J);if(!T.ok)throw new Error(`Failed to fetch asset ${J} for GitHub deploy`);const ee=await T.text();if(a.push({path:V,content:btoa(unescape(encodeURIComponent(ee)))}),i.add(V),J.endsWith(".js")){const te=[...ee.matchAll(/from"\.\/([a-zA-Z0-9_.-]+\.js)"|import\("\.\/([a-zA-Z0-9_.-]+\.js)"\)/g)].map(ne=>ne[1]||ne[2]);for(const ne of te){const le=`assets/${ne}`;!i.has(le)&&!o.includes(le)&&o.push(le)}}}const F=["/favicon.ico","/icon-192.png","/icon-512.png","/manifest.json"];for(const A of F){const G=await fetch(A);if(!G.ok)continue;const J=new Uint8Array(await G.arrayBuffer());let V="";for(let T=0;T<J.length;T++)V+=String.fromCharCode(J[T]);a.push({path:A.slice(1),content:btoa(V)})}const k=[...q.matchAll(/href="(\/vendor\/[^"]+\.css)"/g)].map(A=>A[1]),M=[...new Set(k)],ie=new Set;for(const A of M){if(ie.has(A))continue;const G=await fetch(A);if(!G.ok)continue;const J=await G.text();a.push({path:A.slice(1),content:btoa(unescape(encodeURIComponent(J)))}),ie.add(A);const V=[...J.matchAll(/url\(([^)]+)\)/g)].map(T=>T[1].replace(/['"]/g,""));for(const T of V){const ee=new URL(T,`https://x${A}`).pathname;if(ie.has(ee))continue;const te=await fetch(ee);if(!te.ok)continue;const ne=new Uint8Array(await te.arrayBuffer());let le="";for(let he=0;he<ne.length;he++)le+=String.fromCharCode(ne[he]);a.push({path:ee.slice(1),content:btoa(le)}),ie.add(ee)}}f("Uploading assets to GitHub...");for(const A of a){const G=await fetch(`https://api.github.com/repos/${l}/${p}/contents/${A.path}`,{headers:E}),J=G.ok?await G.json():null,V=J==null?void 0:J.sha,T=await fetch(`https://api.github.com/repos/${l}/${p}/contents/${A.path}`,{method:"PUT",headers:E,body:JSON.stringify({message:`Deploy ${A.path}`,content:A.content,sha:V})});if(!T.ok){const ee=await T.text();throw new Error(`Failed to upload ${A.path} to GitHub (${T.status}): ${ee.slice(0,180)}`)}}f("Saving integration values into GitHub Secrets...");try{await _e(E,l,p,"BUILDER_GOOGLE_CLIENT_ID",C.googleClientId||""),await _e(E,l,p,"BUILDER_GOOGLE_ANALYTICS_ID",C.googleAnalyticsId||""),await _e(E,l,p,"BUILDER_RESEND_API_KEY",C.resendApiKey||""),await _e(E,l,p,"BUILDER_CALENDLY_URL",C.calendlyUrl||"")}catch(A){console.warn("Failed to sync one or more GitHub secrets:",A)}f("Activating GitHub Pages...");const X=await fetch(`https://api.github.com/repos/${l}/${p}/pages`,{method:"POST",headers:E,body:JSON.stringify({source:{branch:"main",path:"/"}})});if(X.ok||X.status===409){const A=W==="root"?`https://${l}.github.io/`:`https://${l}.github.io/${p}/`;f("Waiting for GitHub Pages to finish building...");const G=await kt(E,l,p);if(G==="errored")throw new Error(`GitHub Pages build failed. Check the build logs at https://github.com/${l}/${p}/deployments, then try deploying again.`);x("success"),f(G==="timeout"?`Files pushed and GitHub Pages is enabled, but the build is taking longer than usual. It should be live shortly at: ${A}`:`Successfully deployed to GitHub Pages! URL: ${A}`),await fetch("/api/profile/github-deploy",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${R}`},body:JSON.stringify({repoName:p,url:A})}).catch(J=>console.warn("Failed to record GitHub Pages deployment:",J)),await b(C,{target:"github",githubRepoName:p,githubPagesMode:W})}else throw new Error("Could not enable GitHub Pages automatically")}catch($){x("error"),f($ instanceof Error?$.message:"GitHub deployment failed")}}}}function Ct({profileConfig:c,handleConfigChange:L,user:C,username:b,isReserved:x,getAuthToken:f}){const[W,B]=u.useState("idle"),[N,S]=u.useState(""),[z,w]=u.useState("idle"),[Z,m]=u.useState(""),[P,I]=u.useState("idle"),[_,g]=u.useState(""),[O,v]=u.useState("idle"),[y,s]=u.useState("");return u.useEffect(()=>{v("idle"),s("")},[b,x,C==null?void 0:C.email]),{googleCheckStatus:W,setGoogleCheckStatus:B,googleCheckMsg:N,setGoogleCheckMsg:S,resendCheckStatus:z,setResendCheckStatus:w,resendCheckMsg:Z,setResendCheckMsg:m,calendlyCheckStatus:P,setCalendlyCheckStatus:I,calendlyCheckMsg:_,setCalendlyCheckMsg:g,internalCheckStatus:O,internalCheckMsg:y,handleCheckGoogleClientId:async()=>{const l=(c.googleClientId||"").trim();if(!l){B("invalid"),S("Please enter a Google Client ID first.");return}B("checking"),S("Validating Google Client ID format...");try{const p=await fetch("/api/integrations/google-check",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({clientId:l})}),j=await p.json();if(!p.ok||!j.valid){B("invalid"),S(j.error||"Invalid Google Client ID format.");return}B("valid"),S("Google Client ID looks valid.")}catch(p){B("invalid"),S(p instanceof Error?p.message:"Google Client ID validation failed.")}},handleCheckResendKey:async()=>{const l=(c.resendApiKey||"").trim();if(!l){w("invalid"),m("Please enter a Resend API key first.");return}w("checking"),m("Verifying Resend API key...");try{const p=await fetch("/api/integrations/resend-check",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:l})}),j=await p.json();if(!p.ok||!j.valid){w("invalid"),m(j.error||"Resend API key is invalid.");return}w("valid"),m(j.message||"Resend API key is valid.")}catch(p){w("invalid"),m(p instanceof Error?p.message:"Resend validation failed.")}},handleCheckCalendlyUrl:async()=>{const l=(c.calendlyUrl||"").trim();if(!l){I("invalid"),g("Please enter a Calendly URL first.");return}I("checking"),g("Validating Calendly URL...");try{const p=await fetch("/api/integrations/calendly-check",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({calendlyUrl:l})}),j=await p.json();if(!p.ok||!j.valid){I("invalid"),g(j.error||"Calendly URL is invalid.");return}I("valid"),g(j.message||"Calendly URL looks valid."),j.normalizedUrl&&j.normalizedUrl!==l&&L("calendlyUrl",j.normalizedUrl)}catch(p){I("invalid"),g(p instanceof Error?p.message:"Calendly URL validation failed.")}},handleCheckInternalSetup:async()=>{if(!C){v("error"),s("Please login first.");return}const l=(b||"").trim().toLowerCase();if(!l){v("error"),s("Please reserve a username first.");return}if(!/^[a-z0-9_-]{3,30}$/.test(l)){v("error"),s("Username must be 3-30 chars and contain only a-z, 0-9, _ or -.");return}if(!x){v("error"),s("Username is not reserved yet. Click Reserve first.");return}v("checking"),s("Checking internal hosting readiness...");try{const p=f();if(!p){v("error"),s("Missing auth token. Please sign out and sign in again.");return}if(!(await fetch("/api/profile/draft",{headers:{Authorization:`Bearer ${p}`}})).ok){v("error"),s("Could not verify draft access. Please re-login and retry.");return}v("ready"),s(`Ready to publish at ${window.location.origin}/p/${l}`)}catch(p){v("error"),s(p instanceof Error?p.message:"Internal setup check failed.")}}}}function Nt({user:c,login:L,getAuthToken:C,setStatusMsg:b}){const[x,f]=u.useState(""),[W,B]=u.useState(!1),[N,S]=u.useState(()=>typeof window<"u"&&window.__PROFILE_CONFIG__?window.__PROFILE_CONFIG__:{...Ge}),[z,w]=u.useState("idle"),[Z,m]=u.useState(null),P=async(n,a)=>{if(!c)return;const r=C();if(!r)return;const o={...n||N};o.adminEmail=c.email;try{await fetch("/api/profile/draft",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({config:o,...a?{lastDeploy:a}:{}})})}catch(i){console.warn("Failed to persist builder draft:",i)}};u.useEffect(()=>{const{googleClientId:n,googleAnalyticsId:a,adminEmail:r,...o}=N;Object.assign(we,o)},[N]);const I=n=>{S(a=>{const r=a.layout||["profile","links","actions","techstack","github","portfolio"];let o;if(r.includes(n)){if(n==="profile")return a;o=r.filter(i=>i!==n)}else o=[...r,n];return{...a,layout:o}})},_=(n,a)=>{S(r=>{const o=[...r.layout||["profile","links","actions","techstack","github","portfolio"]],i=a==="up"?n-1:n+1;if(i<0||i>=o.length)return r;const F=o[n];return o[n]=o[i],o[i]=F,{...r,layout:o}})},g=(n,a)=>{m(a),n.dataTransfer.effectAllowed="move"},O=n=>{n.preventDefault()},v=(n,a)=>{n.preventDefault(),!(Z===null||Z===a)&&(S(r=>{const o=[...r.layout||["profile","links","actions","techstack","github","portfolio"]],i=o[Z];return o.splice(Z,1),o.splice(a,0,i),{...r,layout:o}}),m(null))},y=n=>{qe("github_access_token",n.token),S(r=>({...r,githubUsername:n.username||r.githubUsername}));const a=C();a&&fetch("/api/integrations/github-link",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({githubUsername:n.username||"",githubEmail:n.email||""})}).catch(r=>console.warn("Failed to record GitHub account link:",r)),window.dispatchEvent(new Event("linkhubpage:github-connected"))};u.useEffect(()=>{const n=new URLSearchParams(window.location.hash.slice(1)),a=n.get("provider"),r=n.get("token"),o=n.get("email");n.get("name"),n.get("picture");const i=n.get("username");n.get("mode"),a==="github"&&r&&o&&(y({token:r,email:o,username:i||void 0}),window.history.replaceState({},document.title,window.location.pathname))},[L]),u.useEffect(()=>{const n=a=>{var r,o;a.origin===window.location.origin&&(((r=a.data)==null?void 0:r.type)!=="github_oauth_success"||!((o=a.data)!=null&&o.token)||y({token:a.data.token,email:a.data.email,name:a.data.name,picture:a.data.picture,username:a.data.username,mode:a.data.mode}))};return window.addEventListener("message",n),()=>window.removeEventListener("message",n)},[]),u.useEffect(()=>{const n=r=>{if(r)try{const{payload:o,ts:i}=JSON.parse(r);if(!(o!=null&&o.token)||Date.now()-i>12e4)return;y({token:o.token,email:o.email,name:o.name,picture:o.picture,username:o.username,mode:o.mode})}catch(o){console.warn("Failed to parse stored GitHub OAuth result:",o)}finally{Ze("github_oauth_result")}};n(ve("github_oauth_result"));const a=r=>{r.key==="github_oauth_result"&&r.newValue&&n(r.newValue)};return window.addEventListener("storage",a),()=>window.removeEventListener("storage",a)},[]);const s=(n,a)=>{S(r=>({...r,[n]:a}))};return{username:x,setUsername:f,isReserved:W,setIsReserved:B,profileConfig:N,setProfileConfig:S,persistBuilderDraft:P,reserveStatus:z,draggedIndex:Z,handleConfigChange:s,handleProfileImageFile:n=>{if(!n.type.startsWith("image/")){alert("Please choose an image file.");return}const a=URL.createObjectURL(n),r=new Image;r.onload=()=>{const i=Math.min(1,480/Math.max(r.width,r.height)),F=document.createElement("canvas");F.width=Math.round(r.width*i),F.height=Math.round(r.height*i);const k=F.getContext("2d");k&&(k.drawImage(r,0,0,F.width,F.height),s("profileImage",F.toDataURL("image/jpeg",.85))),URL.revokeObjectURL(a)},r.onerror=()=>{URL.revokeObjectURL(a),alert("Could not read that image.")},r.src=a},handleNestedConfigChange:(n,a,r)=>{S(o=>{const i=o[n]||{};return{...o,[n]:{...i,[a]:r}}})},handleLinkChange:(n,a,r)=>{S(o=>{const i=[...o.links];return i[n]={...i[n],[a]:r},{...o,links:i}})},getLinkPlatform:n=>{var a,r,o,i,F,k;return(a=n.icon)!=null&&a.includes("instagram")?"instagram":(r=n.icon)!=null&&r.includes("linkedin")?"linkedin":(o=n.icon)!=null&&o.includes("github")?"github":(i=n.icon)!=null&&i.includes("address-card")||n.action==="vcard"?"vcard":(F=n.icon)!=null&&F.includes("calendar")||n.action==="calendly"?"calendly":(k=n.icon)!=null&&k.includes("envelope")||n.action==="contact"?"email":"website"},handleLinkPlatformChange:(n,a)=>{S(r=>{const o=[...r.links],i=o[n];switch(a){case"instagram":o[n]={...i,icon:"fab fa-instagram",cssClass:"instagram",langKey:"instagram",tooltipKey:"tooltip-instagram",action:void 0,external:!0};break;case"linkedin":o[n]={...i,icon:"fab fa-linkedin",cssClass:"linkedin",langKey:"linkedin",tooltipKey:"tooltip-linkedin",action:void 0,external:!0};break;case"github":o[n]={...i,icon:"fab fa-github",cssClass:"github",langKey:"github",tooltipKey:"tooltip-github",action:void 0,external:!0};break;case"website":o[n]={...i,icon:"fa-solid fa-link",cssClass:"custom-link",langKey:"website",tooltipKey:"tooltip-website",action:void 0,external:!0};break;case"calendly":o[n]={...i,icon:"fa-solid fa-calendar",cssClass:"calendly",langKey:"book-meeting",tooltipKey:"tooltip-calendly",action:"calendly",external:!1};break;case"vcard":o[n]={...i,icon:"fa-solid fa-address-card",cssClass:"vcard",langKey:"save-contact",tooltipKey:"tooltip-vcard",action:"vcard",external:!1};break;case"email":o[n]={...i,icon:"fa-solid fa-envelope",cssClass:"email",langKey:"contact",tooltipKey:"tooltip-contact",action:"contact",external:!1};break}return{...r,links:o}})},addLink:()=>{S(n=>({...n,links:[...n.links,{url:"https://",icon:"fa-solid fa-link",cssClass:"custom-link",langKey:"website",tooltipKey:"tooltip-website",external:!0}]}))},deleteLink:n=>{S(a=>({...a,links:a.links.filter((r,o)=>o!==n)}))},toggleBlockVisibility:I,moveBlock:_,handleDragStart:g,handleDragOver:O,handleDrop:v,triggerGoogleLogin:()=>{var n,a,r;if(!((n=we.googleClientId)!=null&&n.trim())){alert("Google login is temporarily unavailable (missing client ID). Please reload the page and try again.");return}typeof window<"u"&&((r=(a=window.google)==null?void 0:a.accounts)!=null&&r.oauth2)&&window.google.accounts.oauth2.initTokenClient({client_id:we.googleClientId,scope:"openid profile email",callback:async i=>{if(i!=null&&i.access_token){Ze("github_access_token"),qe("google_access_token",i.access_token);const F=await fetch("https://www.googleapis.com/oauth2/v3/userinfo",{headers:{Authorization:`Bearer ${i.access_token}`}});if(F.ok){const k=await F.json();if(L({name:k.name,email:k.email,picture:k.picture}),S(M=>({...M,name:k.name?{el:k.name,en:k.name}:M.name,profileImage:k.picture||M.profileImage,contactEmail:k.email||M.contactEmail})),k.email){const M=k.email.split("@")[0].toLowerCase().replace(/[^a-z0-9_-]/g,"");f(M)}}}}}).requestAccessToken()},triggerYoutubeConnect:()=>{var n,a,r;if(!((n=we.googleClientId)!=null&&n.trim())){alert("Google login is temporarily unavailable (missing client ID). Please reload the page and try again.");return}typeof window<"u"&&((r=(a=window.google)==null?void 0:a.accounts)!=null&&r.oauth2)&&window.google.accounts.oauth2.initTokenClient({client_id:we.googleClientId,scope:"https://www.googleapis.com/auth/youtube.readonly",callback:async i=>{var F,k;if(i!=null&&i.access_token)try{const M=await fetch("https://www.googleapis.com/youtube/v3/channels?part=id&mine=true",{headers:{Authorization:`Bearer ${i.access_token}`}});if(!M.ok){alert("Failed to connect YouTube. Please try again.");return}const X=(k=(F=(await M.json()).items)==null?void 0:F[0])==null?void 0:k.id;X?s("youtubeChannelId",X):alert("No YouTube channel found for this Google account.")}catch{alert("Failed to connect YouTube. Please try again.")}}}).requestAccessToken()},triggerGitHubLogin:n=>{const a=`/api/auth/github?redirect_uri=${encodeURIComponent(window.location.href)}${n?`&mode=${n}`:""}`;window.open(a,"github_connect","width=600,height=700")||(window.location.href=a)},handleReserveUsername:async n=>{if(n.preventDefault(),!!c){w("loading"),b("");try{const a=await fetch("/api/profile/reserve",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${C()}`},body:JSON.stringify({username:x})}),r=await a.json();a.ok?(w("success"),B(!0),b(`Username @${r.username} reserved successfully!`)):(w("error"),b(r.error||"Failed to reserve username"))}catch(a){w("error"),b(a instanceof Error?a.message:"Error occurred")}}}}}const se=[{id:"info",label:"Info",icon:"fa-solid fa-id-card"},{id:"social",label:"Social",icon:"fa-solid fa-share-nodes"},{id:"layout",label:"Layout",icon:"fa-solid fa-table-cells-large"},{id:"style",label:"Style",icon:"fa-solid fa-palette"},{id:"deploy",label:"Deploy",icon:"fa-solid fa-rocket"},{id:"integrations",label:"Integrations",icon:"fa-solid fa-plug"},{id:"publish",label:"Publish",icon:"fa-solid fa-circle-check"}],Ve=[{id:"internal",label:"Internal Hosting",icon:"fa-solid fa-server"},{id:"zip",label:"Download ZIP",icon:"fa-solid fa-box"},{id:"github",label:"GitHub Pages",icon:"fa-brands fa-github"},{id:"cloudflare",label:"Cloudflare Workers",icon:"fa-brands fa-cloudflare"}],Pe=[{id:"profile",name:"Profile Card Header",icon:"fa-solid fa-user-tie"},{id:"links",name:"Social Links Grid",icon:"fa-solid fa-link"},{id:"actions",name:"Action Buttons (QR/Contact)",icon:"fa-solid fa-cube"},{id:"techstack",name:"Tech Languages / Skills",icon:"fa-solid fa-code"},{id:"github",name:"GitHub Stats Cards",icon:"fa-brands fa-github"},{id:"portfolio",name:"Portfolio Projects Grid",icon:"fa-solid fa-folder-open"},{id:"youtube",name:"YouTube Stats Card",icon:"fa-brands fa-youtube"},{id:"youtube-videos",name:"YouTube Videos Grid",icon:"fa-brands fa-youtube"}],Et=()=>{var Fe,He,ze,Be,Je,Ke,Me,Ye,We;const{user:c,login:L,logout:C}=ut();u.useEffect(()=>{pt("https://accounts.google.com/gsi/client")},[]);const b=()=>ve("google_access_token")||"",[x,f]=u.useState("info"),[W,B]=u.useState("idle"),[N,S]=u.useState("idle"),[z,w]=u.useState(""),[Z,m]=u.useState(""),[P,I]=u.useState("internal"),_=u.useRef(null),{username:g,setUsername:O,isReserved:v,setIsReserved:y,profileConfig:s,setProfileConfig:R,persistBuilderDraft:E,reserveStatus:$,draggedIndex:K,handleConfigChange:l,handleProfileImageFile:p,handleNestedConfigChange:j,handleLinkChange:re,getLinkPlatform:q,handleLinkPlatformChange:xe,addLink:pe,deleteLink:n,toggleBlockVisibility:a,moveBlock:r,handleDragStart:o,handleDragOver:i,handleDrop:F,triggerGoogleLogin:k,triggerYoutubeConnect:M,triggerGitHubLogin:ie,handleReserveUsername:X}=Nt({user:c,login:L,getAuthToken:b,setStatusMsg:w}),{showCFDeployForm:A,setShowCFDeployForm:G,cfDomain:J,setCFDomain:V,cfDomainStatus:T,cfDomainMsg:ee,cfConnectStatus:te,handleCheckCloudflareDomain:ne,handleCFDirectDeploy:le,openCFConnectPopup:he,resetCloudflareConnection:Se}=yt({username:g,profileConfig:s,persistBuilderDraft:E,getAuthToken:b,setDeployStatus:S,setStatusMsg:w}),{githubPagesMode:ye,setGithubPagesMode:be,githubRepoName:fe,setGithubRepoName:D,githubConnectStatus:Y,githubConnectMsg:oe,githubResolvedOwner:me,githubResolvedRepo:ce,githubRepoExists:ae,handleCheckGitHubSetup:ke,handleDeployToGitHub:Re}=jt({username:g,user:c,profileConfig:s,persistBuilderDraft:E,setDeployStatus:S,setStatusMsg:w});u.useEffect(()=>{document.title="LinkHubPage Builder"},[]),u.useEffect(()=>{(async()=>{if(!c){typeof window<"u"&&!window.__PROFILE_CONFIG__&&R({...Ge}),O(""),y(!1);return}const h=d=>{d&&(I(d.target),d.target==="cloudflare"&&d.domain&&(V(d.domain),G(!0)),d.target==="github"&&(d.githubRepoName&&D(d.githubRepoName),d.githubPagesMode&&be(d.githubPagesMode)))};if(c.username){const d=c.username.toLowerCase();O(d),y(!0);const U=b();try{if(U){const Q=await fetch("/api/profile/me",{headers:{Authorization:`Bearer ${U}`}});if(Q.ok){const de=await Q.json();R(de),h(de==null?void 0:de.lastDeploy);try{const ue=await fetch("/api/profile/draft",{headers:{Authorization:`Bearer ${U}`}});if(ue.ok){const Ee=await ue.json();h(Ee==null?void 0:Ee.lastDeploy)}}catch(ue){console.warn("Failed to load last deploy info:",ue)}return}}const H=await fetch(`/api/profile/${d}`);if(H.ok){const Q=await H.json();R(Q),h(Q==null?void 0:Q.lastDeploy);return}}catch(H){console.error("Failed to load profile for username:",d,H)}}try{const d=b();if(d){const U=await fetch("/api/profile/draft",{headers:{Authorization:`Bearer ${d}`}});if(U.ok){const H=await U.json();if(H!=null&&H.config){R(H.config),H.config.adminEmail&&y(!!c.username),h(H==null?void 0:H.lastDeploy);return}}}}catch(d){console.warn("Failed to load builder draft:",d)}R(d=>d.adminEmail===""?{...Ge,adminEmail:c.email,name:c.name?{el:c.name,en:c.name}:{el:"",en:""},profileImage:c.picture||"",contactEmail:c.email,githubUsername:c.username||""}:d)})()},[c]);const{googleCheckStatus:je,setGoogleCheckStatus:et,googleCheckMsg:Oe,setGoogleCheckMsg:tt,resendCheckStatus:Ce,setResendCheckStatus:nt,resendCheckMsg:De,setResendCheckMsg:at,calendlyCheckStatus:Ne,setCalendlyCheckStatus:ot,calendlyCheckMsg:Te,setCalendlyCheckMsg:st,internalCheckStatus:ge,internalCheckMsg:Ue,handleCheckGoogleClientId:rt,handleCheckResendKey:it,handleCheckCalendlyUrl:lt,handleCheckInternalSetup:ct}=Ct({profileConfig:s,handleConfigChange:l,user:c,username:g,isReserved:v,getAuthToken:b}),dt=async()=>{if(!(!c||!v)){if(ge!=="ready"){B("error"),w('Please run "Check Internal Setup" before publishing.');return}B("loading"),w("");try{const t={...s};t.adminEmail=c.email,await E(t);const h=await fetch("/api/profile/save",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${b()}`},body:JSON.stringify({username:g,config:t})});if(h.ok)B("success"),w(`Profile live at: ${window.location.origin}/p/${g}`),await E(t,{target:"internal"});else{const d=await h.json();B("error"),w(d.error||"Failed to save profile")}}catch(t){B("error"),w(t instanceof Error?t.message:"Error saving profile")}}},$e=P==="internal"?ge==="ready":P==="zip"?!0:P==="github"?Y==="connected":P==="cloudflare"?te==="connected":!1;return e.jsxs("div",{className:"min-h-screen bg-bg-primary text-text-primary flex flex-col md:flex-row",children:[e.jsxs("div",{className:"w-full md:w-1/2 p-6 border-r border-border-primary flex flex-col md:h-screen overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between mb-8 pb-4 border-b border-border-primary",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold tracking-tight text-accent",style:{fontFamily:"var(--font-display)"},children:"LinkHubPage Builder"}),e.jsx("p",{className:"text-xs text-text-secondary",style:{fontFamily:"var(--font-mono)"},children:"linkhubpage.com/builder"})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("button",{type:"button",onClick:()=>{window.location.href="/"},className:"px-3 py-1.5 rounded-lg text-xs font-bold border border-border-primary bg-bg-secondary hover:border-accent hover:text-accent transition cursor-pointer",children:"Back"}),c?e.jsxs("div",{className:"text-right",children:[e.jsxs("span",{className:"text-[10px] block font-bold text-text-secondary",children:["Logged in as ",c.name]}),e.jsx("button",{onClick:C,className:"text-[10px] text-red-400 font-bold hover:underline cursor-pointer",children:"Sign Out"})]}):e.jsx("div",{className:"flex gap-2",children:e.jsx("button",{onClick:k,className:"px-3 py-1.5 bg-accent/15 border border-accent/20 rounded-lg text-xs font-bold hover:bg-accent/30 cursor-pointer",children:"Google"})})]})]}),e.jsx("div",{className:"flex items-center gap-1 mb-6 overflow-x-auto scrollbar-none pb-1",children:se.map((t,h)=>{const d=se.findIndex(ue=>ue.id===x),U=se.findIndex(ue=>ue.id==="deploy"),H=h>d&&h>U&&!$e,Q=x===t.id,de=h<d;return e.jsxs(ht.Fragment,{children:[e.jsxs("button",{type:"button",onClick:()=>{H||f(t.id)},disabled:H,"aria-current":Q?"true":void 0,title:t.label,className:`flex flex-shrink-0 flex-col items-center gap-1 px-1.5 py-1 rounded-lg text-[10px] font-bold transition cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 ${Q?"text-accent":de?"text-text-primary":"text-text-secondary"}`,children:[e.jsx("span",{className:`flex h-6 w-6 items-center justify-center rounded-full border text-[10px] ${Q?"border-accent bg-accent/10 text-accent":de?"border-emerald-400/50 bg-emerald-400/10 text-emerald-300":"border-border-primary text-text-secondary"}`,children:de?e.jsx("i",{className:"fa-solid fa-check text-[9px]","aria-hidden":"true"}):h+1}),e.jsx("span",{className:"hidden sm:block",children:t.label})]}),h<se.length-1&&e.jsx("div",{className:`h-px flex-1 min-w-[8px] ${h<d?"bg-emerald-400/50":"bg-border-primary"}`})]},t.id)})}),e.jsxs("div",{className:"flex-1 overflow-y-auto pr-1.5 space-y-6",children:[x==="info"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Display Name (Greek)"}),e.jsx("input",{type:"text",value:((Fe=s.name)==null?void 0:Fe.el)||"",onChange:t=>j("name","el",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Display Name (English)"}),e.jsx("input",{type:"text",value:((He=s.name)==null?void 0:He.en)||"",onChange:t=>j("name","en",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Bio (Greek)"}),e.jsx("input",{type:"text",value:((ze=s.bio)==null?void 0:ze.el)||"",onChange:t=>j("bio","el",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Bio (English)"}),e.jsx("input",{type:"text",value:((Be=s.bio)==null?void 0:Be.en)||"",onChange:t=>j("bio","en",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Location (Greek)"}),e.jsx("input",{type:"text",value:s.location.el,onChange:t=>j("location","el",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Location (English)"}),e.jsx("input",{type:"text",value:s.location.en,onChange:t=>j("location","en",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Skills Section Title (Greek)"}),e.jsx("input",{type:"text",value:((Je=s.skillsTitle)==null?void 0:Je.el)||"",onChange:t=>j("skillsTitle","el",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Skills Section Title (English)"}),e.jsx("input",{type:"text",value:((Ke=s.skillsTitle)==null?void 0:Ke.en)||"",onChange:t=>j("skillsTitle","en",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Portfolio Section Title (Greek)"}),e.jsx("input",{type:"text",value:((Me=s.portfolioTitle)==null?void 0:Me.el)||"",onChange:t=>j("portfolioTitle","el",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Portfolio Section Title (English)"}),e.jsx("input",{type:"text",value:((Ye=s.portfolioTitle)==null?void 0:Ye.en)||"",onChange:t=>j("portfolioTitle","en",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Profile Image"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"url",placeholder:"https://... or upload a file",value:s.profileImage,onChange:t=>l("profileImage",t.target.value),className:"flex-1 h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"}),e.jsx("button",{type:"button",onClick:()=>{var t;return(t=_.current)==null?void 0:t.click()},className:"shrink-0 h-11 px-4 bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold cursor-pointer",children:"Upload"}),e.jsx("input",{ref:_,type:"file",accept:"image/*",className:"hidden",onChange:t=>{var d;const h=(d=t.target.files)==null?void 0:d[0];h&&p(h),t.target.value=""}})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-6 pt-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",id:"showStatusBadge",checked:s.showStatusBadge,onChange:t=>l("showStatusBadge",t.target.checked),className:"w-4 h-4 rounded border-border-primary accent-accent cursor-pointer"}),e.jsx("label",{htmlFor:"showStatusBadge",className:"text-xs font-bold text-text-secondary cursor-pointer",children:"Show Status Beacon"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",id:"isAvailable",checked:s.isAvailable,onChange:t=>l("isAvailable",t.target.checked),className:"w-4 h-4 rounded border-border-primary accent-accent cursor-pointer"}),e.jsx("label",{htmlFor:"isAvailable",className:"text-xs font-bold text-text-secondary cursor-pointer",children:"Is Available (Green Beacon)"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",id:"showGreeting",checked:s.showGreeting!==!1,onChange:t=>l("showGreeting",t.target.checked),className:"w-4 h-4 rounded border-border-primary accent-accent cursor-pointer"}),e.jsx("label",{htmlFor:"showGreeting",className:"text-xs font-bold text-text-secondary cursor-pointer",children:'Show Greeting Text (e.g. "Good morning", "Καλημέρα")'})]})]}),e.jsxs("div",{className:"space-y-1.5 pt-2",children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase",children:"Available From / Since Date"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"text",placeholder:"e.g. 06/07/2026 or July 2026",value:s.availableFromDate||"",onChange:t=>l("availableFromDate",t.target.value),className:"flex-1 h-10 px-3 bg-bg-secondary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition"}),e.jsx("button",{type:"button",onClick:()=>{const t=new Date,h=String(t.getDate()).padStart(2,"0"),d=String(t.getMonth()+1).padStart(2,"0"),U=t.getFullYear();l("availableFromDate",`${h}/${d}/${U}`)},className:"px-3 bg-bg-secondary border border-border-primary hover:bg-bg-primary hover:border-accent rounded-lg text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1 text-text-secondary hover:text-text-primary",children:"📅 Today"})]}),e.jsx("p",{className:"text-[9px] text-text-secondary",children:"Specify the date from which your status is applicable. Click the button to automatically set today's date."})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase",children:"Include Dates (Always Available)"}),e.jsx("textarea",{value:s.statusIncludeDates||"",onChange:t=>l("statusIncludeDates",t.target.value),placeholder:"e.g. 10/07/2026 - 15/07/2026, 25/08/2026",className:"w-full min-h-[60px] p-3 bg-bg-secondary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition resize-y"}),e.jsx("p",{className:"text-[9px] text-text-secondary",children:"Specific dates or ranges (comma/line separated) when you are always available."})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase",children:"Exclude Dates (Always Unavailable)"}),e.jsx("textarea",{value:s.statusExcludeDates||"",onChange:t=>l("statusExcludeDates",t.target.value),placeholder:"e.g. 01/08/2026 - 07/08/2026",className:"w-full min-h-[60px] p-3 bg-bg-secondary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition resize-y"}),e.jsx("p",{className:"text-[9px] text-text-secondary",children:"Specific dates or ranges (comma/line separated) when you are unavailable (e.g. vacations)."})]})]}),x==="social"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center pb-2 border-b border-border-primary",children:[e.jsx("h3",{className:"text-sm font-bold",children:"Manage Link Items"}),e.jsx("button",{onClick:pe,className:"px-2 py-1 bg-accent rounded text-[10px] font-bold cursor-pointer",children:"+ Add"})]}),e.jsx("div",{className:"space-y-3",children:s.links.map((t,h)=>{var d,U;return e.jsxs("div",{className:"bg-bg-secondary border border-border-primary p-3 rounded-xl flex flex-col gap-2 relative",children:[e.jsx("button",{onClick:()=>n(h),className:"absolute top-2 right-2 text-[10px] text-red-400 font-bold hover:underline cursor-pointer",children:"Delete"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 pr-12",children:[e.jsx("input",{type:"text",placeholder:"Link URL",value:t.url,onChange:H=>re(h,"url",H.target.value),className:"bg-bg-primary border border-border-primary rounded px-2 py-1 text-xs focus:outline-none"}),e.jsxs("select",{value:q(t),onChange:H=>xe(h,H.target.value),className:"bg-bg-primary border border-border-primary rounded px-2 py-1 text-xs focus:outline-none",children:[e.jsx("option",{value:"instagram",children:"Instagram"}),e.jsx("option",{value:"linkedin",children:"LinkedIn"}),e.jsx("option",{value:"github",children:"GitHub"}),e.jsx("option",{value:"website",children:"Custom Link / Website"}),e.jsx("option",{value:"calendly",children:"Book Meeting (Calendly)"}),e.jsx("option",{value:"vcard",children:"Save Contact Card (vCard)"}),e.jsx("option",{value:"email",children:"Contact Form / Email"})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 pr-12",children:[e.jsx("input",{type:"text",placeholder:"Link Title (Greek) - optional",value:((d=t.title)==null?void 0:d.el)||"",onChange:H=>{const Q={...t.title||{el:"",en:""},el:H.target.value};re(h,"title",Q)},className:"bg-bg-primary border border-border-primary rounded px-2 py-1 text-xs focus:outline-none"}),e.jsx("input",{type:"text",placeholder:"Link Title (English) - optional",value:((U=t.title)==null?void 0:U.en)||"",onChange:H=>{const Q={...t.title||{el:"",en:""},en:H.target.value};re(h,"title",Q)},className:"bg-bg-primary border border-border-primary rounded px-2 py-1 text-xs focus:outline-none"})]})]},h)})})]}),x==="style"&&e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Default Theme"}),e.jsxs("select",{value:s.defaultTheme,onChange:t=>l("defaultTheme",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none",children:[e.jsx("option",{value:"dark",children:"Dark"}),e.jsx("option",{value:"light",children:"Light"}),e.jsx("option",{value:"neon",children:"Neon"}),e.jsx("option",{value:"cyberpunk",children:"Cyberpunk"}),e.jsx("option",{value:"sunset",children:"Sunset"}),e.jsx("option",{value:"midnight",children:"Midnight"}),e.jsx("option",{value:"dracula",children:"Dracula"})]})]})}),x==="layout"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"pb-2 border-b border-border-primary",children:[e.jsx("h3",{className:"text-sm font-bold",children:"Configure Profile Layout"}),e.jsx("p",{className:"text-[11px] text-text-secondary",children:"Drag and drop sections to rearrange them, or toggle their visibility switches."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-[10px] font-bold text-text-secondary uppercase",children:"Add Blocks"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:(()=>{const t=s.layout||ft,h=Ae.every(U=>t.includes(U)),d=Ie.every(U=>t.includes(U));return e.jsxs(e.Fragment,{children:[e.jsxs("button",{type:"button",disabled:h,onClick:()=>l("layout",Xe(s.layout,Ae)),className:"p-3.5 bg-bg-secondary border border-border-primary hover:border-accent/40 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl text-left flex items-center gap-3 cursor-pointer transition",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-bg-primary flex items-center justify-center text-accent text-xs shrink-0",children:e.jsx("i",{className:"fa-brands fa-github"})}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("span",{className:"text-xs font-semibold block",children:"+ Add GitHub blocks"}),e.jsx("span",{className:"text-[10px] text-text-secondary block",children:h?"Already added":"Skills, GitHub stats, portfolio"})]})]}),e.jsxs("button",{type:"button",disabled:d,onClick:()=>l("layout",Xe(s.layout,Ie)),className:"p-3.5 bg-bg-secondary border border-border-primary hover:border-accent/40 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl text-left flex items-center gap-3 cursor-pointer transition",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-bg-primary flex items-center justify-center text-accent text-xs shrink-0",children:e.jsx("i",{className:"fa-brands fa-youtube"})}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("span",{className:"text-xs font-semibold block",children:"+ Add YouTube blocks"}),e.jsx("span",{className:"text-[10px] text-text-secondary block",children:d?"Already added":"Subscriber count, views, latest videos"})]})]})]})})()})]}),Ae.some(t=>(s.layout||[]).includes(t))&&!s.githubUsername&&e.jsxs("div",{className:"p-3.5 bg-bg-secondary border border-amber-500/30 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold block",children:"Connect GitHub for real stats"}),e.jsx("span",{className:"text-[10px] text-text-secondary",children:"Your Skills/GitHub Stats/Portfolio blocks need a connected account: stats count your private repos too, portfolio only ever shows public ones."})]}),e.jsx("button",{type:"button",onClick:()=>ie("stats"),className:"shrink-0 px-4 py-2 bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold cursor-pointer",children:"Connect GitHub"})]}),Ie.some(t=>(s.layout||[]).includes(t))&&e.jsxs("div",{className:"p-3.5 bg-bg-secondary border border-amber-500/30 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold block",children:s.youtubeChannelId?"YouTube channel connected":"Connect YouTube"}),e.jsx("span",{className:"text-[10px] text-text-secondary",children:s.youtubeChannelId?`Channel ID: ${s.youtubeChannelId}`:"Sign in with the Google account that owns your channel to pull subscriber count, views, and latest videos."})]}),e.jsx("button",{type:"button",onClick:M,className:"shrink-0 px-4 py-2 bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold cursor-pointer",children:s.youtubeChannelId?"Reconnect YouTube":"Connect YouTube"})]}),e.jsx("div",{className:"space-y-3",children:(s.layout||["profile","links","actions","techstack","github","portfolio"]).map((t,h)=>{const d=Pe.find(U=>U.id===t);return d?e.jsxs("div",{draggable:!0,onDragStart:U=>o(U,h),onDragOver:i,onDrop:U=>F(U,h),className:`flex items-center justify-between p-3.5 bg-bg-secondary border rounded-xl cursor-grab active:cursor-grabbing hover:border-accent/45 transition duration-150 ${K===h?"opacity-40 border-accent/40":"border-border-primary"}`,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("i",{className:"fa-solid fa-bars text-text-secondary hover:text-text-primary"}),e.jsx("div",{className:"w-8 h-8 rounded-lg bg-bg-primary flex items-center justify-center text-accent text-xs",children:e.jsx("i",{className:d.icon})}),e.jsx("span",{className:"text-xs font-semibold",children:d.name})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",disabled:h===0,onClick:()=>r(h,"up"),className:"w-7 h-7 bg-bg-primary hover:bg-bg-secondary border border-border-primary disabled:opacity-30 rounded flex items-center justify-center cursor-pointer transition text-[10px]",children:e.jsx("i",{className:"fa-solid fa-chevron-up"})}),e.jsx("button",{type:"button",disabled:h===(s.layout||[]).length-1,onClick:()=>r(h,"down"),className:"w-7 h-7 bg-bg-primary hover:bg-bg-secondary border border-border-primary disabled:opacity-30 rounded flex items-center justify-center cursor-pointer transition text-[10px]",children:e.jsx("i",{className:"fa-solid fa-chevron-down"})}),t!=="profile"&&e.jsx("button",{type:"button",onClick:()=>a(t),className:"text-[10px] font-bold text-red-400 hover:underline px-2 py-1 cursor-pointer",children:"Hide"})]})]},t):null})}),Pe.filter(t=>!(s.layout||["profile","links","actions","techstack","github","portfolio"]).includes(t.id)).length>0&&e.jsxs("div",{className:"mt-6 pt-4 border-t border-border-primary",children:[e.jsx("h4",{className:"text-[10px] font-bold text-text-secondary uppercase mb-3",children:"Hidden Sections (Click to Show)"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:Pe.filter(t=>!(s.layout||["profile","links","actions","techstack","github","portfolio"]).includes(t.id)).map(t=>e.jsxs("button",{type:"button",onClick:()=>a(t.id),className:"p-3 bg-bg-secondary hover:bg-bg-secondary/80 border border-border-primary hover:border-accent/40 rounded-xl text-left flex items-center gap-3 cursor-pointer transition",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-bg-primary flex items-center justify-center text-text-secondary text-xs",children:e.jsx("i",{className:t.icon})}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs block font-semibold",children:t.name}),e.jsx("span",{className:"text-[9px] text-accent block font-medium",children:"+ Add to Profile"})]})]},t.id))})]})]}),x==="integrations"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"rounded-2xl border border-border-primary bg-bg-secondary/60 p-4 space-y-3",children:[e.jsx("h3",{className:"text-sm font-bold",children:"Integrations Setup Guide"}),e.jsx("p",{className:"text-[11px] text-text-secondary",children:"Add your own provider keys below. These values are used by your deployed page/profile and can be different per user profile."}),e.jsxs("p",{className:"text-[10px] text-text-secondary",children:["Security note: builder deployments use namespaced secret keys prefixed with ",e.jsx("span",{className:"text-text-primary",children:"BUILDER_"})," so they never collide with this site's own runtime secrets."]}),e.jsxs("div",{className:"text-[10px] flex flex-wrap gap-3",children:[e.jsx("a",{href:"https://console.cloud.google.com/apis/credentials",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Google Credentials"}),e.jsx("a",{href:"https://github.com/settings/developers",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"GitHub OAuth Apps"}),e.jsx("a",{href:"https://resend.com/api-keys",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Resend API Keys"}),e.jsx("a",{href:"https://analytics.google.com/",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Google Analytics"}),e.jsx("a",{href:"https://calendly.com/app/event_types/user/me",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Calendly Event Types"})]}),e.jsxs("ul",{className:"text-[10px] text-text-secondary space-y-1.5",children:[e.jsx("li",{children:"Google OAuth: Needed for Google Login flows in your profile and builder auth scenarios."}),e.jsx("li",{children:'GitHub OAuth: Needed for "Login with GitHub" and GitHub deployment workflows.'}),e.jsx("li",{children:"Resend: Needed for contact form email delivery from /api/send-email."}),e.jsx("li",{children:"Google Analytics: Optional tracking for visits and key events."}),e.jsx("li",{children:"Calendly: Needed for meeting booking links and popup scheduling flow."})]})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-text-secondary",children:"GitHub OAuth (Worker Environment)"}),e.jsx("p",{className:"text-[10px] text-text-secondary",children:"GitHub OAuth values are configured on Cloudflare Worker environment, not stored in this profile config."}),e.jsxs("ul",{className:"text-[9px] text-text-secondary space-y-1 pl-3 list-disc",children:[e.jsxs("li",{children:["Create an OAuth App in ",e.jsx("a",{href:"https://github.com/settings/developers",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"GitHub Developer Settings"}),"."]}),e.jsx("li",{children:"Homepage URL: https://linkhubpage.com"}),e.jsx("li",{children:"Authorization callback URL: https://linkhubpage.com/api/auth/github/callback"}),e.jsxs("li",{children:["Set ",e.jsx("span",{className:"text-text-primary",children:"GITHUB_CLIENT_ID"})," in Worker Variables and ",e.jsx("span",{className:"text-text-primary",children:"GITHUB_CLIENT_SECRET"})," in Worker Secrets."]}),e.jsx("li",{children:"When using GitHub Pages deploy, integration values are also synced to repository Actions Secrets through the GitHub API."}),e.jsx("li",{children:"If you logged in before this update, sign in with GitHub again to grant the latest permissions."}),e.jsxs("li",{children:["Open ",e.jsx("a",{href:"https://dash.cloudflare.com/",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Cloudflare Dashboard"})," -> Workers & Pages -> linkhubpage -> Settings -> Variables and Secrets."]})]})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-text-secondary",children:"Google Client ID (OAuth)"}),e.jsx("input",{type:"text",value:s.googleClientId||"",onChange:t=>{l("googleClientId",t.target.value),et("idle"),tt("")},placeholder:"e.g. 961938932307-s2ofhoqrm0qcjbrds8klgjjs...",className:"w-full h-10 px-3 bg-bg-secondary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition"}),e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:"text-[10px] text-text-secondary",children:"Configure a custom Google OAuth Client ID to support Google Login on your profile."}),e.jsx("button",{type:"button",onClick:rt,disabled:je==="checking",className:"px-3 h-8 bg-bg-primary border border-border-primary hover:bg-bg-secondary rounded-lg text-[10px] font-bold cursor-pointer disabled:opacity-50",children:je==="checking"?"Checking...":"Check"})]}),Oe&&e.jsx("p",{className:`text-[10px] ${je==="valid"?"text-emerald-300":je==="invalid"?"text-amber-300":"text-text-secondary"}`,children:Oe}),e.jsxs("ul",{className:"text-[9px] text-text-secondary space-y-1 pl-3 list-disc",children:[e.jsxs("li",{children:["Go to ",e.jsx("a",{href:"https://console.cloud.google.com/apis/credentials",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Google Cloud Console Credentials"})," -> create OAuth Client ID."]}),e.jsx("li",{children:"Create OAuth Client ID (Web application)."}),e.jsx("li",{children:"Add your domain in Authorized JavaScript origins (e.g. https://linkhubpage.com)."}),e.jsx("li",{children:"Copy the Client ID and paste it here."})]})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-text-secondary",children:"Resend API Key (Contact Email)"}),e.jsx("input",{type:"password",value:s.resendApiKey||"",onChange:t=>{l("resendApiKey",t.target.value),nt("idle"),at("")},placeholder:"re_xxxxxxxxxxxxxxxx",className:"w-full h-10 px-3 bg-bg-secondary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition"}),e.jsx("div",{className:"flex items-center justify-end",children:e.jsx("button",{type:"button",onClick:it,disabled:Ce==="checking",className:"px-3 h-8 bg-bg-primary border border-border-primary hover:bg-bg-secondary rounded-lg text-[10px] font-bold cursor-pointer disabled:opacity-50",children:Ce==="checking"?"Checking...":"Check"})}),e.jsx("p",{className:"text-[10px] text-text-secondary",children:"Provide your Resend API Key to receive emails from the contact form. (Kept secure on the server, not exposed to profile visitors)."}),De&&e.jsx("p",{className:`text-[10px] ${Ce==="valid"?"text-emerald-300":Ce==="invalid"?"text-amber-300":"text-text-secondary"}`,children:De}),e.jsxs("p",{className:"text-[9px] text-text-secondary",children:["During Cloudflare direct deploy, this key is sent as Worker Secret (",e.jsx("span",{className:"text-text-primary",children:"BUILDER_RESEND_API_KEY"}),") via API and is not embedded in public config files."]}),e.jsxs("ul",{className:"text-[9px] text-text-secondary space-y-1 pl-3 list-disc",children:[e.jsxs("li",{children:["Go to ",e.jsx("a",{href:"https://resend.com/api-keys",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Resend API Keys"})," -> create a new API key."]}),e.jsx("li",{children:"Set and verify your sending domain in Resend before production use."}),e.jsx("li",{children:"Use a valid sender (for example no-reply@yourdomain.com) that belongs to your verified domain."}),e.jsx("li",{children:"Paste the key in this field to enable contact form delivery."})]})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-text-secondary",children:"Google Analytics ID"}),e.jsx("input",{type:"text",value:s.googleAnalyticsId||"",onChange:t=>l("googleAnalyticsId",t.target.value),placeholder:"e.g. G-XXXXXXXXXX",className:"w-full h-10 px-3 bg-bg-secondary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition"}),e.jsx("p",{className:"text-[10px] text-text-secondary",children:"Track visitors on your profile using your Google Analytics ID."}),e.jsxs("ul",{className:"text-[9px] text-text-secondary space-y-1 pl-3 list-disc",children:[e.jsxs("li",{children:["Go to ",e.jsx("a",{href:"https://analytics.google.com/",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Google Analytics"})," -> Admin -> Data Streams."]}),e.jsx("li",{children:"Create/select a Web data stream for your domain."}),e.jsx("li",{children:"Copy the Measurement ID (format: G-XXXXXXXXXX)."}),e.jsx("li",{children:"Paste it here to activate analytics tracking."})]})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-text-secondary",children:"Calendly URL"}),e.jsx("input",{type:"url",value:s.calendlyUrl,onChange:t=>{l("calendlyUrl",t.target.value),ot("idle"),st("")},placeholder:"e.g. https://calendly.com/your-username/30min",className:"w-full h-10 px-3 bg-bg-secondary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition"}),e.jsx("div",{className:"flex items-center justify-end",children:e.jsx("button",{type:"button",onClick:lt,disabled:Ne==="checking",className:"px-3 h-8 bg-bg-primary border border-border-primary hover:bg-bg-secondary rounded-lg text-[10px] font-bold cursor-pointer disabled:opacity-50",children:Ne==="checking"?"Checking...":"Check"})}),e.jsx("p",{className:"text-[10px] text-text-secondary",children:'Configure the meeting booking URL used by the "Book Meeting" action.'}),Te&&e.jsx("p",{className:`text-[10px] ${Ne==="valid"?"text-emerald-300":Ne==="invalid"?"text-amber-300":"text-text-secondary"}`,children:Te}),e.jsxs("ul",{className:"text-[9px] text-text-secondary space-y-1 pl-3 list-disc",children:[e.jsxs("li",{children:["Create/select your event type from ",e.jsx("a",{href:"https://calendly.com/app/event_types/user/me",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Calendly Event Types"}),"."]}),e.jsx("li",{children:"Copy the share URL (for example https://calendly.com/your-username/30min)."}),e.jsx("li",{children:"Paste it here so visitors can book directly from your profile."})]})]})]}),x==="deploy"&&e.jsx("div",{className:"space-y-6",children:c?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("form",{onSubmit:X,className:"bg-bg-secondary border border-border-primary rounded-2xl p-4 space-y-3",children:[e.jsx("h3",{className:"text-sm font-bold",children:"Reserve Username Handle"}),e.jsx("p",{className:"text-[11px] text-text-secondary",children:"Determine your profile path handle (e.g. linkhubpage.com/p/handle)."}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"text",placeholder:"myhandle",value:g,disabled:v,onChange:t=>O(t.target.value.toLowerCase().replace(/[^a-z0-9_-]/g,"")),className:"flex-1 h-10 bg-bg-primary border border-border-primary rounded-xl px-3 text-xs focus:outline-none disabled:opacity-50",required:!0}),e.jsx("button",{type:"submit",disabled:v||$==="loading",className:"px-4 bg-accent text-white rounded-xl text-xs font-bold hover:bg-accent/80 disabled:opacity-50 cursor-pointer",children:"Reserve"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-sm font-bold",children:"Select Deployment Target"}),e.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4",children:Ve.map(t=>e.jsxs("button",{type:"button",onClick:()=>I(t.id),"aria-current":P===t.id?"true":void 0,className:`flex flex-col items-center gap-1.5 rounded-xl border p-3 text-center transition cursor-pointer ${P===t.id?"border-accent bg-accent/10 text-accent":"border-border-primary bg-bg-secondary text-text-secondary hover:border-accent/40 hover:text-text-primary"}`,children:[e.jsx("i",{className:`${t.icon} text-base`,"aria-hidden":"true"}),e.jsx("span",{className:"text-[10px] font-bold leading-tight",children:t.label})]},t.id))}),P==="internal"&&e.jsxs("div",{className:"bg-bg-secondary border border-border-primary rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold block",children:"Internal LinkHubPage Hosting"}),e.jsxs("span",{className:"text-[10px] text-text-secondary",children:["Deploy to linkhubpage.com/p/",g||"username"]}),Ue&&e.jsx("p",{className:`text-[10px] mt-1 ${ge==="ready"?"text-emerald-300":ge==="error"?"text-amber-300":"text-text-secondary"}`,children:Ue})]}),e.jsx("button",{type:"button",onClick:ct,disabled:ge==="checking",className:"w-full sm:w-auto px-4 py-2.5 bg-bg-primary border border-border-primary hover:bg-bg-secondary rounded-xl text-xs font-bold cursor-pointer disabled:opacity-50",children:ge==="checking"?"Checking...":"Check Internal Setup"})]}),P==="zip"&&e.jsxs("div",{className:"bg-bg-secondary border border-border-primary rounded-2xl p-4",children:[e.jsx("span",{className:"text-xs font-bold block",children:"Download ZIP Package"}),e.jsx("span",{className:"text-[10px] text-text-secondary",children:"Export profile static assets to host anywhere. No connection needed. Download happens on the Publish step."})]}),P==="github"&&e.jsxs("div",{className:"bg-bg-secondary border border-border-primary rounded-2xl p-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold block",children:"Deploy to GitHub Pages"}),e.jsx("span",{className:"text-[10px] text-text-secondary",children:"Choose deployment URL mode: root site or repo subpath"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[e.jsxs("label",{className:"flex items-start gap-2 p-3 border border-border-primary rounded-xl cursor-pointer bg-bg-primary/50",children:[e.jsx("input",{type:"radio",name:"github-pages-mode",checked:ye==="subpath",onChange:()=>be("subpath"),className:"mt-0.5"}),e.jsxs("span",{className:"text-[11px] text-text-secondary",children:[e.jsx("span",{className:"text-text-primary font-semibold block",children:"Subpath mode"}),"Deploy to ",e.jsx("span",{className:"text-text-primary",children:"https://user.github.io/repo/"})]})]}),e.jsxs("label",{className:"flex items-start gap-2 p-3 border border-border-primary rounded-xl cursor-pointer bg-bg-primary/50",children:[e.jsx("input",{type:"radio",name:"github-pages-mode",checked:ye==="root",onChange:()=>be("root"),className:"mt-0.5"}),e.jsxs("span",{className:"text-[11px] text-text-secondary",children:[e.jsx("span",{className:"text-text-primary font-semibold block",children:"Root mode"}),"Deploy to ",e.jsx("span",{className:"text-text-primary",children:"https://user.github.io/"})," (no trailing repo path)"]})]})]}),ye==="subpath"?e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"text-[10px] font-bold text-text-secondary uppercase",children:"Repository Name"}),e.jsx("input",{type:"text",value:fe,onChange:t=>D(t.target.value.toLowerCase().replace(/[^a-z0-9_.-]/g,"")),placeholder:"linkhubpage-profile",className:"w-full h-9 px-3 bg-bg-primary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition"})]}):e.jsxs("p",{className:"text-[10px] text-amber-300",children:["Root mode uses repo name ",e.jsx("span",{className:"text-text-primary font-semibold",children:"<your-github-username>.github.io"}),". If it already exists, deployment updates that site."]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between",children:[ve("github_access_token")?e.jsx("button",{type:"button",onClick:ke,disabled:Y==="checking",className:"w-full sm:w-auto px-4 py-2.5 bg-bg-primary border border-border-primary hover:bg-bg-secondary rounded-xl text-xs font-bold cursor-pointer disabled:opacity-50",children:Y==="checking"?"Checking GitHub...":"Check GitHub Setup"}):e.jsx("button",{type:"button",onClick:()=>ie(),className:"w-full sm:w-auto px-4 py-2.5 bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold cursor-pointer",children:"Connect GitHub"}),me&&ce&&e.jsxs("span",{className:"text-[10px] text-text-secondary",children:["Target: ",e.jsxs("span",{className:"text-text-primary font-semibold",children:[me,"/",ce]}),ae===!0?" (exists)":ae===!1?" (will be created)":""]})]}),oe&&e.jsx("p",{className:`text-[10px] ${Y==="connected"?"text-emerald-300":Y==="error"?"text-amber-300":"text-text-secondary"}`,children:oe})]}),P==="cloudflare"&&e.jsxs("div",{className:"bg-bg-secondary border border-border-primary rounded-2xl p-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold block",children:"Cloudflare Worker Deployment"}),e.jsx("span",{className:"text-[10px] text-text-secondary",children:"Host your profile on your own Cloudflare account (like our setup, without the builder)"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[e.jsx("button",{type:"button",onClick:()=>xt(g||"custom",{...s,adminEmail:(c==null?void 0:c.email)||""}),className:"px-3 py-2 bg-bg-primary border border-border-primary hover:bg-bg-secondary rounded-xl text-xs font-bold transition cursor-pointer text-center text-text-secondary hover:text-text-primary",children:"📦 Download Worker ZIP"}),e.jsx("button",{type:"button",onClick:()=>G(t=>!t),className:`px-3 py-2 border rounded-xl text-xs font-bold transition cursor-pointer text-center ${A?"bg-accent text-white border-accent":"bg-bg-primary border-border-primary hover:bg-bg-secondary text-text-primary"}`,children:"🚀 Deploy Directly via API"})]}),A&&e.jsxs("div",{className:"pt-4 border-t border-border-primary space-y-3",children:[e.jsxs("div",{className:"rounded-xl border border-border-primary bg-bg-primary/50 p-3 space-y-2",children:[e.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wider text-text-secondary",children:"How this works"}),e.jsxs("ul",{className:"text-[10px] text-text-secondary space-y-1",children:[e.jsx("li",{children:"1. Enter your domain (or subdomain) and check it’s on Cloudflare."}),e.jsx("li",{children:"2. A window opens to connect your Cloudflare account, nothing else to configure."}),e.jsx("li",{children:"3. Once connected, go to the Publish step to deploy."})]})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"text-[10px] font-bold text-text-secondary uppercase",children:"Domain to Deploy"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"text",value:J,onChange:t=>{V(t.target.value),Se()},placeholder:"e.g. profile.yourdomain.com",className:"flex-1 h-9 px-3 bg-bg-primary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition",required:A}),e.jsx("button",{type:"button",onClick:ne,disabled:T==="checking",className:"px-3 h-9 bg-bg-primary border border-border-primary hover:bg-bg-secondary rounded-lg text-xs font-bold cursor-pointer disabled:opacity-50",children:T==="checking"?"Checking...":"Check Domain"})]}),ee&&e.jsx("p",{className:`text-[10px] ${T==="valid"?"text-emerald-300":T==="invalid"?"text-amber-300":"text-text-secondary"}`,children:ee}),T==="valid"&&te!=="connected"&&e.jsx("button",{type:"button",onClick:he,disabled:te==="connecting",className:"text-[10px] font-bold text-accent hover:underline cursor-pointer disabled:opacity-50 disabled:no-underline disabled:cursor-default",children:te==="connecting"?"Connecting to Cloudflare...":"Retry Cloudflare login"})]})]})]})]})]}):e.jsxs("div",{className:"bg-bg-secondary border border-border-primary rounded-2xl p-6 text-center",children:[e.jsx("span",{className:"text-xl block mb-2",children:"🔒 Account Required"}),e.jsx("p",{className:"text-xs text-text-secondary mb-4",children:"Please log in with Google to access hosting and deployment options."}),e.jsx("button",{onClick:k,className:"px-4 py-2 bg-accent/15 border border-accent/20 rounded-lg text-xs font-bold hover:bg-accent/30 cursor-pointer",children:"Login with Google"})]})}),x==="publish"&&e.jsx("div",{className:"space-y-6",children:c?e.jsxs("div",{className:"bg-bg-secondary border border-border-primary rounded-2xl p-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold block",children:"Ready to Publish"}),e.jsxs("span",{className:"text-[10px] text-text-secondary",children:["Target: ",e.jsx("span",{className:"text-text-primary font-semibold",children:(We=Ve.find(t=>t.id===P))==null?void 0:We.label})]})]}),P==="internal"&&e.jsx("button",{type:"button",onClick:dt,disabled:!v||W==="loading"||ge!=="ready",className:"w-full px-4 py-2.5 bg-accent hover:bg-accent/80 disabled:opacity-50 text-white rounded-xl text-xs font-bold cursor-pointer",children:W==="loading"?"Publishing...":"Publish Profile"}),P==="zip"&&e.jsx("button",{type:"button",onClick:()=>{const t={...s,adminEmail:(c==null?void 0:c.email)||""};bt(g||"custom",t),E(t,{target:"zip"})},className:"w-full px-4 py-2.5 bg-accent hover:bg-accent/80 text-white rounded-xl text-xs font-bold cursor-pointer",children:"Download ZIP"}),P==="github"&&e.jsx("button",{type:"button",onClick:Re,disabled:N==="loading"||Y!=="connected",className:"w-full px-4 py-2.5 bg-accent hover:bg-accent/80 disabled:opacity-50 text-white rounded-xl text-xs font-bold cursor-pointer",children:N==="loading"?"Publishing...":"Deploy to GitHub"}),P==="cloudflare"&&e.jsx("button",{type:"button",onClick:le,disabled:N==="loading"||te!=="connected",className:"w-full px-4 py-2.5 bg-accent hover:bg-accent/80 disabled:opacity-50 text-white rounded-xl text-xs font-bold cursor-pointer",children:N==="loading"?"Publishing...":"Start Cloudflare Deployment"})]}):e.jsxs("div",{className:"bg-bg-secondary border border-border-primary rounded-2xl p-6 text-center",children:[e.jsx("span",{className:"text-xl block mb-2",children:"🔒 Account Required"}),e.jsx("p",{className:"text-xs text-text-secondary mb-4",children:"Please log in with Google to publish."}),e.jsx("button",{onClick:k,className:"px-4 py-2 bg-accent/15 border border-accent/20 rounded-lg text-xs font-bold hover:bg-accent/30 cursor-pointer",children:"Login with Google"})]})}),z&&(()=>{const t=[...z.matchAll(/https?:\/\/\S+/g)].map(d=>d[0].replace(/[.,;]+$/,"")),h=t.reduce((d,U)=>d.replace(U,""),z).replace(/\s{2,}/g," ").trim();return e.jsxs("div",{className:"p-3 bg-bg-secondary border border-border-primary rounded-xl text-xs text-center font-semibold space-y-2",children:[h&&e.jsx("div",{children:h}),t.map(d=>e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsx("a",{href:d,target:"_blank",rel:"noopener noreferrer",className:"text-accent underline break-all font-normal",children:d}),e.jsx("button",{type:"button",onClick:()=>{navigator.clipboard.writeText(d),m(d),setTimeout(()=>m(""),2e3)},className:"shrink-0 px-2 py-1 border border-border-primary hover:border-accent rounded-lg text-[10px] font-bold text-text-secondary hover:text-text-primary transition cursor-pointer",children:Z===d?"✓ Copied":"📋 Copy"})]},d))]})})(),e.jsxs("div",{className:"flex items-center justify-between gap-3 pt-2",children:[e.jsx("button",{type:"button",onClick:()=>{const t=se.findIndex(h=>h.id===x);t>0&&f(se[t-1].id)},disabled:se.findIndex(t=>t.id===x)===0,className:"px-4 py-2 rounded-xl text-xs font-bold border border-border-primary bg-bg-secondary hover:border-accent hover:text-accent transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed",children:"Back"}),e.jsx("button",{type:"button",onClick:()=>{const t=se.findIndex(h=>h.id===x);t<se.length-1&&f(se[t+1].id)},disabled:x===se[se.length-1].id||x==="deploy"&&!$e,className:"px-4 py-2 rounded-xl text-xs font-bold bg-accent hover:bg-accent/80 text-white transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed",children:"Next"})]})]})]}),e.jsxs("div",{className:"w-full md:w-1/2 bg-zinc-950 flex items-center justify-center p-6 min-h-[500px] md:min-h-screen relative",children:[e.jsx(mt,{}),e.jsxs("div",{"data-theme":s.defaultTheme,className:"w-[340px] h-[680px] bg-bg-primary text-text-primary border-[8px] border-zinc-800 rounded-[48px] shadow-2xl relative overflow-y-auto overflow-x-hidden flex flex-col p-4 scrollbar-none z-10 transition-colors duration-300",children:[e.jsxs("div",{className:"w-32 h-5 bg-zinc-800 rounded-b-2xl absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1.5 z-20",children:[e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-zinc-900"}),e.jsx("div",{className:"w-8 h-1 rounded bg-zinc-900"})]}),e.jsx("div",{className:"flex-1 mt-6 flex flex-col h-full overflow-y-auto",children:e.jsx(gt,{isPreview:!0,config:s})})]})]})]})};export{Et as Builder};
